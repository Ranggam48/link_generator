var kalimat = document.querySelector("#kalimat")
    .value = `
Assalamualaikum wr wb  
Yth. $nama$

Bismillahirrahmanirrahim
Tanpa mengurangi rasa hormat,
kepada Bapak/Ibu/Sdr/i dan teman teman sekalian melalui pesan singkat ini kami ingin mengundang untuk berkenan hadir pada acara pernikahan kami :

                Indah
                                  &
                 Aji

Berikut terlampir link info lengkap dari acara :

https://indahajiwedding.site/?n=$nama$

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Sdr/i dan teman teman sekalian berkenan untuk hadir dan memberikan doa restu

Wassalamualaikum wr wbzzz`;


function generate() {

    let form = document.querySelector(".form");
    var namaNama = document.querySelector("#nama").value;

    let nama = namaNama.split("\n"); // memasukan nama2 undangan ke tiap array
    let kata = kalimat.split("$"); // pemisah kalimat ucapan dengan nama & link

    for (let i = 0; i < nama.length; i++) {

        let namaLink = nama[i].replaceAll(" ", "+") // mengganti spasi pada nema dengan karakter +

        let link = `${kata[0]} ${nama[i]} ${kata[2]}${namaLink}`; //Menggabung kalimat ucapan dengan nama dan link
        let hasil = document.createElement("textarea");// Mentarget textarea
        hasil.value = link; // memasukan ucapan pada hasil
        hasil.className = "btn";
        hasil.id = "hasil" + i;
        form.appendChild(hasil);// meletakan hasil setelah form input 

        let btn = document.createElement("button") // membuat button
        btn.innerHTML = "Copy text";
        btn.className = "hasil" + i;
        form.appendChild(btn);
        btn.addEventListener("click", function (e) {
            //text += i.toString;
            console.log(e.target.className);
            let copy = document.querySelector(`#${e.target.className}`);
            copy.select();
            copy.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copy.value);
            alert("Berhasil copy")
            console.log("ok");
        });
    }
}