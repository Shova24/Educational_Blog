import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

function CourseCard({ course }) {
  return (
    <Card>
      <h2 className="text-lg font-bold">{course.title}</h2>
      <p>{course.des.substring(0, 80) + "..."}</p>
      <div className="flex justify-end mt-2">
        <Button>Details</Button>
      </div>
    </Card>
  );
}

export default CourseCard;
