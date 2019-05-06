import React, { Component } from 'react'

class DateFilter extends Component {
    constructor(props) {
        super(props)
        this.handleDateChange = this.handleDateChange.bind(this)
    }
    handleDateChange = (event) => {
        const { name, value } = event.target
        this.props.onDateChange({name: name, value: value})
    }
  render() {
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" onChange={ this.handleDateChange } value={ this.props.date } name={ this.props.name }/>
                <span className="icon is-small is-left">
                <i className="fas"></i>
                </span>
            </div>
        </div>
    )
  }
}

export default DateFilter