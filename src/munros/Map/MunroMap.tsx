import { GoogleMap, Marker } from "@react-google-maps/api";
import { FC, useMemo } from "react";
import { MunroSummaryDto } from "../../api/models/Munro";

interface MunroMapProps{
    munros: MunroSummaryDto[] | undefined
}

const Map:FC<MunroMapProps> = ({
    munros
}) => {
    const center = useMemo(() => ({ lat: 56.86, lng:-4 }), [])

    return (
        <div>
            <GoogleMap
                zoom={8}
                center={center}
                mapContainerStyle={{height: "100vh"}}
                clickableIcons={true}
            >
                {
                    munros && munros.length > 0 && munros.map((munro:MunroSummaryDto) => <Marker position={{lat: munro.latitude, lng: munro.longitude}} />) 
                }
            </GoogleMap>    
        </div>
    )
};
  
export default Map