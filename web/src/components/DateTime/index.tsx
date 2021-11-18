import React from 'react';
import { StyledDateTimeContainer, StyledDateContainer ,StyledMonth, StyledDate, StyledTimeContainer } from './datetime.style';
import dayjs from 'dayjs';

interface props{};
const DateTime:React.FC<props> = ({

}) => {
    const monthList:string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const Month = monthList[dayjs().month()]
    const Time = new Date().toLocaleTimeString()

    return (
        <StyledDateTimeContainer>

            <StyledTimeContainer>
                {Time}
            </StyledTimeContainer>

            <StyledDateContainer>
                <StyledMonth>{Month}</StyledMonth>
                <StyledDate>{dayjs().day()} / {dayjs().daysInMonth()}</StyledDate>
            </StyledDateContainer>

            
        </StyledDateTimeContainer>
    )
}

export default DateTime;