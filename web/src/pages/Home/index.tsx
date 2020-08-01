import React, { useCallback, useState } from 'react';

import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import {
  Container, Button, Buttons, Response, Item, NavigationBar, Content,
} from './styles';

import api from '../../services/api';

const Home: React.FC = () => {
  const [fetchedData, setFetchedData] = useState<Array<any>>([]);
  const [contentType, setContentType] = useState<'cars' | 'refrigerators' | undefined>(undefined);

  const [page, setPage] = useState <number>(0);

  const [pageLimit, setPageLimit] = useState < number>(0);

  const handleClick = useCallback(async (field: 'cars' | 'refrigerators') => {
    setContentType(undefined);
    setPage(0);
    const { data } = await api.get(`${field}?page=${page}`);
    setFetchedData(data.data);
    setPageLimit(data.numberOfPages);
    setContentType(field);
  }, [contentType, setContentType, setFetchedData, page, setPage, setPageLimit]);

  const handleNextPage = useCallback(async () => {
    const { data } = await api.get(`${contentType}?page=${page + 1}`);
    setPage(page + 1);
    setFetchedData(data.data);
  }, [setPage, page, contentType]);

  const handlePreviusPage = useCallback(async () => {
    const { data } = await api.get(`${contentType}?page=${page - 1}`);
    setPage(page - 1);
    setFetchedData(data.data);
  }, [setPage, page, contentType]);

  return (
    <Container>
      <Buttons>
        <Button type="button" onClick={() => handleClick('refrigerators')}>Refrigeradores</Button>
        <Button type="button" onClick={() => handleClick('cars')}>Carros</Button>
      </Buttons>

      <Content>
        <Response>
          {!contentType ? <></> : contentType === 'cars' ? fetchedData.map((obj) => (
            <Item key={obj.Name}>
              <h4>
                {obj.Name}
              </h4>
              <h5>
                {obj.Year.split('-')[0]}
              </h5>
              <p>
                Consume:
                {` ${obj.Miles_per_Gallon}`}
              </p>
              <p>
                Acceleration:
                {` ${obj.Acceleration}`}
              </p>
            </Item>
          )) : fetchedData.map((obj) => (
            <Item key={obj.MODELO}>
              <h4>
                {obj.MODELO}
              </h4>
              <h5>
                {obj.MARCA}
              </h5>
              <p>
                Volume:
                {` ${obj.TOTAL}`}
              </p>
            </Item>
          ))}
        </Response>

        <NavigationBar isVisible={contentType !== undefined}>
          <MdNavigateBefore onClick={handlePreviusPage} color="#000" size={40} visibility={page > 0 ? '1' : 'hidden'} />
          <MdNavigateNext onClick={handleNextPage} color="#000" size={40} visibility={page < pageLimit ? '1' : 'hidden'} />

        </NavigationBar>
      </Content>

    </Container>
  );
};

export default Home;
