
import React from 'react'

const mainURL = `api.openweathermap.org/data/2.5/`
const apiID = `&appid=${process.env.REACT_APP_API_KEY}`

import './styles/app.scss'

const App = () => {
    return (
        <div className='app'>
            <h1>Weather App</h1>
        </div>
    )
}

export default App

