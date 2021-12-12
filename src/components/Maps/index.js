import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import "./styles.css"
import school from '../../images/school.svg'
function Maps({google}){
    
    const style = {
        width: "100%",
        height: "400px",
        left: "0%",
    }

    return (
        <div className="Map">
            <Map
                google={google}
                zoom={16}
                initialCenter={{
                    lat: -3.0781796,
                    lng: -59.9543268
                }}
                style={style}
            >
                <Marker title={'Colégio Dom Bosco Leste'}
                        symbol={ school}
                        label= {{
                            text: "Colégio Dom Bosco Leste",
                            className: "label-marker",
                          }}
                        onClick={() => window.open('https://goo.gl/maps/Bk93EpRiM5tH4cRt5', '_blank').focus()}
                        name={'Colégio Dom Bosco Leste'}
                        position={{lat: -3.0776975, lng: -59.9526316}}/>
            </Map>
        </div>
    );
    
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCJPbNE34YB52X_WcmKw03Li3d60mgSuFs')
}) (Maps);