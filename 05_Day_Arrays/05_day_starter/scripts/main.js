console.log(countries)
alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')

// Exercises: Level 1
let champYears = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2022, 2023]
let arrLength = champYears.length
console.log(arrLength)
let firstItem = champYears[0]
console.log(firstItem)
let lastItem = champYears[arrLength - 1]
console.log(lastItem)
let middleItem = champYears[Math.floor(arrLength / 2)]
console.log(middleItem)

let mixedDataTypes = [1, 'two', true, null, undefined, { name: 'John' }]
console.log(mixedDataTypes.length)

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)

console.log(itCompanies.length)
let firstCompany = itCompanies[0]
console.log(firstCompany)
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)]
console.log(middleCompany)
let lastCompany = itCompanies[itCompanies.length - 1]
console.log(lastCompany)

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i])
}

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
    }

console.log(itCompanies.join(', '))

let seekingCompany = prompt('Enter a company name')
let companyIndex = itCompanies.indexOf(seekingCompany)
if (companyIndex === -1) {
    console.log('Company not found')
    } else {
    console.log(seekingCompany)
    }






