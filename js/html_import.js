/* W3Data ver 1.31 by W3Schools.com */
function w3IncludeHTML(cb) {
    let z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            elmnt.innerHTML = this.responseText;
            elmnt.removeAttribute("w3-include-html");
            w3IncludeHTML(cb);
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
    if (cb) cb();
    // Nav-link active styling for select pages
    if (document.querySelector("[data-page='homePage']")) {
        document.querySelector('#navHome').classList.add('active');
    }
    if (document.querySelector("[data-page='menuPage']")) {
        document.querySelector('#navMenu').classList.add('active');      
    }
    if (document.querySelector("[data-page='reservationPage']")) {
        document.querySelector('#navReservation').classList.add('active');
    }
    if (document.querySelector("[data-page='locationPage']")) {
        document.querySelector('#navLocation').classList.add('active');
    }
    if (document.querySelector("[data-page='loginPage']")) {
        document.querySelector('#navLogin').classList.add('active');
    }
    if (document.querySelector("[data-page='aboutUsPage']")) {
        document.querySelector('#navAboutUs').classList.add('active');
    }
}

