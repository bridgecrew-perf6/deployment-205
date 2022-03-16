export const QUERY = gql`
  query FindUserQuery {
    users: users {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ users }) => {
  return <div>{JSON.stringify(users)}</div>
}
