document.querySelectorAll("#offcanvasNavbar .nav-link").forEach(link => {
    link.addEventListener("click", function (e) {

        // Jalankan hanya jika tombol hamburger terlihat (mode mobile)
        if (window.innerWidth < 992) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            const offcanvasEl = document.getElementById("offcanvasNavbar");
            const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

            offcanvas.hide();

            offcanvasEl.addEventListener("hidden.bs.offcanvas", function handler() {
                target.scrollIntoView({ behavior: "smooth" });
                offcanvasEl.removeEventListener("hidden.bs.offcanvas", handler);
            }, { once: true });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    document.querySelectorAll("#offcanvasNavbar .nav-link").forEach(link => {
        link.addEventListener("click", function () {
            // Hanya di HP / tablet
            if (window.innerWidth < 992) {
                const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);

                if (offcanvas) {
                    offcanvas.hide();
                }
            }
        });
    });

});

function calculateWaste(){
    let tumbler = Number(document.getElementById("tumbler").value);
    let bag = Number(document.getElementById("bag").value);
    let lunchbox = Number(document.getElementById("lunchbox").value);
    let bottle = Number(document.getElementById("bottle").value);
    let straw = Number(document.getElementById("straw").value);

    // Estimasi gram sampah plastik yang berhasil dikurangi per minggu
    let gram = 0;

    gram += tumbler * 20;
    gram += bag * 8;
    gram += lunchbox * 25;
    gram += bottle * 30;
    gram += straw * 1;

    // Total per tahun
    let yearlyGram = gram * 52;
    let yearlyKg = yearlyGram / 1000;

    document.getElementById("hasil").style.display="block";

    document.getElementById("kg").innerHTML=
    "Kamu berhasil mengurangi sekitar <br><span style='font-size:45px;color:#2e7d32;font-weight:bold;'>"+
    yearlyKg.toFixed(2)+
    " Kg</span> sampah plastik per tahun.";

    let pesan="";
    let level="";
    let progress=0;

    if(yearlyKg<5){
        pesan="🌿 Awal yang bagus! Mulailah membiasakan gaya hidup Zero Waste.";
        level="🌱 Green Beginner";
        progress=25;
    } else if(yearlyKg<10){
        pesan="💚 Hebat! Kebiasaanmu mulai memberi dampak positif.";
        level="🍀 Eco Friend";
        progress=50;
    } else if(yearlyKg<20){
        pesan="🌎 Luar biasa! Kamu sudah membantu menjaga bumi.";
        level="♻ Eco Warrior";
        progress=75;
    }else{
        pesan="🏆 Selamat! Kamu adalah inspirasi Zero Waste.";
        level="👑 Zero Waste Hero";
        progress=100;
    }

    document.getElementById("pesan").innerHTML=pesan;
    document.getElementById("level").innerHTML=level;

    let bar=document.getElementById("progressBar");

    bar.style.width=progress+"%";
    bar.innerHTML=progress+"%";
}
