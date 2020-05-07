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
      .then((res) => res.json())
      .then((data) => {
        const theft_array = data.data;
        console.log('Theft Array', theft_array);
        return theft_array
      })
      .then((theft_array) => {
        for (i in theft_array) {
          for (j in theft_array[i]) {
            if (theft_array[i][j].CrimeType == 'THEFT FROM AUTO') {
              theft_from_auto.push([theft_array[i][j].Latitude, theft_array[i][j].Longitude]);
            }
            if (theft_array[i][j].CrimeType == 'AUTO, STOLEN') {
              auto_stolen.push([theft_array[i][j].Latitude, theft_array[i][j].Longitude]);
            }
            if (theft_array[i][j].CrimeType == 'THEFT') {
              theft.push([theft_array[i][j].Latitude, theft_array[i][j].Longitude]);
            }
          }
        }
      });
console.log(theft_from_auto);
console.log(auto_stolen);
console.log(theft);