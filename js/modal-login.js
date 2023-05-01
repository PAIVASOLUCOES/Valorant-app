import { fecharSideBar } from "./menuMobile.js";
export function modalLogin() {
  //// Abrir Modal Login sessão
  const janelaSessao = document.querySelector(".janela-sessao");
  const btnIniciarSessao = document.getElementById("iniciar-a");
  const containerIniciarSessao = document.querySelector(
    ".container-iniciarSessao"
  );

  btnIniciarSessao.addEventListener("click", abrirModal);
  function abrirModal(event) {
    event.preventDefault();

    containerIniciarSessao.classList.toggle("active");
    containerIniciarSessao.classList.add("effect");
    if (containerIniciarSessao.classList.contains("active")) {
      setTimeout(() => {
        document.addEventListener("click", fecharJanelaInciarSessao);
      }, 100);
    }
  }

  /// Close Modal Login

  const btnCloseLogin = document.querySelector(".btn-closeLogin");
  btnCloseLogin.addEventListener("click", closeJanela);

  function closeJanela() {
    document.removeEventListener("click", fecharJanelaInciarSessao);
    containerIniciarSessao.classList.remove("active");
  }

  /// Outside Modal janela

  function fecharJanelaInciarSessao(event) {
    event.preventDefault();
    document.removeEventListener("click", fecharJanelaInciarSessao);
    const janelaPosition = janelaSessao.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    if (
      x >= janelaPosition.left &&
      x <= janelaPosition.right &&
      y >= janelaPosition.top &&
      y <= janelaPosition.bottom
    ) {
      document.addEventListener("click", fecharJanelaInciarSessao);
    } else {
      closeJanela();
    }
  }

  //// Modal no MenuMobile
  const btnModalOpenMenu = document.getElementById("dropdown-iniciar");
  btnModalOpenMenu.addEventListener("click", (event) => {
    event.preventDefault();
    fecharSideBar();
    abrirModal(event);
  });
}
