import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

const itemHeight = 48;

const paperProps = {
    style: {
        maxHeight: itemHeight * 4.5,
        width: 200,
    },
};

const AccountMenu = ({ history }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => setAnchorEl(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const LogOut = e => {
        e.preventDefault();
       history.push('/');
    };

    return (
        <>
            <Tooltip title='Account'>
                <IconButton
                    aria-label='More'
                    aria-owns={anchorEl ? 'long-menu' : null}
                    aria-haspopup='true'
                    onClick={handleClick}
                >
                    <AccountCircle style={{ color: '#fff' }}/>
                </IconButton>
            </Tooltip>
            <Menu
                id='long-menu'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={paperProps}
            >
                <MenuItem
                    key='option one'
                    onClick={handleClose}
                >
                    option one
                </MenuItem>
                <MenuItem
                    key='option two'
                    onClick={handleClose}
                >
                    option two
                </MenuItem>
                <MenuItem
                    key='Log Out'
                    onClick={LogOut}
                >
                    Log Out
                </MenuItem>
            </Menu>
        </>
    );
};

export default withRouter(AccountMenu);
