const projects = [
  {
    // name: 'Multi-Post Stories Gain+Glory',
    name: 'Project one',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    // name: 'Multi-Post Stories Gain+Glory',
    name: 'Project two',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    // name: 'Multi-Post Stories Gain+Glory',
    name: 'Project three',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    // name: 'Multi-Post Stories Gain+Glory',
    name: 'Project four',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    // name: 'Multi-Post Stories Gain+Glory',
    name: 'Project five',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    // name: 'Multi-Post Stories Gain+Glory',
    name: 'Project six',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },

];

for(let i = 0; i < projects.length; i++) {
  let recentWorks = document.querySelector('.recent-works');
  let recentWork = document.createElement('div');
  recentWork.className = 'recent-work';
  let multiPost = document.createElement('div');
  multiPost.className = 'multi-post';
  let multiHeader = document.createElement('h3');
  multiHeader.className = 'multi-post-header';
  let textHeader = document.createTextNode(`${projects[i]['name']}`);
  multiHeader.appendChild(textHeader);
  multiPost.appendChild(multiHeader);
  let multiUl = document.createElement('ul');
  multiUl.className = 'multi-post-skills';
  let multiLi1 = document.createElement('li');
  multiLi1.className = 'multi-post-skill';
  let multiLi1Text = document.createTextNode('Ruby on Rails');
  multiLi1.appendChild(multiLi1Text);
  multiUl.appendChild(multiLi1);
  let multiLi2 = document.createElement('li');
  multiLi2.className = 'multi-post-skill';
  let multiLi2Text = document.createTextNode('css');
  multiLi2.appendChild(multiLi2Text);
  multiUl.appendChild(multiLi2);
  let multiLi3 = document.createElement('li');
  multiLi3.className = 'multi-post-skill';
  let multiLi3Text = document.createTextNode('JavScript');
  multiLi3.appendChild(multiLi3Text);
  multiUl.appendChild(multiLi3);
  let multiLi4 = document.createElement('li');
  multiLi4.className = 'multi-post-skill';
  let multiLi4Text = document.createTextNode('html');
  multiLi4.appendChild(multiLi4Text);
  multiUl.appendChild(multiLi4);
  multiPost.appendChild(multiUl);
  let multiButton = document.createElement('button');
  multiButton.className = 'work-button';
  let multiButtonText = document.createTextNode('See Project');
  multiButton.appendChild(multiButtonText);
  multiPost.appendChild(multiButton);
  recentWork.appendChild(multiPost);
  recentWorks.appendChild(recentWork);
}

