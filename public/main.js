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
    var markers = L.layerGroup().addTo(mymap);

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
};
    function callAll() {
      onAutoStolen();
      onTheft();
      onTheftFromAuto();
      onAssault();
      onBANDE();
      onRobbery();
    };

    function inDepth() {
      clearMarkers();
      theft_from_auto.forEach(element => {
        L.marker(element).addTo(markers)
      });
      theft.forEach(element => {
        L.marker(element).addTo(markers)
      });
      auto_stolen.forEach(element => {
        L.marker(element).addTo(markers)
      });
      assault.forEach(element => {
        L.marker(element).addTo(markers)
      });
      b_and_e.forEach(element => {
        L.marker(element).addTo(markers)
      });
      robbery.forEach(element => {
        L.marker(element).addTo(markers)
      });
      var node= document.getElementById("analysis");
      node.querySelectorAll('*').forEach(n => n.remove());
      var para = document.createElement("h1");
      var node = document.createTextNode("Analysis Section");
      para.appendChild(node);
      var element = document.getElementById("analysis");
      element.appendChild(para);
      len_array = [];
      
      const theft_from_auto_len = theft_from_auto.length;
      len_array.push(theft_from_auto_len);
      console.log('theft from auto length', theft_from_auto_len);
      const auto_stolen_len = auto_stolen.length;
      len_array.push(auto_stolen_len);
      console.log('auto stolen length', auto_stolen_len);
      const theft_len = theft.length;
      len_array.push(theft_len);
      console.log('theft length', theft_len);
      const assault_len = assault.length;
      len_array.push(assault_len);
      console.log('assault length', assault_len);
      const b_and_e_len = b_and_e.length;
      len_array.push(b_and_e_len);
      console.log('b and e length', b_and_e_len);
      const robbery_len = robbery.length;
      len_array.push(robbery_len);
      console.log('robbery length', robbery_len);

      console.log(len_array);

      len_array.forEach(element => {
        if (element == 183) {
          var para = document.createElement("p");
          var node = document.createTextNode("There are " + theft_from_auto_len + " instances of theft from auto.");
          para.appendChild(node);
          var element = document.getElementById("analysis");
          element.appendChild(para);
        }
        if (element == 90) {
          var para = document.createElement("p");
          var node = document.createTextNode("There are " + auto_stolen_len + " instances of stolen automobiles.");
          para.appendChild(node);
          var element = document.getElementById("analysis");
          element.appendChild(para);
        }
        if (element == 192) {
          var para = document.createElement("p");
          var node = document.createTextNode("There are " + theft_len + " instances of theft.");
          para.appendChild(node);
          var element = document.getElementById("analysis");
          element.appendChild(para);
        }
        if (element == 45) {
          var para = document.createElement("p");
          var node = document.createTextNode("There are " + assault_len + " instances of assault.");
          para.appendChild(node);
          var element = document.getElementById("analysis");
          element.appendChild(para);
        }
        if (element == 81) {
          var para = document.createElement("p");
          var node = document.createTextNode("There are " + b_and_e_len + " instances of breaking and entering.");
          para.appendChild(node);
          var element = document.getElementById("analysis");
          element.appendChild(para);
        }
        if (element == 40) {
          var para = document.createElement("p");
          var node = document.createTextNode("There are " + robbery_len + " instances of robbery.");
          para.appendChild(node);
          var element = document.getElementById("analysis");
          element.appendChild(para);
        }
      })

      const total = len_array[0]+len_array[1]+len_array[2]+len_array[3]+len_array[4]+len_array[5];
      console.log('total', total);

      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
          text: "Prince George's County Crime Breakdown"
        },
        data: [{
          type: "pie",
          startAngle: 240,
          yValueFormatString: "##0.00\"%\"",
          indexLabel: "{label} {y}",
          dataPoints: [
            {y: (len_array[0]/total)*100, label: "Theft from Auto"},
            {y: (len_array[1]/total)*100, label: "Stolen Auto"},
            {y: (len_array[2]/total)*100, label: "Theft"},
            {y: (len_array[3]/total)*100, label: "Assault"},
            {y: (len_array[4]/total)*100, label: "Breaking and Entering"},
            {y: (len_array[5]/total)*100, label: "Robbery"}
          ]
        }]
      });
      chart.render();
    };

    var para = document.createElement("h1");
    var node = document.createTextNode("Analysis Section");
    para.appendChild(node);
    var element = document.getElementById("analysis");
    element.appendChild(para);

    function onTheftFromAuto() {
      markers.clearLayers();
      theft_from_auto.forEach(element => {
        L.marker(element).addTo(markers)
      })
    };

    function onTheft() {
      markers.clearLayers();
      theft.forEach(element => {
        L.marker(element).addTo(markers)
      })
    };

    function onAutoStolen() {
      markers.clearLayers();
      auto_stolen.forEach(element => {
        L.marker(element).addTo(markers)
      })
    };

    function onAssault() {
      markers.clearLayers();
      assault.forEach(element => {
        L.marker(element).addTo(markers)
      })
    };

    function onBANDE() {
      markers.clearLayers();
      b_and_e.forEach(element => {
        L.marker(element).addTo(markers)
      })
    };

    function onRobbery() {
      markers.clearLayers();
      robbery.forEach(element => {
        L.marker(element).addTo(markers)
      })
    };
    
    function clearMarkers() {
      markers.clearLayers();
      var node= document.getElementById("analysis");
      node.querySelectorAll('*').forEach(n => n.remove());
      var node= document.getElementById("chartContainer");
      node.querySelectorAll('*').forEach(n => n.remove());
      var para = document.createElement("h1");
      var node = document.createTextNode("Analysis Section");
      para.appendChild(node);
      var element = document.getElementById("analysis");
      element.appendChild(para);
    };

    mymap.on('click', onMapClick);

      
      theft_from_auto = [];
      auto_stolen = [];
      theft = [];
      assault = [];
      b_and_e = [];
      robbery = [];


      fetch('/api')
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
            if (theft_array[i][j].CrimeType == 'ASSAULT' || theft_array[i][j].CrimeType == 'ASSAULT, WEAPON' || theft_array[i][j].CrimeType == 'ASSAULT, SHOOTING') {
              assault.push([theft_array[i][j].Latitude, theft_array[i][j].Longitude]);
            }
            if (theft_array[i][j].CrimeType == 'B & E, COMMERCIAL' || theft_array[i][j].CrimeType == 'B & E, OTHER' || theft_array[i][j].CrimeType == 'B & E, RESIDENTIAL' || theft_array[i][j].CrimeType == 'B & E, RESIDENTIAL (VACANT)' || theft_array[i][j].CrimeType == 'B & E, VACANT') {
              b_and_e.push([theft_array[i][j].Latitude, theft_array[i][j].Longitude]);
            }
            if (theft_array[i][j].CrimeType == 'ROBBERY, COMMERCIAL' || theft_array[i][j].CrimeType == 'ROBBERY, OTHER') {
              robbery.push([theft_array[i][j].Latitude, theft_array[i][j].Longitude]);
            }
          }
        }
      });