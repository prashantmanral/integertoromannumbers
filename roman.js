function convertToRoman(num){
	let int = [1000, 900, 500, 400,
            100, 90, 50, 40,
            10, 9, 5, 4,
            1];
	let romans = ["M", "CM", "D", "CD",
            "C", "XC", "L", "XL",
            "X", "IX", "V", "IV",
            "I"];
            if (num>0) {
            for (let i=0; i <=12; i++) {
            	while (int[i] <= num) {
            		num = num - int[i];
            		return romans[i]+convertToRoman(num);          	
            }

}
}
else{return ""}
}
console.log(convertToRoman(36));