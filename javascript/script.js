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
//     var counter = 0;
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



// Currying or closure
// function add(a){
//     return function(b){
//         if(b){
//             return add(a+b);
//         }
//         return a;
//     }
// }


// function add(...args) {
//     let sum = [...args]
//     function value() {
//         return sum.reduce((a, b) => {
//             return a + b
//         })
//     }
//     const temp = function (...args) {

//         if (args.length) {
//             sum = [...sum, ...args]
//             return temp
//         }
//         else {
//             return sum.reduce((a, b) => {
//                 return a + b
//             })
//         }
//     }

//     temp.value = function () {
//         return sum.reduce((a, b) => {
//             return a + b
//         })
//     }

//     // this.value = function () {
//     //     return sum.reduce((a, b) => {
//     //         return a + b
//     //     })
//     // }

//     return temp
// }

// console.log(add(3, 4).value())

// method chaining using class
// class Add {
//     constructor(a) {
//         this.sum = a
//     }
//     getText = function (b) {
//         if (b) {
//             this.sum += b;
//             return this
//         }
//         else {
//             return this.sum
//         }
//     }

// }

// const sum = new Add(2)
// console.log(sum.getText(5).getText(7).getText())



// method chaining using function

// function Add(a) {
//     this.sum = a;

//     this.getText = function (b) {
//         if (b) {
//             this.sum += b;
//             return this
//         }
//         else {
//             return this.sum
//         }
//     }

//     return this

// }
// console.log(Add(2).getText(5).getText(7).getText())





// using object 
// function add(a) {
//     let sum = a;

//     const helper = function (b) {
//         if (b) {
//             sum += b;
//             return this
//         }
//         else {
//             return sum
//         }
//     }

//     return { helper }

// }


// console.log(add(2).helper(5).helper(7).helper())




// memoization

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


// Call,bind,apply

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
// function f1(a) {
//     return function (b) {
//         if (b) return f1(a + b)
//         return a
//     }
// }
// const number = f1(1)(2)(100)(20)(0)

// console.log(number)






// const a1 = new Map([["a", "b"], ["b", "c"], ["c", "d"]])

// console.log(a1.get("a"))
// let b1 = a1.keys()
// for (let x in a1) {
//     console.log(a1[x])
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




// function Person() {
//     return {
//         talk() {
//             return 'talking'
//         }
//     }
// }

// const p1 = Person();
// console.log(p1.talk())


// class Human {
//     talk() {
//         return 'talking';
//     }
// }

// const per1 = new Human()

// console.log(per1.talk())

// class Singer extends Human {
//     sing() {
//         return 'singing';
//     }
// }

// const sing1 = new Singer()
// console.log(sing1.sing(), sing1.talk())


// function Person(name, age) {
//     this.balance = 0;
//     this.name = name;
//     this.age = age;
//     this.id = Date.now();

// this.deposit = function (value) {
//     this.balance = this.balance + value;
// };

// this.withdraw = function (value) {
//     this.balance = this.balance - value;
// };
// }

// Person.prototype.deposit = function (value) {
//     this.balance = this.balance + value;
// };

// Person.prototype.withdraw = function (value) {
//     this.balance = this.balance - value;
// };

// const data = [];

// const obj = new Person("saurav", 35);
// data.push(obj);
// console.log(data);
// data[0].deposit(5000)
// console.log(data[0].balance)


// function foo() {
//     return {
//         name: "saurav"
//     }
// }

// console.log(foo())



// const input1 = [
//     { id: 1, name: "test1" },
//     { id: 2, name: "test2" },
//     { id: 2, name: "test3" },
//     { id: 3, name: "test4" },
//     { id: 4, name: "test5" },
//     { id: 5, name: "test6" },
//     { id: 5, name: "test7" },
//     { id: 6, name: "test8" }
// ];


// const arr = []

// const newArr = input1.filter((elem) => {
//     const isDuplicate = arr.includes(elem.id)

//     if (!isDuplicate) {
//         arr.push(elem.id)
//         return true
//     }
//     return false
// })

// console.log(arr, newArr)



// function myTimeout() {
//     return {
//         timerArray: [],
//         mySetTimeout: function (fn, delay) {

//             return this
//         },
//         clearAllTimeout: function () {
//             console.log("clear")
//         }
//     }
// }

// const myFunction = myTimeout()

// myFunction.mySetTimeout(() => {
//     console.log("1")
// }, 1000)

// myFunction.mySetTimeout(() => {
//     console.log("2")
// }, 2000)

// setTimeout(() => {
//     myFunction.clearAllTimeout()
// }, 2500)

// myFunction.mySetTimeout(() => {
//     console.log("3")
// }, 3000)

// myFunction.mySetTimeout(() => {
//     console.log("4")
// }, 4000)







// FlattenObj without key

