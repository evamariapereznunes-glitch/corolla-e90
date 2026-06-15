const slides = [
  {src:'assets/corolla-hero.png', caption:'Vista general del Corolla'},
  {src:'assets/corolla-night.png', caption:'Detalle nocturno del frontal'},
  {src:'assets/dani-car.png', caption:'Dani con su Corolla E90'},
  {src:'assets/corolla-side-rear.png', caption:'Línea lateral trasera'},
  {src:'assets/corolla-side-front.png', caption:'Línea lateral delantera'},
  {src:'assets/corolla-wash.jpeg', caption:'Lavado con luz cálida'}
];
let current = 0;
const img = document.getElementById('slide');
const caption = document.getElementById('caption');
function showSlide(index){
  current = (index + slides.length) % slides.length;
  img.src = slides[current].src;
  caption.textContent = slides[current].caption;
}
document.getElementById('prev').addEventListener('click',()=>showSlide(current-1));
document.getElementById('next').addEventListener('click',()=>showSlide(current+1));
