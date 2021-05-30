import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기


  

function Map(){
    const navermaps = window.naver.maps;

    return (<RenderAfterNavermapsLoaded
        clientId="0x78ib6nmi"
        // Naver Cloud Platform 유저의 경우 props.clientId 대신 props.ncpClientId를 사용합니다. 
        // ncpClientId={YOUR_NCP_CLIENT_ID} 
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '90vh' // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
        defaultZoom={13} // 지도 초기 확대 배율
        onClick = {()=>{alert('지도 클릭')}}
      >
          <Marker
        key={1}
        position={new navermaps.LatLng(37.551229, 126.988205)}
        animation={2}
        onClick={() => {alert('여기는 N서울타워입니다.');}}
      />
      </NaverMap>
      </RenderAfterNavermapsLoaded>);
};


export default Map;
