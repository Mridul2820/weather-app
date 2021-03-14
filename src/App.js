import React from 'react'

import './styles/app.scss'

const mainURL = `api.openweathermap.org/data/2.5/`
const apiID = `&appid=${process.env.REACT_APP_API_KEY}`



const App = () => {
    return (
        <div className='app'>
            <main>
                <div className="search-box">
                    <input 
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                    />
                    </div>
            </main>
        </div>
    )
}

export default App

