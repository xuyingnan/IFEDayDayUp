/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var $cityInput = document.getElementById("aqi-city-input");
var $aqiInput = document.getElementById("aqi-value-input");
var $error1 = document.getElementsByClassName("errormsg")[0];
var $error2 = document.getElementsByClassName("errormsg")[1];
var $aqiTable = document.getElementById("aqi-table");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var cityInput = $cityInput.value.trim();
    var aqiInput = $aqiInput.value.trim();

    if (!cityInput.match(/^[\u4E00-\u9FA5A-Za-z]+$/)) {

        $error1.innerText = "城市名必须为中英文字符！";

    } else {
        $error1.innerText = "";
    }
    if (!aqiInput.match(/^\d+$/)) {

        $error2.innerText = "空气质量指数必须为整数！";
        return;
    } else {
        $error2.innerText = "";
    }
    aqiData[cityInput] = aqiInput;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var tableStr = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for (var key in aqiData) {
        var value = aqiData[key];
        tableStr += "<tr><td>" + key + "</td><td>" + value + "</td><td><button>删除</button></td></tr>";
    }

    $aqiTable.innerHTML = tableStr;

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
    //目标是删除按钮
    if (event.target.nodeName == "BUTTON") {
        var city = event.target.parentNode.parentNode.childNodes[0].innerText;//获取目标button
        delete aqiData[city];//删除aqiData属性
        renderAqiList();
    }
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

    document.getElementById("add-btn").addEventListener('click', addBtnHandle);

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    $aqiTable.addEventListener('click', delBtnHandle);

}

init();
