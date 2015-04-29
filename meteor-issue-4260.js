
var Things = new Mongo.Collection("things");
Things.remove(); // Empty the collection

function Thing(x){
  this.value = x;
}
Thing.prototype.irrelevant = function(){
  console.log("this code is not used in this example.");
}

if (Meteor.isClient) {
  Meteor.startup(function(){
    Things.insert(new Thing(7));
    var first_x = Things.findOne();
    window.setTimeout(function(){
      var later_x = Things.findOne();
      console.log(first_x, later_x); // Compare
      // assert Object.getOwnPropertyNames(first_x) == Object.getOwnPropertyNames(later_x);
    }, 500); 
  });
}

