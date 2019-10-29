var elem = document.querySelector('.subheader_summ_range');
var init = new Powerange(elem, { min: 1000, max: 12000, start: 1000,hideRange: true, step: 1000, klass: 'subheader_summ_range' });

elem.addEventListener('change', function(event){
  console.log(elem.value)
});


var elem = document.querySelector('.subheader_overtime_range');
var init = new Powerange(elem, { min: 1, max: 30, start: 12,hideRange: true, step: 1,klass: "subheader_overtime_range" });

elem.addEventListener('change', function(event){
  console.log(elem.value)
});


window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
})
