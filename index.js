covidUpdate();

function covidUpdate(){
var url = 'https://api.covid19api.com/summary';

  $.get(url, function(data){
    console.log(data.Global);

    data = `
   <th>${data.Global.NewConfirmed}</th>
   <th>${data.Global.TotalConfirmed}</th>
   <th>${data.Global.NewDeaths}</th>
   <th>${data.Global.TotalDeaths}</th>

    `

    $("#data").html(data);
  })
}

function refresh(){
  clearData();
  covidUpdate();
}

function clearData(){
  $("#data").empty();
}