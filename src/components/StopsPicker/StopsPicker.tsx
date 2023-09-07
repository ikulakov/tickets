import { Checkbox, Typography } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

interface StopsPickerProps {
    filterTickets: (value: CheckboxValueType[]) => void
}
const stopsOpt = [
    { value: 0, label: "Без пересадок" },
    { value: 1, label: "1 пересадка" },
    { value: 2, label: "2 пересадки" },
    { value: 3, label: "3 пересадки" },
]
export const StopsPicker = ({ filterTickets }: StopsPickerProps) => {
    return (
        <>
            <Typography.Title 
                level={5} 
                style={{ marginTop: 0}}
            >
                КОЛИЧЕСТВО ПЕРЕСАДОК
            </Typography.Title>
            <Checkbox.Group 
                options={stopsOpt} 
                onChange={filterTickets}
                style={{ 
                    display: "flex", 
                    flexDirection: 'column'
                }}
            />
        </>
    );
};
