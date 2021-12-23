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

let dropdownMenuButton1 = document.getElementById("dropdownMenuButton1");
function dropdown(e) {
  try {
    if (e.target.innerText != "") 
      dropdownMenuButton1.innerText = e.target.innerText;

  } catch (e) {
    console.log("ERROR", e);
  }
}



// Generate button



async function generate(file)
{
  try{
  let endpoint = dropdownMenuButton1.innerText.toLowerCase().replace(" ","-");
  let condition= document.getElementById("condition");
  let description = document.getElementById("descript");



  //$ Main Code 

  const API_ENDPOINT = `http://localhost:5000/${endpoint}`;
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let result = JSON.parse(request.responseText);
      console.log(result.msg);
      condition.innerText=result.msg;
      description.innerText=result.desc;


    }
  };
  formData.append("file", file);
  request.send(formData);  


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
