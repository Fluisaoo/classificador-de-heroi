let playername = "soldadox"
let experiencia = Number(prompt("digite o valor da sua experiencia"))
if (experiencia <= 1000) {
console.log("o jogador " + playername + " seu nivel e ferro")
}else if ( experiencia <= 2000) {
    console.log("o jogador " + playername + " seu nivel e bronze")
}else if ( experiencia <= 5000) {
    console.log("o jogador " + playername + " seu nivel e prata ")
}else if ( experiencia <= 7000) {
    console.log("o jogador " + playername + " seu nivel e ouro")
}else if ( experiencia <= 8000) {
    console.log("o jogador " + playername + " seu nivel e platina ")
}else if ( experiencia <= 9000) {
    console.log("o jogador " + playername + " seu nivel e ascendente ")
}else if ( experiencia <= 10000) {
    console.log("o jogador " + playername + " seu nivel e imortal")
}else {
    console.log("o jogador " + playername + " seu nivel e radiante")
}