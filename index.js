// let region = ["Baki", "Gence", "Sumqayit", "Quba", "Lenkaran", "Masalli", "Naxcivan"]
let url = "https://api.open-meteo.com/v1/forecast?latitude=40.38&longitude=49.89&hourly=temperature_2m&daily=weathercode,apparent_temperature_max,apparent_temperature_min&current_weather=true&timeformat=unixtime&start_date=2023-04-07&end_date=2023-04-13&timezone=auto";
fetch(url)
    .then(response => response.json())
    .then(data => {
        let current_weather = data.current_weather;
        current_weather=Math.floor(current_weather)
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });


let c = [];
let b = -5
for (let i = 0; i <= 45; i++) {
    c[i] = b;
    b++
}
console.log(c);

let icon20_45 = ["bi-brightness-high-fill", "bi-brightness-low-fill", "bi-brightness-alt-high-fill"];
let icon10_19 = ["bi-cloud-fill", "bi-cloud-sun-fill", "bi-clouds-fill"];
let icon0_9 = ["bi-cloud-drizzle-fill", "bi-wind"];
let icon_5_0 = ["bi-cloud-snow-fill", "bi-snow"];



let div = document.createElement("div");

// div.classList.add("w-75")
div.classList.add("container")

div.classList.add("div1")
div.classList.add("p-5")
// div.classList.add("gap-5")
div.classList.add("bg-secondary")



for (let y = 0; y < 7; y++) {

    for (let x = 0; x < 7; x++) {
        let item = Math.floor(Math.random() * c.length);
        let i = document.createElement("i");
        if (item >= 27 && item <= 45) {
            let ico = Math.floor(Math.random() * icon20_45.length);
            i.classList.add(icon20_45[ico]);
            i.classList.add("text-warning");
        } else if (item >= 16 && item <= 26) {
            let ico = Math.floor(Math.random() * icon10_19.length);
            i.classList.add(icon10_19[ico]);
            i.classList.add("text-info");
        } else if (item >= 6 && item <= 15) {
            let ico = Math.floor(Math.random() * icon0_9.length);
            if (ico == 0) {
                i.classList.add(icon0_9[ico]);
                i.classList.add("text-info-emphasis");
            } else {
                i.classList.add(icon0_9[ico]);
                i.classList.add("text-secondary-emphasis");
            }

        } else if (item >= 0 && item <= 5) {
            let ico = Math.floor(Math.random() * icon_5_0.length);
            i.classList.add(icon_5_0[ico]);
            i.classList.add("text-light");

        }


        let box = document.createElement("div");
        box.classList.add("box");
        // box.classList.add("shadow-sm");
        // box.classList.add("bg-primary-subtle");

        // box.classList.add("rounded");

        i.classList.add("bi");
        // i.classList.add("fs-1");
        i.classList.add("p-3");
        // let img = document.createElement("img")
        // img.src = (`img1.jpg`)

        let Baku = document.createElement("div");

        Baku.classList.add("d-flex");
        Baku.classList.add("flex-column");
        // baku.classList.add("bg-primary")
        Baku.classList.add("h-100");
        // Baku.classList.add("w_75");
        Baku.classList.add("align-self-center");
        Baku.classList.add("fs-2");
        Baku.classList.add("pt-5");
        // Baku.classList.add("border");
        Baku.classList.add("border-dark");

        let Baku5 = document.createElement("div");
        Baku5.classList.add("div5")
        // Baku.classList.add("mx-auto");

        let p = document.createElement("p");
        let degree = document.createTextNode(c[item]);
        let p1 = document.createElement("p");
        p1.classList.add("fst-italic");
        p.classList.add("fw-bold");
        p1.classList.add("text-secondary");
        // let city = document.createTextNode(region[y]);
        Baku.appendChild(Baku5)

        p.appendChild(degree)
        // p1.appendChild(city)
        Baku.appendChild(p)
        Baku.appendChild(p1)
        box.appendChild(i);
        box.appendChild(Baku);
        div.appendChild(box)
    }

}

document.body.appendChild(div);