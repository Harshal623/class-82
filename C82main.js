canvas = document.getElementById('mycanvas')
ctx = canvas.getContext('2d')
var mouse_event = " "
var last_x, last_y
var color, line_width
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_event = "mouse_down"
    color = document.getElementById("colorname").value 
    line_width = document.getElementById("line_width").value
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event = "mouse_up"
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event = "mouse_leave"
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    current_x = e.clientX - canvas.offsetLeft
    current_y = e.clientY - canvas.offsetTop
    if(mouse_event == "mouse_down"){
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = line_width
        ctx.arc(current_x, current_y, 30, 0 , 2 * Math.PI)
        ctx.stroke()
    }
    last_x = current_x
    last_y = current_y
}
function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}