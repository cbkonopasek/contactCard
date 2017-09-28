$(document).ready(function() {
    // alert("working");

    $(document).on("click", ".card", function() {
        $(this).children("h2").toggle();
        var temp = $(this).children("p").text();
        $(this).children("p").text($(this).children("p").attr("data-description"));
        $(this).children("p").attr("data-description", temp);
        var newtemp = $(this).attr("class");
        $(this).attr("class", $(this).attr("data-taw"));
        $(this).attr("data-taw", newtemp);        
    })

    $("form").submit(function() {
        var entry = $(this).serializeArray();
        console.log(entry);
        for (each in entry) {
            if (entry[each].value == "") {
                alert("Please fill out all feilds");
                return false;
            }
        }

        $("#allcards").append("<div class='card center hidden' data-taw='card left scroll'><h2>" + entry[0].value + " " + entry[1].value + "</h2><p data-description=\"" + entry[2].value + "\">Click for description</p></div>");



        $(".tf").val("");

        return false;
    })
})