import React, { Component } from 'react'


class Hotel extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={this.props.data.photo} alt="Sainte Jeanne Boutique & Spa" />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{this.props.data.name}</p>
                    <p>{this.props.data.description}</p>
                    <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                    <div className="control">
                        <div className="tags has-addons">
                        <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
                        <span className="tag is-medium">{this.props.data.city}, {this.props.data.country}</span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags has-addons">
                        <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
                        <span className="tag is-medium">{this.props.data.rooms} Habitaciones</span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags">
                        <span className="tag is-medium is-info">
                        <i className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>
                            <i className="fas fa-dollar-sign" style={(this.props.data.price <2)?{margin: '0 .125em', opacity: '.25'}:{margin: '0 .125em'}}></i>
                            <i className="fas fa-dollar-sign" style={(this.props.data.price <3)?{margin: '0 .125em', opacity: '.25'}:{margin: '0 .125em'}}></i>
                            <i className="fas fa-dollar-sign" style={(this.props.data.price <4)?{margin: '0 .125em', opacity: '.25'}:{margin: '0 .125em'}}></i>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="javascript:alert('No implementamos esto aún :(')" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
                </div>
            </div>
        )
      }
}

export default Hotel