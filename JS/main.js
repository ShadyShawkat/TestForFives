$(document).ready(() => {
    $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=0c9d9a2d68f7402c9115ec1157ea8add", function(data) {
        const country = data.country;
        if (country == "Egypt") {
            $("#mainIframe").attr("src", "Egyptians/index.html");
        } else {
            $("#mainIframe").attr("src", "Others/index.html");
        }
    })
})