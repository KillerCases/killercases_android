function ConceptIndex(){
	
	var self = Ti.UI.createWindow({
		title: 'Concepts',
		barColor:'#5856D6'
		// barColor: '#035e94'
	});
	
	var array = [
			{title:"Commodity Products", className:"tableRow"},
			{title:"Discounts/Promotions", className:"tableRow"},
			{title:"Price Elasticity", className:"tableRow"},
			{title:"Volume", className:"tableRow"},
			{title:"Cross Selling", className:"tableRow"},//Row 4
			{title:"Customer Segmentation", className:"tableRow"},
			{title:"Distribution Channels", className:"tableRow"},
			{title:"Sales Force Effectiveness", className:"tableRow"},
			{title:"Breakeven Quantity", className:"tableRow"}, // Row 8
			{title:"Fixed Costs", className:"tableRow"},
			{title:"Outsourcing", className:"tableRow"},
			{title:"Scale Economy", className:"tableRow"},
			{title:"Synergies", className:"tableRow"},
			{title:"Variable Costs", className:"tableRow"},
			{title:"3Cs", className:"tableRow"}, // Row 14
			{title:"Barriers to Entry", className:"tableRow"},
			{title:"Complementary Products", className:"tableRow"},
			{title:"Differentiation", className:"tableRow"},
			{title:"Industry Consolidation", className:"tableRow"},
			{title:"Network Effects", className:"tableRow"},
			{title:"Entering a new market", className:"tableRow"},
			{title:"Market Sizing", className:"tableRow"},
			{title:"Mergers and Acquisitions", className:"tableRow"},
			{title:"Porters 5 Forces", className:"tableRow"},
			{title:"Power of Customers", className:"tableRow"},
			{title:"Power of Suppliers", className:"tableRow"},
			{title:"Developing a Product", className:"tableRow"},
			{title:"Degree of Rivalry", className:"tableRow"},
			{title:"Razor and Blade model", className:"tableRow"},
			{title:"Substitute Products", className:"tableRow"},
			{title:"Value Chain", className:"tableRow"},
			{title:"Vertical Integration", className:"tableRow"},
			{title:"Cooperative", className:"tableRow"}, // Row 32
			{title:"Private Equity", className:"tableRow"},
			{title:"Private/Public Ownership", className:"tableRow"},
			{title:"Venture Capital", className:"tableRow"},
			{title:"ROI/NPV", className:"tableRow"}, // Row 36
			{title:"Sunk Costs", className:"tableRow"},
			{title:"Multiples Valuation", className:"tableRow"}
		];
		
	var search = Ti.UI.createSearchBar({
		barColor: 'black',
		showCancel: false
	});
	
	// Section 1
	
	var section1 = Ti.UI.createTableViewSection();
 
	for(i=0;i<=38;i++) {
		section1.add(Ti.UI.createTableViewRow({
			title: array[i].title,
			color:'black',
			font:{fontSize:32},
			height:'50',
			hasChild: true
		}))};
	
		
	var table = Ti.UI.createTableView({
		data: [section1],
		backgroundColor:'white',
		separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
		separatorColor: '#5856D6',
		search: search,
		hideSearchOnSelection: true
	});
		
	self.add(table);
	
	table.addEventListener("click",function(e){
	var Concept = require ('/ui/common/Concept');
	var concept = new Concept(e.index);
	// concept.title = e.rowData.title;//Take the title from the row
	concept.containingTab = self.containingTab;
	concept.tabGroup = self.tabGroup;
	self.containingTab.open(concept,{animated:true});
});

	return self;
	
};

module.exports = ConceptIndex;
