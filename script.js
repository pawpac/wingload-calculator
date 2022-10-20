

const wingloading = document.querySelector('.wingloading');
const canopyDigit = document.querySelector('.canopy-digits');
const sizeSlider = document.querySelector('.size-slider');
const jumperDigit = document.querySelector('.jumper-digits');
const weightSlider = document.querySelector('.weight-slider');

const canopy = document.querySelector('.canopy');
const jumper = document.querySelector('.jumper');
const lines = document.querySelector('.lines');

canopyDigit.textContent = sizeSlider.value;

sizeSlider.oninput = function(){
  canopyDigit.textContent = sizeSlider.value;
  wingloading.textContent = 'Wingloading: ' + (sizeSlider.value / weightSlider.value).toFixed(2);

  canopy.style.width = 70 + ((sizeSlider.value -70) / 3) + '%';
}

jumperDigit.textContent = weightSlider.value;

weightSlider.oninput = function(){
  jumperDigit.textContent = weightSlider.value;
  wingloading.textContent = 'Wingloading: ' + (sizeSlider.value / weightSlider.value).toFixed(2);

  jumper.style.width = 70 + ((weightSlider.value -70) / 3) + '%';
  lines.style.width = 70 + ((weightSlider.value -70) / 3) + '%';
}




