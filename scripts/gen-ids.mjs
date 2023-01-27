import { nanoid } from 'nanoid'

const data = [
  {
    startDate: '9-1-2022',
    endDate: '',
    description: 'PA Day',
    appliesTo: 'Both',
  },
  {
    startDate: '9-5-2022',
    endDate: '',
    description: 'Labour Day',
    appliesTo: 'Both',
  },
  {
    startDate: '9-6-2022',
    endDate: '',
    description: 'First day of instruction',
    appliesTo: 'Both',
  },
  {
    startDate: '10-7-2022',
    endDate: '',
    description: 'PA Day',
    appliesTo: 'Both',
  },
  {
    startDate: '10-10-2022',
    endDate: '',
    description: 'Thanksgiving Day',
    appliesTo: 'Both',
  },
  {
    startDate: '11-25-2022',
    endDate: '',
    description: 'PA Day',
    appliesTo: 'Both',
  },
  {
    startDate: '12-23-2022',
    endDate: '1-6-2023',
    description: 'Winter Break',
    appliesTo: 'Both',
  },
  {
    startDate: '1-9-2023',
    endDate: '',
    description: 'School resumes',
    appliesTo: 'Both',
  },
  {
    startDate: '1-26-2023',
    endDate: '2-1-2023',
    description: 'Exams',
    appliesTo: 'Secondary',
  },
  {
    startDate: '1-27-2023',
    endDate: '',
    description: 'PA Day',
    appliesTo: 'Elementary',
  },
  {
    startDate: '2-3-2023',
    endDate: '',
    description: 'PA Day',
    appliesTo: 'Secondary',
  },
  {
    startDate: '2-6-2023',
    endDate: '',
    description: 'First day of instruction (Semester 2)',
    appliesTo: 'Secondary',
  },
  {
    startDate: '2-17-2023',
    endDate: '',
    description: 'PA Day',
    appliesTo: 'Both',
  },
  {
    startDate: '2-20-2023',
    endDate: '',
    description: 'Family Day',
    appliesTo: 'Both',
  },
  {
    startDate: '3-13-2023',
    endDate: '3-17-2023',
    description: 'Spring Break',
    appliesTo: 'Both',
  },
  {
    startDate: '4-7-2023',
    endDate: '',
    description: 'Good Friday',
    appliesTo: 'Both',
  },
  {
    startDate: '4-10-2023',
    endDate: '',
    description: 'Easter Monday',
    appliesTo: 'Both',
  },
  {
    startDate: '4-24-2023',
    endDate: '',
    description: 'PA Day',
    appliesTo: 'Both',
  },
  {
    startDate: '5-22-2023',
    endDate: '',
    description: 'Victoria Day',
    appliesTo: 'Both',
  },
  {
    startDate: '6-5-2023',
    endDate: '',
    description: 'PA Day',
    appliesTo: 'Elementary',
  },
  {
    startDate: '6-22-2023',
    endDate: '6-28-2023',
    description: 'Exams',
    appliesTo: 'Secondary',
  },
  {
    startDate: '6-29-2023',
    endDate: '',
    description: 'Last day of instruction',
    appliesTo: 'Secondary',
  },
  {
    startDate: '6-30-2023',
    endDate: '',
    description: 'Last day of instruction',
    appliesTo: 'Elementary',
  },
  {
    startDate: '6-30-2023',
    endDate: '',
    description: 'PA Day',
    appliesTo: 'Secondary',
  },
].map((item) => ({ id: nanoid(8), ...item }))

console.log(JSON.stringify(data, null, 2))
