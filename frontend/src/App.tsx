
import { Calendar } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';
import { useState } from 'react';

function App () {
  const [date, setDate] = useState<Nullable<Date>>(new Date());
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500">Hello World</h1>
      <Calendar value={date} onChange={(e) => setDate(e.value)} />
    </>
  )
}

export default App
