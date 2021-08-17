import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import { ImSpinner2 } from 'react-icons/im'
import BorderCountry from '../components/BorderCountry'
import Button from '../components/Button'
import '../styles/CountryDetail.css'

const CountryDetail = () => {
  const { code } = useParams()
  const history = useHistory()

  const {
    data: country,
    isLoading,
    isError
  } = useQuery(['country', code], async () => {
    return await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
  })

  useEffect(() => {
    document.title = country ? country.data.name : 'Countries App'
  }, [country, isLoading])

  if (isLoading) return <ImSpinner2 color='#fff' size='3rem' />
  if (isError)
    return (
      <div className='error-screen'>
        <div className='back-btn'>
          <Button icon='back' text='Back' page='1' handleClick={history.goBack} />
        </div>
        <h1 className='error-message'>Sorry there was an error</h1>
      </div>
    )

  return (
    <div className='CountryDetail'>
      <div className='back-btn'>
        <Button icon='back' text='Back' page='1' handleClick={history.goBack} />
      </div>
      <main className='detail-section'>
        <div className='flag-box'>
          <img
            className='detail-flag'
            src={country.data.flag}
            alt={`Flag of ${country.data.name}`}
          />
        </div>
        <div className='country-data'>
          <h1 className='country-name'>{country.data.name}</h1>
          <p>
            <strong>Native Name: </strong>
            {country.data.nativeName}
          </p>
          <p>
            <strong>Population: </strong>
            {country.data.population.toLocaleString()}
          </p>
          <p>
            <strong>Region: </strong>
            {country.data.region}
          </p>
          <p>
            <strong>Sub-Region: </strong>
            {country.data.subregion}
          </p>
          <p>
            <strong>Capital: </strong>
            {country.data.capital}
          </p>
          <p>
            <strong>Top Level Domain: </strong>
            {country.data.topLevelDomain[0]}
          </p>
          <p>
            <strong>Currencies: </strong>
            {country.data.currencies.map(c => c.name).join(', ')}
          </p>
          <p>
            <strong>Languages: </strong>
            {country.data.languages.map(l => l.name).join(', ')}
          </p>
          <div className='border-countries'>
            <strong>Border Countries: </strong>
            {country.data.borders.map(border => {
              return <BorderCountry key={border} code={border} />
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export default CountryDetail
