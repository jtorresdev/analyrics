import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';
import { connect } from 'react-redux';
import { lyrics as getLyricsAction, getArtist as getArtistAction } from '../../redux/actions';

class HitsList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { hits, getLyricsAction, getArtistAction } = this.props;
		if (hits.length > 0) {
			return (
				<div>
					<div className="heading pt-5 pb-3 d-flex list-item">
						<div>
							<h5 className="text-highlight sr-item is-show is-shown">Results</h5>
							<div className="text-muted sr-item is-show is-shown">{hits.length} songs</div>
						</div>
						<span className="flex" />
					</div>
					<div className="row row-md">
						{hits.map((song, i) => {
							return (
								<div className="col-2" key={i}>
									<div
										className="list-item r list-hover is-show is-shown cp mb-4"
										onClick={(e) => {
											window.scrollTo(0, 0);
											getArtistAction(song.result);
											getLyricsAction(song.result.title, song.result.primary_artist.name);
										}}
									>
										<div className="media">
											<span
												className="ajax media-content"
												style={{
													backgroundImage:
														'url(' + song.result.header_image_thumbnail_url + ')'
												}}
											/>
											<div className="media-action media-action-overlay">
												<FeatherIcon icon="eye" size="24" />
											</div>
										</div>
										<div className="list-content text-center">
											<div className="list-body">
												<span className="list-title title ajax">{song.result.title}</span>
												<span className="list-subtitle d-block text-muted">
													{song.result.primary_artist.name}
												</span>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

const mapStateToProps = (state) => {
	return {
		lyrics: state.lyrics
	};
};

const mapDispatchToProps = {
	getLyricsAction,
	getArtistAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HitsList);
