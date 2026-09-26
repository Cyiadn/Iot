// library:

#include<WiFi.h>
#include<WebServer.h>
WebServer server(80);
int ldr =35; 
int nilai;
int led = 23;
void setup() {
  pinMode(led, OUTPUT);
  Serial.begin(115200);

  // Jarigan berbasis Wifi :

  WiFi.begin("NAMA JARINGAN", "PASSWORD");

  while(WiFi.status() != WL_CONNECTED) {
    Serial.println("Belum terhubung");
  }
  Serial.println(WiFi.localIP());

  // server :
  server.on("/led", []() {
    server.sendHeader("Access-Control-Allow-Origin", "*"); 
    server.send(200, "text/plain", "Led di nyalakan");
    digitalWrite(led, HIGH);

  });

  server.on("/", []() {  
    server.sendHeader("Access-Control-Allow-Origin", "*"); 
      digitalWrite(led, HIGH);
    server.send(200, "text/plain", "Kadar cahaya saat ini = " + String(nilai));
  });

  server.begin();
}
void loop() {
 nilai = analogRead(ldr);
 server.handleClient();
 Serial.println(nilai);
 delay(1000);
}
