// Definiowanie wszystkich zmiennych
let taba = [];
let tabb = [];
let tabc = [];
let tsmart = [];
let turn = 0;
let i = 0;
let j = 0;
let k = 0;
let ok = 0;
let SI = 'NONE';
let smove = 'NONE';
let player = 'NONE';
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

let boxx = document.getElementById("boxx");
let boxo = document.getElementById("boxo");
let game_box = document.getElementById("game_box");
let select_box = document.getElementById("select_box");

// Wybranie znaku X lub Object
boxx.onclick = function(){
	player = 'X';
	select_box.style.display = "none";
	game_box.style.display = "block";
	turn = 0;
	return turn, player;
}

boxo.onclick = function(){
	player = 'O';
	select_box.style.display = "none";
	game_box.style.display = "block";
	turn = 1;
	setTimeout(si_first, 200);
	return turn, player;
}

// Gra

// Sprawdzanie czy ktoś wygrał
function game(){
	// Jeżeli wygrał X standardowo to u nas wygrywa przeciwnik, czyli O.
	if((taba[0]=='X' && taba[1]=='X' && taba[2]=='X') || (tabb[0]=='X' && tabb[1]=='X' && tabb[2]=='X') || (tabc[0]=='X' && tabc[1]=='X' && tabc[2]=='X') || (taba[0]=='X' && tabb[0]=='X' && tabc[0]=='X') || (taba[1]=='X' && tabb[1]=='X' && tabc[1]=='X') || (taba[2]=='X' && tabb[2]=='X' && tabc[2]=='X') || (taba[0]=='X' && tabb[1]=='X' && tabc[2]=='X') || (taba[2]=='X' && tabb[1]=='X' && tabc[0]=='X')){
		alert("Wygrała Sztuczna Inteligencja, grająca kółkiem!");
		ta1 = 1, ta2 = 1, ta3 = 1, tb1 = 1, tb2 = 1, tb3 = 1, tc1 = 1, tc2 = 1, tc3 = 1;
	}
	// Jeżeli wygrało O standardowo to u nas wygrywa przeciwnik, czyli X.
	else if((taba[0]=='O' && taba[1]=='O' && taba[2]=='O') || (tabb[0]=='O' && tabb[1]=='O' && tabb[2]=='O') || (tabc[0]=='O' && tabc[1]=='O' && tabc[2]=='O') || (taba[0]=='O' && tabb[0]=='O' && tabc[0]=='O') || (taba[1]=='O' && tabb[1]=='O' && tabc[1]=='O') || (taba[2]=='O' && tabb[2]=='O' && tabc[2]=='O') || (taba[0]=='O' && tabb[1]=='O' && tabc[2]=='O') || (taba[2]=='O' && tabb[1]=='O' && tabc[0]=='O')){
		alert("Wygrała Sztuczna Inteligencja, grająca znakiem X!");
		ta1 = 1, ta2 = 1, ta3 = 1, tb1 = 1, tb2 = 1, tb3 = 1, tc1 = 1, tc2 = 1, tc3 = 1;
	}
	 else{
		 // Gra sztuczna inteligencja
				// Uruchomienie sztucznej inteligencji z szansą na znalezienie potencjalnie niechcianego ruchu, który zakończyłby się porażką SI (Tylko w pionie oraz poziomie uwzględniając jedynie przegraną w środku pola - ukos oraz rogi nie są brane pod uwagę)
				smart = 1;
				
				// SI postara się dokonać dobrego wyboru
				if(smart==1){
					j = 0;
					console.log("Szukam dobrego wyjścia omijając: ");
					// Analizuje możliwe kombinacje nieporządanych ruchów i dodaje je do tablicy
					if(player=='X'){
						if(ta1==1 && ta3==1){
							if(taba[0]=='O' && taba[2]=='O'){
								tsmart[j]=2;
								j++;
							}
						}
						if(tb1==1 && tb3==1){
							if(tabb[0]=='O' && tabb[2]=='O'){
								tsmart[j]=5;
								j++;
							}
						}
						if(tc1==1 && tc3==1){
							if(tabc[0]=='O' && tabc[2]=='O'){
								tsmart[j]=8;
								j++;
							}
						}
						if(ta1==1 && tc1==1){
							if(taba[0]=='O' && tabc[0]=='O'){
								tsmart[j]=4;
								j++;
							}
						}
						if(ta2==1 && tc2==1){
							if(taba[1]=='O' && tabc[2]=='O'){
								tsmart[j]=5;
								j++;
							}
						}
						if(ta3==1 && tc3==1){
							if(taba[1]=='O' && tabc[2]=='O'){
								tsmart[j]=6;
								j++;
							}
						}
					}
					else if(player=='O'){
						if(ta1==1 && ta3==1){
							if(taba[0]=='X' && taba[2]=='X'){
								tsmart[j]=2;
								j++;
							}
						}
						if(tb1==1 && tb3==1){
							if(tabb[0]=='X' && tabb[2]=='X'){
								tsmart[j]=5;
								j++;
							}
						}
						if(tc1==1 && tc3==1){
							if(tabc[0]=='X' && tabc[2]=='X'){
								tsmart[j]=8;
								j++;
							}
						}
						if(ta1==1 && tc1==1){
							if(taba[0]=='X' && tabc[0]=='X'){
								tsmart[j]=4;
								j++;
							}
						}
						if(ta2==1 && tc2==1){
							if(taba[1]=='X' && tabc[2]=='X'){
								tsmart[j]=5;
								j++;
							}
						}
						if(ta3==1 && tc3==1){
							if(taba[1]=='X' && tabc[2]=='X'){
								tsmart[j]=6;
								j++;
							}
						}
					}
					console.log(tsmart);
					
					
					// Nieskończona pętla szukająca dobrego rozwiązania, maksymalnie 20 razy.
					k=0;
					while(1){
						SI = Math.floor(Math.random() * 9) + 1;
						
						console.log(SI);
						
						i=0;
						k++;
						ok = 1;
						
						while(i<j){
							if(SI==tsmart[i] && k<20){
								ok=0;
								break;
							}
							i++;
						}
						if(ok==1){
							ok=0;
							i=0;
							
							if(SI==1 && ta1==0){
								if(player=='X'){
									a1.innerHTML = '<img src="../img/O.gif" width="80%">';
									turn--;
									taba[0]='O';
								}else{
									a1.innerHTML = '<img src="../img/X.gif" width="80%">';
									turn++;
									taba[0]='X';
								}
								ta1++;
								i++;
								break;
							}
							else if(SI==2 && ta2==0){
								if(player=='X'){
									a2.innerHTML = '<img src="../img/O.gif" width="80%">';
									turn--;
									taba[1]='O';
								}else{
									a2.innerHTML = '<img src="../img/X.gif" width="80%">';
									turn++;
									taba[1]='X';
								}
								ta2++;
								i++;
								break;
							}
							else if(SI==3 && ta3==0){
								if(player=='X'){
									a3.innerHTML = '<img src="../img/O.gif" width="80%">';
									turn--;
									taba[2]='O';
								}else{
									a3.innerHTML = '<img src="../img/X.gif" width="80%">';
									turn++;
									taba[2]='X';
								}
								ta3++;
								i++;
								break;
							}
							else if(SI==4 && tb1==0){
								if(player=='X'){
									b1.innerHTML = '<img src="../img/O.gif" width="80%">';
									turn--;
									tabb[0]='O';
								}else{
									b1.innerHTML = '<img src="../img/X.gif" width="80%">';
									turn++;
									tabb[0]='X';
								}
								tb1++;
								i++;
								break;
							}
							else if(SI==5 && tb2==0){
								if(player=='X'){
									b2.innerHTML = '<img src="../img/O.gif" width="80%">';
									turn--;
									tabb[1]='O';
								}else{
									b2.innerHTML = '<img src="../img/X.gif" width="80%">';
									turn++;
									tabb[1]='X';
								}
								tb2++;
								i++;
								break;
							}
							else if(SI==6 && tb3==0){
								if(player=='X'){
									b3.innerHTML = '<img src="../img/O.gif" width="80%">';
									turn--;
									tabb[2]='O';
								}else{
									b3.innerHTML = '<img src="../img/X.gif" width="80%">';
									turn++;
									tabb[2]='X';
								}
								tb3++;
								i++;
								break;
							}
							else if(SI==7 && tc1==0){
								if(player=='X'){
									c1.innerHTML = '<img src="../img/O.gif" width="80%">';
									turn--;
									tabc[0]='O';
								}else{
									c1.innerHTML = '<img src="../img/X.gif" width="80%">';
									turn++;
									tabc[0]='X';
								}
								tc1++;
								i++;
								break;
							}
							else if(SI==8 && tc2==0){
								if(player=='X'){
									c2.innerHTML = '<img src="../img/O.gif" width="80%">';
									turn--;
									tabc[1]='O';
								}else{
									c2.innerHTML = '<img src="../img/X.gif" width="80%">';
									turn++;
									tabc[1]='X';
								}
								tc2++;
								i++;
								break;
							}
							else if(SI==9 && tc3==0){
								if(player=='X'){
									c3.innerHTML = '<img src="../img/O.gif" width="80%">';
									turn--;
									tabc[2]='O';
								}else{
									c3.innerHTML = '<img src="../img/X.gif" width="80%">';
									turn++;
									tabc[2]='X';
								}
								tc3++;
								i++;
								break;
							}
							
							
						}
					}
				}
				// Jeżeli wygrał X standardowo to u nas wygrywa przeciwnik, czyli O.
				if((taba[0]=='X' && taba[1]=='X' && taba[2]=='X') || (tabb[0]=='X' && tabb[1]=='X' && tabb[2]=='X') || (tabc[0]=='X' && tabc[1]=='X' && tabc[2]=='X') || (taba[0]=='X' && tabb[0]=='X' && tabc[0]=='X') || (taba[1]=='X' && tabb[1]=='X' && tabc[1]=='X') || (taba[2]=='X' && tabb[2]=='X' && tabc[2]=='X') || (taba[0]=='X' && tabb[1]=='X' && tabc[2]=='X') || (taba[2]=='X' && tabb[1]=='X' && tabc[0]=='X')){
					ta1 = 1, ta2 = 1, ta3 = 1, tb1 = 1, tb2 = 1, tb3 = 1, tc1 = 1, tc2 = 1, tc3 = 1;
					setTimeout(player_win_o, 300);
					
					function player_win_o(){
						alert("Wygrał gracz, grający kółkiem!");
					}
				}
				// Jeżeli wygrało O standardowo to u nas wygrywa przeciwnik, czyli X.
				else if((taba[0]=='O' && taba[1]=='O' && taba[2]=='O') || (tabb[0]=='O' && tabb[1]=='O' && tabb[2]=='O') || (tabc[0]=='O' && tabc[1]=='O' && tabc[2]=='O') || (taba[0]=='O' && tabb[0]=='O' && tabc[0]=='O') || (taba[1]=='O' && tabb[1]=='O' && tabc[1]=='O') || (taba[2]=='O' && tabb[2]=='O' && tabc[2]=='O') || (taba[0]=='O' && tabb[1]=='O' && tabc[2]=='O') || (taba[2]=='O' && tabb[1]=='O' && tabc[0]=='O')){
					ta1 = 1, ta2 = 1, ta3 = 1, tb1 = 1, tb2 = 1, tb3 = 1, tc1 = 1, tc2 = 1, tc3 = 1;
					setTimeout(player_win_x, 300);
					
					function player_win_x(){
						alert("Wygrał gracz, grający znakiem X!");
					}
				}
				else if(ta1 == 1 && ta2 == 1 && ta3 == 1 && tb1 == 1 && tb2 == 1 && tb3 == 1 && tc1 == 1 && tc2 == 1 && tc3 == 1){
					setTimeout(none_win, 300);
					
					function none_win(){
						alert("Remis! Udało Ci się doprowadzić do remisu... To tak jakby wygranko ale jednak trochę brakło. Może następnym razem Ci się uda?");
					}
				}
			}		
		}		

