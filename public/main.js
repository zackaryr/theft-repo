const mymap = L.map('mapid').setView([38.9869, -76.9426], 15);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZXZhbmRpbWFyIiwiYSI6ImNrOGl1MG1ydzAybHYzZnA4dmpnZm8zeDcifQ.piEThe--C2dKlShdSIdk4g'
    }).addTo(mymap);

    var popup = L.popup();
    var tfa = 1;

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
    function onTheftFromAuto() {
        if (tfa === 1) {
            theft_from_auto.forEach((element) => {
                var from_auto = L.marker(element).addTo(mymap)
            })
            tfa === 0;
        }
        if (tfa === 0) {
            theft_from_auto.forEach((element) => {
            var from_auto = L.marker(element).remove(mymap)
            })
          tfa === 1
        }
    };

    function onTheft() {
        if (theftToggle === 1) {
            theft.forEach((element) => {
                var theftmarker = L.marker(element).addTo(mymap)
            })
            theftToggle === 0;
        }
        if (theftToggle === 0) {
            theft.forEach((element) => {
                var theftmarker = L.marker(element).remove(mymap)
            })
            theftToggle === 1;
        }
    }

    mymap.on('click', onMapClick);

      //FINAL PROJECT CODE STARTS HERE _ TO REPLACE FOODLOCS
      theft_from_auto = [];
      auto_stolen = [];
      theft = [];

      fetch('/api') // Rather than fetching from PG County, we're going to fetch from our own server.
      .then(res => res.json())
      .then((data) => {
        return data
      })
      .then((data) => {
        for(i = 0; i < data.length; i++) {
          if (data[i].CrimeType === 'THEFT FROM AUTO') {
            theft_from_auto.push([data[i].Latitude, data[i].Longitude])
          }
          if (data[i].CrimeType === 'AUTO, STOLEN') {
            auto_stolen.push([data[i].Latitude, data[i].Longitude])
          }
          if (data[i].CrimeType === 'THEFT') {
              theft.push([data[i].Latitude, data[i].Longitude])
          }
        }
      });
console.log(data);
console.log(theft_from_auto);
console.log(auto_stolen);
console.log(theft);