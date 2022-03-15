import React, { useState } from 'react'
import './HomeHeader.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { auth } from './firebase.js';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function HomeHeader({ user }) {
    const history = useHistory('');

    if (user === false) {
        history.push("/login")
    }

    const logout = (event) => {
        event.preventDefault();
        auth.signOut();
        history.push("/login");
    }
    return (
        <div className="homeHeader">
            <div className="homeHeader__left">
              
            </div>

            <div className="homeHeader__inputSearch">
                <input type="text" placeholder="Buscar" />
                <SearchIcon className="homeHeader__inputButton" />
            </div>
            <div className="homeHeader__icons">
                <section>
                    <Avatar className="homeHeader__avatar" alt="" src="" />
                    <h3 className="homeHeader__name">{user?.displayName}</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Home</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Amigos</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Crear</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <GroupAddIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <TelegramIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <NotificationsIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <AssignmentIndIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <div className="dropdown">
                        <ArrowDropDownIcon className="dropdown" />
                        <div className="dropdown-content">
                            <a onClick={logout}><p>salir</p></a>
                        </div>
                    </div>
                </section>

                <h3 className="homeHeader__dash"> | </h3>
            </div>
        </div>
    )
}

export default HomeHeader
