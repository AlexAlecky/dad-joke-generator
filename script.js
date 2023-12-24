const jokeEl = document.getElementById('joke');
const btnEl = document.getElementById('btn');

const apiKey = "F2Jv0RrVVQ0VpGyx5TEI9g==c7lx43OEFVDYl607"

  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey
    }
  }

  const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


  async function grabJoke() {
    try {
      jokeEl.innerHTML = 'loading..'
      btnEl.innerHTML = 'loading...'
      btnEl.disabled = true
      const response = await fetch(apiUrl, options);
      const data = await response.json()
      btnEl.innerHTML = 'Tell me a joke'
      btnEl.disabled = false
      jokeEl.innerHTML = data[0].joke
      } catch (error) {
        jokeEl.innerHTML = 'An error happened try again later'
        btnEl.innerHTML = 'Tell me a joke'
      }
    }
  

  
btnEl.addEventListener('click', grabJoke)