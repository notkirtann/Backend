// ? Array ENUM and Tuples

//$ decalaring array
const players:string[] = ["Cristiano","Sergio"]
const jersey:number[] = [1,2,3,4,5,6,7]

const rating:Array<number> = [1.4,5.2]

type PlayerDetail ={
    name:string,
    jerseyNo:number
}
const playerD:PlayerDetail[]=[
    {name:"fede",jerseyNo:8},
    {name:"goat",jerseyNo:7}
]
    //! readonly array
const clubs:readonly string[] =['RMCF','FCB','AC Milan']
// clubs.push('Varca') //@ readonly dont allow push

const city:number[][] =[
    [1,2,3],
    [4,5,6]
]

// $ Tupples
let playerTuple:[string,number] =["a",1]
// playerTuple=[20,"a"] //@ wont work because seq matter

    //!readonly tuple
const locationTuple:readonly[number,number] =[28.744,75.17824]

    //!named tuple
const clubTuple:[name:string,found:number] =["Read-Madrid",1902 ]

// $ ENUM
enum bestClub{
    RealMadrid,
    BayernMunich,
    AC_Milan
}
const clubSelect = bestClub.RealMadrid

enum Status{ //code Not good practise
    POLICE = 100,
    AMBULANCE, //@automatic got 101
    OTHER //@automatic got 102
}

enum MadridCaptain{
    FEDE="Fede Valverde",
    DANI="Dani Carjaval",
    VINIJR="Vinicis Jr."
}

function clubCaptain(who:MadridCaptain){
    console.log(`Current Match Captain is ${who}`);
}
clubCaptain(MadridCaptain.VINIJR)

//! Hetrogenous Values in ENUM

enum playerData { //@ not a good practise to create a hetrogenous value enums
    jerseyNo=1,
    name="Courtois"
}

//@ with tuple  dont use push it gives unexpected behaviour and difficult to debug

