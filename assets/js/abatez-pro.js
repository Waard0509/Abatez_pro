/* abatez v16 - JavaScript compatible con Safari/Mac antiguos. */
var abatez_WHATSAPP = "522313120797";

function abatezGet(id){ return document.getElementById(id); }
function abatezToArray(list){ var arr=[]; if(!list) return arr; for(var i=0;i<list.length;i++){ arr.push(list[i]); } return arr; }
function abatezAddClass(el, cls){ if(el && cls){ el.classList.add(cls); } }
function abatezRemoveClass(el, cls){ if(el && cls){ el.classList.remove(cls); } }
function abatezHasClass(el, cls){ return !!(el && el.classList && el.classList.contains(cls)); }
function abatezMatchesText(text, term){ return String(text || '').toLowerCase().indexOf(String(term || '').toLowerCase()) !== -1; }
function abatezSmoothScroll(el){ if(!el) return; try{ el.scrollIntoView({behavior:'smooth', block:'start'}); }catch(e){ el.scrollIntoView(true); } }
function abatezSafeFocus(el){ if(!el) return; try{ el.focus({preventScroll:true}); }catch(e){ try{el.focus();}catch(ex){} } }

function abrirWhatsApp(texto){
  var mensaje = encodeURIComponent(texto || '');
  window.open('https://wa.me/' + abatez_WHATSAPP + '?text=' + mensaje, '_blank');
}
function cotizarProducto(nombre){
  abrirWhatsApp('Hola abatez, me interesa cotizar o recibir información sobre ' + nombre + '. ¿Me pueden apoyar con precio, presentación y disponibilidad?');
}
function consultarDisponibilidad(linea){
  abrirWhatsApp('Hola abatez, me interesa consultar disponibilidad de ' + linea + '. ¿Me pueden apoyar?');
}
function comprarPorWhatsApp(nombreProducto){ cotizarProducto(nombreProducto); }

function solicitarAsesoria(tipoAnimal){
  var selectAnimal = abatezGet('animal');
  var txtMensaje = abatezGet('mensaje');
  if(selectAnimal){
    for(var i=0;i<selectAnimal.options.length;i++){
      if(abatezMatchesText(selectAnimal.options[i].text, tipoAnimal)){ selectAnimal.selectedIndex = i; break; }
    }
  }
  if(txtMensaje){ txtMensaje.value = 'Hola abatez. Me interesa mejorar el rendimiento de mis ' + String(tipoAnimal).toLowerCase() + '. Busco asesoría nutricional y cotización.'; }
  var seccionContacto = abatezGet('contacto');
  abatezSmoothScroll(seccionContacto);
  window.setTimeout(function(){
    if(txtMensaje){
      abatezSafeFocus(txtMensaje);
      txtMensaje.classList.add('ring-4');
      txtMensaje.classList.add('ring-acento/50');
      window.setTimeout(function(){ txtMensaje.classList.remove('ring-4'); txtMensaje.classList.remove('ring-acento/50'); }, 1500);
    }
  }, 700);
}

function abrirDiagnostico(){
  var modal = abatezGet('modal-diagnostico');
  var content = abatezGet('modal-content');
  if(!modal || !content) return;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  window.setTimeout(function(){
    content.classList.remove('scale-95');
    content.classList.remove('opacity-0');
    content.classList.add('scale-100');
    content.classList.add('opacity-100');
    var first = modal.querySelector('select, button, a, input, textarea');
    abatezSafeFocus(first);
  }, 10);
}
function cerrarDiagnostico(){
  var modal = abatezGet('modal-diagnostico');
  var content = abatezGet('modal-content');
  if(!modal || !content) return;
  content.classList.remove('scale-100');
  content.classList.remove('opacity-100');
  content.classList.add('scale-95');
  content.classList.add('opacity-0');
  document.body.style.overflow = '';
  window.setTimeout(function(){ modal.classList.add('hidden'); }, 260);
}

