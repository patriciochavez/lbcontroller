import React, { useState, useEffect } from 'react';
import ContextoLoadbalancer from './ContextoLoadbalancer';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tablero from './Tablero';

const Loadbalancer = () => {
    const authorization = 'Basic YWRtaW46bXlwYXNzd29yZA==';
    const [data, setData] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [disponibles, setDisponibles] = useState(null);
    
    useEffect(() => {
        async function traerDatos() {            
            try {
                let config = {
                    headers: { 'Content-Type': 'application/json', 'Authorization': authorization },
                };
                const data = await axios.get('http://200.32.43.83:8080/v1/services/haproxy/sites', config);

                setData(data);
                setCargando(false);

            } catch (error) {
                console.error(error);
            }
        }

        traerDatos();
    }, []);

    return (
        <ContextoLoadbalancer.Provider value={{ data, setData, disponibles, setDisponibles }}>
            {!cargando && <Tablero />}           
        </ContextoLoadbalancer.Provider>

    )
}

export default Loadbalancer;
