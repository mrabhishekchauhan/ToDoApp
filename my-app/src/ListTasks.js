import React, { Component } from 'react';

export default class ListTasks extends Component {
	constructor(props){
		super(props)
	}
	
	render(){
		const element = (<div> Text from Element </div>)
		return(<div className = "compnent text" >
			{this.props.displaytext}
			{element}
		</div>)
	}
}
