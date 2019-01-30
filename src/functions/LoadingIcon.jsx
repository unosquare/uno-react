import CircularProgress from '@material-ui/core/CircularProgress';
import { styled } from '@material-ui/styles';

export const LoadingIcon = styled(CircularProgress)(theme => ({
    color: theme.palette.primary.main,
    display: 'block !important',
    margin: 'auto !important',
    marginBottom: '15px !important',
}));