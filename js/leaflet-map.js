Vue.component('leaflet-map', {
    template: `
        <div id="mapid" style="height:640px;background: aquamarine">
            Great !!! 很棒棒 !!!
        </div>
    `
})

Vue.component('hello-world', {
    template: `
        <div>
            hello 真是美好世界 🌍
        </div>
    `
})

new Vue({el: `#vue_block`});

function init_map() {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYm93ZW5jaGl1IiwiYSI6ImNrNzh3bjA3YzAwNWszZW5zc2doZGNqZGwifQ.o_MrY1UR1GjqQO8nD5lJVQ'
    }).addTo(mymap);
}

function main() {
    let str_param = `我是一隻🐲`;
    if (typeof process !== `undefined`) {
        if (process.argv.length > 2) {
            str_param = process.argv[2]
        }
    } else {
        let url_search_params = new URLSearchParams(window.location.search);
        str_param = url_search_params.get(`str_param`);
        init_map();
    }
    console.log("leaf-map.js, OK");
}

main();
