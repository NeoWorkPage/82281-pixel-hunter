import addTemplate from './addTemplate'
import blockStats from  './stats'
import greetingScreen from './greeting';
import blockFooter from './footer'
import blockHeader from './header'
import {initialState} from './data'
import {level3} from './data'


const blockGame3 = `
 ${blockHeader(initialState)}
  <div class="game">
    <p class="game__task">${level3.description}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
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
