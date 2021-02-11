import styled from 'styled-components';

interface MapProps {
  className: string;
}

const Map: React.FC<MapProps> = ({ className }: MapProps) => (
  <iframe
    className={className}
    frameBorder="0"
    src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDT2mdOPlpEARcj_KobIlCnU&key=${process.env.NEXT_PUBLIC_API_KEY}`}
    title="Topola Skies - Google Maps"
    allowFullScreen
  />
);

const StyledMap: React.FC = styled(Map)`
  display: block;
  width: calc(100% - 4rem);
  height: 40vh;
  border: 1px solid ${(props): string => props.theme.lightgrey};
  margin: auto;
`;

export default StyledMap;
