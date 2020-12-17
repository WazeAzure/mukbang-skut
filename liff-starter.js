window.onload = function(){
	const defaultLiffId = "1655378358-J317E6Xo";
	let myLiffId = "";
	
	myLiffId = defaultLiffId;
	initializeLifforDie(myLiffId);
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
            console.log("LoLError!");
        });
}
function hi(){
	console.log("HIHIHIH")
}
function bye(){
	console.log("User logout cuy!");
	liff.logout();
	alert("Logout!");
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
function sendMessage(){
	liff.sendMessages([{
                'type': 'text',
                'text': "Anda telah menggunakan fitur Send Message!"
            }]).then(function() {
                window.alert('Ini adalah pesan dari fitur Send Message');
            }).catch(function(error) {
                window.alert('Error sending message: ' + error);
            });
	
}