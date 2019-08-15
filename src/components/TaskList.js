import React, {Component} from 'react';
import Task from './Task';
import {ListGroup} from 'react-bootstrap';


class TaskList extends Component {

  render(){
    return(
      <div className="card">
			<h4 className="text-center m-2">Tasks Go Here ...</h4>
				<ListGroup >
					<div >
						{this.props.items.map( (item) => <Task key={item.id} name={item.name} removeItem={() => this.props.removeAnItem(item.id)} editItem={() => this.props.editAnItem(item.id)} /> )} 
					</div>
				</ListGroup>
      </div>
    );
  }
}

export default TaskList;