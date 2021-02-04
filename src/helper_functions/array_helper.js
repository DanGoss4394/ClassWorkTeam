// Array

export function rhyuFindSum(arr) {
  const sum = arr.reduce((total, num) => {
    return total + num;
  });
  return sum;
}

export function rhyuUpperCase(str) {
	let arr = str.split(' ')
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
	}
	let newStr = arr.join(' ');
	return newStr;
}