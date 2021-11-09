let A=[1,2,22,-33,-67,-78,7,9,-3,-7,-5,6,-8888,-9999,555,-7777,560,678,891,-897,-965];
 let sortedArr=A.filter(p=> p>=-9 && p<=9)
 if(sortedArr.length)
 {
  let B= sortedArr.filter(e=> e>=0 && e<=9)
  B.sort();
  if(B.length){
      let value=B.pop();
      console.log(value);
  }
  else{
      console.log('no positive single digit');
  }   
 }
else{
    console.log('there are no single digits');
}
