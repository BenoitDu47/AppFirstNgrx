import { AircraftsActions, AircraftsActionsTypes } from "./aircrafts.action";
import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";
import { Action } from "@ngrx/store"

// Le Reducer est une fonction pure, elle se comporte toujours de la même manière, elle reçoit dans notre cas en
// paramètre le state et l'action. Il a vocation à changer l’état(state) de l’application en fonction des actions.
// Au boot de l'appli, le store fait appel au reducer en lui transmettant le state, celui-ci n'étant pas encore crée,
// « initState » sera utilisé avec les paramètres par défaut. Le reducer va ensuite réaliser des tests pour répondre aux
// actions émises via un switch comme ci-dessous, il renvoi au store un clone du state avec les changements associés.
// En bref, le reducer reçoit le state courant + action dispatchée dans le store et retourne le new state

export function AircraftsReducer(state : AircraftsState = initState, action:Action) : AircraftsState {   
    switch(action.type){ //pour chaque action, on retourne un clone du state (immutable)
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:     
            return {...state, dataState:AircraftsStateEnum.LOADING }//renvoi clone du state + le nouveau dataState
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
        // Action a été reçu par l'effect qui a fait une demande en base, reçoit les datas et génère l'action pour indiquer que tout est ok
            return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}
        // renvoi clone + nouveau dataState + liste des avions en base contenu dans le payload
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR : 
            return {...state, dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}
        default : 
            return {...state} 
    }
}   
//en bref : le reducer reçoit state actuel + action dispatchée dans le store et retourne le new state
