class AsyncConstructor {
	constructor(args) {
        this.args = args
		return (async (inputs) => {
                  this.content = "Hello "+ inputs.join(", ")
		  return this;
		})(args);
	}
}

module.exports = AsyncConstructor
