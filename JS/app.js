'use strict'


const allEmployee = [];

const secEle = document.getElementById("employeeList")

function Employee (id,name,department,level,employeeImage) {
    this.employeeId = id;
    this.name = name;
    this.image = employeeImage;
    this.department = department;
    this.level= level;
    this.salary = this.randomSalary();
    allEmployee.push(this);
}


function randomId() {
    return Math.floor(1000 + Math.random() * 9000);
}

Employee.prototype.generateRandomNum = function (min ,max) {
    
    this.salary= Math.floor(Math.random() * (max - min + 1) + min);
}

Employee.prototype.randomSalary = function(){
    for (let i = 0; i < allEmployee.length; i++) {
        if (allEmployee[i].level === "Senior"){
            allEmployee[i].generateRandomNum(1500,2000);
        }else if (allEmployee[i].level === "Mid-Senior"){
            allEmployee[i].generateRandomNum(1000,1500);
        }else if (allEmployee[i].level === "Junior"){
            allEmployee[i].generateRandomNum(500,1000);
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

Employee.prototype.renderEmployee = function() {
    let employeeCard = document.createElement('div');
    employeeCard.className = 'employee-card';
    secEle.appendChild(employeeCard)

    let employeeImage = document.createElement('img');
    employeeImage.src = this.image;
    employeeCard.appendChild(employeeImage);

    let employeeName = document.createElement('h2');
    employeeName.textContent = "Employee Name : " + this.name;
    employeeCard.appendChild(employeeName);

    let employeeId = document.createElement("h2");
    employeeId.textContent = "Employee ID : " + randomId();
    employeeCard.appendChild(employeeId);

    let employeeSalry = document.createElement("h2");
    employeeSalry.textContent = "Employee Net Salary : " + this.randomSalary();
    employeeCard.appendChild(employeeSalry);


    let department = document.createElement("h2");
    department.textContent = "Department : " + this.department;
    employeeCard.appendChild(department);

    let level = document.createElement("h2");
    level.textContent = "Level : " + this.level;
    employeeCard.appendChild(level);

    console.log(allEmployee);
}


document.getElementById("form").addEventListener("submit" , function(event){
    event.preventDefault();

    let fullName = event.target.fullName.value;
    let img = event.target.imgurl.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let employeeId = randomId();

    let newEmployee = new Employee(employeeId,fullName,department,level,img);
    newEmployee.renderEmployee();

    
});

