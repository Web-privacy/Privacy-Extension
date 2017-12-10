function toggleImages(tab) {

    chrome.contentSettings['images'].get({
        primaryUrl: tab.url
    }, function (details) {
        chrome.contentSettings['cookies'].set({
            primaryPattern: '<all_urls>',
            setting: details.setting == 'block'
        })
    });

}

chrome.browserAction.onClicked.addListener(toggleImages);

/*
var incognito;
var url;


function settingChanged() {
  var type = this.id;
  var setting = this.value;
  var pattern = /^file:/.test(url) ? url : url.replace(/\/[^\/]*?$/, '/*');
  chrome.contentSettings[type].set({
        'primaryPattern': pattern,
        'setting': setting,
        'scope': (incognito ? 'incognito_session_only' : 'regular')
      });
}

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var current = tabs[0];
    incognito = current.incognito;
    url = current.url;
    var types = ['cookies', 'images', 'javascript', 'location', 'plugins',
                 'popups', 'notifications', 'microphone', 'camera',
                 'unsandboxedPlugins', 'automaticDownloads'];
    types.forEach(function(type) {
      // HACK: [type] is not recognised by the docserver's sample crawler, so
      // mention an explicit
      // type: chrome.contentSettings.cookies.get - See http://crbug.com/299634
      chrome.contentSettings[type] && chrome.contentSettings[type].get({
            'primaryUrl': url,
            'incognito': incognito
          },
          function(details) {
            document.getElementById(type).disabled = false;
            document.getElementById(type).value = details.setting;
          });
    });
  });

  var selects = document.querySelectorAll('select');
  for (var i = 0; i < selects.length; i++) {
    selects[i].addEventListener('change', settingChanged);
  }
});
*/