const defaultLiffId = "1655378358-J317E6Xo";
window.onload = function(){

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
	
	if(liff.isInClient()){
		document.getElementById('user_login').style.display = "none";
		document.getElementById('user_logout').style.display = "none";
	}
	if (liff.isLoggedIn()) {
        document.getElementById('user_login').disabled = true;
		console.log("LOGIN!")
    } else {
        document.getElementById('user_logout').disabled = true;
		console.log("LOGOUT!")
    }
}