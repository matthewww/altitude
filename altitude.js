if ('BarometricPressureSensor' in window) {
    const sensor = new BarometricPressureSensor();
  
    sensor.onreading = () => {
      // Access altitude data from the sensor
      const altitude = sensor.altitude;
      // Display or update the altitude on your webpage
      document.getElementById('altitude').innerText = `Altitude: ${altitude} meters`;
    };
  
    sensor.start();
  } else {
    // Handle the case where the sensor is not supported
    console.log('Barometric Pressure Sensor is not supported on this device.');
  }