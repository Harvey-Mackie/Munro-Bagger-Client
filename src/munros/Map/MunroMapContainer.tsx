import { useLoadScript } from '@react-google-maps/api';
import {FC, useState, useEffect} from 'react'
import { MunroSummaryDto } from '../../api/models/Munro';
import { GetMunros } from '../../api/munros';
import Map from './MunroMap';

const MunroMap:FC = () => {
  const [munros, setMunros] = useState<MunroSummaryDto[]>();

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyClEC5vTj9VTan0wgeoGe_9vcGWKhNqlao"
  })

  async function initMunros(){
    const munroCollection = await GetMunros(); //pass this into the map component - when possible
    setMunros(munroCollection.content)
  }

  useEffect(() => {
    initMunros()
  }, []);

  if(!isLoaded) {
    return <p>STILL LOADING</p>
  }
  
  return <Map munros={munros}/>
};

export default MunroMap