var productosDiagnostico = {
  'becerro-20-r': {nombre:'Becerro 20 R', url:'producto-becerro-20-r.html', tipo:'Ficha técnica disponible', nota:'Iniciador para becerros antes del destete, con enfoque en arranque y adaptación.'},
  'becerro-recepcion': {nombre:'Becerro Recepción 20', url:'producto-becerro-recepcion.html', tipo:'Ficha técnica disponible', nota:'Para becerros después del destete o llegada a recepción.'},
  'lechero-20': {nombre:'Lechero 20', url:'producto-lechero-20.html', tipo:'Ficha técnica disponible', nota:'Enfocado en bovinos productores de leche.'},
  'novillo-14': {nombre:'Novillo 14', url:'producto-novillo-14.html', tipo:'Ficha técnica disponible', nota:'Ruta principal para engorda de bovinos en corral.'},
  'expo-16': {nombre:'Expo 16', url:'producto-expo-16.html', tipo:'Ficha técnica disponible', nota:'Para becerros y toretes en pruebas de comportamiento o exposición.'},
  'flushing-24': {nombre:'Flushing 24', url:'producto-flushing-24.html', tipo:'Ficha técnica disponible', nota:'Apoyo energético-proteico para vacas de cría en pastoreo.'},
  'pasto-mas-24': {nombre:'Pasto Más 24', url:'producto-pasto-mas-24.html', tipo:'Ficha técnica disponible', nota:'Suplemento para ganado en pastoreo con aporte de proteína y minerales.'},
  'pasto-mas-30': {nombre:'Pasto Más 30', url:'producto-pasto-mas-30.html', tipo:'Ficha técnica disponible', nota:'Suplemento para pastoreo con enfoque en digestibilidad de forrajes.'},
  'pasto-mas-4-40': {nombre:'Pasto Más 4:40', url:'producto-pasto-mas-4-40.html', tipo:'Ficha técnica disponible', nota:'Mineral-proteico con fósforo y proteína de sobrepaso ruminal.'},
  'pasto-mas-8-30': {nombre:'Pasto Más 8:30 LD', url:'producto-pasto-mas-8-30.html', tipo:'Ficha técnica disponible', nota:'Mineral-proteico alto en proteína medicado con lasalocid sódico.'},
  'ovino-14': {nombre:'Ovino 14', url:'producto-ovino-14.html', tipo:'Ficha técnica disponible', nota:'Producto disponible para la línea ovina.'},
  'laika-premium': {nombre:'Laika Premium', url:'producto-laika-premium.html', tipo:'Marca aliada', nota:'Opciones para cachorro, adulto y razas pequeñas.'},
  'perrazo-cachorro-adulto': {nombre:'Perrazo Cachorro y Adulto', url:'producto-perrazo-cachorro-adulto.html', tipo:'Marca aliada', nota:'Alimento para perro cachorro y adulto, con guía por talla.'},
  'ringo-adulto': {nombre:'Ringo Adulto', url:'producto-ringo-adulto.html', tipo:'Marca aliada', nota:'Para perros adultos de todas las razas y tamaños.'},
  'felicette-premium': {nombre:'Félicette Premium', url:'producto-felicette-premium.html', tipo:'Marca aliada', nota:'Alimento premium para gatos adultos.'}
};

