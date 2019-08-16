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
            disponibles: []
        };
        this.onDrop = this.onDrop.bind(this);
        this.onCommit = this.onCommit.bind(this);
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

    onDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data));        
        console.log('<Loadbalancer> dropped on', e.target.id)
        //console.log('drop() data', data)    
    }

    onCommit = (e) => {       
        e.preventDefault();
        console.log('<Loadbalancer> e.target.name', e.target.name)        
    }

    render() {
        return (
            <div>                
                <Tablero data={this.state.data} disponibles={this.state.disponibles} onDrop={this.onDrop} onCommit={this.onCommit}/> 
            </div>
        )
    }
}
