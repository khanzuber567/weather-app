let form = document.querySelector('form')
let input = document.querySelector('input')
let container = document.querySelector('.container')


let API_KEY = '5e530cb652924d50afb94658231204'


const getData = async(e) =>{
    e.preventDefault()

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input.value}&aqi=yes`)
        const data = await response.json()
        console.log(data);
        let cityName = data.location.name
        let temp = data.current.temp_c
        // let condition = data.current.condition.text
        let icon = data.current.condition.icon
        let cityHeading = document.querySelector('h1')
        let tempHeading = document.querySelector('h2')
        // let conditionPara = document.querySelector('p')
        let iconImage = document.getElementById('img')
        let iconImage1 = document.getElementById('img1')
        let headimage = document.querySelector('h3,img')
        let head = document.querySelector('h3')
        let head_1 = document.querySelector('h4')
        let head_2 = document.querySelector('h5')
        let head_3 = document.querySelector('h6')
        let head_4 = document.querySelector('.loc-1')
        let head_5 = document.querySelector('.loc-2')
        // console.log(head_4+"@@@@"+head_5);
        cityHeading.innerText = cityName
        tempHeading.innerText = temp
        // conditionPara.innerText = condition
        head.innerText = data.current.condition.text
        headimage.innerText = ('src','https:'+icon)
        head_1.innerText = data.current.wind_kph
        head_2.innerText = data.current.humidity
        head_3.innerText = data.location.region
        head_4.innerText = data.location.name
        head_5.innerText = data.current.temp_c
        iconImage.setAttribute('src','https:'+icon)
        iconImage1.setAttribute('src','https:'+icon)
        container.style.background = `url(https://source.unsplash.com/random/700×900/?weather)`
        // container.style.background = `url(https://www.google.com/rendom/700×900/?weather)`
    } catch (error) {
        window.alert("Please enter valid city name")
    }

    form.reset()

}




form.addEventListener('submit' , getData) 
