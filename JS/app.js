'use strict'


const allEmployee = [];


function Employee (id,name,department,level,employeeImage) {
    this.employeeId = id;
    this.name = name;
    this.image = employeeImage;
    this.department = department;
    this.level= level;
    this.salary = 0;
    allEmployee.push(this);
}



Employee.prototype.renderEmployee = function(){
    document.write(`<h2> Employee Name is : ${this.name} </h2>`)
    document.write(`<h3> Employee Salary : ${this.salary} </h3>`)
}


Employee.prototype.generateRandomNum = function (min ,max) {
    
    this.salary= Math.floor(Math.random() * (max - min + 1) + min);
}



let employee1 = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

let employee2 = new Employee("1001", "Lana Ali", "Finance", "Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

let employee3 = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

let employee4 = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

let employee5 = new Employee("1004", "Omar Zaid", "Development", "Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

let employee6 = new Employee("1005", "Rana Saleh", "Development", "Junior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")

let employee7 = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png")



for (let i = 0; i < allEmployee.length; i++) {
    if (allEmployee[i].level === "Senior"){
        allEmployee[i].generateRandomNum(1500,2000);
    }else if (allEmployee[i].level === "Mid-Senior"){
        allEmployee[i].generateRandomNum(1000,1500);
    }else if (allEmployee[i].level === "Junior"){
        allEmployee[i].generateRandomNum(500,1000);
    }

    allEmployee[i].renderEmployee();
}


