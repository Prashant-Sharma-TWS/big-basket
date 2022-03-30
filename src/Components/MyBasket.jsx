import React, { useState } from 'react'
// import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { BasketItems } from './BasketItems';
import styles from './Css/basket.module.css'
import { useSelector } from 'react-redux';

export const MyBasket = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [cart, setCart] = useState(0);
    let items = useSelector(state=> state)
    console.log(items)

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <div className="basket" >
                    <span>
                        <i className="basket-image"></i>
                        <b className="cart-count">{cart}</b>
                    </span>
                    <div>
                        <span className="my-basket">My Basket</span>
                        <span className="cart-value">
                            {cart}
                            <span>items</span>
                        </span>
                    </div>
                </div>
            </Typography>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>
                    <BasketItems />
                </Typography>
            </Popover>
        </div>
    );
}
