import moment from 'moment';

moment.locale('pt-BR');
export const isDate = (value: string) =>
  moment(value, 'DD/MM/YYYY', true).isValid();

export const isPastDate = (value: string) =>
  moment(value, 'DD/MM/YYYY').isSameOrBefore(moment(), 'day');