function recomendacionDiagnostico(animal, etapa, objetivo){
  var a = String(animal || '').toLowerCase();
  var e = String(etapa || '').toLowerCase();
  var o = String(objetivo || '').toLowerCase();
  var rec = { etiqueta:'Diagnóstico automático', titulo:'Recomendación preliminar', resumen:'Con base en tus respuestas, estas son las opciones más cercanas dentro del catálogo disponible.', keys:[], nota:'La recomendación es orientativa. Para dosis, disponibilidad y precio conviene confirmar con un asesor.', confianza:74, siguientePaso:'Confirmar presentación, disponibilidad y dosis con un asesor abatez.' };
  if(a.indexOf('vaca')>-1 || a.indexOf('becerro')>-1 || a.indexOf('bovino')>-1){
    rec.etiqueta='Bovinos · ruta sugerida'; rec.confianza=92;
    if(e.indexOf('reci')>-1 || e.indexOf('destete')>-1){
      rec.keys=['becerro-20-r','becerro-recepcion']; rec.titulo='Ruta recomendada para becerros'; rec.resumen='Para esta etapa conviene partir de productos iniciadores o de recepción, según si el animal está antes o después del destete.'; rec.siguientePaso='Indicar edad, peso aproximado y si el becerro ya consume sólidos.';
    } else if(o.indexOf('leche')>-1 || e.indexOf('lactancia')>-1){
      rec.keys=['lechero-20','flushing-24']; rec.titulo='Ruta recomendada para producción de leche'; rec.resumen='La opción principal es Lechero 20. Si el caso está relacionado con vacas de cría o preparación reproductiva, Flushing 24 puede entrar como alternativa técnica.'; rec.siguientePaso='Indicar litros promedio por día, etapa de lactancia y tipo de forraje disponible.';
    } else if(e.indexOf('engorda')>-1 || o.indexOf('peso')>-1 || o.indexOf('conversión')>-1 || o.indexOf('conversion')>-1){
      rec.keys=['novillo-14','expo-16']; rec.titulo='Ruta recomendada para engorda'; rec.resumen='Para ganancia de peso o conversión alimenticia, las opciones más cercanas del catálogo oficial son Novillo 14 y Expo 16.'; rec.siguientePaso='Indicar peso inicial, sistema de alimentación y objetivo de finalización.';
    } else if(e.indexOf('gestación')>-1 || e.indexOf('gestacion')>-1 || o.indexOf('salud')>-1){
      rec.keys=['flushing-24','pasto-mas-4-40','pasto-mas-8-30']; rec.titulo='Ruta recomendada para reproducción y condición corporal'; rec.resumen='Para reproducción, condición corporal o apoyo en pastoreo, conviene revisar Flushing 24 y la familia Pasto Más.'; rec.siguientePaso='Indicar condición corporal, etapa reproductiva y calidad del pasto.';
    } else {
      rec.keys=['pasto-mas-24','pasto-mas-30','pasto-mas-4-40']; rec.titulo='Ruta recomendada para pastoreo'; rec.resumen='Para mantenimiento o animales en pastoreo, la familia Pasto Más es la ruta más adecuada dentro de las fichas oficiales disponibles.'; rec.siguientePaso='Indicar tipo de pasto, temporada y objetivo productivo.';
    }
  } else if(a.indexOf('borrego')>-1 || a.indexOf('ovino')>-1){
    rec.etiqueta='Ovinos · ruta sugerida'; rec.keys=['ovino-14']; rec.titulo='Ruta recomendada para ovinos'; rec.resumen='Para ovinos, la opción disponible más cercana es Ovino 14. Se recomienda confirmar presentación, disponibilidad y uso con el asesor.'; rec.confianza=86; rec.siguientePaso='Indicar etapa del animal, peso y si el sistema es pastoreo o corral.';
  } else if(a.indexOf('cerdo')>-1 || a.indexOf('porcino')>-1){
    rec.etiqueta='Porcinos · asesoría personalizada'; rec.titulo='Recomendación porcina bajo consulta'; rec.resumen='Para porcinos, lo más conveniente es confirmar etapa, peso y disponibilidad para sugerir una opción adecuada.'; rec.nota='La recomendación se afina mejor con datos de edad, peso y objetivo productivo.'; rec.confianza=58; rec.siguientePaso='Indicar etapa, peso aproximado y objetivo: arranque, desarrollo, engorda o gestación.';
  } else if(a.indexOf('caballo')>-1 || a.indexOf('equino')>-1){
    rec.etiqueta='Equinos · asesoría personalizada'; rec.titulo='Recomendación equina bajo consulta'; rec.resumen='Para equinos, conviene definir actividad, condición corporal y etapa antes de elegir una opción de alimentación.'; rec.nota='La recomendación se afina con actividad, edad, condición y objetivo del caballo.'; rec.confianza=55; rec.siguientePaso='Confirmar si es mantenimiento, trabajo, gestación o crecimiento antes de recomendar.';
  } else if(a.indexOf('mascota')>-1 || a.indexOf('perro')>-1 || a.indexOf('gato')>-1){
    rec.etiqueta='Mascotas · marcas aliadas'; rec.confianza=84;
    if(o.indexOf('pelaje')>-1 || o.indexOf('salud')>-1 || e.indexOf('mantenimiento')>-1 || e.indexOf('adult')>-1){
      rec.keys=['ringo-adulto','laika-premium','felicette-premium']; rec.titulo='Ruta sugerida para mascota adulta'; rec.resumen='Para mascotas adultas, estas opciones permiten comparar alimento para perro adulto y gato adulto según especie, talla y presentación disponible.';
    } else if(e.indexOf('reci')>-1 || e.indexOf('destete')>-1 || e.indexOf('crecimiento')>-1){
      rec.keys=['laika-premium','perrazo-cachorro-adulto']; rec.titulo='Ruta sugerida para cachorro'; rec.resumen='Para etapa inicial o crecimiento, conviene revisar opciones de cachorro y confirmar talla, peso y presentación disponible.';
    } else {
      rec.keys=['laika-premium','perrazo-cachorro-adulto','ringo-adulto']; rec.titulo='Opciones disponibles para perro y gato'; rec.resumen='Estas son marcas aliadas disponibles para consulta. Elige según especie, etapa, talla y presentación.';
    }
    rec.nota='Confirma siempre especie, edad, peso y presentación antes de comprar.'; rec.siguientePaso='Indicar si es perro o gato, edad, peso/talla y presentación buscada.';
  }
  return rec;
}

