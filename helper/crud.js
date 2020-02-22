export class Crud {
	constructor(url, options, body = null) {
		this.url  = url
		this.options = options
		if(this.body != null)
			this.body = body
	}

	getData() {
		return new Promise((resolve, reject) => {
			fetch(this.url, this.options)
			.then(res => res.json())
			.then(res => resolve(res))
			.catch(e => reject())
		})
	}
}