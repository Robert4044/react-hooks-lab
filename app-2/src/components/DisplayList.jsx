import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListItem from './ListItem'

const DisplayList = props => {
    const [brewery, setBrewery] = useState([])

    useEffect(() => {
        axios
            .get('https://api.openbrewerydb.org/breweries?by_city=kansas_city')
            .then(res => {
                console.log(res.data)
                setBrewery(res.data)
            })
    }, [])

    return (
        <div>
            {brewery.map((element, index) => {
                return <ListItem name={element.name} key={index} />
            })}
        </div>
    )
}

export default DisplayList
