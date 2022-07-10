function TimetoString(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;

  let ss = "";
  let mm = "";
  let hh = "";

  seconds == 1 ? (ss = seconds + " second") : (ss = seconds + " seconds");

  minutes == 1 ? (mm = minutes + " minute") : (mm = minutes + " minutes");

  hours == 1 ? (hh = hours + " hour") : (hh = hours + " hours");

  let res = [];

  hh[0] > 0 && res.push(hh);

  mm[0] > 0 && res.push(mm);

  ss[0] > 0 && res.push(ss);

  return res.join(" ");
}

module.exports = TimetoString;
