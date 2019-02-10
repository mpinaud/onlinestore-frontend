import {Query} from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import SickButton from './styles/SickButton';

// From ENUM permission types on the backend
const possiblePermissions = [
    'ADMIN',
    'USER',
    'ITEMCREATE',
    'ITEMUPDATE',
    'ITEMDELETE',
    'PERMISSIONUPDATE',
];

const ALL_USERS_QUERY = gql`
    query {
        users {
            id
            name
            email
            permissions
        }
    }
`;

const Permissions = props => (
    <Query query={ALL_USERS_QUERY}>
        {({data, loading, error}) => (
            <div>
                <Error error={error} />
                <div>
                    <h2>Manage Permissions</h2>
                    {/* Oh man. Here we go making a TABLE */}
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                {possiblePermissions.map(permission => (
                                    <th>{permission}</th>
                                ))}
                                <th>👇🏻</th>
                            </tr>
                        </thead>
                        {/* Map each user */}
                        <tbody>
                            {data.users.map(user => (
                                <User user={user} />
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )}
    </Query>
);

class User extends React.Component {
    render() {
        const user = this.props.user;
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {possiblePermissions.map(permission => (
                    <td>
                        <label htmlFor={`${user.id}-permission-${permission}`}>
                            <input type="checkbox" />
                        </label>
                    </td>
                ))}
                <td>
                    <SickButton>Update</SickButton>
                </td>
            </tr>
        );
    }
}

export default Permissions;
