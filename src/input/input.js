import React, {useState, useEffect} from 'react';
import './input.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'



function Input() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');
    
        setName(result);
      };
    const ageAsNumber = Number(age);

    const [dateOfBirth, setDateOfBirth] = useState('');

    useEffect(() => {
        setShowCalendar(false);
    }, [dateOfBirth])
    
    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };
    
    const onChange = (selectedDate) => {
      let newDate = selectedDate;
      newDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(selectedDate);

        setDateOfBirth(newDate);
        toggleCalendar();
        console.log(newDate);
    };
    
  return (
    <div className="Input">
        <label className='Input_name'>
        Name:
        <input
          value={name}
          onChange={handleChange}
          type="text"
        />
      </label>
      <label className='Input_age'>
        Age:
        <input
          value={age}
          onChange={e => Number(e.target.value)<150 ? setAge(e.target.value) : ''}
          type="number"
        />
      </label>
      <label className='Input_dateOfBirth'>
        Date of birth:
        <input type="text" onClick={toggleCalendar} value = {dateOfBirth}/>
      {showCalendar && (
        <Calendar
          onChange={onChange}
          value={dateOfBirth}

        />
      )}

        </label>
        <h1>
        {name !== '' &&
        <p>Your name is {name}.</p>
      }
      {ageAsNumber > 0 &&
        <p>Your age is {ageAsNumber} years.</p>
      }
      {dateOfBirth !=='' &&
        <p>Your date of birth is {dateOfBirth}.</p>
      }
      </h1>
    </div>
  );
}

export default Input;
