var sourceData = {
	'count': 1
};

var plusCounter = function () {
	sourceData.count++;
}
var minusCounter = function () {
	sourceData.count--;
}

var plusButton = document.getElementById('plus');
var minusButton = document.getElementById('minus');

plusButton.addEventListener('click', plusCounter);
minusButton.addEventListener('click', minusCounter);


var appFirst = new Vue({
	el: "#app-1",
	data: function () {
		return  {
			centralData: sourceData
		}
	},
	methods: {
		plusCount: function () {
			this.centralData.count++;
		}
	}
});

var appSecond = new Vue({
	el: "#app-2",
	data: function () {
		return {
			centralData: sourceData
		}
	},
	methods: {
		minusCount: function () {
			this.centralData.count--;
		}
	}
});