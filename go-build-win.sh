#!/bin/bash
GOOS=windows GOARCH=386 go build  -o picitup_win.exe -ldflags "-s -w" && upx picitup_win.exe
