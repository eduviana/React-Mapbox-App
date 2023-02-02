// Generated by https://quicktype.io

export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    language_es?:  Language;
    place_name_es: string;
    text:          string;
    language?:     Language;
    place_name:    string;
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
}

export interface Context {
    id:           string;
    text_es:      string;
    text:         string;
    wikidata?:    Wikidata;
    language_es?: Language;
    language?:    Language;
    short_code?:  ShortCode;
}

export enum Language {
    Es = "es",
}

export enum ShortCode {
    Ar = "ar",
    ArX = "AR-X",
}

export enum Wikidata {
    Q414 = "Q414",
    Q44210 = "Q44210",
    Q44759 = "Q44759",
}

export interface Geometry {
    coordinates: number[];
    type:        string;
}

export interface Properties {
    foursquare: string;
    landmark:   boolean;
    wikidata?:  string;
    address?:   string;
    category:   string;
    maki?:      string;
}
