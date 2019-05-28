// Load angular modules.
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

// Load npm modules.
import { Observable } from 'rxjs'

// Load local modules.
import { environment } from '../../../environments/environment'
import { Politician } from '../../definitions/politician'

@Injectable({ providedIn: 'root' })
export class PoliticianService {
	private url = ((environment.production) ? '' : 'http://localhost/') + 'preprocessed/data/poslanec.json'

	constructor(
		private http: HttpClient,
	) {}

	getAll(): Observable<Politician[]> {
		return this.http.get<Politician[]>(this.url)
	}
}