function si_first(){
	fsi();
	function fsi(){
		SI = Math.floor(Math.random() * 9) + 1;
		console.log(SI);
		if(SI==1){
			a1.innerHTML = '<img src="../img/X.gif" width="80%">';
			taba[0]='X';
			ta1++;
		}
		else if(SI==2){
			a2.innerHTML = '<img src="../img/X.gif" width="80%">';
			taba[1]='X';
			ta2++;
		}
		else if(SI==3){
			a3.innerHTML = '<img src="../img/X.gif" width="80%">';
			taba[2]='X';
			ta3++;
		}
		else if(SI==4){
			b1.innerHTML = '<img src="../img/X.gif" width="80%">';
			tabb[0]='X';
			tb1++;
		}
		else if(SI==5){
			b2.innerHTML = '<img src="../img/X.gif" width="80%">';
			tabb[1]='X';
			tb2++;
		}
		else if(SI==6){
			b3.innerHTML = '<img src="../img/X.gif" width="80%">';
			tabb[2]='X';
			tb3++;
		}
		else if(SI==7){
			c1.innerHTML = '<img src="../img/X.gif" width="80%">';
			tabc[0]='X';
			tc1++;
		}
		else if(SI==8){
			c2.innerHTML = '<img src="../img/X.gif" width="80%">';
			tabc[1]='X';
			tc2++;
		}
		else if(SI==9){
			c3.innerHTML = '<img src="../img/X.gif" width="80%">';
			tabc[2]='X';
			tc3++;
		}
	}
}

	// RUCHY GRACZA

