import React, {Component} from 'react';
import Task from './Task';
import {ListGroup} from 'react-bootstrap';


class TaskList extends Component {

  render(){
    return(
      <div className="card">
				<ListGroup >
					<div >
						{this.props.items.map( (item, i) => <Task key={i} item={item} /> )} 
					</div>
				</ListGroup>
        
      </div>
    );
  }
}

export default TaskList;