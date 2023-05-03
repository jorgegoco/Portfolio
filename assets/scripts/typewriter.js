const sentenceShort = '..with expertise in full-stack development using Ruby on Rails, JavaScript, React, and Redux. I collaborate with remote teams using GitHub, Gitflow, and daily standups. I also mentor junior developers, improve code quality, and share motivation tips.';
const sentenceLong = '..with expertise in full-stack development using Ruby on Rails, JavaScript, React, and Redux. I collaborate with remote teams using GitHub, Gitflow, and daily standups. I also mentor junior developers, improve code quality, and share motivation tips. I am a lifelong learner, and I am always looking for new challenges.';

let i = 0;
const speed = 40;
function typeWriterMobile() {
  if (i < sentenceShort.length) {
    document.getElementById('typewriter-mobile').innerHTML += sentenceShort.charAt(i);
    i += 1;
    setTimeout(typeWriterMobile, speed);
  }
}
typeWriterMobile();

let j = 0;
function typeWriterDesktop() {
  if (j < sentenceLong.length) {
    document.getElementById('typewriter-desktop').innerHTML += sentenceLong.charAt(j);
    j += 1;
    setTimeout(typeWriterDesktop, speed);
  }
}
typeWriterDesktop();