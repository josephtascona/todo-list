let add = document.getElementById("add")
let notCrossed = document.querySelector(".not-crossed")
let crossed = document.querySelector(".crossed")
add.addEventListener("click", addTodo);

function addTodo() {
    let todo = document.getElementById("todo")
    let value = todo.value
    todo.value = ""
    let div = document.createElement("div")
    div.classList.add("listElement")
    let para = document.createElement("p");
    para.innerHTML = value
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")
    let button = document.createElement("button")
    button.innerHTML = "Delete"
    button.classList.add("delete")
    div.appendChild(checkbox)
    div.appendChild(para)
    div.appendChild(button)
    notCrossed.appendChild(div)
    deletes()
    cross()
}

function deletes() {
    let deleteButtons = document.querySelectorAll(".delete")
    deleteButtons.forEach(button => {
        button.addEventListener("click", function deleteDiv() {
            button.parentNode.remove()
        })
    })
}

function cross() {
    let checkboxes = document.querySelectorAll(".checkbox")
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("click", function crossPara() {
            if (checkbox.checked) {
                checkbox.parentNode.childNodes[1].style.textDecoration = "line-through"
                let div = checkbox.parentNode
                div.remove()
                crossed.appendChild(div)
            } else {
                checkbox.parentNode.childNodes[1].style.textDecoration = "none"
                let div = checkbox.parentNode
                div.remove()
                notCrossed.appendChild(div)
            }
        })
    })
}