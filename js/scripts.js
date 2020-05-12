const mealPopup = document.getElementById("expanded_meal") || undefined
const mealPopupUnderlay = document.getElementById("expanded_underlay") || undefined
const mealList = document.getElementById("order_grid") || undefined
const hamburger = document.getElementById("hamburger") || undefined
const primaryMenu = document.getElementById("primary_menu") || undefined

hamburger.addEventListener('click', e => {
    primaryMenu.style.display = primaryMenu.style.display == "none" ? "inline-block" : "none"
})

const menu = {
    size: 5,
    meals: {
        0: {name: "Chicken salad with carrots and cucumber", thumb: "assets/cards/1.jpg"},
        1: {name: "Creamy pumpkin and chicken soup", thumb: "assets/cards/2.jpg"},
        2: {name: "Fresh salad with watermelon", thumb: "assets/cards/3.jpg"},
        3: {name: "Blueberry pancakes served with a juice box", thumb: "assets/cards/4.jpg"},
        4: {name: "Salted Salmon with salad", thumb: "assets/cards/5.jpg"}
    }
}

if(mealPopupUnderlay && mealPopup) {

    Object.keys(menu.meals).map((key, index) => {
        const components = menu.meals[index]
        const orderCard = document.createElement('div')
        orderCard.className = "order_card"
        const orderImg = document.createElement('div')
        orderImg.className = "order_img"
        orderImg.style.backgroundImage = `url(${components.thumb})`
        const orderTitle = document.createElement('h5')
        orderTitle.innerText = components.name

        orderCard.appendChild(orderImg)
        orderCard.appendChild(orderTitle)
        mealList.appendChild(orderCard)

        orderCard.addEventListener('click', () => {
            initiatePopup(index)
        })
    })


    mealPopupUnderlay.addEventListener('click', e => {
        if(mealPopup.style.display != "none") {
            mealPopup.style.display = "none"
        }
    })

}

const popupTitle = document.getElementById("popup_title")
const popupPreview = document.getElementById("preview")
const initiatePopup = id => {
    popupTitle.innerText = menu.meals[id].name
    popupPreview.style.backgroundImage = `url(${menu.meals[id].thumb})`
    mealPopup.style.display = "inline-block"
        
}