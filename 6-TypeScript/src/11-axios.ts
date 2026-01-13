
import axios, { type AxiosResponse } from 'axios';

// @genralized way of fetching data from api using get
//# axios.get('https://randomuser.me/api/')
//#     .then(res=>{
//#         console.log(res.data);
//#     })

//@ how to do in typescript

interface RandomUser{
    results:[]
    info:{}
}
const fetchData = async(url:string)=>{
    try {
        const res:AxiosResponse<RandomUser> = await axios.get(url) //@assigning axios respose as datatype provides suggestion what all api res have
        console.log(res.data.results); 
        //@like res.data res.status res.config etc. etc. 
    } catch (e:any) {
        if(axios.isAxiosError(e)){
            console.log(e.message);
            if(e.response?.status){
                console.log(e.response);
            }
        }
    }
}
fetchData('https://randomuser.me/api/')