var sh = "#", sp = " ", i = 1;

while (i <= 8){
	if ( i % 2 === 0){
		console.log(sp + sh + sp + sh + sp + sh + sp + sh);
	} else{
		console.log(sh + sp + sh + sp + sh + sp + sh + sp);
	}
	i++;
}
