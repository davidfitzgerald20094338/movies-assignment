import React, { useContext } from "react";
import { TvShowContext } from "../../contexts/tvShowContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToTvShowFavouritesIcon = ({ tv }) => {
  const context = useContext(TvShowContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(tv);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvShowFavouritesIcon;