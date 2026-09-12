'use strict'

//console.log('Hello')

// let messger = 'nope'

// console.log(messager)

// messger = 'yep'

// console.log(messager)

//можна змінювати нп. з nope на yep як показано вище


// const nomess = 'Nope'

// console.log(nomess)

// nomess = 'yep'

// console.log(nomess)

//не можна змінювати нп. з nope на yep як показано вище

//console.log('16' / '2')

// воно зробило з строки число ; неявне преобразованя!

// console.log(Boolean(0))
// console.log(Boolean(NaN))
// console.log(Boolean(''))
// console.log(Boolean(null))
// console.log(Boolean(undefined))

//завжди false всі осиальні в true


// let year = 3000

// if (year == 2025 ){
//     console.log('Ye boiiii')
// }else if (year == 3001){
//     console.log('YEeee')
// }else{
//     console.log('fuckoff')
// }

//оператори else if ии


// alert('здарова')

// let ilelat = prompt('скіки років')

// if(ilelat > 18){
//     console.log('okey')
// }else if (ilelat == 18){
//     console.log('best')
// }else{
//     console.log('nope')
// }


// let count = 0

// while(count < 17){
//     console.log(count)
//     count++
// }


// for(let i = 0 ; i <= 5 ; i++){
//     console.log(i)
// }


// function nektoOne() {
//     console.log('hii')
// }

// nektoOne()

// let myAge = 19

// let myFunction = () => {
//     if(myAge <= 18){
//         for( let i = 0 ; i < 100 ; i++){
//         console.log('шкет')
//         }
//     }else{
//         console.log('бвзвру')
//     }
// }


// myFunction()


// let myObject = {
//     login : 'Sasha',
//     password : '23032009',
//     leave : 'Warszaw',
//     from : 'Ukraine'
// }


// console.log(myObject.login)



//""""""""""""""""""""""""""""""""""""""""""""""""""



// let obj1 = {
//     name : 'sasha' , 
//     age : 16 ,
//     adress : {
//         city : 'Warszaw' , 
//         codPocztowy : '233221' ,
//     }

// }

// let obj2 = {
//     name : 'sasha' , 
//     age : 16 ,
//     adress : {
//         city : 'Warszaw' , 
//         codPocztowy : '233221' ,
//     }

// }

// let abjequal = (objEqual1 , objEqual2) => {
//     let key1 = Object.keys(objEqual1)
//     let key2 = Object.keys(objEqual2)

//     if (key1.length !== key2.length){
//         return false
//     }

//     for(let keyss in objEqual1){
//         let value1 = objEqual1[keyss]
//         let value2 = objEqual2[keyss]
//         let areValue = 
//         typeof value1 === 'object' && typeof value2 === 'object'
        
//         if(areValue){
//             return abjequal(value1 , value2)
//         }

//         if(value1 !== value2){
//             return false
//         }
//     }


//     return true
// }

// console.log('рівні ці обєкти?' , abjequal(obj1 , obj2))


// цей весь код виконує глибоке зрівнення 2 обєктів!!!!!


//""""""""""""""""""""""""""""""""""""""""""""""""""


// let obj1 = {name : 'Sasha'}
// let obj2 = { ...obj1}

// obj2.name = 'Vasya'

// console.log('obj1:', obj1)
// console.log('obj2:', obj2)

// дублікат обєкта

//""""""""""""""""""""""""""""""""""""""""""""""""""

// let User = {
//     name : 'sasha',
//     age : '17',
// }

// User.sayHello = function () {
//     console.log('Привіт мне звати ' + this.name + ' i мені ' + this.age + ' років')
// }

// User.sayHello()

//""""""""""""""""""""""""""""""""""""""""""""""""""

// let calculator = {
//     a: 10,
//     b: 15,
//     sum: function() {
//         return this.a + this.b
//     },
//     multiply: function() {
//         return this.a * this.b
//     }
// }

// console.log(calculator.sum())
// console.log(calculator.multiply())

//""""""""""""""""""""""""""""""""""""""""""""""""""

// let bankAccount = {
//     owner : 'Sasha' ,
//     balance : 1500 ,
//     deposit: function (amount) {
//         this.balance += amount
//     },
//     withdraw: function(amount) {
//         if(amount < this.balance){
//             this.balance -= amount
//             return this.balance;
//         }else{
//             return 'Недостатньо коштів'
//         }
//     },
//     showBalance: function(){
//         console.log('Баланс користувача ' + this.owner + ': ' + this.balance + 'грн')
//     }
// }

// bankAccount.deposit(1000)
// bankAccount.withdraw(500)
// bankAccount.showBalance()

//""""""""""""""""""""""""""""""""""""""""""""""""""

// let car = {
//     brand : 'Volkswagen',
//     model : 'Pasat',
//     tank : 35,
//     fuelCapacity : 80,
//     refuel: function(amount){
//         this.tank += amount;
//         if(this.tank > this.fuelCapacity){
//             this.tank = this.fuelCapacity;
//         }
//     },
//     driver: function(distance){
//         let fuelNeed = distance * 0.1;
//         if(fuelNeed > this.tank){
//             return 'Недостатньо пального';
//         }else{
//             this.tank -= fuelNeed;
//         }
//     },
//     showStatus: function(){
//         console.log('Автомобіль ' + this.brand + ' ' + this.model + ' має ' + this.tank + 'л пального в баку з ' + this.fuelCapacity + 'л')
//     }
// }

