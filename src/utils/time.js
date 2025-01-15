export const time = () => {
  const now = new Date();
  let hours = now.getHours().toString();
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

  let am_pm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  const clock = `${hours}:${minutes}:${seconds}:${am_pm}`;
  return clock;
};
