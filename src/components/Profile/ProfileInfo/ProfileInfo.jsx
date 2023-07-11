import React from "react";
import col from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  let alt_descriptionBlock = `photo_${profile.userId}`;

  return (
    <div>
      <div className={col.photoBlock}>
        <img
          className={col.wallpapper}
          src="https://th.bing.com/th/id/R.593e9d7a356ba8b86562474b1fabf7db?rik=eXlRoRpFx7I39Q&pid=ImgRaw&r=0"
          alt="wallpapper"
        />
      </div>
      <div className={col.descriptionBlock}>
        <img
          className={col.avatar}
          src={profile.photos.small}
          alt={alt_descriptionBlock}
        />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
