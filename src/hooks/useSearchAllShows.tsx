import { useState } from 'react';
import { getAllSeries } from '../api/searchSeries';
import { IGetAllShowsResponse, IErrorResponse } from '../types/responseTypes';
import { IShow } from '../types/showTypes';

const useSearchAllShows = () => {
  const [searchResult, setSearchResult] = useState<IShow[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (searchValue: string) => {
    setErrorMessage('');
    localStorage.setItem('currentSearchQuery', searchValue);

    const result: IGetAllShowsResponse | IErrorResponse = await getAllSeries(
      searchValue
    );

    if (result.success) {
      const allShows = (result as IGetAllShowsResponse).shows;
      if (allShows.length === 0) {
        setErrorMessage(
          `Could not find any shows with the name "${searchValue}", please try again with a different query`
        );
      } else {
        setSearchResult([...allShows]);
      }
    } else {
      setErrorMessage("Something went wrong, please try again");
    }
  };

  return { searchResult, errorMessage, handleSearch };
};

export { useSearchAllShows };
