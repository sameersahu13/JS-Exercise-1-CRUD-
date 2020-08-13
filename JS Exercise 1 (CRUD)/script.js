  
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["DOB"] = document.getElementById("DOB").value;
    formData["Gender"] = document.getElementById("Gender").value;
    formData["Skills"] = document.getElementById("Skills").value;
    formData["Hobbies"] = document.getElementById("Hobbies").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.DOB;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Skills;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Hobbies  ;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)"><u>Edit</u></a>
                       <a onClick="onDelete(this)"><u>Delete</u></a>`;
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("DOB").value = "";
    document.getElementById("Gender").value = "";
    document.getElementById("Skills").value = "";
    document.getElementById("Hobbies").value = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("DOB").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Skills").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Hobbies").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.DOB;
    selectedRow.cells[2].innerHTML = formData.Gender;
    selectedRow.cells[3].innerHTML = formData.Skills;
    selectedRow.cells[4].innerHTML = formData.Hobbies;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Name").value == "") {
        isValid = false;
        document.getElementById("NameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NameValidationError").classList.contains("hide"))
            document.getElementById("NameValidationError").classList.add("hide");
    }
    return isValid;
}