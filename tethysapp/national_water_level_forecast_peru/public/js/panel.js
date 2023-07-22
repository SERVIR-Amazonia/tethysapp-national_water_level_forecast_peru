// ------------------------------------------------------------------------------------------------------------ //
//                                            PANEL DATA INFORMATION                                            //
// ------------------------------------------------------------------------------------------------------------ //
var global_comid;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const loader = `<div class="loading-container" style="height: 350px; padding-top: 12px;"> 
                    <div class="loading"> 
                    <h2>LOADING DATA</h2>
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span> 
                    </div>
                </div>`; 


async function showPanel(e) {
    
    // get variables of the layer
    const code = e.layer.feature.properties.code;
    const comid = e.layer.feature.properties.comid;
    const name = e.layer.feature.properties.name;
    const basin = e.layer.feature.properties.basin;
    const river = e.layer.feature.properties.river;
    const lat = e.layer.feature.properties.latitude;
    const lon = e.layer.feature.properties.longitude;
    const alt = e.layer.feature.properties.elevation;
    const loc1 = e.layer.feature.properties.loc1;
    const loc2 = e.layer.feature.properties.loc2;

    // Show the data panel
    $("#panel-modal").modal("show")

    // Updating the comid
    global_comid = comid
    
    // Add data to the panel
    $("#panel-title-custom").html(`${code} - ${name}`)
    $("#station-comid-custom").html(`<b>COMID:</b> &nbsp ${comid}`)
    $("#station-river-custom").html(`<b>RIO:</b> &nbsp ${river}`)
    $("#station-basin-custom").html(`<b>CUENCA:</b> &nbsp ${basin}`)
    $("#station-latitude-custom").html(`<b>LATITUD:</b> &nbsp ${lat}`)
    $("#station-longitude-custom").html(`<b>LONGITUD:</b> &nbsp ${lon}`)
    $("#station-altitude-custom").html(`<b>ALTITUD:</b> &nbsp ${alt}`)
    $("#station-locality1-custom").html(`<b>DEPARTAMENTO:</b> &nbsp ${loc1}`)
    $("#station-locality2-custom").html(`<b>PROVINCIA:</b> &nbsp ${loc2}`)


    // Add the dynamic loader
    $("#hydrograph").html(loader)
    $("#visual-analisis").html(loader)
    $("#metrics").html(loader)
    $("#corrected-forecast").html(loader)

    // We need stop 300ms to obtain the width of the panel-tab-content
    await sleep(300);

    // Retrieve the data
    $.ajax({
        type: 'GET', 
        url: "get-data",
        data: {
            comid: comid,
            codigo: code,
            nombre: `${code} - ${name}`,
            width: `${$("#panel-tab-content").width()}`
        }
    }).done(function(response){
        // Add data and plot to panel
        $("#modal-body-panel-custom").html(response)
        
        // Set active variables for panel data 
        active_code = code.toLowerCase();
        active_comid = comid;
        active_name = name.toUpperCase();
    })

}
