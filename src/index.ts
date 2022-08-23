import * as mqtt from 'mqtt';
// ini naanti tolong jangan di hardcode, bikin service class buat handle conection ke mqtt
const host = '156.67.210.148';
const port = '1883';
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `mqtt://${host}:${port}`
console.log(connectUrl);
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'riza',
  password: 'komara',
  reconnectPeriod: 1000,
})

const topic = 'test' // ini topic urgent. ganti sesuai topic yang di set.. jika topic tidak sama dengan topic dari pesan yang di publish , message tidak akan terkirm

client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
});

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
});