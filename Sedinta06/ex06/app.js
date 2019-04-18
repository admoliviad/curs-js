function paragraphLog(message) {
    var logContainer = document.querySelector('.logs'),
      messageParagraph = document.createElement('p');
  
    if (!logContainer) {
      logContainer = document.createElement('div');
      document.body.appendChild(logContainer);
    }
  
    messageParagraph.innerText = message;
    logContainer.appendChild(messageParagraph);
  }
  
  console.domLog = paragraphLog;
  
  console.log('Apar in document nu in consola');