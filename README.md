#### Jumat, 24 Maret 2023

## IDENTITAS

Nama  : Kalyana Putri Al Kanza

NRP   : 5025211137

## Latihan SQL

#### Soal 1

Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal!

```sql
SELECT nama, ukt
FROM mytable
ORDER BY ukt DESC;
```

<img width="136" alt="sql1" src="https://user-images.githubusercontent.com/107338432/227584095-8608f345-2411-4406-abab-82b9bbc308b4.png">

#### Soal 2

Tampilkan semua daftar nama dan ukt berdasarkan nominal ukt yang paling mahal, jika ada ukt yang sama, urutkan berdasarkan nama mahasiswa secara alfabetikal.

```sql
SELECT nama, ukt
FROM mytable
ORDER BY ukt DESC, nama ASC;
```

<img width="129" alt="sql2" src="https://user-images.githubusercontent.com/107338432/227584132-35433c96-b84d-45bc-8e85-705fd85dd53b.png">

#### Soal 3

Hitunglah jumlah mahasiswa yang memiliki ipk >= 3.5 dan berada di semester 8

```sql
SELECT COUNT(nrp) as Jumlah_Mahasiswa
FROM mytable
WHERE semester = 8 AND ipk >= 3.5; 
```

<img width="104" alt="sql3" src="https://user-images.githubusercontent.com/107338432/227584189-2ca99bdf-0d38-447c-9cc9-af20c1831c35.png">

#### Soal 4

Tampilkan nama, ukt, dan golongan. Jika ukt mahasiswa kurang dari sama dengan 1 juta, maka masuk golongan "A". Jika ukt mahasiswa diatas 1 juta sampai denga 2 juta, maka masuk golongan "B" Jika ukt mahasiswa diatas 2 juta, maka masuk golongan "C".

```sql
ALTER TABLE mytable
ADD golongan char(1);

UPDATE mytable
SET golongan = 'A'
WHERE ukt <= 1000000;

UPDATE mytable
SET golongan = 'B'
WHERE ukt > 1000000 AND ukt < 2000000;

UPDATE mytable
SET golongan = 'C'
WHERE ukt >= 2000000;

SELECT nama, ukt, golongan FROM mytable;
```

<img width="187" alt="sql4" src="https://user-images.githubusercontent.com/107338432/227584251-cf456674-7fee-44e5-aaca-17510f57b509.png">

#### Soal 5

Tampilkan daftar nama, semester dan ipk berdasarkan ipk tertinggi tiap semester. Diurutkan berdasarkan semesternya. Jika ada yang nilainya sama, maka diurutkan berdasarkan alfabet.

```sql
SELECT mt1.nama, mt1.semester, mt1.ipk
FROM mytable mt1
WHERE mt1.ipk = (
    SELECT MAX(mt2.ipk)
    FROM mytable mt2
    WHERE mt2.semester = mt1.semester
)
ORDER BY mt1.semester ASC, mt1.nama ASC;
```

<img width="167" alt="sql5" src="https://user-images.githubusercontent.com/107338432/227584291-4fd15273-c33c-4acc-9cc4-f8fd88f7e016.png">
