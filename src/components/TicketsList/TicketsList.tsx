import { Space } from 'antd';
import { Ticket } from '../../types/tickets';
import TicketItem from '../TicketItem/TicketItem';

interface TicketsListProps {
    tickets?: Ticket[]
}

export const TicketsList = ({ tickets }: TicketsListProps) => {
    if (!tickets) {
        return <div>No data</div>
    }
    return (
        <Space 
            direction='vertical' 
            style={{ width: '100%' }}
        >
            {tickets.map((ticket, index) => (
                <TicketItem 
                    ticket={ticket} 
                    key={index}
                />
            ))}
        </Space>
    );
};