// car.refuel(30);
// car.driver(100);
// car.showStatus();

//""""""""""""""""""""""""""""""""""""""""""""""""""

// МАСИВИ

//""""""""""""""""""""""""""""""""""""""""""""""""""

// let numbers = []
// for(let i =1 ; i<=10  ; i++){
//     numbers.push(Math.floor(Math.random() * 100) + 1)
// }
// console.log('Массив:', numbers)

// let evenNumbers = numbers.filter(numbers => numbers % 2 === 0)

// console.log('Максимальне значення:', Math.max(...numbers))
// console.log('Мінімальне значення:', Math.min(...numbers))
// console.log(numbers.sort((a,b) => a - b))
// console.log(evenNumbers)

//""""""""""""""""""""""""""""""""""""""""""""""""""

// let numbers = []
// for(let i = 0 ; i < 10 ; i++){
//     numbers.push(Math.floor(Math.random()* 100) + 1)
// }
// numbers.forEach(function(num){
//     if(num > 40 ){
//         console.log('число:', num, 'Квадрат:', num * num)
//     }
    
// })

//"""""""""""""""""""""""""""""""""""""""""""""""""""

// let numbers = [10 , 23, 1, 33, 12, 43, 92]
// let number10 = numbers.map(num => 'Число: ' + num * 10)

// console.log(number10)

//"""""""""""""""""""""""""""""""""""""""""""""""""""

// let numbers  = [ 10, 23, 1, 33, 12, 43, 92]

// let numberorg = numbers.map(numbers => ({original: numbers, isEven: numbers % 2 === 0})
// )

// console.log(numberorg)

//"""""""""""""""""""""""""""""""""""""""""""""""""""

// let names = ["Sasha", "Vasya", "Petro", "Anna", "Olga"]

// let nameUpperCase = names.map(names => names.toUpperCase())

// console.log(nameUpperCase)
// console.log(names)

//"""""""""""""""""""""""""""""""""""""""""""""""""""

// let name = ["Sasha", "Vasya", "Petro", "Anna", "Olga"]

// let nameInfo = name.map(name => ({
//     name: name,
//     length: name.length,
//     isShort: name.length < 5
// }))

// console.log(nameInfo)

//"""""""""""""""""""""""""""""""""""""""""""""""""""

// let numbers = [10, 23, 1, 33, 12, 43, 92]

// let sum = numbers.reduce((acc , num) => acc + num , 0)

// console.log(sum)


//"""""""""""""""""""""""""""""""""""""""""""""""""""

// let numbers = [10, 23, 1, 33, 12, 43, 92]

// let maxNumbers = numbers.reduce((max , num) => (num > max ? num : max) , numbers[0])

// console.log(maxNumbers)

//"""""""""""""""""""""""""""""""""""""""""""""""""""

// let numbers = [10, 23, 1, 33, 12, 43, 92]

// let evenNumbers = numbers.reduce((even , num) => (num % 2 === 0 ? [...even , num] : even ) , [])

// console.log(evenNumbers)

//"""""""""""""""""""""""""""""""""""""""""""""""""""

// let numbers = [10, 23, 1, 33, 12, 43, 92]

// let evenAndNoEvenNumbers = numbers.reduce((acc , num) => {
//     if(num % 2  === 0){
//         acc[num] = 'even'
//     }else{
//         acc[num] = 'odd'
//     }
//     return acc;
// }, {})

// console.log(evenAndNoEvenNumbers)

//"""""""""""""""""""""""""""""""""""""""""""""""""""

// let numbers = [10, 23, 1, 33, 12, 43, 92]

// let numbers20 = numbers.reduce((acc , num) => {
//     if(num > 20){
//         acc.push(num)
//     }
//     return acc;
// }, [])

// console.log(numbers20)

//"""""""""""""""""""""""""""""""""""""""""""""""""""

// let numbers = [10, 23, 1, 33, 12, 43, 92]

// let numberSquare = numbers.map(num => num * num)

// let sumSquare = numberSquare.reduce((even , num) => (num % 2 === 0? even + num :even ) ,0 )

// let evenSquare = numberSquare.forEach(num => {
//     if(num > 1000 ){
//         console.log(num)
//     }
// })

//"""""""""""""""""""""""""""""""""""""""""""""""""""

// КОНЕЦЬ МАСИИВАМ

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// JSON

//""""""""""""""""""""""""""""""""""""""""""""""""""""


// let user = {
//     name : 'Sahsa',
//     age : 16,
//     city : 'Warszaw',
//     address : {
//         street : 'Grzybowska',
//         zipcode : '00-131'
//     },
//     hascat : true,
//     todoe : ['learn js', 'sleap' , 'play']
// }

// let JSONUserString = JSON.stringify(user)
// let parsedJSONUserString = JSON.parse(JSONUserString)

