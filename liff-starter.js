window.onload = function(){
	const defaultLiffId = "1655378358-J317E6Xo";
	let myLiffId = "";
	
	myLiffId = defaultLiffId;
	initializeLifforDie(defaultLiffId);
}
function initializeLifforDie(myLiffId){
	initializeLiff(myLiffId);
}
function initializeLiff(myLiffId){
	liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
            console.log("LoLError! " + err);
        });
}
function initializeApp(){
	console.log("JHIHI")
	displayLiffData();
    displayIsInClientInfo();
    registerButtonHandlers();
	
	if (liff.isLoggedIn()) {
        document.getElementById('user_login').disabled = true;
		console.log("LOGIN!")
    } else {
        document.getElementById('user_logout').disabled = true;
		console.log("LOGOUT!")
    }
}
function displayLiffData() {
    document.getElementById('user_id').innerHTML = liff.isInClient();
    document.getElementById('user_inLogin').innerHTML = liff.isLoggedIn();
	alert("display LoL");
	if(liff.isLoggedIn()){
		let username = liff.getDecodedIDToken();
		document.getElementById('user_id').innerHTML = username.name;
		document.getElementById('prof-pict').setAttribute('src',username.picture);
	}
}
function displayIsInClientInfo() {
    if (liff.isInClient()) {
        document.getElementById('liffLoginButton').classList.toggle('hidden');
        document.getElementById('liffLogoutButton').classList.toggle('hidden');
        document.getElementById('isInClientMessage').textContent = 'You are opening the app in the in-app browser of LINE.';
    } else {
        document.getElementById('isInClientMessage').textContent = 'You are opening the app in an external browser.';
    }
}
function hi(){
	console.log("HIHIHIH");
	if(!liff.isLoggedIn){
		alert("Trynna login");
		liff.login;
	}
	alert("LOGIN!!!");
}
function bye(){
	console.log("User logout cuy!");
	if(liff.isLoggedIn()){
		liff.logout();
		alert("Logout!");
	}
	
}
function sendMessage(){
	liff.sendMessages([{
		"type": "flex",
		"altText": "this is a flex message",
		"contents": {
			"type": "bubble",
			"body": {
				"type": "box",
				"layout": "vertical",
				"contents": [
				{
					"type": "text",
					"text": `Lolskiiii awokwok! Hi ${liff.getDecodedIDToken().name}\n Haha ini line2`
				},
				{
					"type": "text",
					"text": "6 Soto Makassar : 192000 2 Soto Makassar : 64000"
				}
				]
			}
		}
	}])
			.then(function() {
                window.alert('Ini adalah pesan dari fitur Send Message');
            }).catch(function(error) {
                window.alert('Error sending message: ' + error);
            });
	
}
function open(){
	liff.openWindow({
		url: 'https://mukbang-skut.herokuapp.com/',
		external: trues
	})
}
function confirmPenjualan(){
	sendMessage();
	liff.closeWindow();
}