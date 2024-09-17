var kalimat = document.querySelector("#kalimat")
    .value = `
Assalamu'alaikum Wr. Wb

Yth. $nama$

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara kami :

*Indah Pertiwi & Aji Triansah*

Berikut link undangan kami untuk info lengkap dari acara bisa kunjungi :
 
https://indahajiwedding.site/?n=$nama$

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Mohon maaf perihal undangan hanya di bagikan melalui  pesan ini. Terima kasih banyak atas perhatiannya.

Wassalamu'alaikum Wr. Wb.
Terima Kasih.`;


function generate() {

    var kalimat = document.querySelector("#kalimat");

    let form = document.querySelector(".form");
    var namaNama = document.querySelector("#nama").value;

    let nama = namaNama.split("\n"); // memasukan nama2 undangan ke tiap array
    let kata = kalimat.split("$"); // pemisah kalimat ucapan dengan nama & link

    for (let i = 0; i < nama.length; i++) {

        let namaLink = nama[i].replaceAll(" ", "+") // mengganti spasi pada nema dengan karakter +

        let link = `${kata[0]} ${nama[i]} ${kata[2]}${namaLink} ${kata[4]}`; //Menggabung kalimat ucapan dengan nama dan link
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