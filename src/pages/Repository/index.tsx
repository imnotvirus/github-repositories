import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header } from './styles';
import logoImg from '../../assets/GitHub-logo.svg';
interface RepositoryParams {
    repository: string;
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return (
        <Header>
            <img src={logoImg} alt="GitHub Explorer" />
            <Link to="/">
                <FiChevronLeft size={16} />
                Voltar
            </Link>
        </Header>
    );
};

export default Repository;
