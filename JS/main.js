function getDefaultAbout() {
    $("#content").load("about.html");
};
function getNews() {
    $("#content").load("news.html");
};
function getPrices() {
    $("#content").load("prices.html");
};
function getContact() {
    $("#content").load("contact.html");
};
function getGallery() {
    $("#content").load("gallery.html");
};
function validateFields() {
    $("#inputName, #inputEmail, #inputSubject, #inputMesg").on("keyup", function () {
        if (!this.checkValidity() && this.innerHtml == "") {
            $(this).css({ "border-color": " #ccc", "background-color": "#fff" });
            $(this).parent().find(".error-field").hide();
            $(this).parent().parent().parent().find(".form-group").css({ "margin-bottom": "15px" });
        }
        else if (!this.checkValidity() && !this.value == "") {
            $(this).css({ "border-color": " #900", "background-color": "#FDD" });
            $(this).parent().find(".error-field").show();
            $(this).parent().parent().parent().find(".form-group").css({ "margin-bottom": "0" });
        }
        else {
            $(this).css({ "border-color": " #ccc", "background-color": "#fff" });
            $(this).parent().find(".error-field").hide();
            $(this).parent().parent().parent().find(".form-group").css({ "margin-bottom": "15px" });
        }
    });
};