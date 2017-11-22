// 鼠标按下去
var div = document.getElementById('canvas')
var painting = false

div.onmousedown = function (a) {
    painting = true
    var x = a.clientX
    var y = a.clientY
    var divA = document.createElement('div')
    divA.style = "width: 6px; height: 6px;" + "background: black; border-radius: 3px;" + "position:absolute; left: " + (x - 3) + "px;" + "top: " + (y - 3) + "px;"
    div.appendChild(divA)
}

// 动鼠标
div.onmousemove = function (a) {
    if (painting){
        var x = a.clientX
        var y = a.clientY
        var divA = document.createElement('div')
        divA.style = "width: 6px; height: 6px;" + "background: black; border-radius: 3px;" + "position:absolute; left: " + (x - 3) + "px;" + "top: " + (y - 3) + "px;"
        div.appendChild(divA)
    }
}
// 松开鼠标
div.onmouseup = function (a) {
    painting = false

}