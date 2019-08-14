import React from 'react';

const Proxy = (props) => {
    return (
        <div className="card-group">
            <div className="card text-center bg-primary col-3">
                <div className="card-body">
                    <h5 className="card-title">nombre: {(props.data.data) && props.data.data.data[0].name}</h5>
                    <p className="card-text">balanceo: {(props.data.data) && props.data.data.data[0].farms[0].balance.algorithm}</p>
                    <p className="card-text">granja: {(props.data.data) && props.data.data.data[0].farms[0].name}</p>                    
                </div>
            </div>
            </div>);
    }
export default Proxy;