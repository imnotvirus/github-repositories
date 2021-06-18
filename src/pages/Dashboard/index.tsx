import React, { useState, useEffect, FormEvent } from 'react';

import logoImg from '../../assets/GitHub-logo.svg';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        let storagedRepos = localStorage.getItem(
            '@githubExplorer:repositories',
        );
        if (storagedRepos) {
            return JSON.parse(storagedRepos);
        }
        return [];
    });
    const [newRepo, setNewrepo] = useState('');
    const [inputError, setInputError] = useState('');
    useEffect(() => {
        localStorage.setItem(
            '@githubExplorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    const handleAddRepositories = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newRepo) {
            setInputError('Digite o autor/nome do repositorio');
            return;
        }
        try {
            let response = await api.get<Repository>(`repos/${newRepo}`);

            setRepositories([...repositories, response.data]);
            setNewrepo('');
            setInputError('');
        } catch (error) {
            setInputError('Erro na busca por esse repositorio');
        }
    };
    return (
        <>
            <img src={logoImg} alt="logo github" />
            <Title>Explore respositorios no GitHub</Title>
            <Form hasError={!!inputError} onSubmit={handleAddRepositories}>
                <input
                    type="text"
                    value={newRepo}
                    placeholder="Digite o nome do repositorio"
                    onChange={(e) => setNewrepo(e.target.value)}
                />
                <button type="submit">pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            <Repositories>
                {repositories.map((repository) => (
                    <Link
                        key={repository.full_name}
                        to={`repository/${repository.full_name}`}
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
