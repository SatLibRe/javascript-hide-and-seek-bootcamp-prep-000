function getFirstSelector(string){
  return document.querySelector(string)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function deepestChild(){
  var deep = document.getElementById("grand-node").querySelectorAll("div");
  return deep[deep.length-1]
}