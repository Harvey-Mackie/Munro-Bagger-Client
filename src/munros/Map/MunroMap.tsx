import { makeStyles } from '@material-ui/core'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { Dispatch, FC, SetStateAction, useMemo } from 'react'
import { MunroSummaryDto } from '../../api/models/Munro'

const useStyles = makeStyles(theme => ({
  map: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  }
}))

interface MunroMapProps {
  munros: MunroSummaryDto[] | undefined
  onClick: Dispatch<SetStateAction<MunroSummaryDto | undefined>>
  selectedMunro: MunroSummaryDto | undefined
}

const Map: FC<MunroMapProps> = ({ munros, onClick, selectedMunro }) => {
  const styles = useStyles()
  const center = useMemo(
    () => ({
      lat: selectedMunro?.latitude ?? 56.86,
      lng: selectedMunro?.longitude ?? -4
    }),
    [selectedMunro]
  )

  return (
    <div>
      <GoogleMap
        zoom={selectedMunro ? 15 : 8}
        center={center}
        mapContainerClassName={styles.map}
        options={{
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          zoomControl: false
        }}
        clickableIcons={true}
      >
        {munros &&
          munros.length > 0 &&
          munros.map((munro: MunroSummaryDto) => (
            <Marker
              key={munro.id}
              onClick={() => onClick(munro)}
              position={{ lat: munro.latitude, lng: munro.longitude }}
            />
          ))}
      </GoogleMap>
    </div>
  )
}

export default Map