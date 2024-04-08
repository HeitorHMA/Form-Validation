import checkPassword from "./checkPassword";
import checkZIP from "./checkZIP";


window.onload = () => {
    document.getElementById("userCountry").onchange = checkZIP;
    document.getElementById("userZip").oninput = checkZIP;
    document.getElementById("userPasswordConfirm").oninput = checkPassword;
  };