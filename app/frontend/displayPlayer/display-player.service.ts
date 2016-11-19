import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';
import { Player } from './display-player.model';
import { APIURL } from '../shared/constants';

@Injectable()
export class DisplayPlayerService {

    private serverUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: APIURL) {

        this.serverUrl = configuration.ServerWithApiUrl;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetSingle = (id: string): Observable<Player> => {
        return this.http.get(this.serverUrl + "players/" + id)
            .map((response: Response) => <Player>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}