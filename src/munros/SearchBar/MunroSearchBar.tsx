import { makeStyles, TextField } from '@material-ui/core'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { MunroSummaryDto } from '../../api/models/Munro'

const useStyles = makeStyles(theme => ({
  container: {
    alignSelf: 'center',
    width: '20rem'
  },
  searchBar: {
    width: '100%',
    '& input': {
      backgroundColor: 'white'
    }
  },
  searchResults: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '.5rem',
    margin: 0,
    '& li': {
      listStyle: 'none',
      padding: '0.3rem'
    }
  }
}))

interface MunroSearchBarProps {
  munros: MunroSummaryDto[]
  onClick: Dispatch<SetStateAction<MunroSummaryDto | undefined>>
}

const MunroSearchBar: FC<MunroSearchBarProps> = ({ munros, onClick }) => {
  const styles = useStyles()
  const [searchTerm, setSearchTerm] = useState<string>()
  const [availableMunros, setAvailableMunros] = useState<MunroSummaryDto[]>([])
  const [showOptions, setShowOptions] = useState<Boolean>(false)

  function updateSearchTerm (newValue: string) {
    setSearchTerm(newValue)

    if (!newValue || newValue?.trim() == '') {
      setAvailableMunros([])
      return
    }

    const tempAvailableMunros = munros.filter(
      _ =>
        _.name.toLowerCase().includes(newValue) ||
        _.region.toLowerCase().includes(newValue)
    )

    setAvailableMunros(tempAvailableMunros.slice(0, 5))
  }

  return (
    <div className={styles.container}>
      <TextField
        variant='outlined'
        label='Find a munro'
        className={styles.searchBar}
        onFocus={() => setShowOptions(true)}
        onClick={() => setShowOptions(true)}
        onChange={event => updateSearchTerm(event.target.value.toLowerCase())}
      />
      {showOptions && availableMunros && availableMunros.length > 0 && (
        <ul className={styles.searchResults}>
          {availableMunros.map(element => (
            <li
              key={element.id}
              onClick={() => {
                onClick(element)
                setShowOptions(false)
              }}
            >
              {element.name}, {element.height}m
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MunroSearchBar
