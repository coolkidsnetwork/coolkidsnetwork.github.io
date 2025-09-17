

function makeObjectsResponsive() {
  const objs = document.querySelectorAll('object, embed, iframe');
  objs.forEach(obj => {
    obj.style.width = '100%';
    obj.style.height = 'auto';
  });
}

window.addEventListener('load', makeObjectsResponsive);
window.addEventListener('resize', makeObjectsResponsive);
