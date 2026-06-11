let data, info, output;

async function init_b(){
  let link = "dob.json"; //https://data.cityofnewyork.us/resource/rbx6-tga4.json";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function permitsByBorough(){
  //Discussion 1: Define variables to keep tally of complaints by borough
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;
  
  //Discussion 2: Traverse the data and use a decision to aggregate data by borough.
  for(let i = 0; i < data.length; i++){
    let perm = data[i];
    if(perm.borough == "QUEENS"){
      q++;
    }else if(perm.borough == "MANHATTAN"){
      m++;
    }else if(perm.borough == "BROOKLYN"){
      bk++;
    }else if(perm.borough == "BRONX"){
      bx++;
    }else if(perm.borough == "STATEN ISLAND"){
      s++;
    }
  }

  //Discussion 3: Setup the aggregated data as array of arrays to generate chart.
  // 1st position in each array is the label for the data
  let chartData = [
    ["QUEENS", q],
    ["MANHATTAN", m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ];
  
  //Discussion 4: Retrieve chart type via user selection from drop-down.
  let chartType = document.getElementById("chartType").value;
  
  //Discussion 5: Display chart using displayChart() function.
  displayChart(chartData, "output2", chartType);
}


// displayChart() accepts the data, an id of the container where to display the chart, and the type of chart to display in the container.
function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type: chart_type
    }
  });
}