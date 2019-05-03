import React, { Component } from 'react'
import './index.css'
import Hero from '../Hero'
import Filters from '../Filters'
import moment from 'moment'



class App extends Component {
  constructor() {  
    super()

    this.state = {
      filters: {
        dateFrom: moment().format('YYYY-MM-DD'),
        dateTo: moment().add(1,'days').format('YYYY-MM-DD'),
        country: '',
        price: 0,
        rooms: 0
      }
    }
  }

  handleFilterChange = (payload) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [payload.name]: payload.value
      }
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Hero filters={ this.state.filters}/>
        <Filters filters={ this.state.filters} onFilterChange={ this.handleFilterChange }/>
      </div>
    )
  }
}

export default App
