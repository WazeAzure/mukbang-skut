var minuman = document.getElementById("listMinuman");
var makanan = document.getElementById("listMakanan");

var listmakanan = listMenu.makanan;
var listminuman = listMenu.minuman;

var jumlahMakanan = Object.keys(listMenu.makanan).length;
var jumlahMinuman = Object.keys(listMenu.minuman).length;

//bikin kartu makanan
for(let i=0;i<jumlahMakanan;i++){	
	//bikin div maanan
	var card = document.createElement("div");
	card.className = "cards";
	//apply gambar
	var img = document.createElement("img");
	img.src = listmakanan[i].gambar;
	card.appendChild(img);
	//apply text
	var text = document.createElement("p");
	text.innerHTML = listmakanan[i].nama;
	text.className = "title";
	card.appendChild(text);
	//apply deskripsi
	var textDesc = document.createElement("p");
	textDesc.innerHTML = listmakanan[i].deskripsi;
	card.appendChild(textDesc);
	//Jumlah makanan
	var harga = document.createElement("p");
	harga.innerHTML = "Rp " + listmakanan[i].harga + "<hr> Jumlah Porsi:";
	card.appendChild(harga);
	//bikin input didalam card
	var input = document.createElement("input");
	input.setAttribute('type', 'number');
	input.setAttribute('placeholder', '0');
	input.setAttribute('inputmode', 'numeric');
	input.setAttribute('min', '0');
	input.setAttribute('id', `food${i}`);
	card.appendChild(input);
	//taroh card didalam sebuah div listMakanan
	var element = document.getElementById("listMakanan");
	element.append(card);
}

	
for(let i=0;i<jumlahMinuman;i++){	
	var card = document.createElement("div");
	card.className = "cards";
	
	var img = document.createElement("img");
	img.src = listminuman[i].gambar;
	card.appendChild(img);
	
	var text = document.createElement("p");
	text.innerHTML = listminuman[i].nama;
	text.className = "title";
	card.appendChild(text);
	
	var textDesc = document.createElement("p");
	textDesc.innerHTML = listminuman[i].deskripsi;
	card.appendChild(textDesc);
	
	var harga = document.createElement("p");
	harga.innerHTML = "Rp " + listminuman[i].harga + "<hr> Jumlah Porsi:";
	card.appendChild(harga);
	
	var input = document.createElement("input");
	input.setAttribute('type', 'number');
	input.setAttribute('placeholder', '0');
	input.setAttribute('id', `drink${i}`);
	card.appendChild(input);
	
	var element = document.getElementById("listMinuman");
	element.append(card);
}

//Kesimpulan
let totSemua = []
let totPesanan = []
function count(){
	document.getElementById("kesimpulan-makanan").innerHTML = "";
	document.getElementById("kesimpulan-minuman").innerHTML = "";
	totSemua = [];
	for(let i = 0;i<jumlahMakanan;i++){
		let input = document.getElementById(`food${i}`).value;
		if(input > 0){
			let total = input * listmakanan[i].harga;
			totSemua.push(total);
			let hargaView = document.createElement("p");
			hargaView.innerHTML = `${input} ${listmakanan[i].nama}\t\t: ${total}`;
			var element = document.getElementById("kesimpulan-makanan");
			element.append(hargaView);
			totPesanan.push(`\n${input} ${listmakanan[i].nama}: ${total}`);
		};
	}
	console.log("---------------------");
	for(let i = 0;i<jumlahMinuman;i++){
		let input = document.getElementById(`drink${i}`).value;
		if(input > 0){
			let total = input * listminuman[i].harga;
			totSemua.push(total);
			let hargaView = document.createElement("p");
			hargaView.innerHTML = `${input} ${listminuman[i].nama}\t\t: ${total}`;
			var element = document.getElementById("kesimpulan-minuman");
			element.append(hargaView);
			totPesanan.push(`\n${input} ${listminuman[i].nama}: ${total}`);
		};
	}
	console.log(totSemua);
	let confirmSemua = totSemua.reduce((a,b) => {return a+b});
	document.getElementById("total").innerHTML = "Total : Rp " + confirmSemua;
}
