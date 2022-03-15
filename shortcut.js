// chrome.commands.onCommand.addListener(function (command) {
//   alert(command)
// });

chrome.commands.onCommand.addListener((command) => {
  if(command === 'shortcut-0'){
    chrome.tabs.create({url: "https://web.whatsapp.com/"});
  }
  if(command === 'shortcut-1'){
    chrome.tabs.create({url: "https://www.youtube.com/"});
  }
  if(command === 'shortcut-2'){
    chrome.tabs.create({url: "https://www.instagram.com/"});
  }
  if(command === 'shortcut-3'){
    chrome.tabs.create({url: "https://www.netflix.com/"});
  }
});