// let embedobj = {
//     a: 1,
//     b: { c: 1, d: 2 },
//     e: { f: { g: 3, k: 9 } },
//     h: 4
// }


// const flattenObj = (obj, key) => {
//     let flatObj = {}
//     let keyVal
//     for (let i in obj) {
//         keyVal = key ? key + "." + i : i
//         if (typeof obj[i] === "object") {
//             const temp = flattenObj(obj[i])
//             for (let j in temp) {
//                 flatObj[`${keyVal}.${j}`] = temp[j]
//             }
//         }
//         else {
//             flatObj[`${keyVal}`] = obj[i]
//         }
//     }
//     return flatObj
// }



// second approach


// function flattenObj(obj, parentKey = null, res = {}) {
//     for (let key in obj) {
//         const propName = parentKey ? parentKey + "." + key : key
//         if (typeof (obj[key]) === "object") {
//             flattenObj(obj[key], propName, res)
//         } else {
//             res[propName] = obj[key]
//         }
//     }
//     return res
// }


// console.log(flattenObj(embedobj,"hi"))









// let dice = Math.floor(Math.random() * 7)

// console.log(dice)


// || && short circuiting

// const rest1 = {
//     name: "McD",
//     guests: 20
// }

// const rest2 = {
//     name: "BK",
//     guests: 0
// }

// // rest1.guests = rest1.guests || 10
// rest1.guests ||= 10
// // rest2.guests = rest2.guests || 10
// rest2.guests ||= 10

// rest1.guests = rest1.guests ?? 10
// rest1.guests ??= 10
// // rest2.guests = rest2.guests ?? 10
// rest2.guests ??= 10

// console.log(rest1.guests, rest2.guests)




// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// for (const [i, value] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${value} `)
// }


// let sum = 0;
// for (const x of Object.values(game.odds)) {
//     sum = sum + x
// }

// console.log(sum / (Object.keys(game.odds).length))

// for (const [team, odd] of Object.entries(game.odds)) {
//     const str = team === "x" ? "draw" : `victory ${game[team]}`
//     console.log(`Odd Of ${str}: ${odd}`)
// }


//MAPS

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

// gameEvents.forEach((event, key) => {
//     console.log(key, event)
// })


// const events = new Set([...gameEvents.values()])
// gameEvents.delete(64)
// console.log([...gameEvents])
// console.log(events)
// const eventsNumber = [...gameEvents.entries()]
// console.log(eventsNumber)
// console.log(`An event happened, on average, every ${90 / eventsNumber.length} minutes`)

// for (const [minute, event] of eventsNumber) {
//     console.log(`[${minute < 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${minute}:${event}`)
// }



// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//     const [type, from, to, time] = flight.split(';');
//     const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//         '_',
//         ' '
//     )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(44);
//     console.log(output);
// }

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const optionNumber = parseInt(prompt(`
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
//         `))

//         const intOption = parseInt(optionNumber)
//         if (intOption >= 0 && intOption <= this.answers.length - 1) {
//             this.answers[intOption] += 1
//         }
//         else {
//             alert("Input Correct Option")
//             this.registerNewAnswer()
//         }

//         this.displayResults("string")
//         this.displayResults("array")
//     },
//     displayResults(type = 'array') {
//         if (type === "string") {
//             console.log(`Poll results are ${this.answers.join(", ")}`)
//         }
//         else if (type === "array") {
//             console.log(this.answers)
//         }
//     }

// }


// document.getElementById("poll").addEventListener("click", poll.registerNewAnswer.bind(poll))


// Promise chaining

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//     const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//         ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;
// };

// const whereAmI = function (lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         .then(res => {
//             console.log(res)
//             return res.json()
//         })
//         .then((data) => {
//             console.log(data)
//             console.log(`you are in ${data.region},${data.country}`)
//             // return fetch(`https://restcountries.com/v2/name/${data.country}`)
//         })
//         // .then(res => res.json())
//         // .then((data) => {
//         //     console.log(data)
//         //     console.log(data[0].name)
//         //     renderCountry(data[0])
//         // })
//         .catch(err => console.log(err.message))
// }

// whereAmI(52.508, 13.381)
// whereAmI(19.037, 72.873)
// whereAmI(-33.933, 18.474)


// Promise.resolve /Promise.reject
// console.log("Test Start")
// setTimeout(() => {
//     console.log("0 Sec Timer")
// }, 0);
// Promise.resolve("Promise1 Resolved").then(data => console.log(data))
// Promise.resolve("Promise2 Resolved").then(data => {
//     for (let index = 0; index < 1000000000; index++) { }
//     console.log(data)
// })
// Promise.reject(new Error("Error")).catch(err => console.error(err))
// console.log("Test End")



// const createImg = function (url) {

//     const pr = new Promise((resolve, reject) => {

