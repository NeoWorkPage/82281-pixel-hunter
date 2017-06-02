import addTemplate from './addTemplate'
import blockStats from  './stats'
import greetingScreen from './greeting';
import blockFooter from './footer'
import blockHeader from './header'
import {initialState} from './data'
import {levels} from './data'
import state from './state'

const blockGame3 = `
 ${blockHeader(initialState)}
  <div class="game">
    <p class="game__task">${levels.level3.description}</p>
    <form class="game__content  game__content--triple">
     <div class="game__option">
        <img src=${levels.level3.image.image1} alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src=${levels.level3.image.image2} alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src=${levels.level3.image.image3} alt="Option 1" width="304" height="455">
      </div>
    </form>
    ${state}
  </div>
  ${blockFooter}
`;


let screenTemplate = {
  template: blockGame3,
  afterLoaded(){
    const option = document.querySelectorAll(`.game__option`);
    for ( let i = 0; i < option.length; i++){
      option[i].onclick = () => addTemplate(blockStats);
    }
    document.querySelector(`.header__back`).onclick = () => addTemplate(greetingScreen);
  }
};

export default screenTemplate;
