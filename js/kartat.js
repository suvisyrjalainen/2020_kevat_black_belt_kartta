function valmista(){

  if("geolocation" in navigator) {
  console.log("Sijaintieto saatavilla");
  navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);

      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;



    var map = L.map('kartta').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
    .bindPopup('Olet tässä')
    .openPopup();

  });
}

}

function tallenna_sijainti() {
  var sijaintilomake = document.getElementById("arvostelulomake");
  sijaintilomake.style.display = "block";

}
