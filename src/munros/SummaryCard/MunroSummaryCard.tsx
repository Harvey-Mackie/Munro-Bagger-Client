import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from '@material-ui/core'
import { FC } from 'react'
import { MunroSummaryDto } from '../../api/models/Munro'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    alignSelf: 'center'
  },
  cardContent: {
    backgroundColor: 'white'
  }
}))

interface MunroSummaryCardProps {
  selectedMunro: MunroSummaryDto
}

const MunroSummaryCard: FC<MunroSummaryCardProps> = ({ selectedMunro }) => {
  const styles = useStyles()

  return (
    <Card className={styles.cardContainer}>
      <CardActionArea>
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant='h5' component='div'>
            {selectedMunro.name}
          </Typography>
          <Typography variant='body2'>{selectedMunro.meaning}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MunroSummaryCard
