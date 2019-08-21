import React, { useState, useEffect } from 'react';
import ContextoLoadbalancer from './ContextoLoadbalancer';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tablero from './Tablero';

const Loadbalancer = () => {
    const authorization = 'Basic YWRtaW46bXlwYXNzd29yZA==';
    const [data, setData] = useState(null);
    const [disponibles, setDisponibles] = useState(null);
    
    useEffect(async () => {
        async function datos (){
        try {
            let config = {
                headers: { 'Content-Type': 'application/json', 'Authorization': authorization },
            };
            const data = await axios.get('http://200.32.43.83:8080/v1/services/haproxy/sites', config);

            setData({
                data
            });     
           
        } catch (error) {
            console.error(error);
        }
    }
    
    
    }, []);

    return (
        <ContextoLoadbalancer.Provider value={{ data, setData, disponibles, setDisponibles }}>
            <Tablero />
        </ContextoLoadbalancer.Provider>

    )
}

export default Loadbalancer;