// Wstawianie znaków X lub O w odpowiednie pola od a1 do c3 przez gracza.
a1.onclick = function(){
	console.log(turn);
	console.log(ta1);
	console.log(player);
	if(turn==0 && ta1==0 && player=='X'){
		a1.innerHTML = '<img src="../img/X.gif" width="80%">';
		taba[0]='X';
		turn++;
		ta1++;
		setTimeout(game, 200);
	}else if(turn==1 && ta1==0 && player=='O'){
		a1.innerHTML = '<img src="../img/O.gif" width="80%">';
		taba[0]='O';
		turn--;
		ta1++;
		setTimeout(game, 200);
	}else{
		alert("To pole jest już zajęte!");
		
	}
	return turn, ta1;
};
a2.onclick = function(){
	if(turn==0 && ta2==0 && player=='X'){
		a2.innerHTML = '<img src="../img/X.gif" width="80%">';
		taba[1]='X';
		turn++;
		ta2++;
		setTimeout(game, 200);
	}else if(turn==1 && ta2==0 && player=='O'){
		a2.innerHTML = '<img src="../img/O.gif" width="80%">';
		taba[1]='O';
		turn--;
		ta2++;
		setTimeout(game, 200);
	}else{
		alert("To pole jest już zajęte!");
		
	}
	return turn, ta2;
};
a3.onclick = function(){
	if(turn==0 && ta3==0 && player=='X'){
		a3.innerHTML = '<img src="../img/X.gif" width="80%">';
		taba[2]='X';
		turn++;
		ta3++;
		setTimeout(game, 200);
	}else if(turn==1 && ta3==0 && player=='O'){
		a3.innerHTML = '<img src="../img/O.gif" width="80%">';
		taba[2]='O';
		turn--;
		ta3++;
		setTimeout(game, 200);
	}else{
		alert("To pole jest już zajęte!");
		
	}
	return turn, ta3;
};

