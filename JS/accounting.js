let employee = localStorage.getItem("Employee");
let parseEmployee = JSON.parse(employee);
let table = document.getElementById("tableSec");

const dataArray = (arr, str) => {
  let marketingEmployeesNumber = 0;
  let marketingSalaryTotal = 0;
  let marketingSalaryAverage = 0;
  let administrationEmployeesNumber = 0;
  let adiministrationSalaryTotal = 0;
  let adiministrationSalaryAverage = 0;
  let financeEmployeesNumber = 0;
  let financeSalaryTotal = 0;
  let financeSalaryAverage = 0;
  let developmentEmployeesNumber = 0;
  let developmentSalaryTotal = 0;
  let developmentSalaryAverage = 0;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i].department) {
      case "Administration":
        administrationEmployeesNumber++;
        adiministrationSalaryTotal += arr[i].salary;
        adiministrationSalaryAverage =
          Math.floor(adiministrationSalaryTotal / administrationEmployeesNumber);
        break;
      case "Marketing":
        marketingEmployeesNumber++;
        marketingSalaryTotal += arr[i].salary;
        marketingSalaryAverage =
          Math.floor(marketingSalaryTotal / marketingEmployeesNumber);
        break;
      case "Development":
        developmentEmployeesNumber++;
        developmentSalaryTotal += arr[i].salary;
        developmentSalaryAverage =
          Math.floor(developmentSalaryTotal / developmentEmployeesNumber);
        break;
      case "Finance":
        financeEmployeesNumber++;
        financeSalaryTotal += arr[i].salary;
        financeSalaryAverage = Math.floor(financeSalaryTotal / financeEmployeesNumber);
        break;
    }
  }
  switch (str) {
    case "Administration":
      return [
        "Administration",
        administrationEmployeesNumber,
        adiministrationSalaryTotal,
        adiministrationSalaryAverage,
      ];

    case "Marketing":
      return [
        "Marketing",
        marketingEmployeesNumber,
        marketingSalaryTotal,
        marketingSalaryAverage,
      ];

    case "Development":
      return [
        "Development",
        developmentEmployeesNumber,
        developmentSalaryTotal,
        developmentSalaryAverage,
      ];

    case "Finance":
      return [
        "Finance",
        financeEmployeesNumber,
        financeSalaryTotal,
        financeSalaryAverage,
      ];
  }
};

function renderHeader() {
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

// ["Finance", financeEmployeesNumber, financeSalaryTotal, financeSalaryAverage];

function renderData(arr) {
  let tr = document.createElement("tr");
  table.appendChild(tr);

  let departmentName = document.createElement("td");
  departmentName.textContent = arr[0];
  tr.appendChild(departmentName);

  let employeeTotal = document.createElement("td");
  employeeTotal.textContent = arr[1];
  tr.appendChild(employeeTotal);

  let salaryTotal = document.createElement("td");
  salaryTotal.textContent = arr[2];
  tr.appendChild(salaryTotal);

  let salaryAvg = document.createElement("td");
  salaryAvg.textContent = arr[3];
  tr.appendChild(salaryAvg);
}

let findTotal = (arr1, arr2, arr3, arr4) => {
  let marketing = dataArray(parseEmployee, "Marketing");
  let development = dataArray(parseEmployee, "Development");
  let finance = dataArray(parseEmployee, "Finance");
  let administration = dataArray(parseEmployee, "Administration");

  return [
    "Total",
    marketing[1] + development[1] + finance[1] + administration[1],
    marketing[2] + development[2] + finance[2] + administration[2],
    marketing[3] + development[3] + finance[3] + administration[3],
  ];
};

renderHeader();
renderData(dataArray(parseEmployee, "Marketing"));
renderData(dataArray(parseEmployee, "Development"));
renderData(dataArray(parseEmployee, "Finance"));
renderData(dataArray(parseEmployee, "Administration"));
renderData(
  findTotal(
    dataArray(parseEmployee, "Marketing"),
    dataArray(parseEmployee, "Development"),
    dataArray(parseEmployee, "Finance"),
    dataArray(parseEmployee, "Administration")
  )
);