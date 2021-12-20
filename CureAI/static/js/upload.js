// Image Preview 

function showPreview(event) {
  try {

    imgPreview = document.getElementById("img-preview");
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      // Upating the '--text' variable in CSS to flex 
      document.documentElement.style.setProperty('--text', 'flex');
    }
  } catch (e) {
    console.log("ERROR", e);
  }
}


// Dropdown button 

function dropdown(e) {
  try {
    dropdownMenuButton1 = document.getElementById("dropdownMenuButton1");
    if (e.target.innerText != "") 
      dropdownMenuButton1.innerText = e.target.innerText;
  } catch (e) {
    console.log("ERROR", e);
  }
}

$(#year).text(new Date().getFullYear());