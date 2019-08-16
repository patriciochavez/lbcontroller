import React, { Component } from 'react';
import styled from 'styled-components';
import Servidores from './Servers';
import Droppable from './Droppable';
import Haproxy from './Haproxy';

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

export default class Tablero extends Component {    

    render() {
        return (
            <div>
                <Haproxy data={this.props.data} />
                <button className="float-right bg-success" name="commit" onClick={this.props.onCommit}>Commit</button>
                <AppWrapper>
                    <Droppable onDrop={this.props.onDrop} id="asignadas" style={droppableStyle}>
                        Asignadas
                    <Servidores data={this.props.data} />
                    </Droppable>
                    <Droppable onDrop={this.props.onDrop} id="disponibles" style={droppableStyle}>
                        Disponibles    
                </Droppable>
                </AppWrapper>
            </div>
        )
    }
}
