import { Aircraft } from "../model/aircraft.model";

// NgRx est un pattern de gestion d’état (State) qu’il stocke dans un Store et il repose sur 3 principes :
// - Single source of truth : Le State est stocké dans un Store unique.
// - State readonly : Immutabilité du State. Une fois créé, la seule façon de le modifier est de le cloner.
// - Changes are made with pure functions : Permet d'éviter les effets de bords (modif du state impossible)

export enum AircraftsStateEnum {// les différents états du state
    LOADING = "Loading",//chargement en cours
    LOADED = "Loaded",//chargé
    ERROR = "Error",//erreur
    INITIAL = "Initial"//état initial
}
export interface AircraftsState {//structure de notre STATE
    aircrafts: Aircraft[],//liste d'avions qui s'affichent
    errorMessage: string,//un message d'erreur
    dataState: AircraftsStateEnum//état du state
}
//il est nécessaire de définir l'état initial du state avec des valeurs par défaut
export const initState: AircraftsState = {
    aircrafts: [],
    errorMessage: "",
    dataState: AircraftsStateEnum.INITIAL
}