// Seterra-style location dots. The existing large transparent hit areas remain clickable.
(function(){
  const group=document.querySelector('#spots');
  if(!group) return;
  const dots=[];
  document.querySelectorAll('.spot').forEach(function(hit){
    const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');
    dot.classList.add('seterra-dot');
    dot.setAttribute('cx',hit.getAttribute('cx'));
    dot.setAttribute('cy',hit.getAttribute('cy'));
    dot.setAttribute('r','2.2');
    group.appendChild(dot);
    dots.push({hit:hit,dot:dot});
  });
})();