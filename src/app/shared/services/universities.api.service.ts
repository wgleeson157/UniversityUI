import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { University } from '@app/shared/models/university.model';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UniversityApiService {
    constructor(private httpClient: HttpClient) {
    }

    public getUniversities(): Observable<University[]> {
        return this.httpClient.get<University[]>(environment.apiServer);
    }
}