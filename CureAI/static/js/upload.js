
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
  } 
  catch (e) {
    console.log("ERROR", e);
  }
}


var generatebtn = document.getElementById("generate");

// Dropdown button 
var dropdownname = '';
var dropdownMenuButton1 = document.getElementById("dropdownMenuButton1");



// Function to check if dropdown item has valid name
function dropdowncheck() {
  return dropdownname.localeCompare('')==0 || dropdownname.localeCompare('select-disease')==0;
}



// Function to decide whether modal should be shown or not(by checking if all inputs are provided by the user)
function finalcheck() {
  if(imgfile.length > 0 && imgfile[0] != undefined && (!dropdowncheck())) {
    generatebtn.setAttribute("data-bs-toggle", "modal");
    generatebtn.setAttribute("data-bs-target", "#exampleModal");
  }
  else {
    if(generatebtn.hasAttribute("data-bs-toggle")) {
      generatebtn.removeAttribute("data-bs-toggle");
    }
    else if(generatebtn.hasAttribute("data-bs-target")) {
      generatebtn.removeAttribute("data-bs-target");
    }
  }
}



// Dropdown Onclick listener
function dropdown(e) {
  try {
    const s = e.target.innerText;
    if(!(s.localeCompare("")==0 && s.localeCompare("select-disease")==0)) {
      dropdownMenuButton1.innerText = e.target.innerText;
      dropdownname = dropdownMenuButton1.innerText;

      finalcheck();
    }
  } 
  catch (e) {
    console.log("ERROR", e);
  }

  // console.log(generatebtn.getAttributeNames());
}



// Function to fetch the results from the API
async function generate(file)
{
  try {
    let endpoint = dropdownMenuButton1.innerText.toLowerCase().replace(" ","-");
  
    let condition= document.getElementById("condition");
    let description = document.getElementById("descript");
  
    condition.innerText="";
    description.innerText="";
  
    let loading = document.getElementsByClassName("loading")[0];
    loading.style.display = "flex";
  
    //$ Main Code 
  
    const API_ENDPOINT = `http://localhost:5000/${endpoint}`;
    const request = new XMLHttpRequest();
    const formData = new FormData();
  
    request.open("POST", API_ENDPOINT, true);

    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        let result = JSON.parse(request.responseText);
        loading.style.display = "none";
        // console.log(result.msg);
        condition.innerText=result.msg;
        description.innerText=result.desc;
      }
      else{
        loading.style.display = "none";
        description.innerText="Something went wrong... Try again later!";
      }
    };
    formData.append("file", file);
    request.send(formData);  
  
  }
  catch(e) {
    console.log("error message: ",e);
  }
  
}



var imgfile = [];
let fileinput = document.getElementById("inputGroupFile04");


fileinput.addEventListener("change", (event) => {
  const files = event.target.files;
  // console.log(files);
  imgfile[0] = files[0];

  finalcheck();

  if(imgfile.length > 0 && imgfile[0] != undefined) {
    document.getElementById("img-preview").style.display = "var(--text)";
  }
  else {
    document.getElementById("img-preview").style.display = "none";
  }

  // console.log(generatebtn.getAttributeNames());
});



generatebtn.addEventListener("click", () => {
  console.log("imgfile:", imgfile);
  if(imgfile.length > 0 && imgfile[0] != undefined && (!dropdowncheck())) {
    generate(imgfile[0]);
  }
  else if(dropdowncheck()) {
    alert("Select a disease!");
  }
  else {
    alert("No Image Selected!");
  }
});