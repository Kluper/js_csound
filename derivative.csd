<CsoundSynthesizer>
<CsOptions>
;--output="C:\Users\lbasd\Documents\techno\toto.wav"
-odac
</CsOptions>
<CsInstruments>

sr = 48000
ksmps = 16
nchnls = 2
0dbfs  = 1


instr 1

kIndex line 0,p3, 1
kImp table kIndex, 1, 1
kImp scale kImp, 4, 2
kTrig metro kImp

ky samphold kImp, kTrig
kx samphold kIndex, kTrig

OSCsend ky, "127.0.0.1", 9002, "/ky", "f" , ky
OSCsend kx, "127.0.0.1", 9002, "/kx", "f" , kx

endin

</CsInstruments>
<CsScore>

f1 0 16384 10 1                                          ; Sine
f2 0 16384 10 1 0.5 0.3 0.25 0.2 0.167 0.14 0.125 .111   ; Sawtooth
f3 0 16384 10 1 0   0.3 0    0.2 0     0.14 0     .111   ; Square
f4 0 16384 10 1 1   1   1    0.7 0.5   0.3  0.1          ; Pulse

i 1 0 20

e
</CsScore>
</CsoundSynthesizer>

