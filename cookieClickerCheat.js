/*
	Cheating script for https://orteil.dashnet.org/cookieclicker/
	Run in Browser Developer Console
*/

Game.bakeryName = "My Cheater's bakery";
//set name of your bakery

Game.cookies = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
//set number of cookies you have

Game.goldenClicksLocal = 99999999999999999999999999999999999999999999999999999999999;
//set number of golden cookies

Game.milkProgress=100000;
Game.milkHd=1000;

//Set achievements
for(var i in Game.Achievements){
var id = Game.Achievements[i].id;
Game.AchievementsById[id].won = false;
}

Game.volume = 0;
Game.prefs.cookiesound = 0;
//set sounds to 0

var objects = ['Cursor', 'Grandma', 'Farm', 'Mine', 'Factory', 'Bank', 'Temple', 'Wizard tower', 'Shipment', 'Alchemy lab', 'Portal', 'Time machine', 'Antimatter condenser', 'Prism', 'Chancemaker', 'Fractal engine', 'Javascript console'];
objects.forEach(element => Game.Objects[element].amount = 9999);
// set number of objects earning cookies

Game.lumps = 999999999999999999999999999999999999999999999999999999999999999;
//set number of lumps

Game.heavenlyChips=999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
// set number of heavenly chips

Game.prestige=9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
//set prestige level 

Game.UpgradesInStore.forEach(item => item.click());
//buy all upgrades in store

async function clickCookie(){
	//click on the cookie
	
	document.getElementById('bigCookie').click();		
	setTimeout(clickCookie, 1);
	}
	
setTimeout(clickCookie, 1);
//reload the page
