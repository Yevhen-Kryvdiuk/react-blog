export default class BlogService {
	constructor() {
		this._apiBase = 'https://simple-blog-api.crew.red/';
		this._pathToComments = '?_embed=comments';
	}

	getPosts() {
		return fetch(`${this._apiBase}posts/`).then(res => res.json());
	}
	getPostById(id) {
		return fetch(`${this._apiBase}posts/${id}${this._pathToComments}`).then(
			res => res.json()
		);
	}
	createCommentForPost(id, data) {
		return fetch(`${this._apiBase}comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(res => res.json());
	}
}
