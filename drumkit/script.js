function playSound(e) {
  var audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
  var key = document.querySelector(`div[data]`)
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

var keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
