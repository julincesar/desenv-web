function buscarTarefas(cbFunction) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cbFunction(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", "http://localhost:3000/tarefas", true);
    xhttp.send();
}

function inserirTarefa(tarefa, cbFunction) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cbFunction(JSON.parse(this.responseText));
        }
    };
    xhttp.open("POST", "http://localhost:3000/tarefa", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(tarefa);
}

