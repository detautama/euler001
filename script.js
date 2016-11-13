function sum(){
		limit = document.getElementById("limittxt").value;
    var y = 0 ,total

    while (limit --){
      if ( limit % 3 === 0 || limit % 5 === 0 ){
        total = y+ limit;
        y=total;
      }
    }
confirm(total)
return total
}
