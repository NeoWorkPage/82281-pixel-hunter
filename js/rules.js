import addTemplate from './addTemplate';
import blockGame1 from './game-1';
import greetingScreen from './greeting';
import blockFooter from './footer'

const blockRules = `
<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя" >
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${blockFooter}
`;




let screenTemplate = {
  template: blockRules,
  afterLoaded() {
    const rulesInput = document.querySelector(`.rules__input`);
    const rulesButton = document.querySelector(`.rules__button`);

    rulesInput.oninput = function() {
      if( this.value.length !== 0 ){
        rulesButton.removeAttribute(`disabled`);
      }else{
        rulesButton.setAttribute(`disabled`, `disabled`);
      }
    };

    document.querySelector(`.rules__button`).onclick = () => addTemplate(blockGame1);

    document.querySelector(`.header__back`).onclick = () => addTemplate(greetingScreen);
  }
};

export default screenTemplate;
