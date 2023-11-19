function addUser() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var termsAccepted = document.getElementById('terms').checked;
    var table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    cell1.textContent = name;
    cell2.textContent = email;
    cell3.textContent = password;
    cell4.textContent = dob;
    cell5.textContent = termsAccepted ? 'Yes' : 'No';
    document.getElementById('registrationForm').reset();
}

