document.getElementById("submit").addEventListener('click', function () {
    console.log(text)
})

function validateForm() {
    var name = document.forms ["message-form"]["full-name"].value;
    var date = document.forms ["message-form"]["birth-date"].value;
    var gender = document.forms ["message-form"]["gender"].value;
    var message = document.forms ["message-form"]["message"].value;

    if (name == "" || date == "" || gender == "" || message == "" ) {
    alert("please complete your data!");
    return false;
    }

    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = date;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-message").innerText = message;
    return false
    }

