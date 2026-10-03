(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
// Mobile menu
const b=$('.burger'),nav=$('#nav'),top=$('.top');
const setMenu=o=>{nav.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu');document.body.style.overflow=o?'hidden':''};
const sizeNav=()=>nav.style.setProperty('--hh',top.offsetHeight+'px');
sizeNav();addEventListener('resize',()=>{sizeNav();if(innerWidth>800)setMenu(false)});
b.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);b.focus()}});
$$('a',nav).forEach(a=>a.addEventListener('click',()=>setMenu(false)));
// Submenus
$$('.plus').forEach(p=>p.addEventListener('click',()=>{const s=p.closest('li').querySelector('.sub'),o=p.getAttribute('aria-expanded')==='true';p.setAttribute('aria-expanded',!o);s.hidden=o}));
// Video modal: plays on click, stops on close
const dlg=$('#vm'),vid=$('video',dlg),pb=$('#playBtn');
if(pb){pb.addEventListener('click',()=>{dlg.showModal();vid.play().catch(()=>{})})}
$('.close',dlg).addEventListener('click',()=>dlg.close());
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
dlg.addEventListener('close',()=>{vid.pause();vid.currentTime=0;pb&&pb.focus()});
// Product filter
const boxes=$$('.filters input');
boxes.forEach(c=>c.addEventListener('change',()=>{const on=boxes.filter(x=>x.checked).map(x=>x.value);$$('[data-sec]').forEach(s=>s.hidden=on.length>0&&!on.includes(s.dataset.sec))}));
// Contact form
const f=$('#cf');
if(f){const rules={name:v=>v.trim().length>1||'Enter your full name.',email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||'Enter a valid email, like name@example.com.',topic:v=>!!v||'Choose a topic.',message:v=>v.trim().length>=10||'Write at least 10 characters.'};
const check=el=>{const r=rules[el.name](el.value),w=el.closest('.f');w.classList.toggle('bad',r!==true);$('.err',w).textContent=r===true?'':r;el.setAttribute('aria-invalid',r!==true);return r===true};
$$('input,select,textarea',f).forEach(el=>el.addEventListener('blur',()=>check(el)));
f.addEventListener('submit',e=>{e.preventDefault();const ok=$$('input,select,textarea',f).map(check).every(Boolean);$('#ok').textContent=ok?'Message sent. We will reply within two working days.':'';if(ok)f.reset();else $('.bad input,.bad select,.bad textarea',f).focus()})}
})();
