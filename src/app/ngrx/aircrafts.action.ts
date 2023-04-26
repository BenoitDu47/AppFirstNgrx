import { Action } from "@ngrx/store";
import { Aircraft } from "../model/aircraft.model";

// Les Actions ou évènements
// Ce sont tous les évènements déclenchés par l’utilisateur tel que le clic sur un bouton par
// exemple. Elles sont caractérisés par leur type. Les actions provoquées par l’User sont interceptées par le
// STORE puis relayées vers le REDUCER puis le(s) EFFECTS; ce(s) dernier(s) peut lui même lancer une
// action, en réponse à un accès en bdd, avec un type donné, par ex « GET_ALL_AIRCRAFTS_SUCCESS »,
// delors l’action contient des données dans son payload !

export enum AircraftsActionsTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",  
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error",    
}

export class GetAllAircraftsAction implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload:any) {   
    }
}
export class GetAllAircraftsActionSuccess implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {
    }
}
export class GetAllAircraftsActionError implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload:string) {   //message d'erreur
    }   
}



export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError ;