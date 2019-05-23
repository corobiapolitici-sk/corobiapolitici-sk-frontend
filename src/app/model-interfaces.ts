export interface Club {
	byvaliPoslanci: any
	id: string
	pocetPoslancov: number
	poslanci: Politician[]
	spektrum: any
}

export interface Politician {
	id: number
	titul: string
	priezvisko: string
	email: string
	bydlisko: string
	fotografia: string
	kandidovalZa: string
	kraj: string
	url: string
	meno: string
	klub: Club
	navrhnuteZmeny: Array<LawChange>
	navrhnuteZakony: Array<Law>
	vybor: Committee
	vystupil: Array<Debate>
	delegacie: any
}

export interface Committee {
	id: string
	gestorovaneZakony: Array<Law>
	navrhnuteZakony: Array<Law>
	poslanci: Array<Politician>
}

export interface LawChange {
	cisloObdobia: number
	cisloSchodze: number
	datumPodania: any
	dokument: string
	id: number
	navrhliPoslanci: Array<Politician>
	nazov: string
	url: string
	zakon: Law
}

export interface Law {
	id: number
	datumDorucenia: any
	druh: string
	hlasovania: Array<Voting>
	navrhliPoslanci: Array<Politician>
	nazov: string
	podpisaliPoslanci: Array<Politician>
	rozpravy: Array<Debate>
	spektrum: Spectrum
	stav: string
	url: string
	vyboryGestorsky: any
	vyboryNavrhol: any
	vysledok: string
}

export interface Debate {
	casKoniec: any
	casZaciatok: any
	castDnaSchodze: string
	cisloSchodze: number
	denSchodze: number
	id: number
	poslanec: Politician
	text: string
	typVystupenia: string
	url: string
	zakon: Law
	zaznamRokovania: string
	zaznamVystupenia: string
}

export interface Spectrum {
	id: string
	kluby: Array<Club>
	zakony: Array<Law>
}

export interface Voting {
	id: string
	idZakZbor: number
	nazovHlasovania: number
	suhrnHlasujucich: number
	suhrnNehlasovalo: number
	suhrnNepritomni: number
	suhrnProti: number
	suhrnPritomni: number
	suhrnZa: number
	suhrnZdrzalo: number
	url: string
	vysledokHlasovania: string
	casHlasovania: any
	cisloHlasovania: number
	cisloObdobia: number
	cisloSchodze: number
	zmena: Array<LawChange>
	poslanci: Array<Politician>
	zakon: Law
}
