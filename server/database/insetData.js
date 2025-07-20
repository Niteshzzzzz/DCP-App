import db from './db.js'
import courses from './data.js'
import { Course } from '../models/courseModel.js';
db()

const seedCourses = async () => {
  try {
    await Course.deleteMany(); // Optional: clears previous data
    await Course.insertMany(courses);
    console.log('✅ Courses inserted successfully!');
  } catch (error) {
    console.error('❌ Error inserting courses:', error);
  } 
};

seedCourses();