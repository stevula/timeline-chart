This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# AltSchool Timeline Challenge 1.0.2

## Getting Started

#### Prerequisites

- [node](https://nodejs.org/en/download/)

#### Installing

From project root (same directory as package.json) run:
```
npm install
```

#### Running

```
npm start
```

## Features
#### Basic Features
- Overlapping dates render on separate lanes.
- Makes efficient use of the lanes.
- Add events by clicking anywhere on the chart.
- Remove events by clicking "x" on the event.
- Record a (virtually) unlimited number of events.

#### Extra Features
- Shows summary of person’s contributions on event mouseover.
- Data is persisted via localStorage.
- Deployed on [Heroku](https://altschool-timeline-si57r2gu.herokuapp.com/).

#### Known Issues
- Duplicate names may cause issues with React (names used as ids).
- Tooltips don't work for added events.
