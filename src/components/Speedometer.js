import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Speedometer extends Component {
    // static propTypes = {

    // }
    handleChange = ( e ) => {
        e.preventDefault();
        // let text = e.target.value;
        // this.actions.send( text );
    }

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <h4 className="center">Speedometer</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Speedometer



