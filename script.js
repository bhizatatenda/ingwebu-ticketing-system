const BIN_ID =  '66cdcecaacd3cb34a87a3d44';
const API_KEY = '$2a$10$L/qiQCRu7BNagbye3iuK0.GBEG.v/9b99l7eRbIONIO6dkuerLHb6';

async function getTickets() {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: {
            'X-Master-Key': API_KEY
        }
    });
    const data = await response.json();
    return data.record.tickets || [];
}

async function addTicket(ticket) {
    const currentData = await getTickets();
    currentData.push(ticket);
    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY
        },
        body: JSON.stringify({ tickets: currentData })
    });
}

// ... rest of your script.js file remains the same

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
