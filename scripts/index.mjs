import fs from 'fs'
import { Component, Property } from 'immutable-ics'
import slugify from 'slugify'

import dataJSON from '../data/2022-2023/elementary.json' assert { type: 'json' }
const { elementary: elementaryDates } = dataJSON

const schoolBoard = 'HDSB'

const onlyElementary = ({ appliesTo }) => appliesTo !== 'Secondary'
const formatData = ({
  appliesTo,
  startDate,
  endDate,
  description,
  ...rest
}) => ({
  startDate: new Date(startDate),
  endDate: new Date(endDate || startDate),
  created: new Date(),
  description: `${schoolBoard}: ${description}`,
  ...rest,
})

const filteredElemDates = elementaryDates.filter(onlyElementary).map(formatData)

const createICSEvent = ({ id, startDate, endDate, description, created }) => {
  if (!startDate || !description) {
    return console.log('Missing required data')
  }

  const cal = new Component({
    name: 'VCALENDAR',
    properties: [
      new Property({ name: 'VERSION', value: '2.0' }),
      new Property({ name: 'CALSCALE', value: 'GREGORIAN' }),
    ],
    components: [
      new Component({
        name: 'VEVENT',
        properties: [
          new Property({
            name: 'DTSTART',
            value: startDate,
            parameters: { VALUE: 'DATE' },
          }),
          new Property({
            name: 'DTEND',
            value: endDate,
            parameters: { VALUE: 'DATE' },
          }),
          new Property({
            name: 'CREATED',
            value: created,
          }),
          new Property({
            name: 'SUMMARY',
            value: description,
          }),
          new Property({
            name: 'LAST-MODIFIED',
            value: created,
          }),
          new Property({
            name: 'TRANSP',
            value: 'TRANSPARENT',
          }),
          new Property({
            name: 'UID',
            value: id,
          }),
          new Property({
            name: 'DTSTAMP',
            value: created,
          }),
          new Property({
            name: 'SEQUENCE',
            value: 1,
          }),
          new Property({
            name: 'X-APPLE-TRAVEL-ADVISORY-BEHAVIOR',
            value: 'AUTOMATIC',
          }),
        ],
      }),
    ],
  })

  const targetDir = 'dist'
  const icsFile = cal.toString()
  console.log(description)
  const formattedDescription = description
    .replace(new RegExp(`${schoolBoard}:`, 'g'), '') // remove schoolBoard: from description
    .toLowerCase()

  const slug = slugify(formattedDescription)
  const simplifiedCreatedDate = startDate.toISOString().slice(0, 10)
  const path = `./${targetDir}/${simplifiedCreatedDate}-${slug}-${id}.ics`

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir)
  }

  fs.writeFile(path, icsFile, (err) => {
    if (err) throw err
    console.log(`The file ${slug} has been saved!`)
  })
}

filteredElemDates.forEach((event) => createICSEvent(event))
