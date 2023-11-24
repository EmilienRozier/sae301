const submit = document.getElementById("submit")


submit.addEventListener("click", function (event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const subject = document.getElementById("subject").value;
    const details = document.getElementById("details").value;
    const renderTypeselect = document.getElementById("renderTypeSelect").value;
    const moodleLink = document.getElementById("moodleLink").value;
    const tpoutd = document.getElementById("tpoutd").value;

    if (date === "" || subject === "" || details === "" || renderTypeselect === "" || tpoutd === "") {
        alert("Veuillez remplir tous les champs");
    } else {
        var tp = "";
        if (tpoutd === "tp") {
            var user = localStorage.getItem('user')
            const userJson = JSON.parse(user)
            tp = userJson.groupeTP
        } else {
            var user = localStorage.getItem('user')
            const userJson = JSON.parse(user)
            tp = userJson.groupeTD
        }


        var json = {
            "date": date,
            "title": subject,
            "details": details,
            "renderType": renderTypeselect,
            "visibility": false,
        }

        if (tpoutd === "tp") {
            json["tp"] = tp;
        } else {
            json["td"] = tp;
        }

        if (moodleLink !== "" || moodleLink !== null) {
            json["moodleLink"] = moodleLink;
        }

        var i = 0;

        while (localStorage.getItem(`data${i}`) !== null) {
            i++;
        }

        localStorage.setItem(`data${i}`, JSON.stringify(json));

        console.log(json)
    }

});