// console.log('JSON Object:' , parsedJSONUserString)

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// CLasses

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// class Person {
//     constructor(name , age , city){
//         this.name = name
//         this.age = age
//         this.city = city
//     }

//     sayHello () {
//         console.log("Привет, меня зовут " + this.name + ", мне " + this.age + " лет, я из города " + this.city)
//     }
// }

// let personNameEgaCity = new Person('Sasha' , 16, 'Warszaw')

// personNameEgaCity.sayHello()

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// class Student {
//     constructor(name , grade){
//         this.name = name
//         this.grade = grade
//     }

//     addGrade(points){
//         this.grade.push(points)
//     }

//     getAverageGrade(){
//         if(this.grade.length === 0) return 0
//         return this.grade.reduce((sum , gradeMax) => sum + gradeMax , 0) / this.grade.length
//     }
// }

// let studentSasha = new Student ('sasha' , [7 , 10 , 9 , 5 , 11])

// studentSasha.addGrade(12)
// console.log(studentSasha.grade)
// console.log(studentSasha.getAverageGrade())

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// class Book {
//     constructor(title , author, year , genres){
//         this.title = title
//         this.author = author
//         this.year = year
//         this.genres = genres
//     }

//     addGenres(genresType){
//         this.genres.push(genresType)
//     }
//     getInfo (){
//         return ('Книга:' + this.title + ', автор:' + this.author + ', год:' + this.year + ', жанры:' + this.genres.join(', '))
//     }
// }

// let bookInfoTell = new Book('Война и мир' , 'Лев Толстой' , 1869 , ['Роман' , 'Исторический'])

// bookInfoTell.addGenres('Философский')

