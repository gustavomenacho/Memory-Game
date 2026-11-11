// As 103 lendas do Smash Deck TCG e o Olvido
// foco: onde fica o meio do personagem na arte, em % da largura
// zoom: tamanho da arte na carta (1 = altura toda; menor que 1 = diminui para o personagem caber inteiro)
const lendas = [
  { nome: "Olvido", classe: "trevas", arte: "arte-olvido.webp", foco: 55, zoom: 0.8 },
  { nome: "Angry Bird (Red)", classe: "soberano", arte: "arte-angry-bird-red.webp", foco: 52, zoom: 1 },
  { nome: "Banjo & Kazooie", classe: "soberano", arte: "arte-banjo-kazooie.webp", foco: 55, zoom: 0.63 },
  { nome: "Battletoads", classe: "soberano", arte: "arte-battletoads.webp", foco: 48, zoom: 0.41 },
  { nome: "Bomberman", classe: "soberano", arte: "arte-bomberman.webp", foco: 55, zoom: 0.98 },
  { nome: "Diddy Kong", classe: "soberano", arte: "arte-diddy-kong.webp", foco: 60, zoom: 0.77 },
  { nome: "Donkey Kong", classe: "soberano", arte: "arte-donkey-kong.webp", foco: 52, zoom: 0.75 },
  { nome: "Fox McCloud", classe: "soberano", arte: "arte-fox-mccloud.webp", foco: 48, zoom: 0.53 },
  { nome: "Kirby", classe: "soberano", arte: "arte-kirby.webp", foco: 40, zoom: 0.78 },
  { nome: "Kratos", classe: "soberano", arte: "arte-kratos.webp", foco: 45, zoom: 0.75 },
  { nome: "Link", classe: "soberano", arte: "arte-link.webp", foco: 51, zoom: 0.75 },
  { nome: "Luigi", classe: "soberano", arte: "arte-luigi.webp", foco: 48, zoom: 1 },
  { nome: "Mario", classe: "soberano", arte: "arte-mario-bros.webp", foco: 53, zoom: 0.68 },
  { nome: "Mega Man", classe: "soberano", arte: "arte-mega-man.webp", foco: 60, zoom: 0.65 },
  { nome: "Pac-Man", classe: "soberano", arte: "arte-pac-man.webp", foco: 44, zoom: 1 },
  { nome: "Pikachu & Charizard", classe: "soberano", arte: "arte-pikachu-charizard.webp", foco: 42, zoom: 0.64 },
  { nome: "Sonic", classe: "soberano", arte: "arte-sonic.webp", foco: 36, zoom: 0.71 },
  { nome: "Steve", classe: "soberano", arte: "arte-steve.webp", foco: 37, zoom: 0.91 },
  { nome: "Akuma", classe: "trevas", arte: "arte-akuma.webp", foco: 58, zoom: 0.62 },
  { nome: "Albert Wesker", classe: "trevas", arte: "arte-albert-wesker.webp", foco: 58, zoom: 1 },
  { nome: "Bowser", classe: "trevas", arte: "arte-bowser.webp", foco: 55, zoom: 0.55 },
  { nome: "Bowser Jr.", classe: "trevas", arte: "arte-bowser-jr.webp", foco: 50, zoom: 0.8 },
  { nome: "Dr. Neo Cortex", classe: "trevas", arte: "arte-doutor-neo-cortex.webp", foco: 42, zoom: 1 },
  { nome: "Dr. Eggman", classe: "trevas", arte: "arte-dr-eggman.webp", foco: 68, zoom: 1 },
  { nome: "Ganondorf", classe: "trevas", arte: "arte-ganondorf.webp", foco: 60, zoom: 0.64 },
  { nome: "Goro", classe: "trevas", arte: "arte-goro.webp", foco: 55, zoom: 0.57 },
  { nome: "Heihachi Mishima", classe: "trevas", arte: "arte-heihachi-mishima.webp", foco: 43, zoom: 0.62 },
  { nome: "King K. Rool", classe: "trevas", arte: "arte-king-k-rool.webp", foco: 50, zoom: 0.55 },
  { nome: "M. Bison", classe: "trevas", arte: "arte-m-bison.webp", foco: 45, zoom: 0.57 },
  { nome: "Metal Sonic", classe: "trevas", arte: "arte-metal-sonic.webp", foco: 50, zoom: 0.51 },
  { nome: "Nemesis", classe: "trevas", arte: "arte-nemesis.webp", foco: 45, zoom: 0.68 },
  { nome: "Ridley", classe: "trevas", arte: "arte-ridley.webp", foco: 46, zoom: 0.49 },
  { nome: "Sephiroth", classe: "trevas", arte: "arte-sephiroth.webp", foco: 30, zoom: 0.8 },
  { nome: "Sigma", classe: "trevas", arte: "arte-sigma.webp", foco: 55, zoom: 0.57 },
  { nome: "Wario & Waluigi", classe: "trevas", arte: "arte-wario-waluigi.webp", foco: 51, zoom: 0.55 },
  { nome: "Alucard", classe: "combate", arte: "arte-alucard.webp", foco: 45, zoom: 0.57 },
  { nome: "Chun-Li", classe: "combate", arte: "arte-chunli.webp", foco: 48, zoom: 1 },
  { nome: "Cloud Strife", classe: "combate", arte: "arte-cloud-strife.webp", foco: 32, zoom: 0.91 },
  { nome: "Dante", classe: "combate", arte: "arte-dante.webp", foco: 50, zoom: 0.93 },
  { nome: "Iori Yagami", classe: "combate", arte: "arte-iori-yagami.webp", foco: 65, zoom: 0.68 },
  { nome: "Jin Kazama", classe: "combate", arte: "arte-jin-kazama.webp", foco: 52, zoom: 0.53 },
  { nome: "Kazuya Mishima", classe: "combate", arte: "arte-kazuya-mishima.webp", foco: 50, zoom: 0.41 },
  { nome: "Mai Shiranui", classe: "combate", arte: "arte-mai-shiranui.webp", foco: 54, zoom: 0.5 },
  { nome: "Morrigan Aensland", classe: "combate", arte: "arte-morrigan-aensland.webp", foco: 52, zoom: 0.39 },
  { nome: "Ryu & Ken", classe: "combate", arte: "arte-ryu-ken.webp", foco: 50, zoom: 0.49 },
  { nome: "Ryu Hayabusa", classe: "combate", arte: "arte-ryu-hayabusa.webp", foco: 62, zoom: 0.84 },
  { nome: "Samus Aran", classe: "combate", arte: "arte-samus-aran.webp", foco: 50, zoom: 0.38 },
  { nome: "Scorpion & Sub-Zero", classe: "combate", arte: "arte-scorpion-sub-zero.webp", foco: 58, zoom: 0.55 },
  { nome: "Sora", classe: "combate", arte: "arte-sora.webp", foco: 51, zoom: 0.75 },
  { nome: "Strider Hiryu", classe: "combate", arte: "arte-strider-hiryu.webp", foco: 55, zoom: 0.84 },
  { nome: "Terry Bogard", classe: "combate", arte: "arte-terry-bogard.webp", foco: 54, zoom: 0.5 },
  { nome: "Tifa Lockhart", classe: "combate", arte: "arte-tifa-lockhart.webp", foco: 57, zoom: 0.48 },
  { nome: "Alan Wake", classe: "sentinela", arte: "arte-alan-wake.webp", foco: 62, zoom: 1 },
  { nome: "Aloy", classe: "sentinela", arte: "arte-aloy.webp", foco: 50, zoom: 0.49 },
  { nome: "Chris Redfield", classe: "sentinela", arte: "arte-chris-redfield.webp", foco: 58, zoom: 0.62 },
  { nome: "Doom Slayer", classe: "sentinela", arte: "arte-doom-slayer.webp", foco: 63, zoom: 0.6 },
  { nome: "Ellie Williams", classe: "sentinela", arte: "arte-ellie-williams.webp", foco: 45, zoom: 0.42 },
  { nome: "Gordon Freeman", classe: "sentinela", arte: "arte-gordon-freeman.webp", foco: 45, zoom: 0.43 },
  { nome: "Isaac Clarke", classe: "sentinela", arte: "arte-isaac-clarke.webp", foco: 50, zoom: 0.43 },
  { nome: "Joel Miller", classe: "sentinela", arte: "arte-joel-miller.webp", foco: 57, zoom: 0.62 },
  { nome: "Lara Croft", classe: "sentinela", arte: "arte-lara-croft.webp", foco: 60, zoom: 0.55 },
  { nome: "Leon S. Kennedy", classe: "sentinela", arte: "arte-leon-s-kennedy.webp", foco: 58, zoom: 0.59 },
  { nome: "Marcus Fenix", classe: "sentinela", arte: "arte-marcus-fenix.webp", foco: 54, zoom: 0.8 },
  { nome: "Master Chief", classe: "sentinela", arte: "arte-master-chief.webp", foco: 45, zoom: 0.75 },
  { nome: "Nathan Drake", classe: "sentinela", arte: "arte-nathan-drake.webp", foco: 56, zoom: 0.65 },
  { nome: "Ratchet", classe: "sentinela", arte: "arte-ratchet.webp", foco: 60, zoom: 0.62 },
  { nome: "Sam Fisher", classe: "sentinela", arte: "arte-sam-fisher.webp", foco: 52, zoom: 0.53 },
  { nome: "Solid Snake", classe: "sentinela", arte: "arte-solid-snake.webp", foco: 47, zoom: 0.54 },
  { nome: "V", classe: "sentinela", arte: "arte-v.webp", foco: 55, zoom: 0.49 },
  { nome: "Agent 47", classe: "crime", arte: "arte-agent-47.webp", foco: 56, zoom: 0.88 },
  { nome: "Aiden Pearce", classe: "crime", arte: "arte-aiden-pearce.webp", foco: 53, zoom: 0.46 },
  { nome: "Arthur Morgan", classe: "crime", arte: "arte-arthur-morgan.webp", foco: 57, zoom: 0.49 },
  { nome: "CJ (Carl Johnson)", classe: "crime", arte: "arte-cj.webp", foco: 55, zoom: 0.41 },
  { nome: "Dutch van der Linde", classe: "crime", arte: "arte-dutch-van-der-linde.webp", foco: 52, zoom: 0.43 },
  { nome: "Franklin Clinton", classe: "crime", arte: "arte-franklin-clinton.webp", foco: 53, zoom: 0.49 },
  { nome: "John Marston", classe: "crime", arte: "arte-john-marston.webp", foco: 52, zoom: 0.47 },
  { nome: "Kazuma Kiryu", classe: "crime", arte: "arte-kazuma-kiryu.webp", foco: 40, zoom: 0.45 },
  { nome: "Marcus Holloway", classe: "crime", arte: "arte-marcus-holloway.webp", foco: 55, zoom: 0.62 },
  { nome: "Max Payne", classe: "crime", arte: "arte-max-payne.webp", foco: 53, zoom: 0.53 },
  { nome: "Michael De Santa", classe: "crime", arte: "arte-michael-de-santa.webp", foco: 55, zoom: 0.45 },
  { nome: "Niko Bellic", classe: "crime", arte: "arte-niko-bellic.webp", foco: 55, zoom: 0.62 },
  { nome: "Red Harlow", classe: "crime", arte: "arte-red-harlow.webp", foco: 65, zoom: 0.63 },
  { nome: "Sly Cooper", classe: "crime", arte: "arte-sly-cooper.webp", foco: 52, zoom: 0.57 },
  { nome: "Tommy Vercetti", classe: "crime", arte: "arte-tommy-vercetti.webp", foco: 50, zoom: 0.57 },
  { nome: "Trevor Philips", classe: "crime", arte: "arte-trevor-philips.webp", foco: 50, zoom: 0.46 },
  { nome: "Vito Scaletta", classe: "crime", arte: "arte-vito-scaletta.webp", foco: 62, zoom: 0.78 },
  { nome: "Wrench", classe: "crime", arte: "arte-wrench.webp", foco: 57, zoom: 0.46 },
  { nome: "Aku Aku", classe: "caos", arte: "arte-aku-aku.webp", foco: 32, zoom: 1 },
  { nome: "Amaterasu", classe: "caos", arte: "arte-amaterasu.webp", foco: 48, zoom: 0.43 },
  { nome: "Bayonetta", classe: "caos", arte: "arte-bayonetta.webp", foco: 45, zoom: 0.43 },
  { nome: "Crash Bandicoot", classe: "caos", arte: "arte-crash-bandicoot.webp", foco: 46, zoom: 0.65 },
  { nome: "Cuphead & Mugman", classe: "caos", arte: "arte-cuphead-mugman.webp", foco: 52, zoom: 0.49 },
  { nome: "Dovahkiin", classe: "caos", arte: "arte-dovahkiin.webp", foco: 32, zoom: 0.75 },
  { nome: "Geralt of Rivia", classe: "caos", arte: "arte-geralt-of-rivia.webp", foco: 50, zoom: 1 },
  { nome: "Inklings", classe: "caos", arte: "arte-inklings.webp", foco: 56, zoom: 0.46 },
  { nome: "Joker (P5)", classe: "caos", arte: "arte-joker-p5.webp", foco: 50, zoom: 0.44 },
  { nome: "Pikmin & Olimar", classe: "caos", arte: "arte-pikmin-olimar.webp", foco: 40, zoom: 0.68 },
  { nome: "Rayman", classe: "caos", arte: "arte-rayman.webp", foco: 52, zoom: 0.69 },
  { nome: "Sackboy", classe: "caos", arte: "arte-sackboy.webp", foco: 55, zoom: 0.62 },
  { nome: "Shao Kahn", classe: "caos", arte: "arte-shao-kahn.webp", foco: 52, zoom: 0.55 },
  { nome: "Shovel Knight", classe: "caos", arte: "arte-shovel-knight.webp", foco: 53, zoom: 0.6 },
  { nome: "Spyro", classe: "caos", arte: "arte-spyro.webp", foco: 58, zoom: 0.57 },
  { nome: "The Knight", classe: "caos", arte: "arte-the-knight.webp", foco: 50, zoom: 0.46 },
  { nome: "Yennefer", classe: "caos", arte: "arte-yennefer.webp", foco: 50, zoom: 0.75 },
];

