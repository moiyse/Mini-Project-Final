import {Equipe} from "./equipe";

export interface Etudiant{
  id: number;
  prenomE: string;
  nomE:string;
  option:string;
  id_univ:number,
  equipe:Equipe;
  id_team:number;
}
