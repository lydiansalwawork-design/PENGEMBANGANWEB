var HALAMAN = {
  "":             { id: "p-home",         menu: "home",         judul: "Beranda",        tampil: tampilBeranda },
  "produk":       { id: "p-produk",       menu: "produk",       judul: "Produk bunga",   tampil: tampilProduk },
  "form-pesanan": { id: "p-form-pesanan", menu: "form-pesanan", judul: "Form pemesanan", tampil: tampilForm }
};

function pindahHalaman() {
  var kunci = decodeURIComponent(location.hash).replace("#/", "");
  var halaman = HALAMAN[kunci] || HALAMAN[""];

  // sembunyikan semua section, lalu tampilkan yang dipilih
  var semuaSection = document.querySelectorAll(".page");
  for (var i = 0; i < semuaSection.length; i++) {
    semuaSection[i].hidden = true;
  }
  document.getElementById(halaman.id).hidden = false;

  // tandai menu yang aktif
  var semuaMenu = document.querySelectorAll("[data-nav]");
  for (var j = 0; j < semuaMenu.length; j++) {
    if (semuaMenu[j].dataset.nav === halaman.menu) {
      semuaMenu[j].setAttribute("aria-current", "page");
    } else {
      semuaMenu[j].removeAttribute("aria-current");
    }
  }

  halaman.tampil();
  document.title = halaman.judul + " - Toko Bunga Lengkap Ciputat";
  window.scrollTo(0, 0);
}

window.onhashchange = pindahHalaman;
pindahHalaman();

function ubahSapaan() {
  document.getElementById("sapaan").innerHTML =
    "Halo! Selamat datang di Petal & Poetry.";
}
function tampilBeranda() {
  document.getElementById("p-home").innerHTML = `
    <div class="pg">
      <div class="hero">
        <h1>Petal & Poetry</h1>
        <p>Buket, bunga meja, standing flower, dan bunga papan untuk berbagai acara. Lihat produk kami, lalu isi form pemesanan.</p>
        <div class="row">
          <a class="btn" href="#/produk">Lihat produk bunga</a>
          <a class="btn o" href="#/form-pesanan">Pesan sekarang</a>
        </div>
      </div>

      <div class="info">
        <h2>ABOUT US</h2>
        <p>Welcome to Petal & Poetry!
        <br>

Petal & Poetry adalah toko bunga yang menghadirkan berbagai pilihan buket cantik untuk menemani momen spesialmu. Mulai dari wisuda, ulang tahun, anniversary, hingga hadiah sederhana untuk orang tersayang, kami percaya bahwa setiap bunga dapat menyampaikan perasaan dengan cara yang istimewa.
