import React, { useContext } from 'react';
import Draggable from './Draggable';
import ContextoLoadbalancer from './ContextoLoadbalancer';

const Servidores = () => {
    const { data } = useContext(ContextoLoadbalancer);
    return (
        <div>
            {data && data.data.data[0].farms[0].servers.map((servidor) => (
                <Draggable id={servidor.name} style={{ margin: '8px' }}>
                    <div className="card text-center bg-dark" id={servidor.name}>
                        <div className="card-body">
                            <h5 className="card-title">nombre: {servidor.name}</h5>
                            <p className="card-text">ip: {servidor.address}</p>
                            <p className="card-text">puerto: {servidor.port}</p>
                            {(servidor.check === 'enabled') ? <p className="badge badge-success">check</p> : <p className="badge badge-danger">no-check</p>}
                        </div>
                    </div>
                </Draggable>
            ))
            }
        </div>
    );
}

export default Servidores;

