// console.log("saurav")


// // const button1 = document.querySelectorAll("button")[0]
// // console.log(button1)


//  var interval;

//  function button1Handler(){
//     for(var i=1;i<=10;i++)
//     {   
//         function inner(i){
//             interval= setTimeout(timeout,1000*i)
//             function timeout(){
//                 console.log(`Button1 is clicked ${i} times`)
//             }
//         }
//         inner(i)
//     }  
//  }


// var button1Handler2 = ()=>{
//  console.log("button 2 is clicked")
// }

// document.querySelectorAll("button")[0].addEventListener("click",button1Handler)

// function Outerone(){
//     var counter =0;
//      this.increment= function(){
//         counter=counter+1
//         console.log(counter)
//      }
//      this.decrement=function(){
//         counter=counter-1
//         console.log(counter)
//      }
// }

// const counter1 = new Outerone()

// counter1.increment()
// counter1.increment()
// counter1.increment()


// function add(a){
//     return function(b){
//         if(b){
//             return add(a+b);
//         }
//         return a;
//     }
// }



// console.log(add(2)(3)(8)())

// function calc(number){
//     let sum=0
//     for(let i=1;i<=number;i++){
//         sum+=i;
//     }
//     return sum
// }

// console.log(calc(5))


// function memoize(func){
//     var cache={}
//     return function(n){
//         if (n in cache)
//         { 
//             return cache[n]
//         } 
//         else{
//             cache[n]=func(n)
//             return cache[n]
//         }
//     }
// }

// const memo = memoize(calc)
// let sumMemo = memo(8)

// console.time()
// console.log(sumMemo)
// console.timeEnd()

// console.time()
// console.log(sumMemo)
// console.timeEnd()

// function Person(first,middle,last,gender){
//     this.firstName=first;
//     this.middleName=middle;
//     this.lastName=last;
//     this.gender=gender;
//     this.fullname=function(){
//        return this.firstName+" "+this.middleName+" "+this.lastName
//     }
// }



// const person1 = new Person("saurav","kumar","maurya","male")
// console.log(person1.fullname()) 

// let getFullName = function(city,state){
//     return this.firstName+" "+this.lastName+" from "+city+","+state;
// }


// const person1 ={
//     firstName:"Saloni",
//     lastName:"Rani",
// }

// const person2 = {
//     firstName:"saurav",
//     lastName:"maurya"
// }

// let person3 = getFullName.bind(person1,"patna","bihar")
// console.log(person3())
// console.log(getFullName.call(person2,"bangalore","karnataka"))
// console.log(getFullName.apply(person2,["bangalore","karnataka"]))




// Function.prototype.mybind=function(){
//     console.log("fun")
// }

// function fun(){}

// fun.mybind()


//promise



//call, bind, apply

// const person = {
//     name:"saurav",
//     age:"28",
// }

// const getData = function(city,state){
//     return `Name is ${this.name}, age is ${this.age} and from ${city},${state}` 
// }


// const person1={
//     name:"Aarti",
//     age:"24"
// }

// let data = getData.bind(person,'patna','bihar')
// console.log(data())


// promise
// function returnNumber(number){
//     const pr = new Promise(function(resolve,reject){
//         if (number<=0){
//             let err = new Error("Please give a number greater than 0")
//             reject(err)
//         }
//         else{
//             resolve(number)
//         }
//     });

//     return pr
// }

// const promise=returnNumber(-1)

// promise.then(function(data){
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })


// high order function

// const area = function(r){
//     return Math.PI*r*r;
// }

// const circumference = function(r){
//     return 2*Math.PI*r;
// }

// const diameter = function(r){
//     return 2*r;
// }


// Number.prototype.calculate = function(logic){
//     return logic(this)
// }

// let r = 5;

// console.log(calculate(diameter))


// console.log(r.calculate(area))


// const names={first:"saurav",second:"kumar","third":"maurya"}
// const names1=["saurav","kumar","maurya"]

// console.log(names["first"])


// class example

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     getData(){
//         return `I am ${this.name} and i am ${this.age} years old.`
//     }
// }

// const me = new Person("saurav",28)
// console.log(me.getData())


// function example
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.getData=function(){
//         return `I am ${this.name} and i am ${this.age} years old.`
//     }
// }

// const me = new Person("saurav",28);
// console.log(me.getData())


// const human={
//     kind:"human",
//     getNature:function(name) {
//         return `${name} is greedy`
//     }   
// }

// const saurav = Object.create(human)
// console.log(saurav.getNature("saurav"))


// factory element

// function FactoryElement(element,text,color){
//     const el=document.createElement(element)
//     el.innerText=text
//     el.style.color=color
//     document.body.append(el)
//     return {
//         el,
//         setText(text){
//             el.innerText=text
//         },
//         setColor(color){
//             el.style.color=color
//         }
//     }
// }

// const h1= FactoryElement("h1","Saurav","red");
// console.log(h1.el)
// h1.setColor("blue")
// h1.setText("maurya")



// constructor function

// function FactoryElement(element, text) {
//     this.el = document.createElement(element)
//     this.el.innerText = text
//     document.body.append(this.el)
//     this.el.addEventListener("click",()=>{
//         console.log(this.el)
//     })
// }

// const p = new FactoryElement("p","kumar")

// const text = ["a","b","c"]

// const textNodes= text.map(item=>{
//     return new FactoryElement("p",item)
// })

// console.log(textNodes[0])



//recursive function
// var arr=[1,2,3,4,5,6,7,8]

// function recusive(arr){
//     if(arr.length){
//         let el=arr[0]
//         arr.shift()
//         console.log(el)
//         recusive(arr)
//     }
//     else{
//         return
//     }
// }

// recusive(arr)




// function cuurrying
// function f1(a){
//     return function(b){
//         if(b) return f1(a+b)
//         return a
//     }
// }
// const number=f1(1)(2)(100)(20)(0)

// console.log(number)






// const a = new Map([["a","b"],["b","c"],["c","d"]])

// console.log(a.get("a"))
// let b = a.keys()
// for(let x of b){
//     console.log(x)
// }


// rest operator (numbers to array)

// const sum =function(a,b,...args){
//     console.log(a+b)
//     console.log(args)
//     let sum = 0
//     for (let x of args)
//     {
//         sum+=x
//     }
//     return sum
// }

// console.log(sum(1,2,3,1,2,3))


// spread operator (array to number)

// const array = [1,2,3,4,5]

// const sum = function(a,b,c){
//     return a+b+c;
// }

// console.log(sum(...array))

//rest and spread 
// const obj = {
//     name:"saurav",
//     age:"28",
//     city:"patna"
// }

// const {age,...rest} = obj
// console.log(age,rest)

// var obj2={
//     ...obj,age:"30"
// }

// console.log(obj2)




function Person() {
    return {
        talk() {
            return 'talking'
        }
    }
}

const p1 = Person();
console.log(p1.talk())


class Human {
    talk() {
        return 'talking';
    }
}

const per1 = new Human()

console.log(per1.talk())

class Singer extends Human {
    sing() {
        return 'singing';
    }
}

const sing1 = new Singer()
console.log(sing1.sing(), sing1.talk())