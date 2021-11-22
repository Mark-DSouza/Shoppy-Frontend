import { Search, ShoppingCartOutlined } from '@material-ui/icons';
// import {MailIcon} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {Badge} from '@material-ui/core';

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 2;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Logo = styled.h1`
    font-weight: bold;
`

const MenuItem = styled.div`
    font-size: 14px;
    curson: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color: 'gray', fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Shoppy.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>
                        <Badge 
                            color="primary" 
                            badgeContent={4} 
                            // showZero
                        >
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
