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


// Generate Result

function generate(file)
{
  try{
  let endpoint = document.getElementById("dropdownMenuButton1");
  const API_ENDPOINT = `http://192.168.225.116:5000/tuberculosis`;
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    }
  };
  formData.append("file", file);
  let result=request.send(formData);

  }catch(e)
  {
    console.log("error message: ",e);
  }
}


let fileinput = document.getElementById("inputGroupFile04");
fileinput.addEventListener("change", (event) => {
  const files = event.target.files;
  console.log(files);
  generate(files[0]);
});
