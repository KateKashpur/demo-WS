import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/User.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={styles.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div className={styles.userFullname}>{user.name}</div>
          <div className={styles.userStatus}>{user.status}</div>
        </span>
        <span>
          <div className={styles.userLocation}>{"user.location.country"}</div>
          <div className={styles.userLocation}>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
