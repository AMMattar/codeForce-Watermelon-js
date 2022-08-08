function watermelon(num){
  if(num % 2 === 0){
    console.log("YES");
  }else {
    console.log("NO");
  }
}

var num = readline().split(" ").map(x => parseInt(x));

watermelon(num)
