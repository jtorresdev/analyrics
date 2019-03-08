import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search as searchAction } from '../../redux/actions';
import FeatherIcon from 'feather-icons-react';

class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = { query: '' };
	}
	render() {
		const { searchAction } = this.props;
		return (
			<div className="row row-md list-item">
				<div className="col-12">
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="looking for a song..."
							onChange={(e) => {
								this.setState({ query: e.target.value });
							}}
							value={this.state.query}
							onKeyPress={(e) => {
								if (e.key === 'Enter') {
									searchAction(this.state.query);
								}
							}}
						/>

						<div className="input-group-prepend">
							<button
								className="btn btn-primary"
								onClick={(e) => {
									searchAction(this.state.query);
								}}
							>
								<FeatherIcon icon="search" size="24" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	searchAction
};

export default connect(null, mapDispatchToProps)(SearchBox);
