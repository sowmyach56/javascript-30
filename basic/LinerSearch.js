function linearSearch(array,target)
{
	for (var i=0;i<array.length;i++)                         
	{ 
		if(array[i]===target)                                     
		{
			return "The target can be found at array index: "+ i;   
		}
	}
	return -1;                                                 
}
linearSearch([1,4,6,12,18,22,27,33,35,38,40,44,49,50,52], 52);