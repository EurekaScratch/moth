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
import { createSignal, onMount } from 'solid-js';
import { useIntl } from '@cookbook/solid-intl';
import CodeIcon from '@suid/icons-material/Code';

interface ReleaseManifest {
    version: string;
    publishTime: string;
}

function Home () {
    const [manifest, setManifest] = createSignal<ReleaseManifest | null>(null);
    onMount(async () => {
        const res = await fetch('/release/manifest.json');
        const manifest = await res.json();
        setManifest(manifest);
    });
    const intl = useIntl();
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
                <img alt='eureka' src='/eureka.svg' style={{width: '150px'}} />
                <Typography variant='h3' sx={{fontWeight: 500}}>
                    {intl.formatMessage({
                        id: 'app.home.title',
                        defaultMessage: 'Eureka'
                    })}
                </Typography>
                <Typography variant='subtitle1' color='text.secondary'>
                    {intl.formatMessage({
                        id: 'app.home.slogan',
                        defaultMessage: 'Universal Scratch Extension Loader.'
                    })}
                </Typography>
                <Typography variant='subtitle2' color='text.secondary'>
                    {intl.formatMessage({
                        id: 'app.home.version',
                        defaultMessage: 'Latest version: {version}'
                    }, {
                        version: manifest() ? manifest()!.version : 'Loading'
                    })}
                </Typography>
                <Stack direction='row' spacing={2} sx={{marginTop: '2rem'}}>
                    <Button
                        variant='contained'
                        onClick={() => {
                            window.open('/release/eureka-loader.user.js');
                        }}
                    >
                        {intl.formatMessage({
                            id: 'app.home.install',
                            defaultMessage: 'Install'
                        })}
                    </Button>
                    <Button
                        color='secondary'
                        variant='outlined'
                        onClick={() => {
                            window.open('https://github.com/SimonShiki/scratch-chibi');
                        }}
                    >
                        {intl.formatMessage({
                            id: 'app.home.repo',
                            defaultMessage: 'GitHub Repo'
                        })}
                    </Button>
                </Stack>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <Typography variant='h5' sx={{fontWeight: 500}}>
                    {intl.formatMessage({
                        id: 'app.home.subtitle1',
                        defaultMessage: 'Load ANY Scratch extensions in ANY Scratch-based editors.',
                        description: 'Load ANY Scratch extensions in ANY Scratch-based editors.'
                    })}
                </Typography>
                <Typography variant='subtitle1' sx={{marginBottom: '1rem'}}>
                    {intl.formatMessage({
                        id: 'app.home.subdescription1',
                        defaultMessage: 'Eureka loads extensions by directly injecting them into the Scratch virtual machine, which allows you to use your favorite extensions without being restricted by the editor itself.',
                        description: 'Eureka loads extensions by directly injecting them into the Scratch virtual machine, which allows you to use your favorite extensions without being restricted by the editor itself.'
                    })}
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
                            alt='screenshot from Xiaimawang'
                            height='240'
                            image='/carousel/xmw.png'
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
                    {intl.formatMessage({
                        id: 'app.home.subtitle2',
                        defaultMessage: 'Write once, Run everywhere',
                        description: 'Write once, Run everywhere'
                    })}
                </Typography>
                <Typography variant='subtitle1' sx={{marginBottom: '1rem'}}>
                    {intl.formatMessage({
                        id: 'app.home.subdescription2',
                        defaultMessage: 'Eureka implements the loader independently, which means extensions have a unified implementation standard rather rely on the editor.',
                        description: 'Eureka implements the loader independently, which means extensions have a unified implementation standard rather rely on the editor.'
                    })}
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
                    {intl.formatMessage({
                        id: 'app.home.subtitle3',
                        defaultMessage: 'Compatible with most popular extension loading methods',
                        description: 'Compatible with most popular extension loading methods'
                    })}
                </Typography>
                <Typography variant='subtitle1' sx={{marginBottom: '1rem'}}>
                    {intl.formatMessage({
                        id: 'app.home.subdescription3',
                        defaultMessage: 'Eureka adds support for non-sandbox extensions and TurboWarp extensions. This means you can seamlessly sideload these extensions into your projects.',
                        description: 'Eureka adds support for non-sandbox extensions and TurboWarp extensions. This means you can seamlessly sideload these extensions into your projects.'
                    })}
                </Typography>
            </Box>
        </Stack>
    );
}

export default Home;
