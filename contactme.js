$(document).ready(function () {
   
    $("#contactForm").validate();

  
    $("#phone").mask("(000) 000-0000");

    // Autocomplete for country input
    var countries = [
        "United States",
        "Canada",
        "United Kingdom",
        "Germany",
        "France",
        "Italy",
        "Spain",
        "Australia",
        "Japan",
        "China",
        "India",
        "Brazil",
        "Mexico",
        "Turkey",
        "Rest of the World"
    ];
    $("#country").autocomplete({
        source: countries
    });

    $("#date").datepicker({
        dateFormat: "yy-mm-dd"
    });
});
