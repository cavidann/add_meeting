var days = document.getElementById("days");
var start_minute = document.getElementById("first");
var end_minute = document.getElementById("second");
var add = document.getElementById("add");
var list = document.getElementById("list");

// creating options
for (i = 1; i <= 12; i++) {
    var option = document.createElement("Option");
    var t = document.createTextNode(i + " : 00 am");
    option.appendChild(t);
    start_minute.appendChild(option);
}

for (i = 1; i <= 12; i++) {
    var option = document.createElement("Option");
    var t = document.createTextNode(i + " : 00 am");
    option.appendChild(t);
    end_minute.appendChild(option);
}
// creating options

// interactive day choosing
var week_length = days.children.length;

days.addEventListener("change", function () {
    for (i = 0; i <= week_length - 1; i++) {
        this.children[i].style.display = "block";
    }
    var selected_day = this.options[this.selectedIndex].style.display = "none";

})
// interactive day choosing

start_minute.addEventListener("change", function () {

    var selected_first_minute = this.options[this.selectedIndex].text.substring(0, 2);
    // reset second_minutes
    while (end_minute.firstChild) {
        end_minute.removeChild(end_minute.firstChild);
    }
    // reset second_minutes
    // fill second_minutes with logic
    var num = parseInt(selected_first_minute) + 1;
    if (num == 13) {
        num = 1;
    }
    for (i = num; i <= 12; i++) {
        var option = document.createElement("Option");
        var t = document.createTextNode(i + ": 00 am");
        option.appendChild(t);
        end_minute.appendChild(option);
    }
    // fill second_minutes with logic
})

// add button
var j = 0;
add.addEventListener("click", function () {
    var added_day = days.options[days.selectedIndex].text;
    var added_start_minute = start_minute.options[start_minute.selectedIndex].text;
    var added_end_minute = end_minute.options[end_minute.selectedIndex].text;


    var item_div = document.createElement("div");
    var att = document.createAttribute("id");
    j++;
    att.value = "item" + j;
    item_div.setAttributeNode(att);

    list.appendChild(item_div);
    document.getElementById("item" + j).innerHTML = "<b>" + added_day + "</b>" + "<span>" + added_start_minute + " - " + added_end_minute + "</span>" + "<a>remove</a><br>";
    // advices next day
    var week_length = days.children.length;
    var next_day=parseInt(days.options[days.selectedIndex].value)+1
    if(next_day<=week_length-1){
        days.selectedIndex=next_day
    }else{
        days.selectedIndex=0;
    }
    // advices next day
})
// add button


