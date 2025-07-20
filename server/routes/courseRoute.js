import express, { Router } from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getPublishedCourse, purchaseCourse, purchaseCourseValidate } from "../controllers/courseController.js";
const router = express.Router();

router.route("/published-courses").get(getPublishedCourse);
router.route("/purchase").post(isAuthenticated, purchaseCourse);
router.route("/purchase/validate").post(isAuthenticated, purchaseCourseValidate);

export default router;