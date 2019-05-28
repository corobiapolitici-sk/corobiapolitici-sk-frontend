// Load angular modules.
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

// Load npm modules.
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

// Load local modules.
import { environment } from '../../../environments/environment'
import { Committee } from '../../definitions/committee'

const urlPrefix = ((environment.production) ? '' : 'http://localhost/')

@Injectable({ providedIn: 'root' })
export class CommitteeService {
	private url = urlPrefix + 'preprocessed/data/vybor.json'

	constructor(
		private http: HttpClient,
	) {}

	getAll(): Observable<Committee[]> {
		return this.http.get<Committee[]>(this.url).pipe(
			map((committees) => {
				for (const committee of committees) {
					committee.imageUrl = urlPrefix + committee.imageUrl
				}
				return committees
			}),
		)
	}
}
