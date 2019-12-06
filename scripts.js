let falcon = document.getElementById('falcon');
let saber = document.getElementById('saber');
let MillenniumFalcon = document.getElementById('MillenniumFalcon');
let Lightsaber = document.getElementById('Lightsaber');
let TotalPower = document.getElementById('TotalPower');

  function RandomMillenniumFalcon() {
      let rnd = Math.floor(Math.random() * (7-1+1))+1;
      MillenniumFalcon.value = rnd;
  }

  function RandomLightsaber() {
      let rnd = Math.floor(Math.random() * (7-1+1))+1;
      Lightsaber.value = rnd;
  }

  function TotalPowerCalculation() {
      TotalPower.value = Number(MillenniumFalcon.value) + Number(Lightsaber.value);
  }

  falcon.onclick = function () {
    RandomMillenniumFalcon();
    if (this.style.border == '3px solid grey') {
      this.style.border = '3px solid green';
    } else {
      this.style.border = '3px solid grey';
      MillenniumFalcon.value = '0';
    }
    TotalPowerCalculation();
  }

  saber.onclick = function () {
    RandomLightsaber();
    if (this.style.border == '3px solid grey') {
      this.style.border = '3px solid green';
    } else {
      this.style.border = '3px solid grey';
      Lightsaber.value = '0';
    }
    TotalPowerCalculation();
  }
