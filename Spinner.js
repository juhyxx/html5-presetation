function Spinner(canvasEl) {

	this.init(canvasEl);

}

Spinner.prototype = {

	time: 125,
	gray: '#cdcdcd',
	orange: '#ec2f00',
	radius: 45 / 2,
	lineWidth: 8,
	margin: 5,

	init: function(canvasEl) {
		this.canvasEl = canvasEl;
		this.render(0);

	},

	render: function(itemToHiglight) {
		var context = this.canvasEl.getContext('2d'),
			i;

		context.clearRect(0, 0, this.radius * 2, this.radius * 2);

		for (i = 0; i < 8; i++) {
			context.beginPath();
			context.arc(
				this.radius,
				this.radius,
				this.radius - this.lineWidth / 2,
				this.degRad(((i - 1) * 45) + this.margin - 45),
				this.degRad((i * 45) - this.margin - 45)
			);

			context.strokeStyle = itemToHiglight === i ? this.orange : this.gray;
			context.lineWidth = this.lineWidth;
			context.stroke();
		}

	},

	degRad: function(deg) {

		return deg / 180 * Math.PI;

	},

	animate: function() {
		this.counter = this.counter < 7 ? this.counter + 1 : 0;
		this.render(this.counter);

	},

	run: function() {
		var _this = this;
		setInterval(function() {
			_this.animate.call(_this);
		}, this.time);
	}

};