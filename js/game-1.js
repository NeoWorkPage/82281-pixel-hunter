import addTemplate from './addTemplate';
import blockGame2 from './game-2'
import greetingScreen from './greeting';
import blockHeader from './header'
import blockFooter from './footer'
import {initialState} from './data'
import {levels} from './data'

const blockGame1 = `
    ${blockHeader(initialState)}
  <div class="game">
    <p class="game__task">${levels[level.description}]</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>
  ${blockFooter}
`;

let gameOneScreen = {
  template: blockGame1,
  afterLoaded() {
    const question1 = document.getElementsByName(`question1`);
    const question2 = document.getElementsByName(`question2`);
    document.querySelector(`.game__content`).onchange = function () {
      for (let i = 0; i < question1.length; i++) {
        for (let j = 0; j < question2.length; j++) {
          if (question1[i].checked && question2[j].checked) {
            addTemplate(blockGame2);
          }
        }
      }
    };
    document.querySelector(`.header__back`).onclick = () => addTemplate(greetingScreen);
  }
};

export default gameOneScreen;
