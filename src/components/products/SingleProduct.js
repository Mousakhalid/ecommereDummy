import { Favorite, FitScreen, Share } from "@mui/icons-material";
import { Stack } from "@mui/system";
import React from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/Products";
import ProductMeta from "./ProductMeta";

const SingleProduct = ({ product, matches }) => {
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction="row">
            <ProductFavButton isfav={1}>
              <Favorite />
            </ProductFavButton>
            <ProductActionButton>
              <Share color="#000CC7" />
            </ProductActionButton>
            <ProductActionButton>
            <FitScreen color="#000CC7" />
          </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant="contained">Add To Cart</ProductAddToCart>
    </>
  );
};

export default SingleProduct;
