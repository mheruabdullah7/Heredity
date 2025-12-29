# TODO: Fix Paths After Moving index.html to Root

- [ ] Update index.html: Change href="loginguru.html" to "html/loginguru.html", href="register.html" to "html/register.html", window.location = "beranda.html" to "html/beranda.html"
- [ ] Update html/beranda.html: window.location.href = "index.html" to "../index.html"
- [ ] Update html/register.html: href="index.html" to "../index.html", document.location.href = "index.html" to "../index.html"
- [ ] Update html/loginguru.html: href="index.html" to "../index.html"
- [ ] Update html/petunjuk-aplikasi.html: window.location = "../html/index.html" to "../index.html"
- [ ] Update html/profil.html: document.location.href = "../../index.html" to "../index.html"
- [ ] Update js/db/dataSiswa.js: "../../html/index.html" to "../../index.html" (two instances)
