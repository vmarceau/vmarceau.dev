import {makeStyles} from '@material-ui/core/styles';

const useContentStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'justify',
    maxWidth: '960px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  break: {
    width: '100%',
    height: '0px',
  },
}));

export default useContentStyles;
