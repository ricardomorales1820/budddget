// Import stylesheets
import "./style.css";

let averageIncomeSources = ["Pateron", "Job", "Stock", "Sign On Bonus"];
let averageIncomeNumbers = [3500, 8000, 100000, 54000];
let pieChart = document.getElementById("piechart");

const incomeData = {
  labels: [averageIncomeSources],

  datasets: [averageIncomeNumbers],

  backgroundColor: ["green", "black", "red", "blue"]
};

let pieCharts = new Chart(pieChart, {
  type: "pie",

  data: incomeData
});
