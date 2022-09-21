import { findAllByDisplayValue } from "@testing-library/react"

export const initialState = {
  user: null,
  // playlists: [],
  spotify: null,
  // discover_weekly: null,
  // top_artists: null,
  playing: false,
  item: null,
  // token:
  //   "BQBa0bUeKt3Ji_p-_4DGUhdxXWan0i7tS5ViCvcV3WgalM6gvt2NbBkaTgJpMd4yRw7htBSJaEqCa7jeYDwSMJWFeGTZR1ZoBJ2A52gww9tPL3JCdyaqGXNk4bY6cbjINaOFUzu2bV3T5f6uljMYQF9Z_lcT76KP83Af9XJKvrq25_ICEODdKOqWojl9iusSL3F6vPGPxxjJ6xF-70vu",
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      }

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      }

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      }

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      }

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      }

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      }
    default:
      return state
  }
}

export default reducer
