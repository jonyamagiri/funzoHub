// add and remove topics on the form

// get the buttons and topics list
const addTopicsBtn = document.getElementById("addTopicsBtn");
const removeTopicBtn = document.getElementById("removeTopicBtn");
const topicsList = document.querySelector(".topicsList");

// add a topic
addTopicsBtn.addEventListener("click", () => {
  const newTopicDiv = document.createElement("div");
  newTopicDiv.classList.add("topicDiv");
  newTopicDiv.innerHTML = `
    <input type="text" name="topics" class="form-control">
  `;

  topicsList.appendChild(newTopicDiv);
});

// delete a topic
removeTopicBtn.addEventListener("click", () => {
  if (topicsList.children.length > 1) {
    topicsList.children[topicsList.children.length - 1].remove();
  }
});

// clear all filled entries in the form when the page is reloaded (on refresh)
window.onload = function() {
    // get all elements in form; input, textarea, and select elements
    let inputs = document.querySelectorAll("input");
    let description = document.getElementById("description");
    let category = document.getElementById("category");
  
    // clear the values of the elements.
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    description.value = "";
    category.value = "Please choose one ...";
  };
