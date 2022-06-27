document.querySelector("#btnKhoi1").addEventListener(
  "click",
  (getScore1 = () => {
    let toan = document.querySelector("#inpToan").value;
    let ly = document.querySelector("#inpLy").value;
    let hoa = document.querySelector("#inpHoa").value;

    document.querySelector("#tbKhoi1").innerHTML = diemTB(
      Number(toan),
      Number(ly),
      Number(hoa)
    );
  })
);
document.querySelector("#btnKhoi2").addEventListener(
  "click",
  (getScore2 = () => {
    let van = document.querySelector("#inpVan").value;
    let su = document.querySelector("#inpSu").value;
    let dia = document.querySelector("#inpDia").value;
    let anh = document.querySelector("#inpEnglish").value;
    document.querySelector("#tbKhoi2").innerHTML = diemTB(
      Number(van),
      Number(su),
      Number(dia),
      Number(anh)
    );
  })
);
let diemTB = (...diem) => {
  let tong = 0;
  diem.map((item) => {
    tong += item;
  });
  return tong / diem.length;
};