function calcularDiagnostico(){
  var animalEl = abatezGet('diag-animal');
  var etapaEl = abatezGet('diag-etapa');
  var objetivoEl = abatezGet('diag-objetivo');
  var animal = animalEl ? animalEl.value : '';
  var etapa = etapaEl ? etapaEl.value : '';
  var objetivo = objetivoEl ? objetivoEl.value : '';
  var salida = abatezGet('resultado-diagnostico');
  if(!animal || !etapa || !objetivo){ alert('Selecciona las 3 opciones para generar una recomendación automática.'); return null; }
  var rec = recomendacionDiagnostico(animal, etapa, objetivo);
  if(salida){
    var tarjetas='';
    for(var i=0;i<rec.keys.length;i++){
      var p = productosDiagnostico[rec.keys[i]];
      if(!p) continue;
      tarjetas += '<a class="diag-product-card pro-transition" href="' + p.url + '"><span class="w-10 h-10 rounded-full bg-marca/10 text-marca flex items-center justify-center flex-shrink-0"><i class="fas fa-box-open"></i></span><span><strong class="block text-gray-900">' + p.nombre + '</strong><small class="block text-marca font-bold mt-1">' + p.tipo + '</small><span class="block text-gray-600 text-xs mt-1 leading-relaxed">' + p.nota + '</span><span class="inline-flex items-center gap-1 text-xs font-bold text-acento mt-2">Ver detalles <i class="fas fa-arrow-right"></i></span></span></a>';
    }
    if(!tarjetas){ tarjetas = '<div class="rounded-2xl border border-acento/20 bg-acento/10 p-4 text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Siguiente paso:</strong> enviar tu caso para confirmar disponibilidad, presentación y precio.</div>'; }
    salida.innerHTML = '<div class="diagnostic-result rounded-3xl p-5 md:p-6 mt-6"><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3"><span class="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-marca-dark bg-white border border-marca/20 rounded-full px-3 py-1"><i class="fas fa-wand-magic-sparkles"></i>' + rec.etiqueta + '</span><span class="diag-score inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-extrabold text-gray-800"><i class="fas fa-gauge-high text-marca"></i> Coincidencia ' + rec.confianza + '%</span></div><h4 class="text-xl md:text-2xl font-extrabold text-gray-900 mt-4 mb-2">' + rec.titulo + '</h4><p class="text-sm text-gray-600 leading-relaxed mb-4">' + rec.resumen + '</p><div class="grid gap-3">' + tarjetas + '</div><div class="mt-4 rounded-2xl bg-white/80 border border-gray-200 p-4 text-sm text-gray-700 leading-relaxed"><strong class="text-gray-900">Para afinar la recomendación:</strong> ' + rec.siguientePaso + '</div><p class="text-xs text-gray-500 mt-4 leading-relaxed"><i class="fas fa-circle-info text-acento mr-1"></i>' + rec.nota + '</p></div>';
    salida.classList.remove('hidden');
    try{ salida.scrollIntoView({behavior:'smooth', block:'nearest'}); }catch(e){ salida.scrollIntoView(false); }
  }
  window.__ultimoDiagnosticoAbatez = {animal:animal, etapa:etapa, objetivo:objetivo, rec:rec};
  return window.__ultimoDiagnosticoAbatez;
}
function enviarDiagnostico(){
  var diagnostico = window.__ultimoDiagnosticoAbatez || calcularDiagnostico();
  if(!diagnostico) return;
  var nombres=[];
  for(var i=0;i<diagnostico.rec.keys.length;i++){ var p=productosDiagnostico[diagnostico.rec.keys[i]]; if(p) nombres.push(p.nombre); }
  var productos = nombres.join(', ') || 'Consulta personalizada';
  var texto = 'Hola abatez, acabo de usar el asesor inteligente de la página.' +
    '\n\nAnimal: ' + diagnostico.animal +
    '\nEtapa: ' + diagnostico.etapa +
    '\nObjetivo: ' + diagnostico.objetivo +
    '\n\nResultado sugerido: ' + diagnostico.rec.titulo +
    '\nCoincidencia automática: ' + diagnostico.rec.confianza + '%' +
    '\nProductos o ruta sugerida: ' + productos +
    '\nDato necesario para afinar: ' + diagnostico.rec.siguientePaso +
    '\n\n¿Me pueden confirmar disponibilidad, presentación, dosis y precio?';
  abrirWhatsApp(texto);
}

