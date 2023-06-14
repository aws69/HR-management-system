'use strict'

let tableEle = document.getElementById("table");

let allEmployee = [];

function Employee(fullName, department, level) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0;
    allEmployee.push(this);
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



function getdata() {

    let get = localStorage.getItem('info');
    let objArr = JSON.parse(get);
    for (let i = 0; i < objArr.length; i++) {
        new Employee(objArr[i].full_Name, objArr[i].department, objArr[i].level, objArr[i].salary);
    }
}
getdata();

let arrNum = new Array(4); for (let i=0; i<4; ++i) arrNum[i] = 0;
for (let i=0 ; i<allEmployee.length;++i){
    if(allEmployee[i].department=="Administration") ++arrNum[0];
    else if(allEmployee[i].department=="Development") ++arrNum[1];
    else if (allEmployee[i].department=="Marketing") ++arrNum[2];
    else if (allEmployee[i].department=="Finance") ++arrNum[3];
}

let administrationNum=document.getElementById("administrationNum");
  administrationNum.textContent=arrNum[0];
  let financeNum=document.getElementById("financeNum");
  financeNum.textContent=arrNum[1];
  let marketingNum=document.getElementById("marketingNum");
  marketingNum.textContent=arrNum[2];
  let developmentNum=document.getElementById("developmentNum");
  developmentNum.textContent=arrNum[3];
    
 

