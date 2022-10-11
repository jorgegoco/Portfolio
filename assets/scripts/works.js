function showWork() {
  document.querySelector('.main-portfolio').style.display = 'none';
  document.querySelector('#total-detail-works').style.display = 'block';
}

function hideWork() {
  document.querySelector('.main-portfolio').style.display = 'block';
  document.querySelector('#total-detail-works').style.display = 'none';
}

let section = document.createElement('div');
section.id = 'total-detail-works';
let div = document.createElement('div');
div.className = 'detail-mobile';
let img = document.createElement('img');
img.alt = 'project image';
img.className = 'main-image-mobile';
img.src = './assets/images/mobile-detail-image.png';
div.appendChild(img);
let h2 = document.createElement('h2');
h2.className = 'detail-title-mobile';
let h2_text = document.createTextNode('Keeping track of hundreds of components');
h2.appendChild(h2_text);
div.appendChild(h2);
let ul = document.createElement('ul');
ul.className = 'toolkit';
let li = document.createElement('li');
let li_text = document.createTextNode('Ruby on rails');
li.appendChild(li_text);
ul.appendChild(li);
let li1 = document.createElement('li');
let li1_text = document.createTextNode('css');
li.appendChild(li1_text);
ul.appendChild(li1);
let li2 = document.createElement('li');
let li2_text = document.createTextNode('JavaScript');
li.appendChild(li2_text);
ul.appendChild(li2);
div.appendChild(ul);
let p = document.createElement('p');
let p_text = document.createTextNode('Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s\,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsumhas been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea');
p.appendChild(p_text);
div.appendChild(p);
let div1 = document.createElement('div');
div1.className = 'detail-main-button-mobile';
let button = document.createElement('button');
button.className = 'detail-buttons-mobile live';
let button_text = document.createTextNode('See live');
button.appendChild(button_text);
let img1 = document.createElement('img');
img1.src = './assets/images/live_icon.svg';
img1.width = '16px';
img1.height = '16px';
button.appendChild(img1);
div1.appendChild(button);
let button1 = document.createElement('button');
button1.className = 'detail-buttons-mobile source';
let button1_text = document.createTextNode('See Source');
button1.appendChild(button1_text);
let img2 = document.createElement('img');
img2.src = './assets/images/source_icon.svg';
img2.width = '22px';
img2.height = '24px';
button1.appendChild(img2);
div1.appendChild(button1);
div.appendChild(div1);
section.appendChild(div);
let div2 = document.createElement('div');
div2.className = 'detail-desktop';
let img3 = document.createElement('img');
img3.id = 'detail-desktop-close-button';
img3.alt = 'close';
img3.src = './assets/images/close_icon_popup.svg';
div2.appendChild(img3);
let img4 = document.createElement('img');
img4.className = 'main-image-desktop';
img4.alt = 'project image';
img4.src = './assets/images/desktop-detail-image.png';
div2.appendChild(img4);
let div3 = document.createElement('div');
div3.className = 'detail-header-desktop';
let h22 = document.createElement('h2');
h22.className = 'detail-title-desktop';
let h22_text = document.createTextNode('Keeping track of hundreds of <br>components');
h22.appendChild(h22_text);
div3.appendChild(h22);
let div4 = document.createElement('div');
div4.className = 'detail-main-button-desktop';
let button2 = document.createElement('button');
button2.className = 'detail-buttons-desktop live';
let button2_text = document.createTextNode('See live');
button2.appendChild(button2_text);
let img5 = document.createElement('img');
img5.src = './assets/images/live_icon.svg';
img5.width = '16px';
img5.height = '16px';
button2.appendChild(img5);
div4.appendChild(button2);
let button3 = document.createElement('button');
button3.className = 'detail-buttons-desktop source';
let button3_text = document.createTextNode('See Source');
button3.appendChild(button3_text);
let img6 = document.createElement('img');
img6.src = './assets/images/source_icon.svg';
img6.width = '22px';
img6.height = '24px';
button3.appendChild(img6);
div4.appendChild(button3);
div3.appendChild(div4);
div2.appendChild(div2);
let ul1 = document.createElement('ul');
ul1.className = 'toolkit';
let li3 = document.createElement('li');
let li3_text = document.createTextNode('Codekit');
li3.appendChild(li3_text);
ul1.appendChild(li3);
let li4 = document.createElement('li');
let li4_text = document.createTextNode('GitHub');
li4.appendChild(li4_text);
ul1.appendChild(li4);
let li5 = document.createElement('li');
let li5_text = document.createTextNode('JavaScript');
li5.appendChild(li5_text);
ul1.appendChild(li5);
let li6 = document.createElement('li');
let li6_text = document.createTextNode('Bootstrap');
li6.appendChild(li6_text);
ul1.appendChild(li6);
let li7 = document.createElement('li');
let li7_text = document.createTextNode('Terminal');
li7.appendChild(li7_text);
ul1.appendChild(li7);
let li8 = document.createElement('li');
let li8_text = document.createTextNode('Codepen');
li8.appendChild(li8_text);
ul1.appendChild(li8);
div2.appendChild(ul1);
let p1 = document.createElement('p');
let p1_text = document.createTextNode('Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s\,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsumhas been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea');
p1.appendChild(p1_text);
div2.appendChild(p1);
section.appendChild(div2);
let body = document.querySelector('body');
body.appendChild(section);
document.querySelector('#total-detail-works').style.display = 'none';
document.querySelector('.work-button').addEventListener('click', showWork);
document.querySelector('.main-image-mobile').addEventListener('click', hideWork);
document.querySelector('#detail-desktop-close-button').addEventListener('click', hideWork);






