---
layout: post
title: "Interdisciplinary Discussion Meeting on Indian Astronomy Before Common Era"
title_sa: "प्राचीनकाले भारतीयखगोलशास्त्रविषये बहुविषयीया विचारगोष्ठी"
date: 2023-12-05 18:30:00 +0530
categories: iks conference
noindex: true
permalink: /discussion-meeting-2023/
---

<div class="lang-block">
  <div class="lang-content" lang="en" markdown="1">

<style>
    em { color: #0000ff; }
    .rounded-image { border-radius: 25%; color: }
    table { display: none}
    /* table.nth-child(2) { font-size: smaller;  }
    table.nth-child(2) td:nth-child(2) { display: none; }
    table.nth-child(2) th:nth-child(2) { display: none; }
    table.nth-child(2) td:nth-child(1) { display: none; }
    table.nth-child(2) th:nth-child(1) { display: none; } */

    li , h5 { display: none }

</style>

![](/assets/talks/2023-12-05-iks-cahc/iks-cahc-group-pic.jpg){: .rounded-image}

This discussion was organized by the [Center for Ancient History and Culture](https://cahc.jainuniversity.ac.in/), Jain University and the [Indian Knowledge Systems Division, MoE, Govt. of India](https://iksindia.org/). This discussion was held on Kārtika bahuḷa aṣṭamī & navamī, 5,& 6 December 2023 at
CMS Business School, Jain University, Bangalore.

Eminent panelists representing Vedic , Sanskrit and modern scholarship from various parts of India and Nepal participated. The discussion was held in five sessions over two days. The discussion was attended by about 40 participants, including the panelists and observers. Prof. RN Iyengar, Distinguished Professor and Director, CAHC. curated the discussion topics. Sudarshan , Research Associate at CAHC co-ordinated the event.

<!-- ### Panelists -->

| #   | Name                                 | Affiliation                              | City      |
| :-- | :----------------------------------- | :--------------------------------------- | :-------- |
| 1   | Prof. Ishwar Bhat                    | Central Sanskrit University              | Jaipur    |
| 2   | Prof. Jnanendra Sapkota              | Sampurnananda Sanskrit University        | Kashi     |
| 3   | Prof. K Ramasubrahmanian             | IIT Mumbai                               | Mumbai    |
| 4   | Prof. MD Srinivas                    | Centre for Policy Studies                | Chennai   |
| 5   | Prof. MS Sriram                      | KV Sarma Research Institute              | Chennai   |
| 6   | Prof. Dr. P Ramanujan                | Parankusachar Institude of Vedic Studies | Bangalore |
| 7   | Prof. Pramodavardhana Kaundinnyayana | Nepal Sanskrit University                | Kathmandu |
| 8   | Dr. Ravindra Singh Bisht             | Archaeological Survey of India           | Ghaziabad |
| 9   | Dr. Shriramana Sharma                | Kanchi Shankar Matha                     | Nerur     |
| 10  | Vid. Suvrata Vinod                   | Anandavana Bhakta Samaja                 | Kashi     |
| 11  | Prof. Veeranarayana Pandurangi       | Karnataka Sanskrit University            | Bangalore |
| 12  | Vid. Venkatesh Avadhany              | Shuchishankara Research Center           | Mattur    |

### Sessions

#### 1 - Jyotisha in the vedas

- [_Adhidaivata Pakṣa presentation by Prof. R. N. Iyengar_](/assets/talks/2023-12-05-iks-cahc/1_1_adhidaivata-paksha.pdf)
- [_Ashva sukta presentation by Sudarshan_](/assets/talks/2023-12-05-iks-cahc/1_2_ashva-sukta.pdf)
- [Darshapurnamasa paper](/assets/cached_papers/rni/Vol47_3_6_RNIyengar.pdf)
- [Comets and meteorites paper](/assets/cached_papers/rni/rni-extract-comets-meteors-vedas-2016.pdf)

#### 2 - Mahasalila

- Mahasalila paper (yet unpublished)
- [VGJ paper](/assets/cached_papers/rni/$T_A_T_T_V_A_D_E_P_A_H_Journal_of_Academy.pdf)

#### 3 - The vedanga jyotishas and dates

- [_Pre Siddhantic Astronomy presentation by Prof. R. N. Iyengar_](/assets/talks/2023-12-05-iks-cahc/3_1_pre-siddhantic-astronomy.pdf)
- [_Maghaadi Presentations by Sunder_](/assets/talks/2023-12-05-iks-cahc/maghaadi/maghaadi.pdf), [_(as HTML)_](/assets/talks/2023-12-05-iks-cahc/maghaadi/maghaadi.html)
- [Solar transit paper](/assets/cached_papers/rni/1.pdf)
- [Maghaadi in Brahmanda Purana paper](/assets/cached_papers/rni/01_58_4.pdf)

#### 4 - Continuity of tradition

- [_Time measurement presentation by Anand_](/assets/talks/2023-12-05-iks-cahc/4_1_time.pdf)
- [_Dhruva presentation by Prof. R. N. Iyengar_](/assets/talks/2023-12-05-iks-cahc/4_2_dhruva.pdf)
- [Archaeo-astronomy paper](/assets/cached_papers/rni/rni-ichr-archaeo-astronomy-2018.pdf)
- [Dhruva paper](/assets/cached_papers/rni/Vol46_1_2_RNIyenger.pdf)
- [Akshara paper](/assets/cached_papers/rni/Vol55_3_2020__Art01.pdf)

#### 5 - Discussion, feedback, conclusion

- To be updated

---

---

<input hidden id="myInput" type="text" placeholder="Search..">
<style>
    .highlight {
        background-color: yellow;
    }
</style>

<script>
document.getElementById('myInput').addEventListener('keyup', function() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");

    // If all text is cleared, show all the rows
    if ( filter.length == 0 ) {
        for (i = 0; i < tr.length; i++) {
            tr[i].style.display = "";
        }
        // remove all the highlights
        for (i = 0; i < tr.length; i++) {
            tds = tr[i].getElementsByTagName("td");
            for ( j=0; j < tds.length; j++ ) {
                td = tds[j];
                if ( td.getElementsByTagName("a").length > 0 ) {
                    td = td.getElementsByTagName("a")[0];
                }
                if (td) {
                    txtValue = td.textContent; // || td.innerText;
                    // remove the highlight
                    txtValue = txtValue.replace(new RegExp('<span class="highlight">(.*?)<\/span>', 'gi'), '$1');
                    td.innerHTML = txtValue;
                }
            }
        }
        return;
    }

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        tds = tr[i].getElementsByTagName("td");
        for ( j=0; j < tds.length; j++ ) {
            td = tds[j];
            if ( td.getElementsByTagName("a").length > 0 ) {
                td = td.getElementsByTagName("a")[0];
            }
            if (td) {
                txtValue = td.textContent; // || td.innerText;
                // remove the highlight
                txtValue = txtValue.replace(new RegExp('<span class="highlight">(.*?)<\/span>', 'gi'), '$1');
                td.innerHTML = txtValue;

                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";

                    // highlight the search term
                    td.innerHTML = txtValue.replace(new RegExp(filter, 'gi'), function(match) {
                        return '<span class="highlight">' + match + '</span>';
                    });
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
});
</script>

<!-- ## Paper References -->

| session | year | author                                           | paper                                                                                                                                              |
| :-----: | ---- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
|    1    | 2012 | R N Iyengar and V H Satheeshkumar                | [Historical Notes: Archaeo-Astronomical Significance of the Vedic Darsapaurnamasa Altar](/assets/cached_papers/rni/Vol47_3_6_RNIyengar.pdf)        |
|    1    | 2016 | R N Iyengar                                      | [Comets and meteorites in the Ṛgveda](/assets/cached_papers/rni/rni-extract-comets-meteors-vedas-2016.pdf)                                         |
|    2    | 2019 | R N Iyengar, H S Sudarshan and Anand Viswanathan | [Vṛddhagārgīya Jyotiṣa (Part 1)](/assets/cached_papers/rni/$T_A_T_T_V_A_D_E_P_A_H_Journal_of_Academy.pdf)                                          |
|    3    | 2021 | R. N. Iyengar and Sunder Chakravarty             | [Transit of sun through the seasonal naksatra cycle in the Vrddha-Gārgīya Jyotisa](/assets/cached_papers/rni/01_58_1.pdf)                          |
|    3    | 2023 | R. N. Iyengar and Sunder Chakravarty             | [Equinoctial full moon of the Brahmāṇḍa Purāṇa and the nakṣatra solar zodiac starting from summer solstice](/assets/cached_papers/rni/01_58_4.pdf) |
|    4    | 2011 | R N Iyengar                                      | [Dhruva the Ancient Indian Pole Star: Fixity Rotation and Movement](/assets/cached_papers/rni/Vol46_1_2_RNIyenger.pdf)                             |
|    4    | 2020 | R N Iyengar, H S Sudarshan and Anand Viswanathan | [Akṣara the Basic Unit of Time Measure in Ancient India](/assets/cached_papers/rni/Vol55_3_2020__Art01.pdf)                                        |

<!-- |4|2018|R N Iyengar|[Archaeo-astronomy and Ancient Indian Chronology](/assets/cached_papers/rni/rni-ichr-archaeo-astronomy-2018.pdf)| -->

##### Matsya Sisumara and the night sky over ages

<video width="320" height="240" controls autoplay muted>
  <source src="{{ '/assets/talks/2023-12-05-iks-cahc/4_2_matsya-sisumara-night.mp4' | relative_url }}" type="video/mp4">
Your browser does not support the video tag.
</video>
  </div>
  <div class="lang-content" lang="sa" markdown="1">

![](/assets/talks/2023-12-05-iks-cahc/iks-cahc-group-pic.jpg){: .rounded-image}

इयं विचारगोष्ठी जैनविश्वविद्यालयस्य [पुरातनेतिहास-संस्कृति-केन्द्रेण (CAHC)](https://cahc.jainuniversity.ac.in/) तथा भारतसर्वकारस्य शिक्षासन्त्रालयस्य [भारतीयज्ञानपद्धति-विभागेन (IKS)](https://iksindia.org/) सह-आयोजिता। एषा विचारगोष्ठी कार्तिक-बहुल-अष्टम्यां नवम्याञ्च, ५, ६ दिसम्बर २०२३ दिनाङ्कयोः जैनविश्वविद्यालयस्य CMS Business School इत्यत्र बेङ्गळूरुनगरे सम्पन्ना।

भारतस्य नेपालस्य च विविधभागेभ्यः समागताः वैदिक-संस्कृत-आधुनिकविज्ञानानां प्रमुखाः विद्वांसः अस्याम् गोष्ठ्यां भागम् अग्रहन्। इयं विचारगोष्ठी द्विदिनात्मक-पञ्चसत्रेषु आयोजिता। गोष्ठ्याम् वक्तृभिः श्रोतृभिश्च सह प्रायः ४० भागभागिनः उपस्थिताः आसन। पुरातनेतिहास-संस्कृति-केन्द्रस्य (CAHC) विशिष्ट-आचार्याः निर्देशकाश्च प्रो. आर्. एन्. अय्यङ्गार-महोदयाः गोष्ठ्याः मुख्यविषयान् निरधारयन्। केन्द्रस्य संशोधनसहायकः सुदर्शन-महोदयः कार्यक्रमस्य समन्वयम् अकरोत्।

### सत्राणि

#### १ - वेदेषु ज्योतिषम्

- [_प्रो. आर्. एन्. अय्यङ्गार-महोदयेन उपस्थापितः अधिदैवतपक्षः_](/assets/talks/2023-12-05-iks-cahc/1_1_adhidaivata-paksha.pdf)
- [_सुदर्शन-महोदयेन उपस्थापितं अश्वसूक्तम्_](/assets/talks/2023-12-05-iks-cahc/1_2_ashva-sukta.pdf)
- [दर्शपूर्णमास-शोधपत्रम्](/assets/cached_papers/rni/Vol47_3_6_RNIyengar.pdf)
- [धूमकेतवः उल्काश्च इति शोधपत्रम्](/assets/cached_papers/rni/rni-extract-comets-meteors-vedas-2016.pdf)

#### २ - महासलिलम्

- महासलिल-शोधपत्रम् (अद्यापि अप्रकाशितम्)
- [वृद्धगार्गीयज्योतिष-शोधपत्रम् (VGJ)](/assets/cached_papers/rni/$T_A_T_T_V_A_D_E_P_A_H_Journal_of_Academy.pdf)

#### ३ - वेदाङ्गज्योतिषाणि कालनिर्णयश्च

- [_प्रो. आर्. एन्. अय्यङ्गार-महोदयेन उपस्थापितं पूर्वसिद्धान्तीयं खगोलशास्त्रम्_](/assets/talks/2023-12-05-iks-cahc/3_1_pre-siddhantic-astronomy.pdf)
- [_सुन्दर-महोदयेन उपस्थापितं मघादिचक्रम्_](/assets/talks/2023-12-05-iks-cahc/maghaadi/maghaadi.pdf), [_(HTML रूपेण)_](/assets/talks/2023-12-05-iks-cahc/maghaadi/maghaadi.html)
- [सूर्यसङ्क्रमण-शोधपत्रम्](/assets/cached_papers/rni/1.pdf)
- [ब्रह्माण्डपुराणे मघादिचक्रम् इति शोधपत्रम्](/assets/cached_papers/rni/01_58_4.pdf)

#### ४ - परम्परायाः निरन्तरता

- [_आनन्द-महोदयेन उपस्थापिता कालमापनपद्धतिः_](/assets/talks/2023-12-05-iks-cahc/4_1_time.pdf)
- [_प्रो. आर्. एन्. अय्यङ्गार-महोदयेन उपस्थापितं ध्रुवनक्षत्रविज्ञानम्_](/assets/talks/2023-12-05-iks-cahc/4_2_dhruva.pdf)
- [खगोलपुरातत्त्व-शोधपत्रम्](/assets/cached_papers/rni/rni-ichr-archaeo-astronomy-2018.pdf)
- [ध्रुव-शोधपत्रम्](/assets/cached_papers/rni/Vol46_1_2_RNIyenger.pdf)
- [अक्षरकालमापन-शोधपत्रम्](/assets/cached_papers/rni/Vol55_3_2020__Art01.pdf)

#### ५ - परिचर्चा, मन्तव्यानि, समापनञ्च

- शीघ्रमेव अद्यतनं भविष्यति

##### मत्स्यशिशुमारचक्रम् तथा युगयुगान्तरेषु रात्रिगगनम्

<video width="320" height="240" controls autoplay muted>
  <source src="{{ '/assets/talks/2023-12-05-iks-cahc/4_2_matsya-sisumara-night.mp4' | relative_url }}" type="video/mp4">
भवतः ब्राऊजर्-माध्यमं चलच्चित्रं न समर्थयति।
</video>
  </div>
</div>
