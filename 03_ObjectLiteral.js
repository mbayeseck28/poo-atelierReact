//object Literal
const utilisateur = {
  noms: 'Mbaye',
  email: 'mbaye@gmail.com',
  amis: ['Assane', 'Weuz'],
  login() {
    console.log(`${this.email} est connecté(e)`);
  },

  logout() {
    console.log(`${this.email} est déconnecté(e)`);
  },
};

console.log(utilisateur);

//Accés aux propriétés d'un object

console.log(utilisateur.noms);
console.log(utilisateur.email);

console.log(utilisateur['noms']);
console.log(utilisateur['email']);

utilisateur.noms = 'king baba';
utilisateur['email'] = 'baba@gmail.com';
console.log(utilisateur);
