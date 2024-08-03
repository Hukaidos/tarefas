const formulario = document.querySelector("#formulario");
const tarefa = document.querySelector("#tarefa");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (tarefa.value.trim() === "") {
        return;
    }

    const nova_div = document.createElement("div");
    nova_div.classList.add("nova_div");

    const texto = document.createElement("p");
    texto.textContent = tarefa.value;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("click", () => {
        texto.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.addEventListener("click", () => {
        resultado.removeChild(nova_div);
    });

    nova_div.appendChild(checkbox);
    nova_div.appendChild(texto);
    nova_div.appendChild(botaoExcluir);

    resultado.append(nova_div);

    tarefa.value = "";
    tarefa.focus()
});
