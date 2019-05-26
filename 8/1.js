
function vowelCount(line){
  count={
    'a':0,
    'e':0,
    'i':0,
    'o':0,
    'u':0
  }
  vowels=['a','e','i','o','u']
  line1=line.split("")
  console.log(line1)
  line1.forEach(function(word){
    if(vowels.includes(word.toLowerCase())){
      count[word]+=1
    }
  })
  return `a,e,i,o,u appear respectively ${count.a},${count.e},${count.i},${count.o},${count.u}`
}

console.log(vowelCount("Tour le de france"))
