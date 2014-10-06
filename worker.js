postMessage(eq());

function eq() {
	var date = new Date(),
		arr = [];

	for (var i = 0; i < 100000; i++) {
		for (var j = 0; j < 100000; j++) {}
	}
	return (new Date()) - date;
}