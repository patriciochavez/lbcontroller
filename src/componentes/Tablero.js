import React, { Component } from 'react';
import '../App.css';
import Haproxy from './Haproxy';

// const Servidor = (props) => {    
//     return (
//             <div className="card text-center">
//                 <div className="card-body">
//                     <h5 className="card-title">nombre: {props.servidor.name}</h5>
//                     <p className="card-text">ip: {props.servidor.address}</p>
//                     <p className="card-text">puerto: {props.servidor.port}</p>
//                     <p className="card-text">estado: {props.servidor.check}</p>
//                     {<a href="#" className="btn btn-danger">Suspender</a>}
//                 </div>
//             </div>        
//     );
// }

export default class DragDrop extends Component {
    constructor(props){
        super(props);

    this.state = {
        tasks: [
            {name:"Servidor1", category:"wip", bgcolor: "blue"},
            {name:"Servidor2", category:"wip", bgcolor:"blue"}            
          ]
    };   
}

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name === id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">Controlador de HAProxy</h2>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header"><Haproxy data={this.props.data}/></span>
                    {tasks.wip}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">Disponibles</span>
                     {tasks.complete}                     
                </div>
            </div>
        );
    }
}