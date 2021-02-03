import { render } from '@testing-library/react';
import { Component } from 'react';
const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Simon', age: 20 },
];

interface User {
  name: string;
  age: number;
}
interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user: foundUser });
  };
  render() {
    const { name, user } = this.state;
    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Search</button>
        <div>
          {user && user.name} {user && user.age}
        </div>
      </div>
    );
  }
}
export { UserSearch };
