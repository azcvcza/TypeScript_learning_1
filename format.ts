let isDone:boolean = false;
let line:number = 42;
let _name:string = "Anders";

let isDone1 = false;
let lines =42;
let _name1 = "anders";

let notSure:any = 4;
notSure ="maybe a string instead";
notSure = false;

const numLivesForCat =9;
//numLivesForCat =1;

let list1:number[] =[1,2,3];

let list2:Array<number> = [1,2,3];

function _Alert():void{
    alert("I'm a little annoying box!");
}

let f1 = function(i:number):number{
    return i*i;
}

let f2 = function(i:number){return i*i}

let f3 = (i:number):number => {return i*i}

let f4 =(i:number) =>{return i*i}

let f5 =(i:number)=>i*i;

interface Person{
    name:string;
    age?:number;
    move():void;
}
class PointPerson implements Person{
    name:string;
    move(){}
}
let p:Person={name:"bobby",move:()=>{}};

let validPerson:Person = {name:"fuck",age:42,move:()=>{}}

let invalidPerson:Person ={name:"Bobby",age:true,move:()=>{}}

let mySearch:SearchFunc;

mySearch = function(src:string,sub:string){
    return src.search(sub)!=-1;
}


class Point{
    x:number;

    constructor(x:number,public y:number=0){
        this.x=x;
    }
    dist(){
        return Math.sqrt(this.x*this.x +this.y*this.y);
    }
    static origin = new Point(0,0);
}

let p1 = new Point(10,20);
let p2 = new Point(25);

class Point3D extends Point{
    constructor(x:number,y:number,public z:number){
        super(x,y);
    }
    dist(){
        let d = super.dist();
        return Math.sqrt(d*d+this.z*this.z);
    }
}

module Geometry{
    export class Square{
        constructor(public sideLength:number =0){

        }
        area(){
            return Math.pow(this.sideLength,2);
        }
    }
}

let s1 = new Geometry.Square(5);
import G = Geometry;

let s2 = new G.Square(10);

class Tuple <T1,T2>{
    constructor(public item1:T1,public item2:T2){

    }
}

interface Pair<T>{
    item1:T;
    item2:T;
}

let pairToTuple = function<T>(p:Pair<T>){
    return new Tuple(p.item1,p.item2);
}

let tuple = pairToTuple({item1:"Hello",item2:"world"});

let _name2= 'Tyrone';
let greeting = `Hi ${name},how are you?`
let multiline = `This is an example of a
multiline string`

interface ReadOnlyPerson{
    readonly name:string;
    readonly age:number;
}

var p3:ReadOnlyPerson={name:'Tryone',age:42}

class Car {
    readonly make:string;
    readonly model:string;
    readonly year = 2018;

    constructor(){
        this.make="Unknown make";
        this.model = "Unknown model";
    }
}