// Quantos pares cada dificuldade tem (Fácil 4x3, Médio 4x4, Difícil 6x4)
const paresPorNivel = {
  facil: 6,
  medio: 8,
  dificil: 12,
};

const INCLINACAO_MAX = 15; // graus
const TEMPO_PARA_DESVIRAR = 900; // milissegundos

let nivelAtual = "facil";
let cartasViradas = [];
let paresEncontrados = 0;
let tentativas = 0;
let travado = false; // trava os cliques enquanto duas cartas erradas estão à mostra

const tabuleiro = document.getElementById("tabuleiro");
const textoPares = document.getElementById("pares");
const textoTentativas = document.getElementById("tentativas");
const textoRecorde = document.getElementById("recorde");
const janelaVitoria = document.getElementById("vitoria");

// Embaralha com o algoritmo de Fisher-Yates: percorre a lista de trás para
// frente e troca cada item com outro de uma posição aleatória antes dele.
function embaralhar(lista) {
  const copia = lista.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temporario = copia[i];
    copia[i] = copia[j];
    copia[j] = temporario;
  }
  return copia;
}

function montarBaralho() {
  const quantidade = paresPorNivel[nivelAtual];
  const sorteadas = embaralhar(lendas).slice(0, quantidade);

  // Cada lenda sorteada entra duas vezes
  const baralho = [];
  sorteadas.forEach((lenda) => {
    baralho.push(lenda);
    baralho.push(lenda);
  });

  return embaralhar(baralho);
}

