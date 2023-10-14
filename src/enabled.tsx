import {
    Button,
    Stack,
    Card,
    CardContent,
    CardActions,
    Chip,
    Box,
    Switch,
    Dialog,
    DialogTitle,
    DialogActions,
    FormControlLabel,
    DialogContent,
    TextField,
    Typography
} from '@suid/material';
import type { ExtensionInfo } from './App';
import { createSignal, Show, For } from 'solid-js';

interface EnabledProps {
    extensions(): ExtensionInfo[];
}

function Enabled (props: EnabledProps) {
    const [addModalOpen, setAddModalStatus] = createSignal(false);
    const [sandboxChecked, setSandboxChecked] = createSignal(false);
    const [url, setUrl] = createSignal('');

    return (
        <>
            <Dialog
                open={addModalOpen()}
                onClose={() => setAddModalStatus(false)}
            >
                <DialogTitle>Add an extension</DialogTitle>
                <DialogContent>
                    <Box
                        component='form'
                        noValidate
                        autocomplete='off'
                        sx={{paddingTop: '0.5rem'}}
                    >
                        <TextField
                            required
                            value={url()}
                            onChange={(_, value) => {
                                setUrl(value);
                            }}
                            label='Enter your extension URL'
                            fullWidth
                        />
                    </Box>
                    <FormControlLabel
                        label='Running in Sandbox'
                        control={
                            <Switch
                                checked={sandboxChecked()}
                                onChange={(_, value) => {
                                    setSandboxChecked(value);
                                }}
                            />
                        }
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={() => {
                    window.postMessage({
                        type: 'load',
                        info: {
                            url: url(),
                            sandboxed: sandboxChecked()
                        }
                    }, '*');
                    setUrl('');
                    setAddModalStatus(false);
                }}>Load</Button>
                </DialogActions>
            </Dialog>
            <Button
                variant='contained'
                onClick={() => setAddModalStatus(true)}
            >Add Extension</Button>
            <div style={{margin: '1rem 0'}} />
            <Stack spacing={2} flexWrap='wrap'>
                <Show when={props.extensions() !== null}>
                    <For each={props.extensions()}>
                        {(extension) => (
                            <Card>
                    <CardContent sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Typography>{extension.name}</Typography>
                        <Chip
                            sx={{marginLeft: 'auto'}}
                            color={extension.sandboxed ? 'primary' : 'error'}
                            label={extension.sandboxed ? 'Sandboxed' : 'Unsandboxed'}
                        />
                    </CardContent>
                    <CardActions>
                        <Button disabled size='small'>Reload</Button>
                    </CardActions>
                </Card>
                        )}
                    </For>
                </Show>
            </Stack>
        </>
    );
}

export default Enabled;
