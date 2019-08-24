import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextoLoadbalancer from './ContextoLoadbalancer';

const soltableStyle = {
    backgroundColor: '#555',
    width: '600px',
    height: '800px',
    margin: '1px',
    color: 'white'
};

const Droppable = ({ id, children }) => {
    const { arrastrando, asignadas4commit, setAsignadas4commit, disponibles4commit, setDisponibles4commit } = useContext(ContextoLoadbalancer);

    const soltar = (e) => {
        e.preventDefault();
        //const data = e.dataTransfer.getData('transfer');
        //console.log(document.getElementById(data))
        e.target.appendChild(document.getElementById(arrastrando));
        // document.getElementById(document.getElementById(arrastrando).parentNode.id).removeChild(document.getElementById(arrastrando))

        const nombreServidor = arrastrando;
        const destino = e.target.id;

        if (destino === "disponibles") {
            //elimino el servidor de la lista de asignadas
            const _servidor = asignadas4commit.find((servidor) => servidor.name === nombreServidor);
            if (_servidor !== undefined) {
                const _asignadas = asignadas4commit.filter((servidor) => {
                    return servidor = (servidor !== _servidor)
                });
                setAsignadas4commit(_asignadas);
            }
            //agrego el servidor en la lista de disponibles
            setDisponibles4commit([...disponibles4commit, _servidor]);
        } else {
            //elimino el servidor de la lista de disponibles
            const _servidor = disponibles4commit.find((servidor) => servidor.name === nombreServidor);
            if (_servidor !== undefined) {
                const _disponibles = disponibles4commit.filter((servidor) => {
                    return servidor = (servidor !== _servidor)
                });
                setDisponibles4commit(_disponibles);
            }
            //agrego el servidor en la lista de asignadas
            setAsignadas4commit([...asignadas4commit, _servidor]);
        }
    }

    const permitirSoltar = (e) => {
        e.preventDefault();
    }

    return (
        <div id={id} onDrop={soltar} onDragOver={permitirSoltar} style={soltableStyle} key={id}>
            {children}
        </div>
    )
}

Droppable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}

export default Droppable;
