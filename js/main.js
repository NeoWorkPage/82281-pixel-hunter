 let arr = [];
 document.querySelectorAll('template').forEach(function (elem, i) {
 	arr.push(elem);
 });
console.log(arr)


function ScreenReplacement(){

	let screenNumber = prompt(`Какой экран показать 1-6`,'')

	if (!Element.prototype.remove) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

	if(screenNumber == '1'){
		document.querySelectorAll('.central').remove();
		console.log(arr[0])
	}
}
ScreenReplacement()