import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ProductCard({
  title,
  description,
  price,
  picture,
  id,
  handleAddToCart,
  loved,
  handleLoveProduct,
  withActions,
  deleteAction,
  handleDelete,
  quantity,
  ...props
}) {
  console.log('Quanitity', quantity);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={picture}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="title" color="text">
          {quantity || ''}*{title}{' '}
          <div style={{ fontWeight: 'bold', color: 'red' }}>
            {quantity || 1 * price}TND
          </div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {withActions && (
        <CardActions disableSpacing>
          <IconButton
            onClick={() => handleLoveProduct(id)}
            aria-label="add to favorites"
          >
            {loved} <FavoriteIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              handleAddToCart({ title, price, description, picture })
            }
            aria-label="share"
          >
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      )}
      {deleteAction && (
        <CardActions disableSpacing>
          <IconButton onClick={() => handleDelete(id)} aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}
