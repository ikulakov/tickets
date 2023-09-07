import { useCallback, useState } from 'react';
import { TicketsList } from './components/TicketsList/TicketsList';
import { Ticket } from './types/tickets';
import { Card, Layout, Space } from 'antd';
import { CurrencyPicker } from './components/CurrencyPicker/CurrencyPicker';
import { StopsPicker } from './components/StopsPicker/StopsPicker';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useTickets } from './hooks/useTickets';

function App() {
  const { error, isLoading, tickets } = useTickets()
  const [filteredItems, setFilteredItems] = useState<Ticket[]>()
  
  const filterTickets = useCallback((value: CheckboxValueType[]) => {
    if (value.length) {
      setFilteredItems(tickets?.filter(el => value.includes(el.stops)))
    } else {
      setFilteredItems(tickets)
    }
  }, [tickets])
  
  if (isLoading) {
    return <div>Загрузка...</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
    <div className='app'>
      <Layout className='layout'>
        <Layout.Sider 
          width={295} 
          style={{ background: 'transparent' }}
        >
          <Card>
            <Space 
              direction='vertical' 
              size={'large'}
            >
              <CurrencyPicker />
              <StopsPicker 
                filterTickets={filterTickets} 
              />
            </Space>
          </Card>
        </Layout.Sider>
        <Layout.Content>
          <TicketsList 
            tickets={filteredItems ?? tickets}
          />
        </Layout.Content>
      </Layout>
    </div>
  )
}

export default App
