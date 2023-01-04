import aoVivo from 'assets/icons/ao_vivo.svg'
import registradas from 'assets/icons/aulas_registradas.svg'
import cCaseiro from 'assets/icons/cervejeiro_caseiro-17.svg'
import metodologia from 'assets/icons/metodologia.svg'
import tireDuvidas from 'assets/icons/tire_duvidas.svg'
import compromisso from 'assets/icons/compromisso_aprendizado-06.svg'
import materialDidatico from 'assets/icons/material_digital_note-23.svg'
import treinamento from 'assets/icons/gestao-16.svg'
import certificado from 'assets/icons/diploma-27.svg'

export const diferenciais = {
    CCO : [
        { title: "Um curso totalmente focado",
          description: "Técnicas exclusivas para fazer Cerveja em Casa",
          icon: cCaseiro
        },
        { title: "Metodologia",
          description: "Totalmente EaD, o ensino é estruturado, planejado e orientado para obter o melhor desempenho do aluno.",
          icon: metodologia
        },
        { title: "Tire suas dúvidas em tempo real",
          description: "Todas as práticas laboratoriais são feitas ao vivo e com a participação simultânea dos alunos.",
          icon: tireDuvidas
        },
        { title: "Aulas ao Vivo:",
          description: "Total interação entre professores e alunos na sala de aula virtual.",
          icon: aoVivo
        },
        { title: "Compromisso com o seu Aprendizado",
          description: "",
          icon: compromisso
        },
        { title: "Aulas registradas:",
          description: "No EaD ESCM as aulas ao vivo são gravadas e você pode assistir quantas vezes quiser durante 6 meses.",
          icon: registradas
        },
        { title: "Material didático digital",
          description: "Disponível num Ambiente Virtual de Aprendizagem.",
          icon: materialDidatico
        },
        { title: "Treinamento de alto nível",
          description: "Com aprendizados e ferramentas que você vai levar para toda a vida.",
          icon: treinamento
        },
        { title: "Certificado",
          description: "Certificado digital válido em todo território nacional.",
          icon: certificado
        },
    ]
}