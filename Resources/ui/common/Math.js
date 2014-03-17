function Math(question, page){
	
	var self = Ti.UI.createWindow({
		barColor:'#039482',
		backgroundColor:'white'
	});
	
	//Create variable for question & pages index
	var question = question;
	var page = page;
	var index = (question*3)+page;
	var choice = 10;
	Ti.API.info("Question: "+question);
	Ti.API.info("Page is: "+page);
	
	//Bring in question values and text
	var MathReference = require('/ui/common/MathReference');
	var mathReference = new MathReference(question, page);
	

	var view = Titanium.UI.createView({
		top:'0',
		layout: 'vertical',
		height: 'auto'
		});
	
	
	var background = Ti.UI.createWebView({
			top: 0,
			width: '100%',
			height: '300px',
			url:mathReference.intro,
			touchEnabled: true
		});
		
	var question_text = Ti.UI.createLabel({
			font:{
				fontSize:32,
				fontWeight:'bold'
			},
			left:'15px',
			height:'150px',
			text:mathReference.question,
			color: 'black',
			touchEnabled: false
		});
	
	// declare an array to hold your table rows
	var tbldata = [];
	
	//MakeRow function
	
	var makeRow = function(/*Object*/ _params) {
		var row = Ti.UI.createTableViewRow({
			backgroundColor:'white',
			horizontalWrap: false,
			height:'100px'
		});
		var rowCheckbox = Ti.UI.createImageView({
			image:'/images/boxoutline_green.png',
			height: '70%',
			width: '50',
			left: '5%'
		});
		row.add(rowCheckbox);
		var primaryLabel = Ti.UI.createLabel({
			text:_params.primarylabel,
			color: 'black',
			font:{
				fontSize:32
			},
			top:10,
			left:'20%'
		});
		row.add(primaryLabel);
		return row;
	};
	
	// Create 3 rows
	tbldata.push(makeRow({
		primarylabel: mathReference.option1,
	}));
	tbldata.push(makeRow({
		primarylabel: mathReference.option2,
	}));
	tbldata.push(makeRow({
		primarylabel: mathReference.option3,
	}));
	

	// define the tableview and assign its data/rows here
	var table = Ti.UI.createTableView({
		width:'100%',
		height:Ti.UI.SIZE,
		backgroundColor:'white',
		color:'black',
		separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
		separatorColor: '#039482',
		horizontalWrap: false,
		scrollable: false
	});
		
	table.setData(tbldata);
	
	var space = Ti.UI.createView({
		height: 20,
		backgroundColor: 'white'
	});
	
	var button =Ti.UI.createButton({
		title:'NEXT',
		font:{
				fontSize:32,
				fontWeight:'bold'
			},
		height:'10%',
		width:'90%',
		borderRadius: 10,
		color: 'white',
		zIndex: 1,
		backgroundImage: 'NONE',
		backgroundColor:'#039482'
	});
		
//e.row.children references objects within row in the order they were added
// http://developer.appcelerator.com/question/117892/select-a-row-from-a-table-in-parent-window-and-change-stuff

	var toggle = 0;
	//var this_row = table.data[0].row[item_row];
	
	table.addEventListener('click', function(e) {
    		if (toggle === 0) {
      	  			e.source.backgroundColor = '#039482';
      	  			toggle = 1;
      	  			choice = e.index;
   				}
   			else{
   				//this_row.children[0].image = 'images/box_green.png';
   				table.backgroundColor = '#ffffff';
   				e.source.backgroundColor = '#039482';
   				choice = e.index;
   			}
	});	

	button.addEventListener("click",function(e){
		if(choice === 10){
			alert('Please select an answer');
		}
		else{
			//Open next page or results page
			if(page<2){
				var Math = require ('/ui/common/Math');
				var math = new Math(question, (page+1));
				math.title = self.title;
				math.containingTab = self.containingTab;
				math.tabGroup = self.tabGroup;
				self.containingTab.open(math,{animated:true});
				}
			else{
				var MathResults = require ('/ui/common/MathResults');
				var mathResults = new MathResults(question);
				mathResults.containingTab = self.containingTab;
				mathResults.tabGroup = self.tabGroup;
				self.containingTab.open(mathResults,{animated:true});
			};
			// Store choice in MathAnswers array
			Ti.App.fireEvent('mathChoice',{
				mathChoice_index: index,
				mathChoice_choice: choice
			});
		};
	});
	
	view.add(background);
	view.add(question_text);
	view.add(table);
	view.add(space);
	view.add(button);
	self.add(view);

	return self;
	
};

module.exports = Math;


