# The CRUD App
[Author : Shreyash Srivastva](https://www.github.com/shreyazh)<br><br>
This is a minimalist CRUD (Create, Read, Update, Delete) web application that allows users to add, view, update, and delete user data (Name, Age, Gender, and Email). The app is built using **HTML**, **CSS**, and **JavaScript** with **localStorage** as the data storage solution.

## Features
- **Create**: Add new user data (Name, Age, Gender, Email).
- **Read**: View a list of all users with the option to edit or delete each entry.
- **Update**: Edit any user's data.
- **Delete**: Remove users from the list.

## Technologies Used
- **HTML**: Structure of the app.
- **CSS**: Minimalist design for a clean and aesthetically pleasing user interface.
- **JavaScript**: Logic for handling the CRUD operations and localStorage.
- **localStorage**: Used to persist data between sessions (no server or database required).

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shreyazh/CRUD-App/
   ```

2. **Navigate to the project directory**:
   ```bash
   cd crud-app
   ```

3. **Open the `index.html` file** in your browser:
   - Simply open the `index.html` file in your browser to start using the app.

## Usage

1. **Adding a New User**:
   - Open the app in your browser.
   - Fill in the form with the user's name, age, gender, and email, then click "Add User".
   - The user will be saved in **localStorage** and can be viewed from the "View Data" page.

2. **Viewing Users**:
   - Click on the **"View Data"** link in the top right corner.
   - All the saved users will be displayed.
   - You can **edit** or **delete** users directly from this page.

3. **Editing Users**:
   - On the "View Data" page, click the **Edit** button next to a user.
   - The user’s details will appear in the form on the input page, where you can make changes.
   - Submit the form to save the updated data.

4. **Deleting Users**:
   - On the "View Data" page, click the **Delete** button next to a user to remove them from the list.

## File Structure

```
/simple-crud-app
│
├── index.html        # Input form page (for adding data)
├── view-data.html    # View, Edit, Delete page
├── style.css         # Minimalist design styling
└── script.js         # JavaScript logic for CRUD operations
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](https://github.com/shreyazh/CRUD-App/license.git) file for details.

---

Feel free to adjust any details to fit your project more closely!
