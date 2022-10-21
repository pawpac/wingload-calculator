

const wingloading = document.querySelector('.wingloading');
const canopyDigit = document.querySelector('.canopy-digits');
const sizeSlider = document.querySelector('.size-slider');
const jumperDigit = document.querySelector('.jumper-digits');
const weightSlider = document.querySelector('.weight-slider');

const canopy = document.querySelector('.canopy');
const jumper = document.querySelector('.jumper');
const lines = document.querySelector('.lines');

const leftLineRing = document.querySelector('.mid-left');
const rightLineRing = document.querySelector('.mid-right');

const rightWeight = document.querySelector('.right-weight-rotate');
const lefttWeight = document.querySelector('.left-weight-rotate');


canopyDigit.textContent = sizeSlider.value;

sizeSlider.oninput = function(){
  canopyDigit.textContent = sizeSlider.value;
  wingloading.textContent = 'Wingloading: ' + (sizeSlider.value / weightSlider.value).toFixed(2);

  canopy.style.width = 70 + ((sizeSlider.value -70) / 3) + '%';

  if (sizeSlider.value > 190) {
    leftLineRing.style.transform = 'rotate(' + ((-(sizeSlider.value - 190)) / 9) + 'deg)';
    rightLineRing.style.transform = 'rotate(' + (((sizeSlider.value - 190)) / 9) + 'deg)';
  } else {
    leftLineRing.style.transform = 'rotate(' + ((-(sizeSlider.value - 190)) / 7) + 'deg)';
    rightLineRing.style.transform = 'rotate(' + (((sizeSlider.value - 190)) / 7) + 'deg)';
  }

}

jumperDigit.textContent = weightSlider.value;

weightSlider.oninput = function(){
  jumperDigit.textContent = weightSlider.value;
  wingloading.textContent = 'Wingloading: ' + (sizeSlider.value / weightSlider.value).toFixed(2);

  jumper.style.width = 70 + ((weightSlider.value -70) / 3) + '%';
  lines.style.width = 70 + ((weightSlider.value -70) / 3) + '%';

  if (weightSlider.value > 190) {
    rightWeight.style.transform = 'rotate(' + ((-(weightSlider.value - 190)) / 20) + 'deg)';
    lefttWeight.style.transform = 'rotate(' + (((weightSlider.value - 190)) / 20) + 'deg)';
  } else {
    rightWeight.style.transform = 'rotate(' + ((-(weightSlider.value - 190)) / 30) + 'deg)';
    lefttWeight.style.transform = 'rotate(' + (((weightSlider.value - 190)) / 30) + 'deg)';
  }
}




