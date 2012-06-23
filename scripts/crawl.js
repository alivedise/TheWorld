// load('TheWorld/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("TheWorld/the_world.html","TheWorld/out")
});
