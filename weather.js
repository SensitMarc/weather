# via npm
# Please see https://github.com/keen/keen-js/issues/355#issuecomment-156231882
$ npm install keen-js

<script type="text/javascript">
  !function(a,b){a("Keen","https://d26b395fwzu5fz.cloudfront.net/3.4.1/keen.min.js",b)}(function(a,b,c){var d,e,f;c["_"+a]={},c[a]=function(b){c["_"+a].clients=c["_"+a].clients||{},c["_"+a].clients[b.projectId]=this,this._config=b},c[a].ready=function(b){c["_"+a].ready=c["_"+a].ready||[],c["_"+a].ready.push(b)},d=["addEvent","setGlobalProperties","trackExternalLink","on"];for(var g=0;g<d.length;g++){var h=d[g],i=function(a){return function(){return this["_"+a]=this["_"+a]||[],this["_"+a].push(arguments),this}};c[a].prototype[h]=i(h)}e=document.createElement("script"),e.async=!0,e.src=b,f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(e,f)},this);
</script>

<script type="text/javascript">
  var client = new Keen({
    projectId: "5731f54133e4062d0ba79561", // String (required always)
    writeKey: "a42d5c6a8a211a01e91410619dbcfc024296781b5db2fed7b058e3425a3ded3b5affd3f0ebea7e105794dab09db56f87446096831d91f31e0d56a9cf94539d9a4351d222096b7d93aa23f4b8ad987c3595a24a2d135fa688ae0d37f10bdbfcd5",   // String (required for sending data)
    readKey: "YOUR_READ_KEY"      // String (required for querying data)

    // protocol: "https",         // String (optional: https | http | auto)
    // host: "api.keen.io/3.0",   // String (optional)
    // requestType: "jsonp"       // String (optional: jsonp, xhr, beacon)
  });
</script>

// Create a data object with the properties you want to send
var purchaseEvent = {
  item: "golden gadget",  
  price: 2550, // track dollars as cents
  referrer: document.referrer,
  keen: {
    timestamp: new Date().toISOString()
  }
};

// Send it to the "purchases" collection
client.addEvent("purchases", purchaseEvent, function(err, res){
  if (err) {
    // there was an error!
  }
  else {
    // see sample response below
  }
});
