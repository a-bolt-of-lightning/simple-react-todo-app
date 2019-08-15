import React, {Component} from 'react';
import {Form, Button, FormLabel, InputGroup} from 'react-bootstrap';


class Input extends Component {

  render(){
    return(
      <div className="mt-4">
				<Form  onSubmit={this.props.handleSubmit}>
					<Form.Group>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text id="basic-addon1"> <i className="fa fa-sticky-note" /> </InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control size="lg" type="text" placeholder="task" value={this.props.item} onChange={this.props.handleChange} />
						</InputGroup>
						
						<Button className="btn-block" variant="primary" type="submit">Add Task</Button>
					</Form.Group>
				</Form>
      </div>
    );
  }
}

export default Input;