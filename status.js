window.onload = serverStatus();
function serverStatus() {
  console.log("getting status");
  $.getJSON('https://api.mcsrvstat.us/2/jadecraftsmp.mc-join.org', function(data) {
    document.getElementById("server-status").innerHTML = data.players.online + "/" + data.players.max;
  });
}