import "./App.css"
import { useState } from "react"
import data from "./assets/courses.json"
import { CourseData, departments, FilterSort, levels, fs, sorts, noFilSort } from "./assets/Common"
import CartItem from "./components/CartItem"
import CourseItem from "./components/CourseItem"
import RadioFilter from "./components/RadioFilter"
import CheckFilter from "./components/CheckFilter"
import RadioSort from "./components/RadioSort"

function calcSum(cart: CourseData[]): string {
  let sum: number = 0;
  for (const course of cart) {
    sum += course.avg_hours;
  }
  return sum.toFixed(2);
}

export default function App() {
  const [cart, setCart] = useState<CourseData[]>([])
  const [display, setDisplay] = useState<CourseData[]>(fs(data, noFilSort))
  const [filSort, setFilSort] = useState<FilterSort>(noFilSort)

  return <main>
      <h1>Courses @ Brown</h1>
      <div>
      
      <aside>
        <h2>Filter</h2>
        <hr />
        <div className="filter-wrapper">
          <div className="filter-group">
            <h3>Department</h3>
            {
              departments.map((item: string) =>
                <RadioFilter name={item} filSort={filSort} setFilSort={setFilSort} setDisplay={setDisplay} />
              )
            }
          </div>
          <div className="filter-group">
            <h3>Level</h3>
            {
              levels.map((item: string) =>
                <CheckFilter name={item} filSort={filSort} setFilSort={setFilSort} setDisplay={setDisplay} />
              )
            }
          </div>
        </div>

        <h2>Sort</h2>
        <hr />
        {
          sorts.map((item: string) =>
            <RadioSort name={item} filSort={filSort} setFilSort={setFilSort} setDisplay={setDisplay} />
          )
        }

        <h2>Cart</h2>
        <hr />
        <ul>
          { cart.map((item: CourseData) =>
            <CartItem course={item} cart={cart} setCart={setCart} />
            )
          }
        </ul>
        <p>Total Average Hours (sum): {calcSum(cart)}</p>
      </aside>

      <article>
        <h2>Courses</h2>
        <hr />
        <ul>
          { // filter and sort data based on filSort
            display.map((item: CourseData) =>
              <CourseItem course={item} cart={cart} setCart={setCart} />
            )
          }
        </ul>
        </article>

      </div>
    </main>
}