function toggleFAQ(id){
  var ans = abatezGet('faq-ans-' + id);
  var icon = abatezGet('faq-icon-' + id);
  if(!ans || !icon) return;
  if(ans.style.maxHeight && ans.style.maxHeight !== '0px'){
    ans.style.maxHeight = '0px'; icon.classList.remove('rotate-180'); icon.classList.remove('text-marca');
  } else {
    for(var i=1;i<=6;i++){ var item=abatezGet('faq-ans-' + i); var ic=abatezGet('faq-icon-' + i); if(item) item.style.maxHeight='0px'; if(ic){ ic.classList.remove('rotate-180'); ic.classList.remove('text-marca'); } }
    ans.style.maxHeight = ans.scrollHeight + 'px'; icon.classList.add('rotate-180'); icon.classList.add('text-marca');
  }
}
function toggleDetalles(idSeccion, idIcono){
  var seccion = abatezGet(idSeccion), icono = abatezGet(idIcono);
  if(!seccion || !icono) return;
  if(seccion.classList.contains('max-h-0')){
    seccion.classList.remove('max-h-0'); seccion.classList.remove('opacity-0'); seccion.classList.add('max-h-[800px]'); seccion.classList.add('opacity-100'); icono.classList.add('rotate-180');
  } else {
    seccion.classList.add('max-h-0'); seccion.classList.add('opacity-0'); seccion.classList.remove('max-h-[800px]'); seccion.classList.remove('opacity-100'); icono.classList.remove('rotate-180');
  }
}

