import Constants from '../../constants.js';

import moment from 'moment';

moment.locale((Constants.locale || 'es'));

const DateUtil = {
    parseToLocaleDateTime: dateTime => `${DateUtil.parseToLocaleDate(dateTime)} - ${DateUtil.parseToLocaleTime(dateTime)}`,

    parseToLocaleDate: date => moment.utc(date).format('L'),

    parseToLocaleTime: date => moment.utc(date).format('LT'),

    getLocaleDateTimeOf: date => moment.utc(date).local(),

    diffBetween: (then, now=moment(), format='seconds') => then.diff(now, format),

    diffInSecondsBetween: (then, now=moment()) => DateUtil.diffBetween(then, now),
}

export default DateUtil;