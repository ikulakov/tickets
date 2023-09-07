import { Ticket } from "../types/tickets";

export const getTickets = async (): Promise<{tickets: Ticket[]}> => {
    const response = await fetch('/src/api/tickets.json');
    const data = await response.json();

    if (!data) {
        throw new Error('Bad request')
    }
    return data;
};

