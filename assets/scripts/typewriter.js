const sentenceShort = '..with expertise in full-stack development using Ruby on Rails, JavaScript, React, and Redux. I collaborate with remote teams using GitHub, gitflow, and daily standups. I also mentor junior developers, improve code quality, and share motivation tips.';

let i = 0;
const speed = 40;
function typeWriter() {
  if (i < sentenceShort.length) {
    document.getElementById('typewriter-mobile').innerHTML += sentenceShort.charAt(i);
    i += 1;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();