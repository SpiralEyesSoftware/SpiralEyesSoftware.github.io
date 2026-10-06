const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Very subtle hero motion: the artwork shifts a few pixels with the pointer.
const art=document.querySelector('.hero-art');
if(art && window.matchMedia('(pointer:fine)').matches){
  window.addEventListener('pointermove',e=>{
    const x=(e.clientX/window.innerWidth-.5)*2;
    const y=(e.clientY/window.innerHeight-.5)*2;
    art.style.transform=`translate(${x*4}px,${y*3}px)`;
  },{passive:true});
}

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('nav a[href^="#"]')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+entry.target.id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));
