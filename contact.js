function contact() {
    var script_url = "https://script.google.com/home/projects/1VUpdehlkfI_QpTuMTRP64l3q_RVA94f9W-EkiLYYLFRiGPkd0fY5JI1X/edit";
    //get data from form
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    //send data
    var url = script_url + "?callbac\k=thanks&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);
    jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}

function thanks() {
    //confirmation
    alert("Thanks, I'll get back to you soon.");
}
