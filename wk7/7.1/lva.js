new Vue({
    el: '#app',
    data: {
      llamaLink: 'https://en.wikipedia.org/wiki/Llama',
      llamaTitle: 'Wikipedia Article on Llamas',
      alpacaLink: 'https://en.wikipedia.org/wiki/Alpaca',
      alpacaTitle: 'Wikipedia Article on Alpacas',
      container: {
        display: 'block',
        width: '60%',
        margin: '2rem auto'
      },
      tbl: {
        border: '5px solid black'
      },
      headerTitle: {
        textAlign: 'left',
      },
      baseStyle: {
        color: 'black',
        borderTop: '2px solid rgb(0, 0, 0, 0)',
        borderLeft: '2px solid rgb(0, 0, 0, 0)',
        borderRight: '2px solid rgb(0, 0, 0, 0)',
        textDecoration: 'none'
      },
      overRideStyle: {
        padding: '.5rem 5rem'
      },
      currentRoute: 'llama',
      hoverableLink: 'alpaca'
    }
  })