function playsound(e) {
   const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if (!audio) return;
   audio.currentTime = 0;
   audio.play();
   key.classList.add('playing');
}


function removeTransition(e) {
   if (e.propertyName !== 'transform') return;
   console.log(e.propertyName)
   this.classList.remove('playing');
}

document.querySelectorAll('.key').forEach(
   key =>
      key.addEventListener('transitionend', removeTransition)
)

window.addEventListener('keydown', playsound);
