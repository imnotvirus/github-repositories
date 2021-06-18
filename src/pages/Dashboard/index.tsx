import React, { useState, useEffect, FormEvent } from 'react';

import logoImg from '../../assets/GitHub-logo.svg';

import { Title, Form, Repositories } from './styles';
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
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [newRepo, setNewrepo] = useState('');
    useEffect(() => {}, []);

    const handleAddRepositories = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let response = await api.get<Repository>(`repos/${newRepo}`);

        setRepositories([...repositories, response.data]);
        setNewrepo('');
    };
    return (
        <>
            <img src={logoImg} alt="logo github" />
            <Title>Explore respositorios no GitHub</Title>
            <Form onSubmit={handleAddRepositories}>
                <input
                    type="text"
                    value={newRepo}
                    placeholder="Digite o nome do repositorio"
                    onChange={(e) => setNewrepo(e.target.value)}
                />
                <button type="submit">pesquisar</button>
            </Form>
            <Repositories>
                {repositories.map((repository) => (
                    <a key={repository.full_name} href="#">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
