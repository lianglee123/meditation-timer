
const state = () => {
  return {
    timers: [
      {
        id: 'xxxx',
        totalSeconds: 1200,
        alarmPoints: [
          100, 200, 300
        ]
      },
      {
        id: 'yyyy',
        totalSeconds: 1600,
        alarmPoints: [
          100, 200, 300
        ]
      }
    ] }
}
export const ADD_TIMER = 'ADD_TIMER'
export const DEL_TIMER = 'DEL_TIMER'
export const UPDATE_TIMER = 'UPDATE_TIMER'

const mutations = {
  [ADD_TIMER]: (state, timer) => {
    state.timers.push(timer)
  },
  [DEL_TIMER]: (state, timer) => {
    for (let i = 0; i < state.timers.length; i++) {
      if (state.timers[i].id === timer.id) {
        state.timers.splice(i, 1)
        break
      }
    }
  },
  [UPDATE_TIMER]: (state, timer) => {
    for (let i = 0; i < state.timers.length; i++) {
      if (state.timers[i].id === timer.id) {
        state.timers[i] = timer
        break
      }
    }
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
