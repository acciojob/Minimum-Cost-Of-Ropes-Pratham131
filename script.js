function calculateMinCost() {
  //your code here
	const inputEle = document.getElementById('rope-lengths');
	const resultEle = document.getElementById('result');
	
	const ropeLengths = inputEle.value.split(',')
        .map(length => parseInt(length.trim()));

	let result = [];
	let n = ropeLengths.length;
	
	
	// n
	while(n > 1){
	  
	  ropeLengths.sort((a,b) => a-b)
	  const sum = ropeLengths[1] + ropeLengths[0]
	  ropeLengths[1] = sum
	  ropeLengths.shift()
	  result.push(sum)
	  n--;
	}
	
	let ans = 0; 
	result.forEach((element) => {
	  ans+=element
	})

	resultEle.innerText = `Minimum cost of connecting ropes: ${ans}`;
  
}  
