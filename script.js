// Funksjon som kjøres når siden lastes
document.addEventListener('DOMContentLoaded', function() {
    
    // Lag en klokke som oppdateres
    function oppdaterKlokke() {
        const nå = new Date();
        const tid = nå.toLocaleTimeString('no-NO');
        const dato = nå.toLocaleDateString('no-NO');
        
        document.getElementById('klokke').innerHTML = `
            <strong>Dagens dato:</strong> ${dato}<br>
            <strong>Klokka er:</strong> ${tid}
        `;
    }
    
    // Oppdater klokka hvert sekund
    setInterval(oppdaterKlokke, 1000);
    oppdaterKlokke(); // Kjør med en gang
    
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
    document.getElementById('endre-farge').addEventListener('click', function() {
        farge_indeks = (farge_indeks + 1) % farger.length;
        document.body.style.background = farger[farge_indeks];
        
        // Vis en melding
        const melding = document.getElementById('melding');
        melding.textContent = `Farge endret! (${farge_indeks + 1}/${farger.length})`;
        melding.style.display = 'block';
        
        // Skjul meldingen etter 2 sekunder
        setTimeout(() => {
            melding.style.display = 'none';
        }, 2000);
    });
    
    // Besøksteller (lagres i nettleseren)
    let besøk = localStorage.getItem('besøksteller') || 0;
    besøk++;
    localStorage.setItem('besøksteller', besøk);
    document.getElementById('besøksteller').textContent = besøk;
});
