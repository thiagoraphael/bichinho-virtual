var tamagotchi = {
  nome: "Tamagochi",
  fome: 0,
  felicidade: 10,
  vida: 3,
  emoji: '🐶',
};

setInterval(function() {
  function iniciarJogo() {
    document.getElementById("felicidade").textContent = tamagotchi.felicidade;
    document.getElementById("fome").innerHTML = tamagotchi.fome;
    document.getElementById("vida").innerHTML = tamagotchi.vida;
    document.getElementById("emoji").innerHTML = tamagotchi.emoji;
  }
  iniciarJogo();
}, 1);

{ //Funções para mudar os status
  function alimentar() {
    tamagotchi.fome -= 2;
    tamagotchi.felicidade += 1;
    if (tamagotchi.fome < 0) tamagotchi.fome = 0;
    if (tamagotchi.felicidade > 10) tamagotchi.felicidade = 10;
    alert(`${tamagotchi.nome} foi alimentado!`);
  }
  
  function brincar() {
    tamagotchi.fome += 1;
    tamagotchi.felicidade += 2;
    if (tamagotchi.fome > 10) tamagotchi.fome = 10;
    if (tamagotchi.felicidade > 10) tamagotchi.felicidade = 10;
    alert(`${tamagotchi.nome} brincou!`);
  }
  
  function passear() {
    tamagotchi.fome += 1;
    tamagotchi.felicidade += 3;
    if (tamagotchi.fome > 10) tamagotchi.fome = 10;
    if (tamagotchi.felicidade > 10) tamagotchi.felicidade = 10;
    alert(`${tamagotchi.nome} passeou!`);
  }
  
  function trocarEmoji() {
    tamagotchi.fome += 1;
    tamagotchi.felicidade += 1;
    if (tamagotchi.fome > 10) tamagotchi.fome = 10;
    if (tamagotchi.felicidade > 10) tamagotchi.felicidade = 10;
    tamagotchi.emoji = (tamagotchi.emoji === '🐶') ? '🐱' : '🐶';
    alert(`${tamagotchi.nome} trocou de emoji`);
  }

  function mudarNome() {
    tamagotchi.nome = document.getElementById("nome").value
  }

}

function reiniciar() {
  window.location.reload();
}

setInterval(function() {
function atualizarTamagotchi() {
  tamagotchi.fome += 1;
  tamagotchi.felicidade -= 1;

   if (tamagotchi.fome >= 10 || tamagotchi.felicidade <= 0 && tamagotchi.vida > 0) {

    tamagotchi.vida -= 1;

    alert(`${tamagotchi.nome} morreu! Agora ele tem ${tamagotchi.vida} vidas`);

    tamagotchi.fome = 0;
    tamagotchi.felicidade = 10;

  } else if(tamagotchi.vida == 0){
    if (confirm(`${tamagotchi.nome} morreu! Fim de jogo. Reiniciar?`)) {
      tamagotchi.vida = 3;
      reiniciar();
      }
  }


  if (tamagotchi.felicidade <= 5 || tamagotchi.fome >= 5){
    var img = document.querySelector("#tamagochi");
    img.setAttribute('src','img/tamagochi_triste.gif');
  }

  if (tamagotchi.felicidade >= 9 && tamagotchi.fome <= 3){
    var img = document.querySelector("#tamagochi");
    img.setAttribute('src','img/tamagochi_pulando.gif');
  }

 }
 atualizarTamagotchi();
}, 5000);


