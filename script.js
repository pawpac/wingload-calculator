

const wingloading = document.querySelector('.wingloading');
const canopyDigit = document.querySelector('.canopy-digits');
const sizeSlider = document.querySelector('.size-slider');
const jumperDigit = document.querySelector('.jumper-digits');
const weightSlider = document.querySelector('.weight-slider');

canopyDigit.textContent = sizeSlider.value;

sizeSlider.oninput = function(){
  canopyDigit.textContent = sizeSlider.value;
  wingloading.textContent = 'Wingloading: ' + (sizeSlider.value / weightSlider.value).toFixed(2);
}

jumperDigit.textContent = weightSlider.value;

weightSlider.oninput = function(){
  jumperDigit.textContent = weightSlider.value;
  wingloading.textContent = 'Wingloading: ' + (sizeSlider.value / weightSlider.value).toFixed(2);
}




