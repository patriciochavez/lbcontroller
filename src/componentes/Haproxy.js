import React, { useContext } from 'react';
import ContextoLoadbalancer from './ContextoLoadbalancer';

const Proxy = () => {
    const { data, asignadas4commit, disponibles4commit } = useContext(ContextoLoadbalancer);

    const onCommit = (e) => {
        e.preventDefault();
        console.log(asignadas4commit, disponibles4commit)
    }

    return (
        <div className="card-group">
            <div className="card text-center bg-primary">
                <button className="float-right bg-success float-right" name="commit" onClick={onCommit}>Commit</button>
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