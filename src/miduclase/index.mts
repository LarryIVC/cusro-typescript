// Enums

const enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN
}

function mostrarMensaje ( tipoError: ERROR_TYPES) {
  if (tipoError === ERROR_TYPES.NOT_FOUND) console.log('No se ha encontrado el recurso');
  if (tipoError === ERROR_TYPES.UNAUTHORIZED) console.log('No tienes permisos para acceder al recurso');
  if (tipoError === ERROR_TYPES.FORBIDDEN) console.log('No tienes permisos para acceder al recurso');
}

// Aserciones de tipos

const canvas = document.getElementById('canvas')
if (canvas != null && canvas instanceof HTMLCanvasElement){
  const ctx = canvas.getContext('2d')  
}

// fetching de datos en typescript

export type APIResponse = {
  total_count:        number;
  incomplete_results: boolean;
  items:              Item[];
}

export type Item = {
  id:                          number;
  node_id:                     string;
  name:                        string;
  full_name:                   string;
  private:                     boolean;
  owner:                       Owner;
  html_url:                    string;
  description:                 null | string;
  fork:                        boolean;
  url:                         string;
  forks_url:                   string;
  keys_url:                    string;
  collaborators_url:           string;
  teams_url:                   string;
  hooks_url:                   string;
  issue_events_url:            string;
  events_url:                  string;
  assignees_url:               string;
  branches_url:                string;
  tags_url:                    string;
  blobs_url:                   string;
  git_tags_url:                string;
  git_refs_url:                string;
  trees_url:                   string;
  statuses_url:                string;
  languages_url:               string;
  stargazers_url:              string;
  contributors_url:            string;
  subscribers_url:             string;
  subscription_url:            string;
  commits_url:                 string;
  git_commits_url:             string;
  comments_url:                string;
  issue_comment_url:           string;
  contents_url:                string;
  compare_url:                 string;
  merges_url:                  string;
  archive_url:                 string;
  downloads_url:               string;
  issues_url:                  string;
  pulls_url:                   string;
  milestones_url:              string;
  notifications_url:           string;
  labels_url:                  string;
  releases_url:                string;
  deployments_url:             string;
  created_at:                  Date;
  updated_at:                  Date;
  pushed_at:                   Date;
  git_url:                     string;
  ssh_url:                     string;
  clone_url:                   string;
  svn_url:                     string;
  homepage:                    null | string;
  size:                        number;
  stargazers_count:            number;
  watchers_count:              number;
  language:                    Language | null;
  has_issues:                  boolean;
  has_projects:                boolean;
  has_downloads:               boolean;
  has_wiki:                    boolean;
  has_pages:                   boolean;
  has_discussions:             boolean;
  forks_count:                 number;
  mirror_url:                  null;
  archived:                    boolean;
  disabled:                    boolean;
  open_issues_count:           number;
  license:                     License | null;
  allow_forking:               boolean;
  is_template:                 boolean;
  web_commit_signoff_required: boolean;
  topics:                      string[];
  visibility:                  Visibility;
  forks:                       number;
  open_issues:                 number;
  watchers:                    number;
  default_branch:              DefaultBranch;
  score:                       number;
}

export enum DefaultBranch {
  Dev = "dev",
  Main = "main",
  Master = "master",
}

export enum Language {
  CSS = "CSS",
  HTML = "HTML",
  JavaScript = "JavaScript",
  ObjectiveC = "Objective-C",
  TypeScript = "TypeScript",
}

export type License = {
  key:     string;
  name:    string;
  spdx_id: string;
  url:     null | string;
  node_id: string;
}

export type Owner = {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                Type;
  site_admin:          boolean;
}

export enum Type {
  Organization = "Organization",
  User = "User",
}

export enum Visibility {
  Public = "public",
}


const API_URL = 'https://api.github.com/search/repositories?q=javascript'

const response = await fetch(API_URL)

if (!response.ok) {
  throw new Error('Error en la petición')
}

const data = await response.json() as APIResponse

data.items.forEach(repo => {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description
  }
})

// Interface

interface Hero {
  name: string;
  age: number;
  powers: string[];
}

const superman: Hero = {
  name: 'Superman',
  age: 60,
  powers: ['Fly', 'Force']
}

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

interface Zapatilla extends Producto {
  talla: number;
}

interface CarritoDeCompras {
  totalPrice: number
  products: (Producto | Zapatilla)[]
}

// interface CarritoOps {
//   add: (product: Producto) => void,
//   remove: (id: number) => void,
//   clear: () => void,
// }

interface CarritoOps {
  add(product: Producto): void,
  remove(id: number): void,
}

interface CarritoOps {
  clear(): void,
}

const ops: CarritoOps = {
  add(product) {
    console.log('Añadiendo producto', product)
  },
  remove(id) {
    console.log('Eliminando producto con id', id)
  },
  clear() {
    console.log('Limpiando carrito')
  }
}

type HeroId = `${string}-${number}`

interface Herox {
  id: HeroId;
  name: string;
}

// narrowing

function mostrarLongitud (objeto: number | string) {
  if (typeof objeto === 'number') {
    console.log('La longitud del número es', objeto.toString().length)
  } else {
    console.log('La longitud de la cadena es', objeto.length)
  }
}

interface Mario {
  company: 'Nintendo',
  name: string,
  saltar: () => void
}

interface Sonic {
  company: 'Sega',
  name: string,
  correr: () => void
}

type Personaje = Mario | Sonic

function jugar(personaje: Personaje) {
  if (personaje.company === 'Nintendo') {
    personaje.saltar()
  } else {
    personaje.correr()
  }
}

// type guards

function checkIsSonic (personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined
}

function jugar2(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    personaje.correr()
  } else if(!checkIsSonic(personaje)){
    personaje.saltar()
  } else {
    // personaje is never
    throw new Error('Personaje no válido')
  }
}

// classes

class Avenger {
  name: string;
  power: string;

  constructor(name: string, power: string) {
    this.name = name
    this.power = power
  }

  attack() {
    console.log(`${this.name} está atacando con ${this.power}`)
  }
}

// tipo never

