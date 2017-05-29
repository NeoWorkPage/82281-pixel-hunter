//Собираем все экраны
const screen = document.getElementsByTagName(`template`);

//Все полученные экраны добавляем в массив
const screenNumberArray = [].slice.call(screen);

const main = document.getElementById('wrapper');

//функция обрабатывает полученное число и вставляет нужный экран
function pushNumberScreen(a) {
  main.innerHTML = '';
  main.appendChild(screenNumberArray[a - 1].content.cloneNode(true));
}

let numberScreen = 0;

//Функция по нажатию клавиш Alt + (right,left)
document.onkeydown = function (e) {
  if (e.altKey && e.keyCode === 37){
    numberScreen -- ;
  }else if(e.altKey && e.keyCode === 39){
    numberScreen ++ ;
  }
  if (numberScreen <= 0){
    numberScreen = 0;
    return;
  }else if (numberScreen >= 7){
    numberScreen = 6;
    return;
  }
  pushNumberScreen(numberScreen);
};
