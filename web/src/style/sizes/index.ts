import {default as BreakPoints} from './breakpoints';
import {default as Margins_Paddings} from './marginPadding';


const Sizes = {
    BreakPoints:BreakPoints,
    Global:{
        Margins:Margins_Paddings.Global.Margins,
        Paddings:Margins_Paddings.Global.Padding
    },
};

export default Sizes;