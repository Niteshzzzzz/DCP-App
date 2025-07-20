const courses = [
  {
    "courseTitle": "JavaScript Essentials",
    "subTitle": "Master the language of the web",
    "description": "A beginner-friendly course covering JS fundamentals, syntax, and DOM manipulation.",
    "category": "Web Development",
    "courseLevel": "Beginner",
    "coursePrice": 0,
    "courseThumbnail": "https://img-c.udemycdn.com/course/750x422/1468694_d595_2.jpg",
    "isPublished": true
  },
  {
    "courseTitle": "Node.js Crash Course",
    "subTitle": "Server-side JavaScript like a pro",
    "description": "Learn to build scalable backend services using Node.js and Express.",
    "category": "Backend",
    "courseLevel": "Medium",
    "coursePrice": 299,
    "courseThumbnail": "https://i.ytimg.com/vi/32M1al-Y6Ag/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAvXzMNEi0c-4UeP9PUuGvruhZJAw",
    "isPublished": true
  },
  {
    "courseTitle": "Modern CSS Mastery",
    "subTitle": "Responsive design with Flexbox & Grid",
    "description": "Explore modern CSS techniques including Flexbox, Grid, and animations.",
    "category": "Frontend",
    "courseLevel": "Medium",
    "coursePrice": 149,
    "courseThumbnail": "https://uploads.sitepoint.com/wp-content/uploads/2020/03/1583198333master-modern-css.jpg",
    "isPublished": true
  },
  {
    "courseTitle": "React for Beginners",
    "subTitle": "Build dynamic UIs with React",
    "description": "Hands-on introduction to components, props, state, and hooks.",
    "category": "Frontend",
    "courseLevel": "Beginner",
    "coursePrice": 199,
    "courseThumbnail": "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    "isPublished": true
  },
  {
    "courseTitle": "MongoDB for Web Developers",
    "subTitle": "NoSQL for modern apps",
    "description": "Understand MongoDB data modeling, queries, and Mongoose integration.",
    "category": "Backend",
    "courseLevel": "Medium",
    "coursePrice": 179,
    "courseThumbnail": "https://cdn.appsrhino.com/new-website-2022/strapi/Mongo_Db_developer_Everything_you_must_know_2147e7c626.jpg",
    "isPublished": false
  },
  {
    "courseTitle": "Full Stack MERN Bootcamp",
    "subTitle": "Build real-world apps with Mongo, Express, React, and Node",
    "description": "Project-based full stack course that takes you from frontend to backend.",
    "category": "Web Development",
    "courseLevel": "Advance",
    "coursePrice": 399,
    "courseThumbnail": "https://nexoninterns.com/wp-content/uploads/2024/12/MVM1-1-1.png",
    "isPublished": true
  },
  {
    "courseTitle": "Next.js in Depth",
    "subTitle": "Build SEO-friendly React apps",
    "description": "Dive into server-side rendering, file-based routing, and API routes.",
    "category": "Frontend",
    "courseLevel": "Advance",
    "coursePrice": 299,
    "courseThumbnail": "https://api.stafilo.app/upload/blog/next.png",
    "isPublished": true
  },
  {
    "courseTitle": "TypeScript with React",
    "subTitle": "Strongly-typed UI development",
    "description": "Leverage TypeScript to write safer, scalable React code.",
    "category": "Frontend",
    "courseLevel": "Medium",
    "coursePrice": 249,
    "courseThumbnail": "https://www.tatvasoft.com/blog/wp-content/uploads/2024/04/How-to-Use-TypeScript-with-React_-768x389.jpg",
    "isPublished": false
  },
  {
    "courseTitle": "RESTful APIs with Express",
    "subTitle": "Design, build, and test robust APIs",
    "description": "Learn how to build REST APIs with authentication and validation.",
    "category": "Backend",
    "courseLevel": "Medium",
    "coursePrice": 229,
    "courseThumbnail": "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/10227551/og_image/optimized/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
    "isPublished": true
  },
  {
    "courseTitle": "Git & GitHub Essentials",
    "subTitle": "Version control like a pro",
    "description": "Master Git commands and collaborative workflows with GitHub.",
    "category": "Web Development",
    "courseLevel": "Beginner",
    "coursePrice": 99,
    "courseThumbnail": "https://media.licdn.com/dms/image/v2/D4D12AQEpU-5F7NzU6A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1690213777897?e=2147483647&v=beta&t=hLTJNhOPM4EJFXyF9laI0NyTDAY-WA8oigAh4ezyvPg",
    "isPublished": true
  },
  {
    "courseTitle": "JavaScript Design Patterns",
    "subTitle": "Write cleaner, scalable code",
    "description": "Explore creational, structural, and behavioral patterns in JS.",
    "category": "Web Development",
    "courseLevel": "Advance",
    "coursePrice": 279,
    "courseThumbnail": "https://uploads.toptal.io/blog/image/125783/toptal-blog-image-1522333595770-14ba14a2f6099482fa9189f8764dd5ad.png",
    "isPublished": false
  },
  {
    "courseTitle": "Responsive Web Design",
    "subTitle": "Build mobile-first websites",
    "description": "Use media queries, fluid layouts, and best practices for responsiveness.",
    "category": "Frontend",
    "courseLevel": "Beginner",
    "coursePrice": 149,
    "courseThumbnail": "https://www.searchenginejournal.com/wp-content/uploads/2021/10/responsive-web-design-1-61f01c4b64c5f-sej.png",
    "isPublished": true
  },
  {
    "courseTitle": "Web Security Basics",
    "subTitle": "Protect your apps",
    "description": "Understand XSS, CSRF, HTTPS, JWT, and best practices for securing web apps.",
    "category": "Web Development",
    "courseLevel": "Medium",
    "coursePrice": 199,
    "courseThumbnail": "https://cdn.invicti.com/app/uploads/2022/06/28122528/getting-started-web-application-security.jpg",
    "isPublished": true
  },
  {
    "courseTitle": "GraphQL with Node.js",
    "subTitle": "Query your API with power",
    "description": "Build efficient GraphQL APIs with Apollo Server and Node.js.",
    "category": "Backend",
    "courseLevel": "Advance",
    "coursePrice": 299,
    "courseThumbnail": "https://miro.medium.com/v2/resize:fit:1200/1*ENMJyVnsHHu9ksNkO1NkDg.jpeg",
    "isPublished": false
  },
  {
    "courseTitle": "Frontend Testing with Jest",
    "subTitle": "Write reliable React tests",
    "description": "Use Jest and React Testing Library to test components and hooks.",
    "category": "Frontend",
    "courseLevel": "Advance",
    "coursePrice": 199,
    "courseThumbnail": "https://miro.medium.com/v2/resize:fit:796/1*yRX97DiEyDcMMvsYYeg3OQ.png",
    "isPublished": true
  }
]

export default courses