function criarCarta(lenda) {
  const carta = document.createElement("button");
  carta.className = "carta classe-" + lenda.classe;
  carta.setAttribute("aria-label", "Carta virada para baixo");
  carta.style.setProperty("--foco", lenda.foco + "%");
  carta.style.setProperty("--zoom", lenda.zoom);
  carta.innerHTML = `
    <span class="carta-inclina">
      <span class="carta-giro">
        <span class="face verso">
          <img src="imagens/marca/logo-smash-deck.webp" alt="">
          <span class="brilho"></span>
        </span>
        <span class="face frente">
          <img class="arte-fundo" src="imagens/artes/${lenda.arte}" alt="">
          <img class="arte ${lenda.zoom === 1 ? "arte-cheia" : ""}" src="imagens/artes/${lenda.arte}" alt="">
          <span class="carta-nome">${lenda.nome}</span>
          <span class="brilho"></span>
        </span>
      </span>
    </span>
  `;

  carta.addEventListener("click", () => virarCarta(carta, lenda));
  carta.addEventListener("pointermove", inclinarCarta);
  carta.addEventListener("pointerleave", endireitarCarta);

  return carta;
}

function desenharTabuleiro() {
  tabuleiro.innerHTML = "";
  tabuleiro.dataset.nivel = nivelAtual;

  montarBaralho().forEach((lenda) => {
    tabuleiro.appendChild(criarCarta(lenda));
  });
}

