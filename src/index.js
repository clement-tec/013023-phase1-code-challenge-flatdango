// Your code here
const container = document.getElementsByName("list-container");
const ul = document.querySelector("#films")

fetch('http://localhost:3000/films')
.then((response) => response.json())
.then((data) => data.forEach(renderFilms))

const renderFilms = (films) => {
    console.log(films);
    
    
    const li = document.createElement("li");
    li.textContent = films.title
    li.style.cursor = "pointer";
    ul.appendChild(li)

    li.addEventListener("click", () => {
        const img = document.querySelector("#poster");
        img.src = films.poster
        
        const title = document.querySelector("#title")
        title.textContent = films.title

        const runtime = document.querySelector("#runtime")
        runtime.textContent = `${films.runtime}`

        const filmInfo = document.querySelector("#film-info")
        filmInfo.textContent = films.description
        
        const showtime = document.querySelector("#showtime")
        showtime.textContent = films.showtime

        const ticketNum = document.querySelector("#ticket-num")
        ticketNum.innerHTML = `Available tickets: ${(films.capacity) - (films.tickets_sold)}`;


        const btn = document.createElement("button");
        btn.textContent = "Buy ticket";
        btn.addEventListener('click', () => {
        // Check if the number of available tickets is 0
          if (parseInt(ticketNum.innerText.split('')) === 0) {
         // If it is, show an alert
           alert("Ticket Sold Out");
          } else {
          // Otherwise, decrement the number of available tickets by 1
          ticketNum.textContent = `Available tickets: ${parseInt(ticketNum.innerText.split('')) - 1}`;
          }
        });
    })
};