// Funksjon som kjøres når siden lastes
document.addEventListener('DOMContentLoaded', function() {
    
    // Lag en klokke som oppdateres
    function oppdaterKlokke() {
        const nå = new Date();
        const tid = nå.toLocaleTimeString('no-NO');
        const dato = nå.toLocaleDateString('no-NO');
        
        const klokkeEl = document.getElementById('klokke');
        if (klokkeEl) {
            klokkeEl.innerHTML = `
                <strong>Dagens dato:</strong> ${dato}<br>
                <strong>Klokka er:</strong> ${tid}
            `;
        }
    
    // Oppdater klokka hvert sekund
    if (document.getElementById('klokke')) {
        setInterval(oppdaterKlokke, 1000);
        oppdaterKlokke();
    }
    
    // Farger som vi kan bytte mellom
    const farger = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    
    let farge_indeks = 0;
    
    // Funksjon for å endre bakgrunnsfarge
    const colorBtn = document.getElementById('endre-farge');
    if (colorBtn) {
        colorBtn.addEventListener('click', function() {
            farge_indeks = (farge_indeks + 1) % farger.length;
            document.body.style.background = farger[farge_indeks];
            
            const melding = document.getElementById('melding');
            if (melding) {
                melding.textContent = `Farge endret! (${farge_indeks + 1}/${farger.length})`;
                melding.style.display = 'block';
                
                setTimeout(() => {
                    melding.style.display = 'none';
                }, 2000);
            }
        });
    }
    
    // Besøksteller (lagres i nettleseren)
    const besokEl = document.getElementById('besøksteller');
    if (besokEl) {
        let besøk = localStorage.getItem('besøksteller') || 0;
        besøk++;
        localStorage.setItem('besøksteller', besøk);
        besokEl.textContent = besøk;
    }

        const photos = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg',
    'images/photo6.jpg',
    'images/photo7.jpg',
    'images/photo8.jpg',
  ];

    const slidesContainer = document.getElementById('slides');
    if (slidesContainer) {

        photos.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            slidesContainer.appendChild(img);
        });

        let index = 0;
        const total = photos.length;

        function showSlide(i){
            slidesContainer.style.transform = `translateX(-${i * 100}%)`;
        }

        setInterval(() => {
            index = (index + 1) % total;
            showSlide(index);
        }, 3000);

        let startX = 0;
        let isDragging = false;

        slidesContainer.addEventListener('mousedown', e => {
            isDragging = true;
            startX = e.pageX;
        });

        slidesContainer.addEventListener('mousemove', e => {
            if(!isDragging) return;
        });

        slidesContainer.addEventListener('mouseup', e => {
            if(!isDragging) return;
            const diff = e.pageX - startX;
            if(diff > 50) { index = (index - 1 + total) % total; } 
            if(diff < -50) { index = (index + 1) % total; }        
            showSlide(index);
            isDragging = false;
        });

        slidesContainer.addEventListener('touchstart', e => startX = e.touches[0].clientX);
        slidesContainer.addEventListener('touchend', e => {
            const endX = e.changedTouches[0].clientX;
            const diff = endX - startX;
            if(diff > 50) { index = (index - 1 + total) % total; }
            if(diff < -50) { index = (index + 1) % total; }
            showSlide(index);
        });
    }

});