function virarCarta(carta, lenda) {
  if (travado) return;
  if (carta.classList.contains("virada")) return;

  carta.classList.add("virada");
  carta.setAttribute("aria-label", lenda.nome);
  cartasViradas.push({ carta, lenda });

  if (cartasViradas.length === 2) {
    tentativas++;
    conferirPar();
    atualizarPlacar();
  }
}

function conferirPar() {
  const primeira = cartasViradas[0];
  const segunda = cartasViradas[1];

  if (primeira.lenda.nome === segunda.lenda.nome) {
    marcarComoEncontrada(primeira.carta);
    marcarComoEncontrada(segunda.carta);
    paresEncontrados++;
    cartasViradas = [];

    if (paresEncontrados === paresPorNivel[nivelAtual]) {
      setTimeout(mostrarVitoria, 700);
    }
    return;
  }

  travado = true;
  setTimeout(() => {
    desvirarCarta(primeira.carta);
    desvirarCarta(segunda.carta);
    cartasViradas = [];
    travado = false;
  }, TEMPO_PARA_DESVIRAR);
}

function marcarComoEncontrada(carta) {
  carta.classList.add("encontrada");
  carta.setAttribute("aria-disabled", "true");
  carta.setAttribute("aria-label", carta.getAttribute("aria-label") + ", par encontrado");
  carta.tabIndex = -1; // sai da ordem do Tab
}

