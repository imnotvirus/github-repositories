import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/GitHub-logo.svg';
interface RepositoryParams {
    repository: string;
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return (
        <>
            <Header>
                <img src={logoImg} alt="GitHub Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>
                <header>
                    <img
                        src="https://avatars0.githubusercontent.com/u/289229274?v=4"
                        alt="RcokeactSeat"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque, dolorum delectus asperiores impedit
                            cumque corporis odio officiis voluptates inventore
                            odit totam aliquid eos soluta eligendi ipsum
                            blanditiis reiciendis labore consectetur?
                        </p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="repository/repository.full_name">
                    <div>
                        <strong>"repository.full_name"</strong>
                        <p>"repository.description"</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
