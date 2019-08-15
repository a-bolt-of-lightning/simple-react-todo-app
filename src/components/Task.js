import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';


class Task extends Component {

  render(){
    return(
      <div className="m-2">
          <ListGroup.Item className="justify-content-between d-flex flex-row"> 
						{this.props.name} 
						<div>
							<span> <i className="fa fa-trash" onClick={this.props.removeItem} /> </span>
							<span> <i className="fa fa-pencil" onClick={this.props.editItem}/> </span>
						</div>
					</ListGroup.Item>    
      </div>
    );
  }
}

export default Task;