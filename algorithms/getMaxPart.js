function max(el1, el2){ return el2 > el1 ? el2 : el1 };

function getMaxPart(arr, s = 0, S = 0){
	if(arr.length === 0) 
		return {s, S};
    
	let {s2, S2} = getMaxPart(arr.slice(0, -1), s, S);
	s2 = max(0, s2 + arr[arr.length - 1]);
	S2 = max(s2, S2);  
	return {s2, S2};
}

module.exports = getMaxPart;
