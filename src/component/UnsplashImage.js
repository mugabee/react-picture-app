import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UnsplashImage = ({ image }) => {
    const {urls, id} = image
    return (
        <>
        <Link to={`/Description/${id}`}>
            <Img className="gap-10" key={id} src={urls.thumb} alt="" />
        </Link>
        </>
    )
}

export default UnsplashImage
