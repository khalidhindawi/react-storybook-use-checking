import styled from 'styled-components';
import PropTypes from 'prop-types';

const Column = styled.div`
    flex: ${props => (props.grow ? props.grow : 1)};
    padding: 2em;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyDesktop};
    align-items: center;

    @media only screen and (max-width: 1024px) {
        & {
            flex: 1;
            padding: 0;
            justify-content: ${props => props.justifyMobile};
        }
    }
`;

Column.propTypes = {
    justifyDesktop: PropTypes.oneOf([
        'flex-start, flex-end, center, space-around, space-between',
    ]),
    justifyMobile: PropTypes.oneOf([
        'flex-start, flex-end, center, space-around, space-between',
    ]),
    width: PropTypes.number,
}

export default Column;
