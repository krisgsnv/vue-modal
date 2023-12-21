import { Input } from "@/components/Input";
import { Select } from "@/components/Select";

const data = [
  {
    type: Select,
    props: {
      label: 'Менеджер',
      name: 'manager',
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
    type: Input,
    props: {
      label: 'Название продукта',
      name: 'productName',
      value: ''
    }
  },
  {
    type: Input,
    props: {
      label: 'Ссылка в Jira',
      name: 'jiraLink',
      additionalText: 'Ссылка в jira, включая https://',
      value: ''
    }
  },
  {
    type: Select,
    props: {
      label: 'Домен',
      name: 'domen',
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
        { label: 'Бэк-офис', props: { value: 'back-office' } },
        {
          label: 'Техплатформа',
          props: { value: 'tech-platform' }
        },
        {
          label: 'Офис больших данных',
          props: { value: 'bigdata-office' }
        },
        {
          label: 'Цифровой опыт поставщика',
          props: { value: 'provider-experience' }
        }
      ]
    }
  }
]

export default data;