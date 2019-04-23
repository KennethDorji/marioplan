import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

class Dashboard extends Component {
	render() {
		// console.log(this.props);
		const { projects } = this.props;
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6"> </div>
					<ProjectList projects={projects} />
					<div className="col s12 m5 offset-m1"> </div>
					<Notifications />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		projects: state.project.project
	};
};

//connect is a function and it takes in Dashboard
export default connect(mapStateToProps)(Dashboard);
