'use strict'
const express = require('express'),
      mongoose = require('mongoose'),
      ejs = require('ejs'),
      Chart = require('chart.js')

const app = express()

// === SET VIEWING ENGINE ===
app.set('view engine', 'ejs')

// === IMPORT DATABASE ===

mongoose.connect('mongodb://admin:admin@ds135522.mlab.com:35522/chart')


//=== HOME ===
app.get('/', (req, res) => {

  let ctx = document.getElementById("myChart")
  let myChart = new Chart({
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {}
    })

  res.render('index')
})

app.listen(3000, () => {
  console.log('listening to port 3000')
})
