import https from 'https'

const location = 'Bhopal'
const mapboxKey = 'pk.eyJ1Ijoia2lydGFuLXdlYXRoZXItYXBwIiwiYSI6ImNtaDRuazFzdDFoYmdkM3NibXNoeXUzdDcifQ.9tcj2Hp3IU06S9LqT7APNw';

const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${location}&access_token=${mapboxKey}&limit=1`;

const rqst = https.request(url,(response)=>{
    let data ;
    
    response.on('data',(chunk)=>{
        data = chunk.toString();        
    })
    response.on('end',()=>{
        console.log(data);
    })
})
rqst.on('error',(error)=>{
    console.log('error hai bhai error\n',error);
    
})
rqst.end();