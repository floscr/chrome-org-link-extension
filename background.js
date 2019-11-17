function copyToClipboard(text) {
   const input = document.createElement('input');
   input.style.position = 'fixed';
   input.style.opacity = 0;
   input.value = text;
   document.body.appendChild(input);
   input.select();
   document.execCommand('Copy');
   document.body.removeChild(input);
};

function orgLink(link, title) {
   return `[[${link}][${title}]]`;
};

chrome.commands.onCommand.addListener(function(command) {
   if (command === "copy-org-tab-link") {
      chrome.tabs.getSelected(null,function(tab) { // null defaults to current window
         const title = tab.title;
         const url = tab.url;
         copyToClipboard(orgLink(url, title));
      });
   }
});
