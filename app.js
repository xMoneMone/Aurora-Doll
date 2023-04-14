let buttons = document.querySelectorAll("button")

let selected = ""

for (let button of buttons){
    button.addEventListener("click", () => {
        selected = button
        for (let button of buttons){
            button.classList.remove('selected_button')
        }
        button.classList.add('selected_button')
    })

}