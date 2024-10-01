<CsoundSynthesizer>
<CsOptions>
;--output="C:\Users\lbasd\Documents\techno\toto.wav"
-odac
</CsOptions>
<CsInstruments>

sr = 48000
ksmps = 1
nchnls = 2
0dbfs  = 1

giTable ftgen 5,0,1024, 7, 0.000000, 153, -0.751515, 255, 1.000000, 88, 0.642424, 61, 0.351515, 94, -0.387879, 59, -0.678788, 96, -0.818182, 90, -0.400000, 128, 0.
giTable ftgen 6,0,1024, 7, 0.000000, 86, -0.545455, 67, -1.000000, 75, -0.775758, 42, -0.333333, 46, 0.733333, 86, 0.666667, 82, 0.545455, 42, 0.315152, 100, -0.333333, 90, -0.551515, 52, -0.472727, 109, -0.430303, 111, 0.169697, 36, 1.000000

instr 1



kIndex line 0,p3, 1024
kIndex2 oscil3 1, 0.5/p3,1
;kIndex2 = (kIndex1/16384)*1024
kIndex2 abs kIndex2*1024

printk 1, kIndex2
kImp table kIndex, 5, 0
kImp1 table kIndex2, 6, 0
kTrig metro 40

ky samphold kImp, kTrig
ky1 samphold kImp1, kTrig
kx samphold kIndex, kTrig

OSCsend ky, "127.0.0.1", 9002, "/ky", "f" , ky
OSCsend ky1, "127.0.0.1", 9002, "/ky1", "f" , ky1
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

