// desafio Classificador de nível de Herói

let nome = "Andryus"
let xp = 9000
let nomeNivel = ""


    if (xp < 1000) {
        nomeNivel = "Ferro"
    } else if (xp >= 1001 && xp <= 2000) {
        nomeNivel = "Bronze"
    } else if (xp >= 2001 && xp <= 5000) {
        nomeNivel = "Prata"
    } else if (xp >= 5001 && xp <= 7000) {
        nomeNivel = "Ouro"
    } else if (xp >= 7001 && xp <= 8000) {
        nomeNivel = "Platina"
    } else if (xp >= 8001 && xp <= 9000) {
        nomeNivel = "Ascendente"
    } else if (xp >= 9001 && xp <= 10000) {
        nomeNivel = "Imortal"
    } else if (xp >= 10001) {
        nomeNivel = "Radiante"
    }

    switch (nomeNivel) {
        case "Ferro":
        console.log("O Herói de nome "+ nome + " está no nível de " + nomeNivel)
        break;
        case "Bronze":
        console.log("O Herói de nome "+ nome + " está no nível de " + nomeNivel)
        break;
        case "Prata":
        console.log("O Herói de nome "+ nome + " está no nível de " + nomeNivel)
        break;
        case "Ouro":
        console.log("O Herói de nome "+ nome + " está no nível de " + nomeNivel)
        break;
        case "Platina":
        console.log("O Herói de nome "+ nome + " está no nível de " + nomeNivel)
        break;
        case "Ascendente":
        console.log("O Herói de nome "+ nome + " está no nível de " + nomeNivel)
        break;
        case "Imortal":
        console.log("O Herói de nome "+ nome + " está no nível de " + nomeNivel)
        break;
        case "Radiante":
        console.log("O Herói de nome "+ nome + " está no nível de " + nomeNivel)
        break;
    }
    