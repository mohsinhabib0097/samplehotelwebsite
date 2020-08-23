import React from "react"
import Layout from '../components/layout';
import Banner from '../components/banner';
import Home from '../components/content/home';
import UseRooms from '../hooks/use-rooms';
import RoomPreview from '../components/roomPreview';

import { h2Style, UlStyle } from '../styles/roomStyles';

const IndexPage = () => {

  const rooms = UseRooms();

  return (
    <Layout>
      <Banner />

      <Home />

      <br />
      <h2 css={h2Style}>
        Nuestras Habitaciones
      </h2>

      <UlStyle>
        {rooms.map((room, key) => (
          <RoomPreview room={room} key={key} />
        ))}
      </UlStyle>

    </Layout>
  );
}

export default IndexPage
