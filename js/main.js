
document.querySelector('button').addEventListener('click', getMeme)

function getMeme(){
  fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      // Randomly select a meme from the array
      let arr = data.data.memes
      let num = Math.floor(Math.random()*(arr.length + 1))

      // Add information from the API unto the webpage
      document.querySelector('h2').innerText = data.data.memes[num].name
      document.querySelector('img').src = data.data.memes[num].url

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}



