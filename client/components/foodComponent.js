import React from "react";
import {browserHistory} from 'react-router';
import axios from 'axios';

export default class FoodComponent extends React.Component{
	handleRedirect(target) {
		window.location = target
	}
	handleChoiceRedirect() {
		this.handleRedirect('#/app/choice')
	}

	render(){


		return(
			// const {name,expiration}=this.props??
			<div className="row">
				<button className="foods" onClick={this.handleChoiceRedirect.bind(this)}>
					<span className="foodName">{this.props.food.food_name}</span>
					<span className="expirationDate">{this.props.food.shelf_life} Days</span>
				</button>
			</div>
		)
	}
}