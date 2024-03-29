let buttons = document.querySelectorAll("button")

let selected = ""
let targeted_doll_item = ""
let items = ""

let max_amount_items = {
    "accessories":11,
    "dresses":15,
    "fringes":5,
    "hair":12,
    "hair-accessories": 15,
    "bags": 3,
    "jackets":8,
    "pants":13,
    "shirts":28,
    "shoes":8,
    "socks":12,
    "undershirts":7
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

        items = document.querySelectorAll('.item_card')

        for (let item of items){
            item.addEventListener("click", () => {
                if (item.id == 'nothing'){return}
        
                item_image = item.childNodes[1]
                targeted_doll_item.src = item_image.src
            })
        }
    })

}

document.getElementById("fringes_button").click()

document.getElementById("nothing").addEventListener("click", () => {
    targeted_doll_item.src = ""
})

