const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ3Jpc2g5NiIsImEiOiJjand3bXF5M2UwOGZ5NDBwbXlseG81cmtnIn0.DKMXfkQ0WUtqO06SJ4F8TQ&limit=1'
    request({ url, 'json': true},(error, { body })=>{
        if(error){
            callback('Unable to connect to map service', undefined);
        } else if(body.features.length === 0){
            callback('Unable to find map\'s location', undefined);
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;