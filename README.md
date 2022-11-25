# Development

## Describe the goal of the application and value to a user

Since this application contains course data and an aggregator for the average number of hours required for the course (as given by [The Critical Review](https://thecriticalreview.org)), the goal of the application is to help users decide what courses to take and how much of a workload is necessary for those courses. This is valuable since it aggregates data from The Critical Review, which [CAB](https://cab.brown.edu) cannot do.

## Link to your deployed web application running online

The project can be found at https://shyworm130.github.io.

## Explain the organization of your Components, and the props and state related to them

The main two components of the site are `CartItem` and `CourseItem`. Other components serve to aid in filtering/sorting functionality, such as `CheckFilter`, `RadioFilter`, and `RadioSort`.

The application keeps track of three states: the current cart, the current items displayed in the "Courses" section, and the current filters/sort applied.

The filtering/sorting components are passed the name of the filter/sort category, the current filters/sort applied, and the state setters for the displayed courses and the current filters/sort as props.

The `CourseItem` component has props for setting the cart (which is done via the "Add to cart" button on each element) and the data for the course, which is represented as:
```
interface CourseData {
  name: string;
  professor: string;
  code: string;
  dept: string;
  number: number;

  prof_rating: number;
  course_rating: number;
  avg_hours: number;
}
```

The `CartItem` component has the same props as the `CourseItem` component, but displayes the information differently and adds a "Remove from cart" button instead. 


## Note the usability principles considered for layout and hierarchy

Each category has a clearly labeled header ("Filters", "Sort", etc.) which allows the hierarchy of the site to be obvious. Additionally, each course and cart item is encased in a colored box with a border, allowing the items to be visually grouped into distinct categories according to Gestalt principles. Additionally, the filters/sort/cart are all shown alongside the displayed courses so that all functionality is visable at all times.
