const moment = require('moment');
const _ = require('lodash');

module.exports = function (date) {
  const formattedStartDate = moment([date.year, date.month, 1]).format('YYYY-MM-DD');
  let dayWeekStartMonth = moment(formattedStartDate).day();
  if (dayWeekStartMonth === 0) {
    dayWeekStartMonth = 7;
  }
  const { year } = date;
  const month = date.month + 1;
  const dayInMonth = numberDaysInMonth(year, month);
  const weekResults = [];
  let day;
  if (dayWeekStartMonth > 1) {
    const results = createStartWeek(dayWeekStartMonth, year, month);
    weekResults.push(results);
    const lastWeekResult = weekResults[weekResults.length - 1];
    day = lastWeekResult.weekDays[lastWeekResult.weekDays.length - 1];
  } else {
    day = 0;
  }
  while ((dayInMonth - day) >= 7) {
    const results = createWeek(year, month, day);
    weekResults.push(results);
    day += 7;
  }
  if ((dayInMonth - day) > 0) {
    const results = createLastWeek(year, month, dayInMonth, day);
    weekResults.push(results);
  }
  return weekResults;
};

function createStartWeek(dayOfWeek, yearArg, monthArg) {
  let year = _.cloneDeep(yearArg);
  let month = _.cloneDeep(monthArg);
  month -= 1;
  if (month === 0) {
    month = 12;
    year -= 1;
  }
  const daysInPreviousMonth = numberDaysInMonth(year, month);
  const weekStartDay = daysInPreviousMonth - (dayOfWeek - 2);
  const weekIndex = `${year}${month}${weekStartDay}`;
  const weekDays = [];
  for (let i = weekStartDay; i <= daysInPreviousMonth; i += 1) {
    weekDays.push(i);
  }
  const addingDayIteration = 7 - weekDays.length;
  for (let i = 1; i <= addingDayIteration; i += 1) {
    weekDays.push(i);
  }
  return { weekIndex, weekDays };
}

function createWeek(year, month, lastDay) {
  const weekStartDay = lastDay + 1;
  const weekIndex = `${year}${month}${weekStartDay}`;
  const weekDays = [];
  const weekEndDay = weekStartDay + 7;
  for (let i = weekStartDay; i < weekEndDay; i += 1) {
    weekDays.push(i);
  }
  return { weekIndex, weekDays };
}

function numberDaysInMonth(yearArg, monthArg) {
  let month = _.cloneDeep(monthArg);
  if (month < 10) {
    month = `0${month}`;
  }
  return moment(`${yearArg}-${month}`, 'YYYY-MM').daysInMonth();
}

function createLastWeek(yearArg, monthArg, dayInMonth, lastDay) {
  const weekStartDay = lastDay + 1;
  const weekIndex = `${yearArg}${monthArg}${weekStartDay}`;
  const weekDays = [];
  for (let i = weekStartDay; i <= dayInMonth; i += 1) {
    weekDays.push(i);
  }
  const addingDayIteration = 7 - weekDays.length;
  for (let i = 1; i <= addingDayIteration; i += 1) {
    weekDays.push(i);
  }
  return { weekIndex, weekDays };
}
