function alter_text() {
    var text_R = document.getElementById("text_R").value;
    
    var text_G = document.getElementById("text_G").value;
    
    var text_B = document.getElementById("text_B").value;
    
    var border_R = document.getElementById("border_R").value;
    
    var border_G = document.getElementById("border_G").value;
    
    var border_B = document.getElementById("border_B").value;
    
    var border_width = document.getElementById("border_width").value;

    var tag = document.getElementById("paragraph");
    tag.style.color = `rgb(${text_R},${text_G},${text_B})`;
    tag.style.borderWidth = border_width;
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
}