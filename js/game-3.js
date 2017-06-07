import addTemplate from './addTemplate';
import blockStats from './stats';
import greetingScreen from './greeting';
import blockFooter from './footer';
import blockHeader from './header';
import {initialState} from './data';
import {levelsAll} from './data';
import state from './state';


const fromHtml = ([image1, image2, image3]) =>{
  return `
    <form class="game__content  game__content--triple">
        <div class="game__option">
            <img src=${image1} alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
            <img src=${image2} alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
            <img src=${image3} alt="Option 1" width="304" height="455">
        </div>
    </form>`;
};

const blockGame3 = `
 ${blockHeader(initialState)}
  <div class="game">
    <p class="game__task">${levelsAll[2].description}</p>
    ${fromHtml(levelsAll[2].question)}
    <div class="stats">
      ${state(initialState.stats)}
    </div>
  </div>
  ${blockFooter}
`;


let screenTemplate = {
  template: blockGame3,
  afterLoaded() {
    const option = document.querySelectorAll(`.game__option`);
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = () => addTemplate(blockStats);
    }
    document.querySelector(`.header__back`).onclick = () => addTemplate(greetingScreen);
  }
};

export default screenTemplate;
