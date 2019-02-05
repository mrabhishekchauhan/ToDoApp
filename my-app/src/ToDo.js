import React, { Component } from 'react';

import { Form, Grid, Segment, Button } from 'semantic-ui-react';

export default class ToDo extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
				  <Grid.Column style={{ maxWidth: 450 }}>
					  <Form size='large' error>
						  <Segment stacked>
                <div>
                  <h3>ToDo</h3>
                    <Form onSubmit={this.handleSubmit}>
                      <label htmlFor="new-todo">
                        What needs to be done?
                      </label>
                      <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                      />
                      <Button>
                        Add #{this.state.items.length + 1}
                      </Button>
                    </Form>
                    <TodoList items={this.state.items} />
                </div>
              </Segment>
					  </Form>
				  </Grid.Column>
			  </Grid>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  
//   ReactDOM.render(
//     <Todo />,
//     document.getElementById('todos-example')
//   );
  