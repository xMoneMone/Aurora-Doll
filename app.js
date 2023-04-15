let buttons = document.querySelectorAll("button")

let selected = ""
let targeted_doll_item = ""
let max_amount_items = {
    "accessories":3,
    "dresses":2,
    "fringes":2,
    "hair":2,
    "jackets":2,
    "pants":2,
    "shirts":2,
    "shoes":2,
    "socks":2,
    "undershirts":2
}

for (let button of buttons){
    button.addEventListener("click", () => {
        selected = button.id.replace("_button", "")
        targeted_doll_item = document.getElementById("current_" + selected)

        for (let button of buttons){
            button.classList.remove('selected_button')
        }

        button.classList.add('selected_button')

        let container = document.querySelector('.cards')
        let nothing = document.getElementById('nothing')
        container.innerHTML = ""
        container.appendChild(nothing)

        for (let i = 1; i <= max_amount_items[selected]; i++){
            let div = document.createElement('div')
            let sylhouette = document.createElement('img')
            let item = document.createElement('img')

            div.classList.add('item_card')
            sylhouette.classList.add('sylhouette')
            item.classList.add('item')
            sylhouette.src = 'graphics/page/sylhouette.png'
            item.src = "graphics/" + selected + "/" + i + ".png"

            div.appendChild(sylhouette)
            div.appendChild(item)

            container.appendChild(div)
        }
    })

}

document.getElementById("fringes_button").click()

document.getElementById("nothing").addEventListener("click", () => {
    targeted_doll_item.src = ""
})
