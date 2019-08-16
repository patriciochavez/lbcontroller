import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Droppable extends Component {  

    // drop = (e) => {
    //     e.preventDefault();
    //     const data = e.dataTransfer.getData('transfer');
    //     e.target.appendChild(document.getElementById(data));        
    //     //console.log('drop() e.target.id', e.target.id)
    //     //console.log('drop() data', data)    
    // }

    allowDrop = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div id={this.props.id} onDrop={this.props.onDrop} onDragOver={this.allowDrop} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}

Droppable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}