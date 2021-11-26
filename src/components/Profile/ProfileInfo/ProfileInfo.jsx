import React from "react"
import s from "./Profile.module.css"
import Preloader from "../../Common/Preloader/Preloader"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <div classname={s.avatarWrap}>
          <img className={s.profileAvatar} src={props.profile.photos.large} />
        </div>
        <div className={s.nameWrap}>
          <h3>{props.profile.fullName}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo