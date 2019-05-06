import React, { Component } from 'react'
import DateFilter from '../DateFilter'
import OptionsFilter from '../OptionsFilter'
import moment from 'moment'

class Filter extends Component {

  constructor(props) {
    super(props)

    // this.state = {
    //   dateFrom: props.filters.dateFrom.format('YYYY-MM-DD'),
    //   dateTo: props.filters.dateTo.format('YYYY-MM-DD')
    // }
  }

  render() {
    return (
      <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
        <div className="navbar-item">
          <DateFilter
            name="dateFrom"
            date={ this.props.filters.dateFrom}
            icon="sign-in-alt" 
            onDateChange={this.props.onFilterChange}/>
        </div>
        <div className="navbar-item">
          <DateFilter
            name="dateTo"
            date={ this.props.filters.dateTo }
            icon="sign-out-alt"
            onDateChange={this.props.onFilterChange} />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            name="country"
            options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
            selected={ this.props.filters.country }
            icon="globe"
            onFilterChange={this.props.onFilterChange} />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            name="price"
            options={ [ {value: 0, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
            selected={ this.props.filters.price }
            icon="dollar-sign" 
            onFilterChange={this.props.onFilterChange}/>
        </div>
        <div className="navbar-item">
          <OptionsFilter
            name="rooms"
            options={ [ {value: 0, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
            selected={ this.props.filters.rooms }
            icon="bed"
            onFilterChange={this.props.onFilterChange} />
        </div>
      </nav>
    )
  }
}

export default Filter