function change() {
    var text = document.getElementById('text');
    var newtext = prompt("enter new text");
    var cur_date = new Date();
    text.innerHTML = newtext +" " + cur_date;
    text.style.fontSize = "13px";
    
}