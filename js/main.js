function load(div) {

    var x = [
        "oop", "enums", "FileInput", "FileOutput", "ResizeArrays", "AccessingObjects", "StringFormatting", 
        "home", "about", 
        "Quiz120417", "Quiz111517", "Test011718"];

    for (var i = 0; i < x.length; i++) {        
        document.getElementById(x[i]).style.display = "none";
    }

    console.log(document.getElementById(div).style.display = "block");
}