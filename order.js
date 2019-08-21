function order(v) {
var max = v.length;
var i, j;
for (i = 0; i < max -1; i++) {
	
	for (j = i + 1; j < max; j++){
		if (v[i] > v[j]) {
			aux = v[i]
			v[i] = v[j];
			v[j] = aux;
		}
	}
}
}


