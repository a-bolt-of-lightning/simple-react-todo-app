import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';


class Task extends Component {

  render(){
    return(
      <div className="m-2">
          <ListGroup.Item> {this.props.item} </ListGroup.Item>    
      </div>
    );
  }
}

export default Task;