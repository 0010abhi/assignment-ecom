import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import { getValueFromLocalStorage, setLocalStorage } from '../../state/local-storage';


// const pages = ['Products', 'Orders', 'Coupons', 'Cart'];
const settings = ['Logout'];

function ResponsiveAppBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [pages, setPages] = React.useState<Array<string>>(['Products']);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logOut = () => {
        setAnchorElUser(null);
        setLocalStorage('isLoggedIn', 'false');
    }

    // React.useEffect(() => {

    // },[]);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HomeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => navigate("/")}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            // fontFamily: 'monospace',
                            fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Home
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <HomeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        onClick={() => navigate("/")}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            // fontFamily: 'monospace',
                            fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Home
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => {
                            return page === 'Cart' ?
                                <Badge style={{ border: "1px solid black" }} badgeContent={4} color="primary">
                                    <Button

                                        key={page}
                                        onClick={() => navigate("/" + page.toLowerCase())}
                                        sx={{ color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                </Badge> :
                                <Button
                                    key={page}
                                    onClick={() => navigate("/" + page.toLowerCase())}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                        })}
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        {
                            getValueFromLocalStorage('isLoggedIn') === 'true' ?
                                <>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={logOut}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu></> :
                                <div style={{ border: '1px solid black' }}>
                                    <Button onClick={() => navigate('/login')}>Log In</Button>
                                </div>
                        }

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
