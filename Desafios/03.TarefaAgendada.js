const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log(`Tarefa 1 - ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
})

setTimeout(()=>{
    tarefa1.cancel()
    console.log('Tarefa interrompida')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,7)]
regra.hour = 17
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log(`Tarefa 2 - ${new Date().getSeconds()}`)
})