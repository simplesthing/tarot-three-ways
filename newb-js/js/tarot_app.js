/**
 * @author aVa
 * 2/10/09
 * Tarot App/Exercise in DOM and logic
 */

/*
 * Parse xml through IE or Mozilla
 */
var xmlDoc;

// code for IE
if (window.ActiveXObject)
{
	xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	// The line xmlDoc.async="false" assures that the parser will halt execution until the document is fully loaded. 
	xmlDoc.async=false;
	xmlDoc.load("./xml/tarot.xml");
}
// code for Mozilla, Firefox, Opera, etc.
else {
	xmlDoc= document.implementation.createDocument("","doc",null);
	xmlDoc.load("./xml/tarot.xml");
}

/*
 * Tarot app functions:
 * card object - contains all nodes of xml data
 * draw function - draws card from deck
 * compare function - compares drawn card value to the values in the spread array looking for a match in card index value and value of drawn card before filling spread array. If it finds a duplicate it will 'draw' and 'compare' again until a unique card is drawn and passed to the fill spread function.
 * fillSpread function - spread count is used to fill the corresponding position in spread array using the card drawn value as a primary key for the node data in xml doc.
 * render function - uses spread count to update HTML id values with image path to card indexed at position being drawn
 * read function - displays the card definition based on spread postion clicked, using the spread index value and card object.
 * 
 */

var card_count = -1;
var seed, card_draw, spread_count, holder, fill_card, image_count;
var spread = new Array();
var now = new Date();
var reading;
var catcher = new Array();
//card object
function card(index, hex, image, position, title, number, name, situation, challenge, higher_power, foundation, past, future, blocks, influences, hope_fear, outcome){
	this.index = index
	this.hex = hex;
	this.image = image;
	this.position = position;
	this.title - title;
	this.number = number;
	this.name = name;
	this.situation = situation;
	this.challenge = challenge;
	this.higher_power = higher_power;
	this.foundation = foundation;
	this.past = past;
	this.future = future;
	this.blocks = blocks;
	this.influences = influences;
	this.hope_fear = hope_fear;
	this.outcome = outcome;
}



function draw(){
	//pick up to 10 times
	if (card_count<10){	
		seed = now.getMilliseconds();
		card_draw = Math.floor(Math.random() * (77 - 0 + 1)) + 0;
		card_count++;
		spread_count = card_count;
		compare(card_draw, spread_count,spread);
		}
		else{
		alert("You have drawn all of your cards.");
		}
}

function compare(card_draw, spread_count, spread){
	//first card skips comparison step
	if(spread_count == 0){
		fillSpread(card_draw, spread_count);
		}
	else{
		for (i = 0; i <= spread_count-1; i++) {		
			holder = new card();		
			holder = spread[i];
			//debug alert for loop
			//alert(holder.index + " = holder.index" + '\n' + card_draw + " = card_draw" + '\n' + i + " = i");		
			/*if drawn card matches any card in the spread then a new random number is drawn for the card.
			 * The loop counter is set -1.
			 * After this loop iteration adds one to i it will reset loop counter i=0, reseting the spread comparison with first position in array.
			 * */		
			if(holder.index == card_draw){
				card_draw = Math.floor(Math.random(seed) * (77 - 0 + 1)) + 0;
				i=-1;
				//alert(i + ' reset');
			}		
		}		
		fillSpread(card_draw, spread_count);	
	}		
}

function fillSpread(card_draw, spread_count){
	fill_card = new card();
	fill_card.position = spread_count;
	//filling card object with xml node values using card_draw value as an index
	fill_card.index = xmlDoc.getElementsByTagName("index")[card_draw].childNodes[0].nodeValue;
	fill_card.name = xmlDoc.getElementsByTagName("name")[card_draw].childNodes[0].nodeValue;
	fill_card.hex =  xmlDoc.getElementsByTagName("hex")[card_draw].childNodes[0].nodeValue;	
	fill_card.image = xmlDoc.getElementsByTagName("image")[card_draw].childNodes[0].nodeValue;
	fill_card.situation = xmlDoc.getElementsByTagName("situation")[card_draw].childNodes[0].nodeValue;
	fill_card.challenge = xmlDoc.getElementsByTagName("challenge")[card_draw].childNodes[0].nodeValue;
	fill_card.higher_power = xmlDoc.getElementsByTagName("higher_power")[card_draw].childNodes[0].nodeValue;
	fill_card.foundation = xmlDoc.getElementsByTagName("foundation")[card_draw].childNodes[0].nodeValue;
	fill_card.past = xmlDoc.getElementsByTagName("past")[card_draw].childNodes[0].nodeValue;
	fill_card.future = xmlDoc.getElementsByTagName("future")[card_draw].childNodes[0].nodeValue;
	fill_card.blocks = xmlDoc.getElementsByTagName("blocks")[card_draw].childNodes[0].nodeValue;
	fill_card.influences = xmlDoc.getElementsByTagName("influences")[card_draw].childNodes[0].nodeValue;
	fill_card.hope_fear = xmlDoc.getElementsByTagName("hope_fear")[card_draw].childNodes[0].nodeValue;
	fill_card.outcome = xmlDoc.getElementsByTagName("outcome")[card_draw].childNodes[0].nodeValue;
	spread[spread_count] = fill_card;
	render(spread_count, fill_card);
	//debug alert - all values
	//alert(fill_card.index + " = index from xml which will be used to recall definitions" + '\n' + "F  = " + fill_card.name + '\n' + "J  =" + fill_card.situation + '\n' + "K  = " + fill_card.challenge + '\n' + "L  =" + fill_card.higher_power + '\n' + "M  =" + fill_card.foundation + '\n' + "N  =" + fill_card.past + '\n' + "O  =" + fill_card.future + '\n' + "P  =" + fill_card.blocks + '\n' + "Q  =" + fill_card.influences + '\n' + "R  =" + fill_card.hope_fear + '\n' + "S  =" + fill_card.outcome);
}

function render(spread_count, fill_card){	
	image_count = spread_count;	
	image_count = image_count + 'face';
	document.getElementById(image_count).innerHTML = '<img src="' + fill_card.image +'" />';
	read(spread_count);
}

function read(x){
		var reading;
		catcher = spread[x];
			switch (x) {
				case 0:
					reading = catcher.situation;
					break;
				case 1:
					reading = catcher.challenge;
					break;
				case 2:
					reading = catcher.higher_power;
					break;
				case 3:
					reading = catcher.foundation;
					break;
				case 4:
					reading = catcher.past;
					break;
				case 5:
					reading = catcher.future;
					break;
				case 6:
					reading = catcher.blocks;
					break;
				case 7:
					reading = catcher.influences;
					break;
				case 8:
					reading = catcher.hope_fear;
					break;
				case 9:
					reading = catcher.outcome;
					break;
			}
		alert(reading);			
	}
	