// By Trevor Clark
// Due 24 Feb, 2025 
//
// Gets weather information and updates html accodringly

// Yeah, yeah. Ideally this API key would not be here at all.
// Cry about it 🐦
const strAPIKey = 'a6f8a8b7fd77485585b173540251902'
const strBaseURL = 'http://api.weatherapi.com/v1/'

// Global variable will keep track of units
var strUnits = "Fahrenheit"

// Returns wetherdata from weatherapi.com
// Location is set to auto:ip (it finds a location based on your ip)
async function fetchCurrentWeatherAuto()
{
    try
    {
        // Fetch weather
        // key is the api key
        // q is the query parameter (e.g. Where is the weather data?)
        const objResponse = await fetch(strBaseURL + 'current.json' + `?key=${strAPIKey}` + `&q=auto:ip`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
            },
        })

        // verify weather has been fecthed correctly
        if (!objResponse.ok)
        {
            console.log(objResponse.error.code)
            throw new Error(`HTTP Error Status: ${objResponse.status}`)
        }

        return await objResponse.json()
    }
    catch(objError)
    {
        console.log('Error fetching Current Weather (auto)', objError)
    }
}

// Updates page with newly fetched weatherdata
async function updateValues()
{
    // Disable the card while values are updated
    document.querySelector('#divCard').style.display = 'none'

    // Fetch new content
    objWeatherData = await fetchCurrentWeatherAuto()

    // Populate card with new content

    if (strUnits == "Fahrenheit")
    {
        document.querySelector('#txtCurrentTemperature').innerHTML = objWeatherData.current.temp_f
        document.querySelector('#txtTempUnits').innerHTML = '°F'
    }
    else if (strUnits == "Celsius")
    {
        document.querySelector('#txtCurrentTemperature').innerHTML = objWeatherData.current.temp_c
        document.querySelector('#txtTempUnits').innerHTML = '°C'
    }

    updateBackground(objWeatherData.current.condition.code)

    document.querySelector('#txtCurrentHumidity').innerHTML = objWeatherData.current.humidity + '%'
    document.querySelector('#txtConditions').innerHTML = objWeatherData.current.condition.text
    document.querySelector('#txtLocation').innerHTML = objWeatherData.location.name
    document.querySelector('#imgConditions').setAttribute('src', 'https:' + objWeatherData.current.condition.icon)
    document.querySelector('#imgConditions').setAttribute('alt', objWeatherData.current.condition.text)
    document.querySelector('#iconTitle').setAttribute('href', 'https:' + objWeatherData.current.condition.icon)

    document.querySelector('#txtPageTitle').innerHTML = "Current Weather | " + objWeatherData.current.condition.text

    // Enable the card now that values are updated
    document.querySelector('#divCard').style.display = 'block'
}

// updateBackground changes the background based on the weather condition
function updateBackground(conditionCode)
{
    let strFilePath = ''

    // Yes I hard-coded in all 48 possible conditions 🦇
    switch (conditionCode)
    {
        case 1000:
            strFilePath = 'assets/backgrounds/clear_day.gif'
            break
        case 1003:
            strFilePath = 'assets/backgrounds/cloudy.gif'
            break
        case 1006:
            strFilePath = 'assets/backgrounds/cloudy.gif'
            break
        case 1009:
            strFilePath = 'assets/backgrounds/overcast.gif'
            break
        case 1030:
            strFilePath = 'assets/backgrounds/mist.gif'
            break
        case 1063:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1066:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1069:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1072:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1087:
            strFilePath = 'assets/backgrounds/thunderstorm.gif'
            break
        case 1114:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1117:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1135:
            strFilePath = 'assets/backgrounds/mist.gif'
            break
        case 1147:
            strFilePath = 'assets/backgrounds/mist.gif'
            break
        case 1150:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1153:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1168:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1171:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1180:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1183:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1189:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1192:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1195:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1198:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1201:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1204:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1207:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1210:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1213:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1216:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1219:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1222:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1225:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1237:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1240:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1243:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1246:
            strFilePath = 'assets/backgrounds/rainy.gif'
            break
        case 1249:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1252:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1255:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1258:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1261:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1264:
            strFilePath = 'assets/backgrounds/snowy.gif'
            break
        case 1273:
            strFilePath = 'assets/backgrounds/thunderstorm.gif'
            break
        case 1276: 
            strFilePath = 'assets/backgrounds/thunderstorm.gif'
            break
        case 1279:
            strFilePath = 'assets/backgrounds/thunderstorm.gif'
            break
        case 1282:
            strFilePath = 'assets/backgrounds/thunderstorm.gif'
            break
        default:
            strFilePath = 'assets/backgrounds/cloudy.gif'
    }

    document.querySelector('#divBackground').setAttribute('style', `background-image: url(${strFilePath}); background-size: cover;`)
}



// Begin program execution here

updateValues()

document.querySelector('#btnUpdateValues').addEventListener('click', function(){
    updateValues()
})

document.querySelector('#btnSwitchUnits').addEventListener('click', function(){
    if (strUnits == "Fahrenheit")
    {
        strUnits = "Celsius"
        document.querySelector('#imgSwitchUnits').src = 'assets/fahrenheit.png'
        updateValues()
    }
    else  if (strUnits == "Celsius")
    {
        strUnits = "Fahrenheit"
        document.querySelector('#imgSwitchUnits').src = 'assets/celsius.png'
        updateValues()
    }
})