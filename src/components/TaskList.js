import React, {Component} from 'react';
import Task from './Task';
import {ListGroup} from 'react-bootstrap';


class TaskList extends Component {

	

	onClickRemove = (e) => {
		e.preventDefault();
		this.props.removeItems();
	}

  render(){
    return(
      <div className="card">
				<ListGroup >
					<div >
						{this.props.items.map( (item, i) => <Task key={i} item={item} /> )} 
					</div>
				</ListGroup>
				<div className="btn btn-danger" onClick={this.onClickRemove}>Remove All Tasks</div>
      </div>
    );
  }
}

export default TaskList;