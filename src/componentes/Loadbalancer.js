import React, { useState, useEffect } from 'react';
import ContextoLoadbalancer from './ContextoLoadbalancer';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tablero from './Tablero';

const Loadbalancer = () => {
    const authorization = 'Basic YWRtaW46bXlwYXNzd29yZA==';
    const [data, setData] = useState(null);
    const [cargando, setCargando] = useState(true);
    // const [error, setError] = useState(false);
    const [asignadas, setAsignadas] = useState(null);
    const [disponibles, setDisponibles] = useState(null);
    const [arrastrando, setArrastrando] = useState(null);
    const [asignadas4commit, setAsignadas4commit] = useState(null);
    const [disponibles4commit, setDisponibles4commit] = useState(null);
    
    useEffect(() => {
        async function traerDatos() {            
            try {
                let config = {
                    headers: { 'Content-Type': 'application/json', 'Authorization': authorization },
                };
                const data = await axios.get('http://200.32.43.83:8080/v1/services/haproxy/sites', config);

                setData(data);
                setCargando(false);

                const servers = [
                    {
                        name: 'noasignado01',
                        address: '200.32.43.83.1',
                        port: '01',
                        check: 'disabled'
                    }
                ];

                data && setAsignadas(data.data.data[0].farms[0].servers);
                servers && setDisponibles(servers);
                data && setAsignadas4commit(data.data.data[0].farms[0].servers);
                servers && setDisponibles4commit(servers);

            } catch (error) {
                console.error(error);
            }
        }

        traerDatos();
    }, []);

    return (
        <ContextoLoadbalancer.Provider value={{ data, setData, asignadas, setAsignadas, disponibles, setDisponibles, arrastrando, setArrastrando, disponibles4commit, setDisponibles4commit, asignadas4commit, setAsignadas4commit }}>
            {!cargando && <Tablero />}           
        </ContextoLoadbalancer.Provider>

    )
}

export default Loadbalancer;
