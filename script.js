// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Lingua dal main script (window.lang impostato da index.html)
  const lang = window.lang || 'en';
  // Carica traduzioni
  fetch('lang/' + lang + '.json')
    .then(r => r.json())
    .then(dict => {
      // Galleria dei posti turistici - ora in carousel
      const touristPlaces = [
        {
          key: 'colosseo',
          img: 'assets/tourist_places/colosseo.jpg',
          maps: 'https://www.google.com/maps/search/?api=1&query=Colosseo+Roma'
        },
        {
          key: 'vaticano',
          img: 'assets/tourist_places/vaticano.jpeg',
          maps: 'https://www.google.com/maps/search/?api=1&query=Vaticano+Roma'
        },
        {
          key: 'fontana_di_trevi',
          img: 'assets/tourist_places/fontana_di_trevi.jpg',
          maps: 'https://www.google.com/maps/search/?api=1&query=Fontana+di+Trevi+Roma'
        },
        {
          key: 'basilica_di_san_pietro',
          img: 'assets/tourist_places/basilica_di_san_pietro.avif',
          maps: 'https://www.google.com/maps/search/?api=1&query=Basilica+di+San+Pietro+Roma'
        },
        {
          key: 'pantheon',
          img: 'assets/tourist_places/pantheon.webp',
          maps: 'https://www.google.com/maps/search/?api=1&query=Pantheon+Roma'
        },
        {
          key: 'cappella_sistina',
          img: 'assets/tourist_places/cappella_sistina.png',
          maps: 'https://www.google.com/maps/search/?api=1&query=Cappella+Sistina+Roma'
        },
        {
          key: 'monumento_vittorio_emanuele_ii',
          img: 'assets/tourist_places/monumento_vittorio_emanuele_ii.avif',
          maps: 'https://www.google.com/maps/search/?api=1&query=Altare+della+Patria+Roma'
        },
        {
          key: 'castel_sant_angelo',
          img: 'assets/tourist_places/castel_sant_angelo.jpg',
          maps: 'https://www.google.com/maps/search/?api=1&query=Castel+Sant+Angelo+Roma'
        },
        {
          key: 'piazza_navona',
          img: 'assets/tourist_places/piazza_navona.jpg',
          maps: 'https://www.google.com/maps/search/?api=1&query=Piazza+Navona+Roma'
        },
        {
          key: 'piazza_di_spagna',
          img: 'assets/tourist_places/piazza_di_spagna.avif',
          maps: 'https://www.google.com/maps/search/?api=1&query=Piazza+di+Spagna+Roma'
        },
        {
          key: 'foro_romano',
          img: 'assets/tourist_places/foro_romano.jpg',
          maps: 'https://www.google.com/maps/search/?api=1&query=Foro+Romano+Roma'
        }
      ];

      // Carousel dei luoghi turistici - sempre scalabile
      function renderTouristCarousel() {
        const touristCarouselInner = document.getElementById('tourist-places-carousel-inner');
        if (!touristCarouselInner) return;
        let cardsPerSlide = 3;
        if (window.innerWidth < 576) {
          cardsPerSlide = 1;
        } else if (window.innerWidth < 992) {
          cardsPerSlide = 2;
        }
        const slides = [];
        for (let i = 0; i < touristPlaces.length; i += cardsPerSlide) {
          slides.push(touristPlaces.slice(i, i + cardsPerSlide));
        }
        touristCarouselInner.innerHTML = '';
        slides.forEach((slideCards, idx) => {
          const slide = document.createElement('div');
          slide.className = 'carousel-item' + (idx === 0 ? ' active' : '');
          const row = document.createElement('div');
          row.className = 'row justify-content-center g-4';
          slideCards.forEach(place => {
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 col-lg-4 d-flex';
            const card = document.createElement('div');
            card.className = 'tourist-place-card flex-grow-1';
            const img = document.createElement('img');
            img.src = place.img;
            img.alt = dict.tourist_places[place.key + '_name'];
            img.className = 'tourist-place-img';
            const info = document.createElement('div');
            info.className = 'tourist-place-info';
            const title = document.createElement('div');
            title.className = 'tourist-place-title';
            title.textContent = dict.tourist_places[place.key + '_name'];
            const desc = document.createElement('div');
            desc.className = 'tourist-place-desc';
            desc.textContent = dict.tourist_places[place.key + '_desc'];
            const mapsBtn = document.createElement('a');
            mapsBtn.href = place.maps;
            mapsBtn.target = '_blank';
            mapsBtn.className = 'btn btn-outline-primary btn-sm mt-2';
            mapsBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 1 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg> Vedi su Google Maps';
            info.appendChild(title);
            info.appendChild(desc);
            info.appendChild(mapsBtn);
            card.appendChild(img);
            card.appendChild(info);
            col.appendChild(card);
            row.appendChild(col);
          });
          slide.appendChild(row);
          touristCarouselInner.appendChild(slide);
        });
        // Mostra/nasconde le frecce in base al numero di slide
        const carousel = document.getElementById('touristPlacesCarousel');
        if (carousel) {
          const prevBtn = carousel.querySelector('.carousel-control-prev');
          const nextBtn = carousel.querySelector('.carousel-control-next');
          if (slides.length > 1) {
            prevBtn.style.display = '';
            nextBtn.style.display = '';
          } else {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
          }
        }
      }

      // Inizializza e aggiorna al resize
      if (document.getElementById('tourist-places-carousel-inner')) {
        renderTouristCarousel();
        window.addEventListener('resize', renderTouristCarousel);
      }

      // ...existing code...
    });

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
