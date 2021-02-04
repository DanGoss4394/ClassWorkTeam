// Array

export function rhyuFindSum(arr) {
	const sum = arr.reduce((total, num) => {
		return total + num
	});
	return sum
}