import {
    Button,
    Box,
    Divider,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Stack
} from '@suid/material';
import CodeIcon from '@suid/icons-material/Code';

function Home () {
    return (
        <Stack
            spacing={10}
            divider={<Divider flexItem />}
        >
            <Box sx={{
                margin: '8rem 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <img alt='chibimoth' src='/chibi.png' style={{width: '200px'}} />
                <Typography variant='h3' sx={{fontWeight: 500}}>Chibi</Typography>
                <Typography variant='subtitle1' color='text.secondary'>Load your Scratch extensions anywhere.</Typography>
                <Stack direction='row' spacing={2} sx={{marginTop: '2rem'}}>
                    <Button
                        variant='contained'
                        onClick={() => {
                            window.open('https://github.com/SimonShiki/scratch-chibi/releases');
                        }}
                    >Install</Button>
                    <Button
                        color='secondary'
                        variant='outlined'
                        onClick={() => {
                            window.open('https://github.com/SimonShiki/scratch-chibi');
                        }}
                    >GitHub Repo</Button>
                </Stack>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <Typography variant='h5' sx={{fontWeight: 500}}>
                Load ANY Scratch extensions in ANY Scratch-based editors.
                </Typography>
                <Typography variant='subtitle1' sx={{marginBottom: '1rem'}}>
                Chibi loads extensions by directly injecting them into the Scratch virtual machine,
                which allows you to use your favorite extensions without being restricted by the editor itself.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{flexFlow: 'wrap', justifyContent: 'center'}}>
                    <Card sx={{width: '300px', margin: '1rem'}}>
                        <CardMedia
                            component='img'
                            alt='screenshot from scratch'
                            height='240'
                            image='/carousel/scratch.png'
                        />
                    </Card>
                    <Card sx={{width: '300px', margin: '1rem'}}>
                        <CardMedia
                            component='img'
                            alt='screenshot from acamp'
                            height='240'
                            image='/carousel/acamp.png'
                        />
                    </Card>
                    <Card sx={{width: '300px', margin: '1rem'}}>
                        <CardMedia
                            component='img'
                            alt='screenshot from Gandi'
                            height='240'
                            image='/carousel/gandi.png'
                        />
                    </Card>
                    <Card sx={{width: '300px', margin: '1rem'}}>
                        <CardMedia
                            component='img'
                            alt='screenshot from Turbowarp'
                            height='240'
                            image='/carousel/tw.png'
                        />
                    </Card>
                </Stack>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <Typography variant='h5' sx={{fontWeight: 500}}>
                Write once, Run everywhere
                </Typography>
                <Typography variant='subtitle1' sx={{marginBottom: '1rem'}}>
                Chibi implements the loader independently, which means extensions have a unified implementation standard rather rely on the editor.
                </Typography>
                <Card sx={{width: '100%', maxWidth: '400px', marginTop: '1rem'}}>
                    <CardMedia
                        component='img'
                        alt='loader code preview'
                        image='/carbon.png'
                    />
                </Card>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <Typography variant='h5' sx={{fontWeight: 500}}>
                Compatible with most popular extension loading methods
                </Typography>
                <Typography variant='subtitle1' sx={{marginBottom: '1rem'}}>
                Chibi adds support for non-sandbox extensions and TurboWarp extensions. This means you can seamlessly sideload these extensions into your projects.
                </Typography>
            </Box>
        </Stack>
    );
}

export default Home;
