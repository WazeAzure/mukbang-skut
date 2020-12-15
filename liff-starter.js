window.onload = function() {
    const useNodeJS = false;
    const defaultLiffId = process.env.MY_LIFF_ID;
 
    // DO NOT CHANGE THIS
    let myLiffId = "";
};

function move(){
	liff.openWindow({
            url: 'https://mukbang-skut.herokuapp.com/',
            external: true
        });
}

function loginA(){
	if(!liff.isLogIn){
		liff.login();
	}
}

function closeA(){
	liff.closeWindow();
}

function sendA(){
	liff.sendMessage([{
		type:"text",
		text:"Halo, DIcoding!"
	}])
	.then(() => {
		console.log('message sent');
	})
	.catch((err) => {
		console.log('error', err);
	});
}
