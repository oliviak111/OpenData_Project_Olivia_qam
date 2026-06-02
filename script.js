let data, info; // global variables

async function init(){  
  let link = "dob.json"; //let link = "https://data.cityofnewyork.us/resource/rbx6-tga4.json";
  info = await fetch(link);
  data = await info.json();
  //console.log(data);

  output = document.getElementById("output");
  result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let dob = data[i];
    build += `<div class="fitted card">
                 <h3>Owner: ${dob.owner_name}</h3>
                 <hr>
                 <p>Borough: ${dob.borough}</p>
                 <p>Street: ${dob.street_name}</p>
                 <p>Permit: ${dob.work_permit}</p>
                 <hr>
                 <p>Zip Code: ${dob.zip_code}</p>
                 <hr>
                 <p>Tracking #: ${dob.tracking_number}</p>
                 <hr>
                 <p>Latitude: ${dob.latitude}</p>
                 <p>Longitude: ${dob.longitude}</p>
              </div>`;
    ct++;
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;

  //Filling Dropdown Menus
  //let  = fillDropDown("zip_code");
  //document.getElementById("zip_code").innerHTML = zip_code;

  let borough = fillDropDown("borough");
  document.getElementById("borough").innerHTML = borough;

  //let agencies = fillDropDown("agency_name");
  //document.getElementById("agencies").innerHTML = agencies;  
}

function filterByzip(){
  let zip_code = document.getElementById("zip_code").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let dob = data[i];
    if(dob.zip_code == zip_code){
      build += `<div class="fitted card">
                 <h3>Owner: ${dob.owner_name}</h3>
                 <hr>
                 <p>Borough: ${dob.borough}</p>
                 <p>Street: ${dob.street_name}</p>
                 <p>Permit: ${dob.work_permit}</p>
                 <hr>
                 <p>Zip Code: ${dob.zip_code}</p>
                 <hr>
                 <p>Tracking #: ${dob.tracking_number}</p>
                 <hr>
                 <p>Latitude: ${dob.latitude}</p>
                 <p>Longitude: ${dob.longitude}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;
}

function filterBytrackandboro(){
  let tracking_number = document.getElementById("tracking_number").value;
  let borough = document.getElementById("borough").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let dob = data[i];
    if(dob.tracking_number == tracking_number && dob.borough == borough){
      build += `<div class="fitted card">
                 <h3>Owner: ${dob.owner_name}</h3>
                 <hr>
                 <p>Borough: ${dob.borough}</p>
                 <p>Street: ${dob.street_name}</p>
                 <p>Permit: ${dob.work_permit}</p>
                 <hr>
                 <p>Zip Code: ${dob.zip_code}</p>
                 <hr>
                 <p>Tracking #: ${dob.tracking_number}</p>
                 <hr>
                 <p>Latitude: ${dob.latitude}</p>
                 <p>Longitude: ${dob.longitude}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;  
}