// form
const expenseForm = document.querySelector("#expenseForm");

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;
  const expenseList = document.querySelector("#expenseList");
  const newRow = document.createElement("tr");
  newRow.className = "text-center";
  newRow.innerHTML = `<td>${description}</td> <td>${category}</td> <td>${amount}</td>`;

  expenseList.appendChild(newRow);
});
