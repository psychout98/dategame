const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const getDay = () => {
    const month = document.querySelector("#month")
    const day = document.querySelector("#day")
    const year = document.querySelector("#year")
    var date = new Date()
    date.setDate(Number.parseInt(day.value))
    date.setMonth(Number.parseInt(month.value))
    date.setFullYear(Number.parseInt(year.value))
    const textNode = document.createTextNode(weekdays[date.getDay()]);
    document.getElementById("result").replaceChildren(textNode);
    //console.log(month.value, day.value, year.value, weekdays[date.getDay()])
}