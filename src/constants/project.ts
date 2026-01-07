import image1 from "@/assets/A1_1.jpeg";
import image2 from "@/assets/A1_10.jpeg";
import image3 from "@/assets/A1_7.jpeg";
import image4 from '@/assets/svgviewer-png-output.png'

interface Section {
  id: string;
  title: string;
  content: string;
  pictures?: string[];
}

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  sections: Section[];
  competencies?: string[];
}

const projects: ProjectProps[] = [
  {
    id: "0",
    title: "SITIO CARROÇÃO",
    description: `O primeiro resort pedagógico do Brasil! Localizado em Tatuí (SP), 
    oferece aventuras educativas, natureza exuberante e experiências inesquecíveis
    para crianças, jovens e famílias`,
    sections: [
      {
        id: "objetivos",
        title: "Objetivos",
        content: `
      O Sítio do Carroção tem como principal objetivo proporcionar experiências educativas e de lazer que unam aprendizado, natureza e aventura. 
    `,
        pictures: [image1, image2, image3],
      },
      {
        id: "metas",
        title: "Metas Alcançadas",
        content: `
      Ao longo de décadas de atuação, o Sítio do Carroção consolidou-se como uma referência nacional em educação experiencial e turismo pedagógico. 
      Suas principais metas alcançadas incluem:
    `,
        pictures: [image1, image2],
      },
      {
        id: "valores",
        title: "Valores Associados",
        content: `
      O Sítio do Carroção é guiado por valores que fundamentam sua missão educativa e social:
    `,
        pictures: [image4],
      },
      {
        id: "impacto",
        title: "Impacto",
        content: `
      O impacto do Sítio do Carroção vai muito além do entretenimento. 
      Suas atividades contribuem para o desenvolvimento emocional, social e cognitivo das crianças, fortalecendo vínculos, autonomia e senso de responsabilidade.
    `,
        pictures: [image1, image2, image3],
      },
    ],
    competencies: [
      "Desenvolvimento de aplicações web com React e TypeScript",
      "Gerenciamento de estado usando Hooks e Context API",
      "Integração com APIs RESTful e tratamento de dados assíncronos",
      "Estruturação de projetos e boas práticas de componentização",
      "Uso de Tailwind CSS para estilização responsiva e moderna",
      "Controle de navegação e rotas com React Router",
      "Otimização de performance e renderizações condicionais",
      "Trabalho colaborativo e versionamento com Git/GitHub",
    ],
  },
  {
    id: "1",
    title: "INTERPLAN.RIO",
    description: `O INTERPLAN é uma plataforma que reúne os planos
municipais vigentes, permitindo consulta aos diferentes
instrumentos de planejamento`,
    sections: [
      {
        id: "objetivos",
        title: "Objetivos",
        content: `
      O principal objetivo do Interplan.Rio é integrar, de forma transparente e acessível, todos os instrumentos de planejamento da cidade do Rio de Janeiro em uma única plataforma digital. 
      A iniciativa busca fortalecer a governança pública, facilitar o acompanhamento das políticas municipais e permitir que cidadãos, gestores e pesquisadores compreendam a estratégia de desenvolvimento urbano do município.
      
      Além disso, o Interplan.Rio visa promover a interoperabilidade entre diferentes órgãos e secretarias, unificando dados, planos e metas em um ambiente colaborativo, dinâmico e atualizado, apoiando a tomada de decisões baseada em evidências.
    `,
      },
      {
        id: "metas",
        title: "Metas Alcançadas",
        content: `
      Desde sua implantação, o Interplan.Rio alcançou resultados significativos. 
      Entre as principais metas cumpridas estão:
      - A consolidação de dezenas de planos municipais em um só ambiente digital;
      - A ampliação da transparência e do acesso público aos documentos de planejamento;
      - A padronização das informações estratégicas, permitindo consultas rápidas e comparações entre planos e períodos;
      - O fortalecimento do diálogo entre diferentes áreas da administração municipal, facilitando a gestão integrada das políticas públicas.
      
      Essas conquistas tornam o Interplan.Rio uma referência em tecnologia aplicada à gestão pública municipal.
    `,
      },
      {
        id: "valores",
        title: "Valores Associados",
        content: `
      O Interplan.Rio é guiado por valores que refletem os princípios da administração pública moderna:
      - **Transparência:** disponibilizar informações de forma aberta e compreensível para todos;
      - **Inovação:** adotar tecnologias que aprimoram a eficiência e a participação social;
      - **Colaboração:** integrar secretarias, órgãos e sociedade civil em torno de um propósito comum;
      - **Sustentabilidade:** planejar o desenvolvimento da cidade de forma equilibrada e responsável;
      - **Cidadania digital:** garantir que o acesso à informação fortaleça o exercício da cidadania e o controle social.
      
      Esses valores consolidam o papel do Interplan.Rio como um instrumento estratégico para o futuro do Rio de Janeiro.
    `,
      },
      {
        id: "impacto",
        title: "Impacto",
        content: `
      O impacto do Interplan.Rio é percebido em múltiplas dimensões. 
      No âmbito institucional, a plataforma simplifica processos, reduz redundâncias e aprimora a governança dos planos municipais. 
      Para os cidadãos, representa um avanço em transparência e engajamento, permitindo o acompanhamento de metas e políticas públicas com clareza e autonomia.
      
      Além disso, o Interplan.Rio tem servido como base para a formulação de novos projetos, oferecendo uma visão integrada do território e das políticas em andamento. 
      Essa visão sistêmica contribui para que o Rio de Janeiro se consolide como uma cidade inteligente, planejada e participativa — onde a tecnologia está a serviço do bem público e da construção de um futuro mais sustentável e inclusivo.
    `,
      },
    ],
  },
  {
    id: "2",
    title: "MS ATIVO",
    description: `MUNICIPALISMO ATIVO, desenvolvido pelo governo de Mato
Grosso do Sul, traz um novo conceito para a cooperação entre
estado e municípios`,
    sections: [
      {
        id: "objetivos",
        title: "Objetivos",
        content: `
      O principal objetivo do MS Ativo – Municipalismo é fortalecer a gestão pública nos 79 municípios de Mato Grosso do Sul, promovendo cooperação entre o governo estadual e os municípios, descentralizando investimentos e aprimorando a eficiência administrativa. 
      O programa busca também apoiar prefeitos e equipes técnicas, garantindo que as políticas públicas atendam às demandas específicas de cada município e promovam desenvolvimento regional equilibrado.
    `,
      },
      {
        id: "metas",
        title: "Metas Alcançadas",
        content: `
      Desde sua implantação, o MS Ativo alcançou resultados importantes:
      - Implementação do programa em todas as regiões do estado, com participação de todos os municípios;
      - Capacitação de gestores municipais por meio de seminários e encontros regionais;
      - Execução de projetos de infraestrutura, saúde, educação e assistência social;
      - Reconhecimento nacional como modelo de gestão eficiente e inovadora.
    `,
      },
      {
        id: "valores",
        title: "Valores Associados",
        content: `
      O MS Ativo é guiado por valores que fundamentam sua atuação:
      - **Parceria e cooperação:** colaboração entre governo estadual e municípios;
      - **Transparência e responsabilidade:** prestação de contas e uso responsável dos recursos públicos;
      - **Eficiência e eficácia:** foco em resultados concretos e mensuráveis;
      - **Desenvolvimento sustentável:** ações que respeitam o meio ambiente e beneficiam futuras gerações.
    `,
      },
      {
        id: "impacto",
        title: "Impacto",
        content: `
      O impacto do programa é sentido em diversas dimensões:
      - **Qualidade de vida:** melhorias em saúde, educação, infraestrutura e assistência social;
      - **Fortalecimento da gestão municipal:** gestores capacitados para administrar de forma mais eficiente e transparente;
      - **Desenvolvimento regional equilibrado:** redução de desigualdades entre municípios;
      - **Reconhecimento nacional:** destaque como exemplo de boas práticas em gestão pública.
    `,
      },
    ],
  },
  {
    id: "3",
    title: "ABCR +",
    description: `Uma plataforma onde você acompanha os principais
indicadores de desempenho das Melhores Rodovias do Brasil`,
    sections: [
      {
        id: "objetivos",
        title: "Objetivos",
        content: `
      O Painel ABCR+ é uma plataforma interativa desenvolvida pela Associação Brasileira de Concessionárias de Rodovias (ABCR), que visa monitorar, de forma transparente e acessível, o desempenho das rodovias concedidas no Brasil. 
      Entre seus objetivos estão acompanhar indicadores como fluxo de veículos, qualidade do pavimento, segurança viária e satisfação dos usuários, além de auxiliar gestores públicos e privados na tomada de decisões estratégicas e promover o engajamento da sociedade.
    `,
      },
      {
        id: "metas",
        title: "Metas Alcançadas",
        content: `
      Desde sua implantação, o Painel ABCR+ tem contribuído com resultados importantes:
      - Monitoramento contínuo de todas as rodovias concedidas, com dados atualizados sobre fluxo, segurança e infraestrutura;
      - Divulgação de relatórios periódicos, como o Boletim ABCR+, com análises detalhadas sobre o desempenho do setor;
      - Consolidação de dados sobre investimentos das concessionárias, que somam mais de R$ 236 bilhões em 25 anos;
      - Permitir comparações entre rodovias concedidas e rodovias públicas, evidenciando maior eficiência e alocação de recursos.
    `,
      },
      {
        id: "valores",
        title: "Valores Associados",
        content: `
      O Painel ABCR+ é guiado por valores que fortalecem sua missão:
      - **Transparência:** disponibilizar informações claras e acessíveis para todos os usuários;
      - **Eficiência:** garantir a melhoria contínua dos serviços prestados nas rodovias concedidas;
      - **Responsabilidade:** apoiar a gestão sustentável e segura das rodovias;
      - **Inovação:** adotar tecnologias e práticas que promovam evolução e confiabilidade do setor.
    `,
      },
      {
        id: "impacto",
        title: "Impacto",
        content: `
      O impacto do Painel ABCR+ se dá em diversas dimensões:
      - **Qualidade dos serviços:** melhoria contínua das rodovias concedidas, refletindo na segurança e mobilidade dos usuários;
      - **Planejamento eficiente:** auxílio na alocação estratégica de recursos e na priorização de investimentos;
      - **Engajamento social:** acesso público à informação que fortalece a participação cidadã na avaliação dos serviços;
      - **Desenvolvimento sustentável:** monitoramento constante que incentiva práticas responsáveis e sustentáveis na gestão das rodovias.
    `,
      },
    ],
  },
  {
    id: "4",
    title: "AMAZONIA LEGAL",
    description: `O software é uma plataforma de análise e visualização de dados
focada na região da Amazônia Legal, oferecendo acesso atualizado
a indicadores socioeconômicos, demográficos e de infraestrutura,
com base na PNAD Contínua 2023.`,
    sections: [
      {
        id: "objetivos",
        title: "Objetivos",
        content: `
      O Amazônia Legal em Dados é uma plataforma interativa desenvolvida para fornecer uma visão integrada e acessível sobre os nove estados da Amazônia Legal: Acre, Amapá, Amazonas, Maranhão, Mato Grosso, Pará, Rondônia, Roraima e Tocantins. 
      Seus objetivos incluem centralizar dados relevantes, promover a transparência, apoiar a tomada de decisões por gestores públicos e privados, e estimular o engajamento da sociedade na busca por soluções para os desafios da região.
    `,
      },
      {
        id: "metas",
        title: "Metas Alcançadas",
        content: `
      Desde sua implementação, o Amazônia Legal em Dados alcançou importantes resultados:
      - Cobertura completa dos 808 municípios da Amazônia Legal;
      - Disponibilização de mais de 100 indicadores distribuídos em 11 temas, com séries históricas de até 10 anos;
      - Ferramentas interativas, incluindo mapas por estado e município e análises comparativas;
      - Acesso público e gratuito, permitindo que qualquer cidadão explore os dados disponíveis.
    `,
      },
      {
        id: "valores",
        title: "Valores Associados",
        content: `
      A plataforma é guiada por valores que sustentam sua missão:
      - **Transparência:** disponibilizar informações claras e acessíveis;
      - **Colaboração:** parcerias com instituições diversas para enriquecer dados e análises;
      - **Inovação:** uso de tecnologias avançadas para apresentar os dados de forma interativa e compreensível;
      - **Sustentabilidade:** fomentar o desenvolvimento sustentável por meio da informação.
    `,
      },
      {
        id: "impacto",
        title: "Impacto",
        content: `
      O impacto do Amazônia Legal em Dados se dá em múltiplas dimensões:
      - **Apoio à formulação de políticas públicas:** subsidiando decisões mais eficazes para a região;
      - **Promoção do desenvolvimento sustentável:** orientando ações ambientalmente responsáveis;
      - **Fortalecimento da cidadania:** empoderando a população com informações estratégicas;
      - **Estimulação da pesquisa e inovação:** incentivando estudos e soluções para os desafios da Amazônia Legal.
    `,
      },
    ],
  },
  {
    id: "5",
    title: "DGM",
    description: `DESAFIOS DA GESTÃO MUNICIPAL
Desafios da Gestão Municipal (DGM 2024), que apresenta um
panorama de 2010 a 2023 das 100 maiores cidades`,
    sections: [
      {
        id: "objetivos",
        title: "Objetivos",
        content: `
      O DGM – Desafios da Gestão Municipal é um estudo desenvolvido pela Macroplan que avalia a evolução das 100 maiores cidades brasileiras, representando cerca de 50% do PIB nacional. 
      A plataforma tem como objetivos identificar desafios críticos na gestão pública, fornecer dados para apoiar políticas públicas mais eficazes e estimular a melhoria contínua da administração municipal, promovendo transparência e benchmarking.
    `,
      },
      {
        id: "metas",
        title: "Metas Alcançadas",
        content: `
      Desde sua implementação, o DGM alcançou importantes resultados:
      - Cobertura completa das 100 maiores cidades brasileiras, representando metade do PIB nacional;
      - Utilização de 15 indicadores distribuídos em quatro áreas essenciais: Educação, Saúde, Segurança e Saneamento/Sustentabilidade;
      - Atualizações anuais, permitindo acompanhar a evolução da gestão municipal ao longo do tempo;
      - Desenvolvimento de painéis temáticos sobre população, vocações econômicas, planejamento, conectividade e sustentabilidade ambiental.
    `,
      },
      {
        id: "valores",
        title: "Valores Associados",
        content: `
      O DGM é guiado por valores que fortalecem sua missão:
      - **Transparência:** disponibilizar informações claras e acessíveis para gestores e cidadãos;
      - **Eficiência:** promover a melhoria contínua na gestão pública municipal;
      - **Inovação:** utilizar tecnologias avançadas para análise e apresentação de dados;
      - **Colaboração:** estimular a troca de experiências e boas práticas entre municípios.
    `,
      },
      {
        id: "impacto",
        title: "Impacto",
        content: `
      O impacto do DGM se manifesta em diversas dimensões:
      - **Apoio à gestão pública:** fornecimento de dados e análises estratégicas para a tomada de decisões;
      - **Melhoria dos serviços públicos:** identificação de áreas críticas e oportunidades de melhoria;
      - **Promoção do desenvolvimento sustentável:** incentivo à adoção de práticas sustentáveis ambientais e sociais;
      - **Fortalecimento da cidadania:** empoderamento da população com informações sobre a gestão municipal.
    `,
      },
    ],
  },
];

export default projects;
