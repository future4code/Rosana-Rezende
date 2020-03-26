let today = new Date();
let month = JSON.stringify(today.getMonth() + 1)
if (month < 10) {
    month = '0' + month
}
let day = today.getDate()+1
if (day < 10) {
  day = '0' + day
}
let tomorow = today.getFullYear() + '-' + month + '-' + day

export const formFields = [
    {
      type: 'text',
      label: 'Nome da viagem',
      name: 'name',
      required: true,
      pattern: '[a-zA-Zà-úÀ-ú ]{5,}', //no mínimo 5 letras
      title: 'Nome da viagem, no mínimo 5 letras',
    },
    {
      type: 'date',
      label: 'Data',
      name: 'date',
      required: true,
      min: tomorow, // data no futuro
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
