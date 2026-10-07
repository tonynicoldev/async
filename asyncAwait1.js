function getSmallNum(num) {
  let numPromise = new Promise((res, rej) => {
    setTimeout(cbTimeout, 2000, res, rej, num)
  })
  return numPromise
}


function cbTimeout(resolve, reject, num) {
  if (num < 5)
    resolve(`${num} is good`)
  else
    reject(`${num} is too big`)
}

async function checkSmallNum(num) {
  try {
    const result = await getSmallNum(num)
    console.log(`${result}`)
  } catch (err) {
    console.log(`${err}`)
  } finally {
    console.log(`Finally`)
  }
}

checkSmallNum(4)
console.log("Returned from first call")
checkSmallNum(5)
console.log("Done")

