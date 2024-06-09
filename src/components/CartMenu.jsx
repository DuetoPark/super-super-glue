import React from "react";
import IconButton from "../shared/modules/button/IconButton";
import { LuShoppingCart } from "react-icons/lu";
import useCart from "../hooks/useCart";

export default function CartMenu() {
  const {
    cartQuery: { data: cart },
  } = useCart();

  return (
    <IconButton
      tag="link"
      url="/cart"
      text="장바구니"
      size="medium"
      color="secondary"
      count={cart && cart.length}
    >
      <LuShoppingCart aria-hidden="true" />
    </IconButton>
  );
}