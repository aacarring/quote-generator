const quote = document.getElementById('quote');
const button = document.getElementById('button');

function generateQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quote.innerHTML = `
            <p class="quote">${data.content} —${data.author}</p>
            `;
  });
}

button.addEventListener('click', generateQuote);