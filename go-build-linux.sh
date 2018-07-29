#!/bin/bash
#upx picitup_linux.elf &&
GOOS=linux GOARCH=amd64 go build -o picitup_linux.elf -ldflags "-s -w"
