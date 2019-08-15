import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tablero from './Tablero';

export default class Loadbalancer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authorization: 'Basic YWRtaW46bXlwYXNzd29yZA==',
            data: '',
            disponibles: 'ninguno'
        };
    }

    async componentDidMount() {
        try {
            let config = {
                headers: { 'Content-Type': 'application/json', 'Authorization': this.state.authorization },
            };
            const data = await axios.get('http://200.32.43.83:8080/v1/services/haproxy/sites', config);

            this.setState({
                data: data
            });

        } catch (error) {
            console.error(error)
        }
    }

    commit = (e) => {       
        e.preventDefault();
        console.log('e.target.name', e.target.name)
        // console.log('servidores configurados', this.data.data.data[0].farms[0].servers)        
        // console.log('servidores disponibles', this.state.disponibles)
    }

    render() {
        return (
            <div>                
                <Tablero data={this.state.data} commit={this.commit}/> 
            </div>
        )
    }
}
