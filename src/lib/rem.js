function setRemUnit() {
    var docEl = document.documentElement
    // var rem = docEl.clientWidth / 10
    // docEl.style.fontSize = rem + 'px'
    docEl.style.fontSize = '10vw'

}
setRemUnit();
window.onresize = function () {
    setRemUnit()
}