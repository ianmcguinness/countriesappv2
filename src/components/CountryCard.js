import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/CountryCard.css'

const CountryCard = ({country}) => {
    return (
        <Link to={`/${country.alpha3Code}`}>
            <article className='card'>
                <div className="country-flag">
                    <img src={country.flag} alt={`Flag of ${country.name}`} />
                </div>
                <div className="country-details">
                    <h3>{country.name}</h3>
                    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Capital:</strong> {country.capital}</p>
                </div>
            </article>
        </Link>
    )
}

export default CountryCard
