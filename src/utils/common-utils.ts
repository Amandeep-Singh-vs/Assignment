/** formatTimeAgo: {This function returns an time in specific format according to time of notification.} */ 
export const formatTimeAgo=(notificationTime:any)=> {
  const currentTime = new Date();
  const notificationDate = new Date();
  const [hours, minutes, seconds]:String[] = notificationTime.split(':');
  notificationDate.setDate(notificationDate.getDate());
  notificationDate.setHours(Number(hours), Number(minutes), Number(seconds));
  let timeDifference = currentTime.getTime( ) - notificationDate.getTime( );
  timeDifference = timeDifference<0 ? (-1*timeDifference) : timeDifference;
  const secondsAgo = Math.floor(timeDifference / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  let formattedTime = undefined;
  if (daysAgo > 0) {
    formattedTime = daysAgo + 'd ago';
  } else if (hoursAgo > 0) {
    formattedTime = hoursAgo + 'h ago';
  } else if (minutesAgo > 0) {
    formattedTime = minutesAgo + 'm ago';
  } else {
    formattedTime = secondsAgo + 's ago';
  }
  return formattedTime;
}