import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TvShowContext } from "../../contexts/tvShowContext";

const RemoveFromTvShowFavouritesIcon = ({ tv }) => {
  const context = useContext(TvShowContext);

  const handleRemoveFromFavourites = (e) => {
    e.preventDefault();
    context.removeFromFavourites(tv);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavourites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvShowFavouritesIcon;