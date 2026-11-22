document.querySelector('.burger').onclick=()=>document.querySelector('.nav ul').classList.toggle('open');
const box=document.getElementById('proyectos');
if(box){fetch('data/proyectos.json').then(r=>r.json()).then(d=>{d=d.proyectos||d;
 const max=+box.dataset.max||99,full=box.dataset.filters==='1';
 const cats=[...new Set(d.map(p=>p.categoria))];
 const draw=c=>{box.innerHTML=d.filter(p=>c==='Todos'||p.categoria===c).slice(0,max).map(p=>`<article class="proj"><div class="ph"><img src="${p.imagen}" alt="${p.titulo}" loading="lazy" onerror="this.remove()"></div><div class="info"><span class="cat">${p.categoria}</span><h3>${p.titulo}</h3><p class="price">${p.precio}</p><p class="meta">${p.detalle}</p></div></article>`).join('')};
 if(full){const f=document.getElementById('filtros');f.innerHTML=['Todos',...cats].map((c,i)=>`<button class="${i?'':'on'}">${c}</button>`).join('');
  f.onclick=e=>{if(e.target.tagName!=='BUTTON')return;f.querySelectorAll('button').forEach(b=>b.classList.remove('on'));e.target.classList.add('on');draw(e.target.textContent)}}
 draw('Todos')}).catch(()=>{box.innerHTML='<p>Los proyectos se mostrarán al publicar la web.</p>'})}
