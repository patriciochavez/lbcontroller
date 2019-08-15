import React from 'react';
import Draggable from './Draggable';

const Servidor = (props) => {
    return (
        <Draggable id={props.servidor.name} style={{ margin: '8px' }}>
            <div className="card text-center" id={props.servidor.name}>
                <div className="card-body">
                    <h5 className="card-title">nombre: {props.servidor.name}</h5>
                    <p className="card-text">ip: {props.servidor.address}</p>
                    <p className="card-text">puerto: {props.servidor.port}</p>
                    <p className="card-text">estado: {props.servidor.check}</p>
                    {/* {<a href="#" className="btn btn-danger">Suspender</a>} */}
                </div>
            </div>
        </Draggable>
    );
}

const Servidores = (props) => {
    return (
        <div>
                   {(props.data.data) && props.data.data.data[0].farms[0].servers.map((servidor) => (
                        <Servidor servidor={servidor} />
                    ))
                    }
   </div>
    );
}

export default Servidores;

