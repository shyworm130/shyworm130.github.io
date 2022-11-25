import { CourseData, FilterFunc, FilterSortProps, FilterSort, fs } from "../assets/Common";
import data from '../assets/courses.json';

function getDeptFilter(name: string): FilterFunc {
  if (name === "All") {
    return (item: CourseData) => true;
  } else {
    return (item: CourseData) => { return item.dept === name };
  }
}

export default function RadioFilter(props: FilterSortProps) {

  function handleChange(event: React.FormEvent<HTMLInputElement>): void {
    const newFilSort: FilterSort = props.filSort;
    newFilSort.filterDept = getDeptFilter(props.name);

    props.setFilSort(newFilSort);
    props.setDisplay(fs(data, newFilSort));
  }

  return <div className="radio-wrapper">
    <input type="radio" name="dept" id={props.name} value={props.name} onChange={handleChange} />
    <label htmlFor={props.name}>{props.name}</label>
  </div>
}
