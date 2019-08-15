import React, {Component} from 'react';
import TaskList from './components/TaskList';
import Input from './components/Input';
import {Card, Col, Row} from 'react-bootstrap';

class App extends Component{

  constructor(props){
    super(props);

    this.state={
      removeActive: false,
      items:[],
      item:""
    }
  }

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    });
  }
  
  handleSubmit = (e) => {
    
    e.preventDefault();
    if(this.state.item === "") {
      return;
    }
    const newItems = [...this.state.items, this.state.item];
    this.setState({
      item:"",
      items: newItems
    });

    if(!this.state.removeActive){
      this.setState({removeActive: true});
    }
  }

  removeItems = () => {
    this.setState({
      item: "",
      items: [],
      removeActive: false
    });
  }

  render(){
    return (
        <div className="container">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Input item={this.state.item}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                  <TaskList items={this.state.items} removeItems={this.removeItems}/>
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
