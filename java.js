function searchProducts() {
    var input = document.getElementById('searchInput').value.toUpperCase();
    var products = document.getElementsByClassName('product-card');
    
    for (var i = 0; i < products.length; i++) {
        var title = products[i].getElementsByClassName('card-title')[0].innerText;
        if (title.toUpperCase().indexOf(input) > -1) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Menangani pengiriman form Sign Up
    document.getElementById('signupForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah form untuk reload halaman

        // Mengambil nilai input dari form
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

        // Validasi Password dan Konfirmasi Password
        if (password !== confirmPassword) {
            alert("Password dan Konfirmasi Password tidak sama!");
            return;
        }

        // Menyimpan data pengguna di LocalStorage (untuk demonstrasi saja)
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);

        // Menampilkan informasi yang dimasukkan
        document.getElementById('signupMessage').style.display = 'block';  // Menampilkan div signupMessage
        document.getElementById('displayName').innerText = name;  // Menampilkan nama
        document.getElementById('displayEmail').innerText = email;  // Menampilkan email
        document.getElementById('displayPassword').innerText = password;  // Menampilkan password (hati-hati di aplikasi nyata)

        // Menutup modal setelah form dikirim
        var modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
        modal.hide(); // Menutup modal

        // Clear form setelah submit
        document.getElementById('signupForm').reset();
    });
});