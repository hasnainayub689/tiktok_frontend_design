import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import './Header.css';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" />
            </IconButton>
            <img
                className="header__logo"
                src="https://i.postimg.cc/PfcbVFFg/Untitled-design.png"
            ></img>
            <IconButton>
                <ForumIcon />
            </IconButton>
        </div>
    );
}

export default Header;
