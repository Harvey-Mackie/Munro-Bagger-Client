import { makeStyles } from '@material-ui/core'
import { useLoadScript } from '@react-google-maps/api'
import { FC, useState, useEffect } from 'react'
import { MunroSummaryDto } from '../../api/models/Munro'
import { GetMunros } from '../../api/munros'
import MunroSearchBar from '../SearchBar/MunroSearchBar'
import Map from './MunroMap'
import MunroSummaryCard from '../SummaryCard/MunroSummaryCard'

const useStyles = makeStyles(theme => ({
  parentContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex'
  },
  childContainer: {
    marginTop: '2vh',
    marginBottom: '2vh',
    width: '100vw',
    height: '96vh',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
}))

const MunroMap: FC = () => {
  const styles = useStyles()

  const [munros, setMunros] = useState<MunroSummaryDto[]>()
  const [selectedMunro, setSelectedMunro] = useState<
    MunroSummaryDto | undefined
  >(undefined)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyClEC5vTj9VTan0wgeoGe_9vcGWKhNqlao'
  })

  async function initMunros () {
    const munroCollection = await GetMunros()
    setMunros(munroCollection.content)
  }

  useEffect(() => {
    initMunros()
  }, [])

  if (!isLoaded) {
    return <p>STILL LOADING</p>
  }

  return (
    <div className={styles.parentContainer}>
      <Map
        munros={munros}
        onClick={setSelectedMunro}
        selectedMunro={selectedMunro}
      />
      <div className={styles.childContainer}>
        {munros && (
          <MunroSearchBar munros={munros} onClick={setSelectedMunro} />
        )}
        {selectedMunro && <MunroSummaryCard selectedMunro={selectedMunro} />}
      </div>
    </div>
  )
}

export default MunroMap
