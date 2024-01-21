var pizza = []; //faço um vetor para armazenar os recheios
var cont = 0; //inicializo meu contador para fazer a contagem de checkBox selecionados

function finalizarPedido() {
    if (pizza.length == 0) {
        alert("Informe pelo menos um recheio!");
        return;
    }
    else {
        document.getElementById("agradecimentos").style.display = "block";
        document.getElementById("escurecer").style.display = "block";
    }
}

function voltar() {
    location.reload();
}

function meuPedido() {
    var recheios = document.querySelectorAll(".sabor:checked"); //faço uma variável para armazenar os recheios que o usuario clica
    var lista = ""; //inicializo uma variável prara concatenar os recheios
    pizza = []; //limpo meu vetor

    for (var i = 0; i < recheios.length; i++) { //faço um laço de repetição que vai até o tamanho da variável, ou seja, a quantidade de recheios que o usuário escolheu
        pizza.push(recheios[i].value); //coloco os recheios no meu vetor pizza pegando o valor dos checkbox da página

        lista += i + 1 + "° recheio: " + pizza[i] + "; "; //concateno os recheios pegando meu vetor com índice [i];
    }

    if (recheios.length == 0) {
        document.getElementById("recheiosPedidos").textContent = "Você ainda não informou recheios ^_^"; //mostro uma mensagem que não informou recheios
    }
    else {
        document.getElementById("recheiosPedidos").textContent = lista; //mostro pro usuário os recheios que selecionou
    }

    var tipoPizza = document.querySelector("#tamanhosPizza");
    var valor = tipoPizza.options[tipoPizza.selectedIndex].value;
    var texto = tipoPizza.options[tipoPizza.selectedIndex].text;

    document.getElementById("tamDaPizzaPedido").textContent = "Tamanho da pizza: " + texto;

    if (valor == 2) {
        var preco = 35;
        document.getElementById("precoTamDaPizzaPedido").textContent = "Preço da pizza: R$ " + preco.toFixed(2);
    }
    if (valor == 4) {
        var preco = 55;
        document.getElementById("precoTamDaPizzaPedido").textContent = "Preço da pizza: R$ " + preco.toFixed(2);
    }
    if (valor == 6) {
        var preco = 70;
        document.getElementById("precoTamDaPizzaPedido").textContent = "Preço da pizza: R$ " + preco.toFixed(2);
    }
    if (valor == 8) {
        var preco = 85;
        document.getElementById("precoTamDaPizzaPedido").textContent = "Preço da pizza: R$ " + preco.toFixed(2);
    }
    var bebida = document.querySelector("#selecaoBebidas");
    var precoB = Number(bebida.options[bebida.selectedIndex].value);
    var textoB = bebida.options[bebida.selectedIndex].text;

    if (textoB == "Sem bebida") {
        document.getElementById("bebidaPedido").textContent = textoB;
    }
    else {
        document.getElementById("bebidaPedido").textContent = "Sua bebida: " + textoB;
    }
    if (precoB == 0) {
        document.getElementById("precoBebidaPedido").textContent = "Sem custos";
    }
    else {
        document.getElementById("precoBebidaPedido").textContent = "Preço da bebida: R$ " + precoB.toFixed(2);
    }

    var total = preco + precoB;
    document.getElementById("precoTotal").textContent = "Preço total: R$ " + total.toFixed(2);
}
var btnAbrir = document.getElementById("btn-acompanhar"); //pego os ids dos botões
var btnFechar = document.getElementById("btnFecharTela");
var tela = document.getElementById("telaVerPedido"); //pego o id da tela dos pedidos no qual quero abrir e fechar

btnAbrir.addEventListener("click", function () { //pego a minha variável que armazeno o id do meu botão e crio uma escuta, quando ouvir o estado de click quando o usuário clica, faço uma função anônima que
    var recheios = document.querySelectorAll(".sabor:checked");  //faço uma variável para armazenar os recheios que o usuario clica 
    var tipoPizza = document.querySelector("#tamanhosPizza"); //inicializo uma variável pro select do tamanho da pizza que o usuario selecionou
    var valor = tipoPizza.options[tipoPizza.selectedIndex].value; //pego o valor do select que o usuário selecionou da página
    cont = 0; //limpo meu contador

    recheios.forEach(function (e) { //faço um laço de repetição onde o forEach serve pra ir até os checkBox selecionados pelo usuário
        if (e.checked) //verefico se está verdadeiro meu checkBox
            cont++; //incremento meu contador
    });

    if (cont <= valor) { //faço uma condição onde o usuário terá que escolher pelo menos um recheio e até o máximo pelo tamanho de sua pizza
        meuPedido();
        if (tela.style.display === "none" || tela.style.display === "") { //verefico se esta invisível ou vazio pra garantir que ele sempre avance nesse if 
            tela.style.display = "block"; //se passar a tela fica block ou seja será visível pro usuário
        }
        else { //se não
            tela.style.display = "none"; //ele fica invisível
        }
    } else {
        alert("Informe os recheios corretamente"); //se não informar os recheios corretamente aparece este alert()
    }
});

btnFechar.addEventListener("click", function () { //faço também pro botão de fechar
    if (tela.style.display === "block") { //verefico o estado da minha tela se esta visível
        tela.style.display = "none"; //se passar a tela fica invisível
    }
    else { //se não
        tela.style.display = "block"; //ela fica visível pro usuário
    }
});

//para atualizar cada recheio que o usuário seleciona e desmarca no checkBox faço um ouvinte
var checkBox = document.querySelectorAll(".sabor"); //faço uma variável que pega os checkBox
checkBox.forEach(function (e) { //crio um forEach que ira interar sobre os checkBox que estão em interação com o usuário
    e.addEventListener("change", () => { //adiciono um ouvinte no meu parãmetro da minha função, com change significando que sobre a atividade desmarcar ou marcar ele ouve
        var recheios = document.querySelectorAll(".sabor:checked");  //faço uma variável para armazenar os recheios que o usuario clica 
        var tipoPizza = document.querySelector("#tamanhosPizza"); //inicializo uma variável pro select do tamanho da pizza que o usuario selecionou
        var valor = tipoPizza.options[tipoPizza.selectedIndex].value; //pego o valor do select que o usuário selecionou da página
        cont = 0; //limpo meu contador

        recheios.forEach(function (e) { //faço um laço de repetição onde o forEach serve pra ir até os checkBox selecionados pelo usuário
            if (e.checked) //verefico se está verdadeiro meu checkBox
                cont++; //incremento meu contador
        });

        if (cont <= valor) { //faço uma condição onde o usuário terá que escolher seus recheios até o máximo pelo tamanho de sua pizza
            meuPedido();
        } else {
            alert("Informe os recheios corretamente");
            e.checked = false;
        }
    });
});

var tipoPizza = document.querySelector("#tamanhosPizza");
tipoPizza.addEventListener("click", () => {
    var recheios = document.querySelectorAll(".sabor:checked");
    var valor = tipoPizza.options[tipoPizza.selectedIndex].value;

    if (recheios.length > valor) {
        alert("Informe os recheios corretamente");

        pizza = [];

        recheios.forEach(function (e, index) {
            if (index < valor) {
                pizza.push(e.value);
            }
            else {
                tela.style.display = "none"; //ele fica invisível
                e.checked = false;
            }
        });
    }
    else {
        meuPedido();
    }
});


var pedidoBebida = document.querySelector("#selecaoBebidas");
pedidoBebida.addEventListener("click", () => {
    meuPedido();
});