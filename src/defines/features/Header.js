import { AppBar, Box, Button, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

const useStyle = makeStyles({
    toolbarStyle: {
        display: 'flex',
        justifyContent: 'space-between',
    },
})

const Header = (props) => {
    const classes = useStyle(props);
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbarStyle}>
                <Box>
                    <Typography variant="h6" >
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        News
                    </Typography>
                </Box>

                <Button color="inherit">

                    <Box mx={2} my={'auto'}>
                        <PersonIcon />
                    </Box>
                    Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;