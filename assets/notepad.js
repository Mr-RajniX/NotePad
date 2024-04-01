setTimeout(function() {
    document.getElementById('loading-screen').style.display = 'none';
  }, 3000);
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle('dark-mode');
  });
  
  document.getElementById('notepad-save').addEventListener('click', function() {
    var text = document.getElementById('notepad-text').value;
    var fileName = document.getElementById('file-name').value;
  
    // Check if the file name or input container is blank
    if (fileName === '') {
      alert('Please enter a file name');
      return;
    }
    if (text === '') {
      alert('Please enter some text');
      return;
    }
  
    // If the file name and input container are not blank, save the file
    var blob = new Blob([text], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, fileName);
  });
  
  document.getElementById('notepad-clear').addEventListener('click', function() {
    document.getElementById('notepad-text').value = '';
    document.getElementById('file-name').value = '';
  });
  
  function saveAs(blob, fileName) {
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }
  
  // Adjust the height of the notepad-container div based on the screen size
  function adjustHeight() {
    var width = window.innerWidth;
    if (width <= 768) {
      document.getElementById('notepad-container').style.height = '80vh';
    } else if (width > 768 && width <= 1024) {
      document.getElementById('notepad-container').style.height = '60vh';
    } else if (width > 1024) {
      document.getElementById('notepad-container').style.height = '40vh';
    }
  }
  adjustHeight();
  window.addEventListener('resize', adjustHeight);