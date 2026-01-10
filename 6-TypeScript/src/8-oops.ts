// ? Objected Oriented Programming

//$ Classes
class Club {
    name:string;
    found:number;

    constructor(name:string,found:number){
        this.name = name;
        this.found = found;
    }
}
const RealMadrid = new Club("Real Madrid",1902)

RealMadrid.found = 1902;
RealMadrid.name = "Los Blancos"

//$ Excess Modifier

class Player{  
    private name:string; //@excessable only within class
    private num:number;
    private salary="10M";

    public constructor(name:string,num:number){
        this.name = name;
        this.num = num;
    }
    reveal(){
        return `Salary of Jersey Num. ${this.num} aka ${this.name} is ${this.salary}`
    }

    protected Agent = "Jorge Mendes" //@excess by extended class and class
    #agentContract = "2-years" //@ another way of declarinng private

    agentContract(){
        return `Agent's ${this.#agentContract} of contract is left`
    }
}

class PlayerPersonal extends Player{
    getAgent(){
        return`Agent name is${this.Agent}` //@ only excess by class and the extended class only.
    }
    
}

const sal = new Player("Fede",8)

//!read only properties in class

class Stadium{
    private readonly capacity:number ; //@can be assigned once than can only be read 

    constructor(capacity:number){
        this.capacity = capacity
        console.log(`Stadium total capacity is ${capacity}`);    
    }
}

class Coach{
    private _coachSalary = 10
    
    get coachSalary(){
        return this._coachSalary
    }

    set coachSalary(value:number){
        if(value<5){
            throw new Error("Deal Cancel")
        }else{
            this._coachSalary=value
        }
    }
}
const deal = new Coach()
deal.coachSalary=10;

// $ Static Members

class PSG{
    static name = "Paris Saint Germain"
    constructor(public found:number){

    }
}
console.log(PSG.name); //@accessed by dot on class name directly

// $ Abstract Class

abstract class Drink{
    abstract make():void 
}

class Chai extends Drink{
    make(){
        console.log('level dekh kr baat kiya kr laala');
        
    }
}

// $ Composition Cocept

class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater:Heater){} //@when we add Heater class Chai Maker we got access of Heater's all function

    make(){
        this.heater.heat
    }
}
