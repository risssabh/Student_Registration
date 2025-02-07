# Student Registration System

## Overview
This is a simple web-based Student Registration System that allows users to register students, edit their details, delete records, and view registered students. The data is stored in the browser's local storage, ensuring that records persist even after a page refresh.

## Features
- Register new students with Name, ID, Email, and Contact Number.
- Edit existing student records.
- Delete student records.
- View registered students on a separate page.
- Input validation to ensure correct data entry.
- Data persistence using local storage.
- Modern UI with responsive design and animations.

## Technologies Used
- **HTML** for structure
- **CSS** for styling and animations
- **JavaScript** for dynamic functionality and data management

## Installation and Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/student-registration-system.git
   ```
2. Navigate to the project folder:
   ```sh
   cd student-registration-system
   ```
3. Open `index.html` in your web browser.

## File Structure
```
student-registration-system/
│-- index.html        # Main page with the registration form
│-- students.html     # Page to view registered students
│-- style.css         # Styles for the web pages
│-- script.js         # JavaScript for form handling and local storage
│-- README.md         # Project documentation
```

## How It Works
1. **Register a Student**
   - Fill in the student's name, ID, email, and contact number.
   - Click "Register" to add the student to the list.
2. **Edit a Student**
   - Click "Edit" next to a student's record to modify their details.
3. **Delete a Student**
   - Click "Delete" to remove a student from the records.
4. **View Students**
   - Navigate to the `students.html` page to view the list of registered students.

## Validation Rules
- Student Name: Only alphabetic characters and spaces allowed.
- Student ID: Must be a number.
- Email: Must be in a valid email format.
- Contact Number: Only numeric values allowed.
- Empty fields are not allowed.

