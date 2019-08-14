import React, { Component } from 'react';

export default class Haproxy extends Component {

    Proxy = () => {
        return (
            <div className="card-group">
                <div className="card text-center">                    
                <div className="card-body">
                    <h5 className="card-title">nombre: {this.props.name}</h5>
                    <p className="card-text">balanceo: {this.props.balance}</p>
                    <p className="card-text">granja: {this.props.farmname}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div >);
    }

    render() {
        return (
            <div>
                <this.Proxy />
            </div>
        )
    }
}
