import { nanoid } from 'nanoid'

// It’s worth noting that the actual value is in the CSV file of the HDSB
// website, it was pretty messy and required a lot of cleanup.

// https://www.hdsb.ca/parents/Pages/Calendar/School-Year-Calendar-2023-2024.aspx
// I also dropped in the table code at `data/2022-2023/calendar-table-from-website.html`

const newData = [
  // ...enter array of events generated from CSV, I used ChatGPT for this step.
]

const data = newData.map((item) => ({ id: nanoid(8), ...item }))
console.log(JSON.stringify(data, null, 2))
