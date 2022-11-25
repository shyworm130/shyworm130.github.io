import { FilterSort, FilterSortProps, fs, defualtSort, CourseData } from "../assets/Common";
import data from '../assets/courses.json';

function sortCR(first: CourseData, second: CourseData): number {
  // high to low
  return second.course_rating - first.course_rating;
}

function sortPR(first: CourseData, second: CourseData): number {
  // high to low
  return second.prof_rating - first.prof_rating;
}

function sortAH(first: CourseData, second: CourseData): number {
  // low to high
  return first.avg_hours - second.avg_hours;
}

export default function RadioSort(props: FilterSortProps) {

  function handleChange(event: React.FormEvent<HTMLInputElement>): void {
    const newFilSort: FilterSort = props.filSort;

    switch (props.name) {
      case "Course Rating":
        newFilSort.sort = sortCR;
        break;
      case "Professor Rating":
        newFilSort.sort = sortPR;
        break;
      case "Average Hours":
        newFilSort.sort = sortAH;
        break;
      default: // includes by course number
        newFilSort.sort = defualtSort;
    }

    props.setFilSort(newFilSort);
    props.setDisplay(fs(data, newFilSort));
  }

  return <div className="radio-wrapper">
    <input type="radio" name="sort" id={props.name} value={props.name} onChange={handleChange}/>
    <label htmlFor={props.name}>{props.name}</label>
  </div>
}
