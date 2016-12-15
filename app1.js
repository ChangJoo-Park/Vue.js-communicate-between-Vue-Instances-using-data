var appFirst = new Vue({
	el: "#app-1",
	data: function () {
		return  {
			centralData: sourceData,
			popups: [],
		}
	},
	methods: {
		plusCount: function () {
			this.centralData.count++;
		},
		openPopup: function () {
			var win = window.open('http://localhost:8000/popup.html');
		}
	}
});