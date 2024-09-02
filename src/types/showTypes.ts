interface IImageUrl {
  medium: string
  original: string
}

interface IShow {
  id: number
  name: string
  averageRating: number | null
  imageUrl: IImageUrl
}

interface IShowDetail extends IShow {
  genres: string[]
  summary: string
  cast: ICastMember[]
}

interface ICastMember {
  name: string
  characterName: string
  imageUrl: IImageUrl | null
}

export type { IShow, IShowDetail, ICastMember, IImageUrl }
