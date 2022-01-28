# Library / binary Prisma engine heap size usage

## Comparison based on schema size

Source: https://github.com/driimus/prisma-leaks/actions/runs/1758767074

### Large schema

![heapsizes](https://user-images.githubusercontent.com/32523430/151463975-411c6d44-66a3-482b-bc7c-a54de3e43619.png#gh-light-mode-only)
![heapsizes_dark](https://user-images.githubusercontent.com/32523430/151465595-c63cd8b6-e581-4932-9ce0-42897b629069.png#gh-dark-mode-only)


Data

<details>
  <summary>Library (large)</summary>
  
  ```
  PASS test tests/copy29.test.js (226 MB heap size)
PASS test tests/copy44.test.js (352 MB heap size)
PASS test tests/copy20.test.js (480 MB heap size)
PASS test tests/copy39.test.js (388 MB heap size)
PASS test tests/copy16.test.js (516 MB heap size)
PASS test tests/copy7.test.js (644 MB heap size)
PASS test tests/copy12.test.js (772 MB heap size)
PASS test tests/copy45.test.js (563 MB heap size)
PASS test tests/copy40.test.js (687 MB heap size)
PASS test tests/copy30.test.js (815 MB heap size)
PASS test tests/copy10.test.js (690 MB heap size)
PASS test tests/copy38.test.js (818 MB heap size)
PASS test tests/copy26.test.js (946 MB heap size)
PASS test tests/copy25.test.js (1074 MB heap size)
PASS test tests/copy21.test.js (859 MB heap size)
PASS test tests/copy8.test.js (987 MB heap size)
PASS test tests/copy27.test.js (1115 MB heap size)
PASS test tests/copy13.test.js (1243 MB heap size)
PASS test tests/copy22.test.js (1371 MB heap size)
PASS test tests/copy46.test.js (1077 MB heap size)
PASS test tests/copy32.test.js (1205 MB heap size)
PASS test tests/copy33.test.js (1333 MB heap size)
PASS test tests/copy4.test.js (1461 MB heap size)
PASS test tests/copy11.test.js (1250 MB heap size)
PASS test tests/copy36.test.js (1378 MB heap size)
PASS test tests/copy14.test.js (1506 MB heap size)
PASS test tests/copy17.test.js (1634 MB heap size)
PASS test tests/copy31.test.js (1428 MB heap size)
PASS test tests/copy15.test.js (1555 MB heap size)
PASS test tests/copy34.test.js (1683 MB heap size)
PASS test tests/copy49.test.js (1558 MB heap size)
PASS test tests/copy35.test.js (1681 MB heap size)
PASS test tests/copy19.test.js (1638 MB heap size)
PASS test tests/copy6.test.js (1764 MB heap size)
PASS test tests/copy2.test.js (1727 MB heap size)
PASS test tests/copy3.test.js (1769 MB heap size)
PASS test tests/copy23.test.js (1896 MB heap size)
PASS test tests/copy37.test.js (5.025 s, 1857 MB heap size)
PASS test tests/copy28.test.js (5.097 s, 1898 MB heap size)
PASS test tests/copy43.test.js (7.809 s, 1943 MB heap size)
PASS test tests/query.test.js (16.408 s, 1952 MB heap size)

<--- Last few GCs --->

[2611:0x6059840]   120512 ms: Scavenge (reduce) 1971.9 (2054.8) -> 1971.8 (2056.3) MB, 19.7 / 0.0 ms  (average mu = 0.317, current mu = 0.466) allocation failure 
[2611:0x6059840]   120712 ms: Scavenge (reduce) 1973.1 (2055.3) -> 1973.2 (2056.1) MB, 21.0 / 0.0 ms  (average mu = 0.317, current mu = 0.466) allocation failure 
[2611:0x6059840]   120948 ms: Scavenge (reduce) 1974.7 (2049.1) -> 1974.7 (2053.8) MB, 19.5 / 0.0 ms  (average mu = 0.317, current mu = 0.466) allocation failure 
  ```
  
</details>
  <details>
  <summary>Library --exposed-gc (large)</summary>
  
  ```
    PASS test tests/copy29.test.js (211 MB heap size)
PASS test tests/copy44.test.js (288 MB heap size)
PASS test tests/copy20.test.js (332 MB heap size)
PASS test tests/copy39.test.js (375 MB heap size)
PASS test tests/copy16.test.js (418 MB heap size)
PASS test tests/copy7.test.js (462 MB heap size)
PASS test tests/copy12.test.js (505 MB heap size)
PASS test tests/copy45.test.js (548 MB heap size)
PASS test tests/copy30.test.js (591 MB heap size)
PASS test tests/copy40.test.js (635 MB heap size)
PASS test tests/copy10.test.js (678 MB heap size)
PASS test tests/copy38.test.js (721 MB heap size)
PASS test tests/copy25.test.js (765 MB heap size)
PASS test tests/copy26.test.js (808 MB heap size)
PASS test tests/copy21.test.js (851 MB heap size)
PASS test tests/copy8.test.js (894 MB heap size)
PASS test tests/copy27.test.js (938 MB heap size)
PASS test tests/copy13.test.js (981 MB heap size)
PASS test tests/copy46.test.js (1024 MB heap size)
PASS test tests/copy22.test.js (1067 MB heap size)
PASS test tests/copy32.test.js (1111 MB heap size)
PASS test tests/copy33.test.js (1154 MB heap size)
PASS test tests/copy11.test.js (1197 MB heap size)
PASS test tests/copy4.test.js (1240 MB heap size)
PASS test tests/copy36.test.js (1284 MB heap size)
PASS test tests/copy14.test.js (1327 MB heap size)
PASS test tests/copy17.test.js (1370 MB heap size)
PASS test tests/copy31.test.js (1414 MB heap size)
PASS test tests/copy15.test.js (1457 MB heap size)
PASS test tests/copy34.test.js (1500 MB heap size)
PASS test tests/copy49.test.js (1543 MB heap size)
PASS test tests/copy19.test.js (1587 MB heap size)
PASS test tests/copy35.test.js (1630 MB heap size)
PASS test tests/copy6.test.js (1673 MB heap size)
PASS test tests/copy2.test.js (1716 MB heap size)
PASS test tests/copy3.test.js (1760 MB heap size)
PASS test tests/copy23.test.js (1803 MB heap size)
PASS test tests/copy37.test.js (1846 MB heap size)
PASS test tests/copy43.test.js (1889 MB heap size)
PASS test tests/copy28.test.js (1932 MB heap size)

<--- Last few GCs --->

[2550:0x500b810]   112956 ms: Mark-sweep 1983.2 (2054.8) -> 1975.9 (2056.2) MB, 2018.4 / 0.0 ms  (average mu = 0.262, current mu = 0.122) allocation failure scavenge might not succeed
[2550:0x500b810]   115159 ms: Mark-sweep 1980.0 (2064.2) -> 1945.6 (2031.1) MB, 2183.3 / 0.0 ms  (average mu = 0.146, current mu = 0.009) allocation failure scavenge might not succeed
  ```
  
</details>
<details>
  <summary>Binary (large)</summary>
  
  ```
  PASS test tests/copy29.test.js (226 MB heap size)
PASS test tests/copy44.test.js (353 MB heap size)
PASS test tests/copy20.test.js (481 MB heap size)
PASS test tests/copy39.test.js (388 MB heap size)
PASS test tests/copy16.test.js (346 MB heap size)
PASS test tests/copy7.test.js (375 MB heap size)
PASS test tests/copy12.test.js (509 MB heap size)
PASS test tests/copy45.test.js (337 MB heap size)
PASS test tests/copy30.test.js (470 MB heap size)
PASS test tests/copy40.test.js (598 MB heap size)
PASS test tests/copy10.test.js (726 MB heap size)
PASS test tests/copy38.test.js (853 MB heap size)
PASS test tests/copy25.test.js (981 MB heap size)
PASS test tests/copy26.test.js (1109 MB heap size)
PASS test tests/copy21.test.js (389 MB heap size)
PASS test tests/copy8.test.js (517 MB heap size)
PASS test tests/copy27.test.js (645 MB heap size)
PASS test tests/copy13.test.js (773 MB heap size)
PASS test tests/copy46.test.js (901 MB heap size)
PASS test tests/copy22.test.js (1029 MB heap size)
PASS test tests/copy32.test.js (1157 MB heap size)
PASS test tests/copy33.test.js (388 MB heap size)
PASS test tests/copy11.test.js (516 MB heap size)
PASS test tests/copy4.test.js (644 MB heap size)
PASS test tests/copy17.test.js (771 MB heap size)
PASS test tests/copy36.test.js (900 MB heap size)
PASS test tests/copy14.test.js (1027 MB heap size)
PASS test tests/copy31.test.js (1155 MB heap size)
PASS test tests/copy15.test.js (389 MB heap size)
PASS test tests/copy34.test.js (516 MB heap size)
PASS test tests/copy49.test.js (644 MB heap size)
PASS test tests/copy35.test.js (772 MB heap size)
PASS test tests/copy19.test.js (900 MB heap size)
PASS test tests/copy6.test.js (1028 MB heap size)
PASS test tests/copy2.test.js (1156 MB heap size)
PASS test tests/copy3.test.js (389 MB heap size)
PASS test tests/copy37.test.js (516 MB heap size)
PASS test tests/copy23.test.js (644 MB heap size)
PASS test tests/copy28.test.js (772 MB heap size)
PASS test tests/query.test.js (900 MB heap size)
PASS test tests/copy43.test.js (1028 MB heap size)
PASS test tests/copy42.test.js (1156 MB heap size)
PASS test tests/copy47.test.js (388 MB heap size)
PASS test tests/copy9.test.js (515 MB heap size)
PASS test tests/copy5.test.js (643 MB heap size)
PASS test tests/copy24.test.js (771 MB heap size)
PASS test tests/copy48.test.js (899 MB heap size)
PASS test tests/copy41.test.js (1027 MB heap size)
PASS test tests/copy1.test.js (1155 MB heap size)
PASS test tests/copy18.test.js (690 MB heap size)
PASS test tests/copy50.test.js (818 MB heap size)
  ```
  
</details>
<details>
  <summary>Binary --exposed-gc (large)</summary>
  
  ```
  PASS test tests/copy29.test.js (211 MB heap size)
PASS test tests/copy44.test.js (288 MB heap size)
PASS test tests/copy20.test.js (288 MB heap size)
PASS test tests/copy39.test.js (288 MB heap size)
PASS test tests/copy16.test.js (288 MB heap size)
PASS test tests/copy7.test.js (289 MB heap size)
PASS test tests/copy12.test.js (289 MB heap size)
PASS test tests/copy45.test.js (289 MB heap size)
PASS test tests/copy30.test.js (289 MB heap size)
PASS test tests/copy40.test.js (289 MB heap size)
PASS test tests/copy10.test.js (289 MB heap size)
PASS test tests/copy38.test.js (289 MB heap size)
PASS test tests/copy25.test.js (289 MB heap size)
PASS test tests/copy26.test.js (289 MB heap size)
PASS test tests/copy21.test.js (289 MB heap size)
PASS test tests/copy8.test.js (289 MB heap size)
PASS test tests/copy27.test.js (289 MB heap size)
PASS test tests/copy13.test.js (289 MB heap size)
PASS test tests/copy46.test.js (289 MB heap size)
PASS test tests/copy22.test.js (289 MB heap size)
PASS test tests/copy32.test.js (289 MB heap size)
PASS test tests/copy33.test.js (289 MB heap size)
PASS test tests/copy11.test.js (289 MB heap size)
PASS test tests/copy4.test.js (289 MB heap size)
PASS test tests/copy36.test.js (289 MB heap size)
PASS test tests/copy14.test.js (289 MB heap size)
PASS test tests/copy17.test.js (289 MB heap size)
PASS test tests/copy31.test.js (289 MB heap size)
PASS test tests/copy15.test.js (289 MB heap size)
PASS test tests/copy34.test.js (289 MB heap size)
PASS test tests/copy35.test.js (289 MB heap size)
PASS test tests/copy49.test.js (289 MB heap size)
PASS test tests/copy19.test.js (289 MB heap size)
PASS test tests/copy6.test.js (289 MB heap size)
PASS test tests/copy2.test.js (289 MB heap size)
PASS test tests/copy3.test.js (289 MB heap size)
PASS test tests/copy37.test.js (289 MB heap size)
PASS test tests/copy23.test.js (289 MB heap size)
PASS test tests/copy28.test.js (289 MB heap size)
PASS test tests/query.test.js (289 MB heap size)
PASS test tests/copy42.test.js (289 MB heap size)
PASS test tests/copy43.test.js (332 MB heap size)
PASS test tests/copy9.test.js (289 MB heap size)
PASS test tests/copy47.test.js (289 MB heap size)
PASS test tests/copy5.test.js (289 MB heap size)
PASS test tests/copy24.test.js (289 MB heap size)
PASS test tests/copy48.test.js (289 MB heap size)
PASS test tests/copy41.test.js (289 MB heap size)
PASS test tests/copy1.test.js (289 MB heap size)
PASS test tests/copy18.test.js (289 MB heap size)
PASS test tests/copy50.test.js (289 MB heap size)
  ```
  
</details>
    
    
### Small schema

![heapsize_small_schema](https://user-images.githubusercontent.com/32523430/151464927-44ac2f99-4122-4430-a81b-a684ff15cd98.png#gh-light-mode-only)
![heap_small_dark](https://user-images.githubusercontent.com/32523430/151465733-496e4156-6e30-4d59-b35e-cb37de5ca576.png#gh-dark-mode-only)
