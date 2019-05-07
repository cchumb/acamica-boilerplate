import React, { Component } from 'react'

class OptionsFilter extends Component {
  constructor(props) {  
    super(props)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(event) {
    const { name, value } = event.target
    this.props.onFilterChange({name: name, value: value})
  }

  render() {
    return (
      <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={ {width: '100%'} }>
            <select style={ {width: '100%'} } name={ this.props.name } onChange={ this.handleOptionChange }>
              { this.props.options.map((opt) =>
                <option value={opt.value} key={opt.name}>{opt.name}</option>
              )}
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className="fas"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default OptionsFilter