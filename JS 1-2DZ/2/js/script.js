var arrNames = [];

for (var i = 0; i <= 4; i++) {
  var name = prompt("Введите имя", '');
  arrNames[i] = name;
}

console.log('Имена',arrNames);

var userName = prompt('Ввдетие имя пользователя:', '');

console.log('Имя: ', userName);

for (var i = 0; i < arrNames.length ; i++) {
  if (userName == arrNames[i]) {
  		var currentUser = userName;
  	}
}

if (currentUser == userName) {
  alert((userName) + ", вы успешно вошли.");
} else {
  alert("Ошибка 123: Совпадений не найдено.");
}
