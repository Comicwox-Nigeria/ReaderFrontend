import React from 'react';

import DrawerToggleButton from './DrawerToggleButton';

const toolbar = props => (
    <header className='toolbar'>

        <nav className='toolbar_navigation'>

            <div className='toolbar_logo'><a href='/'>The Logo</a></div>
            <div className='spacer'/>
            <div className='toolbar_navigation_items'>
                <ul>
                    <li><a href='/'>Product</a></li>
                    <li><a href='/'>Users</a></li>
                </ul>
            </div>

            <div className='toolbar_toggle_button'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
);

export default toolbar;
