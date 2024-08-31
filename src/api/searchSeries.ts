import {
  IErrorResponse,
  IGetAllShowsResponse,
  IGetOneShowResponse
} from '../types/responseTypes'

const baseURL = 'https://api.tvmaze.com'

const getAllSeries = async (
  query: string
): Promise<IGetAllShowsResponse | IErrorResponse> => {
  const url = `${baseURL}/search/shows?q=${query}`
  const response = await fetch(url)

  if (response.ok) {
    const data = await response.json()
    const result: IGetAllShowsResponse = {
      success: true,
      shows: data.map((d: any) => ({
        id: d.show.id,
        name: d.show.name,
        averageRating: d.show.rating.average,
        imageUrl: d.show.image
      }))
    }
    return result
  } else {
    return {
      success: false,
      message: `Something went wrong. Server returned status ${response.status} with text ${response.statusText}`,
      status: response.status
    }
  }
}

const getOneShowDetailsWithCast = async (
  id: number
): Promise<IGetOneShowResponse | IErrorResponse> => {
  const url = `${baseURL}/shows/${id}?embed=cast`

  const response = await fetch(url)

  if (response.ok) {
    const data = await response.json()
    const result: IGetOneShowResponse = {
      success: true,
      genres: data.genres,
      summary: data.summary,
      cast: data._embedded.cast.map((castMember: any) => ({
        name: castMember.person.name,
        characterName: castMember.character.name,
        imageUrl: castMember.person.image
      })),
      id: data.id,
      name: data.name,
      averageRating: data.rating.average,
      imageUrl: data.image
    }

    return result
  } else {
    return {
      success: false,
      message: `Something went wrong. Server returned status ${response.status} with text ${response.statusText}`,
      status: response.status
    }
  }
}

export { getAllSeries, getOneShowDetailsWithCast }
