const randomButton = document.getElementById("random-button")
const namaDoa = document.getElementById("nama-doa")
const doaLatin = document.getElementById("latin")

const apiUrl = "https://dummyapi.online/api/movies"
async function fetchRandomDoa() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    // const doaUrl = data.movie
    // const latinUrl = data.latin

    // namaDoa.textContent = doaUrl
    doaLatin.textContent = data
  } catch (error) {
    console.error("Error fetching random doa:", error)
  }
}

randomButton.addEventListener("onClick", fetchRandomDoa)

fetchRandomDoa()
