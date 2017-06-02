import addTemplate from './addTemplate';
import greetingScreen from './greeting';
import blockFooter from './footer'


const blockIntro = `
<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  ${blockFooter}
`;



let screenTemplate = {
  template: blockIntro,
  afterLoaded() {
    document.querySelector(`.intro__asterisk`).onclick = () => addTemplate(greetingScreen);
  }
};
export default screenTemplate;
