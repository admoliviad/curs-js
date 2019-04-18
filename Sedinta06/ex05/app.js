(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var showButton = document.querySelector('#showButton'),
      toggleEventButton = document.querySelector('#toggleEventButton'),
      paragraph = document.createElement('p');
      eventBound = true;

    function showAlert() {
      alert('Butonul a fost apasat');
    }

    showButton.addEventListener('click', showAlert);
    paragraph.innerText = 'Alerta va fi afisata';
    document.body.appendChild(paragraph);

    toggleEventButton.addEventListener('click', function() {
      if (eventBound) {
        showButton.removeEventListener('click', showAlert);
        this.innerText = 'POrneste afisarea';
        paragraph.innerText = 'Alerta nu va fi afisata';
        eventBound = false;
      } else {
        showButton.addEventListener('click', showAlert);
        this.innertext = 'Opreste afisarea';
        paragraph.innerText = 'Alerta va fi afisata';
        eventBound = true;
      }
    });
  });
})();