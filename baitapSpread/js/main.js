let scaleSpan = () => {
  let text = document.querySelector(".heading").innerHTML;
  let textArray = [...text];
  //   console.log("first", textArray);
  let content = "";
  textArray.map((item) => {
    content += `<span>${item}</span>`;
  });
  document.querySelector(".heading").innerHTML = content;
};
scaleSpan();
