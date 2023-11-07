// 时间
function getD1() {
    let date = new Date();
    let d1 = date.toLocaleString();
    document.getElementById('time').innerHTML = d1;
}

setInterval("getD1();", 1000);

// 搜索
function doSearch() {
    let keyWord = document.getElementById('searchContentInput');
    console.log(keyWord);
    let engine = document.getElementById('searchEngineSelect').value;
    console.log(engine);
    let ifQuery = keyWord.value.trim();

    if (ifQuery) {
        let searchUrl = engine + encodeURIComponent(ifQuery);
        console.log(searchUrl);
        window.open(searchUrl, "_blank")
    }
}

//监听回车
function enter2search(event) {
    if (event.keyCode === 13) {
        doSearch();
    }
}