import React, { Component } from 'react';

class Lyrics extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}


	insertTextAtIndices = function(lyrics, positive_words_arr, negative_words_arr) {
		let positive_words = [...new Set(positive_words_arr)];
		let negative_words = [...new Set(negative_words_arr)];

		positive_words.map((word) => {
			var re = new RegExp(word, 'g');
			lyrics = lyrics.replace(re, '<span class="green" style="padding:2px">' + word + '</span>');
		});

		negative_words.map((word) => {
			var re = new RegExp(word, 'g');
			lyrics = lyrics.replace(re, '<span class="red" style="padding:2px"0>' + word + '</span>');
		});

		return lyrics;
	};

	render() {
		const { loading, results } = this.props.lyrics;
		if (results) {
			return (
				<div className="d-md-flex pos-rlt mb-5">
					<div className="flex">
						<span
							className="lyrics"
							dangerouslySetInnerHTML={{
								__html: this.insertTextAtIndices(
									results.lyrics,
									results.analysis.positive,
									results.analysis.negative
								)
							}}
						/>
					</div>
					<div className="w-auto-sm no-shrink analysis">
						<div className="card bg-black">
							<div className="card-body">
								<p>
									Positive words: <b className="green">{results.analysis.positive.length}</b>
								</p>
								<p>
									Negative words: <b className="red">{results.analysis.negative.length}</b>
								</p>
								<p>
									Score: <b>{results.analysis.score}</b>
								</p>
								<p>
									Comparative: <b>{results.analysis.comparative}</b>
								</p>
							</div>
						</div>
					</div>
				</div>
			);
		} else if (loading) {
			return (
				<div className="d-md-flex pos-rlt mb-5">
					<div className="flex">
						<div className="loader">Loading...</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Lyrics;
