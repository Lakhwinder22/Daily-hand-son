//1
const Parent ={
    fname:"Lakhi",
    age:22,
    Year: 2021,
    show:function(Chat){
        console.log("Hii",Chat);

    }

}
let child={
    fname:"Lakhu"
}
child.__proto__=Parent;
console.log(child.Year);
Parent.show.call(child,"hey")


2.
console.log(child.__proto__)//Parent prototype
console.log(child.__proto__.__proto__)//object
console.log(child.__proto__.__proto__.__proto__)//null

//3.
array=[1,2,3,4,5]
let add=array.reduce((add,cur)=>add+=cur,0)
console.log(add);


//4.
function Lakhu(){
    console.log(Object.keys(child));
}
Lakhu()