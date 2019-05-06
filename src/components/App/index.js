import React, { Component } from 'react'
import './index.css'
import Hero from '../Hero'
import Filters from '../Filters'
import Hotels from '../Hotels'
import moment from 'moment'



class App extends Component {
  constructor() {  
    super()

    this.state = {
      filters: {
        dateFrom: '' ,
        dateTo: '',
        country: '',
        price: 0,
        rooms: 0
      },
      hotels: [],
      hotelsBkp: []
    }
  }

  componentDidMount = async () => {
    let data = await fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
    data = await data.json()
    this.setState( () => ({
      hotels: data,
      hotelsBkp: data
    }))
  }

  handleFilterChange = async (payload) => {
    await this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [payload.name]: payload.value
      }
    }))
    let hotelFilters = await this.state.hotelsBkp.filter( (data)=>{
      // console.log(moment.unix(data.availabilityFrom))
      // if(this.state.filters.dateFrom !== "" ){
      //   if( moment.unix(data.availabilityFrom).format('YYYY-MM-DD') !== this.state.filters.dateFrom ){
      //     return false
      //   }
      // }

      if(this.state.filters.country !== "" ){
        if( data.country !== this.state.filters.country ){
          return false
        }
      }

      if(parseInt(this.state.filters.price) > 0  ){
        if(data.price !== parseInt(this.state.filters.price)){
          return false
        }
      }

      if(parseInt(this.state.filters.rooms) > 0  ){
        
        if(data.rooms > parseInt(this.state.filters.rooms)){
          return false
        }
      }
      
      return true
    })

    await this.setState({
      hotels: hotelFilters
    })
    
  }

  render() {
    return (
      <div>
        <Hero filters={ this.state.filters}/>
        <Filters filters={ this.state.filters} onFilterChange={ this.handleFilterChange }/>
        <Hotels data={ this.state.hotels } />
      </div>
    )
  }
}

export default App
