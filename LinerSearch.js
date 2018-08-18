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
