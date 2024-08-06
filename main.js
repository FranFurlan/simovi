let clients = 5639;
let infoClients = document.querySelector(".client");
setInterval(() => {
    clients++;
    infoClients.textContent = clients; 
}, 2000);
