function CaseQuestionIndex(index){

var caseIndex = index;
var self = Titanium.UI.createWindow({
	// barColor: '#940315',
	barColor: '#FF3A2D',
	backgroundColor: 'white'
});

var view = Titanium.UI.createView({
		top:'0',
		layout: 'vertical',
		height: 'auto'	
});

var introArray = [
		{info:'Two friends are interested in setting up a fast casual restaurant chain in London. The dining concept is "fast healthy Indian" food. They plan to start with one test restaurant and gradually expand the chain. The venture will be funded from their own savings, cash flow and bank loans.'},
		{info:'Zobe Clothing is a branded, niche sportswear retailer targeting active lifestyle and outdoor sports enthusiasts.  Over 15 years the company has grown to retail revenue of $185M with revenue derived from a network of 160 stores, online retail and catalogue sales.  Last year the company was acquired for $150M by a private equity investor.  The PE firm has hired you to think about growth options for the business.'},
		{info:'Lamdin Cement is a privately owned cement production company in UK.  Financial performance varies year to year, but last year the company broke even.  A new management team has recently taken over and has hired you to determine how to improve profitability with a view to making the company more attractive to potential buyers. '},
		{info:'Food Aid is the worlds largest food relief agency and part of the United Nations.  The organization has become famous for providing a Red Cup of daily food rations in emergency relief situations but their activities also include long term development projects to alleviate the causes of hunger.   Today they face a short term challenge, rising food prices.  At the same time, the organization needs to define a strategy for the longer term.'},
		{info:'MNI is a food production company based in Minnesota USA.  They produce a range of products including ice cream, savory snacks and cookies.  They are famous for their Murray Munch cookies that are sold throughout the United States.'},
		{info:'Szmu Pharma is a pharmaceutical company with a portfolio of drugs to treat Asthma, Depression and Heart Disease.  They are operational in both UK and the US.'},
		{info:'Penguin Games is a small online gaming company.  Its first game is called PenguinPro and has been launched on facebook to great success - garnering 1M daily active users in 6 months.  This has attracted the interest of venture capital investors who may be able to help the company grow by making an investment.  The management team is now preparing a business plan to present to potential investors.'},
		{info:'Venti is a renewable energy company generating electricity from wind turbines that they own and operate in California.  Power that they generate is sold into the wholesale market for electricity.'},
		{info:'Banana Book is a computer company with hardware and software products.  They currently have a profitable niche in the "high end" of the market where designers and savvy consumers are prepared to pay more for the superior products they offer.  In future they are looking to move into the mainstream and capture a greater market share.'},
		{info:'ChelmWest is a traditional English building society established in 1880 and located in the West Midlands.  A building society is similar to a normal retail bank institution, except that it is owned by members.  The management team is interested in growing their business.'}	
];
	
var background = Ti.UI.createLabel({
		height: 'auto',
		top: '0',
		left: '5',
		width: '100%',
		text:introArray[index].info,
		font: {
			fontSize:32
		},
		color: 'black',
		touchEnabled:false
});
	
var space = Ti.UI.createView({
	height:'20'
});

var line = Ti.UI.createView({
		backgroundColor: '#FF3A2D',
		height: '1'
 });


var makeRow = function(/*Object*/ _params) {
			var row = Ti.UI.createTableViewRow({
				backgroundColor:'transparent',
				horizontalWrap: false,
				height:'auto'
			});
			var rowArrow = Ti.UI.createImageView({
				image:'/images/Icons/right_circular/right_circular-64.png',
				height:60,
				width:60,
				top:22,
				right:12
			});
			row.add(rowArrow);
			var secondaryLabel = Ti.UI.createLabel({
				text:_params.secondarylabel,
				color: 'black',
				font:{
					fontSize:32,
					// fontWeight:'bold'
				},				
				top:10,
				left:10,
				width:'80%',
				height:'100'
			});
			row.add(secondaryLabel);
			return row;
		};
		
		var propertyArray = [
		//Case 1 - Biryani Brunch
			{subtitle: 'Q1 What is the market for fast casual dining in London?', className:"tableRow"},
			{subtitle: 'Q2 How many meals to breakeven?', className:"tableRow"},
			{subtitle: 'Q3 Can the restaurant defend against competition?', className:"tableRow"},
		//Case 2 - Zobe Clothing
			{subtitle: 'Q1 What business issues do you identify?', className:"tableRow"},
			{subtitle: 'Q2 How can Zobe grow store revenue?', className:"tableRow"},
			{subtitle: 'Q3 Would a retail promotion make sense?', className:"tableRow"},
		//Case 3 - Lamdin Cement
			{subtitle: 'Q1 How could the company improve profitability?', className:"tableRow"},
			{subtitle: 'Q2 Should Lamdin consolidate production?', className:"tableRow"},
			{subtitle: 'Q3 Is it a good idea to buy a quarry?', className:"tableRow"},
		//Case 4 - Food Aid
			{subtitle: 'Q1 What should Food Aid do about price increases?', className:"tableRow"},
			{subtitle: 'Q2 Can they define a strategic direction?', className:"tableRow"},
			{subtitle: 'Q3 How should Food Aid measure success?', className:"tableRow"},
		//Case 5 - MNI Snacks
			{subtitle: 'Q1 How should MNI approach international expansion?', className:"tableRow"},
			{subtitle: 'Q2 Should they acquire a manufacturing business in Germany?', className:"tableRow"},
			{subtitle: 'Q3 How would MNI deal with the trade union?', className:"tableRow"},
		//Case 6 - Szmu Pharma
			{subtitle: 'Q1 Should Szmu Pharma proceed with Phase 3 clinical trials?', className:"tableRow"},
			{subtitle: 'Q2 For another drug, how should Szmu respond to generics? ', className:"tableRow"},
			{subtitle: 'Q3 How can the company improve sales force effectiveness?', className:"tableRow"},
		//Case 7 - Penguin Games
			{subtitle: 'Q1 How can PenguinPro grow revenue?', className:"tableRow"},
			{subtitle: 'Q2 Which advertising option is best?', className:"tableRow"},
			{subtitle: 'Q3 How can they grow beyond PenguinPro?', className:"tableRow"},
		//Case 8 - Venti Wind
			{subtitle: 'Q1 What is the outlook for Venti Wind?', className:"tableRow"},
			{subtitle: 'Q2 How could green credentials be utilized?', className:"tableRow"},
			{subtitle: 'Q3 Should Venti acquire a wind facility?', className:"tableRow"},
		//Case 9 - Banana Book
			{subtitle: 'Q1 How should Banana price their new laptop?', className:"tableRow"},
			{subtitle: 'Q2 What are the risks with a close-walled strategy?', className:"tableRow"},
			{subtitle: 'Q3 Should Banana Book outsource manufacturing & services?', className:"tableRow"},
		//Case 10 - ChelmWest
			{subtitle: 'Q1 How is the ChelmWest portfolio performing?', className:"tableRow"},
			{subtitle: 'Q2 What are the pros & cons of fixed rate mortgages?', className:"tableRow"},
			{subtitle: 'Q3 How should ChelmWest conduct marketing & distribution?', className:"tableRow"}
		];
	
		
		// declare an array to hold your table rows
		var tbldata = [];
		
		// use a loop to create at least 3 rows
		for(i=0;i<=2;i++) {
			j = index*3 + i; 
			tbldata.push(makeRow({
				rownum: i,
				secondarylabel: propertyArray[j].subtitle,
				// rowimage:propertyArray[j].image,
			}));
		};

		// define the tableview and assign its data/rows here
		var table = Ti.UI.createTableView({
			width:'100%',
			height:Ti.UI.SIZE,
			backgroundColor:'white',
			separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
			separatorColor: '#FF3A2D',
			horizontalWrap: false,
			scrollable: false
		});
		
table.setData(tbldata);

table.addEventListener("click",function(e){
	var CaseStudy = require ('ui/common/CaseStudy');
	var caseStudy = new CaseStudy(caseIndex, e.index);
	caseStudy.title = "Question "+(e.index+1);
	caseStudy.containingTab = self.containingTab;
	caseStudy.tabGroup = self.tabGroup;
	self.containingTab.open(caseStudy,{animated:true});
});

view.add(background);
view.add(space);
view.add(line);
view.add(table);
self.add(view);

return self;

};

module.exports = CaseQuestionIndex;