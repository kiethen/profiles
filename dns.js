if ($network.wifi.ssid === 'TP-2002_5G') {
  $done({ server: '192.168.0.10' })
} else {
  $done({})
}
