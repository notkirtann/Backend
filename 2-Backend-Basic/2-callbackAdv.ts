export {}
interface GeoData{
    lat:number;
    long:number
}

const geoCode = (address: string, callback: (data: GeoData) => void): void => {
    setTimeout(() => {
        const data: GeoData = {
            lat: 0,
            long: 20
        };
        callback(data);
    }, 2000);
};

geoCode('Bhopal', (data) => {
    console.log("Location Data:", data);
});

function sum(v1:number,v2:number,callback:(result:number)=>void):void{
    setTimeout(() => {
        callback(v1 + v2);
    }, 2000);
}

sum(1, 2, (ans) => {
    console.log("The sum is:", ans);
});

console.log('Hello Node');