import { connect } from "react-redux";

const LeaderboardPage = ({ users }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-9">Leaderboard</h1>
      <table className="table">
        <thead  className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">User name</th>
            <th scope="col">Answers</th>
            <th scope="col">Questions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{<img src={user.avatarURL} className="avatar" alt="avatar" />}</th>
              <td>{user.name}</td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

export default connect(mapStateToProps)(LeaderboardPage);
