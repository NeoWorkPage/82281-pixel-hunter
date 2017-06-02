import addTemplate from './addTemplate';
import blockGame2 from './game-2'
import greetingScreen from './greeting';
import blockHeader from './header'
import blockFooter from './footer'
import {initialState} from './data'
import {levels} from './data'
import state from './state'

const blockGame1 = `
    ${blockHeader(initialState)}
  <div class="game">
    <p class="game__task">${levels.level1.description}</p>
    <form class="game__content">
      <div class="game__option">
        <img src=${levels.level1.image.image1}  alt="Option 1" width="468" height="458">
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
        <img src=${levels.level1.image.image2} alt="Option 2" width="468" height="458">
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
    ${state}
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
