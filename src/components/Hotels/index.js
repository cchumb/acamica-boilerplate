import React, { Component } from 'react'
import Hotel from '../Hotel'

class Hotels extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <section className="section" style={ {marginTop: '3em'} }>
                <div className="container">
                    {
                        (this.props.data.length === 0) 
                        ?
                        <article className="message is-danger">
                            <div className="message-body">
                                No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
                            </div>
                        </article>
                        :
                        null
                    }
                    <div className="columns is-multiline">
                        {
                            this.props.data.map((hotel) => <div className="column is-3"> <Hotel data={ hotel } /> </div>)
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Hotels