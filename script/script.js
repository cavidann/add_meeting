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
    // for (i = 0; i <= week_length - 1; i++) {
    //     this.children[i].style.display = "block";
    // }
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
var week_length = days.children.length;
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

    // h5,span,a appends
    var b_node = document.createElement("b");      
    var b_textnode = document.createTextNode(added_day);   
    b_node.appendChild(b_textnode);    
    var att = document.createAttribute("class");
    att.value = added_day;     
    b_node.setAttributeNode(att);
    
                               
    document.getElementById("item" + j).appendChild(b_node);

    var span_node = document.createElement("span");      
    var span_textnode = document.createTextNode(added_start_minute+ " - " + added_end_minute);   
    span_node.appendChild(span_textnode);                              
    document.getElementById("item" + j).appendChild(span_node);
    
    var a_node = document.createElement("a"); 
    var att = document.createAttribute("class");
    att.value = "remove";     
    a_node.setAttributeNode(att);
    
    var a_textnode = document.createTextNode("remove");   
    a_node.appendChild(a_textnode);                              
    document.getElementById("item" + j).appendChild(a_node);
    // h5,span,a appends
    
    // advices next day
    
    var next_day=parseInt(days.options[days.selectedIndex].value);
    console.log(next_day)
    if(next_day<=week_length){
        days.options[days.selectedIndex].remove(this);
        
        // days.selectedIndex=next_day;
    }else{
        days.selectedIndex=0;
    }
    // advices next day

    // remove
    $( document ).ready(function() {
        $('.remove').click(function()
        {		
            // var sas=this.parentElement.children[0].getAttribute("class");
            // var l_node = document.createElement("option");      
            // var l_textnode = document.createTextNode(added_day);   
            // l_node.appendChild(l_textnode);    
                        
            // document.getElementById("days").appendChild(l_node);
            // console.log(sas)
            this.parentElement.remove(this)
           
        });
    })
    // remove
    
})
// add button


