import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tablero from './Tablero';

export default class Loadbalancer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authorization: 'Basic YWRtaW46bXlwYXNzd29yZA==',
            data: ''
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

    render() {
        return (
            <div>                
                <Tablero data={this.state.data}/>
            </div>
            )
            }
}
