import { Timeline } from "@/components/Timeline";

function Projects() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">Projetos</h2>

        <div className="w-[80%] mb-12">
          <p className="text-white text-lg mt-4">
            Ao longo de mais de{" "}
            <span className="text-orange-500">5 anos de experiência</span>,
            trabalhei em diversos projetos que me permitiram adquirir
            conhecimento sólido e prático.
            <br />
            Nesta sessão, apresento alguns dos{" "}
            <span className="text-orange-500">projetos em que participei</span>,
            destacando desafios e soluções implementadas.
            <br />
            Para conhecer todos os detalhes, você pode baixar o PDF completo dos
            projetos clicando{" "}
            <span
              className="text-orange-500 cursor-pointer"
              onClick={() => window.open("/projetos.pdf", "_blank")}
            >
              aqui
            </span>{" "}
            ou em um dos cartões abaixo.
          </p>
        </div>
        <Timeline
          data={[
            {
              id: "jul-2026",
              label: "2026",
              days: [
                {
                  id: "1",
                  dateLabel: "Janeiro - Atualmente",
                  cards: [
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "ERP - interno",
                      footer: "- Rac",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "Mentor",
                      footer: "- Rac",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "Smart Stock",
                      footer: "- Rac",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "Hub de cobranças",
                      footer: "- Rac",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "jul-2025",
              label: "2025",
              days: [
                {
                  id: "1",
                  dateLabel: "Outubro - Dezembro",
                  cards: [
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "ERP - interno",
                      footer: "- Rac",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "Mentor",
                      footer: "- Rac",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "Smart Stock",
                      footer: "- Rac",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "Hub de cobranças",
                      footer: "- Rac",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                  ],
                },
                {
                  id: "1",
                  dateLabel: "Julho - Outubro",
                  cards: [
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "Carroção",
                      footer: "- Rac",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ, gRPC",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                  ],
                },
                {
                  id: "1",
                  dateLabel: "Janeiro - Julho",
                  cards: [
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "Interplan.RIO",
                      footer: "- Macroplan",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ, gRPC",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "MS Ativo",
                      footer: "- Macroplan",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ, gRPC",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "aug-2018",
              label: "2024",
              days: [
                {
                  id: "21",
                  dateLabel: "Janeiro - Novembro",
                  cards: [
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "Interplan.RIO",
                      footer: "- Macroplan",
                      items: [
                        { label: "Tecnologias", value: "React, Tanstack" },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "MS Ativo",
                      footer: "- Macroplan",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ, gRPC",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "aug-2018",
              label: "2023",
              days: [
                {
                  id: "21",
                  dateLabel: "Janeiro - Dezembro",
                  cards: [
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "ABCR +",
                      footer: "- Macroplan",
                      items: [
                        { label: "Tecnologias", value: "React, Tanstack" },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "Amazonia Legal",
                      footer: "- Macroplan",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ, gRPC",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "DGM",
                      footer: "- Macroplan",
                      items: [
                        {
                          label: "Tecnologias",
                          value: "Next.js, Node.js, Fastify, RabbitMQ, gRPC",
                        },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "aug-2018",
              label: "2022",
              days: [
                {
                  id: "21",
                  dateLabel: "Julho - Dezembro",
                  cards: [
                    {
                      id: "1",
                      icon: "fa-asterisk",
                      iconColor: "text-green-500",
                      title: "Cidade SUSP",
                      footer: "- Macroplan",
                      items: [
                        { label: "Tecnologias", value: "React, Tanstack" },
                        { label: "Território", value: "Brasil" },
                        { label: "Descrição", value: "lorem ipsum" },
                      ],
                    },
                  ],
                },
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
