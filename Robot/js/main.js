var elem = document.querySelector('.subheader_calc_range_summ');
var init = new Powerange(elem, { min: 1000, max: 12000, start: 1000,hideRange: true, step: 1000, klass: 'subheader_calc_range_summ' });

elem.addEventListener('change', function(event){
  console.log(elem.value)
});


var elem = document.querySelector('.subheader_calc_range_time');
var init = new Powerange(elem, { min: 1, max: 30, start: 12,hideRange: true, step: 1,klass: "subheader_calc_range_time" });

elem.addEventListener('change', function(event){
  console.log(elem.value)
});
