import React from 'react';
import styled from 'styled-components';
import Servidores from './Servers';
import Droppable from './Droppable';
import Haproxy from './Haproxy';
import ContextoLoadbalancer from './ContextoLoadbalancer';

const droppableStyle = {
    backgroundColor: '#555',
    width: '600px',
    height: '800px',
    margin: '1px',
    color: 'white'
};

const AppWrapper = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
`;

const Tablero = () => {        
    const onDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data));        
        console.log('<Loadbalancer> dropped on', e.target.id)   
    }

    const onCommit = (e) => {       
        e.preventDefault();
        console.log('<Loadbalancer> e.target.name', e.target.name)        
    }


        return (
            <div>
                <Haproxy/>
                <button className="float-right bg-success" name="commit" onClick={onCommit}>Commit</button>
                <AppWrapper>
                    <Droppable onDrop={onDrop} id="asignadas" style={droppableStyle}>
                        Asignadas
                    <Servidores/>
                    </Droppable>
                    <Droppable onDrop={onDrop} id="disponibles" style={droppableStyle}>
                        Disponibles    
                </Droppable>
                </AppWrapper>
            </div>
        );
}

export default Tablero;