var source = {};
if (window.opener) {
  console.log(window.opener)
  source = window.opener.requestSourceData();
}

var vm = new Vue({
  el: '#popup-app',
  created: function () {
    this.centralData = source;
  },
  data: function () {
    return {
      centralData: {}
    }
  },
  methods: {
		plusCount: function () {
			this.centralData.count++;
		},
		minusCount: function () {
			this.centralData.count--;
		}
  }
})

