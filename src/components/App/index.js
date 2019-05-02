import React, { Component } from 'react'

import './index.css'
import Hero from '../Hero'
import Filters from '../Filters'
import data from '../../scripts/data'

const filters = {
  dateFrom: data.today, // Proviene del archivo data.js
  dateTo: new Date(data.today),
  country: '',
  price: 0,
  rooms: 0
}

class App extends Component {
  render() {
    return (
      <div>
        <Hero filters={ filters}/>
        <Filters filters={ filters} />
      </div>
    )
  }
}

export default App
