import { IShow, ICastMember } from './showTypes'

interface IGetOneShowResponse extends IShow {
  success: boolean
  genres: string[]
  summary: string
  cast: ICastMember[]
}

interface IGetAllShowsResponse {
  success: boolean
  shows: IShow[]
}

interface IErrorResponse {
  success: boolean
  message: string
  status: number
}

export type { IErrorResponse, IGetOneShowResponse, IGetAllShowsResponse }
