const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const resultDiv = document.getElementById('result')

const getDay = (e) => {
    const weekday = e.currentTarget.textContent
    const answer = weekdays[date.getDay()]
    if (answer !== weekday) {
        document.getElementById(weekday).setAttribute('class', 'date wrong')
    }
    document.getElementById(answer).setAttribute('class', 'date correct')
    // const textNode = document.createTextNode(weekdays[date.getDay()])
    // document.getElementById("result").replaceChildren(textNode)
    //console.log(month.value, day.value, year.value, weekdays[date.getDay()])
}

const shuffle = () => {
    const month = document.querySelector("#month")
    const day = document.querySelector("#day")
    const year = document.querySelector("#year")
    const randMonth = Math.ceil(Math.random()*12)
    const randDay = Math.ceil(Math.random()*31)
    const randYear = Math.ceil(Math.random()*22)+2000
    date.setMonth(randMonth)
    date.setDate(randDay)
    date.setFullYear(randYear)
    month.textContent = months[randMonth]
    day.textContent = randDay
    year.textContent = randYear
    for (var weekday of weekdays) {
        document.getElementById(weekday).setAttribute('class', 'date')
    }
}

for (var weekday of weekdays) {
    var button = document.createElement('button')
    button.textContent = weekday
    button.setAttribute('class', 'date')
    button.addEventListener('click', getDay)
    button.setAttribute('id', weekday)
    resultDiv.appendChild(button)
}

var date = new Date()
var month = document.getElementById('month')
var day = document.getElementById('day')
var year = document.getElementById('year')
month.textContent = months[date.getMonth()]
day.textContent = date.getDate()
year.textContent = date.getFullYear()