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
      },
      editItem: false
    }
  }

  setRemoveActive = () => {
    
    console.log(this.state.items);
      if(this.state.items.length === 0 ){
        this.setState({removeActive: false});
      }
  }

  handleChange = (e) => {
    if(this.state.editItem){
      this.setState({item: {
        name: e.target.value,
        id: this.state.item.id,
      }});
    }else{
      this.setState({item: {
        name: e.target.value,
        id: uuid(),
      }});
    }
    
  }
  
  handleSubmit = (e) => {
    
    e.preventDefault();
    if(this.state.item.name === "") {
      return;
    }

    if(this.state.editItem){
      console.log("lol");
      const updatedArray = this.state.items.map( (item) => item.id===this.state.item.id ? this.state.item : item );

      this.setState({
        items: updatedArray
      });
      
    }else{
      const newItems = [...this.state.items, this.state.item];
      this.setState({
        items: newItems
      });
    }

    
    this.setState({
      item:{
        name: "",
        id: 0
      },
      removeActive:true,
      editItem: false
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

  editAnItem = (id) => {

    const selectedItem = this.state.items.find((item) => item.id === id)
    this.setState({
      item: selectedItem,
      editItem: true
    });
  }

  render(){
    return (
        <div className="container">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Input item={this.state.item}  handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
                  <TaskList items={this.state.items} removeAnItem={this.removeAnItem} editAnItem={this.editAnItem}/>
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
