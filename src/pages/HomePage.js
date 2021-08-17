import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import queryString from 'query-string'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import CountryCard from '../components/CountryCard'
import Button from '../components/Button'
import { ImSpinner2 } from 'react-icons/im'
import '../styles/HomePage.css'

const HomePage = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState(allCountries)
  const location = useLocation()
  const history = useHistory()

  const { isLoading } = useQuery(
    'countries',
    async () => {
      return await axios.get('https://restcountries.eu/rest/v2/all')
    },
    {
      onSuccess: data => setAllCountries(data.data)
    }
  )

  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [continent, setContinent] = useState('All')
  const resultsPerPage = 16
  
  const slicedCountries = filteredCountries?.slice(resultsPerPage * (page - 1), resultsPerPage * page)
  const maxPages = Math.ceil(filteredCountries?.length / resultsPerPage)

  useEffect(() => {
    if (location.search) {
      const pageNo = +queryString.parse(location.search)['page']
      if (pageNo < 1 || pageNo > maxPages) {
        history.push('/')
        return setPage(1)
      }
      setPage(pageNo)
    }
  }, [page, location, history, maxPages])

  useEffect(() => {
    setFilteredCountries(allCountries.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())))
  }, [searchTerm, allCountries])

  useEffect(() => {
    if (continent === 'All') return setFilteredCountries(allCountries)
    setFilteredCountries(allCountries.filter(c => c.region === continent))
  }, [continent, allCountries])

  if (isLoading) return <ImSpinner2 size='3rem' />

  return (
    <main>
      <div className='search-filter'>
        <SearchBar searchTerm={searchTerm} handleChange={setSearchTerm} />
        <Filter continent={continent} handleClick={setContinent} />
      </div>
      <section className='countries'>
        {slicedCountries.map(country => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </section>
      <div className='page-buttons'>
        {page > 1 && (
          <Button
            icon='chev-left'
            text={`Page ${page - 1}`}
            handleClick={setPage}
            page={page - 1}
          />
        )}
        {page < maxPages && (
          <Button
            icon='chev-right'
            text={`Page ${page + 1}`}
            handleClick={setPage}
            page={page + 1}
          />
        )}
      </div>
    </main>
  )
}

export default HomePage
