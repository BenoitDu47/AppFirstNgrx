import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { AircraftsActions, AircraftsActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSuccess } from "./aircrafts.action";
import { AircraftsService } from "../services/aircrafts.service";

// L’effect est sollicité uniquement pour une liste d’actions données. Si le type d’action reçue est gérée, il
// pourra effectuer des accès en base via une api par ex et renverra le résultat sous forme d’une nouvelle
// action avec des données ou des erreurs. Ici encore, la programmation réactive à l’aide d’RxJs permet de ne
// pas bloquer l’application, les datas arrivent de manière asynchrone.


@Injectable()  //décorateur spéficie qu'il s'agit d'un service
export class AircraftsEffects {
    constructor(private aircraftsService: AircraftsService, private effectActions: Actions) {
    }

    getAllAircraftsEffect: Observable<AircraftsActions> = createEffect(     //nous souhaitons créer un effect ici sous condition, donc on écoute les actions        
        () => this.effectActions.pipe(                           //dès qu'une action arrive, on vérifie son type
            ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),  //si l'action est de type GET_ALL_AIRCRAFTS alors étape suivante : mergeMap
            mergeMap(() => {    //mergeMap permet ici de renvoyer un Observable par action
                return this.aircraftsService.getAircrafts().pipe(  //attente réception des données en base (liste des avions)
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)), //si reçu, alors on retourne un Observable<Action>
                    //dont le payload est la liste des avions
                    //l'action une fois émise va être traité par le Reducer
                    //case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
                    catchError((err) => of(new GetAllAircraftsActionError(err.message)))     //s'il y a erreur, génération d'une autre action
                )
            })
        )
    );

}