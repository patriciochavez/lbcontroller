import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Haproxy from './Haproxy';
import Servidores from './Servers';

export default class Loadbalancer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authorization: 'Basic YWRtaW46bXlwYXNzd29yZA==',
            data: '',
            name: '',
            balance: '',
            farmname: '',
            servers: []
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

            this.setState({
                name: data.data.data[0].name
            });

            this.setState({
                balance: data.data.data[0].farms[0].balance.algorithm
            });

            this.setState({
                farmname: data.data.data[0].farms[0].name
            });

            this.setState({
                servers: data.data.data[0].farms[0].servers
            });

            console.log(this.state.data.data.data[0].farms[0].balance.algorithm);
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <div>
                <Haproxy name={this.state.name} balance={this.state.balance} farmname={this.state.farmname}/>           
                <Servidores servers={this.state.servers}/>
                {console.log('paso') }              
            </div>
            )
            }
}