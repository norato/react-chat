import uuid from 'js-uuid';

function getTime(date) {
  let _date = new Date(date)
  const fixFormat = (time) =>  time < 10 ? `0${time}` : time
  let hours =  fixFormat(_date.getHours())
  let minutes = fixFormat(_date.getMinutes())
  return `${hours}:${minutes}`
}
export { getTime };

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
export { getCookie };

function setCookie(cname) {
  let currentCookie = getCookie(cname)
  if (currentCookie) {
   return currentCookie
  } else {
    let cookieValue = uuid.v4();
    document.cookie = `react-chat-uuid=${cookieValue}`
    return cookieValue;
  }
}
export { setCookie };