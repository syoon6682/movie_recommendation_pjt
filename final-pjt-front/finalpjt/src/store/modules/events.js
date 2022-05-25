// import router from '@/router'
// import axios from 'axios'
// import drf from '@/api/drf'
// import router from '@/router'
import router from '@/router'
import accounts from '@/store/modules/accounts'


export default {


  // popcorn은 전체 참가자 list
  // applicant는 실시간으로 지원자수를 보여주기 위한 state 변수
  // winner는 실시간으로 참가자를 보여주기 위한 state 변수
  state: {
    popcorn: localStorage.getItem('popcorn'),
    applicants: null,
    winner: null
  },

  getters: {
    popcorn:state => state.popcorn,
    applicants: state => state.applicants,
    winner: state => state.winner
  },

  mutations: {
    // SET_POPCORN (username) {
    //   localStorage.setItem('popcorn', JSON.stringify(username))
    // }
    SET_POPCORN: (state, popcorn) => state.popcorn = popcorn,
    SET_APPLICANTS: (state, applicants) => state.applicants = applicants,
    SET_WINNER: (state, winner) => state.winner = winner
  },

  actions: {

    // 신청자 localStorage에 저장
    savePopcorn({commit}){
      const username = accounts.state.currentUser.username
      // var test = this.getters.popcorn
      var list = JSON.parse(localStorage.getItem('popcorn'))
      list.push(username)
      // console.log(list)
      localStorage.setItem('popcorn', JSON.stringify(list))
      const applicants = JSON.parse(localStorage.getItem('popcorn')).length
      console.log(applicants)
      commit('SET_APPLICANTS', applicants)
      // console.log(username)
      // console.log(localStorage.getItem('popcorn'))
    },


    // 이벤트 마감 및 당첨자 반환
    resetList({commit}) {
      localStorage.setItem('popcorn', JSON.stringify([]))
      const applicants = JSON.parse(localStorage.getItem('popcorn')).length
      console.log(applicants)
      commit('SET_APPLICANTS', applicants)

      // 이벤트 화면 돌아가기
      router.push({
        name: 'popcorn',
      }) 
    },

    // 페이지 들어가자마자 display하기 위한 method
    displayPopcorn({commit}) {
      const applicants = JSON.parse(localStorage.getItem('popcorn')).length
      console.log(applicants)
      commit('SET_APPLICANTS', applicants)
    },

    fetchList({commit, getters}) {
      const winner = JSON.parse(localStorage.getItem('popcorn'))
      commit('SET_WINNER', winner )
      console.log(getters.winner)
    },

  },
}
