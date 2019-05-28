// // Load angular modules.
// import { MatSnackBar } from '@angular/material'

// // Load local modules.
// import {
// 	Observable,
// 	of,
// } from 'rxjs'

// export const handleFetchError = (snackBar: MatSnackBar, defaultResponse: any): Observable<any> => {
// 	snackBar.open('Načítanie dát sa nepodarilo, prosím, skúste neskôr.', null, {duration: 2000})
// 	return of(defaultResponse)
// }

const accentedCharacters = 'áäćčďéěíĺľňóôŕřśšťúýźž'
const nonAccentedCharacters = 'aaccdeeillnoorrsstuyzz'

export const normalizeString = (value: string) => {
	let newValue = value.toLowerCase()

	for (let index = 0; index < accentedCharacters.length; ++index) {
		newValue = newValue.replace(
			new RegExp(accentedCharacters.charAt(index), 'g'),
			nonAccentedCharacters.charAt(index),
		)
	}

	return newValue
}

export const advancedFind = (
	expression: string,
	searchTexts: string[],
) => {
	const expressionWords = normalizeString(expression).split(' ').filter((expressionWord) => {
		return expressionWord !== ''
	})

	for (const searchText of searchTexts) {
		const normalizedSearchText = normalizeString(searchText)
		for (const expressionWord of expressionWords) {
			if (normalizedSearchText.indexOf(expressionWord) !== -1) {
				return true
			}
		}
	}

	return false
}
