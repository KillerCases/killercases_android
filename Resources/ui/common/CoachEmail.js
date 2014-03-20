function CoachEmail(){
	
	var self = Ti.UI.createWindow({
		backgroundColor: 'white',
		title:'Find A Case Interview Coach',
		barColor:'#5AC8FB',
		navTintColor: 'white'
		// barColor:'#940315'
	});

	// var view = Titanium.UI.createScrollView({
		// top: '0',
		// width: Ti.UI.SIZE,
		// height: Ti.UI.SIZE,
  		// layout:'vertical',
  		// showVerticalScrollIndicator: true
	// });
	
	// var image = Ti.UI.createImageView({
		// top:'5%',
		// image:'/images/evisors.png',
		// width:'100%'
	// });
	
	// var intro1 = Ti.UI.createTextArea({
		// // top:'35%',
		// width:'95%',
		// font:{
				// fontSize:14,
				// //fontWeight:'bold'
			// },
		// value: 'Evisors can connect you with expert coaches for consulting interview practice.'	
	// });
// 	
	var intro2 = Ti.UI.createLabel({
		top:0,
		width:'90%',
		color: 'black',
		font:{
				fontSize:32,
				//fontWeight:'bold'
			},
		text: 'Please fill in your details to find out more:'	
	});
	
	var text1 = Ti.UI.createTextField({
 		 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		 borderColor: '#5AC8FB',
 		 top: 50,
 		 color:'black',
 		 hintText: 'Your Name',
 		 layout:'vertical',
 		 width: '90%'
	});
	
	var space1 = Ti.UI.createView({
		top:100,
		// height: 20,
		width: '100%',
		backgroundColor: 'white'
	});
	
	var text2 = Ti.UI.createTextField({
 		 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		 borderColor:'#5AC8FB',
 		 color: 'black',
 		 top: 150,
 		 hintText: 'Your Background',
 		 layout:'vertical',
 		 width: '90%'
	});
	
	var space2 = Ti.UI.createView({
		top:200,
		// height: 20,
		width: '100%',
		backgroundColor: 'white'
	});
	
	var button =Ti.UI.createButton({
		top:250,
		title:'SEND',
		font:{
				fontSize:32,
				fontWeight:'bold'
			},
		height:120,
		width:'90%',
		top:'76%',
		borderRadius: 10,
		color: 'white',
		zIndex: 1,
		backgroundImage: 'NONE',
		backgroundColor:'#5AC8FB'
	});

	
	var emailDialog = Ti.UI.createEmailDialog({
		subject: "Coach Request",
		toRecipients: ['jo.killercases@gmail.com'],
		html: true
	});
			
	button.addEventListener('click', function(e){
		emailDialog.messageBody = "<p>Please send information about Interview Coaching.</p> <p>For your reference, my name is " + text1.value +" and I have a background in "+text2.value +"</b>.";
		Ti.API.info('message dialog complete');
		emailDialog.open();
	});
	
	// view.add(image);
	// // view.add(intro1);
	// view.add(intro2);
	// view.add(text1);
	// view.add(space1);
	// view.add(text2);
	// view.add(space2);
	// view.add(button);
	// self.add(view);
	
	self.add(intro2);
	self.add(text1);
	self.add(space1);
	self.add(text2);
	self.add(space2);
	self.add(button);

	return self;
};
module.exports = CoachEmail;