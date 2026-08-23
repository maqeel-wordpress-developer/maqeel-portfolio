const menu=document.querySelector('.menu');
const links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{links.style.display=links.style.display==='flex'?'none':'flex';links.style.position='absolute';links.style.top='76px';links.style.left='0';links.style.right='0';links.style.padding='20px';links.style.background='var(--bg)';links.style.flexDirection='column';links.style.borderBottom='1px solid var(--line)';});
