import React, { Component } from 'react'
import moment from 'moment'

class Hero extends Component {
  constructor(props) {  
    super(props)
  }

  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              desde el <strong>{moment(this.props.filters.dateFrom).format('DD/MM/YYYY')}</strong> hasta el{' '}
              <strong>{moment(this.props.filters.dateTo).format('DD/MM/YYYY')}</strong>
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
