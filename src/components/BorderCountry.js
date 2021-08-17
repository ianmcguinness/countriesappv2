import React from 'react'
import {Link} from 'react-router-dom'
import {useQuery} from 'react-query'
import axios from 'axios'
import {ImSpinner2} from 'react-icons/im'
import '../styles/BorderCountry.css'

const BorderCountry = ({code}) => {

    const {data, isLoading} = useQuery(['border-name', code], async () => {
        return await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
    })

    if (isLoading) return <ImSpinner2 color='#fff' size='3rem' />

    return (
        <Link to={`/${code}`} className='BorderCountry'>
            {data.data.name}
        </Link>
    )
}

export default BorderCountry
