import { useEffect, useState } from 'react';
import { Ticket } from '../types/tickets';
import { getTickets } from '../api/getTickets';

export const useTickets = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [tickets, setTickets] = useState<Ticket[]>()

    const getTicketsList = async () => {
        setIsLoading(true)
        setError('')
        try {
          const response = await getTickets()
          const sortedTickets = response.tickets.sort((a,b) => a.price - b.price)
    
          setTickets(sortedTickets)
        } catch (e) {
          setError(JSON.stringify(e))
        } finally {
          setIsLoading(false)
        }
    }
    useEffect(() => {
        getTicketsList()
    }, [])
    return {
        tickets,
        error,
        isLoading
    }
};