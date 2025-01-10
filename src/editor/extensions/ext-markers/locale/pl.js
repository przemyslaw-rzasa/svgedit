export default {
  name: 'Markery',
  langList: [
    { id: 'nomarker', title: 'Bez markera' },
    { id: 'leftarrow', title: 'Strzałka w lewo' },
    { id: 'rightarrow', title: 'Strzałka w prawo' },
    { id: 'textmarker', title: 'Marker tekstowy' },
    { id: 'forwardslash', title: 'Ukośnik w przód' },
    { id: 'reverseslash', title: 'Ukośnik w tył' },
    { id: 'verticalslash', title: 'Ukośnik pionowy' },
    { id: 'box', title: 'Kwadrat' },
    { id: 'star', title: 'Gwiazda' },
    { id: 'xmark', title: 'X' },
    { id: 'triangle', title: 'Trójkąt' },
    { id: 'mcircle', title: 'Koło' },
    { id: 'leftarrow_o', title: 'Otwarta strzałka w lewo' },
    { id: 'rightarrow_o', title: 'Otwarta strzałka w prawo' },
    { id: 'box_o', title: 'Otwarty kwadrat' },
    { id: 'star_o', title: 'Otwarta gwiazda' },
    { id: 'triangle_o', title: 'Otwarty trójkąt' },
    { id: 'mcircle_o', title: 'Otwarte koło' }
  ],
  contextTools: [
    {
      title: 'Marker początkowy',
      label: 's'
    },
    {
      title: 'Wybierz typ markera początkowego'
    },
    {
      title: 'Marker środkowy',
      label: 'm'
    },
    {
      title: 'Wybierz typ markera środkowego'
    },
    {
      title: 'Marker końcowy',
      label: 'e'
    },
    {
      title: 'Wybierz typ markera końcowego'
    }
  ]
}