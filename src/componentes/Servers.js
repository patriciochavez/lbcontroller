import React from 'react';

const Servidor = (props) => {    
    return (        
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">nombre: {props.servidor.name}</h5>
                    <p className="card-text">ip: {props.servidor.address}</p>
                    <p className="card-text">puerto: {props.servidor.port}</p>
                    <p className="card-text">estado: {props.servidor.check}</p>
                    {<a href="#" className="btn btn-primary">Suspender</a>}
                </div>
            </div>
    );
}

const Servidores = (props) => {
    return (
        <div className="card-group">
            <div className="card bg-success bg-primary col-3">
                <div className="card-body">
                    {
                        (props.data.data) && props.data.data.data[0].farms[0].servers.map((servidor) => (
                            <Servidor servidor={servidor}/>
                        ))                    
                    }
                </div>
            </div>
        </div >);
}

export default Servidores;

