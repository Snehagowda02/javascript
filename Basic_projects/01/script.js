
const quotes = [
    "hi", "byee", "hello", "ckm ", "hsn", "blr"
]


const usedIndexes = new Set() // unique values
const p = document.getElementById("quote")

function generateQuote() {
if(usedIndexes.size >= quotes.length) {usedIndexes.clear}
while(true){
  const randomInx = Math.floor(Math.random()* quotes.length)

  if(usedIndexes.has(randomInx))  continue

  p.innerHTML = quotes[randomInx]
  usedIndexes.add(randomInx)
  break
    }
}
