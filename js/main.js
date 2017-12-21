function load(div) {

    var x = ["oop", "enums", "FileInput", "FileOutput", "ResizeArrays", "AccessingObjects", "StringFormatting", "home"];

    for (var i = 0; i < x.length; i++) {        document.getElementById(x[i]).style.display = "none";

    }

    console.log(document.getElementById(div).style.display = "block");
}