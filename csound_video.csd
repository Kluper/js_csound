<CsoundSynthesizer>
<CsOptions>
; Select audio/midi flags here according to platform
-odac     ;;;realtime audio out
;-iadc    ;;;uncomment -iadc if realtime audio input is needed too
--sample-rate=48000
--port=9000
;-o "C:\Users\lbasd\Documents\licence1\piece_elec\sons_new_1\4_instr_8.wav"
</CsOptions>
<CsInstruments>

sr = 48000
ksmps = 1
nchnls = 2
0dbfs  = 1
giPort = 7003

chn_k "videoNumb", 1

instr 1

kpedale chnget "videoNumb"

OSCsend kpedale,"127.0.0.1", giPort, "/vNumb", "i", kpedale

endin

</CsInstruments>
<CsScore>

f0 z

i 1 0 -1
e
</CsScore>
</CsoundSynthesizer>

