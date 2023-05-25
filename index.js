async function getCoords() {
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  });
  return [pos.coords.latitude, pos.coords.longitude]
}

// map object
let myMap = {
  location: [],
  map: {},
  markers: {},

  // build leaflet map
  buildMap() {
    this.map = L.map('map', {
      center: this.location,
      zoom: 11,
    });

    // add openstreetmap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      minZoom: '15',
    }).addTo(this.map)

    // create and add geolocation marker
    const marker = L.marker(this.location).addTo(this.map)
  },

  // add business markers using FourSquare here?
}

// event handlers
// window load
window.onload = async () => {
  const coords = await getCoords()
  console.log(coords)
  myMap.location = coords
  myMap.buildMap()
}

// business submit button
document.getElementById('submit').addEventListener('click', async (event) => {
  event.preventDefault()
  let userSelection = document.getElementById('business').value
  console.log(userSelection)
})
