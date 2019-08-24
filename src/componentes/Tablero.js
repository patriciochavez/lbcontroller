import React from 'react';
import styled from 'styled-components';
import ServidoresAsignados from './ServidoresAsignados';
import ServidoresDisponibles from './ServidoresDisponibles';
import Droppable from './Droppable';
import Haproxy from './Haproxy';

const AppWrapper = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
`;

const Tablero = () => {
    return (
        <div>
            <Haproxy />
            <AppWrapper>
                <Droppable id="asignadas" key="asignadas">
                    Asignadas
                    <ServidoresAsignados key="servidoresDisponibles" />
                </Droppable>
                <Droppable id="disponibles" key="disponibles">
                    Disponibles
                    <ServidoresDisponibles key="servidoresAsignados" />
                </Droppable>
            </AppWrapper>
        </div>
    );
}

export default Tablero;