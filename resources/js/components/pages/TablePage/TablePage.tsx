/* eslint-disable no-nested-ternary */
import apiClient from 'apiClient'
import React from 'react'
import { useQuery } from 'react-query'

import s from './TablePage.scss'

const fetchUsers = async () => {
  const { data } = await apiClient.get('/api/v1/get_users')

  return data
}

const TablePage = () => {
  const { isLoading, data } = useQuery('users', fetchUsers)

  return isLoading ? (
    <div style={{ fontSize: '2rem' }}>Загрузка....</div>
  ) : (
    <div>
      <div>
        <div className={s.item}>
          <div className={s.iterator}>#</div>
          <div>Имя</div>
          <div>Фамилия</div>
          <div>с кем</div>
        </div>
        {data && data.length ? (
          data.map((item: any, i: number) => {
            return (
              <div className={s.item}>
                <div className={s.iterator}>{i + 1}</div>
                <div>{item.name}</div>
                <div>{item.lastname}</div>
                <div>
                  {item.selected === 1
                    ? 'Будем вдвоем'
                    : item.selected === 2
                    ? 'Обязательно буду'
                    : 'Не смогу быть'}
                </div>
              </div>
            )
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default TablePage
