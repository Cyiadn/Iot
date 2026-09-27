const button = document.querySelector(".tombol-led");
const button2 = document.querySelector(".tombol-led2");
const button3 = document.querySelector(".tombol-led3");
const button4 = document.querySelector(".tombol-led4");

const image = document.querySelector(".image-led img");
const image2 = document.querySelector(".image-led2 img");
const image3 = document.querySelector(".image-led3 img");
const image4 = document.querySelector(".image-led4 img");

const status = document.querySelector(".kondisi");


button.addEventListener("click", function () {
    if (button.textContent == "OFF") {
        fetch("http://192.168.1.9/")
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {

                console.log(data);
            })
            .catch(function (error) {
                console.error("Terjadi error saat fetch data:", error);
            });

        image.src = "led_on.png";
        button.textContent = "ON";
    } else {
        fetch("d")
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {

                console.log(data);
            })
            .catch(function (error) {
                console.error("Terjadi error saat fetch data:", error);
            });

        button.textContent = "OFF";
        image.src = "led_off.png";

    }
})

button2.addEventListener("click", function () {
    if (button2.textContent == "OFF") {
        fetch("p")
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {

                console.log(data);
            })
            .catch(function (error) {
                console.error("Terjadi error saat fetch data:", error);
            });

        image2.src = "led_on.png";
        button2.textContent = "ON";
    } else {
        fetch("")
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {

                console.log(data);
            })
            .catch(function (error) {
                console.error("Terjadi error saat fetch data:", error);
            });

        button2.textContent = "OFF";
        image2.src = "led_off.png";

    }
})

button3.addEventListener("click", function () {
    if (button3.textContent == "OFF") {
        fetch("3")
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {

                console.log(data);
            })
            .catch(function (error) {
                console.error("Terjadi error saat fetch data:", error);
            });

        image3.src = "led_on.png";
        button3.textContent = "ON";
    } else {
        fetch("")
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {

                console.log(data);
            })
            .catch(function (error) {
                console.error("Terjadi error saat fetch data:", error);
            });

        button3.textContent = "OFF";
        image3.src = "led_off.png";

    }
})
console.log("selmaat datang");