var productosBusquedaAbatez = [
  {nombre:'Becerro 20 R', linea:'Bovinos', etapa:'Becerros', objetivo:'Destete y desarrollo inicial', url:'producto-becerro-20-r.html'},
  {nombre:'Becerro Recepción 20', linea:'Bovinos', etapa:'Recepción', objetivo:'Adaptación después del destete', url:'producto-becerro-recepcion.html'},
  {nombre:'Lechero 20', linea:'Bovinos', etapa:'Lactancia', objetivo:'Producción de leche', url:'producto-lechero-20.html'},
  {nombre:'Novillo 14', linea:'Bovinos', etapa:'Engorda', objetivo:'Ganancia de peso y conversión', url:'producto-novillo-14.html'},
  {nombre:'Expo 16', linea:'Bovinos', etapa:'Engorda / exposición', objetivo:'Condición y finalización', url:'producto-expo-16.html'},
  {nombre:'Flushing 24', linea:'Bovinos', etapa:'Reproducción', objetivo:'Condición corporal y preparación', url:'producto-flushing-24.html'},
  {nombre:'Pasto Más 24', linea:'Bovinos', etapa:'Pastoreo', objetivo:'Suplementación en campo', url:'producto-pasto-mas-24.html'},
  {nombre:'Pasto Más 30', linea:'Bovinos', etapa:'Pastoreo', objetivo:'Suplementación proteica', url:'producto-pasto-mas-30.html'},
  {nombre:'Pasto Más 4:40', linea:'Bovinos', etapa:'Pastoreo', objetivo:'Mineral/proteico', url:'producto-pasto-mas-4-40.html'},
  {nombre:'Pasto Más 8:30', linea:'Bovinos', etapa:'Pastoreo', objetivo:'Mineral/proteico', url:'producto-pasto-mas-8-30.html'},
  {nombre:'Ovino 14', linea:'Ovinos', etapa:'Engorda', objetivo:'Corderos en corral', url:'producto-ovino-14.html'},
  {nombre:'Laika Premium', linea:'Caninos', etapa:'Cachorro / adulto / razas pequeñas', objetivo:'Alimento para perro', url:'producto-laika-premium.html'},
  {nombre:'Perrazo Cachorro y Adulto', linea:'Caninos', etapa:'Cachorro / adulto', objetivo:'Alimento para perro', url:'producto-perrazo-cachorro-adulto.html'},
  {nombre:'Ringo Adulto', linea:'Caninos', etapa:'Adulto', objetivo:'Alimento para perro adulto', url:'producto-ringo-adulto.html'},
  {nombre:'Félicette Premium', linea:'Felinos', etapa:'Adulto', objetivo:'Alimento para gato', url:'producto-felicette-premium.html'}
];
function normalizarTextoAbatez(texto){
  var t = String(texto || '');
  try{ t = t.normalize('NFD').replace(/[̀-ͯ]/g, ''); }catch(e){}
  return t.toLowerCase();
}
function initProductFinder(){
  var input = abatezGet('buscador-productos-abatez');
  var cont = abatezGet('resultados-productos-abatez');
  if(!input || !cont || input.getAttribute('data-abatez-finder-ready')) return;
  input.setAttribute('data-abatez-finder-ready','true');
  function render(items, query){
    var html='', max=Math.min(items.length,6);
    for(var i=0;i<max;i++){
      var p=items[i];
      html += '<a class="product-search-result" href="' + p.url + '"><span class="text-xs font-extrabold uppercase tracking-wider text-marca">' + p.linea + ' · ' + p.etapa + '</span><strong class="block text-gray-950 text-lg mt-1">' + p.nombre + '</strong><span class="block text-gray-600 text-sm mt-1">' + p.objetivo + '</span><span class="inline-flex items-center gap-1 text-acento font-extrabold text-sm mt-3">Ver ficha <i class="fas fa-arrow-right"></i></span></a>';
    }
    if(!html) html = '<div class="rounded-2xl border border-acento/20 bg-acento/10 p-5 text-sm text-gray-700">No encontré coincidencias exactas para <strong>' + (query || '') + '</strong>. Puedes usar el asesor inteligente o enviar tu caso por WhatsApp.</div>';
    cont.innerHTML = html;
  }
  render(productosBusquedaAbatez.slice(0,6), '');
  function buscarProductos(valor){
    var q = normalizarTextoAbatez(valor);
    if(!q.replace(/\s+/g,'')){ render(productosBusquedaAbatez.slice(0,6), ''); return; }
    var terms = q.split(/\s+/), matches=[];
    for(var i=0;i<productosBusquedaAbatez.length;i++){
      var p = productosBusquedaAbatez[i];
      var hay = normalizarTextoAbatez(p.nombre + ' ' + p.linea + ' ' + p.etapa + ' ' + p.objetivo);
      var score=0;
      for(var j=0;j<terms.length;j++){ if(terms[j] && hay.indexOf(terms[j])>-1) score++; }
      if(score>0) matches.push({p:p, score:score});
    }
    matches.sort(function(a,b){ return b.score-a.score || a.p.nombre.localeCompare(b.p.nombre); });
    var out=[]; for(var k=0;k<matches.length;k++){ out.push(matches[k].p); }
    render(out, valor);
  }
  input.addEventListener('input', function(){ buscarProductos(input.value); });

  var tags = document.querySelectorAll('[data-finder-query]');
  for(var t=0;t<tags.length;t++){
    (function(tag){
      if(tag.getAttribute('data-abatez-tag-ready')) return;
      tag.setAttribute('data-abatez-tag-ready','true');
      tag.addEventListener('click', function(ev){
        if(ev && ev.preventDefault) ev.preventDefault();
        var q = tag.getAttribute('data-finder-query') || tag.innerHTML || '';
        input.value = q;
        buscarProductos(q);
        try{ input.focus(); }catch(ex){}
        try{ cont.scrollIntoView({behavior:'smooth', block:'nearest'}); }catch(ex2){}
      });
    })(tags[t]);
  }
}
function initCatalogFilters(){
  var panels = document.querySelectorAll('[data-catalog-filter]');
  for(var n=0;n<panels.length;n++){
    (function(panel){
      if(panel.getAttribute('data-abatez-catalog-ready')) return;
      panel.setAttribute('data-abatez-catalog-ready','true');
      var input = panel.querySelector('[data-catalog-search]');
      var chips = panel.querySelectorAll('[data-catalog-chip]');
      var allArticles = document.querySelectorAll('article');
      var cards=[];
      for(var i=0;i<allArticles.length;i++){ if(allArticles[i].querySelector('h3')) cards.push(allArticles[i]); }
      var active='';
      function apply(){
        var q=normalizarTextoAbatez(input ? input.value : '');
        var terms=q.split(/\s+/);
        for(var i=0;i<cards.length;i++){
          var text=normalizarTextoAbatez(cards[i].textContent || cards[i].innerText || '');
          var okQ=true;
          for(var j=0;j<terms.length;j++){ if(terms[j] && text.indexOf(terms[j])===-1){ okQ=false; break; } }
          var okChip=!active || text.indexOf(normalizarTextoAbatez(active))>-1;
          cards[i].style.display = (okQ && okChip) ? '' : 'none';
        }
      }
      if(input) input.addEventListener('input', apply);
      for(var c=0;c<chips.length;c++){
        (function(chip){
          chip.addEventListener('click', function(){
            var value=chip.getAttribute('data-catalog-chip') || '';
            active = (active === value) ? '' : value;
            for(var x=0;x<chips.length;x++){ if(chips[x] === chip && active){ chips[x].classList.add('is-active'); } else { chips[x].classList.remove('is-active'); } }
            apply();
          });
        })(chips[c]);
      }
    })(panels[n]);
  }
}

