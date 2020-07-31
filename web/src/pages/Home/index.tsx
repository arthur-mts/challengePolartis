import React, { useCallback, useState } from 'react';

import {
  Container, Button, Content, Response, Item,
} from './styles';

import api from '../../services/api';

const Home: React.FC = () => {
  const [fetchedData, setFetchedData] = useState<Array<any>>([]);
  const [contentType, setContentType] = useState<'cars' | 'refrigerators' | undefined>(undefined);

  const handleClick = useCallback(async (field: 'cars' | 'refrigerators') => {
    setContentType(undefined);
    const { data } = await api.get(field);
    setFetchedData(data.data);
    setContentType(field);
  }, [contentType, setContentType, setFetchedData]);

  return (
    <Container>
      <Content>
        <Button type="button" onClick={() => handleClick('refrigerators')}>Refrigeradores</Button>
        <Button type="button" onClick={() => handleClick('cars')}>Carros</Button>
      </Content>

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

      {/* <Response>
          {
            fetchedData.map((obj) => (
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
            ))
          }
        </Response> */}

      {/* <Response>
        {contentType === undefined ? <></> : contentType === 'cars'
          ? dataState.map((obj) => (
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
          )) : dataState.map((obj) => (
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
          )) }
      </Response> */}
    </Container>
  );
};

export default Home;
