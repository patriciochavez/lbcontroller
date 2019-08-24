import React, { useContext } from 'react';
import Arrastrable from './Draggable';
import ContextoLoadbalancer from './ContextoLoadbalancer';

const ServidoresAsignados = () => {
    const { asignadas} = useContext(ContextoLoadbalancer);        
    return (
        <>
            {asignadas && asignadas.map((servidor) => (
                <Arrastrable id={servidor.name} style={{ margin: '8px' }} key={servidor.name}>                    
                    <div className="card text-center bg-dark" id={servidor.name}>
                        <div className="card-body">
                            <h5 className="card-title">nombre: {servidor.name}</h5>
                            <p className="card-text">ip: {servidor.address}</p>
                            <p className="card-text">puerto: {servidor.port}</p>
                            {(servidor.check === 'enabled') ? <p className="badge badge-success">check</p> : <p className="badge badge-danger">no-check</p>}
                        </div>
                    </div>                   
                </Arrastrable>
            ))
            }
        </>
    );
}

export default ServidoresAsignados;

