'use strict'

let  Data = [];

function Info(ID, Name, Department, Level) {
    
    this.ID = ID;
    this.Name = Name;
    this.Department = Department;
    this.Level = Level;
    this.Image = `./images/${this.Name}.png`;
    this.Salary;

    Data.push(this);
}


Info.prototype.render = function() {
    document.write(this.Name);
    document.write(this.Salary);
    
}

Info.prototype.netSalary = function (Level) {


        switch (this.Level) {
        case "Senior":
            this.Salary = Math.floor((Math.random() * (2000 - 1500) + 1500)*0.925); 
            break;

            case "Mid-Senior":
               this.Salary = Math.floor((Math.random() * (1500 - 1000) + 1000)*0.925); 
                
            break;

            case "Junior":
                this.Salary = Math.floor((Math.random() * (1000 - 500) + 500)*0.925); 
            break;
    
        default:
            break;

    }
      };
    

let Ghazi = new Info(1000, "Ghazi Samer", "Administration", "Senior");
let Lana  = new Info(1001, "Lana Ali", "Finance", "Senior");
let Tamara  = new Info(1002, "Tamara Ayoub", "Marketing", "Senior");
let Safi  = new Info(1003, "Safi Walid", "Administration", "Mid-Senior");
let Omar  = new Info(1004, "Omar Zaid", "Development", "Senior");
let Rana  = new Info(1005, "Rana Saleh", "Development", "Junior");
let Hadi  = new Info(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
// console.log(Data);

for (let i = 0; i < Data.length; i++) {
   
    Data[i].netSalary();
   
   
    Data[i].render(); 
}

console.log(Data);




              