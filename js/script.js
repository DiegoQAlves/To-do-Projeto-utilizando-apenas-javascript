console.log("SCRIPT TODO");
const btnAdicionar = document.querySelector("#adicionar-tarefa");
const boardTarefas = document.querySelector("#tarefas");
const inputTarefa = document.querySelector("#tarefa-digitada");
const card = document.querySelector(".card-tarefa");
const texto = boardTarefas.querySelector(".texto-tarefa");
const tarefasConcluidas = document.querySelector("#concluidas");

function cadastrarTarefa(event) {
  const tarefaDigitada = inputTarefa.value;
  if (!tarefaDigitada) {
    inputTarefa.style.borderColor = "red";
    return alert("Você digitar uma tarefa primeiro!");
  }
  let card = `<div class="col-md-4">
                  <div class="card-tarefa">
                      <div class="texto-tarefa">${tarefaDigitada}</div>
                      <div class="botao-tarefa">
                        <img
                            src="img/check.png"
                            width="32"
                            alt="Botão para finalizar tarefa"
                            title="Botão para finalizar tarefa"
                        />
                      </div>
                  </div>
                  </div>`;

  tarefaDigitada.input = null;
  boardTarefas.insertAdjacentHTML("beforeend", card);
  console.log(event);

  const btnFinalizarTarefa =
    boardTarefas.lastElementChild.lastElementChild.lastElementChild;

  btnFinalizarTarefa.addEventListener("click", (event) => {
    // const card =  boardTarefas.lastElementChild.remove();
    btnFinalizarTarefa.parentNode.parentNode.classList.add("tarefa-concluida");
    const buttonExcluir = document.createElement("button");
    buttonExcluir.setAttribute("class", "btn btn-danger");
    buttonExcluir.textContent = "excluir";

    buttonExcluir.onclick = () => {
      btnFinalizarTarefa.parentNode.parentNode.remove();
    };

    btnFinalizarTarefa.parentNode.parentNode.appendChild(buttonExcluir);

    tarefasConcluidas.appendChild(btnFinalizarTarefa.parentNode.parentNode);
  });

  inputTarefa.removeAttribute("style");
}

btnAdicionar.addEventListener("click", cadastrarTarefa);
inputTarefa.addEventListener("keypress", (event) => {
  inputTarefa.style.borderColor = "green";
  if (event.keyCode == 13) {
    cadastrarTarefa();
  }
});
