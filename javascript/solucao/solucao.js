class Jogador {
  nome;
  pontosPartida = 0;
  constructor(nome) {
    this.nome = nome;
  }
}

class Partida {
  score;

  constructor(jogador1, jogador2) {
    if (!(jogador1 instanceof Jogador) || !(jogador2 instanceof Jogador)) {
      throw new Error("Esses jogadores não existem!");
    }
    this.jogador1 = jogador1;
    this.jogador2 = jogador2;
    this.score = "";
  }

  pontoGanho(jogador) {
    jogador.pontosPartida += 1;
  }

  empate(pontos) {
    switch (pontos) {
      case 0:
        this.score = "Love-all";
        break;
      case 1:
        this.score = "Fifteen-All";
        break;
      case 2:
        this.score = "Thirty-All";
        break;
      default:
        this.score = "Deuce";
    }
  }

  vantagem(jogador1, jogador2) {
    let minusResult = jogador1.pontosPartida - jogador2.pontosPartida;
    if (minusResult === 1) this.score = "Vantagem " + jogador1.nome;
    else if (minusResult === -1) this.score = "Vantagem " + jogador2.nome;
    else if (minusResult >= 2)
      this.score = "Vitória para " + jogador1.nome;
    else this.score = "Vitória para " + jogador2.nome;
  }

  scoreTemporario(tempScore) {
    switch (tempScore) {
      case 0:
        this.score += "Love";
        break;
      case 1:
        this.score += "Fifteen";
        break;
      case 2:
        this.score += "Thirty";
        break;
      case 3:
        this.score += "Forty";
        break;
    }
  }

  pegarScore(jogador1, jogador2) {
    let tempScore = 0;
    if (jogador1.pontosPartida === jogador2.pontosPartida) {
      this.empate(jogador1.pontosPartida);
    } else if (jogador1.pontosPartida >= 4 || jogador2.pontosPartida >= 4) {
      this.vantagem(jogador1, jogador2);
    } else {
      for (var i = 1; i < 3; i++) {
        if (i === 1) tempScore = jogador1.pontosPartida;
        else {
          this.score += "-";
          tempScore = jogador2.pontosPartida;
        }
        this.scoreTemporario(tempScore);
      }
    }
    return this.score;
  }
}