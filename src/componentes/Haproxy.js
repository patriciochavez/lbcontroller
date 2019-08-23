import React, { useContext } from 'react';
import ContextoLoadbalancer from './ContextoLoadbalancer';

const Proxy = () => {
const { data } = useContext(ContextoLoadbalancer);

    return (        
        <div className="card-group">
            <div className="card text-center bg-primary">
                <div className="card-body">
                    <h5 className="card-title">nombre: {(data.data) && data.data.data[0].name}</h5>
                    <p className="card-text">balanceo: {(data.data) && data.data.data[0].farms[0].balance.algorithm}</p>
                    <p className="card-text">granja: {(data.data) && data.data.data[0].farms[0].name}</p>
                </div>
            </div>
        </div>
    );
}

export default Proxy;