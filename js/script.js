const waNumber = "6281234567890";

function showDetail(nama, masa, kecepatan, jenis, color, iconClass){
  document.getElementById('paketList').classList.add('d-none');
  document.getElementById('paketDetail').classList.remove('d-none');
  document.getElementById('modalTitle').innerText = 'Detail Paket';
  document.getElementById('btnBack').classList.remove('d-none');

  document.getElementById('detailNama').innerText = nama;
  document.getElementById('detailMasa').innerText = masa;
  document.getElementById('detailKecepatan').innerText = kecepatan;

  const icon = document.getElementById('detailIcon');
  icon.className = 'bi ' + iconClass;
  icon.style.color = color;

  const pesan = encodeURIComponent(
    `Halo, saya ingin membeli paket ${nama} (${masa}, ${kecepatan})`
  );
  document.getElementById('btnBeliWA').href =
    `https://wa.me/${waNumber}?text=${pesan}`;
}

document.getElementById('btnBack')?.addEventListener('click', () => {
  document.getElementById('paketList').classList.remove('d-none');
  document.getElementById('paketDetail').classList.add('d-none');
  document.getElementById('modalTitle').innerText = 'Pilih Paket Hotspot';
  document.getElementById('btnBack').classList.add('d-none');
});

function togglePassword(){
  const pw = document.getElementById('passwordField');
  const eye = document.getElementById('eyeIcon');
  if(pw.type === 'password'){
    pw.type = 'text';
    eye.classList.replace('bi-eye','bi-eye-slash');
  }else{
    pw.type = 'password';
    eye.classList.replace('bi-eye-slash','bi-eye');
  }
}

window.addEventListener('load', () => {
  const errorMessage = "$(error)";
  if(errorMessage){
    const toast = new bootstrap.Toast(
      document.getElementById('errorToast'),
      {delay:3000}
    );
    document.getElementById('errorToastBody').innerText = errorMessage;
    toast.show();
  }

  document.getElementById('title').innerHTML =
    window.location.hostname + " > MASUK DULU";
});
