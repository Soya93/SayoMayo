Template.home.onCreated(function() {
	this.subscribe('channels');
	this.subscribe('allUserNames');

});

Template.home.helpers({
	channels: function(){
		return Channels.find();
	}
});

Template.channelForm.events({
	'submit form': function(event, instance){
		event.preventDefault();
		var name = instance.find('input').value;
		instance.find('input').value ='';
		console.log("jag är här");
		Channels.insert({name: name});
	}
});
