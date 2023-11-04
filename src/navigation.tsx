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
import HomeIcon from '@suid/icons-material/HomeRounded';
import ExtensionIcon from '@suid/icons-material/ExtensionRounded';
import MenuIcon from '@suid/icons-material/Menu';
import GallaryIcon from '@suid/icons-material/StorefrontRounded';
import SettingsIcon from '@suid/icons-material/SettingsRounded';
import { defineMessages, useIntl } from '@cookbook/solid-intl';
import type { ClientInfo } from './App';
import type { MessageDescriptor } from '@cookbook/solid-intl';

interface NavigationProps {
    subtitleMap: Record<string, MessageDescriptor>;
    page (): string;
    navigateTo (page: string): void;
    clientInfo (): ClientInfo | null;
}

const messages = defineMessages({
    home: {
        id: 'app.navigation.home',
        defaultMessage: 'Home'
    },
    manage: {
        id: 'app.navigation.management',
        defaultMessage: 'Manage Extension'
    },
    gallary: {
        id: 'app.navigation.gallary',
        defaultMessage: 'Extension Gallary'
    },
    settings: {
        id: 'app.navigation.settings',
        defaultMessage: 'Settings'
    },
    version: {
        id: 'app.navigation.version',
        defaultMessage: 'Version: '
    },
    notConnected: {
        id: 'app.navigation.notConnected',
        defaultMessage: 'Not Connected'
    }
});

function Navigation (props: NavigationProps) {
    const [drawerOpen, setDrawerOpen] = createSignal(false);
    const intl = useIntl();
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
                            {intl.formatMessage(props.page() in props.subtitleMap ? props.subtitleMap[props.page()] : props.subtitleMap.default)}
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
                                background: props.page() === 'home' ? '#1e88e54c' : 'transparent'
                            }}
                        >
                            <ListItemButton onClick={() => props.navigateTo('home')}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={intl.formatMessage(messages.home)} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{
                                background: props.page() === 'manage' ? '#1e88e54c' : 'transparent'
                            }}
                        >
                            <ListItemButton onClick={() => props.navigateTo('manage')}>
                                <ListItemIcon>
                                    <ExtensionIcon />
                                </ListItemIcon>
                                <ListItemText primary={intl.formatMessage(messages.manage)} />
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
                                <ListItemText primary={intl.formatMessage(messages.gallary)} />
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
                                <ListItemText primary={intl.formatMessage(messages.settings)} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <Typography color='text.secondary'>{props.clientInfo() ? `${intl.formatMessage(messages.version)} ${props.clientInfo()!.version}` : intl.formatMessage(messages.notConnected)}</Typography>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Navigation;
