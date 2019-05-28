// Load angular modules.
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

// Load npm modules.
import { Observable } from 'rxjs'

// Load local modules.
import { environment } from '../../../environments/environment'
import { Club } from '../../definitions/club'

@Injectable({ providedIn: 'root' })
export class ClubService {
	private url = ((environment.production) ? '' : 'http://localhost/') + 'preprocessed/data/klub.json'

	constructor(
		private http: HttpClient,
	) {}

	getAll(): Observable<Club[]> {
		return this.http.get<Club[]>(this.url)
	}
}
