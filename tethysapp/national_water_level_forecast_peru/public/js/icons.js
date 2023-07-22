// ------------------------------------------------------------------------------------------------------------ //
//                                     COLOR MARKER ACCORDING TO THE ALERT                                      //
// ------------------------------------------------------------------------------------------------------------ //

// Function to construct Icon Marker 
function IconMarker(type, rp) {
    const IconMarkerR = new L.Icon({
      iconUrl: `${server}/static/${app_name}/images/${type}/${rp}.svg`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });
    return IconMarkerR;
  }

// Icon markers for STATIONS
const station_R000 = IconMarker("station","0");
const station_R002 = IconMarker("station","2");
const station_R005 = IconMarker("station","5");
const station_R010 = IconMarker("station","10");
const station_R025 = IconMarker("station","25");
const station_R050 = IconMarker("station","50");
const station_R100 = IconMarker("station","100");

function station_icon(feature, latlng) {
    switch (feature.properties.alert) {
        case "R0":
            station_icon = station_R000;
            break;
        case "R2":
            station_icon = station_R002;
            break;
        case "R5":
            station_icon = station_R005;
            break;
        case "R10":
            station_icon = station_R010;
            break;
        case "R25":
            station_icon = station_R025;
            break;
        case "R50":
            station_icon = station_R050;
            break;
        case "R100":
            station_icon = station_R100;
            break;
    }
    return L.marker(latlng, { icon: station_icon });
}

function add_station_icon(layer, RP){
    const st = L.geoJSON(layer.features.filter(item => item.properties.alert === RP), {
        pointToLayer: station_icon,
    });
    return(st)
} 