function initSmoothNavbar(){
  var navbar = abatezGet('navbar');
  if(!navbar) return;
  if(!abatezGet('scroll-progress')){ var progress=document.createElement('div'); progress.id='scroll-progress'; navbar.insertBefore(progress, navbar.firstChild); }

  var logo = abatezGet('logo-abatez');
  if(!logo){
    var imgs = navbar.getElementsByTagName('img');
    for(var i=0;i<imgs.length;i++){
      var alt = imgs[i].getAttribute('alt') || '';
      var src = imgs[i].getAttribute('src') || '';
      if(alt.indexOf('abatez')>-1 || alt.indexOf('Logo')>-1 || src.indexOf('logo')>-1){ logo = imgs[i]; break; }
    }
  }
  if(logo){
    logo.classList.add('abatez-floating-logo-img');
    if(!logo.getAttribute('data-logo-full')){ logo.setAttribute('data-logo-full','img/Logo.png'); }
    if(!logo.getAttribute('data-logo-compact')){ logo.setAttribute('data-logo-compact','img/Logo.png'); }
    if(logo.parentNode){ logo.parentNode.classList.add('abatez-floating-logo-link'); }
  }

  var links = navbar.querySelectorAll('a[href]');
  for(var j=0;j<links.length;j++){
    if(!(links[j].className && String(links[j].className).indexOf('abatez-floating-logo-link')>-1)){
      links[j].classList.add('nav-link-premium');
    }
  }

  var raf = window.requestAnimationFrame || function(fn){ return window.setTimeout(fn, 16); };
  var ticking=false;
  function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }
  function lerp(a,b,t){ return a+(b-a)*t; }
  function paint(){
    ticking=false;
    var y=window.pageYOffset || document.documentElement.scrollTop || 0;
    var w=window.innerWidth || document.documentElement.clientWidth || 1024;
    var isMobile=w<768;
    var raw=clamp(y/330,0,1);
    var value=raw*raw*(3-(2*raw));

    /* v20: el logo ya no cambia de imagen al scrollear. Solo se transforma suavemente. */
    var navH=isMobile?64:72;
    /* v24: logo completo, proporción natural y barra con colores antiguos. */
    /* v25: en celular el logo inicia centrado sobre el hero y se integra suavemente al bajar. */
    /* v27: logo completo sin fondo tipo PNG; más grande en desktop y centrado en móvil. */
    var logoW=isMobile?lerp(232,132,value):lerp(304,168,value);
    var logoH=isMobile?lerp(173,98,value):lerp(226,126,value);
    var logoTop=isMobile?lerp(72,0,value):lerp(6,0,value);
    var logoY=isMobile?0:lerp(6,0,value);
    var logoPad=0;
    var radius=0;
    var bgAlpha=lerp(.90,.985,value);
    var logoBg='transparent';
    var logoBorder='transparent';
    var logoShadow='none';
    if(logo){
      var fullSrc=logo.getAttribute('data-logo-full') || 'img/Logo.png';
      if(logo.getAttribute('src') !== fullSrc){ logo.setAttribute('src', fullSrc); }
    }

    navbar.style.setProperty('--abatez-nav-height', navH+'px');
    navbar.style.setProperty('--abatez-logo-card-w', logoW.toFixed(2)+'px');
    navbar.style.setProperty('--abatez-logo-card-h', logoH.toFixed(2)+'px');
    navbar.style.setProperty('--abatez-logo-card-top', logoTop.toFixed(2)+'px');
    navbar.style.setProperty('--abatez-logo-card-y', logoY.toFixed(2)+'px');
    navbar.style.setProperty('--abatez-logo-card-pad', logoPad.toFixed(2)+'px');
    navbar.style.setProperty('--abatez-logo-card-radius', radius.toFixed(2)+'px');
    navbar.style.setProperty('--abatez-logo-bg', logoBg);
    navbar.style.setProperty('--abatez-logo-border', logoBorder);
    navbar.style.setProperty('--abatez-logo-shadow', logoShadow);
    navbar.style.setProperty('--abatez-logo-accent-opacity', '0');
    navbar.style.setProperty('--abatez-logo-line-opacity', '0');
    navbar.style.setProperty('--abatez-nav-bg', 'rgba(255,255,255,' + bgAlpha.toFixed(3) + ')');
    navbar.style.setProperty('--abatez-nav-shadow', y>2 ? '0 18px 45px -30px rgba(6,78,59,' + lerp(.10,.35,value).toFixed(3) + ')' : '0 1px 0 rgba(5,150,105,.10)');
    navbar.style.setProperty('--abatez-nav-border', y>2 ? 'rgba(5,150,105,' + lerp(.10,.22,value).toFixed(3) + ')' : 'rgba(5,150,105,.10)');

    if(value>.90) navbar.classList.add('navbar--compact'); else navbar.classList.remove('navbar--compact');
    var progress=abatezGet('scroll-progress');
    if(progress){ var docH=document.documentElement.scrollHeight-document.documentElement.clientHeight; progress.style.width=docH>0?clamp((y/docH)*100,0,100)+'%':'0%'; }
  }
  function update(){ if(!ticking){ ticking=true; raf(paint); } }
  function updateVH(){ try{ document.documentElement.style.setProperty('--abatez-vh', (window.innerHeight*0.01)+'px'); }catch(e){} update(); }
  updateVH();
  window.addEventListener('scroll', update, false);
  window.addEventListener('resize', updateVH, false);
  window.addEventListener('orientationchange', function(){ window.setTimeout(updateVH, 250); }, false);
}
function initMobileMenu(){
  var btn=abatezGet('mobile-menu-btn'), menu=abatezGet('mobile-menu');
  if(!btn || !menu || btn.getAttribute('data-abatez-ready')) return;
  btn.setAttribute('data-abatez-ready','true'); btn.setAttribute('aria-expanded','false');
  btn.addEventListener('click', function(ev){ if(ev && ev.preventDefault) ev.preventDefault(); menu.classList.toggle('hidden'); btn.setAttribute('aria-expanded', String(!menu.classList.contains('hidden'))); });
}
function initDiagnosticAutoRun(){
  var ids=['diag-animal','diag-etapa','diag-objetivo'];
  for(var i=0;i<ids.length;i++){
    var el=abatezGet(ids[i]);
    if(el && !el.getAttribute('data-abatez-diag-ready')){
      el.setAttribute('data-abatez-diag-ready','true');
      el.addEventListener('change', function(){
        var a=abatezGet('diag-animal'), e=abatezGet('diag-etapa'), o=abatezGet('diag-objetivo');
        if(a && e && o && a.value && e.value && o.value) calcularDiagnostico();
      });
    }
  }
  document.addEventListener('keydown', function(ev){ ev=ev||window.event; if(ev.key === 'Escape' || ev.keyCode === 27) cerrarDiagnostico(); });
}
function initContactForm(){
  var form=document.querySelector('#contacto form');
  if(!form || form.getAttribute('data-abatez-submit-ready')) return;
  form.setAttribute('data-abatez-submit-ready','true');
  form.addEventListener('submit', function(e){
    if(e && e.preventDefault) e.preventDefault();
    var nombre=abatezGet('nombre'), tel=abatezGet('telefono'), animal=abatezGet('animal'), msg=abatezGet('mensaje');
    var texto = '¡Hola abatez! 👋' +
      '\n\nSoy ' + (nombre && nombre.value ? nombre.value : 'Cliente') + '.' +
      '\n\nMi teléfono es: ' + (tel && tel.value ? tel.value : 'No especificado') +
      '\nMe interesa alimento para: ' + (animal && animal.value ? animal.value : 'No especificado') +
      '\n\nMensaje: ' + (msg && msg.value ? msg.value : 'Solicito información y cotización.') +
      '\n\nQuiero recibir una cotización.';
    abrirWhatsApp(texto);
    try{ form.reset(); }catch(ex){}
  });
}
function initPreloader(){
  var preloader=abatezGet('preloader');
  if(!preloader) return;
  function hide(){ preloader.classList.add('opacity-0'); window.setTimeout(function(){ preloader.style.display='none'; }, 300); }
  if(document.readyState === 'complete') hide(); else window.addEventListener('load', hide);
  window.setTimeout(hide, 1600);
}
function initPdfLinks(){
  var links=document.querySelectorAll('a[href$=".pdf"], a[href*=".pdf?"]');
  for(var i=0;i<links.length;i++){
    links[i].setAttribute('target','_blank'); links[i].setAttribute('rel','noopener noreferrer'); links[i].removeAttribute('download'); links[i].classList.add('pdf-new-tab'); links[i].setAttribute('title','Abrir ficha técnica en una pestaña nueva');
  }
}
function initJpgCompatibility(){
  // En la v16 los HTML ya usan JPG como principal para Safari antiguo. Esta función queda como protección.
  var imgs=document.querySelectorAll('img[data-fallback]');
  for(var i=0;i<imgs.length;i++){ imgs[i].onerror=function(){ var fb=this.getAttribute('data-fallback'); if(fb && this.src.indexOf(fb)===-1) this.src=fb; }; }
}
function initAbatezUI(){
  initSmoothNavbar(); initMobileMenu(); initDiagnosticAutoRun(); initProductFinder(); initCatalogFilters(); initContactForm(); initPdfLinks(); initPreloader(); initJpgCompatibility();
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAbatezUI); else initAbatezUI();

window.abrirDiagnostico=abrirDiagnostico;
window.cerrarDiagnostico=cerrarDiagnostico;
window.calcularDiagnostico=calcularDiagnostico;
window.enviarDiagnostico=enviarDiagnostico;
window.cotizarProducto=cotizarProducto;
window.consultarDisponibilidad=consultarDisponibilidad;
window.comprarPorWhatsApp=comprarPorWhatsApp;
window.solicitarAsesoria=solicitarAsesoria;
window.toggleFAQ=toggleFAQ;
window.toggleDetalles=toggleDetalles;
