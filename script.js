function calculateMinCost() {
  //your code here
	const inputEle = document.getElementById('rope-lengths');
	const resultEle = document.getElementById('result');

	const ropeLengths = inputEle.value.split(',')
        .map(length => parseInt(length.trim()));
	
	let totalCost = 0;

    // Combine ropes until there is only one rope left
	while (ropeLengths.length > 1) {
	    ropeLengths.sort((a, b) => a - b); // Sort the array in ascending order
	    const combinedLength = ropeLengths[0] + ropeLengths[1];
	    totalCost += combinedLength;
	    ropeLengths.splice(0, 2, combinedLength); // Remove the first two elements and insert the combined length
	}
	
	resultEle.innerText = totalCost;

	// // n
	// while(n > 1){
	  
	//   ropeLengths.sort((a,b) => a-b)
	//   const sum = ropeLengths[1] + ropeLengths[0]
	//   ropeLengths[1] = sum
	//   ropeLengths.shift()
	//   result.push(sum)
	//   n--;
	// }
	
	// let ans = 0; 
	// result.forEach((element) => {
	//   ans+=element
	// })

	// resultEle.innerText = ans;
  
}  
