// Load npm modules.
import gql from 'graphql-tag'

export const CommitteeFragment = gql`
fragment Committee on Vybor {
	id,
	navrhnuteZakony {id},
	gestorovaneZakony {id},
	poslanci {id},
}`

export const DelegationFragment = gql`
fragment Delegation on Delegacia {
	id,
	poslanci {id}
}`

export const LawFragment = gql`
fragment Law on Zakon {
	id,
	druh,
	datumDorucenia{year},
	nazov,
	stav,
	url,
	vysledok,
	rozpravy{id},
	vyboryGestorsky {id},
	vyboryNavrhol {id},
	navrhliPoslanci{id},
	podpisaliPoslanci{id},
	hlasovania{id},
	spektrum{id},
}`

export const SpectrumFragment = gql`
fragment Spectrum on Spektrum {
	id,
	kluby {id},
	zakony {id},
}`

export const DebateFragment = gql`
fragment Debate on Rozprava {
	id,
	text,
	typVystupenia,
	url,
	zaznamRokovania,
	zaznamVystupenia,
	casKoniec{year},
	casZaciatok{year},
	castDnaSchodze,
	cisloSchodze,
	denSchodze,
	poslanec {id},
	zakon {id}
}`

export const VotingFragment = gql`
fragment Voting on Hlasovanie {
	id,
	idZakZbor,
	nazovHlasovania,
	suhrnHlasujucich,
	suhrnNehlasovalo,
	suhrnNepritomni,
	suhrnProti,
	suhrnPritomni,
	suhrnZa,
	suhrnZdrzalo,
	url,
	vysledokHlasovania,
	casHlasovania{day},
	cisloHlasovania,
	cisloObdobia,
	cisloSchodze,
	zmena {id},
	poslanci {id},
	zakon {id},
}`

export const LawChangeFragment = gql`
fragment LawChange on Zmena {
	id,
	dokument,
	datumPodania {
		year
	}
	nazov,
	url,
	cisloObdobia,
	cisloSchodze,
	zakon {
		id
	},
	navrhliPoslanci {id},
}`

export const politicianShortFragment = gql`
fragment PoliticianShort on Poslanec {
	id,
	fotografia,
	meno,
	priezvisko
}`

export const clubInfoFragment = gql`
fragment KlubInfo on Klub {
	id,
	pocetPoslancov,
	spektrum {id}
}`

export const clubFragment = gql`
fragment Klub on Klub {
	id,
	pocetPoslancov,
	poslanci{
		...PoliticianShort
	},
	byvaliPoslanci {
		...PoliticianShort
	},
	spektrum {id}
}
${politicianShortFragment}`

export const politicianFragment = gql`
fragment PoliticianInfo on Poslanec {
	id,
	titul,
	priezvisko,
	email,
	bydlisko,
	fotografia,
	kandidovalZa,
	kraj,
	url,
	meno,
	klub {
		...KlubInfo,
	},
	navrhnuteZmeny {
		...LawChange
	},
	navrhnuteZakony {
		...Law
	},
	vybor {
		...Committee
	}
	vystupil {
		...Debate
	},
	delegacie {
		...Delegation
	}
}
${clubInfoFragment}
${LawChangeFragment}
${LawFragment}
${CommitteeFragment}
${DebateFragment}
${DelegationFragment}
`
