let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: -36.90125, lng: -60.26696 },
    zoom: 8,
  });
}

initMap();

