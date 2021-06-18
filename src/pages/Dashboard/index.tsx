import React from 'react';

import logoImg from '../../assets/GitHub-logo.svg';

import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="logo github" />
            <Title>Explore respositorios no GitHub</Title>
            <Form>
                <input type="text" placeholder="Digite o nome do repositorio" />
                <button type="submit">pesquisar</button>
            </Form>
            <Repositories>
                <a href="#">
                    <img src="https://robohash.org/luiz" alt="img" />
                    <div>
                        <strong>luiz claudio</strong>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="#">
                    <img src="https://robohash.org/luiz" alt="img" />
                    <div>
                        <strong>luiz claudio</strong>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="#">
                    <img src="https://robohash.org/luiz" alt="img" />
                    <div>
                        <strong>luiz claudio</strong>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="#">
                    <img src="https://robohash.org/luiz" alt="img" />
                    <div>
                        <strong>luiz claudio</strong>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="#">
                    <img src="https://robohash.org/luiz" alt="img" />
                    <div>
                        <strong>luiz claudio</strong>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
