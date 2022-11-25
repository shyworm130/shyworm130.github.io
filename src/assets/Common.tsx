
// Types
export interface CourseData {
  name: string;
  professor: string;
  code: string;
  dept: string;
  number: number;

  prof_rating: number;
  course_rating: number;
  avg_hours: number;
}

export interface CourseDataSetCart {
  course: CourseData;
  cart: CourseData[];
  setCart(arg0: CourseData[]): void; 
}

export interface FilterSort {
  filterDept: FilterFunc;
  filterLevel: string[];
  sort: SortFunc;
}

export interface FilterSortProps {
  name: string;
  filSort: FilterSort;
  setFilSort(arg0: FilterSort): void;
  setDisplay(arg0: CourseData[]): void;
}

export type FilterFunc = (item: CourseData) => boolean;
export type SortFunc = (first: CourseData, second: CourseData) => number;


// Constants
export const departments: string[] = ["All", "CSCI", "CLPS", "HIST", "ENGL", "ECON", "TAPS", "ENGN"];
export const levels: string[] = ["Lower-level", "Upper-level", "Graduate"];
export const sorts: string[] = ["Course Number", "Course Rating", "Professor Rating", "Average Hours"];
export const noFilSort: FilterSort = {
  filterDept: (item: CourseData) => true,
  filterLevel: [],
  sort: defualtSort
};
export function defualtSort(first: CourseData, second: CourseData): number {
  return first.number - second.number;
}


// Helpers
function getLevelFilter(name: string): FilterFunc {
  switch (name) {
    case "Lower-level":
      return (item: CourseData) => item.number < 1000;
    case "Upper-level":
      return (item: CourseData) => (item.number < 2000) && (item.number >= 1000);
    case "Graduate":
      return (item: CourseData) => item.number >= 2000;
    default:
      return (item: CourseData) => true;
  }
}

export function fs(data: CourseData[], fs: FilterSort): CourseData[] {

  function matchAny(course: CourseData): boolean {
    if (fs.filterLevel.length === 0) return true;
    let ret: boolean = false;
    for (const level of fs.filterLevel) {
      ret = ret || getLevelFilter(level)(course);
    }
    return ret;
  }

  data = data.filter(fs.filterDept).filter(matchAny)
  if (fs.sort !== null) data.sort(fs.sort);
  return data;
}
