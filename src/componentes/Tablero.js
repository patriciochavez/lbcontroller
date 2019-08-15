import React, { Component } from 'react';
import styled from 'styled-components';
import Servidores from './Servers';
import Droppable from './Droppable';
import Draggable from './Draggable';
import Haproxy from './Haproxy';
import Items from './Items';

const Wrapper = styled.div`
width: 100%;
padding: 32px;
display: flex;
justify-content: center;
`;

const Item = styled.div`
padding: 8px;
color: #555;
background-color: white;
border-radius: 3px;
`;

const droppableStyle = {
    backgroundColor: '#555',
    width: '600px',
    height: '800px',
    margin: '1px'
};

const AppWrapper = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
`;

export default class Tablero extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <div>
                 <Haproxy data={this.props.data} />
                <AppWrapper>                    
                    {/* <Items /> */}
                   
                    <Droppable id="dr1" style={droppableStyle}>                 
                    Asignadas
                    {/* <Draggable id="item1" style={{margin: '8px'}}><Item>Texto1</Item></Draggable>                   
                    <Draggable id="item2" style={{margin: '8px'}}><Item>Texto2</Item></Draggable> */}
                    <Servidores data={this.props.data} />
                </Droppable>
                <Droppable id="dr2" style={droppableStyle}>
                Disponibles

                </Droppable>
                </AppWrapper>

                {/* <Droppable id="ha-proxy">
                    <Haproxy data={this.props.data} />
                </Droppable>

                <Droppable id="vm-sin-asignar">
                    <Servidores data={this.props.data} />
                </Droppable> */}
            </div>
        )
    }
}
