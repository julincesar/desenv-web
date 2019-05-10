var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function adicionarTarefa() {
    var projeto = document.getElementById("projeto").value;
    var descricao = document.getElementById("descricao").value;
    var executor = document.getElementById("executor").value;
    var prazo = document.getElementById("prazo").value;

    if (projeto == undefined || projeto == null || projeto == '') {
        alert('Preencha o projeto!');
        return;
    }

    if (descricao == undefined || descricao == null || descricao == '') {
        alert('Preencha a descrição!');
        return;
    }

    if (prazo == undefined || prazo == null || prazo == '') {
        alert('Preencha o prazo!');
        return;
    }

    var projElem = document.getElementById(projeto);

    if (projElem == null) {
        //Cria um novo projeto se não tiver encontrado um existente
        projElem = criarProjeto(projeto);
    }

    var iden = makeid(6);
    var lista = criarLista(iden, projeto, descricao, executor, prazo);
    projElem.appendChild(lista);

    document.getElementById("projeto").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("executor").value = "";
    document.getElementById("prazo").value = "";
  }

  function excluir(noh) {
    document.getElementById(noh).remove();
  }

  function editar(noh) {
    /* TODO */
    alert("A implementar.");
  }

function criarLista(iden, projeto, descricao, executor, prazo) {

    var h2El = document.createElement("h2");
    var t = document.createTextNode(descricao);
    h2El.appendChild(t);

    var spa = document.createElement("p");
    t = document.createTextNode(executor);
    spa.appendChild(t);

    var para = document.createElement("p");
    para.setAttribute("class", "price");
    t = document.createTextNode(prazo);
    para.appendChild(t);

    var but1 = document.createElement("button");
    t = document.createTextNode("Editar");
    but1.appendChild(t);
    but1.setAttribute("onclick", "editar('" + iden + "')");

    var but2 = document.createElement("button");
    t = document.createTextNode("Excluir");
    but2.appendChild(t);
    but2.setAttribute("onclick", "excluir('" + iden + "')");

    var div1 = document.createElement("div");
    div1.setAttribute("class", "btn-group");
    div1.appendChild(but1);
    div1.appendChild(but2);

    var lista = document.createElement("div");
    lista.setAttribute("id", iden);
    lista.setAttribute("class", "card");
    lista.appendChild(h2El);
    lista.appendChild(spa);
    lista.appendChild(para);
    lista.appendChild(div1);
    
    return lista;
}

function criarProjeto(projeto) {

    var butEl = document.createElement("button");
    var t = document.createTextNode(projeto);
    butEl.appendChild(t);
    butEl.setAttribute("class", "accordion");
    
    butEl.addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
    
    var divpanel = document.createElement("div");
    divpanel.setAttribute("class", "panel flex-container");
    divpanel.setAttribute("id", projeto);

    document.getElementById("Projetos").appendChild(butEl);
    document.getElementById("Projetos").appendChild(divpanel);
    return divpanel;
 }

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


