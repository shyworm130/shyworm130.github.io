import { CourseData, CourseDataSetCart } from "../assets/Common";

export default function CartItem(props: CourseDataSetCart) {
  const course: CourseData = props.course;

  function handleDel() {
    props.setCart(props.cart.filter(function(value){return value !== course}));
  }

  return <li>
    <p>{course.name} (with {course.professor})</p>
    <button onClick={handleDel}>Remove from cart</button>
  </li>
}