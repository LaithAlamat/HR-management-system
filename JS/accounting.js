let employee = localStorage.getItem("Employee");
let parseEmployee = JSON.parse(employee);
let table = document.getElementById("tableSec");

 console.log(parseEmployee);

 let data = [];

 function Info(ID, Name, Department, Level) {
    this.ID = ID;
    this.name = Name;
    this.department = Department;
    this.level = Level;
    this.image = `./assets/${this.name}.jpg`;
  
    data.push(this);
  }

   
    // let administrationSalaryTotal = 0;

    
    // let marketingSalaryTotal = 0;

    
    // let developmentSalaryTotal = 0;
    
    
    // let financeSalaryTotal = 0;

 function department (){
    let administrationNum = 0;
    let marketingNum = 0;
    let developmentNum = 0;
    let financeNum = 0;
    for(let i = 0; i < parseEmployee.length; i++){
        if (parseEmployee[i].department == "Administration") {
            administrationNum++;
            
        } else if (parseEmployee[i].department == "Marketing") {
            marketingNum++;
            
        } else if (parseEmployee[i].department == "Development") {
            developmentNum++;
            
        } else if (parseEmployee[i].department == "Finance") {
            financeNum++;
            
    }
    }
    return [administrationNum , marketingNum , developmentNum , financeNum];
}
    console.log(department());

function sumSalary (){
    let administrationSalaryTotal = 0;
    let marketingSalaryTotal = 0;
    let developmentSalaryTotal = 0;
    let financeSalaryTotal = 0;

    for(let i = 0; i < parseEmployee.length; i++){
        if (parseEmployee[i].department == "Administration") {
                administrationSalaryTotal = administrationSalaryTotal + parseEmployee[i].salary;
                

            } else if (parseEmployee[i].department == "Marketing") {
                marketingSalaryTotal = marketingSalaryTotal + parseEmployee[i].salary;

            } else if (parseEmployee[i].department == "Development") {
                developmentSalaryTotal += parseEmployee[i].salary;

                
            } else if (parseEmployee[i].department == "Finance") {
                financeSalaryTotal += parseEmployee[i].salary;
            }

        }
        return [administrationSalaryTotal , marketingSalaryTotal , developmentSalaryTotal , financeSalaryTotal];
        }

console.log(sumSalary());


 function avgSalary(){
        let avg = [];
        for (let i=0; i<sumSalary().length; i++){
            // console.log(department()[0]);
            // console.log(sumSalary()[0]);

        avg.push(sumSalary()[i] / department()[i])  ;
        }


   
    return avg;
 }
console.log(avgSalary());










function renderHeader(){

    let tr = document.createElement("tr");
    table.appendChild(tr);

    let departmentName = document.createElement("th");
    departmentName.textContent = "Department";
    tr.appendChild(departmentName);

    let employeeTotal = document.createElement("th");
    employeeTotal.textContent = "Number of employees";
    tr.appendChild(employeeTotal);

    let salaryTotal = document.createElement("th");
    salaryTotal.textContent = "Salary";
    tr.appendChild(salaryTotal);

    let salaryAvg = document.createElement("th");
    salaryAvg.textContent = " Average";
    tr.appendChild(salaryAvg);
}


Info.prototype.renderBody = function(){

    let tr = document.createElement("tr");
    table.appendChild(tr);

    let firstElement = document.createElement("td");
    firstElement.textContent = this.department
    tr.appendChild(firstElement)
    

    

    let secondElement = document.createElement("td");
    let departmentNumber;
    switch (this.department) {
        case "Administration":
            departmentNumber = department()[0];
            break;
        case "Marketing":
            departmentNumber = department()[1];
            break;
        case "Development":
            departmentNumber = department()[2];
            break;
        case "Finance":
            departmentNumber = department()[3];
            break;
    
        default:
            break;
    }
    secondElement.textContent = departmentNumber;
    tr.appendChild(secondElement);

    let thirdElement = document.createElement("td");
    let totalSalary;
    switch (this.department) {
        case "Administration":
            totalSalary = sumSalary()[0];
            break;
        case "Marketing":
            totalSalary = sumSalary()[1];
            break;
        case "Development":
            totalSalary = sumSalary()[2];
            break;
        case "Finance":
            totalSalary = sumSalary()[3];
            break;
    
        default:
            break;
    }
    thirdElement.textContent = totalSalary;
    tr.appendChild(thirdElement);

    let fourthElement = document.createElement("td");
    let salaryAvg;
    switch (this.department) {
        case "Administration":
            salaryAvg = avgSalary()[0];
            break;
        case "Marketing":
            salaryAvg = avgSalary()[1];
            break;
        case "Development":
            salaryAvg = avgSalary()[2];
            break;
        case "Finance":
            salaryAvg = avgSalary()[3];
            break;
    
        default:
            break;
    }
    fourthElement.textContent = salaryAvg;
    tr.appendChild(fourthElement);
    
}



let Ghazi = new Info(1000, "Ghazi Samer", "Administration", "Senior");
let Lana = new Info(1001, "Lana Ali", "Finance", "Senior");
let Tamara = new Info(1002, "Tamara Ayoub", "Marketing", "Senior");
let Safi = new Info(1003, "Safi Walid", "Administration", "Mid-Senior");
let Omar = new Info(1004, "Omar Zaid", "Development", "Senior");
let Rana = new Info(1005, "Rana Saleh", "Development", "Junior");
let Hadi = new Info(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
renderHeader();
for  (let i = 0 ; i < parseEmployee.length ; i++) {

    
    id =parseEmployee[i].ID
    names =parseEmployee[i].name
    dep =parseEmployee[i].department
    lvl =parseEmployee[i].level
   

    let objInst = new Info (id , names , dep , lvl);
    objInst.renderBody()
}

console.log(localStorage.getItem("Employee"));



// hadi.renderBody();
