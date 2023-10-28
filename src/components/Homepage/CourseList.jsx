import React from "react";
import CourseCard from "./CourseCard";

function CourseList() {
  const courses = [
    {
      id: 1,
      title: "Database Management System",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, enim dicta laborum ex, quas velit autem optio ut cum sapiente incidunt tenetur atque, saepe illo eius dolor quidem provident sit fugiat mollitia! Alias corporis quo quasi distinctio natus laborum debitis, consequuntur veniam ad maiores fugit, modi cupiditate, mollitia minima quibusdam pariatur magni doloremque? Perferendis, est modi, vel porro illo libero consequuntur officia perspiciatis quidem expedita id reprehenderit iusto mollitia. Ipsum reprehenderit vero quaerat earum quasi beatae velit error dolor quam! Perspiciatis at quasi distinctio laborum officiis alias esse nisi odit omnis ab! Cupiditate tenetur fugiat modi aperiam magni impedit, neque nisi, maiores cumque sunt, veniam nobis porro suscipit! Nostrum qui porro, eaque saepe ullam quod laborum! Sequi ea nostrum eligendi possimus iusto nam commodi ullam expedita voluptatibus laudantium earum deleniti laboriosam quod dicta dolorum quasi, nisi dolores aperiam consectetur iure quam. Dicta, ea provident. Vel voluptas esse, facilis assumenda animi molestias quaerat libero nesciunt iure quo modi accusantium nostrum dignissimos ullam cum. Doloremque vero placeat quibusdam repellat, expedita facilis est rem minima. Ea, vel distinctio, vero officia nemo adipisci, nobis consectetur porro provident nulla assumenda alias sunt corrupti architecto saepe? Deleniti, dolorem cumque nemo ipsa eos ipsum vel dicta autem!",
    },
    {
      id: 1,
      title: "Database Management System",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, enim dicta laborum ex, quas velit autem optio ut cum sapiente incidunt tenetur atque, saepe illo eius dolor quidem provident sit fugiat mollitia! Alias corporis quo quasi distinctio natus laborum debitis, consequuntur veniam ad maiores fugit, modi cupiditate, mollitia minima quibusdam pariatur magni doloremque? Perferendis, est modi, vel porro illo libero consequuntur officia perspiciatis quidem expedita id reprehenderit iusto mollitia. Ipsum reprehenderit vero quaerat earum quasi beatae velit error dolor quam! Perspiciatis at quasi distinctio laborum officiis alias esse nisi odit omnis ab! Cupiditate tenetur fugiat modi aperiam magni impedit, neque nisi, maiores cumque sunt, veniam nobis porro suscipit! Nostrum qui porro, eaque saepe ullam quod laborum! Sequi ea nostrum eligendi possimus iusto nam commodi ullam expedita voluptatibus laudantium earum deleniti laboriosam quod dicta dolorum quasi, nisi dolores aperiam consectetur iure quam. Dicta, ea provident. Vel voluptas esse, facilis assumenda animi molestias quaerat libero nesciunt iure quo modi accusantium nostrum dignissimos ullam cum. Doloremque vero placeat quibusdam repellat, expedita facilis est rem minima. Ea, vel distinctio, vero officia nemo adipisci, nobis consectetur porro provident nulla assumenda alias sunt corrupti architecto saepe? Deleniti, dolorem cumque nemo ipsa eos ipsum vel dicta autem!",
    },
    {
      id: 1,
      title: "Database Management System",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, enim dicta laborum ex, quas velit autem optio ut cum sapiente incidunt tenetur atque, saepe illo eius dolor quidem provident sit fugiat mollitia! Alias corporis quo quasi distinctio natus laborum debitis, consequuntur veniam ad maiores fugit, modi cupiditate, mollitia minima quibusdam pariatur magni doloremque? Perferendis, est modi, vel porro illo libero consequuntur officia perspiciatis quidem expedita id reprehenderit iusto mollitia. Ipsum reprehenderit vero quaerat earum quasi beatae velit error dolor quam! Perspiciatis at quasi distinctio laborum officiis alias esse nisi odit omnis ab! Cupiditate tenetur fugiat modi aperiam magni impedit, neque nisi, maiores cumque sunt, veniam nobis porro suscipit! Nostrum qui porro, eaque saepe ullam quod laborum! Sequi ea nostrum eligendi possimus iusto nam commodi ullam expedita voluptatibus laudantium earum deleniti laboriosam quod dicta dolorum quasi, nisi dolores aperiam consectetur iure quam. Dicta, ea provident. Vel voluptas esse, facilis assumenda animi molestias quaerat libero nesciunt iure quo modi accusantium nostrum dignissimos ullam cum. Doloremque vero placeat quibusdam repellat, expedita facilis est rem minima. Ea, vel distinctio, vero officia nemo adipisci, nobis consectetur porro provident nulla assumenda alias sunt corrupti architecto saepe? Deleniti, dolorem cumque nemo ipsa eos ipsum vel dicta autem!",
    },
    {
      id: 1,
      title: "Database Management System",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, enim dicta laborum ex, quas velit autem optio ut cum sapiente incidunt tenetur atque, saepe illo eius dolor quidem provident sit fugiat mollitia! Alias corporis quo quasi distinctio natus laborum debitis, consequuntur veniam ad maiores fugit, modi cupiditate, mollitia minima quibusdam pariatur magni doloremque? Perferendis, est modi, vel porro illo libero consequuntur officia perspiciatis quidem expedita id reprehenderit iusto mollitia. Ipsum reprehenderit vero quaerat earum quasi beatae velit error dolor quam! Perspiciatis at quasi distinctio laborum officiis alias esse nisi odit omnis ab! Cupiditate tenetur fugiat modi aperiam magni impedit, neque nisi, maiores cumque sunt, veniam nobis porro suscipit! Nostrum qui porro, eaque saepe ullam quod laborum! Sequi ea nostrum eligendi possimus iusto nam commodi ullam expedita voluptatibus laudantium earum deleniti laboriosam quod dicta dolorum quasi, nisi dolores aperiam consectetur iure quam. Dicta, ea provident. Vel voluptas esse, facilis assumenda animi molestias quaerat libero nesciunt iure quo modi accusantium nostrum dignissimos ullam cum. Doloremque vero placeat quibusdam repellat, expedita facilis est rem minima. Ea, vel distinctio, vero officia nemo adipisci, nobis consectetur porro provident nulla assumenda alias sunt corrupti architecto saepe? Deleniti, dolorem cumque nemo ipsa eos ipsum vel dicta autem!",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>
    </>
  );
}

export default CourseList;
