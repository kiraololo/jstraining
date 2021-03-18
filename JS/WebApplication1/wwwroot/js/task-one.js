//Обработка событий
function Sort(inputId, outputId) {
	let arrayInput = document.getElementById(inputId);
	let outputContainer = document.getElementById(outputId);
	if (outputContainer) {
		outputContainer.innerHTML = '';
	}
	if (arrayInput && arrayInput.value) {
		let inputArray = JSON.parse(arrayInput.value);
		if (outputContainer && inputArray) {
			outputContainer.innerHTML = sortedUniq(inputArray);
		}
	}
}

function Diff(inputAId, inputBId, outputId) {
	let arrayAInput = document.getElementById(inputAId);
	let arrayBInput = document.getElementById(inputBId);
	let outputContainer = document.getElementById(outputId);
	if (outputContainer) {
		outputContainer.innerHTML = '';
	}
	if (arrayAInput && arrayAInput.value && arrayBInput && arrayBInput.value) {
		let inputAArray = JSON.parse(arrayAInput.value);
		let inputBArray = JSON.parse(arrayBInput.value);
		if (outputContainer && inputAArray && inputBArray) {
			outputContainer.innerHTML = difference(inputAArray, inputBArray);
		}
	}
}

function Equal(inputAId, inputBId, outputId) {
	let objAInput = document.getElementById(inputAId);
	let objBInput = document.getElementById(inputBId);
	let outputContainer = document.getElementById(outputId);
	if (outputContainer) {
		outputContainer.innerHTML = '';
	}
	if (objAInput && objAInput.value && objBInput && objBInput.value) {
		let inputAObj = JSON.parse(objAInput.value);
		let inputBObj = JSON.parse(objBInput.value);
		if (outputContainer && inputAObj && inputBObj) {
			outputContainer.innerHTML = isEqual(inputAObj, inputBObj);
		}
	}
}

// Реализация задач
function sortedUniq(arr) {
	let len = arr.length;
	if (len == 0 || len == 1) {
		return arr;
	}
	let res = [];
	let sorted = bubbleSort(arr);
	for (let i = 0; i < len - 1; i++) {
		if (sorted[i] != sorted[i + 1]) {
			res.push(sorted[i]);
		}
	}
	res.push(sorted[len - 1]);
	return res;
}

function bubbleSort(arr) {
	let len = arr.length;
	for (let i = len - 1; i >= 0; i--) {
		for (let j = 1; j <= i; j++) {
			if (arr[j - 1] > arr[j]) {
				let temp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

function difference(arrA, arrB) {
	let res = [];
	for (let i = 0; i < arrA.length; i++) {
		let exist = false;
		for (let j = 0; j < arrB.length; j++) {
			if (arrA[i] == arrB[j]) {
				exist = true;
				break;
			}
		}
		if (!exist) {
			res.push(arrA[i]);
		}
	}
	return res;
}

function isEqual(objA, objB) {
	if (objA === objB) {
		return true;
	}
	if ((typeof objA == "object" && objA != null) && (typeof objB == "object" && objB != null)) {
		if (Object.keys(objA).length != Object.keys(objB).length) {
			return false;
		}
		for (let prop in objA) {
			if (objB.hasOwnProperty(prop)) {
				if (!isEqual(objA[prop], objB[prop])) {
					return false;
				}
			}
			else {
				return false;
			}
		}
		return true;
	}
	return false;
}