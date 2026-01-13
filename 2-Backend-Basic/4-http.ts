import https from 'https'

const location:string = 'Bhopal'
const mapboxKey:string = 'pk.eyJ1Ijoia2lydGFuLXdlYXRoZXItYXBwIiwiYSI6ImNtaDRuazFzdDFoYmdkM3NibXNoeXUzdDcifQ.9tcj2Hp3IU06S9LqT7APNw';

const url:string = `https://api.mapbox.com/search/geocode/v6/forward?q=${location}&access_token=${mapboxKey}&limit=1`;

const rqst = https.request(url,(response)=>{
    let data:string=''

    response.on('data', (chunk: Buffer) => {
        data += chunk.toString(); // APPEND the chunk, don't overwrite!
    });

    response.on('end', () => {
        try {
            const body = JSON.parse(data);
            console.log('Full Response:', body);
        } catch (e) {
            console.error('Could not parse JSON:', e);
        }
    });
})
rqst.on('error', (error: Error) => {
    console.log('Error hai bhai error:\n', error.message);
});

rqst.end();