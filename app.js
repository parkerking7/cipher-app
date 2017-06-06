var app = angular.module("cipherApp", []);

app.controller("mainCtrl", ["$scope", function ($scope, hitService) {

	$scope.cipher = function () {
		var cipher = $scope.textBox;
		$scope.cipheringText(cipher);
		$scope.textBox = '';

	}
	$scope.cipheringText = function (str) {
		var newStr = []
		for (var i = 0; i < str.length; i++) {
			newStr.push($scope.switchCipher(str[i]));
		}
		newStr = newStr.join('');
		$scope.cipheredText = newStr;
	}

	$scope.switchCipher = function (letter) {
		if(letter === " "){

			return letter
		}
		letter = letter.toLowerCase();
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a']
		for(var i = 0; i < alphabet.length; i++){
			if(letter === alphabet[i]){
				 return alphabet[i + 1]
			}
		}
		
	}
	
	$scope.decipher = function () {
		var decipher = $scope.textBox;
		$scope.decipheringText(decipher);
		$scope.textBox = '';

	}
	$scope.decipheringText = function (str) {
		var newStr = []
		for (var i = 0; i < str.length; i++) {
			newStr.push($scope.switchDecipher(str[i]));
		}
		newStr = newStr.join('');
		$scope.decipheredText = newStr;
	}
	
	$scope.switchDecipher = function (letter) {
		if(letter === " "){
			return letter
		}

		letter = letter.toLowerCase();
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a']
		for(var i = 0; i < alphabet.length; i++){
			if(letter === alphabet[i]){
				 return alphabet[i - 1]
			}
		}
		
	}

}])
