import React from 'react';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>My Shopping Cart</strong>
          <span>3 items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
