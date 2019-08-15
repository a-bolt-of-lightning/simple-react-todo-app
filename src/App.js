import React, {Component} from 'react';
import TaskList from './components/TaskList';
import Input from './components/Input';
import {Card, Col, Row} from 'react-bootstrap';
import uuid from 'uuid';

class App extends Component{

  constructor(props){
    super(props);

    this.state={
      removeActive: false,
      items:[],
      item:{
        id: 0,
        name : ""
      }
    }
  }

  setRemoveActive = () => {
    
    console.log(this.state.items);
      if(this.state.items.length === 0 ){
        this.setState({removeActive: false});
      }
  }

  handleChange = (e) => {
    this.setState({item: {
      name: e.target.value,
      id: uuid(),
    }});
  }
  
  handleSubmit = (e) => {
    
    e.preventDefault();
    if(this.state.item === "") {
      return;
    }
    const newItems = [...this.state.items, this.state.item];
    this.setState({
      item:{
        name: "",
        id: 0
      },
      items: newItems,
      removeActive:true
    });

  }

  removeItems = () => {
    this.setState({
      item: {
        name: "",
        id: 0
      },
      items: [],
      removeActive: false
    });
  }

  removeAnItem = (id) => {
    const newItems = this.state.items.filter( (item) => item.id !== id );
    this.setState({
      items: newItems,
    }, (response => this.setRemoveActive()));
  }

  render(){
    return (
        <div className="container">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Input item={this.state.item}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                  <TaskList items={this.state.items} removeAnItem={this.removeAnItem}/>
                  <div className={"btn btn-block " + (this.state.removeActive ? "btn-danger" : "btn-dark")} onClick={this.removeItems}>Remove All Tasks</div>
                </Card.Body>
              </Card> 
            </Col>
          </Row>
        </div>
    );    
  }

}

export default App;
