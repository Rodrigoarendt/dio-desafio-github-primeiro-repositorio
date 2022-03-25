let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {

  const valorInformadoPeloUsuario =  Math.floor(Math.random() * 10)
  
  if (valorInformadoPeloUsuario >= 0) {
     quantidadePositivos = quantidadePositivos +1}
  

  // TODO Incrementar a "quantidadePositivos" somente SE o "valorInformadoPeloUsuario" for positivo.

}

console.log(`${quantidadePositivos} valores positivos`);
