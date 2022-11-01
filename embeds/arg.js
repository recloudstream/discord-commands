class AsyncConstructor {
	constructor(args) {
        this.args = args
		return (async (inputs) => {
            this.content = "Hello "+ inputs[0]
			return this;
		})(args);
	}
}

module.exports = AsyncConstructor