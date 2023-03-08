const inputEmail = document.querySelector('#input-email-login');
const inputSenha = document.querySelector('#input-senha');
const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});
