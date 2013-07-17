var identity = freedom.identity();
var storage = freedom.storage();
var allowed_peers = [];
var blocked_peers = [];
var online_peers = [];

var onload = function() {
  freedom.on('start-extension', function(msg) {
    //Fetch UID
    identity.get().done(function(data) {
      freedom.emit('id', data.id);
    });
    storage.get("allowed_peers").done(function (data) {
      //if (check if exists)
      allowed_peers = data;
    });
    storage.get("blocked_peers").done(function (data) {
      //if (check if exists)
      blocked_peers = data;
    });
  });

  identity.on('buddylist', function(list) {
    for (var i = 0; i < list.length; i++) {
      if (allowed_peers.indexOf(list[i]) >= 0) {
        
      } else if (blocked_peers.indexOf([i]) >= 0) {

      } else {

      }
    }
  });

  //Echo Service
  freedom.on("send-message", function(msg) {
    console.log("msg: "+msg);
    freedom.emit("message-update", msg);
  });
}

//TODO(willscott): WebWorkers startup errors are hard to debug.
// Once fixed, the setTimeout will no longer be needed.
setTimeout(onload, 0);
