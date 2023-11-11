import {
    Stack,
    Card,
    Box,
    Switch,
    Divider,
    Typography
} from '@suid/material';
import { createSignal, Show } from 'solid-js';
import { useIntl } from '@cookbook/solid-intl';
import type { SettingsInfo, ClientInfo } from './App';

interface SettingsProps {
    clientInfo(): ClientInfo | null;
    settings(): Partial<SettingsInfo>;
}

function Settings (props: SettingsProps) {
    const intl = useIntl();
    return (
        <Stack spacing={5}>
            <Stack spacing={1}>
                <Typography
                    sx={{
                        fontSize: 14,
                        fontWeight: '500',
                        marginLeft: '0.25rem'
                    }}
                    color='text.secondary'
                >
                    {intl.formatMessage({
                        id: 'app.settings.project',
                        defaultMessage: 'Project'
                    })}
                </Typography>
                <Card>
                    <Box sx={{padding: '16px'}}>
                        <Stack
                            spacing={1}
                            divider={<Divider flexItem />}
                        >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Typography>
                                    {intl.formatMessage({
                                        id: 'app.settings.project.convertProcCall',
                                        defaultMessage: 'Convert Sideload Extension\'s Blocks Into Procedures Call'
                                    })}
                                    <Show when={!props.clientInfo() || props.clientInfo()!.version < 5}>
                                        <Typography
                                            color='text.secondary'
                                            sx={{fontSize: '12px'}}
                                        >{`Required Eureka >= 5`}</Typography>
                                    </Show>
                                </Typography>
                                <Switch
                                    sx={{marginLeft: 'auto'}}
                                    checked={props.settings()?.convertProcCall}
                                    onChange={(_, value) => {
                                        window.opener.postMessage({
                                            type: 'updateSettings',
                                            item: {
                                                name: 'convertProcCall',
                                                value: value
                                            }
                                        }, '*');
                                    }}
                                    disabled={!props.clientInfo() || props.clientInfo()!.version < 5}
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Typography>
                                    {intl.formatMessage({
                                        id: 'app.settings.project.sideloadOnly',
                                        defaultMessage: 'Only load extension loaded by Eureka'
                                    })}
                                    <Show when={!props.clientInfo() || props.clientInfo()!.version < 6}>
                                        <Typography
                                            color='text.secondary'
                                            sx={{fontSize: '12px'}}
                                        >{`Required Eureka >= 6`}</Typography>
                                    </Show>
                                </Typography>
                                <Switch
                                    sx={{marginLeft: 'auto'}}
                                    checked={props.settings()?.sideloadOnly}
                                    onChange={(_, value) => {
                                        window.opener.postMessage({
                                            type: 'updateSettings',
                                            item: {
                                                name: 'sideloadOnly',
                                                value: value
                                            }
                                        }, '*');
                                    }}
                                    disabled={!props.clientInfo() || props.clientInfo()!.version < 6}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Card>
            </Stack>
            <Stack spacing={1}>
                <Typography
                    sx={{
                        fontSize: 14,
                        fontWeight: '500',
                        marginLeft: '0.25rem'
                    }}
                    color='text.secondary'
                >
                    {intl.formatMessage({
                        id: 'app.settings.extension',
                        defaultMessage: 'Extension'
                    })}
                </Typography>
                <Card>
                    <Box sx={{padding: '16px'}}>
                        <Stack
                            spacing={1}
                            divider={<Divider flexItem />}
                        >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Typography>
                                    {intl.formatMessage({
                                        id: 'app.settings.extension.dontExposeCtx',
                                        defaultMessage: 'Don\'t Expose "Scratch" Object Globally'
                                    })}
                                    <Show when={!props.clientInfo() || props.clientInfo()!.version < 5}>
                                        <Typography
                                            color='text.secondary'
                                            sx={{fontSize: '12px'}}
                                        >{`Required Eureka >= 5`}</Typography>
                                    </Show>
                                </Typography>
                                <Switch
                                    sx={{marginLeft: 'auto'}}
                                    checked={props.settings()?.dontExposeCtx}
                                    onChange={(_, value) => {
                                        window.opener.postMessage({
                                            type: 'updateSettings',
                                            item: {
                                                name: 'dontExposeCtx',
                                                value: value
                                            }
                                        }, '*');
                                    }}
                                    disabled={!props.clientInfo() || props.clientInfo()!.version < 5}
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Typography>
                                    {intl.formatMessage({
                                        id: 'app.settings.extension.noConfirmDialog',
                                        defaultMessage: 'No Confirmation Dialog While Loading Project'
                                    })}
                                    <Show when={!props.clientInfo() || props.clientInfo()!.version < 5}>
                                        <Typography
                                            color='text.secondary'
                                            sx={{fontSize: '12px'}}
                                        >{`Required Eureka >= 5`}</Typography>
                                    </Show>
                                </Typography>
                                <Switch
                                    sx={{marginLeft: 'auto'}}
                                    checked={props.settings()?.noConfirmDialog}
                                    onChange={(_, value) => {
                                        window.opener.postMessage({
                                            type: 'updateSettings',
                                            item: {
                                                name: 'noConfirmDialog',
                                                value: value
                                            }
                                        }, '*');
                                    }}
                                    disabled={!props.clientInfo() || props.clientInfo()!.version < 5}
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Typography>
                                    {intl.formatMessage({
                                        id: 'app.settings.extension.loadFromGallaryOnly',
                                        defaultMessage: 'Load From Gallery\'s Extensions Only'
                                    })}
                                    <Show when={!props.clientInfo() || props.clientInfo()!.version < 6}>
                                        <Typography
                                            color='text.secondary'
                                            sx={{fontSize: '12px'}}
                                        >{`Required Eureka >= 6`}</Typography>
                                    </Show>
                                </Typography>
                                <Switch
                                    sx={{marginLeft: 'auto'}}
                                    disabled={!props.clientInfo() || props.clientInfo()!.version < 6}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Card>
            </Stack>
        </Stack>
    );
}

export default Settings;
