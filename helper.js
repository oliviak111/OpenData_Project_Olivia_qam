function get(id){
  return document.getElementById(id);
}

function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type:chart_type
    }
  });
}