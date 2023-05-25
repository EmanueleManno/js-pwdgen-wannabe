console.log('JS OK')

//RECUPERO L'ELEMENTO PASSWORD CHE HO NELLA PAGINA:
const paragraph = document.getElementById('password');
console.log(paragraph);

//CHIEDO IL NOME ALL'UTENTE E LO SALVO:
const userName = prompt("Qual\'è il tuo nome?");
console.log(userName);

//CHIEDO IL COGNOME ALL'UTENTE E LO SALVO:
const surName = prompt("Qual\'è il tuo cognome?");
console.log(surName);

//CHIEDO IL COLORE ALL'UTENTE E LO SALVO:
const favouriteColor = prompt("Qual\'è il tuo colore preferito?");
console.log(favouriteColor);

//COMPONGO LA PASSWORD:
const password = (userName + surName + favouriteColor);

//INSERISCO NELLA PAGINA LA PASSWORD:
paragraph.innerText = 'La tua password è:' + password + '21';
