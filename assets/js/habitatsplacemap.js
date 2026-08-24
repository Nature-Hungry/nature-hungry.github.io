let defaultStyle = {
    color: "#aa002b",
    fillColor: "#aa002b",
    weight: 1,
    opacity: 0.2,
    fillOpacity: 0.2,
}

let hoverStyle = {
    color: "#aa002b",
    fillColor: "#aa002b",
    weight: 3,
    opacity: 0.6,
    fillOpacity: 0.8,
}
let places = {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    "chekjawa" : {
        "label":"Chek Jawa",
        "img":"",
        "link":"/articles/locations/intertidal/chekjawa/",
        "description": ""
    },
      
    
    
    
    "bbbesar" : {
        "label":"Beting Bemban Besar",
        "img":"https://live.staticflickr.com/65535/54842131448_e1505f2ab3_c.jpg",
        "link":"/articles/locations/intertidal/southernislands/bbbesar/",
        "description": ""
    },
      
    
    
    
    
    
    
    
    
    
    
    
    "bukit-timah-nature-reserve" : {
        "label":"Bukit Timah Nature Reserve",
        "img":"",
        "link":"/articles/locations/bukit-timah-nature-reserve/",
        "description": ""
    },
      
    
    
    
    "cyrene" : {
        "label":"Cyrene ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/cyrene/",
        "description": ""
    },
      
    
    
    
    "hantu" : {
        "label":"Pulau Hantu and Terumbu Hantu",
        "img":"https://live.staticflickr.com/65535/55399702030_c714644b52_c.jpg",
        "link":"/articles/locations/intertidal/southernislands/hantu/",
        "description": ""
    },
      
    
    
    
    "index" : {
        "label":"Southern Shores of Singapore",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/index/",
        "description": ""
    },
      
    
    
    
    "jong" : {
        "label":"Pulau Jong ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/jong/",
        "description": ""
    },
      
    
    
    
    "kusu" : {
        "label":"Kusu Island ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/kusu/",
        "description": ""
    },
      
    
    
    
    "lazarus" : {
        "label":"Lazarus Island and Seringat-Kias ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/lazarus/",
        "description": ""
    },
      
    
    
    
    "lfa" : {
        "label":"The Life Firing Area islands and reefs",
        "img":"https://live.staticflickr.com/4011/4250583581_89bbf49724_h.jpg",
        "link":"/articles/locations/intertidal/southernislands/lfa/",
        "description": "The last untouched southern shores are found among the islands and submerged reefs that lie within the Life Firing Area. Habitats found here include coastal forest, mangroves, rocky shores, seagrass meadows, rubbly areas and good reefs."
    },
      
    
    
    
    "rlh" : {
        "label":"Raffles Lighthouse (Pulau Satumu) ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/rlh/",
        "description": ""
    },
      
    
    
    
    "semakau" : {
        "label":"Pulau Semakau ",
        "img":"https://live.staticflickr.com/65535/54625359633_94af59fc3b_c.jpg",
        "link":"/articles/locations/intertidal/southernislands/semakau/",
        "description": ""
    },
      
    
    
    
    "sentosa" : {
        "label":"Sentosa Tanjung Rimau ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/sentosa/",
        "description": ""
    },
      
    
    
    
    "sisters" : {
        "label":"The Sisters Islands ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/sisters/",
        "description": ""
    },
      
    
    
    
    "sji" : {
        "label":"St. John's Island ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/sji/",
        "description": ""
    },
      
    
    
    
    "tbemban" : {
        "label":"Terumbu Bemban ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/tbemban/",
        "description": ""
    },
      
    
    
    
    "tekukor" : {
        "label":"Pulau Tekukor ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/tekukor/",
        "description": ""
    },
      
    
    
    
    "tpl" : {
        "label":"Terumbu Pempang Laut",
        "img":"https://live.staticflickr.com/65535/55377132175_44f6241ae6_c.jpg",
        "link":"/articles/locations/intertidal/southernislands/tpl/",
        "description": "Central area sandy with some seagrasses, large rocky areas, rubbly edges sparsely reefy."
    },
      
    
    
    
    "tpt" : {
        "label":"Terumbu Pempang Tengah ",
        "img":"https://live.staticflickr.com/65535/54522245644_9fc5a451c5_c.jpg",
        "link":"/articles/locations/intertidal/southernislands/tpt/",
        "description": "Central sandy area with some seagrasses, rubbly reefy edges. Small area (20m) of dense reef growth on north-eastern edge facing Terumbu Pempang Darat."
    },
      
    
    
    
    "traya" : {
        "label":"Terumbu Raya ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/traya/",
        "description": ""
    },
      
    
    
    
    "tsemakau" : {
        "label":"Terumbu Semakau ",
        "img":"",
        "link":"/articles/locations/intertidal/southernislands/tsemakau/",
        "description": ""
    },
      
    
    
    

}

loadPlaces()
function loadPlaces(){
    fetch("/assets/geojson/places/southernshores.geojson")
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `HTTP error! status: ${response.status}`,
                );
            }
            return response.json(); // Parse incoming string data to JSON object
        })
        .then((geoJsonData) => {
            const geoJsonLayer = L.geoJSON(geoJsonData, {
                
                style: function (feature) {
                    return defaultStyle
                    
                },
                onEachFeature: function (feature, layer) {
                    layer.bindTooltip(feature.properties.name, {
                        sticky: true, // Makes the tooltip follow the mouse
                        direction: 'auto'
                    });

                    if (
                        feature.properties.name
                    ) {
                        let name = feature.properties.name
                        if(places[name]){
                            const popup = `
                                <div class="habitat-popup">
                                    <img src="${places[name]["img"] || ""}"/>
                                    <h3>${places[name]["label"] || "No Name"}</h3>
                                    <p>${places[name]["description"] || ""}</p>
                                    <a href="${places[name]["link"] || ""}">Read more...</a>
                                </div>
                            `;
                            layer.bindPopup(popup, {
                                maxWidth: 250,
                                className: "habitat-popup-wrapper",
                                closeButton: true,
                            });

                        }
                    }


                    layer.on("mouseover", function (e) {
                        let name = e.target.feature.properties.name
                        console.log(name)
                        geoJsonLayer.eachLayer(function (l) {
                            if (
                                l.feature.properties.name ===
                                name
                            ) {
                                l.setStyle(hoverStyle);
                            }
                        });
                    });

                    // Handle mouseout (Hover Out)
                    layer.on("mouseout", function (e) {
                        let name = e.target.feature.properties.name
                        console.log(name)
                        geoJsonLayer.eachLayer(function (l) {
                            if (
                                l.feature.properties.name ===
                                name
                            ) {
                                l.setStyle(
                                    defaultStyle
                                );
                            }
                        });
                    });

                    layer.on("click", function (e) {
                        
                    });
                },
            });

            geoJsonLayer.bringToFront()
            placeLayers.push(geoJsonLayer)
        })
        .catch((error) => {
            console.error(
                "Error fetching or parsing the GeoJSON file:",
                error,
            );
        });
}