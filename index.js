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


function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}