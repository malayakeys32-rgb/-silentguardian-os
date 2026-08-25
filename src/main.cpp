// Silent Garden Irrigation System
// Waters only when soil is dry, with debounced readings and quiet operation windows.

const int SOIL_SENSOR_PIN = A0;   // Analog pin for soil moisture sensor
const int RELAY_PIN       = 7;    // Digital pin to control relay (pump/valve)
const int STATUS_LED_PIN  = 13;   // Onboard LED for simple status

// Tuning parameters
const int DRY_THRESHOLD   = 550;  // Adjust based on your sensor (higher = drier)
const unsigned long WATERING_DURATION_MS = 2UL * 60UL * 1000UL; // 2 minutes
const unsigned long MIN_INTERVAL_BETWEEN_WATERING_MS = 4UL * 60UL * 60UL * 1000UL; // 4 hours

// Optional: “silent hours” (e.g., avoid running pump at night)
const int SILENT_START_HOUR = 22; // 22:00 (10 PM)
const int SILENT_END_HOUR   = 7;  // 07:00 (7 AM)

// If you don’t have an RTC, comment out silent-hour logic or integrate a real-time clock.

unsigned long lastWateringTime = 0;

void setup() {
  pinMode(SOIL_SENSOR_PIN, INPUT);
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(STATUS_LED_PIN, OUTPUT);

  digitalWrite(RELAY_PIN, LOW);      // Relay off (depends on module: LOW = off for most)
  digitalWrite(STATUS_LED_PIN, LOW);

  Serial.begin(9600);
  Serial.println("Silent Garden Irrigation System started.");
}

void loop() {
  int moistureValue = readSmoothedMoisture(10);
  Serial.print("Moisture: ");
  Serial.println(moistureValue);

  unsigned long now = millis();

  bool isDry = (moistureValue > DRY_THRESHOLD);
  bool intervalPassed = (now - lastWateringTime) > MIN_INTERVAL_BETWEEN_WATERING_MS;

  // If you don’t have time-of-day info, set this to true:
  bool isSilentWindow = false; // replace with RTC-based check if available

  if (isDry && intervalPassed && !isSilentWindow) {
    startWatering(now);
  }

  delay(5000); // Check every 5 seconds (adjust as needed)
}

// Read multiple samples to reduce noise
int readSmoothedMoisture(int samples) {
  long sum = 0;
  for (int i = 0; i < samples; i++) {
    sum += analogRead(SOIL_SENSOR_PIN);
    delay(10);
  }
  return (int)(sum / samples);
}

void startWatering(unsigned long now) {
  Serial.println("Soil dry. Starting watering cycle...");
  digitalWrite(RELAY_PIN, HIGH);     // Turn pump/valve ON (check your relay logic)
  digitalWrite(STATUS_LED_PIN, HIGH);

  unsigned long start = millis();
  while (millis() - start < WATERING_DURATION_MS) {
    // Optional: monitor moisture during watering
    int moistureValue = analogRead(SOIL_SENSOR_PIN);
    Serial.print("Watering... Moisture: ");
    Serial.println(moistureValue);

    // Early stop if soil becomes sufficiently wet
    if (moistureValue < DRY_THRESHOLD - 50) {
      Serial.println("Soil sufficiently wet. Stopping early.");
      break;
    }

    delay(2000);
  }

  stopWatering();
  lastWateringTime = now;
}

void stopWatering() {
  Serial.println("Stopping watering cycle.");
  digitalWrite(RELAY_PIN, LOW);      // Turn pump/valve OFF
  digitalWrite(STATUS_LED_PIN, LOW);
}
