// import { provider } from '../firebase/config.js';
import { userLogin, signInWithGmail, GoogleAuthProvider } from '../firebase/index.js';

export function logIn() {
  // eslint-disable-next-line spaced-comment, operator-linebreak
  const viewLogin = /*html*/ `
      <div id="loginDiv" class="login">

        <div class="logo-container">
          <p class="logo-title">TecHelp</p>
          <div class="logo-circle">
            <img src="https://d9hhrg4mnvzow.cloudfront.net/admissions.prepscholar.com/7ade0971-artificial-intelligence_107g07g07a07a000000028.png" alt="logo" class="logo">
          </div>
          <p class="logo-description">Aquí podrás encontrar toda<br> la ayuda tech que necesitas.</p>
        </div>

        <div class="form-container">
          <p class="description">Ingresa tus datos</p>
          <form action="/" class="form" id="form">

            <input type="email" id="email" placeholder="Correo electrónico" class="input input-email" required>

            <input type="password" id="password" placeholder="Contraseña" class="input input-password" required>

            <input type="submit" value="Ingresar" id ="login-button" class="primary-button login-button">
            <!-- <a class = "link" id="muro" href="#/home"> Mi muro </a> -->
          </form>
          <section class="icon-container">
            <button id='gmailIcon' class="gmailButton" href='#/home'> <!-- <a href='#/home' class="gmail-icon">-->
              <img src="https://sugope.vteximg.com.br/arquivos/iconGoogle.svg?v=637677744074800000" title="Ingresa con Google">
              Ingresa con Google </button>
            <!-- <button type='button' id="gitHubIcon"><a href='#/home'><img src="../imagens/github-svgrepo-com.svg" alt="icono de github" class="icon-github"></a></button> -->
          </section>
          <p class="login-register-text">¿No tienes una cuenta? <a class="link" id="registrate" href="#/registro"> Regístrate</a></p>
        </div>
      </div>`;

  // return viewLogin;

  const divElement = document.createElement('div');
  // divElement.setAttribute('class', 'backgroundImage');
  divElement.innerHTML = viewLogin;
  return divElement;
  // const blankPage = document.querySelector('#container');
  // blankPage.appendChild(divElement);
}

// INICIO DE SESIÓN
export const startSession = () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    userLogin(form.email.value, form.password.value)
      .then((result) => {
        const userCredential = result.user;
        // eslint-disable-next-line no-console
        console.log(userCredential);
        // if (userCredential.emailVerified === false) {
        //   console.log('este correo es inválido');
        // } else {
        //   alert(`Cuenta válida ${userCredential.email}`);
        window.location.hash = '#/home';
      })
      .catch((error) => {
        const err = error.message;
        // eslint-disable-next-line no-alert
        alert(err);
      });
  });
};

// INICIAR SESIÓN CON GOOGLE
export const singInGmail = () => {
  const gmailButton = document.getElementById('gmailIcon');
  gmailButton.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.clear();
    signInWithGmail()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // searchUser;
        window.location.hash = '#/home';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
};
