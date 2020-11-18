import countryList from './lib/country.json';
import stateList from './lib/state.json';
import { ICountry, IState} from './src/interface';
export { ICountry, IState} from './src/interface';

 export default {
	getCountryById: function (id: string): ICountry {
		return _findEntryById(countryList, id);
	},
	getStateById: function (id: string): IState {
		return _findEntryById(stateList, id);
	},
	getStatesOfCountry: function (countryId: string): IState[] {
		var states = stateList.filter(function (value, index) {
			return value.country_id === countryId
		})
		return states.sort(compare)
	},
	getAllCountries: function (): ICountry[] {
		return countryList;
	},
	getCountryByCode: function (code: string): ICountry {
		return _findEntryByCode(countryList, code);
	}
}

let _findEntryById = (source: any, id: string) => {
	if (id && source != null) {
		let idx = source.findIndex((c:any) => c.id === id);
		return (idx !== -1) ? source[idx] : "";
	}
	else return "";
}

let _findEntryByCode = (source: any, code: string) => {
	if (code && source != null) {
		let codex = source.findIndex((c:any) => c.sortname === code);
		return (codex !== -1) ? source[codex] : "";
	}
	else return "";
}

function compare(a:any, b:any) {
	if (a.name < b.name)
		return -1;
	if (a.name > b.name)
		return 1;
	return 0;
}
