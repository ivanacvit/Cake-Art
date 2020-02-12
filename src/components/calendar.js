import React from "react";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays"
import "react-datepicker/dist/react-datepicker.css";

import "../../styles/calendar.css"

class Calendar extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={subDays(new Date(), 0)}
        className="placeholder"
      />
    );
  }
}

export default Calendar

// () => {
//     const [startDate, setStartDate] = useState(null);
//     return (
//       <DatePicker
//         selected={startDate}
//         onChange={date => setStartDate(date)}
//         minDate={subDays(new Date(), 0)}
//         placeholderText="Select a date after 5 days ago"
//       />
//     );
//   };