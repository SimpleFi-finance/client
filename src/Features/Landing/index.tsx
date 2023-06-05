import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Heading,
    HStack,
    Image,
    Img,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { Socials } from "../../Components";
import BelugaGif from "../../Assets/video/NFT4.gif";
import { useNavigate, useLocation } from "react-router-dom";
import { Newsletter } from "../../Components/Newsletter";
import Typewriter from 'typewriter-effect';

export const Landing = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true });
    const navigate = useNavigate();

    const trustedBy = [
        {
            name: "Figment",
            img: require('../../Assets/img/partners/figment.png')
        },
        {
            name: "TheGraph",
            img: require('../../Assets/img/partners/graph.png')
        },
        {
            name: "NEAR",
            img: require('../../Assets/img/partners/near.png')
        },
        {
            name: "Stake Capital",
            img: require('../../Assets/img/partners/stake.png')
        }
    ];

    const [hasScrolled, setHasScrolled] = useState(false);
    const faqSectionRef = useRef(null) as any;
    const { hash } = useLocation();

    useEffect(() => {
        if (faqSectionRef.current && hash === "#subscribe" && !hasScrolled) {
            faqSectionRef.current.scrollIntoView({
                behavior: "smooth",
                inline:'center',
                block: "center",
            });
            setHasScrolled(true);
        }

        return () => {
            setHasScrolled(false);
        };

    }, [faqSectionRef, hash]);

    return (
        <Box as="section" bg="inherit" px={2}>
            <Box 
            position="relative" 
            minH="calc(100vh - 82px)"
            width={{ lg: '80%', sm: '100%' }} 
            margin="auto"
            justifyContent="center"
            display="flex"
            >
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: '8' }}
                    align={{ md: 'center' }}
                    margin="auto"
                >
                    <Stack spacing={{ base: '8', md: '12' }}>
                        <Stack spacing={{ base: '4', md: '6' }} maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}>
                            <Stack>
                                <Heading bgGradient='linear(to-r, #ab5fac 0%, #2665bd 40%)' bgClip='text' size={useBreakpointValue({ base: 'md', md: 'lg', sm: 'md' })}>
                                    <Typewriter options={{strings: ["Open source", "Lightning Fast", "Multichain", "Lightweight", "Orgasmic"], autoStart: true, loop:true}} />
                                </Heading>
                                <Heading size={useBreakpointValue({ base: 'md', md: 'lg', sm: 'md' })}>
                                    DeFi data analytics
                                </Heading>
                            </Stack>
                            <Text fontSize={{ base: 'md', md: 'lg', sm: 'md' }} color="white">
                                Join DeFi&apos;s open data revolution: query our unified API, or run your own high-performance analytics engine for free.
                            </Text>
                        </Stack>
                        {!isDesktop && (
                            <Box
                            // pos={{ lg: 'absolute' }}
                                right="0"
                                top="0"
                                w={{ base: 'full', md: '100%', lg: '60%' }}
                            >
                                <video style={{
                                    width: '100%',
                                    height: '100%',
                                    margin: 'auto',
                                    objectFit: 'contain',
                                }} autoPlay loop muted>
                                    <source src={require('../../Assets/video/NFT4.webm')} type="video/webm" />
                                </video>
                            </Box>
                        )}
                        <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
                            <Button variant="primary" size={useBreakpointValue({ base: 'md', md: 'lg' })} onClick={() => window.open('https://forms.gle/pa4LonrFE63A2ygU7', '_blank')}>
                                Use the API
                            </Button>
                            <Button variant="primary" size={useBreakpointValue({ base: 'md', md: 'lg' })} onClick={() => window.open('https://forms.gle/pa4LonrFE63A2ygU7', '_blank')}>
                                Run your own
                            </Button>
                        </Stack>
                        {isDesktop && <Socials size="xl"/>} 
                    </Stack>
                    {isDesktop && 
                        <Box
                            // pos={{ lg: 'absolute' }}
                            right="0"
                            top="0"
                            w={{ base: 'full', md: '100%', lg: '50%' }}
                            sx={{
                                clipPath: { lg: 'polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)' },
                            }}
                        > 
                            <video style={{
                                width: '100%',
                                height: '60%',
                                margin: 'auto',
                                objectFit: 'contain',
                            }} autoPlay loop muted>
                                <source src={require('../../Assets/video/NFT4.webm')} type="video/webm" />
                            </video>
                        </Box>
                    }
                </Stack>
            </Box>
            <Box position="relative" width={{ lg: '80%', sm: '100%', md: '80%', base: '100%' }} minH={useBreakpointValue({default: '100vh', sm: '100vh', md: 'min-content', lg: 'min-content'})} margin="auto">
                <Card 
                    bgGradient="linear(to-br, #fcfcff 0,#edeeff 49.99%,#edeeff 60%)" 
                    p={{ base: '2', md: '10' }} 
                    borderRadius={useBreakpointValue({ base: 'lg', sm: 'xs', md: "md" })}
                    paddingX={{ base: '4', md: '8', lg: '10'}}
                    height="full"
                >
                    <CardHeader
                        py={useBreakpointValue({ base: '6', md: '4' })}
                    >
                        <Heading as="h1" size={useBreakpointValue({ sm: 'xs', md: 'xs', base: 'xs' })} color="#bf1d82">Explore</Heading>
                        <Heading  as='h2' size={useBreakpointValue({ sm: 'sm', md: 'sm', base: 'sm'})} py={{ base: '2', md: '4' }}>SimpleFi your data</Heading>
                    </CardHeader>
                    <Card direction={useBreakpointValue({ md: 'row', sm: 'column'})} bg="transparent" border="none" boxShadow="none" justify="space-evenly" align="flex-start">
                        <Card bg="transparent" border="none" boxShadow="none" p={useBreakpointValue({ base: '2', md: '4' })} justify="center" width={useBreakpointValue({base: '100%', md: '45%'})}>
                            <Image 
                                src={require('../../Assets/img/dashboard_1.webp')}
                                objectFit="contain"
                                margin="auto"
                                alt="dashboard_1"
                                bg="white"
                                borderRadius="md"
                                padding={2}
                                marginBottom={4}
                                width="100%"
                            />
                            <Heading 
                                size={useBreakpointValue({ base: 'xs', md: 'xs', lg: 'md' })}
                                paddingY={4}>
                                    <span style={{ color:"#bf1d82"}}>Unified</span> API
                            </Heading>
                            <Text>
                            Query our endpoints for comprehensive unified data on all DeFi categories, including Dexes, borrowing protocols, staking protocols, perp protocols, etc.
                            </Text>
                        </Card>
                        {!isDesktop && <Spacer />}
                        <Card bg="transparent" border="none" boxShadow="none" p={useBreakpointValue({ base: '2', md: '4' })} justify="center" width={useBreakpointValue({base: '100%', md: '45%'})}>
                            <Image 
                                margin="auto"
                                src={require('../../Assets/img/dashboard_2.webp')}
                                objectFit="contain"
                                alt="dashboard_2"
                                bg="white"
                                padding={2}
                                marginBottom={4}
                                borderRadius="md"
                            />
                            <Heading 
                                size={useBreakpointValue({ base: 'xs', md: 'xs', lg: 'md' })}
                                paddingY={4}>
                                    <span style={{ color:"#bf1d82"}}>Modular</span> engine
                            </Heading>
                            <Text>
                            Self-host your data thanks to our powerful, modular engine. Easily choose which chains and protocols to index and analyze. Bootstrap your database in an instant.
                            </Text>
                        </Card>
                    </Card>
                </Card>
            </Box>
            <Box position="relative" width={{ lg: '80%', sm: '100%', md: '90%' }} minH={useBreakpointValue({default: '100vh', sm: '100vh', md: 'min-content', lg: 'min-content'})}  margin="auto" mb={4}>
                <Card 
                    bg="transparent" 
                    p={{ base: '0', md: '10' }} 
                    paddingX={{ base: '0', sm: '2', lg: '10'}}
                    height="full"
                    w={useBreakpointValue({ base: '100%', md: '90%', lg: '90%' })}
                >
                    <CardHeader
                        py={useBreakpointValue({ base: '8', md: '8' })}
                        px={useBreakpointValue({ base: '2', md: '4' })}
                        pb={1}
                    >
                        <Heading as="h1" size={useBreakpointValue({ sm: 'xs', md: 'xs', base: 'xs' })} color="#bf1d82">Contribute</Heading>
                        <Heading as="h2" size={useBreakpointValue({ sm: 'sm', md: 'sm', base: 'xs'})} py={{ base: '2', md: '4' }} color="white">Join the open data revolution</Heading>
                    </CardHeader>
                    <CardBody
                        px={useBreakpointValue({ base: '2', md: '4' })}
                    >
                        <Text color="white" fontSize={useBreakpointValue({ sm: 'md', md: 'large', base: 'md' })} pb={2}>
                            DeFi data should be accessible, uncensored and permissionless... <span style={{color: '#f636ad'}}>just like the protocols themselves.</span> SimpleFi is fully open source, and provides <span style={{color: '#f636ad'}}>DeFi analytics as a public good. </span>Join us!
                        </Text>
                        <Card direction={{ base: 'column', md: 'row', sm: 'column'}} bg="transparent" border="none" boxShadow="none" justify="space-between">
                            <Card bg="transparent" border="none" boxShadow="none" justify="center" width={useBreakpointValue({ sm: '100%', md: '45%', base: '100%' })} px={1}>
                                <Heading 
                                    as="h2" 
                                    size={useBreakpointValue({ sm: 'sm', md: 'xs', base: 'xs'})}
                                    paddingY={4}
                                    color="white"
                                > Anyone can contribute
                                </Heading>
                                <Text fontSize={useBreakpointValue({ sm: 'md', md: 'large', base: 'md' })}  color="white">
                                Our data and analytics pipelines are entirely coded in Rust. Visit our github and help us make the platform even more powerful.
                                </Text>
                            </Card>
                            {!isDesktop && <Spacer />}
                            <Card bg="transparent" border="none" boxShadow="none" justify="center" width={useBreakpointValue({ sm: '100%', md: '45%', base: '100%' })} px={1}>
                                <Heading 
                                    as="h2" 
                                    size={useBreakpointValue({ sm: 'sm', md: 'xs', base: 'xs'})}
                                    paddingY={4}
                                    color="white"
                                > 
                                    Decentralized network
                                </Heading>
                                <Text fontSize={useBreakpointValue({ sm: 'md', md: 'large', base: 'md' })} color="white">
                                    In the age of AI, giving up control to private companies is a bad idea. Help build the network that serves training data as a public good.
                                </Text>
                            </Card>
                        </Card>
                    </CardBody>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '3', md: '6' }} marginTop={5}>
                            <Button variant="primary" size={useBreakpointValue({ base: 'md', md: 'md' })} onClick={() => navigate('/api/documentation')}>
                                Contribute now
                            </Button>
                        </Stack>
                </Card>
            </Box>
            <Box position="relative" width={{ lg: '80%', sm: '100%', md: '80%', base: '100%' }} margin="auto" mb={4}>
                <Heading  as='h2' size={useBreakpointValue({ sm: 'sm', md: 'sm', base: 'sm'})} py={{ base: '2', md: '4' }}>Trusted By</Heading>
                <SimpleGrid columns={useBreakpointValue({base: 2, sm: 2, xs: 2, md: 2, lg: 4})} spacing={2}>
                        {trustedBy.map(el=> (
                            <Image
                                key={el.name}
                                src={el.img}
                                alt={el.name}
                                objectFit="contain"
                                margin="auto"
                                bg="white"
                                borderRadius="xl"
                                marginBottom={4}
                            />
                        ))}
                </SimpleGrid>
            </Box>
            <Box position="relative" width={{ lg: '80%', sm: '100%', md: '80%', base: '100%' }} margin="auto" id="subscribe" ref={faqSectionRef}>
                <Newsletter />
            </Box>
        </Box>
    )
}