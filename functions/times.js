export const getTimeUpdateInSeconds = (timeString) => {
  const [minutes, seconds] = timeString.split(':');
  const totalSeconds = parseInt(minutes) * 60 + parseInt( seconds );
  return totalSeconds;
  };

export const formatTime = (totalSeconds) => {
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const getTimeUpdate = (timeUpdate) => {
  const totalSeconds = getTimeUpdateInSeconds(timeUpdate);
  const remainingTime = Math.max(0, totalSeconds - 1);
  return remainingTime;
};