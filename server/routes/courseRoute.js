import express, { Router } from "express";
import { getPublishedCourse, purchaseCourse, purchaseCourseValidate } from "../controllers/courseController.js";
const router = express.Router();

router.route("/published-courses").get(getPublishedCourse);
router.route("/purchase").post(purchaseCourse);
router.route("/purchase/validate").post(purchaseCourseValidate);

export default router;