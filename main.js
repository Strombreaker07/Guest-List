var guest_name_array = [];

function submit() 
{
    var Guestname = document.getElementById("name1").value;
    guest_name_array.push(Guestname);
    console.log(Guestname);
    
    console.log(guest_name_array);
    var length_of_guest = guest_name_array.length;
    console.log(length_of_guest);
    document.getElementById("Guest_name").innerHTML=guest_name_array.toString();    
}

function sort() 
{
    guest_name_array.sort();
    var i = guest_name_array.join("<br>");
    console.log(guest_name_array);
    document.getElementById("sort_div").innerHTML= i.toString();
}

function show() 
{
    var i = guest_name_array.join("<br>");
    console.log(guest_name_array);
    document.getElementById("people_name").innerHTML= i.toString();
}

function search()
{
    var s = document.getElementById("search_input").value;
    var people_found = 0;
    var j;
    for(j=0; j<guest_name_array.length; j++)
    {
        if(s==guest_name_array[j]) 
        {
            people_found = people_found+1;
        }
    }
    document.getElementById("search_p").innerHTML="name found "+people_found+" time/s";
    console.log("found name "+people_found+" time/s");
}
