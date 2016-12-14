<p id="RealtimeClockArea"></p>
<script type="text/javascript">
function showClock1() {
   var nowTime = new Date();
   var nowHour = nowTime.getHours();
   var nowMin = nowTime.getMinutes();
   var nowSec = nowTime.getSeconds();
   var msg = "It is" + nowHour + ":" + nowMin + ":" + nowSec + " .";
   document.getElementById("RealtimeClockArea").innerHTML = msg;
}
setInterval('showClock1()',1000);
</script>