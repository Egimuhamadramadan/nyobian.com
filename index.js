
 function ijinlewat(){
	var coba = 1;
	do {
        
		p = prompt("masukan pasword ","");
		if (p==="kupret")
		{alert("Selamat Datang Friends");
		window.open("welcome.html");
		break;
        
	}
	else
	{alert("Pasword Salah! Ulangi Lagi.");}
	

	if (coba===3){
		alert("maap, sepertinya anda pikun ya?");
		history.go(-1);
	}
		coba=coba+1;
	}
	while (coba<=3)
} 
