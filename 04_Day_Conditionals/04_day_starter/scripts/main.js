// this is your main.js script

alert('Open the browser console whenever you work on JavaScript')

let yourAge = prompt('What is your age?')
if (yourAge >= 18) {
    console.log('You are old enough to drive')
} else {
    console.log('You are left with 3 years to drive')
}


let myAge = prompt('What is my age?')
let dienAge = prompt('Was ist dien jahre alt?')

if (myAge > dienAge) {
    console.log('I am ' + (myAge - dienAge) + ' older than you')
}
else if (myAge < dienAge) {
    console.log('You are ' + (dienAge - myAge) + ' older than me')
}

let a = 4
let b = 3
if (a > b) {
    console.log('a is greater than b')
}

let number = prompt('Enter a number')
if (number % 2 == 0) {
    console.log(number + ' is an even number')
}
else {
    console.log(number + ' is an odd number')
}

let score = prompt('Enter your score')
if (score >= 80) {
    console.log('A!' + ' You are awesome!')
}
else if (score >= 70) {
    console.log('B!' + ' You are good!')
}
else if (score >= 60) {
    console.log('C!' + ' You are passed!')
}
else if (score >= 50) {
    console.log('D!' + ' You are failed!')
}
else {
    console.log('F!' + ' You are failed!')
}

let month = prompt('Enter a Month')
switch (month) {
    case 'September' || 'October' || 'November':
        console.log('The season is Autumn')
        break
    case 'December' || 'January' || 'February':
        console.log('The season is Winter')
        break
    case 'March' || 'April' || 'May':
        console.log('The season is Spring')
        break
    case 'June' || 'July' || 'August':
        console.log('The season is Summer')
        break
    default:
        console.log('Please enter a valid month')
        break
}

let day = prompt('Enter a day')
switch (day) {
    case 'Monday' || 'Tuesday' || 'Wednesday' || 'Thursday' || 'Friday':
        console.log('Today is a weekday')
        break
    case 'Saturday' || 'Sunday':
        console.log('Today is a weekend')
        break
    default:
        console.log('Please enter a valid day')
        break
}
let newmonth = prompt('Enter a month:')
switch (newmonth) {
    case newmonth =='January':
        console.log('January has 31 days')
        break
    case newmonth =='February':
        console.log('February has 28 days')
        break

}




    
    


