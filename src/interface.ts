export interface ICountry {
    id: string;
    name: string;
    phonecode: string;
    sortname: string;
}

export interface IState {
    id: string;
    name: string;
    country_id: string;
}
