import React from "react"
import s from "./Profile.module.css"

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://phonoteka.org/uploads/posts/2021-07/1625519216_32-phonoteka-org-p-programmirovanie-zastavka-krasivie-zastavk-32.jpg"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>
        ava + desk
      </div>
    </div>
  )
}

export default ProfileInfo