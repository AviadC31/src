//EX1//
function calcAge(now, born){
return now-born
}
const age = calcAge(2017, 1989)
//console.log(age)

//EX2//
/*function calcAge2(now, born){
    console.log("Please tap your mounth birh by numbers (1-12)")
    if(prompt()>6) return now-born
    else return now-born-1
    }
    const age2 = calcAge2(2018, 2015)
    console.log(age2)*/

//EX3//
if(isEven(2654464614)) console.log("the number is even")
else console.log("the number isn't even")
function isEven(num){
if(num%2===0)return true
else return false
}

//EX4//
/*const arr=[1,2,3,4,5,32,4324,6346,586,9879,234,897,45,325,7,345,6876345]
printingOdds(arr)
function printingOdds(arr){
    for(let num of arr)
        if(!isEven(num))
            console.log(num)
}
*/
//EX5// 
/*
const arr5=[1,2,3,4,5,6,234234234,643534,345]
if(isExist(2342342734,arr5)) console.log("The number does exist in the array")
else console.log("The number doesn't exist in the array")
function isExist(num, arr){
    for(let i of arr)       
        if(i===num) return true
        return false
}
*/
//EX6//
/*
calculator = {add: function add(a,b){return a+b},subtract: function subtract(a,b){return a-b}}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)
console.log(calculator.add(result1, result2)) */

//EX7/ 
/*
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}
turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
function increaseByNameLength(a,b){return (a*b.length)} 
function makeRegal(str){return "His Royal Highness, ".concat(str)}
*/

//EX8//
const splice = function(indexToCut, deleteCount, arr){
for(let j=0; j<deleteCount; j++)
    for(let i=indexToCut; i<arr.lengt; i++) arr[i]=arr[i+1]
while(arr.length)
}
