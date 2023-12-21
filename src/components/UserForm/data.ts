import { Input } from '@/components/Input'
import { Select } from '@/components/Select'

const data = [
  {
    type: Select,
    props: {
      label: 'Сотрудник',
      name: 'employee',
      value: '',
      options: [
        {
          label: 'Нет пользователя',
          props: {
            selected: true,
            disabled: true,
            value: ''
          }
        },
        {
          label: 'Пользователь',
          props: {
            value: 'user1'
          }
        }
      ]
    }
  },
  {
    type: Select,
    props: {
      label: 'Руководитель',
      name: 'executive',
      value: '',
      options: [
        {
          label: 'Нет пользователя',
          props: {
            selected: true,
            disabled: true,
            value: ''
          }
        },
        {
          label: 'Пользователь',
          props: {
            value: 'user1'
          }
        }
      ]
    }
  },
  {
    type: Select,
    props: {
      label: 'Тип ставки',
      name: 'rate-type',
      value: '',
      options: [
        {
          label: 'Не выбрано',
          props: {
            selected: true,
            disabled: true,
            value: ''
          }
        },
        {
          label: 'Opex',
          props: {
            value: 'opex'
          }
        },
        {
          label: 'Capex',
          props: {
            value: 'capex'
          }
        }
      ]
    }
  },
  {
    type: Select,
    props: {
      label: 'Бизнес-единица',
      name: 'business-unit',
      value: '',
      options: [
        {
          label: 'Не выбрано',
          props: {
            selected: true,
            disabled: true,
            value: ''
          }
        },
        {
          label: 'MVM',
          props: {
            value: 'mvm'
          }
        },
        {
          label: 'MTech',
          props: {
            value: 'mtech'
          }
        }
      ]
    }
  },
  {
    type: Input,
    props: {
      label: 'Процент капитализации',
      name: 'capitalization',
      type: 'number',
      value: 0,
      min: 0,
      max: 100,
      step: 1
    }
  },
  {
    type: Input,
    props: {
      label: 'Должность',
      name: 'position',
      value: ''
    }
  }
]

export default data
