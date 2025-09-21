// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Galleria dei posti turistici
  const touristPlaces = [
    {
      name: 'Colosseo',
      img: 'assets/tourist_places/colosseo.jpg',
      desc: 'Il simbolo di Roma, anfiteatro romano tra i più grandi e famosi al mondo.'
    },
    {
      name: 'Vaticano',
      img: 'assets/tourist_places/vaticano.jpeg',
      desc: 'La Città del Vaticano, sede del Papa e dei Musei Vaticani.'
    },
    {
      name: 'Fontana di Trevi',
      img: 'assets/tourist_places/fontana_di_trevi.jpg',
      desc: 'La fontana più famosa di Roma, celebre per il lancio della moneta.'
    },
    {
      name: 'Basilica di San Pietro',
      img: 'assets/tourist_places/basilica_di_san_pietro.avif',
      desc: 'La basilica più grande del mondo, cuore della cristianità.'
    },
    {
      name: 'Il Pantheon',
      img: 'assets/tourist_places/pantheon.webp',
      desc: 'Tempio romano dedicato a tutte le divinità, oggi chiesa.'
    },
    {
      name: 'Cappella Sistina',
      img: 'assets/tourist_places/cappella_sistina.png',
      desc: 'Celebre per gli affreschi di Michelangelo, all’interno dei Musei Vaticani.'
    },
    {
      name: 'Monumento Vittorio Emanuele II',
      img: 'assets/tourist_places/monumento_vittorio_emanuele_ii.avif',
      desc: 'Detto anche Altare della Patria, monumento nazionale in Piazza Venezia.'
    },
    {
      name: 'Castel Sant’Angelo',
      img: 'assets/tourist_places/castel_sant_angelo.jpg',
      desc: 'Antico mausoleo, poi fortezza papale, sulle rive del Tevere.'
    },
    {
      name: 'Piazza Navona',
      img: 'assets/tourist_places/piazza_navona.jpg',
      desc: 'Una delle piazze più belle di Roma, famosa per le fontane barocche.'
    },
    {
      name: 'Piazza di Spagna',
      img: 'assets/tourist_places/piazza_di_spagna.avif',
      desc: 'Celebre per la scalinata di Trinità dei Monti e la Barcaccia.'
    },
    {
      name: 'Il Foro Romano',
      img: 'assets/tourist_places/foro_romano.jpg',
      desc: 'Il cuore dell’antica Roma, area archeologica di grande fascino.'
    }
  ];

  const touristGallery = document.getElementById('tourist-places-gallery');
  if (touristGallery) {
    touristGallery.innerHTML = '';
    touristPlaces.forEach(place => {
      const col = document.createElement('div');
      col.className = 'col-12 col-md-6 col-lg-4 d-flex';
      const card = document.createElement('div');
      card.className = 'tourist-place-card';
      const img = document.createElement('img');
      img.src = place.img;
      img.alt = place.name;
      img.className = 'tourist-place-img';
      const info = document.createElement('div');
      info.className = 'tourist-place-info';
      const title = document.createElement('div');
      title.className = 'tourist-place-title';
      title.textContent = place.name;
      const desc = document.createElement('div');
      desc.className = 'tourist-place-desc';
      desc.textContent = place.desc;
      info.appendChild(title);
      info.appendChild(desc);
      card.appendChild(img);
      card.appendChild(info);
      col.appendChild(card);
      touristGallery.appendChild(col);
    });
  }
  console.log("Holiday in Gardenie vetrina pronta 🚀");

  // Effetto smooth scroll per i link interni
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });


  // Carousel dinamico Bootstrap
  const galleryImagesData = [
    { src: 'assets/gallery1.avif', alt: 'Camera matrimoniale' },
    { src: 'assets/gallery2.avif', alt: 'Soggiorno luminoso' },
    { src: 'assets/gallery3.avif', alt: 'Bagno moderno' },
    { src: 'assets/esterno.avif', alt: 'Esterno' },
    { src: 'assets/porta.avif', alt: 'Ingresso struttura' },
    // Aggiungi qui altre immagini, es: { src: 'assets/gallery4.avif', alt: 'Alt descrizione' }
  ];

  const carousel = document.getElementById('galleryCarousel');
  if (carousel) {
    // Indicatori
    let indicators = '<div class="carousel-indicators">';
    galleryImagesData.forEach((img, i) => {
      indicators += `<button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Foto ${i+1}"></button>`;
    });
    indicators += '</div>';

    // Immagini
    let items = '<div class="carousel-inner rounded-4 shadow">';
    galleryImagesData.forEach((img, i) => {
      items += `<div class="carousel-item${i === 0 ? ' active' : ''}">` +
        `<img src="${img.src}" class="d-block w-100" alt="${img.alt}" style="height:400px;object-fit:cover;border-radius:18px;">` +
        `<div class="carousel-caption d-block bg-dark bg-opacity-50 rounded-3 px-3 py-2 mb-3" style="bottom:10px;">` +
        `<span class="fs-5 text-white">${img.alt}</span>` +
        `</div></div>`;
    });
    items += '</div>';

    // Frecce
    const controls = `
      <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Precedente</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Successiva</span>
      </button>
    `;

    carousel.innerHTML = indicators + items + controls;
  }

  // Lightbox semplice per la gallery
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('gallery-img')) {
      const img = e.target;
      const lightbox = document.createElement('div');
      lightbox.style.position = 'fixed';
      lightbox.style.top = 0;
      lightbox.style.left = 0;
      lightbox.style.width = '100vw';
      lightbox.style.height = '100vh';
      lightbox.style.background = 'rgba(0,0,0,0.8)';
      lightbox.style.display = 'flex';
      lightbox.style.alignItems = 'center';
      lightbox.style.justifyContent = 'center';
      lightbox.style.zIndex = 9999;
      lightbox.innerHTML = `<img src='${img.src}' style='max-width:90vw;max-height:80vh;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.25);'>`;
      lightbox.addEventListener('click', () => document.body.removeChild(lightbox));
      document.body.appendChild(lightbox);
    }
  });
});
