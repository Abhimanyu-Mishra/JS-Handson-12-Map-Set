str="abcadeecfb"
let s= new Set()
for(let i=0; i<str.length; i++){
    s.add(str[i])
}
news=""
for(let a of s){
news += a
}
console.log(news)

str1="abcadeecfb"
let map = new Map()
for(let i=0; i<str1.length; i++){
  if(map.has(str1[i])){
let value = map.get(str1[i])
    map.set(str1[i], value+1)
  }
  else{
    map.set(str1[i],1)
  }
}
for(let [k,v] of map){
    console.log(k+'='+v);
}


