export interface Movie {
    Title:string,
    Year:number,
    imdbID:string,
    Type:string,
    Poster:string
}

export interface ApiResult{
    Search:Movie[],
    totalResults:number,
    Response:boolean
}

export interface PeliculasResponse{
    ok:boolean,
    peliculas:Pelicula[]
}

export interface Pelicula{
    id?:number,
    name?:string,
    poster?:string,
    year?:number
}

export interface Usuario{
    name?:string,
    email?:string,
    password?:string
}

export interface userToken{
    ok:boolean,
    token:string, 
}

export interface GeneroReponse{
    ok:boolean,
    generos:Genero[]
}

export interface Genero{
    _id?:string,
    name?:string
}
