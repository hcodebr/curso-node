const nome = "Ronaldo";
console.error(new Error(`${nome} brilha muito no Corinthians!`));
console.time('1000-elements');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('1000-elements');

console.warn("Exibindo Alerta!");

console.error("Mais um erro!");
