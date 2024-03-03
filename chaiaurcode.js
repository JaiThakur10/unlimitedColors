const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId

const startColorChange = function () {
  if(!intervalId){
    intervalId = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};

const stopColorChange = function () {
  clearInterval(intervalId)
  intervalId = null
  document.body.style.backgroundColor = '#212121'
};

start.addEventListener('click', startColorChange);
stop.addEventListener('click', stopColorChange);

