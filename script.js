function getTickets() {
    return JSON.parse(localStorage.getItem('tickets')) || [];
}

function addTicket(ticket) {
    const tickets = getTickets();
    tickets.push(ticket);
    localStorage.setItem('tickets', JSON.stringify(tickets));
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