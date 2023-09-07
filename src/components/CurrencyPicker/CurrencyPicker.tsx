import { Radio, Typography } from 'antd';

const currency = [
    { value: 'RUB', label: 'RUB' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
]

export const CurrencyPicker = () => {
    return (
        <>
            <Typography.Title 
                level={5} 
                style={{ marginTop: 0 }}
            >
                ВАЛЮТА
            </Typography.Title>
            <Radio.Group 
                size='large' 
                defaultValue={'RUB'} 
                options={currency} 
                optionType='button' 
            />
        </>
    );
};
