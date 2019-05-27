// Load angular modules.
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

// Load npm modules.
import {
	Observable,
	of,
} from 'rxjs'

// Load local modules.
import { environment } from '../../../environments/environment'
import { Committee } from '../../definitions/committee'

@Injectable({ providedIn: 'root' })
export class CommitteeService {
	private url = ((environment.production) ? '' : 'http://localhost/') + 'preprocessed/data/vybor.json'

	constructor(
		private http: HttpClient,
	) {}

	getAll(): Observable<Committee[]> {
		return this.http.get<Committee[]>(this.url)
	}
}
