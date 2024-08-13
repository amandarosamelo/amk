const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você chega na escola, você depara com uma pessoa praticando bullying.",
        alternativas: [
            {
                texto: "Tento ajudar instruindo a vitíma a denunciar para a direção da escola.",
                afirmacao: "No início pensei em ignorar por medo de fazerem algo contra mim, mas repensei e alertei a vitíma e a direção da escola sobre o ocorrido. "
            },
            {
                texto: "Eu pedi para pararem de fazer aquilo e ajudei a vitima a sair da rodinha do bullying porem, corri grande risco de ser uma das vitimas..",
                afirmacao: "..."
            }
        ]
    },
    {
        enunciado: "Em seguida falamos com uma professora, ela decidiu nos ajudar pois era uma denuncia grave, bullying não é brincadeira. Ela nos instruiu a contar tudo que aconteceu e manter sigilo para não termos as identidades reveladas por segurança.Que atitude devemos tomar?",
        alternativas: [
            {
                texto: "Contarmos o que eu presenciamos de forma justa.",
                afirmacao: " As pessoas que praticaram bullying foram chamadas juntos de seus pais e foi alertado a não cometerem novamente pois causaria sua expulsão."
            },
            {
                texto: "Contamos somente para alguns colegas, mas nada iria mudar... ",
                afirmacao: "Esse ato iria se repetir novamente ."
            }
        ]
    },
    {
        enunciado: "A diretora ficou sabendo do ocorrido e logo após ela tomou as devidas providencias.",
        alternativas: [
            {
                texto:"Ela convocou os pais para uma reunião.",
                afirmacao: "Os alertou a conversarem com seus filhos para que não ocorra mais ações como essa."
            },
            {
                texto: "Conversou somente com os alunos",
                afirmacao: "Os alertou, fez com que pedissem desculpas e espalharam panfletos pela escola sobre bullying. "
            }
        ]
    },
    {
        enunciado: "O que falavam nos panfletos?",
        alternativas: [
            {
                texto: "Seja a voz dos que sofrem em silêncio. Juntos somos mais fortes!",
                afirmacao: "Ajudar as vitimas a denunciarem."
            },
            {
                texto: "Diga não a toda forma de violência.",
                afirmacao: "Foi informado os números para denúnciar qualquer violência presenciada pelas pessoas."
            }
        ]
    },
    {
        enunciado: "Tudo isso serviu de alerta para os alunos. Qual foi a reação dos alunos? ",
        alternativas: [
            {
                texto: "As informações serviram para ajudar nas denúncias feita pelos alunos.",
                afirmacao: "Os números de casos denúnciados aumentaram devido a segurança passada pela direção da escola."
            },
            {
                texto: "Eles ficaram contentes devido a importância e preocupação da escola com os alunos. ",
                afirmacao: "A confiança é a chave de tudo. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
