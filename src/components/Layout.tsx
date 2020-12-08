import styled from 'styled-components';

const Layout = styled.div`
    background-image: url(${({ image }) => image.desktop});
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;

    @media only screen and (max-width: ${768}px) {
        flex-direction: column;
        & {
            ${props =>
                props.image.mobile && `background-image: url(${props.image.mobile})`}
        }
    }
`;

export default Layout;
