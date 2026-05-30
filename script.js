const toolNameInput = document.getElementById("toolName");
const toolCategoryInput = document.getElementById("toolCategory");
const toolUseCaseInput = document.getElementById("toolUseCase");
const addToolButton = document.getElementById("addToolButton");
const toolList = document.getElementById("toolList");

addToolButton.addEventListener("click", function () {
  const toolName = toolNameInput.value;
  const toolCategory = toolCategoryInput.value;
  const toolUseCase = toolUseCaseInput.value;

  if (toolName === "" || toolCategory === "" || toolUseCase === "") {
    alert("Please fill all fields before adding a tool.");
    return;
  }

  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <strong>${toolName}</strong><br>
    Category: ${toolCategory}<br>
    Use case: ${toolUseCase}
  `;

  toolList.appendChild(listItem);

  toolNameInput.value = "";
  toolCategoryInput.value = "";
  toolUseCaseInput.value = "";
});