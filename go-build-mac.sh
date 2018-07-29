#!/bin/bash
#go build  -o picitup_mac.app -ldflags "-s -w" && mv picitup_mac.app app/.
#go build  -o picitup_mac.app -ldflags "-s -w" && upx "-9" picitup_mac.app && mv picitup_mac.app app/.
go build  -o picitup_mac.app -ldflags "-s -w"
