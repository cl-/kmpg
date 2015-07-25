var baseTimeSecond = new Date("2015-07-25T00:00:11").getTime(); //1437782411000
var baseTimeMinute = new Date("2015-07-25T00:00:01").getTime(); //1437782460000
var minTimeVal = Math.pow(10,12); //1000000000000
var timeScale = 60*1000; //minute = 60s * 1000ms
function toDBTime(jsTime){
  var dbTime = null;
  if (jsTime.constructor == Date){
    jsTime = jsTime.getTime();
  }
  if(typeof jsTime == 'number'
     && jsTime >= minTimeVal){  dbTime = jsTime / timeScale;            }
  else                       {  console.log("jsTime is not a number");  }
  return dbTime;
}
function toJSTime(dbTime){
  return dbTime * timeScale;
}

