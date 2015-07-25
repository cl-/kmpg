function rfc(elem){
  console.log('xx')
  console.log(elem);
  console.log(elem.getAttribute("href"));
  //Method 1
  alert();
  window.location = "http://localhost:8100/#/app/test_oneMap"; //elem.href;
  //Method 2
  window.setTimeout(function(){
    window.location.reload();  
  }, 500);
}