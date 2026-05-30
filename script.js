const toolNameInput = document.getElementById("toolName");
const toolCategoryInput = document.getElementById("toolCategory");
const toolUseCaseInput = document.getElementById("toolUseCase");
const addToolButton = document.getElementById("addToolButton");
const toolList = document.getElementById("toolList");
const emptyMessage = document.getElementById("emptyMessage");

addToolButton.addEventListener("click", function () {
  const toolName = toolNameInput.value.trim();
  const toolCategory = toolCategoryInput.value.trim();
  const toolUseCase = toolUseCaseInput.value.trim();

  if (toolName === "" || toolCategory === "" || toolUseCase === "") {
    alert("Please fill all fields before adding a tool.");
    return;
  }

  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <strong>${toolName}</strong>
    <div class="tool-category">Category: ${toolCategory}</div>
    <div class="tool-use-case">Use case: ${toolUseCase}</div>
  `;

  toolList.appendChild(listItem);

  emptyMessage.style.display = "none";

  toolNameInput.value = "";
  toolCategoryInput.value = "";
  toolUseCaseInput.value = "";
});