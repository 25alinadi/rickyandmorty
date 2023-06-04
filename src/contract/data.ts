import {Gender, Status} from "./enumTypes";

export interface IInfoData{
    count: number,
    pages: number,
    next: number | null,
    prev: number | null
}

export interface IDataCharacter {
    id: number,
    name: string,
    status: Status,
    species: string,
    gender: Gender,
    origin: IDetailsData,
    location: IDetailsData,
    image: string,
}

export interface IDetailsData {
    id: number,
    name: string,
}

export interface ICharacterStoreData{
    pagination: IInfoData,
    data: Array<IDataCharacter>,
    loading: boolean
}