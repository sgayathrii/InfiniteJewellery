import React, { ChangeEvent, FormEvent, useState } from 'react';
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

import { SearchFormProps } from '../../types/types';
import { Button, Drawer, IconButton, Input } from '@mui/material';

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchQuery);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };


  return (
    <>
      <IconButton color="inherit" aria-label="search" onClick={toggleDrawer}>
        <SearchTwoToneIcon />
      </IconButton>
      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer} sx={{
          '& .MuiDrawer-paper': {
            height: '100px', 
          },
        }}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button type="submit">Search</Button>
        </form>
      </Drawer>
    </>
  );
}