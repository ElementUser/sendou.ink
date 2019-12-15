import { gql } from "apollo-boost"

export const searchForUser = gql`
  query searchForUser($discord_id: String) {
    searchForUser(discord_id: $discord_id) {
      id
      username
      discriminator
      discord_id
      twitch_name
      twitter_name
      country
      weapons
      top500
      sens {
        stick
        motion
      }
    }
  }
`
