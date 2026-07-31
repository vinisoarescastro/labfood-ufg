import arturPhoto from '@/assets/images/arthur.jpg'
import camillaPhoto from '@/assets/images/camila-alves.png'
import flavioPhoto from '@/assets/images/flavio.png'
import tatiannePhoto from '@/assets/images/tatianne.png'

export interface TeamMember {
  id: string
  name: string
  role: string
  /** Titulação acadêmica (ex.: Doutora em Engenharia Química). */
  degree: string
  /** E-mail institucional público. */
  email: string
  /** Endereço do Currículo Lattes, aberto em nova aba. */
  lattesUrl: string
  /** Foto exibida no cartão da seção Equipe. */
  photo: string
  /** Coordenação recebe destaque visual na seção Equipe. */
  leadership?: boolean
}

/** Quadro do laboratório: coordenação em destaque, depois corpo técnico. */
export const teamMembers: readonly TeamMember[] = [
  {
    id: 'tatianne-oliveira',
    name: 'Profa. Dra. Tatianne Ferreira de Oliveira',
    role: 'Coordenadora',
    degree: 'Doutora em Engenharia Química',
    email: 'tatianne_ferreira_oliveira@ufg.br',
    lattesUrl: 'http://lattes.cnpq.br/2017895913160804',
    photo: tatiannePhoto,
    leadership: true,
  },
  {
    id: 'flavio-silva',
    name: 'Prof. Dr. Flávio Alves da Silva',
    role: 'Vice-coordenador',
    degree: 'Doutor em Engenharia de Alimentos',
    email: 'flaviocamp@ufg.br',
    lattesUrl: 'http://lattes.cnpq.br/1713250447051507',
    photo: flavioPhoto,
    leadership: true,
  },
  {
    id: 'camilla-rodrigues',
    name: 'Dra. Camilla Alves Pereira Rodrigues',
    role: 'Técnica de laboratório',
    degree: 'Doutora em Ciência e Tecnologia de Alimentos',
    email: 'rodrigues_camilla@ufg.br',
    lattesUrl: 'http://lattes.cnpq.br/3712081512357324',
    photo: camillaPhoto,
  },
  {
    id: 'artur-almeida',
    name: 'Me. Artur Fernandes Almeida',
    role: 'Técnico de laboratório',
    degree: 'Mestre em Física',
    email: 'artur.almeida@ufg.br',
    lattesUrl: 'http://lattes.cnpq.br/2533807302098813',
    photo: arturPhoto,
  },
] as const