//         let imgElem = document.createElement('img')
//         imgElem.src = url
//         imgElem.addEventListener("load", function () {
//             document.querySelector('.images').append(imgElem)
//             resolve(imgElem)
//         })
//         imgElem.addEventListener("error", function () {
//             reject(new Error("Image cant be loaded"))
//         })
//     })
//     return pr
// }

// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// let imgref;
// createImg("gate_models_s_02_m.webp")
//     .then(img => {
//         console.log(img)
//         imgref = img
//         return wait(2)
//     })
//     .then(data => {
//         console.log(data)
//         imgref.style.display = "none";
//         return createImg("Ferrari-SF90-Stradale-1.jpg")
//     }).then((img) => {
//         console.log(img)
//         imgref = img
//         return wait(2)
//     })
//     .then((_) => {
//         imgref.style.display = "none";
//     })
//     .catch(err => console.error(err))


// let imgref
// const loadNPause = async function () {
//     try {
//         let img = await createImg("gate_models_s_02_m.webp")
//         console.log(img)
//         imgref = img
//         await wait(2)
//         imgref.style.display = "none";
//         img = await createImg("Ferrari-SF90-Stradale-1.jpg")
//         imgref = img
//         await wait(2)
//         imgref.style.display = "none";
//     } catch (err) {
//         console.log(err)
//     }
// }

// loadNPause()


// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//         return response.json();
//     });
// };

// Promise.all (returns whenever a promise rejects, returns an array of all the settled promises if all promises are resolved otherwise returns the error)
// (async function () {
//     try {
//         const res = await Promise.all([
//             getJSON(`https://restcountries.com/v2/name/India`),
//             getJSON(`https://restcountries.com/v2/name/Pakistan`),
//             getJSON(`https://restcountries.com/v2/name/Sri Lanka`)
//         ])
//         res.map(data => console.log(data[0].capital))
//     } catch (err) {
//         console.log(err)
//     }

// })()

// promises.race (returns the fastest settled promise(promise may be rejected or resolved.))

// const timeout = function (sec) {
//     return new Promise(function (_, reject) {
//         setTimeout(function () {
//             reject(new Error('Request took too long!'));
//         }, sec * 1000);
//     });
// };
// Promise.race([
//     getJSON(`https://restcountries.com/v2/name/India`),
//     timeout(2),
// ])
//     .then(res => console.log(res[0]))
//     .catch(err => console.error(err));


// promise.allSettled returns the settled state of all the promises

// Promise.allSettled([
//     Promise.resolve("5000"),
//     Promise.reject(new Error("Rejected")),
//     Promise.resolve("60")
// ])
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// Promise.all(returns whenver a promise rejects, returns an array of all the settled promises if all promises are resolved otherwise returns the error)
// Promise.all([
//     Promise.resolve("5000"),
//     Promise.reject(new Error("Rejected")),
//     Promise.resolve("60")
// ])
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

//  promise.any returns first fulfilled promise and it ignores the rjected promise, it always returns a fulfilled promise unless all promise are rejected
// Promise.any([
//     Promise.reject(new Error("Rejected")),
//     Promise.resolve("5000"),
//     Promise.reject(new Error("Rejected")),
//     Promise.resolve("60")
// ])
//     .then(res => console.log(res))
//     .catch(err => console.log(err))





// array map pollyfill

// Array.prototype.myMap = function (call) {
//     let mapArray = []
//     this.forEach((item) => {
//         mapArray.push(call(item))
//     })
//     return mapArray
// }

// const squaredArray = [1, 2, 3, 4].myMap((item) => item ** 2)

// console.log(squaredArray)







// call,bind pollyfill

// const obj = {
//     first: "saurav",
//     last: "maurya",

// }

// const getFull = function (age) {
//     return `${this.first} ${this.last} ${age}`
// }


// const obj1 = {
//     first: "sangita",
//     last: "rani",
//     age: 52
// }

// const bindObj1 = getFull.bind(obj)

// console.log(bindObj1(23))
// console.log(getFull.call(obj1, age))


// Function.prototype.myCall = function (ref, ...args) {
//     return this.apply(ref, args)
// }

// console.log(getFull.myCall(obj1, 23))


// Function.prototype.myBind = function (ref) {
//     return (...args) => {
//         return this.apply(ref, args)
//     }
// }

// const mybindObj = getFull.myBind(obj1)
// console.log(mybindObj(23))










// Promise.all polyfill

// const dummyapi = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(time)
//         }, time)
//     })
// }

// const promiseAllPollyfill = (promiseArray) => {
//     return new Promise((resolve, reject) => {
//         const output = []
//         promiseArray.forEach((promise, index) => {
//             promise.then((data) => {
//                 output[index] = data
//                 if (index === promiseArray.length - 1) resolve(output)
//             })
//                 .catch(err => reject(err))
//         })
//     })
// }

// promiseAllPollyfill([dummyapi(1000), dummyapi(2000), dummyapi(5000)]).then(data => console.log(data)).catch(err => console.log(err))

