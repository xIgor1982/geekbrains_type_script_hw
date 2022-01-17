export const getDateStart = (date: Date): Date => {
  const dateCheckIn: Date = new Date();
  dateCheckIn.setDate(date.getDate() + 1);
  return dateCheckIn;
}

export const getDateEnd = (dateStart: Date): Date => {
  const dateMaxEnd: Date = new Date(dateStart.getFullYear(), dateStart.getMonth() + 2, 0);
  return dateMaxEnd;
}

export const convertDate = (date:Date):string => {
  console.log(`convertDate(${date}) => ${date.toISOString().slice(0, 10)}`);
  return date.toISOString().slice(0, 10);
}
