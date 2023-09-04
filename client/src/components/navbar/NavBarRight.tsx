import React, { useEffect, useState } from "react";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone";
import PortraitTwoToneIcon from "@mui/icons-material/PortraitTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, NavBarRightProps, Product, RootState } from "../../types/types";
import { Badge, IconButton } from "@mui/material";

import SearchForm from "../form/SearchForm";
import User from "../../pages/User";
import { productActions } from "../../redux/slices/productList";


export default function NavBarRight({
  cartItems,
  isLoggedIn,
}: NavBarRightProps) {

  
  const searchResult = useSelector((state: RootState) => state.products.searchResult);
  const productList = useSelector(
    (state: RootState) => state.products.products
  );

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [filteredProducts, setFilteredProducts] =
  useState<Product[]>(productList);


  const navigate = useNavigate(); 
  const dispatch = useDispatch<AppDispatch>();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleFavoriteClick = () => {
    navigate('/favorites'); 
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim() === "") {
      navigate("/products");
    } else {
      dispatch(productActions.searchProduct(searchQuery));
      setIsSearchOpen(false);     
      navigate("/products", {
        state: {
          searchQuery,
        },
      });
    }
  };

  useEffect(() => {
    if (searchResult.length > 0) {
      setFilteredProducts(searchResult);
    } else {
        setFilteredProducts(productList);
      }    
  }, [searchResult, productList]);

  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      <IconButton onClick={handleFavoriteClick} color="inherit" aria-label="wishlist">
        <FavoriteTwoToneIcon />
      </IconButton>
      {!isLoggedIn ? (
        <>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: "inline-block" }}
          >
            <IconButton color="inherit" aria-label="user">
              <PersonTwoToneIcon />
            </IconButton>
            {isHovering && (
              <User open={isHovering} onClose={() => setIsHovering(false)} />
            )}
          </div> 
          <Link to="/shopping-cart">         
          <IconButton color="inherit" aria-label="shopping bag">
            {/* <Badge badgeContent={cartItems} color="secondary"> */}
              <LocalMallTwoToneIcon />
            {/* </Badge> */}
          </IconButton>
          </Link>     
        </>
      ) : (
        <>
          <Link to="/user-profile"> 
            <IconButton color="inherit" aria-label="account">
              <PortraitTwoToneIcon />
            </IconButton>   
          </Link>
          <Link to="/shopping-cart"> 
          <IconButton color="inherit" aria-label="shopping bag">
            {/* <Badge badgeContent={cartItems} color="secondary"> */}
              <LocalMallTwoToneIcon />
            {/* </Badge> */}
          </IconButton>
          </Link>
        </>
      )}
    </div>
  );
}