b1.onclick = function(){
	if(turn==0 && tb1==0 && player=='X'){
		b1.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabb[0]='X';
		turn++;
		tb1++;
		setTimeout(game, 200);
	}else if(turn==1 && tb1==0 && player=='O'){
		b1.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabb[0]='O';
		turn--;
		tb1++;
		setTimeout(game, 200);
	}else{
		alert("To pole jest już zajęte!");
		
	}
	return turn, tb1;
};
b2.onclick = function(){
	if(turn==0 && tb2==0 && player=='X'){
		b2.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabb[1]='X';
		turn++;
		tb2++;
		setTimeout(game, 200);
	}else if(turn==1 && tb2==0 && player=='O'){
		b2.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabb[1]='O';
		turn--;
		tb2++;
		setTimeout(game, 200);
	}else{
		alert("To pole jest już zajęte!");
		
	}
	return turn, tb2;
};
b3.onclick = function(){
	if(turn==0 && tb3==0 && player=='X'){
		b3.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabb[2]='X';
		turn++;
		tb3++;
		setTimeout(game, 200);
	}else if(turn==1 && tb3==0 && player=='O'){
		b3.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabb[2]='O';
		turn--;
		tb3++;
		setTimeout(game, 200);
	}else{
		alert("To pole jest już zajęte!");
		
	}
	return turn, tb3;
};

c1.onclick = function(){
	if(turn==0 && tc1==0 && player=='X'){
		c1.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabc[0]='X';
		turn++;
		tc1++;
		setTimeout(game, 200);
	}else if(turn==1 && tc1==0 && player=='O'){
		c1.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabc[0]='O';
		turn--;
		tc1++;
		setTimeout(game, 200);
	}else{
		alert("To pole jest już zajęte!");
		
	}
	return turn, tc1;
};
c2.onclick = function(){
	if(turn==0 && tc2==0 && player=='X'){
		c2.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabc[1]='X';
		turn++;
		tc2++;
		setTimeout(game, 200);
	}else if(turn==1 && tc2==0 && player=='O'){
		c2.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabc[1]='O';
		turn--;
		tc2++;
		setTimeout(game, 200);
	}else{
		alert("To pole jest już zajęte!");
		
	}
	return turn, tc2;
};
c3.onclick = function(){
	if(turn==0 && tc3==0 && player=='X'){
		c3.innerHTML = '<img src="../img/X.gif" width="80%">';
		tabc[2]='X';
		turn++;
		tc3++;
		setTimeout(game, 200);
	}else if(turn==1 && tc3==0 && player=='O'){
		c3.innerHTML = '<img src="../img/O.gif" width="80%">';
		tabc[2]='O';
		turn--;
		tc3++;
		setTimeout(game, 200);
	}else{
		alert("To pole jest już zajęte!");
	}
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
	console.clear();
	window.location.reload(true);
}