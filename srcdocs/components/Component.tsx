import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Code from '@material-ui/icons/Code';
import Settings from '@material-ui/icons/Settings';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import { useToggle } from '../../src/hooks/useToggle';
import ApiTable from '../utils/ApiTable';
import CodeSample from '../utils/CodeSample';

const useStyles = makeStyles({
    container: {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
    },
    divider: {
        marginBottom: '15px',
    },
    icon: {
        marginLeft: 'auto',
    },
    section: {
        marginBottom: '20px',
        paddingTop: '50px',
    },
    title: {
        marginTop: '30px',
        width: '50%',
    },
});

export default ({ title, text, api, code }: any) => {
    const classes = useStyles({});
    const [openApi, setOpenApi] = useToggle(false);
    const [openCode, setOpenCode] = useToggle(false);

    return (
        <div className={classes.section} id={title}>
            <div className={classes.container}>
                <Typography variant='h4' className={classes.title}>
                    {title}
                </Typography>
                <Tooltip title={'Show Code'}>
                    <IconButton
                        className={classes.icon}
                        onClick={setOpenCode}
                        color={openCode ? 'primary' : 'secondary'}
                    >
                        <Code />
                    </IconButton>
                </Tooltip>
                {api &&
                    <Tooltip title={'Component API'}>
                        <IconButton onClick={setOpenApi} color={openApi ? 'primary' : 'secondary'}>
                            <Settings />
                        </IconButton>
                    </Tooltip>
                }
            </div>
            <Divider className={classes.divider} />
            <Typography variant='subtitle1' paragraph={true}>
                {text}
            </Typography>
            {openApi && <ApiTable data={api} />}
            {openCode && <CodeSample data={code} />}
        </div>
    );
};
