const projects = [
  {
    projectAvailability: true,
    name: 'littleShop',
    img_desktop: './assets/images/littleShop_desktop.png',
    img_mobile: './assets/images/littleShop_mobile.png',
    description: 'littleShop is a website that allows users to handle little shops with few resources. This little project provides a minimal setup to get React working in Vite with HMR and some ESLint rules.',
    liveLink: 'https://jorgegoco.github.io/littleShop/',
    liveSource: 'https://github.com/jorgegoco/littleShop',
    techstack: ['Vite', 'React', 'TypeScript'],
  },
  {
    projectAvailability: true,
    name: 'Sell It',
    img_desktop: './assets/images/sellit_desktop.png',
    img_mobile: './assets/images/sellit_mobile.png',
    description: 'Sell It is a website that allows users to sell or buy almost anything online. You can watch, add, or manage products, and browse categories created by admins.',
    liveLink: 'https://sellit-rails.fly.dev/',
    liveSource: 'https://github.com/jorgegoco/sell_rails',
    techstack: ['Ruby on Rails', 'PostgreSQL', 'AWS S3'],
  },
  {
    projectAvailability: true,
    name: 'Ticket Admin',
    img_desktop: './assets/images/ticket_desktop.png',
    img_mobile: './assets/images/ticket_mobile.png',
    description: `Ticket Admin is a web app that helps a company to manage tickets among their employees. It is built with a MERN stack, which stands for MongoDB, Express, React, and Node.js.
    (You can play around with the app with my admin user: username: jorge password: test)`,
    liveLink: 'https://ticketadmin.onrender.com/',
    liveSource: 'https://github.com/jorgegoco/ticket_admin_mern_stack_frontend',
    techstack: ['MongoDB', 'Express', 'React', 'Node'],
  },
  {
    projectAvailability: true,
    name: 'Budget App',
    img_desktop: './assets/images/budget_mobile.png',
    img_mobile: './assets/images/budget_mobile.png',
    description: 'The Budget App is a mobile web app that lets you manage your budget by categorizing and tracking your transactions.',
    liveLink: 'https://budget-app-xplx.onrender.com/',
    liveSource: 'https://github.com/jorgegoco/budget-app-ror',
    techstack: ['Ruby on rails', 'PostgreSQL'],
  },
  {
    projectAvailability: true,
    name: 'Conference page',
    img_desktop: './assets/images/nomads_desktop.png',
    img_mobile: './assets/images/nomads_mobile.png',
    description: 'This is a style guided project where I personalized the content about a conference website.',
    liveLink: 'https://jorgegoco.github.io/Capstone1/',
    liveSource: 'https://github.com/jorgegoco/Capstone1',
    techstack: ['JavaScript', 'CSS3', 'HTML5'],
  },
  {
    projectAvailability: true,
    name: 'Weather App',
    img_desktop: './assets/images/weather_desktop2.png',
    img_mobile: './assets/images/weather_mobile.png',
    description: 'A Weather App that pulls from the OpenWeatherMap API to allow users to check air quality index levels from the nine closest weather stations from a chosen origin location.',
    liveLink: 'https://jorgegoco.github.io/react-weather-app/',
    liveSource: 'https://github.com/jorgegoco/react-weather-app',
    techstack: ['JavaScript', 'CSS3', 'HTML5', 'React JS'],
  },

];

for (let i = 0; i < projects.length; i += 1) {
  const recentWorks = document.querySelector('.recent-works');
  const recentWork = document.createElement('div');
  recentWork.className = 'recent-work';
  if (projects[i].projectAvailability) {
    recentWork.classList.add(`imageProject${i}`);
  }
  const multiPost = document.createElement('div');
  multiPost.className = 'multi-post';
  const multiHeader = document.createElement('h3');
  multiHeader.className = 'multi-post-header';
  const textHeader = document.createTextNode(`${projects[i].name}`);
  multiHeader.appendChild(textHeader);
  multiPost.appendChild(multiHeader);
  const multiUl = document.createElement('ul');
  multiUl.className = 'multi-post-skills';
  for (let j = 0; j < projects[i].techstack.length; j += 1) {
    const multiLi = document.createElement('li');
    multiLi.className = 'multi-post-skill';
    const multiLiText = document.createTextNode(`${projects[i].techstack[j]}`);
    multiLi.appendChild(multiLiText);
    multiUl.appendChild(multiLi);
  }
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
    const wh2Text = document.createTextNode(projects[buttonIndex].name);
    wh2.appendChild(wh2Text);
    wdiv.appendChild(wh2);
    const wul = document.createElement('ul');
    wul.className = 'toolkit';
    for (let l = 0; l < projects[buttonIndex].techstack.length; l += 1) {
      const wli = document.createElement('li');
      wli.className = 'toolkit-list';
      const wliText = document.createTextNode(projects[buttonIndex].techstack[l]);
      wli.appendChild(wliText);
      wul.appendChild(wli);
    }
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
    const wh22Text = document.createTextNode(projects[buttonIndex].name);
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
    for (let k = 0; k < projects[buttonIndex].techstack.length; k += 1) {
      const wli = document.createElement('li');
      wli.className = 'toolkit-list';
      const wliText = document.createTextNode(projects[buttonIndex].techstack[k]);
      wli.appendChild(wliText);
      wul1.appendChild(wli);
    }
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
