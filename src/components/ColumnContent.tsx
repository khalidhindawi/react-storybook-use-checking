import styled from 'styled-components';

const ColumnContent = styled.div`
    min-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: ${768}px) {
        & {
            ${props => props.expendMobile && 'flex: 1; min-width: 100% !important;'}
        }
    }
`;

export default ColumnContent;
