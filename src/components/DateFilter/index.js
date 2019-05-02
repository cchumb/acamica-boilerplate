import React, { Component } from 'react'

class DateFilter extends Component {
    constructor(props) {
        super(props)
      }
  render() {
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" />
                <span className="icon is-small is-left">
                <i className="fas"></i>
                </span>
            </div>
        </div>
    )
  }
}

export default DateFilter