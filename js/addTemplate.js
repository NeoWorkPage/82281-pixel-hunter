export default function addTemplate(e) {
  const mainBlock = document.getElementById(`wrapper`);
  mainBlock.innerHTML = e.template;
  e.afterLoaded();
}

