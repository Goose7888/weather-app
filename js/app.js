// By Trevor Clark
// Due 24 Feb, 2025 
//
// Gets weather information and updates html accodringly

// Yeah, yeah. Ideally this API key would not be here at all.
// Cry about it 🐦
const strAPIKey = 'a6f8a8b7fd77485585b173540251902'
const strBaseURL = 'http://api.weatherapi.com/v1/'
// const cityName = 'Cookeville'


// async function fetchCurrentWeatherCity()
// {
    
// }

// Returns wetherdata from weatherapi.com
async function fetchCurrentWeatherAuto()
{
    try
    {
        // Fetch weather
        // key is the api key
        // q is the query parameter (e.g. Where is the wheather data?)
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
    document.querySelector('#txtCurrentTemperature').innerHTML = "Fetching..."
    document.querySelector('#txtCurrentHumidity').innerHTML = "Fetching..."


    objWeatherData = await fetchCurrentWeatherAuto()

    document.querySelector('#txtCurrentTemperature').innerHTML = objWeatherData.current.temp_f
    document.querySelector('#txtCurrentHumidity').innerHTML = objWeatherData.current.humidity
}



updateValues()

document.querySelector('#btnUpdateValues').addEventListener('click', function(){
    updateValues()
})