function desvirarCarta(carta) {
  carta.classList.remove("virada");
  carta.setAttribute("aria-label", "Carta virada para baixo");
}

// Inclinação 3D e brilho seguindo o mouse
function inclinarCarta(evento) {
  if (evento.pointerType !== "mouse") return;

  const carta = evento.currentTarget;
  const caixa = carta.getBoundingClientRect();
  const x = (evento.clientX - caixa.left) / caixa.width; // de 0 a 1
  const y = (evento.clientY - caixa.top) / caixa.height; // de 0 a 1

  carta.classList.add("inclinando");
  carta.style.setProperty("--ry", (x - 0.5) * 2 * INCLINACAO_MAX + "deg");
  carta.style.setProperty("--rx", (0.5 - y) * 2 * INCLINACAO_MAX + "deg");
  carta.style.setProperty("--brilho-x", Math.round(x * 100) + "%");
  carta.style.setProperty("--brilho-y", Math.round(y * 100) + "%");
}

function endireitarCarta(evento) {
  const carta = evento.currentTarget;
  carta.classList.remove("inclinando");
  carta.style.setProperty("--rx", "0deg");
  carta.style.setProperty("--ry", "0deg");
}

// Recorde = menor número de tentativas, salvo separado para cada dificuldade
function lerRecorde() {
  const salvo = localStorage.getItem("recorde-" + nivelAtual);
  if (salvo === null) return null;
  return Number(salvo);
}

function salvarRecorde(valor) {
  localStorage.setItem("recorde-" + nivelAtual, valor);
}

function atualizarPlacar() {
  const recorde = lerRecorde();
  textoPares.textContent = paresEncontrados + "/" + paresPorNivel[nivelAtual];
  textoTentativas.textContent = tentativas;
  textoRecorde.textContent = recorde === null ? "-" : recorde;
}

function mostrarVitoria() {
  const recorde = lerRecorde();
  const bateuRecorde = recorde === null || tentativas < recorde;

  document.getElementById("vitoria-texto").textContent =
    "Você encontrou todos os pares em " + tentativas + " tentativas.";

  if (bateuRecorde) {
    salvarRecorde(tentativas);
    document.getElementById("vitoria-recorde").textContent = "Novo recorde!";
  } else {
    document.getElementById("vitoria-recorde").textContent =
      "Seu recorde nesta dificuldade é " + recorde + " tentativas.";
  }

  atualizarPlacar();
  janelaVitoria.showModal();
}

function novaPartida() {
  cartasViradas = [];
  paresEncontrados = 0;
  tentativas = 0;
  travado = false;
  desenharTabuleiro();
  atualizarPlacar();
}

function escolherNivel(botao) {
  nivelAtual = botao.dataset.nivel;

  document.querySelectorAll(".botao-nivel").forEach((outro) => {
    outro.setAttribute("aria-pressed", "false");
  });
  botao.setAttribute("aria-pressed", "true");

  novaPartida();
}

document.querySelectorAll(".botao-nivel").forEach((botao) => {
  botao.addEventListener("click", () => escolherNivel(botao));
});

document.getElementById("nova-partida").addEventListener("click", novaPartida);

document.getElementById("jogar-de-novo").addEventListener("click", () => {
  janelaVitoria.close();
  novaPartida();
});

novaPartida();
