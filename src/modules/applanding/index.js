import { NAME } from './constants'
import AppLanding from './AppLanding'
import reducer from './reducer'
import * as actions from './actions'

//to reduce the number of bugs, make sure not to export action types.
//action types are internal only and only actions and reducer should access them

export default {
  NAME,
  AppLanding,
  reducer,
  actions,
}