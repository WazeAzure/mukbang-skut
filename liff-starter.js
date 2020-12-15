window.onload = function() {
    const useNodeJS = false;
    const defaultLiffId = process.env.MY_LIFF_ID;
 
    // DO NOT CHANGE THIS
    let myLiffId = "";
};

function move(){
	liff.openWindow({
            url: 'https://cineplex.com', // Isi dengan Endpoint URL aplikasi web Anda
            external: true
        });
}