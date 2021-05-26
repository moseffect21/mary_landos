import apiClient from 'apiClient'
import React, { useState } from 'react'
import Select from 'react-styled-select'

import s from './FiveBlock.scss'

const FiveBlock = () => {
  const [name, setName] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [value, setValue] = useState<number>(1)
  const options = [
    {
      label: 'Будем вдвоем',
      value: 1,
    },
    {
      label: 'Обязательно буду',
      value: 2,
    },
    {
      label: 'Не смогу быть',
      value: 3,
    },
  ]
  const sendData = () => {
    if (!name || !lastname) {
      alert('Введите имя и фамилию')
    } else {
      apiClient.get(`/api/v1/add?name=${name}&lastname=${lastname}&selected=${value}`)
    }
  }
  return (
    <div className={s.container}>
      <img src="/images/form1.png" alt="" className={s.back_img1} />
      <img src="/images/form2.png" alt="" className={s.back_img2} />
      <div className={s.title}>
        Пожалуйста, подтвердите ваше присутствие на нашем празднике до 1 июня 2021 года
      </div>
      <div className={s.form}>
        <label htmlFor="name" className={s.input_label}>
          <div className={s.input_name}>Имя</div>
          <input
            type="text"
            placeholder="Введите здесь Ваше имя"
            id="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
          />
        </label>
        <label htmlFor="lastname" className={s.input_label}>
          <div className={s.input_name}>Фамилия</div>
          <input
            type="text"
            placeholder="Введите здесь Вашу фамилию"
            id="lastname"
            name="lastname"
            onChange={(e) => {
              setLastname(e.target.value)
            }}
            value={lastname}
          />
        </label>
        <div className={s.input_label}>
          <div className={s.input_name}>Подтвердите свое присутствие</div>
          <Select
            className={s.categ_select}
            options={options}
            onChange={setValue}
            value={value}
            searchable={false}
            classes={{
              selectControl: s.select_control,
              selectValue: s.select_value,
              selectArrow: s.select_arrow,
              selectValueLabel: s.select_value_label,
              selectMultiValueWrapper: s.select_multival_wrapper,
              selectMenuOuter: s.select_menu_outer,
              selectMenu: s.select_menu,
              selectOption: s.select_option,
            }}
          />
        </div>
        <div className={s.btn_block}>
          <button className={s.btn} type="button" onClick={sendData}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default FiveBlock
