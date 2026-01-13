interface JsonPlaceHolderApi{
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

const fetchData = async(url:string)=>{
    try {
        const res = await fetch(url)
        if(!res.ok){
            throw new Error(`HTTP error ${res.status}`)
        }
        const data:JsonPlaceHolderApi = await res.json()
        console.log(data); 
    } catch (e:any) {
       console.log(e.message);
    }
}
fetchData('https://randomuser.me/api/')

