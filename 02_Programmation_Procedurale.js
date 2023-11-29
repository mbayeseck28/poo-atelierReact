// utilisateur 1
const nomsUtili = 'Mbaye Seck';
const emailUtili = 'seckm105@gmail.com';
const amisUtili = ['Fallou', 'Diouf'];
console.log(`Nom : ${nomsUtili}`);
console.log(`Email : ${emailUtili}`);
console.log(`Amis : ${amisUtili}`);
console.log('');

// utilisateur 2
const nomsUtili2 = 'Khadije Ndiaye';
const emailUtili2 = 'khady@gmail.com';
const amisUtili2 = ['Mamadou', 'Pape'];
console.log(`Nom : ${nomsUtili2}`);
console.log(`Email : ${emailUtili2}`);
console.log(`Amis : ${amisUtili2}`);
console.log('');

//utilisateur 3
const nomsUtili3 = 'Amy Ndiaye';
const emailUtili3 = 'amy@gmail.com';
const amisUtili3 = ['Assane', 'Ousseynou'];
console.log(`Nom : ${nomsUtili3}`);
console.log(`Email : ${emailUtili3}`);
console.log(`Amis : ${amisUtili3}`);
console.log('');

//fonctions
function login(email) {
  console.log(`${email} est connecté`);
}

function logout(email) {
  console.log(`${email} est déconnecté`);
}

login(emailUtili);
logout(emailUtili);
login(emailUtili2);
logout(emailUtili2);
