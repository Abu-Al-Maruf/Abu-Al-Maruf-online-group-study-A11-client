Online Group Study Web Application (Client-Side)
Welcome to the Online Group Study Web Application! This web app allows users to create, manage, and grade assignments while collaborating with their friends. Every registered user can create assignments and grade others' submissions, making it a perfect platform for online group study sessions. This project leverages Firebase for authentication and React for a dynamic, responsive user interface.

Live Demo:

Features

1. User Authentication
   Firebase Authentication is used for registering and logging in users with email/password and social logins (Google, GitHub).
   JWT token-based authentication is implemented for securing private routes.
2. Assignment Creation & Management
   Any registered user can create assignments with a title, description, thumbnail, marks, difficulty level (easy, medium, hard), and due date.
   Users can update their assignments and delete the assignments they created, with proper validation to ensure security.
3. Assignment Submission
   Users can submit assignments by uploading a PDF link and adding a quick note. Submitted assignments are automatically marked as "pending" until graded.
4. Marking & Feedback
   Users can grade assignments submitted by others and provide feedback. The assignment status changes from "pending" to "completed" once graded.
5. Responsive Design
   The entire web application is fully responsive, adapting smoothly to mobile, tablet, and desktop screen sizes for an optimal user experience across all devices.
