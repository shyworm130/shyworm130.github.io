import { FilterSortProps, FilterSort, fs } from "../assets/Common";
import data from '../assets/courses.json';

export default function CheckFilter(props: FilterSortProps) {

  function handleChange(event: React.FormEvent<HTMLInputElement>): void {
    const newFilSort: FilterSort = props.filSort;
    const inp: HTMLInputElement = event.target as HTMLInputElement;

    if (inp.checked) {
      newFilSort.filterLevel.push(inp.value);
    } else {
      const index: number = newFilSort.filterLevel.indexOf(inp.value);
      console.log(index, inp.value, newFilSort.filterLevel)
      if (index !== -1) newFilSort.filterLevel.splice(index, 1);
    }

    props.setFilSort(newFilSort);
    props.setDisplay(fs(data, newFilSort));
  }

  return <div className="radio-wrapper">
    <input type="checkbox" name="level" id={props.name} value={props.name} onChange={handleChange}/>
    <label htmlFor={props.name}>{props.name}</label>
  </div>
}
