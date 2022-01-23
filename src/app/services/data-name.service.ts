import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export interface ageData {
    id?: string;
    age?: number;
}

export interface nameData {
    id?: string;
    firstName?: string;
    lastName?: string;
}

@Injectable()
export class DataNameService {
    public endpoint = 'http://5c37c33f7820ff0014d927c5.mockapi.io/msr/'

    constructor(private http: HttpClient) {}

    public getAge(): Observable<ageData> {
        return this.http.get<ageData>(`${this.endpoint}ages`)
    }

    public getNames(): Observable<nameData> {
        return this.http.get<nameData>(`${this.endpoint}names`)
    }
}
