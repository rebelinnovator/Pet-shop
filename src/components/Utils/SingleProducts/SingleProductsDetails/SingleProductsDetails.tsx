import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { separateNumber } from "../../../../functions/functions";
import { addToCart } from "../../../../redux/slice/cartReducer";
import MyButton from "../../Buttons/MyButton/MyButton";
interface props {
  title: string;
  price: number;
  balance: number;
  id: string | number;
  image: string;
  amount: number;
}

function SingleProductsDetails(props: props) {
  const { title, price, balance, id, image, amount } = props;
  document.title = props.title;
  const dispatch = useDispatch();

  return (
    <>
      <Typography dir="rtl" variant="h5" sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: "1rem" }}>
        {title}
      </Typography>
      <Typography dir="rtl" sx={{ fontSize: "1.2rem", fontWeight: "normal" }}>
        {separateNumber(price)} تومان
      </Typography>
      <Typography dir="rtl" sx={{ fontSize: "1rem", fontWeight: "normal" }}>
        موجود در انبار : {separateNumber(balance)} عدد
      </Typography>
      <Box
        onClick={() =>
          dispatch(
            addToCart({
              id,
              amount,
              image,
              title,
              price,
            })
          )
        }
      >
        <MyButton text="افزودن به سبد خرید" />
      </Box>
    </>
  );
}

export default SingleProductsDetails;
