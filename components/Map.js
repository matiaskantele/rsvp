import styled from "styled-components";

const Map = ({ className }) => (
  <iframe
    className={className}
    frameBorder="0"
    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDT2mdOPlpEARcj_KobIlCnU&key=AIzaSyAPM1cc0bHAfhVVDlVtBuPMwAcS7-fBdWc"
    allowFullScreen
  />
);

const StyledMap = styled(Map)`
  width: 100%;
  height: 40vh;
  border: 1px solid ${props => props.theme.lightgrey};
`;

export default StyledMap;
