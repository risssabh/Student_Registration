document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form and table body
    const form = document.getElementById("studentForm");
    const tableBody = document.getElementById("studentTableBody");
    
    // Retrieve existing student records from local storage, or initialize an empty array
    let students = JSON.parse(localStorage.getItem("students")) || [];

    /**
     * Saves the students array to local storage to persist data across page refreshes.
     */
    function saveToLocalStorage() {
        localStorage.setItem("students", JSON.stringify(students));
    }

    /**
     * Renders the student table by dynamically adding rows from the students array.
     */
    function renderTable() {
        tableBody.innerHTML = ""; // Clear existing table content
        students.forEach((student, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.id}</td>
                <td>${student.email}</td>
                <td>${student.contact}</td>
                <td>
                    <button onclick="editStudent(${index})">Edit</button>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    /**
     * Validates input fields before adding a student.
     * @param {string} name - Student's name (only letters and spaces allowed)
     * @param {string} id - Student's ID (only numbers allowed)
     * @param {string} email - Student's email (valid email format)
     * @param {string} contact - Student's contact number (only numbers allowed)
     * @returns {boolean} - Returns true if all inputs are valid, otherwise false
     */
    function validateInputs(name, id, email, contact) {
        const nameRegex = /^[A-Za-z ]+$/; // Allows only letters and spaces
        const idRegex = /^[0-9]+$/; // Allows only numbers
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format
        const contactRegex = /^[0-9]+$/; // Allows only numbers

        return nameRegex.test(name) && idRegex.test(id) && emailRegex.test(email) && contactRegex.test(contact);
    }

    /**
     * Handles the form submission event to add a new student.
     */
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        
        // Get form input values
        const name = document.getElementById("studentName").value.trim();
        const id = document.getElementById("studentID").value.trim();
        const email = document.getElementById("email").value.trim();
        const contact = document.getElementById("contactNo").value.trim();

        // Validate inputs
        if (!validateInputs(name, id, email, contact)) {
            alert("Please enter valid inputs.");
            return;
        }
        
        // Add new student to the array
        students.push({ name, id, email, contact });
        saveToLocalStorage(); // Save updated list to local storage
        renderTable(); // Refresh the table
        form.reset(); // Clear form fields
    });

    /**
     * Edits an existing student record.
     * @param {number} index - Index of the student in the array
     */
    window.editStudent = function (index) {
        const student = students[index];
        
        // Pre-fill form fields with existing student data
        document.getElementById("studentName").value = student.name;
        document.getElementById("studentID").value = student.id;
        document.getElementById("email").value = student.email;
        document.getElementById("contactNo").value = student.contact;
        
        // Remove the student from the array to update later
        students.splice(index, 1);
        saveToLocalStorage(); // Save updated list
        renderTable(); // Refresh the table
    };

    /**
     * Deletes a student record after confirmation.
     * @param {number} index - Index of the student in the array
     */
    window.deleteStudent = function (index) {
        if (confirm("Are you sure you want to delete this record?")) {
            students.splice(index, 1); // Remove student from array
            saveToLocalStorage(); // Save updated list
            renderTable(); // Refresh the table
        }
    };

    // Initial rendering of the student table
    renderTable();
});
