import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addItem, removeItem } from './paa'
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
  Badge
} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import { red } from '@mui/material/colors'

const Cart = ({ items, addItem, removeItem }) => {
  const [newItem, setNewItem] = useState('')
  const [count, setCount] = useState(0);

  const handleInputChange = (event) => {
    setNewItem(event.target.value)
  }

  const handleAddItem = () => {
    addItem(newItem)
    setNewItem('')
    setCount(count+1);
  }

  const handleRemove = (index) => {
    removeItem(index)
    setCount(count-1)
  }

  return (
    <div>
      <Typography variant="h4">
        Cart{'  '}
        <Badge badgeContent={count} color="success" sx={{}}>
          <ShoppingCartIcon />
        </Badge>
      </Typography>
      <TextField
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Enter an item"
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleAddItem} sx={{backgroundColor:"red"}}>
        <AddShoppingCartIcon />
        Add Item
      </Button>
      <hr />
      <br />
      <Typography variant="h4"><h1>Items in Cart :</h1></Typography>
      {items.map((item, index) => (
        <Card key={index}>
          <CardContent sx={{ display: 'flex' }}>
            <Typography variant="h5">{item}</Typography>
            <IconButton
              onClick={() => handleRemove(index)}
              sx={{ marginLeft: '10px' }}
            >
              <RemoveShoppingCartIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (index) => dispatch(removeItem(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)