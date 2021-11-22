import styled from 'styled-components';
import React from 'react';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';

const Info = styled.div`
    opacity: 0;

    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 3;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s ease;
`

const Container = styled.div`
    flex: 1;
    height: 350px;
    min-width: 280px;
    background-color: #f5fbfd;
    margin: 5px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`

const Circle = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: white;

    position: absolute;
`

const Image = styled.img`
    height: 70%;
    z-index: 2;
`

const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    < ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