// console.log(bookInfoTell.getInfo())

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// class end

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let message = () => {
//     alert('hello')
// }

// let setTimeoutId = setTimeout(message , 3000)

// clearTimeout(setTimeoutId)

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let IntervalFunc = () => {
//     console.log('hello')
// }

// let setIntervalId = setInterval(IntervalFunc , 1000)

// setTimeout(() => {
//     clearInterval(setIntervalId)
// }, 5000);

//""""""""""""""""""""""""""""""""""""""""""""""""""""

//modules

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// import{functionFromBlablabla1} from './blablabla1.js'
// import{functionFromBlablabla2} from './blablabla2.js'

// functionFromBlablabla1()
// functionFromBlablabla2()

//""""""""""""""""""""""""""""""""""""""""""""""""""""

//modules end

//""""""""""""""""""""""""""""""""""""""""""""""""""""

//DOM

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let button = document.getElementById('myButton')

// console.log(button)

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// console.log(myButton)

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let button = document.querySelector('button')
// console.log(button)

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let listItems = document.querySelectorAll('li')

// console.log(listItems)

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let yourNameInput = document.getElementById('yourName')

// let submitButton1 = document.getElementById('submitButton')

// let yourSurname1 = document.getElementById('yourSurname')

// submitButton1.addEventListener('click' , () => {
//     if(yourNameInput.value === 'Sasha' && yourSurname1.value === 'Dmytruk'){
//         console.log('Welcome back, Sasha Dmytruk!')
//     }else{
//         console.log(yourNameInput.value + ' ' + yourSurname1.value + ' ,Who are you?' )
//     }


// })

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let box = document.getElementById('box')

// let button = document.getElementById('button')

// button.addEventListener('click' , () => {
//     let newParagraph = document.createElement('input')
//     box.append(newParagraph)

//     newParagraph.addEventListener('change', () => {
//     if(newParagraph.value === 'Sasha'){
//         alert('Hello Sasha')
//     }else{
//         alert('Is not you')
//     }
//     return newParagraph.value
// })
// })

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let onTodoClick = (todoItemEvent) => {
//     todoItemEvent.classList.add('completed');
// }

// document.addEventListener('click' , (event) => {
//     if(event.target.classList.contains('todo1')){
//         onTodoClick(event.target);
//     }
// })

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let buttonMouse = document.querySelector('button')

// buttonMouse.addEventListener('mouseover' , () => {
//     console.log('Навели на кнопку')
// })

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let buttonMouse = document.querySelector('button')

// buttonMouse.addEventListener('mouseover' , () => {
//     console.log('Навели на кнопку')
// })

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// document.addEventListener('keydown' , () => {
//     console.log('Натиснули кнопку')
// })

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let InputElement = document.querySelector('input')
// let nameOutputElement = document.querySelector('.Name-Output')

// document.addEventListener('input' , (event) => {
//     nameOutputElement.textContent = InputElement.value
// })

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let focusButton1 = document.querySelector('.focusButton')

// focusButton1.addEventListener('focus' , () => {
//     console.log("Focus")
// })

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let myFormAreaContent = document.querySelector("#myForm")
// let textArea = document.querySelector("#textarea")

// myFormAreaContent.addEventListener('submit' , (event) => {
//     event.preventDefault()
//     console.log(textArea.value)
// })

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// let formElement = document.querySelector('form')

// formElement.addEventListener("submit", (event) => {
//     event.preventDefault()

//     let formData = new FormData(formElement)

//     formData.forEach((value , name) => {
//         console.log(`${name}: ${value}`)
//     });
// })

//""""""""""""""""""""""""""""""""""""""""""""""""""""

//валідація форми , але шосб чучуть пішло через очко

//""""""""""""""""""""""""""""""""""""""""""""""""""""


// class formValidation {

//     selectors = {
//         form: '[data-js-form]',
//         fieldError : '[data-js-form-field-error]'
//     }

//     constructor(){
//         this.bindEvents()
//     }

//     errorMessages = {
//         valueMissing : () => 'Заполните ето поле.',
//         patternMismatch : ({title}) => title || 'Не соответствует формату.',
//         tooShort : ({minLength}) => `Слишком короткое , минимум символов - ${minLength}.`,
//         tooLong: ({maxLength}) => `Слишком длинное , максимум символов - ${maxLength}.`

//     }

//     manageError (fieldControlElement , errorMessages) {
//         let errorElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldError)

//         if(errorElement){
//             errorElement.innerHTML = errorMessages
//             .map((message) => `<span class="field_error">${message}</span>`)
//             .join(' ')
//         }
//     }

//     validateField(fieldControlElement) {
//          let validity = fieldControlElement.validity
//          let errorMessages = []

//          Object.entries(this.errorMessages).forEach(([errorType , getErrorMessage])   => {
//             if(validity[errorType]){
//                 errorMessages.push(getErrorMessage(fieldControlElement))
//             }
//          })

//          this.manageError(fieldControlElement , errorMessages)

//          isValid = errorMessages.length === 0

//          fieldControlElement.ariaInvalid = !isValid

//          return isValid
//     }

//     onBlur(event){
//         let { target } = event
//         let isFormField = target.closest(this.selectors.form)
//         let isRequired = target.required
        
//         if(isRequired && isFormField){
//             this.validateField(target)
//         }
//     }

//     onChange (event) {
//         let { target } = event
//         let isRequired = target.required
//         let isToggleType = ['radio' , 'checkbox'].includes(terget.type)

//         if(isToggleType && isRequired){
//             this.validateField(target)
//         }
//     }

//     onSubmit(event) {

//         let isFormElement = event.target.matches(this.selectors.form)

//         if(!isFormElement) {
//             return
//         }

//         let requierdControlElements = [...event.target.errorElements]
//         .filter(({required}) => required)

//         let isFormValid = true

//         requierdControlElements.forEach((Element) =>{
//             let isFieldValid = this.validateField(Element)

//             if(!isFieldValid){
//                 isFormValid = false
//             }
//         })

//         if(!isFormValid){
//             event.prevenDefault()
//         }
//     }

//     bindEvents(){
//         document.addEventListener('blur' , (event) => {
//             this.onBlur(event)
//         } , true)

//         document.addEventListener('change' , (event) => {
//             this.onChange(event)
//         })
//         document.addEventListener('submit' , (event) => {
//             this.onSubmit(event)
//         })
//     }
// }

// new formValidation ()

//""""""""""""""""""""""""""""""""""""""""""""""""""""

//зробив кнопку яка міняє колір сайту з чорного на білий , також запитує інформацію про колір в LocalStorage

//""""""""""""""""""""""""""""""""""""""""""""""""""""

// class themeSwicher {
//     selectors = {
//         switcheThemeButton: '[data-js-theme-swither]'
//     }

//     theme = {
//         dark: 'dark',
//         light: 'light',
//     }

//     stateClasses = {
//         isDarkTheme : 'its-dark-theme'
// }

//     storageKey = 'theme'

//     constructor(){
//         this.switcheThemeButtonElement = document.querySelector(this.selectors.switcheThemeButton)
//         this.setInitialTheme()
//         this.bindEvents()

//     }

//     get isDarkThemeCached(){
//         return localStorage.getItem(this.storageKey) === this.theme.dark
//     }

//     setInitialTheme(){
//         document.documentElement.classList.toggle(
//         this.stateClasses.isDarkTheme, 
//         this.isDarkThemeCached
//         )
//     }

//     onClick = () => {
//         localStorage.setItem(
//             this.storageKey,
//             this.isDarkThemeCached ? this.theme.light : this.theme.dark
//         )
//         document.documentElement.classList.toggle(this.stateClasses.isDarkTheme)
//     }

//     bindEvents(){
//             this.switcheThemeButtonElement.addEventListener('click' , this.onClick)
//     }
// }

// new themeSwicher()








// 3 лекия

// let str = 'Hello'

// console.log(str.slice(0 , 3))
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// let strengStr = '    HelLo    '

// let nextStr = strengStr.trim().toLowerCase()

// nextStr[0].toUpperCase+nextStr.slice(1)

// console.log(nextStr)

// гавно 4 лекция

// let str = 'gowno'

// console.log(`helow
//      ${str}`)

// console.log(Math.random())
// console.log(Math.max(1,2,3,4,5,6,7,23,1))
// console.log(Math.min(1,2,3,4,5,6,7,23,1,-1))
// console.log(Math.floor(3.9))
// console.log(Math.ceil(3.1))
// console.log(Math.round(3.4))
// console.log(Math.round(3.5))

// let num = 3.442324345

// console.log(num.toFixed(2))

// lekcja 5

// let arr = [2,2,'text',true,[1,2,3]]
// let arr2 = [1,12,2]

// arr[3] = 'fingerba'
// arr[1] = 'not2'

// console.log(arr)
// console.log(arr[4][1])

// arr.shift()

// console.log(arr)

// arr.push('stopMan')

// console.log(arr)

// arr.pop()

// console.log(arr)
// console.log(arr.concat(arr2))
// console.log(arr.indexOf('text'))
// console.log(arr.join('-'))
// console.log(arr.splice(1,1)) // видалено 1 індекс
// console.log(arr.slice(1,3))
// console.log(arr.includes('fingerba'))//провіряє чи є цей елемент
// console.log(arr.reverse())

// lekcja 6 zalupa object

// let obj = {
//     'name' : 'sasha',
//     'nambers' : [233,213,111,32],
//     'checked' : true
// }

// console.log(obj)
// console.log(obj.name)
// console.log(obj.nambers[2])
// console.log(Object.keys(obj))
// console.log(obj['color'] = 'red')

// let obj1 = [{
//     'name' : 'sasha',
//     'nambers' : [233,213,111,32],
//     'checked' : true
// },
// {
//     'name' : 'sasha',
//     'nambers' : [233,213,111,32],
//     'checked' : true
// },
// {
//     'name' : 'sasha',
//     'nambers' : [233,213,111,32],
//     'checked' : true
// }
// ]

// console.log(obj1[1].nambers[2])

// lekcja 7

// let age = prompt('your age')

// if(age >= 18){
//     alert('hello')
// }else(
//     alert('papa')
// )

// switch(true){
//     case age > 18:  alert('hello')
//     break

//     case age < 18:  alert('papa')
//     break

//     default: alert('18')
// }

// lekcja 8 blyat

// let count = 0

// while(count < 10){
//     console.log(count)
//     if(count == 4 ){
//         break
//     }
//     count++
// }

// let count = 10
// do{
//     console.log(count)
//     count--
// }while(count > 0)

// let arr = [5,5,6,7,8,9]

// for(let i = 0; i<arr.length ; i++){
//     console.log(arr[i] * 2)
// }

// let arr = [5,5,6,7,8,9]

// for(let item of arr){
//     console.log(item * 2)
// }

// let obj = {
//     'name' : 'sasha',
//     'age' : 25,
//     'number' : 98888997749
// }

// for(let key in obj){
//     console.log(`ключ ${key} значення ${obj[key]}`)
// }

// let arr = [5,5,6,7,8,9]

// arr.forEach((item , i , array) => {
//     console.log(` елемент${item}  індекс${i}  массив${array}`)
// })

// let people = [
//     {'id' : 1 , 'name' : 'Ivan'},
//     {'id' : 2 , 'name' : 'Danil'},
//     {'id' : 3 , 'name' : 'Dasha'},
//     {'id' : 4 , 'name' : 'Denis'}
// ]

// let a = people.find((item) => {
//     if(item.id == 3){
//         return item
//     }
// })

// console.log(a)

// let a = people.filter((item) => {
//     if(item.id <= 3){
//         return item
//     }
// })

// console.log(a)

// let arr = [5,5,6,7,8,9]

// let newArr = arr.map((item ) => {
//     return item*3
// })
// console.log(newArr)

// let a = []

// for(let i = 0 ; i < 20 ; i+=2){
//     a.push(i)
// }
// console.log(a)

// let a = []

// for(let i = 30 ; i > 0 ; i-=3){
//      a.push(i)
// }
// console.log(a)

// let a = []

// for(let i = 0 ; i < 10 ; i++){
//      a.push(Math.pow(i,2))
// }
// console.log(a)

// let arr = [2,3,545,6,5,2,4,56,43,53,6,3,4,1,124,6,7,3,45,3,34]
// let count = 0
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] % 2 ==0 ){
//         count++
//     }
// }
// console.log(count)

// 9 урок

// function func (name , age) {
//     return `hello my neme is ${name} age ${age}`
// }

// let nameFunc = 'sasha'
// let ageFunc = 14

// console.log(func(nameFunc , ageFunc))
// alert(func(nameFunc , ageFunc))

// let ress = func(nameFunc , ageFunc)
// console.log(ress)

// let obj = {
//     'name' : 'sasha',
//     'age' : 13,
//     hello () {
//         console.log(`hello ${this.name}`)
//     }
// }

// obj.hello()

// let arr = [2,3,4,254,325,6,4,5,2433,532,442,231,23,54,234]

// arr.sort((a,b)=> {
//     return a - b
// })

// console.log(arr) 

// function fibonacchi(count){
//     let fib = []

//     for(let i = 0 ; i < count ; i++){
//         if(i==0) fib[i] = 1;
//         else if(i==1) fib[i] = 2;
//         else fib[i] = fib[i-2] + fib[i-1]
//     }
//     return fib
// }

// let f = (fibonacchi(10))
// console.log(f)

// function factorial (n){
//     let factorial = 1
//     if(n==0) return factorial

//     for(let i = 1 ;  i <= n ; i++){
//         factorial = factorial*i
//     }
//     return factorial
// }

// let fuct = factorial(6)

// console.log(fuct)

// function addAndMult (num){
//     num = num + ""

//     let add = 0
//     let mult = 1
//     for(let i = 0 ; i< num.length ; i++){
//         add = add + Number(num[i])
//         mult = mult * Number(num[i])
//     }
//     return{
//         'сумма': add,
//         'множення' : mult
//     }
// }

// console.log(addAndMult(111))

// function revers (num) {
//     num = num + ""

//     let reversNum = ""

//     for(let i = num.length-1 ; i>= 0; i--){
//         reversNum = reversNum + num[i]
//     }
//     return Number(reversNum)
// }

// let a = revers(2223)

// console.log(a)


// function number (number) {
//     number = number + ""
//     let chet = 0
//     let nechet = 0
//     for(let i = 0 ; i < number.length ; i++){
//         if(number[i] % 2 == 0){
//             chet++
//         }else{
//             nechet++
//         }
//     }
//     return {
//         'чотні' : chet,
//         'не чотні' : nechet ,
//     }
// }

// console.log(number(123456789))
// function randomNumber (){
//     let number = Math.floor(Math.random() * 100)

//     for ( let count = 1 ; count <= 10 ; count++){
//         let result = Number(prompt(`спроба номер ${count} , введіть число:`))

//         if(result == number){
//             return alert(`ви вгадали число з ${count} спроби , це число ${number}`)
//         }else if(result < number){
//             alert(`у вас залишилося ${count} спроб , рандомне число більше ${result}`)
//         }else if(result > number){
//             alert(`у  вас залишилось ${count} спроб , рандомне число менше ${result}`)
//         }      
//     }
//     return alert(`ви не вгадали , спроби скінчились , це було число ${number}`)
// }

// randomNumber()

// 10 лекція

// let date = new Date('2015-05-25T10:32:12.322')
// console.log(Date.parse('2015-05-25T10:32:12.322')) // January 1, 1970, UTC. стільки секун прошло з цього часу , це й робить .parse

// let data = new Date(2013,7,21,23,10,51,231)
// console.log(data.getFullYear())
// console.log(data.getMonth())
// console.log(data.getDate())
// console.log(data.getHours())
// console.log(data.getMinutes())
// console.log(data.getSeconds())
// console.log(data.getMilliseconds())

// let date = new Date(2016,1,28)
// date.setDate(date.setDate()+2)
// console.log(date)

// let adate = Date.now(new Date())

// for (let index = 0; index < 3000; index++) {
//     console.log(0)
// }

// let bdate = Date.now(new Date())

// console.log(bdate-adate)

// let date = new Date(2014,4,23,12,32,0)

// let options = {
// //    era:"long",
//     year:"numeric",
//     month:"long",
//     day:"numeric",
//     weekday:"long",
// //    timezone:"UTC",
//     hout:"numeric",
//     minute:"numeric",
// //    second:"numeric"
// }

// console.log(date.toLocaleString('ru' , options))

//urok 11

// /**
//  * функція робить з строуи з часом в хвилини 
//  * @param {string} time час в виді строкии
//  * @returns {number} ціле число в минутах
//  */

// function timeToMinutw(time){
//     try{
//         let hour = +time.split(':')[0]
//         let minute = +time.split(':')[1]

//         if(!(hour>=0 && hour <=20) || !(minute >= 0 && minute <= 59)){
//             throw new RangeError('ошипка') // создає ошибку 
//         } 
//         return hour*60+minute
//     }catch(error){
//         console.log(error)
//     }
// }
// console.log(timeToMinutw('28:18'))

//urok 12

// let admin = {
//     rules : 777,
//     isAdmin() {
//         console.log(`Im Admin ${this.rules} and my name ${this.name}`)
//     }
// }

// function User (name , age){
//     this.name = name
//     this.age = age
//     this.myInfo = () => {
//         console.log(`My name ${name} and im ${age} yo`)
//     }
//     this.__proto__ = admin
// }

// let u1 = new User('sasha' , 16)
// let u2 = new User('lonia' , 13)
// let u3 = new User('sonia' , 22)

// console.log(u1.myInfo())
// console.log(u2.isAdmin())
// console.log(u3)

//ОДНЕ Й ТЕ САМЕ ПРОСТО 1 ЧЕРЕЗ ПРОТОТИПИ А ДРУГИЙ ЧЕРЕЗ КЛАССИ

// class User {
//     constructor(name , age , admin=false) {
//         this.name = name
//         this.age = age
//         this.admin = admin
//     }
//     myInfo () {
//         console.log(`My name ${this.name} and im ${this.age} yo`)
//         if(this.admin == true){
//             console.log('im admin')
//         }
//     }
// }

// class Moderator extends User {  // модератор буде унаслідувати інформайцію з юзера 
//     constructor(name , age , admin=false , moder=true) {
//         super(name , age , admin)   
//         this.moder = moder
//     }
//     addPost (){
//         console.log('Mew post')
//     }
//     myInfo () {
//         super.myInfo()    //супер виконує батьківську фукцію , просто дублює її чи як , а потім виконається той консол лог 
//         console.log('im moderator')
//     }
// }

// let u1 = new User('sasha' , 16)
// let u2 = new User('lonia' , 13 , true)
// let u3 = new User('sonia' , 22)
// let moderator = new Moderator('Denis' , 92 , true)

// console.log(u1)
// console.log(u2.myInfo())
// console.log(u3)
// console.log(moderator)
// console.log(moderator.myInfo() , moderator.addPost())

// class People {
//     /**
//      * клас людина
//      * @param {String} fio по формату фамилия имя отчетво 
//      * @param {String} birthday день народження по формату 24.11.1991
//      * @param {String} number номар , якщо більше двох то номар1 , номар2
//      * @param {Number} room комната
//      */
//     constructor (fio , birthday , number ,room){
//         let name = fio.toLowerCase().split(" ")
//         this.name = {}
//         this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
//         this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
//         this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

//         let date = birthday.split(".")
//         this.date = {}
//         this.date.d = Number(date[0])
//         this.date.m = Number(date[1])
//         this.date.y = Number(date[2])

//         this.number = number.split(', ')

//         this.room = Number(room)
//     }

//     static month = ['Січень',' Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень']  // статисне свойтво , буде використовуватися тільки тут і не я якому іншому  класі

//     GetFio (){
//         return `${this.name.f} ${this.name.i} ${this.name.o}`
//     }
//     GetBirthday (){
//         return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
//     }
// }

// let people1 = new People ("Олександр дмитрУк вікторович" , "23.03.2009" , "88997749 , 883638203" , 12)
// let people2 = new People ("Максим ТуНТун СауРаВиЧ" , "01.01.1991" , "+4814881488 , +9810312267" , 666)

// console.log(people1.GetFio())
// console.log(people1.GetBirthday())

// console.log(people2.GetFio())
// console.log(people2.GetBirthday())

// lekcja 13

// function sum (a,b){
//     return a+b
// }
// let date = [3,5]
// console.log(sum(...date))  // розширениє 

// let [a,b,c,d] = [10,23,21,1]

// console.log(d)

// let sum3 = (a,b,c) => {
//     return a+b+c
// }
// console.log(sum3(12,3,2))
// console.log(sum3(11,42,1))

// let dublCode = 0b0111
// console.log(dublCode)  // дійковий код

// let numbers = Number.isInteger(18.0)
// console.log(numbers)

// let numbers1 = Number.isInteger(18.2)
// console.log(numbers1)

// console.log('Str' .repeat(3))

// let string = 'hello , its just simple string'
// console.log(string.includes('just'))
// console.log(string.startsWith('hello'))
// console.log(string.endsWith('string'))

// let arr = [2,3,4,5,6,7]

// arr.fill(0,2 ,4)
// console.log(arr)

// let arrabc = ['a' , 'b' , 'c']

// let entries = arrabc.entries()
// let keys = arrabc.keys()
// let values = arrabc.values()

// console.log(...entries)
// console.log(...keys)
// console.log(...values)


// let superarr = [1,2,3,4,1,2,3,4]

// let superarr2 = [...new Set(superarr)]
// console.log(superarr2)

//gavna zalupa piska pipiska 14

// let element = document.getElementById('element')

// console.log(element)

// element.style.background = 'tomato'

// let elements = document.querySelectorAll('ul > li:first-child')

// console.log(elements)

// for(let el of elements){
//     el.style.color = 'Red'
//     el.innerHTML = 'New li'
// }

// let element2 = document.querySelector('li')

// element2.style.background = 'blue'

// for(let el of document.body.children){
//     if(el.matches('a[href$=".com"')){
//         el.innerHTML = '.com'
//     }
// }

// 1 5 1 5 1 5 1 5 1 5 1 5 1 5 1 5

// let list = document.querySelector('.list')
// let item = document.querySelector('.item')

// console.log(list.contains(item))

// let strs = ['el1','el2','el3']
// // document.body.innerHTML = `<ol><li>${strs[0]}</li><li>${strs[1]}</li><li>${strs[2]}</li></ol>`
// // document.querySelector('p').textContent = `${strs[0]}-${strs[1]}-${strs[2]}`

// let element = document.querySelector('h3')
// element.hidden = true

// setInterval(() => element.hidden = !element.hidden , 1000)

// let elementP = document.querySelector('p')

// let div = document.createElement('div')
// div.className = 'alert'
// div.innerHTML = '<p>Hello!</p>'

// document.body.append(div)

// let p = document.createElement('p')
// p.textContent = 'ALERTTT'

// // div.prepend(p)
// div.replaceWith(p)

// lekcja 16

// let ul = document.querySelector('ul')
// ul.insertAdjacentHTML('beforebegin' , '<p>Hello</p>')
// ul.insertAdjacentHTML('afterbegin' , '<p>Hello</p>')
// ul.insertAdjacentHTML('afterend' , '<p>Hello</p>')
// ul.insertAdjacentHTML('beforeend' , '<p>Hello</p>')

// let div = document.querySelector('div')

// let div2 = div.cloneNode(true) // clon
// div2.querySelector('p').textContent = 'New message'
// div.after(div2)
// setTimeout(() => {
//     div.remove()
// },2000)

// let ul = document.createElement('ul')
// document.body.append(ul)

// while(true){
//     let data = prompt('text for list' , "")
//     if(!data){
//         break
//     }
//     let li = document.createElement('li')
//     li.textContent = data
//     ul.append(li)
// }

// let data = {
//     "Овощи": {
//         "огурци" : 5,
//         "помидори" : 3,
//     },
//     "фрукти" : {
//         "красние" : {
//             "клубника" : 2,
//             "малина" : 4,
//         },
//         "зеление" : {
//             "яблоки" : 6,
//             "лайм" : 2,
//         }
//     }
// }

// function createUl (obj){
//     if(!Object.keys(obj).length)
//         return
//     let ul = document.createElement('ul')
//     for(let key in obj){
//         let li  = document.createElement('li')
//         if(!isNaN(obj[key]))
//             li.textContent = `${key}, их ${obj[key]}`
//         else
//             li.textContent = key
//         let childrenUl = createUl(obj[key])
//         if(childrenUl){
//             li.append(childrenUl)
//             }
//         ul.append(li)
//     }
//     return ul 
// }

// function createTree (container , obj) {
//     document.querySelector(container).append(createUl(obj))
// }

// createTree('body' , data)

// lekcja 17 clock

// function updpate () {
//     let clock = document.querySelector('.clock')
//     let date = new Date()
//     let hour = date.getHours()
//     let minutes = date.getMinutes()
//     let second = date.getSeconds()

//     if(hour < 10){
//         hour = '0' + hour
//     }
//     if(minutes < 10){
//         minutes = '0' + minutes
//     }   
//     if(second < 10){
//         second = '0' + second 
//     }
//     clock.textContent = `${hour}:${minutes}`

// }
// updpate()
// setInterval(updpate , 60000)

// lekcja 18

// let div = document.querySelector('div')

// div.classList.add('elem')
// div.classList.remove('elem')
// div.classList.toggle('elem')

// div.style.color = 'red'

// let style = getComputedStyle(div)
// console.log(style.color)

// lekcja 19

// function myTimer (sec) {
//     let startDate = new Date()
//     let endDate = new Date()
//     endDate = endDate.setSeconds(endDate.getSeconds() + sec)

//     let leftTime = endDate-startDate
//     let interval = setInterval(() => {
//         let currentDate = new Date()
//         let leftPersent = Math.trunc((endDate-currentDate) / leftTime * 100)
//         let pastPersent = Number(100 - leftPersent)

//         document.querySelector(".timer_progressbar___fill").textContent = pastPersent + "%"
//         document.querySelector(".timer_progressbar___fill").style.width = pastPersent + "%"
//         document.querySelector(".timer_progressbar___empty").textContent = leftPersent + "%"
//         document.querySelector(".timer_progressbar___empty").style.width = leftPersent + "%"

//         if(leftPersent == 0){
//             clearInterval(interval) // зупинить виконування
//             document.querySelector(".timer_progressbar___empty").style.display = 'none'
//         }
//     },1)
// }

// myTimer(60) // таймер який рахуйє від 100% до 0 за якусь кіфлькість секунд

// lekcja 20

// localStorage.setItem('key1' , 'hello')

// console.log(localStorage.getItem('key1'))
// console.log(localStorage.getItem('key34'))
// console.log(localStorage.key(0))
// console.log(localStorage.length)
// console.log(localStorage.removeItem('key1'))

// localStorage.setItem('key1' , 'hello')
// localStorage.setItem('key2' , 'hello')

// console.log(localStorage.clear)

// localStorage.setItem('key1' , 'hello')
// localStorage.setItem('key2' , 'hello')

// for(let i = 0 ; i< localStorage.length ; i++){
//     let key = localStorage.key(i)
//     console.log(key)
// }

// for(let key in localStorage){
//     console.log(key)
// }





//day1

// let age = 17
// age = 18
// console.log(age) можна изменять 

// const name = "sasha"
// name = "Nekit"
// console.log(name) нельзя изменять 

// let name = "sasha" -- String
// let age = 17 -- Number 
// let isStudent = true -- Boolean 
// let x = undefined -- Undefined
// let y = null -- Null

// const user = {
//     name : "sasha",
//     age : 17,
// } -- object

// const names = ["sahsa" , "danila" , "artur"] -- array

// console.log(typeof "hello")
// console.log(typeof 17)
// console.log(typeof true) -- проверка\

// function sayHello (name){
//     console.log(`hello ${name}`)
// }
// const name = "sahsa"
// sayHello(name)  -- function

// function sum(a , b ){
//     return (a + b) / 2
// }

// const result = sum(5 , 3)
// console.log(result) -- function

// const sum = (a, b) => a * b

// const res = sum(6,7)
// console.log(res) -- function too