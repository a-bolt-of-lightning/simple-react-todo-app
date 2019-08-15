import React, {Component} from 'react';
import Task from './Task';
import {ListGroup} from 'react-bootstrap';


class TaskList extends Component {

  render(){
    return(
      <div className="card">
				<ListGroup >
					<div >
						{this.props.items.map( (item) => <Task key={item.id} name={item.name} /> )} 
					</div>
				</ListGroup>
      </div>
    );
  }
}

export default TaskList;