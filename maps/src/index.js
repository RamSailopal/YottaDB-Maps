import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const position=[51.505, -0.09]
let jsonstr= async() => {
                var x= await axios({url: 'api/cords',headers: {'origin': '*'}});
                  return x.data;

}
export const API_ROUTE = jsonstr().then((data)=> {
        ReactDOM.render(
                                  <React.StrictMode>
                 <MapContainer center={position} zoom={7} scrollWheelZoom={false}>
                            <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                 {data.length > 0 &&
                                                                   data.map((marker) => (

                            <Marker position={[marker.long,marker.lat]}>
                              <Popup>
                                                                           {marker.club}
                              </Popup>
                            </Marker>
                                                                                                    ))}
                          </MapContainer>
                                  </React.StrictMode>,
                                  document.getElementById('root')
                        );

});