function showWork() {
  let wsection = document.createElement('div');
  wsection.id = 'total-detail-works';
  let wdiv = document.createElement('div');
  wdiv.className = 'detail-mobile';
  let wimg = document.createElement('img');
  wimg.alt = 'project image';
  wimg.className = 'main-image-mobile';
  wimg.src = './assets/images/mobile-detail-image.png';
  wdiv.appendChild(wimg);
  let wh2 = document.createElement('h2');
  wh2.className = 'detail-title-mobile';
  let wh2_text = document.createTextNode('Keeping track of hundreds of components');
  wh2.appendChild(wh2_text);
  wdiv.appendChild(wh2);
  let wul = document.createElement('ul');
  wul.className = 'toolkit';
  let wli = document.createElement('li');
  wli.className = 'toolkit-list';
  let wli_text = document.createTextNode('Ruby on rails');
  wli.appendChild(wli_text);
  wul.appendChild(wli);
  let wli1 = document.createElement('li');
  wli1.className = 'toolkit-list';
  let wli1_text = document.createTextNode('css');
  wli1.appendChild(wli1_text);
  wul.appendChild(wli1);
  let wli2 = document.createElement('li');
  wli2.className = 'toolkit-list';
  let wli2_text = document.createTextNode('JavaScript');
  wli2.appendChild(wli2_text);
  wul.appendChild(wli2);
  wdiv.appendChild(wul);
  let wp = document.createElement('p');
  wp.className = 'detail-description';
  let wp_text = document.createTextNode('Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s\,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsumhas been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea');
  wp.appendChild(wp_text);
  wdiv.appendChild(wp);
  let wdiv1 = document.createElement('div');
  wdiv1.className = 'detail-main-button-mobile';
  let wbutton = document.createElement('button');
  wbutton.className = 'detail-buttons-mobile live';
  let wbutton_text = document.createTextNode('See live');
  wbutton.appendChild(wbutton_text);
  let wimg1 = document.createElement('img');
  wimg1.src = './assets/images/live_icon.svg';
  wbutton.appendChild(wimg1);
  wdiv1.appendChild(wbutton);
  let wbutton1 = document.createElement('button');
  wbutton1.className = 'detail-buttons-mobile source';
  let wbutton1_text = document.createTextNode('See Source');
  wbutton1.appendChild(wbutton1_text);
  let wimg2 = document.createElement('img');
  wimg2.src = './assets/images/source_icon.svg';
  wbutton1.appendChild(wimg2);
  wdiv1.appendChild(wbutton1);
  wdiv.appendChild(wdiv1);
  wsection.appendChild(wdiv);
  let wdiv2 = document.createElement('div');
  wdiv2.className = 'detail-desktop';
  let wimg3 = document.createElement('img');
  wimg3.id = 'detail-desktop-close-button';
  wimg3.alt = 'close';
  wimg3.src = './assets/images/close_icon_popup.svg';
  wdiv2.appendChild(wimg3);
  let wimg4 = document.createElement('img');
  wimg4.className = 'main-image-desktop';
  wimg4.alt = 'project image';
  wimg4.src = './assets/images/desktop-detail-image.png';
  wdiv2.appendChild(wimg4);
  let wdiv3 = document.createElement('div');
  wdiv3.className = 'detail-header-desktop';
  let wh22 = document.createElement('h2');
  wh22.className = 'detail-title-desktop';
  let wh22_text = document.createTextNode('Keeping track of hundreds of components');
  wh22.appendChild(wh22_text);
  wdiv3.appendChild(wh22);
  let wdiv4 = document.createElement('div');
  wdiv4.className = 'detail-main-button-desktop';
  let wbutton2 = document.createElement('button');
  wbutton2.className = 'detail-buttons-desktop live';
  let wbutton2_text = document.createTextNode('See live');
  wbutton2.appendChild(wbutton2_text);
  let wimg5 = document.createElement('img');
  wimg5.src = './assets/images/live_icon.svg';
  wbutton2.appendChild(wimg5);
  wdiv4.appendChild(wbutton2);
  let wbutton3 = document.createElement('button');
  wbutton3.className = 'detail-buttons-desktop source';
  let wbutton3_text = document.createTextNode('See Source');
  wbutton3.appendChild(wbutton3_text);
  let wimg6 = document.createElement('img');
  wimg6.src = './assets/images/source_icon.svg';
  wbutton3.appendChild(wimg6);
  wdiv4.appendChild(wbutton3);
  wdiv3.appendChild(wdiv4);
  wdiv2.appendChild(wdiv3);
  let wul1 = document.createElement('ul');
  wul1.className = 'toolkit';
  let wli3 = document.createElement('li');
  wli3.className = 'toolkit-list';
  let wli3_text = document.createTextNode('Codekit');
  wli3.appendChild(wli3_text);
  wul1.appendChild(wli3);
  let wli4 = document.createElement('li');
  wli4.className = 'toolkit-list';
  let wli4_text = document.createTextNode('GitHub');
  wli4.appendChild(wli4_text);
  wul1.appendChild(wli4);
  let wli5 = document.createElement('li');
  wli5.className = 'toolkit-list';
  let wli5_text = document.createTextNode('JavaScript');
  wli5.appendChild(wli5_text);
  wul1.appendChild(wli5);
  let wli6 = document.createElement('li');
  wli6.className = 'toolkit-list';
  let wli6_text = document.createTextNode('Bootstrap');
  wli6.appendChild(wli6_text);
  wul1.appendChild(wli6);
  let wli7 = document.createElement('li');
  wli7.className = 'toolkit-list';
  let wli7_text = document.createTextNode('Terminal');
  wli7.appendChild(wli7_text);
  wul1.appendChild(wli7);
  let wli8 = document.createElement('li');
  wli8.className = 'toolkit-list';
  let wli8_text = document.createTextNode('Codepen');
  wli8.appendChild(wli8_text);
  wul1.appendChild(wli8);
  wdiv2.appendChild(wul1);
  let wp1 = document.createElement('p');
  wp1.className = 'detail-description';
  let wp1_text = document.createTextNode('Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s\,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsumhas been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea');
  wp1.appendChild(wp1_text);
  wdiv2.appendChild(wp1);
  wsection.appendChild(wdiv2);
  let wbody = document.querySelector('body');
  wbody.appendChild(wsection);
  wbody.style.background = '#c1c7d0';
  document.querySelector('.main-portfolio').style.display = 'none';

  document.querySelector('.main-image-mobile').addEventListener('click', hideWork);
  document.querySelector('#detail-desktop-close-button').addEventListener('click', hideWork);

  function hideWork() {
    wbody.removeChild(wsection);
    wbody.style.background = '#fff';
    document.querySelector('.main-portfolio').style.display = 'block';
  }

}
let workLinks = Array.from(document.querySelectorAll('.work-button'));
workLinks.forEach(function(workLink) {
  workLink.addEventListener('click', showWork)
});
