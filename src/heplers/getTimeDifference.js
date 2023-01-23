export const getTimeDifference = (date1, date2) => {
  const minutes = Math.floor((date1 - date2) / 1000 / 60);
  const hours = Math.floor(minutes / 60);

  let difference = 0;

  if (minutes > 0) {
    difference = minutes === 1 ? `1 minute ago` : `${minutes} minutes ago`;
  }

  if (hours > 0) {
    difference = hours === 1 ? `1 hour ago` : `${hours} hours ago`
  }

  return difference === 0 ? "Right now" : difference;
}