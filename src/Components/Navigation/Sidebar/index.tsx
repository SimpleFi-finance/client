import React from "react";
import {
  Flex,
  Stack,
} from '@chakra-ui/react'

import {
  FiHome,
  FiUsers,
} from 'react-icons/fi'
import {
    HiOutlineNewspaper
} from 'react-icons/hi'
import { NavButton } from './NavButton'
import {useNavigate, useLocation} from "react-router-dom";

export const Sidebar = () => {
    const navigate = useNavigate();
    const pathname = useLocation().pathname;

    return (
        <Flex
            flex="1"
            bg="inherit"
            color="on-accent"
            maxW={{ base: 'full', sm: 'xs' }}
            py={{ base: '6', sm: '8' }}
            px={{ base: '4', sm: '6' }}
        >
            <Stack spacing={{ base: '5', sm: '6' }} width="80%">
                <NavButton onClick={() => navigate('/')} label="Home" icon={FiHome} isActive={pathname === '/'}/>
                <NavButton onClick={() => navigate('/careers')} label="Careers" icon={FiUsers} isActive={pathname === '/careers'} />
                {/* <NavButton onClick={() => navigate('/api/documentation')} label="API docs" icon={TbApi} isActive={pathname === '/api/documentation'}/> */}
                <NavButton onClick={() => navigate('/#newsletter')} label="Newsletter" icon={HiOutlineNewspaper}/>
            </Stack>
        </Flex>
    )
};