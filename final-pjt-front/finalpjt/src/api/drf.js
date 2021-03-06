const HOST = 'http://localhost:8000/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const EVENT = 'event/'
const RECOMMENDATION = 'recommendation/'
const REVIEW = 'review/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    profile: username => HOST + ACCOUNTS + 'profile/' + username +'/',
    profileUpdate: username => HOST + ACCOUNTS + 'profile/' + username + '/update/',
    mileage: username => HOST + ACCOUNTS + 'mileage/' + username + '/'
  },
  movies: {
    // /movies/1/
    movieList: () => HOST + MOVIES,
    movie: moviePk => HOST +  MOVIES + `${moviePk}/`,
    
    // reviews
    review: moviePk => HOST + MOVIES + `${moviePk}/` + REVIEW,
    newreview: (moviePk) => HOST + MOVIES + `${moviePk}` + '/' + REVIEW + 'new/',
    reviewdetail: (moviePk, reviewPk) => HOST + MOVIES + `${moviePk}/` + REVIEW + `${reviewPk}/`,
    updatereview: (moviePk, reviewPk) => HOST + MOVIES + `${moviePk}/` + REVIEW + `${reviewPk}/` + 'edit/',
    deletereview: (reviewPk) => HOST + MOVIES + REVIEW + `${reviewPk}/` + 'delete/',
    likeReview: (moviePk, reviewPk) => HOST + MOVIES + `${moviePk}/` + REVIEW + `${reviewPk}/` + 'like/',
    countReview: (moviePk, reviewPk) => HOST + MOVIES + `${moviePk}/` + REVIEW + `${reviewPk}/` + 'count/',

    search: (search) => HOST + MOVIES + 'search/' + `${search}`,

    // comments
    comments: (moviePk, reviewPk) => HOST + MOVIES + `${moviePk}/` + REVIEW + `${reviewPk}/` + 'comments/',
    comment: (moviePk, reviewPk, commentPk) => HOST + MOVIES + `${moviePk}/` + REVIEW + `${reviewPk}/` + 'comment/' + `${commentPk}/`,
  },

  recommendation: {
    recommendationquestion: () => HOST + MOVIES + RECOMMENDATION + 'question/',
    recommendationresult: () => HOST + MOVIES + RECOMMENDATION + 'result/'
  },
  
  event : {
    event: () => HOST + MOVIES + EVENT,
    popcorn: () => HOST + MOVIES + EVENT + 'popcorn/',
    reviewevent: () => HOST + MOVIES + EVENT + 'reviewevent/',
    moviemaking: () => HOST + MOVIES + EVENT + 'moviemaking/',
  }
}
