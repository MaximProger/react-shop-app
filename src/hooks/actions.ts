import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import { dummyjsonActions } from '../store/dummyjson/dummyjson.slice'

const actions = {
  ...dummyjsonActions
}

export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch)
}