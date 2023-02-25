import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Items from "./Items";
import {
  Box,
  Button,
  Text
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Cart = () => {
  const { data, clearData, totalProducts, totalamount } =
    useContext(CartContext);


  console.log("data", data);
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Total Products:{data.length}</h1>
      </div>
      <div className="mainBox">
        {data.map((el) => (
          <Items key={el.id + Math.random()} {...el} />
        ))}
        <Box
          mt={"10px"}
          fontSize="18px"
          textAlign="right"
          marginLeft="64%"
          width={"24%"}
        >
          <Text fontWeight={"600"} p="10px">
            Total M.R.P : &nbsp;&nbsp; ₹ {totalamount}
          </Text>
          <Button
            mr="11px"
            background={"rgb(216, 96, 96)"}
            onClick={() => clearData()}
          >
            CLEAR CART
          </Button>
          <Link to="/payment">
            {" "}
            <Button background={"green"}>PLACE ORDER</Button>{" "}
          </Link>
        </Box>
      </div>
    </>
  );
};

export default Cart;
