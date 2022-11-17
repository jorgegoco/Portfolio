const projects = [
  {
    name: 'Project one',
    img_desktop: './assets/images/nomads_desktop.png',
    img_mobile: './assets/images/nomads_desktop.png',
    description: 'This is a project description of Project one ............................. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/Capstone1/',
    liveSource: 'https://github.com/jorgegoco/Capstone1',
    techstack_desktop: ['CSS', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'HTML'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    name: 'Project two',
    img_desktop: './assets/images/desktop-detail-image.png',
    img_mobile: './assets/images/mobile-detail-image.png',
    description: 'This is a project description of Project two ............................. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/Portfolio/',
    liveSource: 'https://github.com/jorgegoco/Portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    name: 'Project three',
    img_desktop: './assets/images/desktop-detail-image.png',
    img_mobile: './assets/images/mobile-detail-image.png',
    description: 'This is a project description of Project three ........................... Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/Portfolio/',
    liveSource: 'https://github.com/jorgegoco/Portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    name: 'Project four',
    img_desktop: './assets/images/desktop-detail-image.png',
    img_mobile: './assets/images/mobile-detail-image.png',
    description: 'This is a project description of Project four ............................ Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/Portfolio/',
    liveSource: 'https://https://github.com/jorgegoco/Portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    name: 'Project five',
    img_desktop: './assets/images/desktop-detail-image.png',
    img_mobile: './assets/images/mobile-detail-image.png',
    description: 'This is a project description of Project five ............................ Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/Portfolio/',
    liveSource: 'https://github.com/jorgegoco/Portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    name: 'Project six',
    img_desktop: './assets/images/desktop-detail-image.png',
    img_mobile: './assets/images/mobile-detail-image.png',
    description: 'This is a project description of Project six ............................. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/Portfolio/',
    liveSource: 'https://github.com/jorgegoco/Portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },

];

for (let i = 0; i < projects.length; i += 1) {
  const recentWorks = document.querySelector('.recent-works');
  const recentWork = document.createElement('div');
  recentWork.className = 'recent-work';
  const multiPost = document.createElement('div');
  multiPost.className = 'multi-post';
  const multiHeader = document.createElement('h3');
  multiHeader.className = 'multi-post-header';
  const textHeader = document.createTextNode(`${projects[i].name}`);
  multiHeader.appendChild(textHeader);
  multiPost.appendChild(multiHeader);
  const multiUl = document.createElement('ul');
  multiUl.className = 'multi-post-skills';
  const multiLi1 = document.createElement('li');
  multiLi1.className = 'multi-post-skill';
  const multiLi1Text = document.createTextNode('Ruby on Rails');
  multiLi1.appendChild(multiLi1Text);
  multiUl.appendChild(multiLi1);
  const multiLi2 = document.createElement('li');
  multiLi2.className = 'multi-post-skill';
  const multiLi2Text = document.createTextNode('css');
  multiLi2.appendChild(multiLi2Text);
  multiUl.appendChild(multiLi2);
  const multiLi3 = document.createElement('li');
  multiLi3.className = 'multi-post-skill';
  const multiLi3Text = document.createTextNode('JavScript');
  multiLi3.appendChild(multiLi3Text);
  multiUl.appendChild(multiLi3);
  const multiLi4 = document.createElement('li');
  multiLi4.className = 'multi-post-skill';
  const multiLi4Text = document.createTextNode('html');
  multiLi4.appendChild(multiLi4Text);
  multiUl.appendChild(multiLi4);
  multiPost.appendChild(multiUl);
  const multiButton = document.createElement('button');
  multiButton.className = 'work-button';
  const multiButtonText = document.createTextNode('See Project');
  multiButton.appendChild(multiButtonText);
  multiPost.appendChild(multiButton);
  recentWork.appendChild(multiPost);
  recentWorks.appendChild(recentWork);
}

const workLinks = Array.from(document.querySelectorAll('.work-button'));
workLinks.forEach((workLink) => {
  workLink.addEventListener('click', () => {
    const buttonIndex = workLinks.indexOf(workLink);
    const mobileImage = projects[buttonIndex].img_mobile;
    const desktopImage = projects[buttonIndex].img_desktop;
    const projectDescription = projects[buttonIndex].description;
    const projectLive = projects[buttonIndex].liveLink;
    const projectSource = projects[buttonIndex].liveSource;
    const wsection = document.createElement('div');
    wsection.id = 'total-detail-works';
    const wdiv = document.createElement('div');
    wdiv.className = 'detail-mobile';
    const wimg = document.createElement('img');
    wimg.alt = 'project image';
    wimg.className = 'main-image-mobile';
    wimg.src = mobileImage;
    wdiv.appendChild(wimg);
    const wh2 = document.createElement('h2');
    wh2.className = 'detail-title-mobile';
    const wh2Text = document.createTextNode('Keeping track of hundreds of components');
    wh2.appendChild(wh2Text);
    wdiv.appendChild(wh2);
    const wul = document.createElement('ul');
    wul.className = 'toolkit';
    const wli = document.createElement('li');
    wli.className = 'toolkit-list';
    const wliText = document.createTextNode('Ruby on rails');
    wli.appendChild(wliText);
    wul.appendChild(wli);
    const wli1 = document.createElement('li');
    wli1.className = 'toolkit-list';
    const wli1Text = document.createTextNode('css');
    wli1.appendChild(wli1Text);
    wul.appendChild(wli1);
    const wli2 = document.createElement('li');
    wli2.className = 'toolkit-list';
    const wli2Text = document.createTextNode('JavaScript');
    wli2.appendChild(wli2Text);
    wul.appendChild(wli2);
    wdiv.appendChild(wul);
    const wp = document.createElement('p');
    wp.className = 'detail-description';
    const wpText = document.createTextNode(projectDescription);
    wp.appendChild(wpText);
    wdiv.appendChild(wp);
    const wdiv1 = document.createElement('div');
    wdiv1.className = 'detail-main-button-mobile';
    const wform = document.createElement('form');
    wform.action = projectLive;
    const wbutton = document.createElement('button');
    wbutton.className = 'detail-buttons-mobile live';
    const wbuttonText = document.createTextNode('See live');
    wbutton.appendChild(wbuttonText);
    const wimg1 = document.createElement('img');
    wimg1.src = './assets/images/live_icon.svg';
    wbutton.appendChild(wimg1);
    wform.appendChild(wbutton);
    wdiv1.appendChild(wform);
    const wform1 = document.createElement('form');
    wform1.action = projectSource;
    const wbutton1 = document.createElement('button');
    wbutton1.className = 'detail-buttons-mobile source';
    const wbutton1Text = document.createTextNode('See Source');
    wbutton1.appendChild(wbutton1Text);
    const wimg2 = document.createElement('img');
    wimg2.src = './assets/images/source_icon.svg';
    wbutton1.appendChild(wimg2);
    wform1.appendChild(wbutton1);
    wdiv1.appendChild(wform1);
    wdiv.appendChild(wdiv1);
    wsection.appendChild(wdiv);
    const wdiv2 = document.createElement('div');
    wdiv2.className = 'detail-desktop';
    const wimg3 = document.createElement('img');
    wimg3.id = 'detail-desktop-close-button';
    wimg3.alt = 'close';
    wimg3.src = './assets/images/close_icon_popup.svg';
    wdiv2.appendChild(wimg3);
    const wimg4 = document.createElement('img');
    wimg4.className = 'main-image-desktop';
    wimg4.alt = 'project image';
    wimg4.src = desktopImage;
    wdiv2.appendChild(wimg4);
    const wdiv3 = document.createElement('div');
    wdiv3.className = 'detail-header-desktop';
    const wh22 = document.createElement('h2');
    wh22.className = 'detail-title-desktop';
    const wh22Text = document.createTextNode('Keeping track of hundreds of components');
    wh22.appendChild(wh22Text);
    wdiv3.appendChild(wh22);
    const wdiv4 = document.createElement('div');
    wdiv4.className = 'detail-main-button-desktop';
    const wform2 = document.createElement('form');
    wform2.action = projectLive;
    const wbutton2 = document.createElement('button');
    wbutton2.className = 'detail-buttons-desktop live';
    const wbutton2Text = document.createTextNode('See live');
    wbutton2.appendChild(wbutton2Text);
    const wimg5 = document.createElement('img');
    wimg5.src = './assets/images/live_icon.svg';
    wbutton2.appendChild(wimg5);
    wform2.appendChild(wbutton2);
    wdiv4.appendChild(wform2);
    const wform3 = document.createElement('form');
    wform3.action = projectSource;
    const wbutton3 = document.createElement('button');
    wbutton3.className = 'detail-buttons-desktop source';
    const wbutton3Text = document.createTextNode('See Source');
    wbutton3.appendChild(wbutton3Text);
    const wimg6 = document.createElement('img');
    wimg6.src = './assets/images/source_icon.svg';
    wbutton3.appendChild(wimg6);
    wform3.appendChild(wbutton3);
    wdiv4.appendChild(wform3);
    wdiv3.appendChild(wdiv4);
    wdiv2.appendChild(wdiv3);
    const wul1 = document.createElement('ul');
    wul1.className = 'toolkit';
    const wli3 = document.createElement('li');
    wli3.className = 'toolkit-list';
    const wli3Text = document.createTextNode('Codekit');
    wli3.appendChild(wli3Text);
    wul1.appendChild(wli3);
    const wli4 = document.createElement('li');
    wli4.className = 'toolkit-list';
    const wli4Text = document.createTextNode('GitHub');
    wli4.appendChild(wli4Text);
    wul1.appendChild(wli4);
    const wli5 = document.createElement('li');
    wli5.className = 'toolkit-list';
    const wli5Text = document.createTextNode('JavaScript');
    wli5.appendChild(wli5Text);
    wul1.appendChild(wli5);
    const wli6 = document.createElement('li');
    wli6.className = 'toolkit-list';
    const wli6Text = document.createTextNode('Bootstrap');
    wli6.appendChild(wli6Text);
    wul1.appendChild(wli6);
    const wli7 = document.createElement('li');
    wli7.className = 'toolkit-list';
    const wli7Text = document.createTextNode('Terminal');
    wli7.appendChild(wli7Text);
    wul1.appendChild(wli7);
    const wli8 = document.createElement('li');
    wli8.className = 'toolkit-list';
    const wli8Text = document.createTextNode('Codepen');
    wli8.appendChild(wli8Text);
    wul1.appendChild(wli8);
    wdiv2.appendChild(wul1);
    const wp1 = document.createElement('p');
    wp1.className = 'detail-description';
    const wp1Text = document.createTextNode(projectDescription);
    wp1.appendChild(wp1Text);
    wdiv2.appendChild(wp1);
    wsection.appendChild(wdiv2);
    const wbody = document.querySelector('body');
    wbody.appendChild(wsection);
    wbody.style.background = '#c1c7d0';
    document.querySelector('.main-portfolio').style.display = 'none';

    function hideWork() {
      wbody.removeChild(wsection);
      wbody.style.background = '#fff';
      document.querySelector('.main-portfolio').style.display = 'block';
    }

    document.querySelector('.main-image-mobile').addEventListener('click', hideWork);
    document.querySelector('#detail-desktop-close-button').addEventListener('click', hideWork);
  });
});
