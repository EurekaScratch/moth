import { createSignal } from 'solid-js';
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider
} from '@suid/material';
import ExtensionIcon from '@suid/icons-material/ExtensionRounded';
import MenuIcon from '@suid/icons-material/Menu';
import GallaryIcon from '@suid/icons-material/StorefrontRounded';
import SettingsIcon from '@suid/icons-material/SettingsRounded';
import type { ClientInfo } from './App';

interface NavigationProps {
    page (): string;
    navigateTo (page: string): void;
    clientInfo (): ClientInfo | null;
}

function Navigation (props: NavigationProps) {
    const [drawerOpen, setDrawerOpen] = createSignal(false);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{ mr: 2 }}
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant='h6'
                            component='div'
                            sx={{ flexGrow: 1, userSelect: 'none' }}
                        >
                            Chibi Management
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor='left'
                open={drawerOpen()}
                sx={{ zIndex: 9999 }}
                onClose={() =>setDrawerOpen(false)}
            >
                <Box
                    sx={{width: 250}}
                    role='presentation'
                    onClick={() =>setDrawerOpen(false)}
                    onKeyDown={() =>setDrawerOpen(false)}
                >
                    <List>
                        <ListItem
                            disablePadding
                            sx={{
                                background: props.page() === 'enabled' ? '#1e88e54c' : 'transparent'
                            }}
                        >
                            <ListItemButton onClick={() => props.navigateTo('enabled')}>
                                <ListItemIcon>
                                    <ExtensionIcon />
                                </ListItemIcon>
                                <ListItemText primary='Enabled Extensions' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{
                                background: props.page() === 'gallary' ? '#1e88e54c' : 'transparent'
                            }}
                        >
                            <ListItemButton onClick={() => props.navigateTo('gallary')}>
                                <ListItemIcon>
                                    <GallaryIcon />
                                </ListItemIcon>
                                <ListItemText primary='Extensions Gallary' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem
                            disablePadding
                            sx={{
                                background: props.page() === 'settings' ? '#1e88e54c' : 'transparent'
                            }}
                        >
                            <ListItemButton onClick={() => props.navigateTo('settings')}>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary='Settings' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <Typography color='text.secondary'>{props.clientInfo() ? `Version: ${props.clientInfo()!.version}` : 'Not connected'}</Typography>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Navigation;
