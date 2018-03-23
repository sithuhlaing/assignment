var arg = process.argv.slice(2)[0];
arg = arg%2 == 0 ? arg-1 : arg;
var print = "";
for(var i = 0; i < arg; i++){
	for(var j = 0; j < arg; j++){
		if(i == j || i+j == arg-1){
			var c = i%2 == 0 ? "*" : "+";
			print += c;
		} else {
			print += " ";
		}
	}
	print += "\n";
}
console.log(print);