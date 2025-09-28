const itemsContainer = document.querySelector("#list-items")

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}
//Funcion API//

//Tarea 1 2 y 3 //
function fetchColorsList() {
  fetch("https://reqres.in/api/unknown",{
      method: "GET",
        headers: {contentType: "application/json",
        "x-api-key": "reqres-free-v1"
    }
})
    // Autocompletado //
    .then(response => {
        return response.json()
    })
    .then(data => {
        const colors = data.data
        localStorage.getItem('colors'), JSON.stringify("colors")
        colors.forEach(item => {
            addItem(item)
        })
    })

// Tarea 4
function loadColorsFromStorage() {
  const colorString = localStorage.getItem("colors")
    if (colorString) {
        const colors = JSON.parse(colorString)
        colors.forEach(addItem)
    } else {
        console.log("Error")
    }
}

function clearColorLists () {
      itemsContainer.classList.remove("");
      localStorage.removeItem('colors');
}

fetchColorsList()
loadColorsFromStorage()}
