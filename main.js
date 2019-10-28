//https://developer.chrome.com/apps/contextMenus
function closeOtherTabs() {
    var queryInfo = {active: false};
    chrome.tabs.query( queryInfo, (e) =>  {

        var tabIds = e.map(x => x.id);
        chrome.tabs.remove(tabIds, () => {});
    } );
}

var title = "Close Other Tabs";
chrome.contextMenus.create({"title": title, "onclick": closeOtherTabs});
