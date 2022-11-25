import { CourseData, CourseDataSetCart } from '../assets/Common'

export default function BakeryItem(props: CourseDataSetCart) {
  const course: CourseData = props.course;

  function handleAdd() {
    if (!props.cart.includes(course)) {
      props.setCart([...props.cart, course])
    }
  }

  return <li>
    <h3>{course.code}: {course.name}</h3>
    <img src={process.env.PUBLIC_URL + "/images/" + course.code + ".jpg"} alt="" />
    <p>Professor {course.professor}</p>
    <p>Average Hours: {course.avg_hours}</p>
    <div className="rating-wrapper">
      <p>Professor Rating: {course.prof_rating} </p>
      <progress value={course.prof_rating} max="5" />
    </div>
    <div className="rating-wrapper">
      <p>Course Rating: {course.course_rating}</p>
      <progress value={course.course_rating} max="5" />
    </div>
    <button onClick={handleAdd}>Add to cart</button>
  </li>
}
