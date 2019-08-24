import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextoLoadbalancer from './ContextoLoadbalancer';

const Draggable = ({ id, children }) => {
    const { setArrastrando } = useContext(ContextoLoadbalancer);

    const arrastrar = (e) => {
        // e.dataTransfer.setData('transfer', e.target.id);
        // console.log(e.target.id);
        setArrastrando(e.target.id);
        // console.log(document.getElementById(e.target.id).parentNode.id)
    }

    const noSoltar = (e) => {
        e.stopPropagation();
    }
        
    return (
        <div id={id} draggable="true" onDragStart={arrastrar} onDragOver={noSoltar} style={{ margin: '8px' }} key={id}>
            {children}
        </div>
    )
}

Draggable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}

export default Draggable;