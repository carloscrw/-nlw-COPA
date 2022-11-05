const calendarioCopa = [{
  fistDay:{
      date: "20/11",
      day: "domingo",
      games:[{   
        player1: "qatar",
        hour: "13:00",
        player2: "ecuador",
      }]
    },
  secondDay:{
    date: "20/11",
      day: "domingo",
      games:[{      
        player1: "qatar",
        hour: "13:00",
        player2: "ecuador",
      },
      {
        player1: "qatar",
        hour: "16:00",
        player2: "ecuador",
      }
    ]

  }

   
}]






function createGame(player1, hour, player2) {
  return `
  <li>
  <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}">
  <strong>${hour}</strong>  
  <img src="./assets/icon=${player2}.svg" alt="Bandeira do ${player2}">
  </li>
  `
}
let delay = 0.5;
function createCard(date, day, games) {
  delay = delay + 0.5;
  return `
<div class="card" style="animation-delay: ${delay}s">
<h2>${date} <span>${day}</span></h2>
<ul>
    ${games}
</ul>
</div>`
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) + 
  createCard("28/11", "segunda", createGame("swaziland", "13:00", "brazil") + createGame("portugal", "13:00", "uruguay")) + createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))






