var CaseStudy = function(caseIndex, questionIndex) {

	var CaseReference = require('ui/common/CaseReference');
	var casereference = new CaseReference(caseIndex, questionIndex);
	Ti.API.info("caseindex is " + caseIndex);
	Ti.API.info("caseurl is " + casereference.url);

	var showVideo = caseIndex;

	var self = Titanium.UI.createWindow({
		title : casereference.title,
		backgroundColor : 'white',
		// barColor:'#940315',
		barColor : '#FF3A2D',
		navBarHidden : false
	});

	var view = Titanium.UI.createScrollView({
		top : '0',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		layout : 'vertical',
		showVerticalScrollIndicator : true,
	});

	if (caseIndex === 0) {

		var space1 = Ti.UI.createView({
			top : 0,
			height : '5%'
		});

		var button = Ti.UI.createButton({
			top : '5%',
			title : 'PLAY VIDEO',
			borderRadius : 10,
			font : {
				fontSize : 24,
				fontWeight : 'bold'
			},
			height : '10%',
			width : '90%',
			color : 'black',
			zIndex : 3,
			backgroundImage : 'NONE',
			backgroundColor : '#CFCFCF'
		});

		var space2 = Ti.UI.createView({
			top : '15%',
			height : '5%'
		});

		Titanium.API.info(caseIndex);
		button.addEventListener("click", function(e) {
			var Video = require('/ui/common/Video');
			var video = new Video(questionIndex);
			video.containingTab = self.containingTab;
			video.tabGroup = self.tabGroup;
			self.containingTab.open(video, {
				animated : true
			});
		});

		// view.add(space1);
		// view.add(button);
		// view.add(space2);

		self.add(space1);
		self.add(button);
		self.add(space2);

		var facts = Ti.UI.createWebView({
			top : '20%',
			height : Ti.UI.SIZE,
			// overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,
			width : Ti.UI.SIZE,
			scrollType : 'vertical',
			url : casereference.url,
			touchEnabled : true
		});

		self.add(facts);

	} else {

		var facts = Ti.UI.createWebView({
			height : Ti.UI.SIZE,
			// overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,
			width : Ti.UI.SIZE,
			scrollType : 'vertical',
			url : casereference.url,
			touchEnabled : true
		});

		self.add(facts);

	}

	// view.add(facts);
	// self.add(view);


	return self;

};

module.exports = CaseStudy;

