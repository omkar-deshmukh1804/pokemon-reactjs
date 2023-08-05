import { useState, useEffect } from 'react'
import { List }  from './components/List'
import Pagination from './components/Pagination'
import { Header } from './components/Header'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [prevPageUrl, setPrevPageUrl] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(response => {
        setLoading(false)
        setNextPageUrl(response.data.next)
        setPrevPageUrl(response.data.previous)
        setPokemon(response.data.results)
    })
    return () => cancel()
  }, [currentPageUrl])
  
  
  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }

  loading ? "Loading...." : ''
  return (
    <div className='main'>
      <Header />
      <List pokemon={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </div>
    
  )
}

export default App
