import { ListTitle } from '../styled/Typography';
import SocialList from './SocialList';

function SideSocialList({ social }) {
  return (
    <div>
      <ListTitle>Get in Touch</ListTitle>
      <SocialList social={social} />
    </div>
  );
}

export default SideSocialList;
