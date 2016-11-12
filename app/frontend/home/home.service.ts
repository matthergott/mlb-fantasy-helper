import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';
import { PlayersList } from './home.model';
import { APIURL } from '../shared/constants';

@Injectable()
export class HomeService {

    private serverUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: APIURL) {

        this.serverUrl = configuration.ServerWithApiUrl;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAllPlayers = (): Observable<PlayersList[]> => {
        return this.http.get(this.serverUrl + "players/")
            .map((response: Response) => <PlayersList[]>response.json())
            .catch(this.handleError);
    }

    public GetSingle = (id: number): Observable<PlayersList> => {
        return this.http.get(this.serverUrl + id)
            .map((response: Response) => <PlayersList>response.json())
            .catch(this.handleError);
    }

    public Add = (itemName: string): Observable<PlayersList> => {
        let toAdd = JSON.stringify({ ItemName: itemName });

        return this.http.post(this.serverUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <PlayersList>response.json())
            .catch(this.handleError);
    }

    public Update = (id: number, itemToUpdate: PlayersList): Observable<PlayersList> => {
        return this.http.put(this.serverUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => <PlayersList>response.json())
            .catch(this.handleError);
    }

    public Delete = (id: number): Observable<Response> => {
        return this.http.delete(this.serverUrl + id)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}