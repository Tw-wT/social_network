import React from "react"
import s from "./Users.module.css"
import userPhoto from "../../assets/images/default_user_avatar.jpg"
import { NavLink } from 'react-router-dom';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  pagesCount = 20 //установил 20 т.к. пользователей больше 60к и кол-во страниц слишком большое
  let pages = []

  for (let i = 1; i <= pagesCount; i++) { //
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map(number => <span className={props.currentPage === number && s.selectedPage}
          onClick={(e) => { props.onPageChanged(number) }}>{number}</span>)}
      </div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto} />
              </NavLink>

            </div>
            <div>
              {u.followed ? <button onClick={() => { props.unFollow(u.id) }}>Отписаться</button> : <button onClick={() => { props.follow(u.id) }}>Подписаться</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
            </span>
          </span>
        </div>
        )
      }
    </div>
  )
}

export default Users