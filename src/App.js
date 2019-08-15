import React, {Component} from 'react';
import TaskList from './components/TaskList';
import Input from './components/Input';
import {Card, Col, Row} from 'react-bootstrap';

class App extends Component{

  constructor(props){
    super(props);

    this.state={
      items:["1", "2", "3"],
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
    const newItems = [...this.state.items, this.state.item];
    this.setState({
      item:"",
      items: newItems
    })

  }

  render(){
    return (
        <div className="container">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Input item={this.state.item}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                  <TaskList items={this.state.items}/>
                </Card.Body>
              </Card> 
            </Col>
          </Row>
        </div>
    );    
  }

}

export default App;
