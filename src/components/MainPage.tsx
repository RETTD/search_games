import React, { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { fetchItemsAction } from '../app/actions';
import Header from './Header';
import List from './List';

const MainPage = () => {
  const [page, setPage] = React.useState(1);
  const [apiKey, setApiKey] = React.useState('26d5061e875a4301900d772501fa5bf9');
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchItemsAction(apiKey, page));
  }, [dispatch, page, apiKey]);

  const handleChangePage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(()=> {
      setPage(Number(event.target.value === ''? 1 : event.target.value));  
    }, 800)
    
  }

  return (
    <div>
      <Header setApiKey={setApiKey} apiKey={apiKey} />
      <List />
      <input min={1} max={40000} type='number' style={{ height: '3rem', width: '95%', marginTop: '3rem', backgroundColor: "black", color: 'white', borderWidth: "thin", borderColor: "gray" }} defaultValue={page} onChange={handleChangePage} />
    </div>

  );
};

export default MainPage;
