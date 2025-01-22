package main

import (
	"net/http"
	"os"
	"sync"
)

func main() {
	wg := &sync.WaitGroup{}
	var file []byte
	wg.Add(2)
	go func(wg *sync.WaitGroup, htmlPointer *[]byte) {
		defer wg.Done()
		fileBytes, err := os.ReadFile("./public/index.html")
		if err != nil {
			panic(err)
		}
		*htmlPointer = fileBytes
	}(wg, &file)
	go func(wg *sync.WaitGroup) {
		defer wg.Done()
		fs := http.FileServer(http.Dir("./public"))
		http.Handle("/", http.StripPrefix("/", fs))
	}(wg)
	wg.Wait()
	http.ListenAndServe(":8080", nil)
}
