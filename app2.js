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