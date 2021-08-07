import React, { useState } from "react";
import "./TrailLessonGrade1to3.css";
import * as Routes from "../../../constants/Routes";
import { useLocation } from "react-router-dom";
function TrailLessonGrade1to3(props) {
  let currentRoute = useLocation();
  // const [isCurrentOnTrialLesson, setIsCurrentOnTrialLesson] = useState(false);
  console.log(props);
  if (currentRoute.pathname === Routes.TRIAL_LESSON) {
    console.log("trial lesson is opened");
  }

  return <div className="trail-lesson-grade-1to3">Inside Trail Lesson</div>;
}

export default TrailLessonGrade1to3;
