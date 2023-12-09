---
layout: post
title:  "Interdisciplinary Discussion Meeting on Indian Astronomy Before Common Era"

date:   2023-12-05 18:30:00 +0530
categories: iks conference
noindex: true
---
<style>
    em { color: #0000ff; }
    .rounded-image { border-radius: 25%; color: }
    /* table.nth-child(2) { font-size: smaller;  }
    table.nth-child(2) td:nth-child(2) { display: none; }
    table.nth-child(2) th:nth-child(2) { display: none; }
    table.nth-child(2) td:nth-child(1) { display: none; }
    table.nth-child(2) th:nth-child(1) { display: none; } */

    li , h5, video { display: none }

</style>

![](/assets/talks/2023-12-05-iks-cahc/iks-cahc-group-pic.jpg){: .rounded-image}

This discussion was organized by the [Center for Ancient History and Culture](https://cahc.jainuniversity.ac.in/), Jain University and the [Indian Knowledge Systems Division, MoE, Govt. of India](https://iksindia.org/). This discussion was held on Kārtika bahuḷa aṣṭamī & navamī, 5,& 6 December 2023 at
CMS Business School, Jain University, Bangalore.

Eminent panelists representing Vedic , Sanskrit  and modern scholarship from various parts of India and Nepal participated. The discussion was held in five sessions over two days. The discussion was attended by about 40 participants, including the panelists and observers.

### Panelists

|#|Name|Affiliation|City
|:--|:--|:--|:--
|1 |Prof. Ishwar Bhat |Central Sanskrit University |Jaipur
|2 |Prof. Jnanendra Sapkota |Sampurnananda Sanskrit University |Kashi
|3 |Prof. K Ramasubrahmanian |IIT Mumbai |Mumbai
|4 |Prof. MD Srinivas |Center for Policy Studies |Chennai
|5 |Prof. MS Sriram |KV Sarma Research Institute |Chennai
|6 |Prof. Dr. P Ramanujan |Parankusachar Institude of Vedic Studies |Bangalore
|7 |Prof. Pramodavardhana Kaundinnyayana |Nepal Sanskrit University |Kathmandu
|8 |Dr. Ravindra Singh Bisht |Archaeological Survey of India |Ghaziabad
|9 |Dr. Shriramana Sharma |Kanchi Shankar Matha |Nerur
|10 |Vid. Suvrata Vinod |Anandavana Bhakta Samaja |Kashi
|11 |Prof. Veeranarayana Pandurangi |Karnataka Sanskrit University |Bangalore
|12 |Vid. Venkatesh Avadhany |Shuchishankara Research Center |Mattur


### Sessions
#### 1 - Jyotisha in the vedas
- [*Adhidaivata Pakṣa presentation by Prof. R. N. Iyengar*](/assets/talks/2023-12-05-iks-cahc/1_1_adhidaivata-paksha.pdf)
- [*Ashva sukta presentation by Sudarshan*](/assets/talks/2023-12-05-iks-cahc/1_2_ashva-sukta.pdf)
- [Darshapurnamasa paper](/assets/ijhs/Vol47_3_6_RNIyengar.pdf)
- [Comets and meteorites paper](/assets/ijhs/rni-extract-comets-meteors-vedas-2016.pdf)
  
#### 2 - Mahasalila
- Mahasalila paper (yet unpublished)
- [VGJ paper](/assets/tattvadipah/tattvadipah-vgj-2019-01.pdf)

#### 3 - The vedanga jyotishas and dates
- [*Pre Siddhantic Astronomy presentation by Prof. R. N. Iyengar*](/assets/talks/2023-12-05-iks-cahc/3_1_pre-siddhantic-astronomy.pdf)
- [*Maghaadi Presentations by Sunder*](/assets/talks/2023-12-05-iks-cahc/maghaadi/maghaadi.pdf),  [*(as HTML)*](/assets/talks/2023-12-05-iks-cahc/maghaadi/maghaadi.html)
- [Solar transit paper](/assets/ijhs/1.pdf)
- [Maghaadi in Brahmanda Purana paper](/assets/ijhs/rni-maghadi-2023.pdf)
  
#### 4 - Continuity of tradition
- [*Time measurement presentation by Anand*](/assets/talks/2023-12-05-iks-cahc/4_1_time.pdf)
- [*Dhruva presentation by Prof. R. N. Iyengar*](/assets/talks/2023-12-05-iks-cahc/4_2_dhruva.pdf)
- [Archaeo-astronomy paper](/assets/ijhs/rni-ichr-archaeo-astronomy-2018.pdf)
- [Dhruva paper](/assets/ijhs/Vol46_1_2_RNIyenger.pdf)
- [Akshara paper](/assets/ijhs/Vol55_3_2020__Art01.pdf)

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


## Paper References

|session|year|author|paper|
|:--:|---|---|---|
|1| 2012|R N Iyengar and V H Satheeshkumar|[Historical Notes: Archaeo-Astronomical Significance of the Vedic Darsapaurnamasa Altar](/assets/ijhs/Vol47_3_6_RNIyengar.pdf)|
|1|2016|R N Iyengar|[Comets and meteorites in the Ṛgveda](/assets/ijhs/rni-extract-comets-meteors-vedas-2016.pdf)|
|2|2019|R N Iyengar, H S Sudarshan and Anand Viswanathan|[Vṛddhagārgīya Jyotiṣa (Part 1)](/assets/tattvadipah/tattvadipah-vgj-2019-01.pdf)|
|3|2021|R. N. Iyengar and Sunder Chakravarty|[Transit of sun through the seasonal naksatra cycle in the Vrddha-Gārgīya Jyotisa](/assets/ijhs/1.pdf)|
|3|2023|R. N. Iyengar and Sunder Chakravarty|[Equinoctial full moon of the Brahmāṇḍa Purāṇa and the nakṣatra solar zodiac starting from summer solstice](/assets/ijhs/rni-maghadi-2023.pdf)|
|4|2018|R N Iyengar|[Archaeo-astronomy and Ancient Indian Chronology](/assets/ijhs/rni-ichr-archaeo-astronomy-2018.pdf)|
|4|2011|R N Iyengar|[Dhruva the Ancient Indian Pole Star: Fixity Rotation and Movement](/assets/ijhs/Vol46_1_2_RNIyenger.pdf)|
|4|2020|R N Iyengar, H S Sudarshan and Anand Viswanathan|[Akṣara the Basic Unit of Time Measure in Ancient India](/assets/ijhs/Vol55_3_2020__Art01.pdf)|


##### Matsya Sisumara and the night sky over ages
<video width="320" height="240" controls autoplay muted>
  <source src="/assets/talks/2023-12-05-iks-cahc/4_2_matsya-sisumara-night.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
