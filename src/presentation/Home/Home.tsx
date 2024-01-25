import { FC } from 'react';

import InfoHome from '@/assets/image/info-home.svg';
import { Divider, Typography } from '@/components';

import * as S from './Home.styled';

export const HomePresentation: FC = () => (
  <S.Wrapper>
    <S.InfoBox>
      <S.Box>
        <Typography variant="title" align="center" spacing="xs">
          Instruções
        </Typography>
        <ul>
          <li>
            Você pode usar o campo de busca para encontrar funcionários, pais ou
            alunos já cadastrados, editar suas informações e/ou bloquear seu
            acesso.
          </li>
          <li>
            A opção Cadastrar Novo Membro serve para adicionar usuários que
            ainda não possuem cadastro nessa plataforma
          </li>
        </ul>
        <img alt="imagem menino fazendo sinal OK" src={InfoHome} />
        <Divider style={{ margin: 0 }} />
      </S.Box>
    </S.InfoBox>
  </S.Wrapper>
);
