import React, { Component } from 'react';

export default class Servers extends Component {

componentDidMount() {
    console.log('componente montado', this.props.servers)
}

    Servidor = () => {
        return (
            <div className="card-group">
                <div className="card text-center">                    
                <div className="card-body">
                    <h5 className="card-title">nombre: {this.props.name}</h5>
                    <p className="card-text">balanceo: {this.props.balance}</p>
                    <p className="card-text">granja: {this.props.farmname}</p>
                    {<a href="#" className="btn btn-primary">Suspender</a>}
                </div>
            </div>
        </div >);
    }

    Servidores = () => {
       return (
            <div className="card-group">
                <div className="card text-center">                    
                <div className="card-body">
                    <h5 className="card-title">nombre: {JSON.stringify(this.props.servers)}</h5>
                    <p className="card-text">ip: {}</p>
                    <p className="card-text">port: {this.props.balance}</p>
                    <p className="card-text">estado: {this.props.farmname}</p>
                    {<a href="#" className="btn btn-danger">Suspender</a>}
                </div>
            </div>
        </div >);
    }

    render() {
        return (
            <div>
                <this.Servidores/>
            </div>
        )
    }
}
