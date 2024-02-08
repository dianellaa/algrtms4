function palindrrome (word){
     let st = word.split('').join('').toLocaleLowerCase()
     for(let i=0; i<st.length/2 ; i++){
        if(x[i]!=x[x.length-i-1]){
            return false
        }
       
     }
     return true

}

let x ='Hello olleH'
console.log(palindrrome(x))
