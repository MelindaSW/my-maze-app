import { useState } from 'react'
import { getAllSeries } from '../../api/searchSeries'
import MazeLogo from '../../components/mazeLogo'
import SearchInput from '../../components/searchInput/searchInput'
import { IGetAllShowsResponse, IErrorResponse } from '../../types/responseTypes'
import './startPage.css'
import { useNavigate } from 'react-router-dom'

const StartPage = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (searchValue: string) => {
    setErrorMessage('')
    localStorage.setItem('currentSearchQuery', JSON.stringify(searchValue))
    const searchResult: IGetAllShowsResponse | IErrorResponse =
      await getAllSeries(searchValue)

    if (searchResult.success) {
      const allShows = (searchResult as IGetAllShowsResponse).shows
      console.log({ allShows })
      if (allShows.length === 0) {
        setErrorMessage(
          'Could not find any shows with this name, please try again with a different query.'
        )
      } else {
        navigate(`/search`, {
          state: allShows
        })
      }
    } else {
      setErrorMessage('Something went wrong, please try again.')
    }
  }

  return (
    <main>
      <MazeLogo />
      <SearchInput onSubmit={(searchValue) => onSubmit(searchValue)} />
      <span
        className={
          errorMessage.length > 0 ? 'errorMessage' : 'errorMessageHidden'
        }
      >
        {errorMessage}
      </span>
    </main>
  )
}

export default StartPage
