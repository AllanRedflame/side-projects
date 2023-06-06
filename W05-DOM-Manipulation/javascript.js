const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const main = document.querySelector("main");

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete all";
main.appendChild(deleteButton);



let deleteAll = function() {
    const media = document.querySelector("li");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}



let items = function() {
    const inputItem = input.value;
	if (inputItem != "") {
		const newLi = document.createElement("li");
        const newSpan = document.createElement("p");
        const newButton = document.createElement("button");
		
		newLi.appendChild(newSpan);
		newSpan.textContent = inputItem;
		newLi.appendChild(newButton);
		newButton.textContent = "Delete"
		list.appendChild(newLi);
		
		newButton.addEventListener("click", () => {
			list.removeChild(newLi);
		});
    input.value = "";
	};
}

button.addEventListener("click", items);
deleteButton.addEventListener("click", deleteAll);

