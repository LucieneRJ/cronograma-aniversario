const day18 = document.getElementById("day")
const hour23 = document.getElementById("hour")
const min28 = document.getElementById("min")
const sec33 = document.getElementById("sec")

const bithday = "14 agos 2022"

function cronometro(){
  let actualDate = new Date();
  let newYearDate = new Date(bithday)
  let base = Math.floor((newYearDate-actualDate) / 1000)

  let day = Math.floor(base / 3600 / 24)
  let hour = Math.floor((base / 3600) % 24)
  let min = Math.floor((base / 60) % 60)
  let sec = Math.floor(base % 60)
  
 

  day18.innerHTML = day
  hour23.innerHTML = hours
  min28.innerHTML = minutes
  sec33.innerHTML = seconds

}

cronometro()