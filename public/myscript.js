let array = []
chrome.storage.local.get(["prohibition"], function(items) {
  const storage = items.prohibition
  let search = document.getElementsByTagName('a')
  for (let i = 0, len = search.length; i < len; i++) {
    storage.map((list) => {
      if(search[i].href.toString().includes(list)){
        console.log(search[i])
        search[i].parentNode.parentNode.parentNode.parentNode.remove()
      }
    })
  }
});
