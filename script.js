// aos
AOS.init()

// cauntdown
simplyCountdown('.simply-countdown', {
    year: 2023, // required
    month: 12, // required
    day: 28, // required
    hours: 8, // Default is 0 [0-23] integer
    words: { //words displayed into the countdown
        days: { singular: 'hari', plural: 'days' },
        hours: { singular: 'jam', plural: 'hours' },
        minutes: { singular: 'menit', plural: 'minutes' },
        seconds: { singular: 'detik', plural: 'seconds' }
    },
    plural: false, //use plurals
});

// buka undangan
function disableScroll() {

    window.onscroll = ()=>{
        window.scrollTo({
            top: 0,
            // behavior: "auto"
        })
        document.querySelector("html").style.scrollBehavior="auto"
    }
}

function enableScroll() {
    document.querySelector("html").style.scrollBehavior="smooth"
    window.onscroll = ()=>{
    }
}

// disableScroll()

//google sheet, supaya setelah kirim, ga ke app kita
window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Konfirmasi kehadiran berhasil terkirim!");
      })
    });
  });


  //nama tamu undangan
  const urlparams = new URLSearchParams(window.location.search);
  const nama = urlparams.get("nama");
  console.log(nama);

  document.querySelector(".diundang").innerHTML = nama;
  document.querySelector("#nama").value = nama;