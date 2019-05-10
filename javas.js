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

    var unli = projElem.getElementsByTagName("ul")[0];
    var iden = makeid(6);
    var lista = criarLista(iden, projeto, descricao, executor, prazo);
    unli.appendChild(lista);

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
  }

function criarLista(iden, projeto, descricao, executor, prazo) {

    var lab = document.createElement("label");
    var t = document.createTextNode("Atribuído a:");
    lab.appendChild(t);

    var spa = document.createElement("span");
    t = document.createTextNode(executor);
    spa.appendChild(t);

    var para = document.createElement("p");
    t = document.createTextNode(descricao);
    para.appendChild(t);

    var spa2 = document.createElement("span");
    t = document.createTextNode(prazo);
    spa2.appendChild(t);

    var but1 = document.createElement("button");
    t = document.createTextNode("Editar");
    but1.appendChild(t);
    but1.setAttribute("onclick", "editar('" + iden + "')");

    var but2 = document.createElement("button");
    t = document.createTextNode("Excluir");
    but2.appendChild(t);
    but2.setAttribute("onclick", "excluir('" + iden + "')");

    var div1 = document.createElement("div");
    div1.appendChild(but1);
    div1.appendChild(but2);

    var lista = document.createElement("LI");
    lista.setAttribute("id", iden);
    lista.appendChild(lab);
    lista.appendChild(spa);
    lista.appendChild(para);
    lista.appendChild(spa2);
    lista.appendChild(div1);
    

    return lista;
}

function criarProjeto(projeto) {
    var divproj = document.createElement("div");
    divproj.setAttribute("id", projeto);

    var h2El = document.createElement("h2");
    var t = document.createTextNode("Projeto: " + projeto);
    h2El.appendChild(t);

    var ulEl = document.createElement("ul");

    divproj.appendChild(h2El);
    divproj.appendChild(ulEl);

    document.body.appendChild(divproj);
    return divproj;
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
