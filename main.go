// package PICITUP
package main

import (
	"flag"
	"fmt"
	"log"
	"os"

	"picitup/api"
	"picitup/config"
	"picitup/utils"
)

func main() {

	var lDebug bool
	flag.BoolVar(&lDebug, "debug", false, "Debug flag forces no cache")
	flag.Parse()

	utils.Logger("")
	config.Init(nil) //Init Config.yaml
	config.Get().Debug = lDebug
	api.StartRouter()

}

//Start ...
func Start(TIMEZONE, VERSION, COOKIE, DBPATH, OS, OSPATH, ADDRESS string) {
	//OS e.g "ios" or "android"
	//PATH e.g "/sdcard/com.sample.app/"
	var yaml = []byte(fmt.Sprintf(`timezone: %v
version: %v
cookie: %v
db: %v
os: %v
path: %v
address: %v
encryption_keys:
  public: public.pem
  private: private.pem
`, TIMEZONE, VERSION, COOKIE, DBPATH, OS, OSPATH, ADDRESS))

	utils.Logger(OSPATH)
	config.Init(yaml) //Init Config.yaml
	go api.StartRouter()
}

//Stop ...
func Stop() {
	sMessage := "stopping service @ " + config.Get().Address
	println(sMessage)
	log.Println(sMessage)
	os.Exit(1)
}
