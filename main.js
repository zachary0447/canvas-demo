var yyy = document.getElementById('xxx');
var pageWidth = document.documentElement.clientWidth
var pageHeight = document.documentElement.clientHeight
yyy.width = pageWidth
yyy.height = pageHeight

var context = yyy.getContext('2d');


function darwCircle(x, y, radius) {
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()
}

function drawLine (x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1) // 起点
    context.lineWidth = 5
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}


var painting = false
var lastPoint = {x:undefined, y:undefined}

// 特性检测
if(document.body.ontouchstart !== undefined){
    // 触屏设备
    yyy.ontouchstart = function (aaa) {
        painting = true
        var x = aaa.touches[0].clientX
        var y = aaa.touches[0].clientY
        lastPoint = {'x':x,'y':y}
    }

    yyy.ontouchmove = function (aaa) {
        if(painting){
            var x = aaa.touches[0].clientX
            var y = aaa.touches[0].clientY
            var newPoint = {"x":x, "y":y}
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint = newPoint
        }
    
    }
    yyy.ontouchend = function (aaa) {
        painting = false
    }

}else{
    window.onresize = function(){
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight
        
        yyy.width = pageWidth
        yyy.height = pageHeight
            
    }
    
    yyy.onmousedown = function (aaa) {
        painting = true
        var x = aaa.clientX
        var y = aaa.clientY
        lastPoint = {'x':x,'y':y}
    }
    
    yyy.onmousemove = function (aaa) {
        if(painting){
            var x = aaa.clientX
            var y = aaa.clientY
            var newPoint = {"x":x, "y":y}
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint = newPoint
        }
    
    }
    yyy.onmouseup = function (aaa) {
        painting = false
    }
    
    function drawLine (x1, y1, x2, y2){
        context.beginPath();
        context.moveTo(x1, y1) // 起点
        context.lineWidth = 5
        context.lineTo(x2, y2)
        context.stroke()
        context.closePath()
    }
}




