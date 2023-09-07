import { Button, Card, Col, Row } from 'antd';
import { Ticket } from '../../types/tickets';
import { declOfNum } from '../../utils/declOfNum';

const TicketItem = ({ticket}: {ticket: Ticket}) => {
    return (
        <Card>
            <Row gutter={40} align={'middle'} justify={'center'}>
                <Col span={6} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    {ticket.carrier}
                    <Button style={{ height: '100%' }} block>
                        <div>Купить за</div>
                        {ticket.price + ` ₽`}
                    </Button>
                </Col>
                <Col span={7}>
                    <div style={{ fontSize: '42px', fontWeight: '500' }}>{ticket.arrival_time}</div>
                    <div>{ticket.origin + ', ' + ticket.origin_name}</div>
                    <div>
                        {new Date(ticket.arrival_date).toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'short' })}
                    </div>
                </Col>
                <Col span={4}>
                    <div>{ticket.stops + ' ' + declOfNum(ticket.stops, ['пересадка', 'пересадки', 'пересадок'])}</div>
                    <div>-</div>
                </Col>
                <Col span={7}>
                    <div style={{ fontSize: '42px', fontWeight: '500' }}>{ticket.departure_time}</div>
                    <div>{ticket.destination_name + ', ' + ticket.destination}</div>
                    <div>
                        {new Date(ticket.departure_date).toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'short' })}
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default TicketItem;