#include<WiFi.h>
#include<WebServer.h>

WebServer server(80);
int ldr = 34;
int nilai = analogRead(ldr);
void setup() {
  
  WiFi.begin("No internet", "bbcs1331");
  while (WiFi.status != WL_CONNECTED) {
  Serial.prinln("Belum terhubung");

  Serial.println(wiFi.localIP());
  server.begin();
  server.on("/", [](){
    server.send(200, "text/plain", "cahaya = " + nilai )
  })

  pinMode(ldr, INPUT);
}
  

}
void loop() {
  sever.handleClient();
}