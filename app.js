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

var requestSourceData = function () {
  console.log(this.sourceData);
  return this.sourceData;
}

