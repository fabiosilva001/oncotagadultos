/* =========================================================
   ONCOTAG — JAVASCRIPT
   ========================================================= */


/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });


  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
    });

  });

}


/* =========================================================
   MODAL
   ========================================================= */

const modal = document.getElementById("infoModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");


const contents = {

  cancer: `
    <h2>🩺 Entendendo o câncer infantil</h2>

    <p>
      O câncer infantojuvenil corresponde a um grupo de doenças que podem
      surgir em diferentes partes do organismo.
    </p>

    <p>
      Entre os tipos mais frequentes estão as leucemias, os linfomas e os
      tumores do sistema nervoso central.
    </p>

    <p>
      Diferentemente de muitos cânceres em adultos, os cânceres na infância
      e adolescência geralmente não estão relacionados a hábitos de vida.
    </p>

    <p>
      Atualmente, cerca de 80% das crianças e adolescentes com câncer podem
      ser curados quando o diagnóstico é realizado precocemente e o tratamento
      é feito em centros especializados.
    </p>

    <p class="source-mini">
      📚 Fonte: Instituto Nacional de Câncer (INCA) — Câncer infantojuvenil.
    </p>
  `,


  diagnostico: `
    <h2>🔎 Diagnóstico</h2>

    <p>
      O diagnóstico pode envolver diferentes etapas, dependendo dos sinais
      apresentados e da suspeita médica.
    </p>

    <h3>Etapas possíveis</h3>

    <p>
      Suspeita → Investigação → Exames → Diagnóstico →
      Planejamento do tratamento.
    </p>

    <p>
      Podem ser solicitados exames clínicos, laboratoriais e de imagem e,
      em alguns casos, procedimentos específicos para confirmar o diagnóstico.
    </p>

    <p>
      O processo pode ser cansativo e gerar dúvidas. Por isso, é importante
      conversar com a equipe de saúde e perguntar sempre que alguma
      informação não estiver clara.
    </p>

    <p class="source-mini">
      📚 Fonte: INCA — Diagnóstico precoce do câncer na criança e no adolescente.
    </p>
  `,


  exames: `
    <h2>🧪 Exames</h2>

    <p>
      Os exames ajudam a equipe a entender o estado de saúde da criança,
      identificar características da doença e acompanhar a resposta ao
      tratamento.
    </p>

    <p>
      Alguns exames podem ser simples, enquanto outros podem causar medo
      ou desconforto.
    </p>

    <p>
      Antes de cada procedimento, sempre que possível, explique à criança
      o que vai acontecer utilizando palavras que ela consiga compreender.
    </p>

    <p class="source-mini">
      📚 Fonte: National Cancer Institute (NCI) —
      Children with Cancer: A Guide for Parents.
    </p>
  `,


  tratamentos: `
    <h2>💊 Tratamentos</h2>

    <p>
      O tratamento depende do tipo de câncer, das características da doença
      e das condições de cada criança.
    </p>

    <h3>Entre os tratamentos utilizados estão:</h3>

    <ul>
      <li>Quimioterapia;</li>
      <li>Cirurgia;</li>
      <li>Radioterapia;</li>
      <li>Transplante de células-tronco hematopoéticas, em situações específicas;</li>
      <li>Outras terapias indicadas pela equipe.</li>
    </ul>

    <p>
      O tratamento é planejado individualmente e pode envolver diferentes
      profissionais da saúde.
    </p>

    <p class="source-mini">
      📚 Fontes: INCA — Câncer infantojuvenil; NCI —
      Children with Cancer: A Guide for Parents.
    </p>
  `,


  efeitos: `
    <h2>🤢 Efeitos do tratamento</h2>

    <p>
      Os tratamentos podem provocar diferentes efeitos no organismo.
      Eles variam de acordo com o tratamento realizado e com cada criança.
    </p>

    <h3>Podem ocorrer alterações como:</h3>

    <ul>
      <li>Cansaço;</li>
      <li>Náuseas;</li>
      <li>Alterações no apetite;</li>
      <li>Queda de cabelo;</li>
      <li>Dor;</li>
      <li>Alterações emocionais;</li>
      <li>Maior risco de infecções.</li>
    </ul>

    <p>
      Nem toda criança terá os mesmos efeitos.
      A equipe de saúde deve orientar a família sobre o que esperar
      e sobre o que fazer diante de cada situação.
    </p>

    <p class="source-mini">
      📚 Fonte: National Cancer Institute (NCI) —
      Children with Cancer: A Guide for Parents.
    </p>
  `,


  alimentacao: `
    <h2>🍎 Alimentação durante o tratamento</h2>

    <p>
      Durante o tratamento, a alimentação pode precisar de adaptações.
    </p>

    <p>
      Alterações no apetite, náuseas, mudanças no paladar e outros efeitos
      podem dificultar a alimentação.
    </p>

    <p>
      A família deve seguir as orientações da equipe responsável pelo
      tratamento e, quando necessário, buscar acompanhamento nutricional.
    </p>

    <div class="important-message">
      Não é recomendado seguir dietas encontradas na internet sem conversar
      com os profissionais que acompanham a criança.
    </div>

    <p class="source-mini">
      📚 Fonte: National Cancer Institute (NCI) —
      Children with Cancer: A Guide for Parents.
    </p>
  `,


  rotina: `
    <h2>🏠 Cuidados e rotina</h2>

    <p>
      O tratamento pode modificar a rotina da criança e de toda a família.
    </p>

    <p>
      Sempre que for possível e seguro, manter elementos da rotina anterior
      pode ajudar a criança a preservar uma sensação de normalidade.
    </p>

    <p>
      Escola, brincadeiras, contato com amigos, momentos em família e
      atividades prazerosas podem continuar fazendo parte da vida,
      respeitando as condições clínicas e as orientações da equipe.
    </p>

    <p class="source-mini">
      📚 Fonte: National Cancer Institute (NCI) —
      Support for Families: Childhood Cancer.
    </p>
  `,


  medo: `
    <h2>😟 Medo</h2>

    <p>
      A criança pode sentir medo de exames, procedimentos, hospitalização,
      separação dos familiares, dor ou de não saber o que vai acontecer.
    </p>

    <h3>Como ajudar</h3>

    <ul>
      <li>Explique o que vai acontecer antes do procedimento.</li>
      <li>Use palavras simples.</li>
      <li>Permita que a criança faça perguntas.</li>
      <li>Não prometa que algo não vai doer se você não tiver certeza.</li>
      <li>Permaneça próximo quando possível.</li>
      <li>Valide o sentimento.</li>
    </ul>

    <p>
      “Eu sei que isso pode dar medo. Estou aqui com você.”
    </p>

    <p class="source-mini">
      📚 Fontes: NCI — Children with Cancer: A Guide for Parents;
      NCI — Support for Families: Childhood Cancer.
    </p>
  `,


  tristeza: `
    <h2>😢 Tristeza</h2>

    <p>
      A criança pode ficar mais quieta, chorar, perder o interesse por
      algumas atividades ou demonstrar menos disposição.
    </p>

    <h3>Como ajudar</h3>

    <ul>
      <li>Não obrigue a criança a parecer feliz.</li>
      <li>Permita que ela demonstre o que está sentindo.</li>
      <li>Ofereça companhia.</li>
      <li>Mantenha atividades prazerosas dentro do possível.</li>
      <li>Pergunte como ela está sem pressioná-la.</li>
    </ul>

    <p>
      Se a tristeza for intensa ou persistente, converse com a equipe de saúde.
    </p>

    <p class="source-mini">
      📚 Fontes: NCI — Support for Families: Childhood Cancer;
      NCI — Children with Cancer: A Guide for Parents.
    </p>
  `,


  ansiedade: `
    <h2>😰 Ansiedade</h2>

    <p>
      A ansiedade pode aparecer antes de consultas, exames e procedimentos
      ou diante das mudanças provocadas pelo tratamento.
    </p>

    <p>
      Pode aparecer como preocupação, irritabilidade, dificuldade para dormir
      ou mudanças de comportamento.
    </p>

    <h3>Como ajudar</h3>

    <ul>
      <li>Explique previamente o que vai acontecer.</li>
      <li>Mantenha uma rotina previsível quando possível.</li>
      <li>Use técnicas simples de respiração e relaxamento.</li>
      <li>Permita que a criança leve um objeto de conforto.</li>
      <li>Esteja disponível para conversar.</li>
    </ul>

    <p>
      Se a ansiedade estiver muito intensa ou interferindo na rotina,
      procure orientação da equipe.
    </p>
  `,


  raiva: `
    <h2>😡 Raiva / irritação</h2>

    <p>
      A irritação pode estar relacionada ao medo, à dor, ao cansaço,
      às limitações impostas pelo tratamento ou à dificuldade de compreender
      o que está acontecendo.
    </p>

    <h3>Como ajudar</h3>

    <ul>
      <li>Mantenha a calma.</li>
      <li>Tente compreender o que está por trás da reação.</li>
      <li>Permita formas seguras de expressar a raiva.</li>
      <li>Estabeleça limites quando houver comportamentos que possam machucar alguém.</li>
      <li>Evite interpretar toda irritação como “desobediência”.</li>
    </ul>
  `,


  silencio: `
    <h2>😶 Silêncio / isolamento</h2>

    <p>
      Algumas crianças podem falar menos ou preferir ficar sozinhas.
      O silêncio não significa necessariamente que a criança não esteja
      sentindo nada.
    </p>

    <h3>Como ajudar</h3>

    <ul>
      <li>Não force a criança a conversar.</li>
      <li>Mostre que você está disponível.</li>
      <li>Use brincadeiras, desenhos ou outras atividades para facilitar a expressão.</li>
      <li>Faça perguntas abertas.</li>
      <li>Mostre que ela pode conversar quando estiver preparada.</li>
    </ul>

    <p>
      Se o isolamento for intenso ou persistente, converse com a equipe
      de saúde.
    </p>
  `,


  culpa: `
    <h2>😣 Culpa</h2>

    <p>
      Algumas crianças podem acreditar que fizeram alguma coisa para
      causar a doença.
    </p>

    <div class="important-message">
      “Você não fez nada para causar isso.”
    </div>

    <p>
      É importante corrigir ideias equivocadas que possam surgir durante
      o tratamento.
    </p>

    <p class="source-mini">
      📚 Fontes: NCI — Children with Cancer: A Guide for Parents;
      American Cancer Society — conteúdos de apoio a crianças com câncer.
    </p>
  `,


  alegria: `
    <h2>😊 Alegria</h2>

    <p>
      Mesmo durante o tratamento, a criança continua sendo criança.
    </p>

    <p>
      Ela pode brincar, rir, sentir curiosidade, querer conversar,
      encontrar amigos e demonstrar interesse pelas coisas de que gosta.
    </p>

    <p>
      Momentos de alegria não significam que ela esteja ignorando a doença.
    </p>

    <h3>Como ajudar</h3>

    <ul>
      <li>Incentive brincadeiras quando forem permitidas.</li>
      <li>Mantenha hobbies e atividades prazerosas.</li>
      <li>Favoreça contato com amigos e familiares.</li>
      <li>Respeite os limites físicos da criança.</li>
      <li>Permita momentos de diversão.</li>
    </ul>
  `,


  psicologico: `
    <h2>💙 Acompanhamento psicológico</h2>

    <p>
      O acompanhamento psicológico é um espaço de escuta e cuidado para
      pais, responsáveis e familiares que estão atravessando o processo
      de tratamento de uma criança ou adolescente.
    </p>

    <p>
      O diagnóstico e o tratamento podem trazer medo, ansiedade, tristeza,
      culpa, cansaço e muitas mudanças na rotina.
    </p>

    <p>
      Ter um espaço para falar sobre essas experiências pode ajudar o
      responsável a lidar melhor com esse período.
    </p>

    <h3>O acompanhamento pode ajudar em questões como:</h3>

    <ul>
      <li>Ansiedade;</li>
      <li>Medo;</li>
      <li>Sobrecarga emocional;</li>
      <li>Dificuldades para lidar com o diagnóstico;</li>
      <li>Mudanças na rotina familiar;</li>
      <li>Culpa;</li>
      <li>Dificuldades de comunicação;</li>
      <li>Luto e perdas;</li>
      <li>Autocuidado;</li>
      <li>Fortalecimento da rede de apoio.</li>
    </ul>

    <p class="source-mini">
      📚 Fonte: Vargas, R. C. R.; Medeiros, Z. —
      O atendimento psicológico a familiares em oncologia pediátrica.
      Revista Brasileira de Cancerologia, INCA.
    </p>
  `

};


/* =========================================================
   ABRIR MODAL
   ========================================================= */

document.querySelectorAll("[data-modal]").forEach(button => {

  button.addEventListener("click", () => {

    const key = button.dataset.modal;

    if (contents[key]) {

      modalContent.innerHTML = contents[key];

      modal.classList.add("active");

      document.body.style.overflow = "hidden";

    }

  });

});


/* =========================================================
   FECHAR MODAL
   ========================================================= */

function closeModal() {

  modal.classList.remove("active");

  document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);


modal.addEventListener("click", event => {

  if (event.target === modal) {
    closeModal();
  }

});


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeModal();
  }

});