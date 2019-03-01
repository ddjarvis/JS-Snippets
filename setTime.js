function settime(target_id) {
  var dateobject = new Date();
  var pad = "00";
  var rvh = pad.concat(dateobject.getHours()),
    rvm = pad.concat(dateobject.getMinutes()),
    rvs = pad.concat(dateobject.getSeconds());
  var tvh = rvh.substring(rvh.length - 2),
    tvm = rvm.substring(rvm.length - 2),
    tvs = rvs.substring(rvs.length - 2);
  var time = tvh + ":" + tvm + ":" + tvs;
  document.getElementById(target_id).innerText = time;
}
