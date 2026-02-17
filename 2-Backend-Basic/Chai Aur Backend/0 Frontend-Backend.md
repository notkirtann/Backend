## PROXY and CORS
### proxy benifits:
1. security purpose ke liye
2. CORS issue solve krne ke liye -
    * cors issue in detail:
    jab hum frontend se backend ko request bhejte hai toh browser same origin policy follow krta hai jisme agar frontend aur backend alag alag domain pr hai toh browser request ko block kr deta hai isliye hume proxy ka use krna padta hai jisse ki hum ek hi domain se sare request bhej ske aur receive kr ske backend se bina kisi CORS issue ke.
    
    * proxy isme yeh krta hai ki jab hum frontend se request bhejte hai toh wo request pehle proxy server pr jata hai jo ki same origin pr hota hai jisse browser ko lagta hai ki request same origin se aa rahi hai aur fir proxy server wo request backend server pr forward kr deta hai jisse CORS issue solve ho jata hai.
    
    * har ek request ke sath browser ek preflight request bhejta hai jisme OPTIONS method use hota hai jisse server ko pata chalta hai ki actual request kya hogi aur kya wo allow karta hai ya nahi agar server allow karta hai toh fir actual request bheji jati hai warna block kar diya jata hai.
3. ek hi domain se sare request handle krne ke liye
4. frontend backend alag alag port pr run krne ke liye
5. deployment ke time ek hi domain se serve krne ke liye

## AXIOS:
* axios ek promise based HTTP client library hai jo ki browser aur node.js dono me use hota hai.
* axios ka use krke hum easily HTTP request bhej sakte hai aur response receive krh sakte hai.
* axios me hum GET, POST, PUT, DELETE etc. request bhej sakte hai.
why axios not fetch?
1. axios automatic JSON data ko parse kr deta hai jabki fetch me hume manually parse krna padta hai.
2. axios me hum request aur response interceptors use kr sakte hai jabki fetch me aisa nahi hota.
3. axios me hum request timeouts set kr sakte hai jabki fetch me aisa nahi hota.
4. axios me hum request cancel kr sakte hai jabki fetch me aisa nahi hota.
5. axios me hum automatic transform request aur response data kr sakte hai jabki fetch me aisa nahi hota.

### bad practise in production
agar frontend mai jaake npm run build krke ek build banate hai jo hi same hota hai vercel wagera pr bhi toh wo ek static code deta hai jo mainly 3 file mai hota hai HTML CSS JS aur agar us build folder ko directly backend folder me shift krde aur 

aur middle ware ka use krek usko statics file ki tarah serve krde toh saare nakhre khatam ho jaate hai
```javascript
app.use(express.static('dist'))  // dist is build folder name
```
but agar front end me kuch change kra toh same change reflect nhi hoga uske liye dubara frontend mai npm build krna hoga aur phir new folder ko shift krna hoga


### online ide
- stackblitz
- codespace
- sandbox
all these provides complete envir. for production and devlopment you dont need to add files and all locally just create a new project and start coding 

## data modeling tools
- moon modeler
- eraser.io
provide visual representation of database schema and help in designing and managing databases effectively.

### refrencing in models to other 
eg todo created by user
```javascript
createdBy :{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
}
```

eg of creating model and inside that one model there is other object which is having other model
```javascript
subTodo :[
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'SubTodo'
    }
] //array of subTodo references
```


