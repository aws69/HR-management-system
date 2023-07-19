'use strict'


const allEmployee = [];

const secEle = document.getElementById("employeeList")

function Employee(id, name, department, level, employeeImage) {
    this.employeeId = id;
    this.name = name;
    this.image = employeeImage;
    this.department = department;
    this.level = level;
    this.salary = this.randomSalary();
    allEmployee.push(this);
}


function randomId() {
    return Math.floor(1000 + Math.random() * 9000);
}

Employee.prototype.generateRandomNum = function (min, max) {

    this.salary = Math.floor(Math.random() * (max - min + 1) + min);
}

Employee.prototype.randomSalary = function () {
    for (let i = 0; i < allEmployee.length; i++) {
        if (allEmployee[i].level === "Senior") {
            allEmployee[i].generateRandomNum(1500, 2000);
        } else if (allEmployee[i].level === "Mid-Senior") {
            allEmployee[i].generateRandomNum(1000, 1500);
        } else if (allEmployee[i].level === "Junior") {
            allEmployee[i].generateRandomNum(500, 1000);
        }
    }
    var taxPercent = 7.5;
    return this.salary - (this.salary * (taxPercent / 100));
}

//let employee1 = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

//let employee2 = new Employee("1001", "Lana Ali", "Finance", "Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

//let employee3 = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

//let employee4 = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

//let employee5 = new Employee("1004", "Omar Zaid", "Development", "Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

//let employee6 = new Employee("1005", "Rana Saleh", "Development", "Junior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

//let employee7 = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

Employee.prototype.renderEmployee = function () {
    let div = document.getElementById("div1");
    let div2 = document.createElement("div");
    div2.innerHTML = `
    <div class="card-body">
    <img src="${this.imageURL}" alt="Employee Image">
        <h4>${this.fullName}</h4>
        <p>ID: ${this.employeeID} - Department: ${this.departmentName} - Level: ${this.levelInfo} - <p>Salary: ${this.salary}</p>
    </div> `;
    div.appendChild(div2);
}

let form = document.getElementById("form1");
form.addEventListener("submit", submitHandler);
function submitHandler(event) {
    event.preventDefault();

    let fullName = event.target.fname.value;
    let department = event.target.departments.value;
    let level = event.target.levels.value;
    let image = event.target.img.value;
    let newEmployee = new Employee('', fullName, department, level, image);
    newEmployee.randomId();
    newEmployee.randomSalary();
    newEmployee.renderEmployee();

    console.log(Allemployees);
    saveData();
    event.target.reset();
}
getData();

function saveData() {
    if (localStorage.getItem("Employees")) {
        localStorage.clear();
        localStorage.setItem("Employees", JSON.stringify(Allemployees));
    }
    else {
        localStorage.setItem("Employees", JSON.stringify(Allemployees));
    }

}

function getData() {
    let retrivedArr = localStorage.getItem('Employees');
    let objArr = JSON.parse(retrivedArr);
    if (objArr != null) {
        for (let i = 0; i < objArr.length; i++) {
            let newEmployee = new Employee(
                objArr[i].employeeID,
                objArr[i].fullName,
                objArr[i].departmentName,
                objArr[i].levelInfo,
                objArr[i].imageURL);

            newEmployee.IDnumbers();
            newEmployee.calculateSalaryBasedOnLevel();
            newEmployee.renderEmployee();

        }

    }

}