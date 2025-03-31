/*
Skript für Lieblingsort
*/

let stop = {
    nr: 18,
    title: "Volksparkstadion",
    user: "Pruje839",
    lat: 53.587153,
    lng: 9.898643,
    zoom: 12,
};

const STOPS = [

    {
        lat: 45.109544,
        lng: 7.641281,
        zoom: 13,
        title: "Juventus Stadium",
        nr: 1,
        user: "vintiyannick",
    },
    {
        nr: 2,
        title: "Schrammsteinaussicht",
        user: "Ellinnaa",
        lat: 50.914167,
        lng: 14.203333,
        zoom: 15,
    },
    {
        nr: 3,
        title: "Auckland",
        user: "samuesl",
        lat: -36.83,
        lng: 174.8,
        zoom: 13,
    },
    {
        nr: 4,
        title: "Grevelingen",
        user: "Gregorysprenger2001",
        lat: 51.755833,
        lng: 3.8925,
        zoom: 11,
    },
    {
        nr: 5,
        title: "Rotorua",
        user: "lukas6020",
        lat: -38.14,
        lng: 176.25,
        zoom: 13,
    },
    {
        nr: 6,
        title: "Vancouver",
        user: "johannauniibk",
        lat: 49.28098,
        lng: -123.12244,
        zoom: 11,
    },
    {
        nr: 7,
        title: "Istanbul",
        user: "sam-uze",
        lat: 41.01,
        lng: 28.96,
        zoom: 13,
    },
    {
        nr: 8,
        title: "La Push",
        user: "webmapping",
        lat: 47.908683,
        lng: -124.636604,
        zoom: 13,
    },
    {

        nr: 9,
        title: "Konstanz",
        user: "cs4151",
        lat: 47.6633,
        lng: 9.175,
        zoom: 14,
    },
    {
        title: "Picton",
        user: "pauly0602",
        nr: 10,
        lat: -41.29,
        lng: 174.0,
        zoom: 11,
    },
    {
        nr: 11,
        title: "Nelson",
        user: "lujehle",
        lat: -41.270833,
        lng: 173.284167,
        zoom: 11,
    },
    {
        nr: 12,
        title: "Axamer Lizum",
        user: "benmertens",
        lat: 47.193889,
        lng: 11.302222,
        zoom: 11,
    },
    {
        nr: 13,
        title: "Pancake rocks (Punakaiki)",
        user: "johaschra",
        lat: -42.114383,
        lng: 171.327320,
        zoom: 11,
    },
    {
        nr: 16,
        title: "Provence",
        user: "lizzie2911",
        lat: 43.5,
        lng: 5.5,
        zoom: 13,
    },
    {
        nr: 17,
        title: "Ulriken",
        user: "Kathleenuniibk",
        lat: 60.383333,
        lng: 5.383333,
        zoom: 13,
    },

    {
        nr: 18,
        title: "Volksparkstadion",
        user: "Pruje839",
        lat: 53.587153,
        lng: 9.898643,
        zoom: 12,
    },
    {
        nr: 20,
        title: "Doubtful Sound",
        user: "florentinebusch",
        lat: -45.317222,
        lng: 166.988333,
        zoom: 11,
    },
    {
        nr: 21,
        title: "Tafraoute",
        user: "moplatt",
        lat: 29.72222,
        lng: -8.97194,
        zoom: 11,
    },
    {
        nr: 23,
        title: "Habicht",
        user: "fritzcrone",
        lat: 47.043611,
        lng: 11.289444,
        zoom: 15
    },
    {
        nr: 24,
        title: "Moeraki Boulders",
        user: "StephanPumpernik",
        lat: -45.345275,
        lng: 170.826061,
        zoom: 13,
    },
    {
        lat: -44.116667,
        lng: 170.166667,
        zoom: 11,
        title: "Lake Pukaki",
        nr: 25,
        user: "PriPh625",
    },
    {
        title: "Kalmit",
        nr: 26,
        user: "Basti-10",
        zoom: 13,
        lat: 49.31,
        lng: 8.08,
    },
    {
        nr: 29,
        title: 'Kaikoura',
        user: 'jessimeteo',
        lat: -42.411667,
        lng: 173.682222,
        zoom: 11
    },

];

// Karte initialisieren 
let map = L.map('map');

//Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//loop über Etappen 
for (let i = 0; i < STOPS.length; i++) {

    //Maker zeichnen
    let marker = L.marker([STOPS[i].lat, STOPS[i].lng]).addTo(map);

    //Popup definieren
    marker.bindPopup(`
        <h2>${STOPS[i].title}</h2>
        <ul>
            <li> Geogr. Breite: ${STOPS[i].lat.toFixed(3)}°</li>
            <li> Geogr. Länge: ${STOPS[i].lng.toFixed(3)}°</li>
        </ul>            
            
            
    `);

    //auf eigene Etappe blicken und Popup öffnen
    if (STOPS[i].user == "Pruje839") {
        map.setView([STOPS[i].lat, STOPS[i].lng], STOPS[i].zoom);
        marker.openPopup();
    }

    //Pulldownmenü befüllen
    let option = document.createElement("option");
    option.value = STOPS[i].user;
    option.text = STOPS[i].title;
    if (STOPS[i].user == "Pruje839"){
        option.selected = true;
    }
    document.querySelector("#pulldown select").appendChild(option); 

}

//auf Änderungen beim Pulldown reagieren 
document.querySelector("#pulldown select").onchange = function(evt) {
    let url = `https://${evt.target.value}.github.io/nz`
    //console.log(evt.target.value);
    //console.log(url);
    window.location = url; 

}