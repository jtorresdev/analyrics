import React, { Component } from 'react';
import SearchBox from './SearchBox';
import HitsList from './HitsList';
import Lyrics from './Lyrics';
import { connect } from 'react-redux';
import { search as searchAction } from '../../redux/actions';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { hits, lyrics, artist } = this.props;
		return (
			<div className="page-content page-container" id="page-content">
				<div className="padding sr">
					<div className="page-hero">
						<div className="media bg-media">
							<div className="media-content">
								<div
									className="media-content"
									style={{ backgroundImage: 'url(' + artist.artist_image + ')' }}
								/>
							</div>
						</div>
						<div className="pos-rlt text-white">
							<span className="ajax text-primary h5 subtitle">{artist.artist_name}</span>
							<h1 className="display-3 font-weight-bold mb-0 text-white title">{artist.song_title}</h1>
						</div>
					</div>

					<Lyrics lyrics={lyrics} />

					<SearchBox />
					<HitsList hits={hits} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		hits: state.hits,
		lyrics: state.lyrics,
		artist: state.artist
	};
};

const mapDispatchToProps = {
	searchAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
