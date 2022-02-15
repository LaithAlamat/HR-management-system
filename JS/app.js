let data = [];
let form = document.querySelector("form");
let dataDiv = document.querySelector(".employees");

function Info(ID, Name, Department, Level) {
  this.ID = ID;
  this.name = Name;
  this.department = Department;
  this.level = Level;
  this.image = `./assets/${this.name}.jpg`;

  data.push(this);
}

let Ghazi = new Info(1000, "Ghazi Samer", "Administration", "Senior");
let Lana = new Info(1001, "Lana Ali", "Finance", "Senior");
let Tamara = new Info(1002, "Tamara Ayoub", "Marketing", "Senior");
let Safi = new Info(1003, "Safi Walid", "Administration", "Mid-Senior");
let Omar = new Info(1004, "Omar Zaid", "Development", "Senior");
let Rana = new Info(1005, "Rana Saleh", "Development", "Junior");
let Hadi = new Info(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

Info.prototype.netSalary = function () {
  switch (this.level) {
    case "Senior":
      this.salary = Math.floor((Math.random() * (2000 - 1500) + 1500) * 0.925);
      break;

    case "Mid-Senior":
      this.salary = Math.floor((Math.random() * (1500 - 1000) + 1000) * 0.925);

      break;

    case "Junior":
      this.salary = Math.floor((Math.random() * (1000 - 500) + 500) * 0.925);
      console.log(this.Salary);
      break;

    default:
      break;
  }
};

Info.prototype.generateID = function () {
  this.ID = Math.floor(1000 + Math.random() * 9000);
};

Info.prototype.render = function () {
  let container = document.createElement("div");
  container.classList.add("new");

  let img = document.createElement("img");
  img.setAttribute("src", this.image);
  img.classList.add("images");
  container.appendChild(img);

  let title = document.createElement("h4");
  title.textContent = this.name;
  container.appendChild(title);

  let id = document.createElement("h4");
  id.textContent = this.ID;
  container.appendChild(id);

  let level = document.createElement("h4");
  level.textContent = this.level;
  container.appendChild(level);

  let salary = document.createElement("h4");
  salary.textContent = this.salary;
  container.appendChild(salary);

  

  

  dataDiv.appendChild(container);
};

function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let Department = event.target.Department.value;
  let Level = event.target.Level.value;

  let id = 1234;

  let allData = new Info(id, name, Department, Level);
  dataDiv.innerHTML = "";
  data.forEach((ele) => {
    // console.log(ele);
    ele.netSalary();
    ele.generateID();
    ele.render();
  });
  form.reset();
}

form.addEventListener("submit", handleSubmit);

data.forEach((ele) => {
  ele.netSalary();
  console.log(ele);
  ele.generateID();
  ele.render();
});
