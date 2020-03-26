let today = new Date();
let month = JSON.stringify(today.getMonth() + 1)
if (month < 10) {
    month = '0' + month
}
let dateNow = today.getFullYear() + '-' + month + '-' + today.getDate()

export const formFields = [
    {
      type: 'text',
      label: 'Nome da viagem',
      name: 'name',
      required: true,
      pattern: '[a-zA-Z ]{5,}',
      title: 'Nome da viagem, no mínimo 5 letras',
    },
    {
      type: 'date',
      label: 'Data',
      name: 'date',
      required: true,
      min: dateNow,
    },
    {
      type: 'text',
      label: 'Descrição',
      name: 'description',
      required: true,
      multiline: true,
      rows: '4',
    },
    {
      type: 'number',
      label: 'Duração',
      name: 'durationInDays',
      required: true,
      min: '50'
    },
  ]

  export const planets = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']
