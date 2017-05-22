currentPage = {};
currentPage.init = function() {
    console.log("AddPage :: init");
};
currentPage.back = function() {
    console.log("AddPage :: back");
    $("body").load(path + "pages/ListPage.html", function() {
        $.getScript(path + "js/ListPage.js", function() {
            if (currentPage.init) {
                currentPage.init();
            }
        });
    });
};

currentPage.add = function() {
    console.log("AddPage :: add");
    var name = $("#name").val();
    var officeNumber = $("#officeNumber").val();
    var phoneNumber = $("#phoneNumber").val();
    var email = $("#email").val();
    formData = {
        name: $("#name").val(),
        officeNumber: $("#officeNumber").val(),
        phoneNumber: $("#phoneNumber").val(),
        email: $("#email").val()
    }
    if (name == "") {
        alert("Please enter name");
    } else if (officeNumber == "") {
        alert("Please enter office number");
    } else if (phoneNumber == "") {
        alert("Please enter phone number");
    } else if (email == "") {
        alert("Please enter email");
    } else {
        $.ajax({
            type: "POST",
            url: "http://192.168.1.2/api/create_user.php",
            data: formData,
            dataType: "json",
            success: function(data) {
                alert("Add user success");
                $("body").load(path + "pages/ListPage.html", function() {
                    $.getScript(path + "js/ListPage.js", function() {
                        if (currentPage.init) {
                            currentPage.init();
                        }
                    });
                });
            },
            error: function() {
                alert("Add user failure");
            }
        });
    }
};