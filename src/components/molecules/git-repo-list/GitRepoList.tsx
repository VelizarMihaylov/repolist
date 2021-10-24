import TableContainer from 'components/atoms/table-container';
import TableHeader from 'components/atoms/table-header';
import TableBody from 'components/atoms/table-body';
import Link from 'components/atoms/link';

export type GitRepoListProps = {
  repos: {
    id: string;
    name: string;
    url: string;
    stargazerCount: number;
    forkCount: number;
  }[];
};

const GitRepoList: React.FC<GitRepoListProps> = ({ repos }) => {
  return (
    <TableContainer>
      <TableHeader>
        <tr>
          <th>Name</th>
          <th>Stars 🌟</th>
          <th>Forks 🍴</th>
        </tr>
      </TableHeader>
      <TableBody>
        {repos.map((repository, index) => {
          return (
            <tr key={`${index}-${repository?.id}`}>
              <td>
                <Link href={repository?.url} target="_blank">
                  {repository.name}
                </Link>
              </td>
              <td>{repository.stargazerCount}</td>
              <td>{repository.forkCount}</td>
            </tr>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};

export default GitRepoList;
