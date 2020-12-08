import styled from 'styled-components';

const Row = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 560px) {
        & {
            flex-direction: column;
        }
    }

    @media (min-width: 561px) {
        & {
            flex-direction: row;
        }
    }
`;

export default Row;