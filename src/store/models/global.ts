import { createModel } from '@rematch/core'
import { RootModel } from '.'

export const global = createModel<RootModel>()({
  state: {
    userToken: '123456',
  } as Store.Global.IGlobal,
  reducers: {
    setToken: (state, userToken: string) => {
      return {
        ...state,
        userToken,
      }
    },
  },
  effects: (dispatch) => ({
    setUserToken(token: string) {
      dispatch.global.setToken(token)
    },
    cleanUserToken() {
      dispatch.global.setToken('')
    },
  }),
})
