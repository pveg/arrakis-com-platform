import { Box } from '@skynexui/components';
import appConfig from './config.json';

function Título(props) {
    console.log(props);
    const Tag = props.tag || 'h1';
    return (
        <div>
            <Tag>{props.children}</Tag>
            <style jsx>{`
        ${Tag} {
                color: ${appConfig.theme.colors.neutrals['145']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </div>
    );
}
export default function chatPage() {
    return(
    <Box
        styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://img5.goodfon.com/original/1280x800/6/55/low-poly-lena-diuny-pesok-minimalizm.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
    >
        <Box
            styleSheet={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                },
            }}
        ></Box><Título tag="h2">Arrakis Communication Platform</Título>
        <Título variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[145] }}>
        </Título>

    </Box>
)
}