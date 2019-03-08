import axios from 'axios';
const access_token = 'qy6lSZRnHhIDfQ-M2A8T1zCEt84uzBwm4ieX2QzIferlY6FsiU3soeISDvAA5jaR';
var Sentiment = require('sentiment');

export const searchSongs = (query) => {
	return axios
		.get(`https://api.genius.com/search?q=${encodeURIComponent(query)}&access_token=${access_token}&per_page=50`)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getLyrics = async (name, artist) => {
	var sentiment = new Sentiment();
	return axios
		.post(
			`http://localhost:4000/getlyrics`,
			{ name, artist },
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		.then((res) => {
			const lyrics = res.data.split('\n').slice(2).join('\n')
			var analysis = sentiment.analyze(lyrics); 
			return {lyrics, analysis};
		})
		.catch((err) => {
			console.log(err);
		});
};
