// Load angular modules.
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

// Load npm modules.
import { Observable } from 'rxjs'

// Load local modules.
import { environment } from '../../../environments/environment'
import { Law } from '../../definitions/law'

@Injectable({ providedIn: 'root' })
export class LawService {
	private url = ((environment.production) ? '' : 'http://localhost/') + 'preprocessed/data/zakon.json'

	constructor(
		private http: HttpClient,
	) {}

	getAll(): Observable<Law[]> {
		return this.http.get<Law[]>(this.url)
	}
}
