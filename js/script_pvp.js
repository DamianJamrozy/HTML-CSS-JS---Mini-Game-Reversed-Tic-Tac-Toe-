let taba = [];
let tabb = [];
let tabc = [];
let turn = 0;
let ta1 = 0, ta2 = 0, ta3 = 0, tb1 = 0, tb2 = 0, tb3 = 0, tc1 = 0, tc2 = 0, tc3 = 0;

let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

// Sprawdzanie czy ktoś wygrał
function game(){
	
	// Jeżeli wygrał X standardowo to u nas wygrywa przeciwnik, czyli O.
	if((taba[0]=='X' && taba[1]=='X' && taba[2]=='X') || (tabb[0]=='X' && tabb[1]=='X' && tabb[2]=='X') || (tabc[0]=='X' && tabc[1]=='X' && tabc[2]=='X') || (taba[0]=='X' && tabb[0]=='X' && tabc[0]=='X') || (taba[1]=='X' && tabb[1]=='X' && tabc[1]=='X') || (taba[2]=='X' && tabb[2]=='X' && tabc[2]=='X') || (taba[0]=='X' && tabb[1]=='X' && tabc[2]=='X') || (taba[2]=='X' && tabb[1]=='X' && tabc[0]=='X')){
		alert("Wygrał gracz, grający kółkiem!");
		ta1 = 1, ta2 = 1, ta3 = 1, tb1 = 1, tb2 = 1, tb3 = 1, tc1 = 1, tc2 = 1, tc3 = 1;
	}
	// Jeżeli wygrało O standardowo to u nas wygrywa przeciwnik, czyli X.
	else if((taba[0]=='O' && taba[1]=='O' && taba[2]=='O') || (tabb[0]=='O' && tabb[1]=='O' && tabb[2]=='O') || (tabc[0]=='O' && tabc[1]=='O' && tabc[2]=='O') || (taba[0]=='O' && tabb[0]=='O' && tabc[0]=='O') || (taba[1]=='O' && tabb[1]=='O' && tabc[1]=='O') || (taba[2]=='O' && tabb[2]=='O' && tabc[2]=='O') || (taba[0]=='O' && tabb[1]=='O' && tabc[2]=='O') || (taba[2]=='O' && tabb[1]=='O' && tabc[0]=='O')){
		alert("Wygrał gracz, grający znakiem X!");
		ta1 = 1, ta2 = 1, ta3 = 1, tb1 = 1, tb2 = 1, tb3 = 1, tc1 = 1, tc2 = 1, tc3 = 1;
	}
	else if(ta1 == 1 && ta2 == 1 && ta3 == 1 && tb1 == 1 && tb2 == 1 && tb3 == 1 && tc1 == 1 && tc2 == 1 && tc3 == 1){
		setTimeout(none_win, 300);
		
		function none_win(){
			alert("Remis! Ten pojedynek nie będzie miał rozstrzygnięcia...");
		}
	}
	
	
}


// Wstawianie znaków X lub O w odpowiednie pola od a1 do c3.
a1.onclick = function(){
	if(turn==0 && ta1==0){
		a1.innerHTML = '<img src="../img/X.gif" width="80%">';
		taba[0]='X';
		turn++;
		ta1++;
	}else if(turn==1 && ta1==0){
		a1.innerHTML = '<img src="../img/O.gif" width="80%">';
		taba[0]='O';
		turn--;
		ta1++;
	}else{
		alert("To pole jest już zajęte!");
	}
	setTimeout(game, 200);
	return turn, ta1;
};
a2.onclick = function(){
	if(turn==0 && ta2==0){
		a2.innerHTML = '<img src="../img/X.gif" width="80%">';
		taba[1]='X';
		turn++;
		ta2++;
	}else if(turn==1 && ta2==0){
		a2.innerHTML = '<img src="../img/O.gif" width="80%">';
		taba[1]='O';
		turn--;
		ta2++;
	}else{
		alert("To pole jest już zajęte!");
	}
	setTimeout(game, 200);
	return turn, ta2;
};
a3.onclick = function(){
	if(turn==0 && ta3==0){
		a3.innerHTML = '<img src="../img/X.gif" width="80%">';
		taba[2]='X';
		turn++;
		ta3++;
	}else if(turn==1 && ta3==0){
		a3.innerHTML = '<img src="../img/O.gif" width="80%">';
		taba[2]='O';
		turn--;
		ta3++;
	}else{
		alert("To pole jest już zajęte!");
	}
	setTimeout(game, 200);
	return turn, ta3;
};

b1.onclick = function(){
	if(turn==0 && tb1==0){
		b1.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabb[0]='X';
		turn++;
		tb1++;
	}else if(turn==1 && tb1==0){
		b1.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabb[0]='O';
		turn--;
		tb1++;
	}else{
		alert("To pole jest już zajęte!");
	}
	setTimeout(game, 200);
	return turn, tb1;
};
b2.onclick = function(){
	if(turn==0 && tb2==0){
		b2.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabb[1]='X';
		turn++;
		tb2++;
	}else if(turn==1 && tb2==0){
		b2.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabb[1]='O';
		turn--;
		tb2++;
	}else{
		alert("To pole jest już zajęte!");
	}
	setTimeout(game, 200);
	return turn, tb2;
};
b3.onclick = function(){
	if(turn==0 && tb3==0){
		b3.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabb[2]='X';
		turn++;
		tb3++;
	}else if(turn==1 && tb3==0){
		b3.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabb[2]='O';
		turn--;
		tb3++;
	}else{
		alert("To pole jest już zajęte!");
	}
	setTimeout(game, 200);
	return turn, tb3;
};

c1.onclick = function(){
	if(turn==0 && tc1==0){
		c1.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabc[0]='X';
		turn++;
		tc1++;
	}else if(turn==1 && tc1==0){
		c1.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabc[0]='O';
		turn--;
		tc1++;
		
	}else{
		alert("To pole jest już zajęte!");
	}
	setTimeout(game, 200);
	return turn, tc1;
};
c2.onclick = function(){
	if(turn==0 && tc2==0){
		c2.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabc[1]='X';
		turn++;
		tc2++;
	}else if(turn==1 && tc2==0){
		c2.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabc[1]='O';
		turn--;
		tc2++;
		
	}else{
		alert("To pole jest już zajęte!");
	}
	
	setTimeout(game, 200);
	return turn, tc2;
};
c3.onclick = function(){
	if(turn==0 && tc3==0){
		c3.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabc[2]='X';
		turn++;
		tc3++;
	}else if(turn==1 && tc3==0){
		c3.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabc[2]='O';
		turn--;
		tc3++;
	}else{
		alert("To pole jest już zajęte!");
	}
	setTimeout(game, 200);
	return turn, tc3;
};

// Czyszczenie wyników, tablic oraz zmiennych i rozpoczęcie nowej gry.
function new_game(){
	taba = [];
	tabb = [];
	tabc = [];
	turn = 0;
	a1.innerHTML = '';
	a2.innerHTML = '';
	a3.innerHTML = '';
	b1.innerHTML = '';
	b2.innerHTML = '';
	b3.innerHTML = '';
	c1.innerHTML = '';
	c2.innerHTML = '';
	c3.innerHTML = '';
	ta1 = 0, ta2 = 0, ta3 = 0, tb1 = 0, tb2 = 0, tb3 = 0, tc1 = 0, tc2 = 0, tc3 = 0;
}



