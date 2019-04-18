(function () {
  document.addEventListener('DOMContentLoaded', function () {

    var stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
     log('Mouseul este pe scena');

    });

    stage.addEventListener('mouseover', function () {
      log('Mouseul nu este pe scena');
    });

    function log(msg) {
      var paragraphElement = document.createElement('p');

      paragraphElement.innerText = msg;

      paragraphElement.classList.add('message')

      document.body.appendChild(paragraphElement);
    }

  });
})();