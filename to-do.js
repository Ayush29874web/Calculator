let btn = document.querySelector("#btn");
let new1 = document.querySelector("h2");
let compelete = document.querySelector("#compelete");
let incompelete = document.querySelector("#incomp");

let count = 0;
let i = 0;

btn.addEventListener("click", () => {
  let task = document.querySelector(".task").value;
  count++;

  let newd = "newdiv" + count;
  newd = document.createElement("div");
  let inp = document.createElement("input");
  let para = document.createElement("p");
  let del = document.createElement("button");
  let edit = document.createElement("button");

  del.className = "bt";
  edit.className = "bt1";
  newd.className = "mess";
  new1.after(newd);
  para.className = "content";
  para.innerText = task;
  inp.type = "checkbox";
  newd.prepend(inp);
  inp.after(para);
  del.innerText = "delete";
  para.after(del);
  edit.innerText = "edit";
  del.after(edit);
  document.querySelector(".task").value = "";
  incompelete.innerText = "incomplete " + count;

  del.addEventListener("click", () => {
    newd.remove();
    if (inp.checked) {
      i--;
      compelete.innerText = "compelete" + i;
    } else {
      count--;
      incompelete.innerText = "incomplete " + count;
    }
  });

  inp.onchange = function () {
    if (inp.checked) {
      i++;
      count--;
      compelete.innerText = "compelete" + i;
      incompelete.innerText = "incomplete " + count;
      para.style.textDecoration = "line-through";
    } else {
      i--;
      count++;
      compelete.innerText = "compelete" + i;
      incompelete.innerText = "incomplete " + count;
      para.style.textDecoration = "none";
    }
  };

  edit.addEventListener("click", () => {
    let etask = prompt("enter your task :");
    para.innerText = etask;
  });
});
