function skillsMember() {
    var skills = document.getElementById("skills");
    var skill = document.getElementById("skill");
    var btn = document.getElementById("btn");
    var list = document.getElementById("list");

    btn.onclick = function() {
        var li = document.createElement("li");
        var textNode = document.createTextNode(skill.value);
        li.appendChild(textNode);
        list.appendChild(li);
        skill.value = "";
    }
}