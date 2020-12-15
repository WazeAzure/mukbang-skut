window.onload = function(){
	const defaultLiffId = "1655378358-J317E6Xo";
	initializeLiffOrDie(defaultLiffId);
}

function initializeLiffOrDie(myLiffId){
	initializeLiff(myLiffId);
}

function initializeLiff(myLiffId){
	liff
		.init({
			liffid: myLiffId
		})
		.then(() => {
			initializeApp();
		})
}

function initializeApp(){
	displayLiffData();
    displayIsInClientInfo();
    registerButtonHandlers();
	
	if (liff.isLoggedIn()) {
        document.getElementById('logInButton').disabled = true;
    } else {
        document.getElementById('liffLogoutButton').disabled = true;
    }
}

function displayLiffData() {
    document.getElementById('isInClient').textContent = liff.isInClient();
    document.getElementById('isLoggedIn').textContent = liff.isLoggedIn();
}

function displayIsInClientInfo() {
    if (liff.isInClient()) {
        document.getElementById('logInButton').classList.toggle('hidden');
        document.getElementById('logOutButton').classList.toggle('hidden');
        document.getElementById('isInClientMessage').textContent = 'You are opening the app in the in-app browser of LINE.';
    } else {
        document.getElementById('isInClientMessage').textContent = 'You are opening the app in an external browser.';
    }
}
function registerButtonHandlers() {
    document.getElementById('extendwButton').addEventListener('click', function() {
        liff.openWindow({
            url: 'https://mukbang-skut.herokuapp.com/', // Isi dengan Endpoint URL aplikasi web Anda
            external: true
        });
    });
 
 document.getElementById('closeButton').addEventListener('click', function() {
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.closeWindow();
        }
    });
     document.getElementById('logInButton').addEventListener('click', function() {
        if (!liff.isLoggedIn()) {
            liff.login();
        }
    });
 
 
    document.getElementById('logOutButton').addEventListener('click', function() {
        if (liff.isLoggedIn()) {
            liff.logout();
            window.location.reload();
        }
    });
 
    document.getElementById('sendButton').addEventListener('click', function() {
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.sendMessages([{
                'type': 'text',
                'text': "Anda telah menggunakan fitur Send Message!"
            }]).then(function() {
                window.alert('Ini adalah pesan dari fitur Send Message');
            }).catch(function(error) {
                window.alert('Error sending message: ' + error);
            });
        }
    });
}