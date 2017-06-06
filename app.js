var app = angular.module("cipherApp", []);

app.controller("mainCtrl", ["$scope", function ($scope, hitService) {

	if($scope.textBox === undefined){
		$scope.text = true;
	} 
	if($scope.textBox !== undefined){
		$scope.text = false;
	} 
	
	$scope.cipher = function () {
		var amount = parseInt($scope.selected);
		var cipher = $scope.textBox;
		$scope.cipheringText(cipher,amount);
		$scope.textBox = '';

	}
	$scope.cipheringText = function (str, amount) {
		var newStr = []
		for (var i = 0; i < str.length; i++) {
			newStr.push($scope.switchCipher(str[i], amount));
		}
		newStr = newStr.join('');
		$scope.cipheredText = newStr;
	}

	$scope.switchCipher = function (letter, amount) {

		if(letter === " "){
			return letter
		}
		letter = letter.toLowerCase();
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		for(var i = 0; i < alphabet.length; i++){
			if(letter === alphabet[i]){
				 return alphabet[i + amount]
			}
		}
	}
	
	$scope.decipher = function () {
		var decipher = $scope.textBox;
		var amount = parseInt($scope.selected);
		$scope.decipheringText(decipher,amount);
		$scope.textBox = '';

	}
	$scope.decipheringText = function (str,amount) {
		var newStr = []
		for (var i = 0; i < str.length; i++) {
			newStr.push($scope.switchDecipher(str[i],amount));
		}
		newStr = newStr.join('');
		$scope.decipheredText = newStr;
	}
	
	$scope.switchDecipher = function (letter,amount) {
		if(letter === " "){
			return letter
		}
		letter = letter.toLowerCase();
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		for(var i = 0; i < alphabet.length; i++){
			if(letter === alphabet[i]){
				 return alphabet[i - amount]
			}
		}
		
	}

}])
