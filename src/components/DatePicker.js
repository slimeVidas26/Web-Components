import React from 'react';
import '@vaadin/vaadin-date-picker';


const DatePicker = ()=>{
    return(
        <div className="container">
            <h4 className="center">Date Picker</h4>
      {<vaadin-date-picker label="When were you born?"></vaadin-date-picker>}
      </div>
    )
}
export default DatePicker;