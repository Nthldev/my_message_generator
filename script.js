//função para gerar um numero aleatorio que será usado como index
const generateRandomNumber = num => {
    return Math.floor(Math.random() * num);
}

const sabedoria = {
  acolhimento: [
    "Sei que esse momento é pesado e obscuro, mas quando superá-lo (e irá superá-lo!) você se tornará ainda mais forte!",
    "Não desista! Pode parecer o caminho mais fácil, mas são os caminhos mais difíceis que trazem as melhores recompensas!",
    "Entendo, todos temos momentos desses. Por mais que pareça super pesado e te dê uma sensação de isolamento, você não está só! Busque apoio nos seus amigos, ou familiares ou grupos de apoio que possam lhe ajudar a superar esse momento juntos!"
  ],
  elogio: [
    "e veja como você é especial! Não é sobre habilidades excepcionais ou panorama socio-econômico, mas é sobre você ser quem você é! E você é incrível!",
    "e tenha orgulho! Muitas vezes não nos damos o devido valor. A vida é difícil todos os dias, e continuamos aqui seguindo em frente! Orgulhe-se de sua história e irá alcançar voos ainda mais altos!",
    "e se ame! Em tempos de redes sociais nos encantamos muito com os outros e esquecemos de nos amar. Você é merecedor de amor e do seu próprio carinho! Se ame e se cuide! Você merece!"
  ],
  motivacao: [
    "Não tenha medo de iniciar uma nova jornada! O tempo irá passar do mesmo jeito. A pergunta é: onde você estará ao final deste tempo?",
    "Mesmo que seja de pouquinho em pouquinho, não desista! Estar em movimento é um progresso sempre, independente do tamanho dos passos.",
    "Você pode achar que não tem essa força, mas no fundo você sabe que é bom! Você sabe do que é capaz! E você deve acreditar em você! Este é o primeiro passo para que o restante do mundo também acredite!"
  ]
};



//função para logar a mensagem na tela
const mensagemIncentivo = () => {
    console.log("testando");
}

mensagemIncentivo();