let array = []
chrome.storage.local.get(["prohibition"], function(items) {
  const storage = items.prohibition
  let search = document.getElementsByTagName('a')
  storage.map((list) => {
    for (let i = 0, len = search.length; i < len; i++) {
      if(search[i].href.toString().includes(list)){
        array.push(search[i])
      }
    }
  })
  array.map((dom) => {
    console.log(dom)
    dom.parentNode.parentNode.parentNode.parentNode.remove()
  })
});
