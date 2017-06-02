export default function addHeader(header) {
  const container = document.createElement(`div`);
  container.innerHTML = header;
  return container;
};

