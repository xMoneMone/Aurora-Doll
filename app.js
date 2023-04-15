let buttons = document.querySelectorAll("button")

let selected = ""
let selected_directory = ""
let targeted_doll_item = ""

for (let button of buttons){
    button.addEventListener("click", () => {
        selected = button.id.replace("_button", "")
        selected_directory = "graphics/" + selected
        targeted_doll_item = document.getElementById("current_" + selected)
        for (let button of buttons){
            button.classList.remove('selected_button')
        }
        button.classList.add('selected_button')
    })

}

document.getElementById("fringes_button").click()

document.getElementById("nothing").addEventListener("click", () => {
    targeted_doll_item.src = ""
})
