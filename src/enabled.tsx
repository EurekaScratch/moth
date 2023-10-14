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
import { createSignal } from 'solid-js';

function Enabled () {
    const [addModalOpen, setAddModalStatus] = createSignal(false);
    const [sandboxChecked, setSandboxChecked] = createSignal(false);
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
                <Button>Load</Button>
                </DialogActions>
            </Dialog>
            <Button
                variant='contained'
                onClick={() => setAddModalStatus(true)}
            >Add Extension</Button>
            <div style={{margin: '1rem 0'}} />
            <Stack spacing={2} flexWrap='wrap'>
                <Card>
                    <CardContent sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Typography>Giru</Typography>
                        <Chip
                            sx={{marginLeft: 'auto'}}
                            color='error'
                            label='Unsandboxed'
                        />
                    </CardContent>
                    <CardActions>
                        <Button size='small'>Reload</Button>
                    </CardActions>
                </Card>
            </Stack>
        </>
    );
}

export default Enabled;
