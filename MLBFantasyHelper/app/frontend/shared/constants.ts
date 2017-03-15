import { Injectable } from '@angular/core';

@Injectable()
export class APIURL {
    public Server: string = "http://54.244.30.252:5000/";
    public ApiUrl: string = "api/";
    public Version: string = "v1.0/";

    public ServerWithApiUrl = this.Server + this.ApiUrl + this.Version;
}