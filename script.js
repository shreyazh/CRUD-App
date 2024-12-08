// Selectors
const form = document.getElementById('crudForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('gender');
const emailInput = document.getElementById('email');
const recordIdInput = document.getElementById('recordId');
const tableBody = document.getElementById('tableBody');

// Load data from localStorage for viewing page
function loadData() {
    const data = JSON.parse(localStorage.getItem('records')) || [];
    tableBody.innerHTML = ''; // Clear table
    data.forEach((record, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.name}</td>
            <td>${record.age}</td>
            <td>${record.gender}</td>
            <td>${record.email}</td>
            <td>
                <button class="edit" onclick="editRecord(${index})">Edit</button>
                <button class="delete" onclick="deleteRecord(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Save or update record
function saveRecord(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const gender = genderInput.value.trim();
    const email = emailInput.value.trim();
    const recordId = recordIdInput.value;

    if (!name || !age || !gender || !email) {
        alert('Please fill in all fields');
        return;
    }

    const records = JSON.parse(localStorage.getItem('records')) || [];
    
    if (recordId) {
        // Update record
        records[recordId] = { name, age, gender, email };
        recordIdInput.value = '';
    } else {
        // Create new record
        records.push({ name, age, gender, email });
    }

    localStorage.setItem('records', JSON.stringify(records));
    form.reset();
    window.location.href = 'view.html'; // Redirect to view page
}

// Edit record
function editRecord(index) {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const record = records[index];
    nameInput.value = record.name;
    ageInput.value = record.age;
    genderInput.value = record.gender;
    emailInput.value = record.email;
    recordIdInput.value = index;
}

// Delete record
function deleteRecord(index) {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    records.splice(index, 1);
    localStorage.setItem('records', JSON.stringify(records));
    loadData();
}

// Event listeners
form.addEventListener('submit', saveRecord);
document.addEventListener('DOMContentLoaded', loadData);
