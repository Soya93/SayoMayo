Channels = new Mongo.Collection('channels');

if(Meteor.isServer){
	Channels.allow({
		insert: function(userId, doc){
			if(userId){
				return true;
			}
		}
	});
	Meteor.publish('channels', function(){
		return Channels.find();
	});
}