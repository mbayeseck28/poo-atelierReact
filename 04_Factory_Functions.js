//Factory Functio : c'est une maquette ou modél pour creer des objects en js
const utilisateur = (noms, email, ...amis) => {
  return {
    noms,
    email,
    amis,
    login() {
      console.log(`${email} est connecté(e)`);
    },
    logout() {
      console.log(`${email} est déconnecté(e)`);
    },
  };
};

const user = utilisateur(
  'Mbaye Seck',
  'mbaye@gmail.com',
  'Aliou',
  'Fanta',
  'Ndiogou'
);
const user2 = utilisateur('Modou Ndiaye', 'ndiaye@gmail.com', 'Sylvet');
const user3 = utilisateur(
  'Maty Diop',
  'maty@gmail.com',
  'Lamine',
  'Abou',
  'Dos'
);

console.log(user);
console.log(user2);
console.log(user3);

user.login();
user.logout();

user2.login();
user2.logout();
