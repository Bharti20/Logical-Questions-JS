function factorial(num){
    var multi=1
    var i=1
    while(i<=num){
        multi=multi*i
        i++
    }
    return multi
}
function prime(num){
  var i=1
  var count=0
  while(i<=num){
    if(num%i==0){
      count=count+1
    }i++
  }
  if(count==2){
    return "prime"
  }else{
    return "not prime"
  }
}
function perfect(num){
    var i=1
    var sum=0
    while(i<num){
        if(num%i==0){
            sum=sum+i
        }i++
    }if(sum==num){
        return "perfect no"
    }else{
        return "not perfect"
    }
}
function harsadNumber(num){
    var i=num
    var sum=0
    while(i>0){
      var store=i%10
      sum=sum+store
      i=Math.floor(i/10)
    }
    if (num%sum==0){
      return("Harsad number")
    }else{
      return("not Harsad")
    }
}
function main(number){
  console.log(factorial(number))
  console.log(prime(number))
  console.log(perfect(number))
  console.log(harsadNumber(number))
}
main(18)
 