window.onload = function () {
  i.onchange = function () {
    var tel = this.value;
    var tel_ = tel.replace(/\D+/g, "");
    if (setRus.checked && tel_[0] == 8) {
      tel_ = "3" + tel_.slice(1);
    }
    this.value = tel_;
  };
  s.onclick = function () {
    window.location = "tg://resolve?phone=" + i.value;
  };

  d50.onclick = function () {
    dSumm.value = 50;
    donnateF.submit();
  };
  d100.onclick = function () {
    dSumm.value = 100;
    donnateF.submit();
  };
  d150.onclick = function () {
    dSumm.value = 150;
    donnateF.submit();
  };

  warn_bt.onclick = function () {
    warn_bt.classList.add("active");
  };
};
