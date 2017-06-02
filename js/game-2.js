import addTemplate from './addTemplate';
import blockGame3 from './game-3'
import greetingScreen from './greeting';
import blockHeader from './header'
import blockFooter from './footer'
import {initialState} from './data'
import {levels} from './data'
import state from './state'


const blockGame2 = `
 ${blockHeader(initialState)}
  <div class="game">
    <p class="game__task">${levels.level2.description}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src=${levels.level2.image.image1} alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${state}
  </div>
  ${blockFooter}
`;

let screenTemplate = {
  template: blockGame2,
  afterLoaded() {
    const question1 = document.getElementsByName(`question1`);
    document.querySelector(`.game__content`).onchange = function () {
      if (question1[0].checked || question1[1].checked) {
        addTemplate(blockGame3);
      }
    };
    document.querySelector(`.header__back`).onclick = () => addTemplate(greetingScreen);
  }
};

export default screenTemplate;
