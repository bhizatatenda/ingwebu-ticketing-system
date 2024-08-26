const BIN_ID = 66bf0f3ce41b4d34e4211164; // Replace with your actual Bin ID
const API_KEY = $2a$10$L/qiQCRu7BNagbye3iuK0.GBEG.v/9b99l7eRbIONIO6dkuerLHb6; // Replace with your actual API key

async function getTickets() {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: {
            'X-Master-Key': API_KEY
        }
    });
    const data = await response.json();
    return data.record || [];
}

async function addTicket(ticket) {
    const tickets = await getTickets();
    tickets.push(ticket);
    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY
        },
        body: JSON.stringify(tickets)
    });
}

function displayTicket(ticket, container) {
    const ticketElement = document.createElement('div');
    ticketElement.className = 'ticket';
    ticketElement.innerHTML = `
        <h3>Ticket #${ticket.id}</h3>
        <p><strong>Name:</strong> ${ticket.name}</p>
        <p><strong>Email:</strong> ${ticket.email}</p>
        <p><strong>Department:</strong> ${ticket.department}</p>
        <p><strong>Issue:</strong> ${ticket.issue}</p>
        <p><strong>Status:</strong> ${ticket.status}</p>
    `;
    container.appendChild(ticketElement);
}
