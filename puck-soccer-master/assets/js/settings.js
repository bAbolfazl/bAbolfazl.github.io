define(["structures/vector2", "custom/size", "custom/menu"], function (Vector2, size, menu) {
	var config, goalHeight = 100, windowWidth, windowHeight;
	let { width, height, window_height, window_width, puck_width, ball_width, offset_X, offset_Y, ballDampening, puckDampening, pullStrength, puckSpeed, ballSpeed } = size
	// debugger

	config = {
		gameWidth: window_width,
		gameHeight: window_height,
		fieldWidth: width,
		fieldHeight: height,
		fieldOffsetX: offset_X,
		fieldOffsetY: offset_Y,
		fieldPaddingX: 30,
		fieldPaddingY: 15,
		godMode: false,
		puckDampening: puckDampening,
		puckSpeed: puckSpeed,
		puckBouncing: 10,
		ballDampening: ballDampening,
		ballSpeed: ballSpeed,
		pullStrength: pullStrength,
		repulsion: 0.98,
		puckRadius: puck_width,
		ballRadius: ball_width,
		turnCooldown: 30,
		maxDirectionalSize: 180,
		winGoals: 2,
		getGoalWidth: function () {
			return this.fieldPaddingX;
		},
		getGoalHeight: function () {
			return goalHeight;
		},
		getGoalY: function () {
			return this.fieldHeight / 2 - goalHeight / 2 + this.fieldOffsetY;
		}
	};

	return config;
});