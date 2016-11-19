import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';
import { PlayerModel } from './home.model';
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

    public GetAllPlayers() {
        return this.http.get(this.serverUrl + "players/")
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    //public GetAll = (): Observable<MyTypedItem[]> => {
        
    //    return this.http.get(this.serverUrl + "players/")
    //        .map(res => <PlayerModel>res.json())
    //        .catch(this.handleError);
    //}

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}