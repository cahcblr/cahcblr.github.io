---
layout: home
title:  🔍
---

<!-- ## [Click to Browse/Search the CAHC collection of Indic unicode documents](https://github1s.com/cahcblr/sanchaya){:target="_sanchaya"}  -->

## Search Options

### General Search

{% include search-widget.html %}

## Search Papers 
<div style="display: flex; align-items: center; gap: 8px;">
  <input id="myInput" type="text" placeholder="Search..">

<select id="myDropdown" onchange="
    var myInput = document.getElementById('myInput');
    myInput.value = this.value;
    myInput.dispatchEvent(new KeyboardEvent('keyup', {bubbles: true}));
  ">
    <option value="">--Select--</option>
    <option value="Agriculture">Agriculture(59)</option>
    <option value="Astronomy">Astronomy(329)</option>
    <option value="Biology">Biology(90)</option>
    <option value="Culture">Culture(113)</option>
    <option value="Iyengar">Iyengar(17)</option>
    <option value="Lingiustics">Lingiustics(31)</option>
    <option value="Math">Math(210)</option>
    <option value="Medicine">Medicine(249)</option>
    <option value="Metallurgy">Metallurgy(162)</option>
    <option value="MindSciences">MindSciences(16)</option>
    <option value="Music">Music(6)</option>
    <option value="Philosophy">Philosophy(49)</option>
    <option value="Other">Other(625)</option>
</select>

<button id="myButton">Export</button>

</div>


<style>
    .highlight {
        background-color: yellow;
    }

    #myInput {
        opacity: 0.3;
        border: none;
        height: 30px;
        font-size: 16px;

    }

    #myDropdown {
        opacity: 0.3;
        border: none;
        height: 30px;
        font-size: 16px;
    }

    #myButton {
        opacity: 0.3;
        border: none;
        display: none;
    }

    #myInput:hover {
        opacity: 1;
        border: none;
    }   
    
    td:nth-child(4), th:nth-child(4) {
        display: none;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        margin-top: 20px;
    }


</style>

<script>

function handleSearch () {
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
};

function deBounceSearch () {
    setTimeout( handleSearch, 200);
}

document.getElementById('myInput').addEventListener('keyup', deBounceSearch )

// Simulate typing of "Iyengar" in the search box
setTimeout(function() {
    var input = document.getElementById('myInput');
    if (input) {
        input.value = 'Iyengar';
        var event = new Event('keyup');
        input.dispatchEvent(event);
    }
}, 300);


function exportTableAsMarkdown() {
    const table = document.querySelector("table");
    const rows = Array.from(table.getElementsByTagName("tr"));
    let markdown = "";
    
    // Add header row
    const headerCells = rows[0].getElementsByTagName("th");
    markdown += "|" + Array.from(headerCells)
        .map(cell => cell.textContent.trim())
        .filter((_, index) => index !== 3)
        .join("|") + "|\n";
    
    // Add separator row
    markdown += "|" + Array.from(headerCells)
        .map(() => "---")
        .filter((_, index) => index !== 3)
        .join("|") + "|\n";
    
    // Add data rows
    rows.slice(1).forEach((row) => {
        if (row.style.display !== "none") {
            const cells = Array.from(row.getElementsByTagName("td"));
            markdown += "|" + cells
                .map(cell => cell.textContent.trim())
                .filter((_, index) => index !== 3)
                .join("|") + "|\n";
        }
    });
    
    // Create and trigger download
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ijhs-papers-" +  document.getElementById('myInput').value+ ".md"
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

setTimeout(function() {
	const exportButton = document.getElementById("myButton");
	const dropdown = document.getElementById("myDropdown");
	//const exportButton = document.createElement("button");
	//exportButton.innerHTML = "Export as Markdown";
	exportButton.onclick = exportTableAsMarkdown;
	//exportButton.style.cssText = "margin: 10px 0; padding: 5px 10px; opacity: 0.3;";
	exportButton.addEventListener("mouseover", () => exportButton.style.opacity = "1");
	exportButton.addEventListener("mouseout", () => exportButton.style.opacity = "0.3");

	dropdown.addEventListener("mouseover", () => dropdown.style.opacity = "1");
	dropdown.addEventListener("mouseout", () => dropdown.style.opacity = "0.3");
	//document.querySelector("option").insertAdjacentElement("beforestart", exportButton);
}, 300);

</script>


| # | Journal | Subject | Category | Paper | Author | Size (KB) |
|---|---------|---------|----------|-------|--------|------------|
| 1 | IJHS-1-1966-Issue-1 | Philosophy | Indic | [The Theory of Chemical Combination in Ancient Indian Philosophies](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_1_1_PRay.pdf) |  Priyadaranjan Ray | 272 |
| 2 | IJHS-1-1966-Issue-1 | Philosophy | Western | [What was ‘The Scientific Revolution’ ?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_1_2_JRRavetz.pdf) |  J R Ravetz | 133 |
| 3 | IJHS-1-1966-Issue-1 | Astronomy | Western | [Stellar Distances: Galileo's Method and Its Subsequent History](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_1_3_MHoskin.pdf) |  Michael Hoskin | 189 |
| 4 | IJHS-1-1966-Issue-1 | Math | Other | [A Survival of Babylonian Arithmetic in ew Guinea?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_1_4_DJDSPrice.pdf) |  Derek J De Solla Price | 80 |
| 5 | IJHS-1-1966-Issue-1 | Philosophy | Indic | [The Impetus Theory of the Vaisesikas](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_1_5_SNSen.pdf) |  S N Sen | 261 |
| 6 | IJHS-1-1966-Issue-1 | Other | Western | [New History of Optical Microscope](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_1_6_VRonchi.pdf) |  Vasco Ronchi | 275 |
| 7 | IJHS-1-1966-Issue-1 | Philosophy | Indic | [The Indian Doctrine of Five Elemnets](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_1_7_VSubbarayappa.pdf) |  V Subbarayappa | 174 |
| 8 | IJHS-1-1966-Issue-1 | Math | Indic | [Binomial Theorem in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_1_8_AKBag.pdf) |  Amulya Kumar Bag | 134 |
| 9 | IJHS-1-1966-Issue-1 | Biology | Indic | [Problems of Biological Philisophy with regard to the Philosophy of the Upanisads](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_1_9_BRensch.pdf) |  Bernhard Rensch | 147 |
| 10 | IJHS-1-1966-Issue-2 | Astronomy | Indic | [Uigur and Tibetian Lists of the Indian Lunar Mansions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_2_1_WPetri.pdf) |  Winfried Petri | 187 |
| 11 | IJHS-1-1966-Issue-2 | Medicine | Indic | [Methods of Sterilization and Sex– Determinaton in the Arthava–Veda and in the Brhad–Aranyakopanishad](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_2_2_MRoy.pdf) |  Mira Roy | 171 |
| 12 | IJHS-1-1966-Issue-2 | Math | Indic | [Trigonometrical Series in the Karanapaddhati and the Probable Date of the Text](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_2_3_AKBag.pdf) |  A K Bag | 174 |
| 13 | IJHS-1-1966-Issue-2 | Agriculture | Indic | [Land Classification in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_2_4_SPRaychaudhuri.pdf) |  S P Raychaudhuri | 117 |
| 14 | IJHS-1-1966-Issue-2 | Culture | Indic | [Introduction of Western Science in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_2_5_SNSen.pdf) |  S N Sen | 284 |
| 15 | IJHS-1-1966-Issue-2 | Culture | Fareast | [Characteristics of the History of Science and Technology of Modern Japan](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_2_6_MTanaka.pdf) |  Minoru Tanaka | 245 |
| 16 | IJHS-1-1966-Issue-2 | Culture | Indic | [Paper Technology in Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_2_7_SAKGhori.pdf) |  S A K Ghori and A Rahman | 314 |
| 17 | IJHS-1-1966-Issue-2 | Biology | Western | [Botanical Explorations of Victor Jacquemont](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_2_8_RKGupta.pdf) |  Raj Kumar Gupta | 239 |
| 18 | IJHS-1-1966-Issue-2 | Other | Other | [Notes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol01_2_9_Notes.pdf) |   | 84 |
| 19 | IJHS-2-1967-Issue-1 | Metallurgy | Indic | [Origin and Tradition of Alchemy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_1_1_PRay.pdf) |  Priyadaranjan Ray | 426 |
| 20 | IJHS-2-1967-Issue-1 | Philosophy | Indic | [An Estimate of the Vaisesika Sutra in the History of Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_1_2_BVSubbarayappa.pdf) |  B V Subbarayappa | 286 |
| 21 | IJHS-2-1967-Issue-1 | Medicine | Indic | [Anatomy in the Vedic Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_1_3_MRoy.pdf) |  Mira Roy | 263 |
| 22 | IJHS-2-1967-Issue-1 | Math | Other | [History of Plus and Minus Signs](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_1_4_BMohan.pdf) |  Brij Mohan | 108 |
| 23 | IJHS-2-1967-Issue-1 | Medicine | Indic | [The Embryonic Development and the Human Body in the Yajnavalkya Smrti](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_1_5_MChowdhury.pdf) |  Mamata Choudhury | 176 |
| 24 | IJHS-2-1967-Issue-1 | Other | Other | [Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_1_6_Reviews.pdf) |   | 207 |
| 25 | IJHS-2-1967-Issue-2 | Biology | Western | [The Problem of the Fertilization and Evolution of Phanerogams in Darwin’s Work: A Critical Study](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_2_1_VDMarza.pdf) |  Vasile D Marza and Ion T Tarnavschi | 841 |
| 26 | IJHS-2-1967-Issue-2 | Medicine | Western | [WMW Haffkine‚ Bacteriologist—A Great Saviour of Mankind](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_2_2_HIJhala.pdf) |  H I Jhala | 394 |
| 27 | IJHS-2-1967-Issue-2 | Math | Indic | [Bhaskara I’s Approximation to Sine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_2_3_RCGupta.pdf) |  R C Gupta | 246 |
| 28 | IJHS-2-1967-Issue-2 | Metallurgy | Indic | [Notes: Rasarnavakalpa of Rudrayamala Tantra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_2_4_Notes.pdf) |  Mira Roy | 99 |
| 29 | IJHS-2-1967-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_2_5_News.pdf) |   | 18 |
| 30 | IJHS-2-1967-Issue-2 | Other | Other | [Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol02_2_6_Review.pdf) |  P Ray | 51 |
| 31 | IJHS-4-1969-Issue-1&2 | Astronomy | Indic | [Source Materials Concerning Astronomy and Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_1_AKBag.pdf) |  A K Bag | 85 |
| 32 | IJHS-4-1969-Issue-1&2 | Biology | Indic | [Archaeological Plant Remainsfrom Pre– and Proto–Historic Periods as a Source of Historyof Sciences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_2_KAChowdhury.pdf) |  K A Chowdhury | 117 |
| 33 | IJHS-4-1969-Issue-1&2 | Other | Indic | [The Sivatattvratnakara as a Source for Sciences in Ancient and Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_3_GSDikshit.pdf) |  G S Dikshit | 81 |
| 34 | IJHS-4-1969-Issue-1&2 | Culture | Indic | [Pottery in the Vedic Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_4_CGKashikar.pdf) |  C G Kashikar | 245 |
| 35 | IJHS-4-1969-Issue-1&2 | Philosophy | Indic | [Philosophical Trends viz History of Sciences of India — Orthodox Systems](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_5_TMPMahadevan.pdf) |  T M P Mahadevan | 306 |
| 36 | IJHS-4-1969-Issue-1&2 | Philosophy | Indic | [Philosophical Trends and the History of Science in India— Heterodox Trends](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_6_GCPande.pdf) |  G C Pande | 200 |
| 37 | IJHS-4-1969-Issue-1&2 | Culture | Indic | [Social Set–Up of Science and Technology in Mughal India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_7_SGopal.pdf) |  Surendra Gopal | 158 |
| 38 | IJHS-4-1969-Issue-1&2 | Math | Indic | [Development of Mathematical Ideas in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_8_TASaraswathi.pdf) |  T A Saraswathi | 421 |
| 39 | IJHS-4-1969-Issue-1&2 | Math | Indic | [Sine Table in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_9_AKBag.pdf) |  AK Bag | 133 |
| 40 | IJHS-4-1969-Issue-1&2 | Math | Indic | [Second Order Interpolation in Indian Mathematics Up To the Fifteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_10_RCGupta.pdf) |  B C Gupta | 233 |
| 41 | IJHS-4-1969-Issue-1&2 | Astronomy | Indic | [Astronomy in Ancient and Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_11_KSShukla.pdf) |  K S Shukla | 146 |
| 42 | IJHS-4-1969-Issue-1&2 | Astronomy | Indic | [A Historical Development of Certain Hindu Astronomical Processes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_12_TSKShastri.pdf) |  T S K Shastri | 482 |
| 43 | IJHS-4-1969-Issue-1&2 | Astronomy | Indic | [The System of the Vatesvara Siddhanta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_13_TSKShastri.pdf) |  T S K Shastri | 189 |
| 44 | IJHS-4-1969-Issue-1&2 | Astronomy | Indic | [Ahargana In Hindu Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_14_SPBhattacharyya.pdf) |  S P Bhattacharyya | 221 |
| 45 | IJHS-4-1969-Issue-1&2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_15_News.pdf) |   | 36 |
| 46 | IJHS-4-1969-Issue-1&2 | Medicine | Indic | [Book Review: Digestion and Metabolism in Ayurveda by C Dwarkanath](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol04_1And2_16_Review.pdf) |  P V Sharma | 57 |
| 47 | IJHS-5-1970-Issue-1 | Medicine | Indic | [Some Significant Aspects of The Origin and Development of Medicine in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_1_CDwarkanath.pdf) |  C Dwarkanath | 325 |
| 48 | IJHS-5-1970-Issue-1 | Medicine | Indic | [Contribution to the Fundamentala of Orthopaedic Surgery](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_2_PJDeshpande.pdf) |  P J Deshpande | 525 |
| 49 | IJHS-5-1970-Issue-1 | Medicine | Indic | [Susruta’s Contributions to the Fundamentals of Surgery](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_3_LMSingh.pdf) |  L M Singh | 366 |
| 50 | IJHS-5-1970-Issue-1 | Philosophy | Indic | [The Theory of Pancamahabhuta with Special Reference to Ayurveda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_4_DSGaur.pdf) |  D S Gaur | 422 |
| 51 | IJHS-5-1970-Issue-1 | Other | Indic | [Methodology for Experimental Research In Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_5_JMitra.pdf) |  Jyotir Mitra | 215 |
| 52 | IJHS-5-1970-Issue-1 | Medicine | Indic | [Medical Science and Dispensaries in Ancient South India as Gleaned From Epigraphy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_6_SGurumurthy.pdf) |  S Gurumurthy | 97 |
| 53 | IJHS-5-1970-Issue-1 | Biology | Indic | [The Brahmanas on Medicine and Biological Sciences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_7_RSSMurthy.pdf) |  R S Shivaganesha Murthy | 116 |
| 54 | IJHS-5-1970-Issue-1 | Medicine | Indic | [Medicine—As it Evolved in Ancient and Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_8_PRay.pdf) |  Priyadaranjan Ray | 289 |
| 55 | IJHS-5-1970-Issue-1 | Medicine | Indic | [Human Anatomy According to the Agni Purana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_9_BBMishra.pdf) |  B B Mishra | 219 |
| 56 | IJHS-5-1970-Issue-1 | Medicine | Indic | [Surgical Principles in the Sutrasthanam of the Susruta Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_10_RCChakravorty.pdf) |  R C Chakravorty | 109 |
| 57 | IJHS-5-1970-Issue-1 | Biology | Indic | [Biology in Ancient and Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_11_RNKapil.pdf) |  R N Kapil | 463 |
| 58 | IJHS-5-1970-Issue-1 | Other | Indic | [Wood and its Use During Pre–and Proto–Historic Time](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_12_KAChowdhury.pdf) |  K A Chowdhury | 53 |
| 59 | IJHS-5-1970-Issue-1 | Agriculture | Indic | [Biological Concepts and Agriculture in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_13_VMittre.pdf) |  Vishnu Mittre | 352 |
| 60 | IJHS-5-1970-Issue-1 | Biology | Indic | [Family Relations of Some Plants in The Atharvaveda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_14_MRoy.pdf) |  Mira Roy | 351 |
| 61 | IJHS-5-1970-Issue-1 | Agriculture | Indic | [History of Land Use in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_15_SPRaychaudhuri.pdf) |  S P Raychaudhuri | 29 |
| 62 | IJHS-5-1970-Issue-1 | Agriculture | Indic | [Arbori–Horticulture in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_1_16_MSShukla.pdf) |  M S Shukla | 83 |
| 63 | IJHS-5-1970-Issue-2 | Philosophy | Indic | [Jaina Atomic Theory](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_1_JCSikdar.pdf) |  J C Sikdar | 488 |
| 64 | IJHS-5-1970-Issue-2 | Philosophy | Indic | [Concept of The Structure of Space–Time](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_2_GNChakravarthy.pdf) |  G N Chakravarthy | 216 |
| 65 | IJHS-5-1970-Issue-2 | Metallurgy | Indic | [Problem of Advent of Copper in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_3_HCBhardwaj.pdf) |  H C Bhardwaj | 180 |
| 66 | IJHS-5-1970-Issue-2 | Metallurgy | Indic | [Metal Technology of The Harappa Culture and Its Socio–Economic Implications](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_4_DPAgrawal.pdf) |  D P Agrawal | 236 |
| 67 | IJHS-5-1970-Issue-2 | Metallurgy | Indic | [Development of Technology During The Iron Age in South India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_5_BKGRao.pdf) |  B K Gururaja Rao | 388 |
| 68 | IJHS-5-1970-Issue-2 | Metallurgy | Indic | [The Techniques of Colouring Glass and Ceramic Materials in Ancient and Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_6_MChoudhury.pdf) |  Mamata Chowdhury | 230 |
| 69 | IJHS-5-1970-Issue-2 | Metallurgy | Indic | [Some Aspects of Glass Manufacturing in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_7_VGovind.pdf) |  Vijay Govind | 521 |
| 70 | IJHS-5-1970-Issue-2 | Culture | Indic | [The South Indian Temple– Medium of Construction](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_8_TVMahalingam.pdf) |  T V Mahalingam | 127 |
| 71 | IJHS-5-1970-Issue-2 | Agriculture | Indic | [A Brief Account of the Ancient Irrigation Engineering Systems Prevalent in South India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_9_TMSrinivasan.pdf) |  T M Srinivasan | 216 |
| 72 | IJHS-5-1970-Issue-2 | Culture | Other | [Influence of Mediterranean Culture Areas on Indian Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_10_JFilliozat.pdf) |  Jean Filliozat | 123 |
| 73 | IJHS-5-1970-Issue-2 | Culture | Indic | [Influence of Indian Science on Other Culture Areas](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_11_SNSen.pdf) |  S N Sen | 358 |
| 74 | IJHS-5-1970-Issue-2 | Medicine | Arabic | [The Growth of Greco–Arabian Medicine in Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_12_RLVerma.pdf) |  R L Verma | 402 |
| 75 | IJHS-5-1970-Issue-2 | Medicine | Indic | [The Date of Dhanvantari Nighantu](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_13_PVSharma.pdf) |  P V Sharma | 154 |
| 76 | IJHS-5-1970-Issue-2 | Medicine | Indic | [Ideas of Scientific Measurement in Basic Principkles of Ayurveda with Special Reference to Somatometry](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_14_HCShukla.pdf) |  H C Shukla | 160 |
| 77 | IJHS-5-1970-Issue-2 | Agriculture | Indic | [Water–Lifting Devices in Ancient India: Their Origin and Mechanisms](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol05_2_15_TMSrinivasan.pdf) |  T M Srinivasan | 161 |
| 78 | IJHS-6-1971-Issue-1 | Other | Indic | [Archaeological Sources for the Reconstruction of The History of Sciences of India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_1_1_MNDeshpande.pdf) |  M N Deshpande | 433 |
| 79 | IJHS-6-1971-Issue-1 | Culture | Indic | [Inluence of Certain Harappan Architectural Features on Some Texts of Early–Historical Period](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_1_2_RSengupta.pdf) |  R Sengupta | 94 |
| 80 | IJHS-6-1971-Issue-1 | Astronomy | Indic | [Karanasara of Vatesvara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vo0l6_1_3_RNRai.pdf) |  RN Rai | 177 |
| 81 | IJHS-6-1971-Issue-1 | Astronomy | Indic | [The Concept of Tides in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_1_4_NKPanikkar.pdf) |  N K Panikkar | 335 |
| 82 | IJHS-6-1971-Issue-1 | Math | Indic | [Fractional Parts of Aryabhata's Sines and Certain Rules](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_1_5_RCGupta.pdf) |  R C Gupta | 149 |
| 83 | IJHS-6-1971-Issue-1 | Other | Western | [Lucien Cayeux: A Challenger of the Principle of Uniformity in Geology?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_1_6_AVCarozzi.pdf) |  Albert V Carozzi | 124 |
| 84 | IJHS-6-1971-Issue-1 | Astronomy | Indic | [Triamlla Bhatta: His Date and Works in 100 Verses](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_1_7_PVSharma.pdf) |  P V Sharma | 172 |
| 85 | IJHS-6-1971-Issue-1 | Other | Western | [A Short History of the Meson Theory from 1935 to 1943_I](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_1_8_VMukherji.pdf) |  V Mukherji | 521 |
| 86 | IJHS-6-1971-Issue-1 | Other | Indic | [Histrory of Sciences in india: Pali Sources](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_1_9_BMChintamani.pdf) |  B M Chintamani and B V Subbarayyapa | 195 |
| 87 | IJHS-6-1971-Issue-1 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_1_10_BookReviews.pdf) |   | 63 |
| 88 | IJHS-6-1971-Issue-2 | Other | Western | [A Short History of the Meson Theory from 1935 to 1943_II](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_2_1_VMukherji.pdf) |  V Mukherji | 354 |
| 89 | IJHS-6-1971-Issue-2 | Astronomy | Indic | [The Extant Siddhanta Sekhra: An Error in one of its Sine Values](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_2_2_RNRai.pdf) |  R N Rai | 70 |
| 90 | IJHS-6-1971-Issue-2 | Agriculture | Indic | [Exploration of Underground Water Springs According to the Ancient Hindus](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_2_3_EGKRao.pdf) |  E G K Rao | 165 |
| 91 | IJHS-6-1971-Issue-2 | Astronomy | Indic | [The Ardharatrika System of Aryabhata I](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_2_4_RNRai.pdf) |  R N Rai | 123 |
| 92 | IJHS-6-1971-Issue-2 | Medicine | Indic | [Sivadasa Sen— A Scholar Commentator on Indian Medicine of Later Medieval Period](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_2_5_GPSharma.pdf) |  G P Sharma and P V Sharma | 278 |
| 93 | IJHS-6-1971-Issue-2 | Lingiustics | Indic | [Notices of Thirteen Mss. In Prakrit](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol06_2_6_BMChintamani.pdf) |  B M Chintamani | 111 |
| 94 | IJHS-7-1972-Issue-1 | Math | Indic | [Sine Values of the Vatesvara Siddhanta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_1_1_RNRai.pdf) |  R N Rai | 252 |
| 95 | IJHS-7-1972-Issue-1 | Other | Indic | [Kappal Sattiram: A Tamil Treatise on Shipbuilding During the Seventeenth Century AD](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_1_2_NKPanikkar.pdf) |  N K Panikkar and T M Srinivasan | 216 |
| 96 | IJHS-7-1972-Issue-1 | Astronomy | Indic | [Calculation of Ahargana in the Vatesvara Siddhanta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_1_3_RNRai.pdf) |  R N Rai | 311 |
| 97 | IJHS-7-1972-Issue-1 | Biology | Indic | [Botany in the Vedas (Part I)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_1_4_ALSharma.pdf) |  A L Sharma‚ A B Seerwani and V R Shastry | 134 |
| 98 | IJHS-7-1972-Issue-1 | Lingiustics | Indic | [Scientific Works in Sanskrit‚ Translated into Foreign Languages and Vice–Versa in the 18th and 19th Century AD](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_1_5_SNSen.pdf) |  S N Sen | 531 |
| 99 | IJHS-7-1972-Issue-1 | Math | Indic | [Notes: The Sine Table in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_1_6_Notes_AKBag.pdf) |  A K Bag | 66 |
| 100 | IJHS-7-1972-Issue-1 | Other | Indic | [News: Symposium on Al–Biruni and the Indian Sciences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_1_7_News.pdf) |  B V Subbarayappa | 62 |
| 101 | IJHS-7-1972-Issue-1 | Other | Other | [Book Review: Teaching the History of Chemistry](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_1_8_BookReview.pdf) |  A Rehman | 37 |
| 102 | IJHS-7-1972-Issue-2 | Math | Indic | [Early Indians on Second Order Sine Differences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_2_1_RCGupta.pdf) |  R C Gupta | 132 |
| 103 | IJHS-7-1972-Issue-2 | Medicine | Indic | [Jejatta (9th Century AD) and his Informations about Indian Drugs](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_2_2_PVSharma.pdf) |  P V Sharma and G P Sharma | 237 |
| 104 | IJHS-7-1972-Issue-2 | Biology | Indic | [Asoka (Saraca Indica Linn)— A Cultural and Scientific Evaluation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_2_3_TKBiswas.pdf) |  T K Biswas and P K Debnath | 372 |
| 105 | IJHS-7-1972-Issue-2 | Astronomy | Indic | [Maxima and Minima of Tithis](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_2_4_SDSharma.pdf) |  S D Sharma | 98 |
| 106 | IJHS-7-1972-Issue-2 | Philosophy | Western | [Relativity in the Early Twenties: Many–Sided Reactions to a Great Theory](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_2_5_VVRaman.pdf) |  V V Raman | 600 |
| 107 | IJHS-7-1972-Issue-2 | Other | Western | [Notes: An Historical Note: The Meson Mass Value in the History of Yukawa Theory](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_2_6_Notes_VMukherjee.pdf) |  V Mukherji | 165 |
| 108 | IJHS-7-1972-Issue-2 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_2_7_BookReviews.pdf) |   | 46 |
| 109 | IJHS-7-1972-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol07_2_8_News.pdf) |   | 24 |
| 110 | IJHS-8-1973-Issue-1&2 | Math | Indic | [Set Theory in Jaina School of Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol08_1and2_1_LCJain.pdf) |  L C Jain | 570 |
| 111 | IJHS-8-1973-Issue-1&2 | Astronomy | Indic | [Jyotisa in Kerala](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol08_1and2_2_KDSwaminathan.pdf) |  K D Swaminathan | 185 |
| 112 | IJHS-8-1973-Issue-1&2 | Medicine | Indic | [Arthritis in Ancient Indian Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol08_1and2_3_JNSharma.pdf) |  J N Sharma‚ Jagadish N Sharma and R B Arora | 131 |
| 113 | IJHS-8-1973-Issue-1&2 | Astronomy | Indic | [Use of Hypotenuse in the Computation of the Equation of the Centre under the Epicyclic Theory in the School of Aryabhatta I???](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol08_1and2_4_KSShukla.pdf) |  K S Shukla | 316 |
| 114 | IJHS-8-1973-Issue-1&2 | Biology | Indic | [A Thirteenth Century Indian Reference to Plant Nematodes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol08_1and2_5_KKTiwari.pdf) |  K K Tiwari and T R Mitra | 63 |
| 115 | IJHS-8-1973-Issue-1&2 | Biology | Indic | [Sources for a History of Plant Sciences in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol08_1and2_6_BGLSwamy.pdf) |  B G L Swamy | 769 |
| 116 | IJHS-8-1973-Issue-1&2 | Biology | Indic | [The Faunal Studies in Archaeology](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol08_1and2_7_KRAlur.pdf) |  K R Alur | 577 |
| 117 | IJHS-8-1973-Issue-1&2 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol08_1and2_8_BookReviews.pdf) |   | 231 |
| 118 | IJHS-9-1974-Issue-1 | Astronomy | Indic | [The Main Characteristics of Hindu Astronomy in the Period Corresponding to Pre-Copernican..](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_6_TSKuppannasastry.pdf) |  T S Kuppannasastry | 261 |
| 119 | IJHS-9-1974-Issue-1 | Astronomy | Western | [Copernicus and Modern Science](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol09_1_1_EKKharadze.pdf) |  Eugene K Kharadze | 110 |
| 120 | IJHS-9-1974-Issue-1 | Astronomy | Western | [Copernicus and His Theory](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol09_1_2_JSmak.pdf) |  Jozef Smak | 41 |
| 121 | IJHS-9-1974-Issue-1 | Astronomy | Western | [Copernicus and Modern Physics and Cosmology](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol09_1_3_ATrautman.pdf) |  Andrzej Trautman | 44 |
| 122 | IJHS-9-1974-Issue-1 | Astronomy | Western | [Nicolaus Copernicus and the Commentariolus](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol09_1_4_SCJoshi.pdf) |  S C Joshi | 172 |
| 123 | IJHS-9-1974-Issue-1 | Astronomy | Western | [Nicolaus Copernicus and His Heliocentric Theory](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol09_1_5_SKGhosh.pdf) |  Samir Kumar Ghosh | 106 |
| 124 | IJHS-9-1974-Issue-1 | Astronomy | Indic | [The Main Characteristics of Hindu Astronomy in the Period Corresponding to Pre–Copernican European Astronomy](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol09_1_6_TSKuppannasastry.pdf) |  T S Kuppannasastry | 261 |
| 125 | IJHS-9-1974-Issue-1 | Astronomy | Indic | [The Prime Meridian in Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_7_RNRai.pdf) |  R N Rai | 107 |
| 126 | IJHS-9-1974-Issue-1 | Astronomy | Indic | [A Glimpse of Aryabhata’s Theory of Rotation of Earth](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_8_BChatterjee.pdf) |  Bina Chatterjee | 106 |
| 127 | IJHS-9-1974-Issue-1 | Astronomy | Indic | [Copernican Heliocentric Theory and Indian Astronomy (AD 1500)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_9_CGPendse.pdf) |  C G Pendse | 403 |
| 128 | IJHS-9-1974-Issue-1 | Astronomy | Indic | [The Kapitthaka of Varahamihira](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_11_DGDhavale.pdf) |  D G Dhavale | 53 |
| 129 | IJHS-9-1974-Issue-1 | Astronomy | Indic | [Solution of the Astronomical Triangle as found in the Tantrasamgraha](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_13_RCGupta.pdf) |  Radha Charan Gupta | 200 |
| 130 | IJHS-9-1974-Issue-1 | Culture | Indic | [The Contribution of the Cult of Sacrifice to the Development of Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_14_GSundaramurthy.pdf) |  G Sundaramoorthy | 130 |
| 131 | IJHS-9-1974-Issue-1 | Astronomy | Indic | [Epicyclic Eccentric Planetary Theories in Ancient and Medieval Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_15_SNSen.pdf) |  S N Sen | 291 |
| 132 | IJHS-9-1974-Issue-1 | Astronomy | Arabic | [Arab Antecedents of Copernican Method](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_16_SMRAnsari.pdf) |  S M R Ansari | 20 |
| 133 | IJHS-9-1974-Issue-1 | Astronomy | Western | [Pre–Copernican Astronomy in Europe](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_17_MCPande.pdf) |  M C Pande | 295 |
| 134 | IJHS-9-1974-Issue-1 | Math | Western | [The Copernicus Magic Square](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_18_DRKaprekar.pdf) |  D R Kaprekar | 28 |
| 135 | IJHS-9-1974-Issue-1 | Other | Other | [Discussions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_1_19_Discussions.pdf) |   | 88 |
| 136 | IJHS-9-1974-Issue-2 | Math | Indic | [Sines and Cosines of Multiple Arcs as given by Kamalakara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_2_1_RCGupta.pdf) |  Radha Charan Gupta | 192 |
| 137 | IJHS-9-1974-Issue-2 | Astronomy | Western | [Copernicus and Modern Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_2_2_JVNarlikar.pdf) |  J V Narlikar | 143 |
| 138 | IJHS-9-1974-Issue-2 | Agriculture | Indic | [A Note on the Examination of Soil for Foundation of Buildings and of Townships in Ancient/Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_2_3_RPKulkarni.pdf) |  R P Kulkarni | 184 |
| 139 | IJHS-9-1974-Issue-2 | Math | Indic | [Addition and Subtraction Theorems for the Sine and the Cosine in Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_2_4_RCGupta.pdf) |  Radha Charan Gupta | 344 |
| 140 | IJHS-9-1974-Issue-2 | Biology | Other | [Consciousness in Plants](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_2_5_AKMishra.pdf) |  Arun Kumar Misra | 215 |
| 141 | IJHS-9-1974-Issue-2 | Biology | Other | [Darwin’s Theory of Unity of Reacting Mechanisms in Plants and Animals: Its Present Day Importance](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_2_6_VDMarza.pdf) |  Vasile D Marza and Ion T Tarnavschi | 1009 |
| 142 | IJHS-9-1974-Issue-2 | Math | Indic | [A Note on Colebrooke’s Translation of a Stanza from Bhaskara’s Lilavati](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_2_7_MNChannabasappa.pdf) |  M N Channabasappa | 80 |
| 143 | IJHS-9-1974-Issue-2 | Other | Other | [Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol09_2_8_Reviews.pdf) |   | 100 |
| 144 | IJHS-10-1975-Issue-1 | Medicine | Indic | [The Pseudo– Harita Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_1_1_PVSharma.pdf) |  P V Sharma | 149 |
| 145 | IJHS-10-1975-Issue-1 | Agriculture | Indic | [Soil Stabilization by Early Indian Methods](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_1_2_RPKulkarni.pdf) |  R P Kulkarni | 214 |
| 146 | IJHS-10-1975-Issue-1 | Other | Other | [The Permeation of Thermodynamics into Nineteenth Century Chemistry](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_1_3_VVRaman.pdf) |  V V Raman | 573 |
| 147 | IJHS-10-1975-Issue-1 | Astronomy | Indic | [Circumference of the Jambudvipa in Jaina Cosmography](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_1_4_RCGupta.pdf) |  Radha Charan Gupta | 357 |
| 148 | IJHS-10-1975-Issue-1 | Astronomy | Western | [Quinquecentenary of Nicolaus Copernicus— A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_1_5_SMRAnsari.pdf) |  S M R Ansari | 192 |
| 149 | IJHS-10-1975-Issue-1 | Other | Other | [Announcement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_1_6_Announcement.pdf) |   | 57 |
| 150 | IJHS-10-1975-Issue-1 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_1_7_BookReviews.pdf) |   | 741 |
| 151 | IJHS-10-1975-Issue-2 | Other | Other | [Welcome Speech](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_1_WelcomeSpeech_AGJhingran.pdf) |  A G Jhingran | 31 |
| 152 | IJHS-10-1975-Issue-2 | Other | Other | [Introductory Remarks](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_2_IntroductoryRemarks_FCAuluck.pdf) |  F C Auluck | 43 |
| 153 | IJHS-10-1975-Issue-2 | Other | Other | [Inaugural Speech](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_3_InauguralSpeech_BRSeshachar.pdf) |  B R Seshachar | 58 |
| 154 | IJHS-10-1975-Issue-2 | Other | Indic | [Al–Biruni: An Introduction to his Life and Writings on the Indian Sciences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_4_MAhmad.pdf) |  Maqbul Ahmad, ram Behari and B V Subbarayappa | 242 |
| 155 | IJHS-10-1975-Issue-2 | Lingiustics | Indic | [Sanskrit Literature known to Al–Biruni](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_5_AMShastri.pdf) |  Ajay Mitra Shastri | 553 |
| 156 | IJHS-10-1975-Issue-2 | Astronomy | Indic | [Varahamihira, The Best Sanskrit source of Al–Biruni on Indian Jyotisa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_6_Ghayasuddin.pdf) |  Ghayasuddin | 559 |
| 157 | IJHS-10-1975-Issue-2 | Lingiustics | Indic | [Al–Biruni and the Authorities on Sanskrit Prosody](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_7_BKNayar.pdf) |  Balkrishna K Nayar | 110 |
| 158 | IJHS-10-1975-Issue-2 | Other | Other | [Session I: Discussion](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_8_SessionIDiscussion.pdf) |   | 41 |
| 159 | IJHS-10-1975-Issue-2 | Math | Indic | [Al–Biruni and Brahmagupta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_9_BChatterjee.pdf) |  Bina Chatterjee | 98 |
| 160 | IJHS-10-1975-Issue-2 | Astronomy | Indic | [Al–Biruni and Indian Eras](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_10_RNRai.pdf) |  R N Rai | 156 |
| 161 | IJHS-10-1975-Issue-2 | Math | Indic | [Al–Biruni on Indian Arithmetic](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_11_AKBag.pdf) |  A K Bag | 182 |
| 162 | IJHS-10-1975-Issue-2 | Astronomy | Indic | [Al–Biruni on determination of Latitudes and Longitudes in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_12_SNSen.pdf) |  S N Sen | 253 |
| 163 | IJHS-10-1975-Issue-2 | Other | Indic | [On Physical Researches of Al–Biruni](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_13_SMRAnsari.pdf) |  S M R Ansari | 388 |
| 164 | IJHS-10-1975-Issue-2 | Other | Indic | [Al–Biruni And Hindu Speculations on Gravitation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_14_SRoy.pdf) |  Sourin Roy | 138 |
| 165 | IJHS-10-1975-Issue-2 | Other | Indic | [Metrology in Al–Biruni’s India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_15_VBMainkar.pdf) |  V B Mainkar | 111 |
| 166 | IJHS-10-1975-Issue-2 | Other | Arabic | [Al–Biruni’s Contribution to Physical Geography](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_16_SMZAlavi.pdf) |  S M Ziauddin Alavi | 94 |
| 167 | IJHS-10-1975-Issue-2 | Astronomy | Arabic | [Al–Biruni and The Theory of Tides](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_17_NKPanikkar.pdf) |  N K Panikkar | 129 |
| 168 | IJHS-10-1975-Issue-2 | Other | Other | [Session II Discussion](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_18_SessionIIDiscussion.pdf) |   | 35 |
| 169 | IJHS-10-1975-Issue-2 | Other | Arabic | [Al–Biruni as a Synthesizer and Transmitter of Scientific Knowledge](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_19_SMAhmad.pdf) |  S Maqbul Ahmad | 106 |
| 170 | IJHS-10-1975-Issue-2 | Lingiustics | Arabic | [Al–Biruni and Science Communication in Sanskrit](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_20_BKNayar.pdf) |  B K Nayar | 67 |
| 171 | IJHS-10-1975-Issue-2 | Other | Other | [Session III Discussion](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_21_SessionIIIDiscussion.pdf) |   | 14 |
| 172 | IJHS-10-1975-Issue-2 | Astronomy | Arabic | [Al–Biruni’s Astronomical Treatise in The Dari Language](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_22_MSAsimov.pdf) |  M S Asimov | 56 |
| 173 | IJHS-10-1975-Issue-2 | Other | Arabic | [Where was Al–Birun Situated?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_23_AHHabibi.pdf) |  Abdul H Habibi | 32 |
| 174 | IJHS-10-1975-Issue-2 | Math | Arabic | [Al–Biruni and The Arithmetical Sequence of the Sanskrit Ganas](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_24_BKNayar.pdf) |  B K Nayar | 172 |
| 175 | IJHS-10-1975-Issue-2 | Astronomy | Arabic | [Al–Biruni’s Treatment of the Laghujataka and Comets: A Critique](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_25_MRBhat.pdf) |  M Ramakrishna Bhat | 124 |
| 176 | IJHS-10-1975-Issue-2 | Other | Other | [Session IV: Discussion](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol10_2_26_SessionIVDiscussion.pdf) |   | 26 |
| 177 | IJHS-11-1976-Issue-1 | Math | Indic | [Sine of Eighteen Degrees in India Upto the Eighteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_1_1_RCGupta.pdf) |  Radha Charan Gupta | 159 |
| 178 | IJHS-11-1976-Issue-1 | Biology | Indic | [Sources for a History of Plant Sciences in India (II)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_1_2_BGLSwamy.pdf) |  B G L Swamy | 450 |
| 179 | IJHS-11-1976-Issue-1 | Biology | Indic | [Sources for a History of Plant Sciences in India (III)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_1_3_BGLSwamy.pdf) |  B G L Swamy | 325 |
| 180 | IJHS-11-1976-Issue-1 | Astronomy | Indic | [Some Observations on Vrddha–Vasistha Siddhanta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_1_4_RNRai.pdf) |  R N Rai | 95 |
| 181 | IJHS-11-1976-Issue-1 | Math | Indic | [Madhava’s Sine and Cosine Series](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_1_5_AKBag.pdf) |  A K Bag | 87 |
| 182 | IJHS-11-1976-Issue-1 | Astronomy | Indic | [The Kinematic Motion of Astral Real and Counter Bodies in Trilokasara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_1_6_LCJain.pdf) |  L C Jain | 362 |
| 183 | IJHS-11-1976-Issue-1 | Medicine | Indic | [Ayurvedic Concept of the Psychosomatic Basis of Health and Disease](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_1_7_RHSingh.pdf) |  R H Singh and B N Sinha | 187 |
| 184 | IJHS-11-1976-Issue-2 | Math | Indic | [On Certain Mathematical Topics of the Dhavala Texts](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_2_1_LCJain.pdf) |  L C Jain | 481 |
| 185 | IJHS-11-1976-Issue-2 | Math | Indic | [On the Square Root Formula in the Bakhshali Manuscript](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_2_2_MNChannabasappa.pdf) |  M N Channabasappa | 267 |
| 186 | IJHS-11-1976-Issue-2 | Medicine | Indic | [Kamala—The National Flower of India: Its Ancient History and Uses in Indian Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_2_3_RMitra.pdf) |  R Mitra and L D Kapoor | 179 |
| 187 | IJHS-11-1976-Issue-2 | Metallurgy | Indic | [Ancient Copper Workings: Some New C–14 Dates](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_2_4_DPAgarwal.pdf) |  D P Agrawal‚ C Margabandhu and N C Shekar | 75 |
| 188 | IJHS-11-1976-Issue-2 | Other | Indic | [Ship–Building in the Yuktikalpataru and Samarangana Sutradhara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_2_5_MChaudhuri.pdf) |  Mamata Chaudhuri | 236 |
| 189 | IJHS-11-1976-Issue-2 | Other | Indic | [Measurement of Rainfall in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol11_2_6_TMSrinivasan.pdf) |  T M Srinivasan | 254 |
| 190 | IJHS-13-1978-Issue-1 | Math | Indic | [Ganita Kaumudi and the Continued Fraction](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_1_PKMajumdar.pdf) |  Pradip Kumar Majumdar | 75 |
| 191 | IJHS-13-1978-Issue-1 | Astronomy | Indic | [The Extant of Siddhanta Sarvabhauma— An error in the Sine of One–third of Part of an Ang](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_2_PKMajumdar.pdf) |  Pradip Kumar Majumdar | 75 |
| 192 | IJHS-13-1978-Issue-1 | Math | Indic | [A Rationale of Bhaskara I's Method](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_3_PKMajumdar.pdf) |  Pradip Kumar Majumdar | 87 |
| 193 | IJHS-13-1978-Issue-1 | Other | Indic | [Geological Evidences in Support of the Antiquity of Some Ancient Indian Events](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_4_SRNMurthy.pdf) |  S R N Murthy | 100 |
| 194 | IJHS-13-1978-Issue-1 | Biology | Western | [Gavin De Beer and the Neo–Lamarckians](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_5_HGershenowitz.pdf) |  Harry Gershenowitz | 99 |
| 195 | IJHS-13-1978-Issue-1 | Medicine | Indic | [Nephrology in Ancient Indian System of Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_6_PKSrivastava.pdf) |  R H Singh and P K Srivastava | 77 |
| 196 | IJHS-13-1978-Issue-1 | Math | Indic | [The Value of Π Known to Sulbasutrakaras](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_7_RPKulkarni.pdf) |  R P Kulkarni | 158 |
| 197 | IJHS-13-1978-Issue-1 | Astronomy | Indic | [On the Spiro–Elliptic Motion of the Sun implicit in the Tiloyapannatti](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_8_LCJain.pdf) |  L C Jain | 146 |
| 198 | IJHS-13-1978-Issue-1 | Medicine | Indic | [Triphala and its Arabic and Chinese Synonyms](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_9_SMahdihassan.pdf) |  S Mahdihassan | 174 |
| 199 | IJHS-13-1978-Issue-1 | Biology | Western | [George Gaylord Simpson and Lamarck](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_10_HGershenowitz.pdf) |  Harry Gershenowitz | 124 |
| 200 | IJHS-13-1978-Issue-1 | Astronomy | Other | [The Establishment of Observatories](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_11_SMRAnsari.pdf) |  S M R Ansari | 187 |
| 201 | IJHS-13-1978-Issue-1 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_1_12_BookReviews.pdf) |   | 80 |
| 202 | IJHS-13-1978-Issue-2 | Metallurgy | Indic | [A Critical Evaluation of Mineralogical Aspects of Some Sanskrit Texts](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_2_1_SRNMurthy.pdf) |  S R N Murthy | 131 |
| 203 | IJHS-13-1978-Issue-2 | Culture | Indic | [Dyes in Ancient and Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_2_2_MRoy.pdf) |  Meera Roy | 542 |
| 204 | IJHS-13-1978-Issue-2 | Other | Other | [Dating the Quaternary and Human Civilization](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_2_3_KNPrasad.pdf) |  K N Prasad and S R N Murthy | 90 |
| 205 | IJHS-13-1978-Issue-2 | Math | Indic | [Geometry as known to the People of Indus Civilization](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_2_4_RPKulkarni.pdf) |  R P Kulkarni | 129 |
| 206 | IJHS-13-1978-Issue-2 | Math | Indic | [Indian Values of the Sinus Totus](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_2_5_RCGupta.pdf) |  Radha Charan Gupta | 371 |
| 207 | IJHS-13-1978-Issue-2 | Biology | Western | [The Treatment of Lamarckism as found in Forty–one College Textbooks](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_2_6_HGershenowitz.pdf) |  Harry Gershenowitz | 152 |
| 208 | IJHS-13-1978-Issue-2 | Astronomy | Indic | [The Epoch of the Romaka Siddhanta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_2_7_TSKShastri.pdf) |  T S Kuppana Shastri | 173 |
| 209 | IJHS-13-1978-Issue-2 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol13_2_8_BookReviews.pdf) |   | 57 |
| 210 | IJHS-14-1979-Issue-1 | Astronomy | Indic | [Zodiac Circumference as Graduated in Jaina Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_1_1_SSLishk.pdf) |  Sajjan Singh Lishk and S D Sharma | 282 |
| 211 | IJHS-14-1979-Issue-1 | Biology | Western | [Chauncey Wright’s Views on Lamarck](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_1_2_HGershenowitz.pdf) |  Harry Gershenowitz | 157 |
| 212 | IJHS-14-1979-Issue-1 | Biology | Western | [George Henslow: True Darwinist](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_1_3_HGershenowitz.pdf) |  Harry Gershenowitz | 128 |
| 213 | IJHS-14-1979-Issue-1 | Math | Indic | [System Theory in Jaina School of Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_1_4_LCJain.pdf) |  L C Jain | 575 |
| 214 | IJHS-14-1979-Issue-1 | Math | Indic | [Munisvara’s Modification of Brahmagupta's Rule for Second Order Interpolation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_1_5_RCGupta.pdf) |  R C Gupta | 113 |
| 215 | IJHS-14-1979-Issue-1 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_1_6_BookReviews.pdf) |   | 85 |
| 216 | IJHS-14-1979-Issue-1 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_1_7_News.pdf) |   | 84 |
| 217 | IJHS-14-1979-Issue-2 | Metallurgy | Indic | [An Occurrence of Cinnabar in Rasarnavakalpa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_1_SRNMurthy.pdf) |  S R N Murthy | 73 |
| 218 | IJHS-14-1979-Issue-2 | Other | Indic | [Some Historical Aspects of Jagadis Chandra Bose’s Microwave Research During 1895–1900](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_2_VMukherji.pdf) |  Visvapriya Mukherji | 423 |
| 219 | IJHS-14-1979-Issue-2 | MindSciences | Western | [The Influence of Lamarckism on the Development of Freud’s Psychoanalytic Theory](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_3_HGershenowitz.pdf) |  Harry Gershenowitz | 202 |
| 220 | IJHS-14-1979-Issue-2 | Biology | Western | [John Burroughs: Right Wing Neo–Lamarckian](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_4_HGershenowitz.pdf) |  Harry Gershenowitz | 149 |
| 221 | IJHS-14-1979-Issue-2 | Philosophy | Indic | [Indian Concepts of Matter Part–I](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_5_JCSikdar.pdf) |  J C Sickdar | 243 |
| 222 | IJHS-14-1979-Issue-2 | Medicine | Indic | [Vagbhata on Medicinal Uses of Gems](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_6_SRNMurthy.pdf) |  S R N Murthy | 89 |
| 223 | IJHS-14-1979-Issue-2 | Biology | Indic | [Botanical Identity and a Critical Appreciation of Maluva Lata as Evinced in the Buddhistic Pali Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_7_RSSingh.pdf) |  R S Singh | 94 |
| 224 | IJHS-14-1979-Issue-2 | Astronomy | Indic | [On Some Geological Aspects of the Suryasiddhanta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_8_SRNMurthy.pdf) |  S R N Murthy | 119 |
| 225 | IJHS-14-1979-Issue-2 | Astronomy | Indic | [The Vasistha–Paulisa Venus in the Pancasiddhantika of Varahamihira](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_9_TSKSastry.pdf) |  T S Kuppanna Sastry | 104 |
| 226 | IJHS-14-1979-Issue-2 | Metallurgy | Indic | [Evidences of the Inorganic Subtances in Amalgamation Process During Indian Alchemy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_10_SSKamavisdar.pdf) |  S S Kamavisdar | 32 |
| 227 | IJHS-14-1979-Issue-2 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_11_BookReviews.pdf) |   | 70 |
| 228 | IJHS-14-1979-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol14_2_12_News.pdf) |   | 42 |
| 229 | IJHS-15-1980-Issue-1 | Metallurgy | Indic | [History of Mining in India—Circa 1400–1800 and Technology Status](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_4_SBagchi.pdf) |  S Bagchi and A K Ghose | 104 |
| 230 | IJHS-15-1980-Issue-1 | Astronomy | Indic | [The Marici Commentary on the Jyotpatti](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_6_RCGupta.pdf) |  R C Gupta | 112 |
| 231 | IJHS-15-1980-Issue-1 | Culture | Indic | [Colour Making and Dyeing of Cotton Textiles in Medieval Hindustan](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_8_HKNaqvi.pdf) |  Hamida Khatoon Naqvi | 285 |
| 232 | IJHS-15-1980-Issue-1 | Medicine | Indic | [Medical Trends in Kashmir During Zain–ul–Abidin’s Reign](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_9_RLVerma.pdf) |  R L Verma | 218 |
| 233 | IJHS-15-1980-Issue-1 | Math | Indic | [Indian Literature on Mathematics During 1400–1800 AD](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_10_AKBag.pdf) |  A K Bag | 325 |
| 234 | IJHS-15-1980-Issue-1 | Astronomy | Indic | [A Survey of Historical Astrolables of Delhi](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_11_KBehari.pdf) |  Kailash Behari and Vijai Govind | 222 |
| 235 | IJHS-15-1980-Issue-1 | Other | Indic | [Patterns of Colonial Science in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_12_DKumar.pdf) |  Deepak Kumar | 189 |
| 236 | IJHS-15-1980-Issue-1 | Culture | Indic | [Calico Printing in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_1_INVerma.pdf) |  I N Verma | 128 |
| 237 | IJHS-15-1980-Issue-1 | Metallurgy | Indic | [Jaina Alchemy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_2_JCSikdar.pdf) |  J C Sikdar | 254 |
| 238 | IJHS-15-1980-Issue-1 | Medicine | Indic | [Unani Medicine in India during the Delhi Sultanate](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_3_TSiddiqi.pdf) |  Tazimuddin Siddiqi | 137 |
| 239 | IJHS-15-1980-Issue-1 | Culture | Indic | [Indian Silk fabrics in  the Seventeenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_5_SPSangar.pdf) |  S P Sangar | 250 |
| 240 | IJHS-15-1980-Issue-1 | Astronomy | Indic | [The Impact of Modern European Astronomy on Raja Jai Singh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_7_SAKGhori.pdf) |  S A Khan Ghori | 174 |
| 241 | IJHS-15-1980-Issue-1 | Biology | Western | [Monsieur Poliakov’s Recent Attack Upon Lamarck](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_1_13_HGershenowitz.pdf) |  Harry Gershenowitz | 127 |
| 242 | IJHS-15-1980-Issue-2 | Biology | Western | [Napoleon and Lamarck](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_2_4_HGershenowitz.pdf) |  Harry Gershenowitz | 137 |
| 243 | IJHS-15-1980-Issue-2 | Medicine | Indic | [Analytical Studies in the Evidences Regarding Chemico–Culture in the History of Indian Medicine in Ancient Period—Allium Series](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_2_5_SSKamavisdar.pdf) |  S S Kamavisdar | 306 |
| 244 | IJHS-15-1980-Issue-2 | Medicine | Indic | [A Comparitive Study of the Early System of Indian Cosmology and the Tridosa Humoral Doctrine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_2_6_SMahadihassan.pdf) |  S Mahdihassan | 157 |
| 245 | IJHS-15-1980-Issue-2 | Math | Indic | [Hindu Geometry](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_2_1_KSShukla.pdf) |  Bibhutibhusan Datta and Avadhesh Narayan Singh; Revised by Kripa Shankar Shukla | 1304 |
| 246 | IJHS-15-1980-Issue-2 | Culture | Indic | [The Vedic River Saraswati A Myth or Fact – A Geological Approach](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_2_2_SRNMurthy.pdf) |  S R N Murthy | 106 |
| 247 | IJHS-15-1980-Issue-2 | Astronomy | Indic | [Standardization of Time–Unit Muhurta Through the Science of Sciatherics in Atharva Vedanga Jyotisa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol15_2_3_SSLishk.pdf) |  Sajjan Singh Lishk and S D Sharma | 267 |
| 248 | IJHS-16-1981-Issue-1 | Medicine | Indic | [Techniques for Extraction of Foreign Bodies From war wounds In Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_2_KKThakral.pdf) |  K K Thakral | 97 |
| 249 | IJHS-16-1981-Issue-1 | Medicine | Indic | [Unani Medicine in India 1524 to 1605 AD](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_4_TSiddiqi.pdf) |  T Siddiqi | 68 |
| 250 | IJHS-16-1981-Issue-1 | Medicine | Indic | [Medicinal Use of Opium And Cannabis in Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_6_GNChaturvedi.pdf) |  G N Chaturvedi | 90 |
| 251 | IJHS-16-1981-Issue-1 | Medicine | Indic | [Ideas of Integration as a Process of Evolution of Indian System of Medicine in the Medieval Period](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_7_SKMishra.pdf) |  S K Mishra | 98 |
| 252 | IJHS-16-1981-Issue-1 | Medicine | Indic | [Contribution of Unani Materia Medicas to the Identification of Vedic Plants with Special Reference to Usana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_8_RSSingh.pdf) |  R S singh | 121 |
| 253 | IJHS-16-1981-Issue-1 | Other | Other | [Alchemy and its Fundamental Terms in Greek‚ Arabic‚ Sanskrit and Chinese](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_11_SMahdihassan.pdf) |  S Mahdihassan | 278 |
| 254 | IJHS-16-1981-Issue-1 | Medicine | Indic | [The Origin and Development of Pulse Examination in Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_12_NPRai.pdf) |  N P Rai | 246 |
| 255 | IJHS-16-1981-Issue-1 | MindSciences | Other | [Aphrodisiacs– A Psychosocial Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_15_AKBose.pdf) |  A K Bose | 75 |
| 256 | IJHS-16-1981-Issue-1 | Medicine | Indic | [Diseases Due to Deficiencies of Vital Principles in the Body](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_16_CBDube.pdf) |  C B Dube | 67 |
| 257 | IJHS-16-1981-Issue-1 | Other | Other | [Inaugural Address](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol_16_1_0_Address.pdf) |  V Ramalingaswami | 32 |
| 258 | IJHS-16-1981-Issue-1 | Medicine | Indic | [Contributions of Sarngadhara in the Field of Materia Medica and Phamacy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_1_PVSharma.pdf) |  P V Sharma | 145 |
| 259 | IJHS-16-1981-Issue-1 | Medicine | Indic | [Contribution of Medieval India to Ayurvedic Materia Medica](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_3_RNSingh.pdf) |  D K S Chauhan | 106 |
| 260 | IJHS-16-1981-Issue-1 | Medicine | Indic | [Two Eminent Physicians of Unani Medicine During Shah Jahan’s Reign](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_5_TSiddiqi.pdf) |  T Siddiqi | 92 |
| 261 | IJHS-16-1981-Issue-1 | Medicine | Indic | [An Arabic Source for the History of Ancient Indian Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_9_MSKhan.pdf) |  M S Khan | 223 |
| 262 | IJHS-16-1981-Issue-1 | Medicine | Indic | [Poisons and Antidotes in Unani Systemof Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_10_ABKhan.pdf) |  A B Khan | 126 |
| 263 | IJHS-16-1981-Issue-1 | Medicine | Indic | [The Contribution of Madanapala Nighantu to the Knowledge of Indian Materia Medica with Particular Reference to Fig (Anjira)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_13_BNSingh.pdf) |  B N Singh | 138 |
| 264 | IJHS-16-1981-Issue-1 | Medicine | Indic | [Humoral Theory of Unani Tibb](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_1_14_AHIsraili.pdf) |  A H Israili | 95 |
| 265 | IJHS-16-1981-Issue-2 | Medicine | Arabic | [A Survey of the Concepts and Measures Developed by the Greco–Arab Physicians Related with The Prevention and Treatment of the Infections and Epidemic Diseases](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_4_AJKhan.pdf) |  A J Khan | 117 |
| 266 | IJHS-16-1981-Issue-2 | Medicine | Western | [Carlos J Finlay and the Conception of Contagion](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_6_JLSanchez.pdf) |  J L Sanchez | 244 |
| 267 | IJHS-16-1981-Issue-2 | Metallurgy | Indic | [Scientific Basis and Technology of Ancient Indian Copper and Iron Metallurgy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_9_KTMHegde.pdf) |  K T M Hegde | 301 |
| 268 | IJHS-16-1981-Issue-2 | Culture | Indic | [Intoxicants in Mughal India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_10_SPSangar.pdf) |  S P Sangar | 254 |
| 269 | IJHS-16-1981-Issue-2 | Astronomy | Indic | [The Gnomon in Early Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_11_GAbraham.pdf) |  George Abraham | 64 |
| 270 | IJHS-16-1981-Issue-2 | Medicine | Indic | [On the Identity and Economico Medicinal uses of Hastikarnapalasa as Evinced in the Ancient (Sanskrit) Texts and Traditions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_12_RSSingh.pdf) |  R S Singh | 94 |
| 271 | IJHS-16-1981-Issue-2 | Math | Indic | [The Rationale of Brahmagupta’s Method of Solving ax—c=by](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_1_PKMajumdar.pdf) |  P K Majumdar | 85 |
| 272 | IJHS-16-1981-Issue-2 | Astronomy | Indic | [Pluto and a Transplutonian Planet as Predicted by Venkatesha Ketakara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_2_SDSharma.pdf) |  S D Sharma | 221 |
| 273 | IJHS-16-1981-Issue-2 | Biology | Western | [John Wesley Powell: Staunch Neo–Lamarckian](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_3_HGershenowitz.pdf) |  H Gershenowitz | 184 |
| 274 | IJHS-16-1981-Issue-2 | Medicine | Indic | [Interaction in Chemistry and Medicine Between India and Europe in 18th–19th Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_5_NKGarg.pdf) |  N K Garg | 201 |
| 275 | IJHS-16-1981-Issue-2 | Medicine | Indic | [Bakula– A Reputed Drug of Ayurveda ‚its History‚ Uses in Indian Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_7_RMitra.pdf) |  Roma Mitra | 277 |
| 276 | IJHS-16-1981-Issue-2 | Medicine | Indic | [Techniques of Venupuncture (Siravedha) in India in the 18th Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_8_DGThatte.pdf) |  D G Thatte | 174 |
| 277 | IJHS-16-1981-Issue-2 | Culture | Indic | [Parisrut The Earliest Distilled Liquor of Vedic Times or of About 1500BC](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol16_2_13_SMahdihassan.pdf) |  S Mahdihassan | 154 |
| 278 | IJHS-17-1982-Issue-1 | Other | Indic | [An Outline Survey of Some Aspects of Technology in India, 1750–1900 and its Legacy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_2_RDRoy.pdf) |  Rama Deb roy | 197 |
| 279 | IJHS-17-1982-Issue-1 | Other | Indic | [Indigenous Paper Industry and Muslim Entrepreneurship](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_4_MJMehta.pdf) |  Makrand J Mehta | 361 |
| 280 | IJHS-17-1982-Issue-1 | Other | Indic | [Technology in India in the Eighteenth–Ninteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_7_AKBag.pdf) |  A K Bag | 180 |
| 281 | IJHS-17-1982-Issue-1 | Other | Indic | [Geological Sciences in India in the 18th–19th Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_12_KSMurty.pdf) |  K S Murty | 282 |
| 282 | IJHS-17-1982-Issue-1 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_13_BookReviews.pdf) |   | 127 |
| 283 | IJHS-17-1982-Issue-1 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_14_News.pdf) |   | 106 |
| 284 | IJHS-17-1982-Issue-1 | Astronomy | Indic | [Tieffenthaler on Latitudes and Longitudes in India— An Eighteenth Century Study of Geographical Coordinates](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_1_SNSen.pdf) |  S N Sen | 315 |
| 285 | IJHS-17-1982-Issue-1 | Agriculture | Indic | [Irrigation Engineering in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_3_RPKulkarni.pdf) |  R P Kulkarni | 274 |
| 286 | IJHS-17-1982-Issue-1 | Other | Indic | [Technology and Process of Some of the Principal Industries of Eighteenth Century Hindustan](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_5_HKNaqvi.pdf) |  Hamida Khatoon Naqvi | 122 |
| 287 | IJHS-17-1982-Issue-1 | Other | Indic | [Indian Dyes and Dyeing Industry during 18–19 Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_6_HCBhardwaj.pdf) |  H C Bhardwaj and Kamal K Jain | 215 |
| 288 | IJHS-17-1982-Issue-1 | Other | Indic | [Development of Banking Institutions in India in the Eighteenth–Ninteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_8_EGKRao.pdf) |  E G K Rao | 433 |
| 289 | IJHS-17-1982-Issue-1 | Medicine | Indic | [Phirangiroga (Syphilis) and its Management](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_10_JCSikdar.pdf) |  J C Sikdar | 493 |
| 290 | IJHS-17-1982-Issue-1 | Medicine | Indic | [The State of Ayurveda in Eighteenth & Ninteenth Centuries](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_1_11_NGangadharan.pdf) |  N Gangadharan | 198 |
| 291 | IJHS-17-1982-Issue-2 | Agriculture | Indic | [Agricultural Science and Technology in Punjab in the Ninteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_1_SSingh.pdf) |  Sukhwant Singh | 283 |
| 292 | IJHS-17-1982-Issue-2 | Metallurgy | Indic | [Development of Iron and Steel Technology in India during 18th and 19th Centuries](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_3_HCBhardwaj.pdf) |  H C Bhardwaj | 192 |
| 293 | IJHS-17-1982-Issue-2 | Astronomy | Indic | [Jagannath Samrats Outstanding Contribution to Indian Astronomy in Eighteenth Century AD](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_5_MLSharma.pdf) |  M L Sharma | 150 |
| 294 | IJHS-17-1982-Issue-2 | Other | Indic | [Economic Compulsions and the Geological Survey of India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_10_DKumar.pdf) |  Deepak kumar | 212 |
| 295 | IJHS-17-1982-Issue-2 | Other | Western | [Impact of European Science and Technology on Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_11_SKhatun.pdf) |  Sharifa Khatun | 198 |
| 296 | IJHS-17-1982-Issue-2 | Medicine | Western | [Some Perspectives of the Cultural imapct of European Medical Scienec on the Development Scientific Medicine in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_13_AKBasu.pdf) |  A K basu | 139 |
| 297 | IJHS-17-1982-Issue-2 | Astronomy | Fareast | [The Impact of Eighteenth Century Jesuit Astronomers on the Astronomy of India and China](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_15_VNSharma.pdf) |  Virendra Nath Sharma | 157 |
| 298 | IJHS-17-1982-Issue-2 | Biology | Indic | [Botany and its Technologies in Peninsular India in the Eighteenth and Ninteenth Centuries](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_16_KMMatthew.pdf) |  K M Matthew | 231 |
| 299 | IJHS-17-1982-Issue-2 | Metallurgy | Indic | [Science and Technology (Coal Mining) in India in Eighteenth–Ninteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_18_DPJha.pdf) |  D P Jha | 242 |
| 300 | IJHS-17-1982-Issue-2 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_19_BookReviews.pdf) |   | 68 |
| 301 | IJHS-17-1982-Issue-2 | Other | Other | [Announcement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_20_Announcement.pdf) |   | 29 |
| 302 | IJHS-17-1982-Issue-2 | Metallurgy | Indic | [Development of Mining Technology during the Ninteenth Century in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_2_RDSingh.pdf) |  R D Singh | 476 |
| 303 | IJHS-17-1982-Issue-2 | Astronomy | Indic | [European Astronomical Tradition: Transmission into India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_4_EGForbes.pdf) |  Eric G Forbes | 224 |
| 304 | IJHS-17-1982-Issue-2 | Astronomy | Indic | [Solar Eclipse Theory and observations in the 18th Century India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_6_AKMehra.pdf) |  Anjani Kumar Mehra | 128 |
| 305 | IJHS-17-1982-Issue-2 | Other | Indic | [Brief History of Scientific Progress of South Kanara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_7_MNMadhyastha.pdf) |  M N Madhyastha, M Abdul Rahiman and K M Kaveriappa | 141 |
| 306 | IJHS-17-1982-Issue-2 | Culture | Fareast | [The Characteristic Features of Japanese Culture in the Field of Science Eighteenth–Ninteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_8_KNobuo.pdf) |  Kawajiri Nobuo | 185 |
| 307 | IJHS-17-1982-Issue-2 | Other | Other | [The Rise and Fall of Three Fashionable Expectations](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_9_JTBlackmore.pdf) |  John T Blackmore | 174 |
| 308 | IJHS-17-1982-Issue-2 | Medicine | Indic | [Impact of European Science and Technology on the development of Modern Ayurveda during 19th Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_12_GSingh.pdf) |  Gurdip Singh and P D Joshi | 225 |
| 309 | IJHS-17-1982-Issue-2 | Astronomy | Indic | [Jai Singh‚ His European Astronomers and the Copernican Revolution](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_14_VNSharma.pdf) |  Virendra Nath Sharma | 228 |
| 310 | IJHS-17-1982-Issue-2 | Biology | Indic | [Beginning of Modern Botany in India by Dutch in 16th–18th Century (Basic Features and Characteristics)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol17_2_17_PKBhattacharyya.pdf) |  P K Bhattacharyya | 364 |
| 311 | IJHS-18-1983-Issue-1 | Biology | Western | [Arthur Koestler’s Osculation with Lamarckism and Neo–Lamarckism](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_1_1_HGershenowitz.pdf) |  Harry Gershenowitz | 179 |
| 312 | IJHS-18-1983-Issue-1 | Biology | Western | [Georges Clemenceau: Traditional Lamarckian](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_1_3_HGershenowitz.pdf) |  Harry Gershenowitz | 183 |
| 313 | IJHS-18-1983-Issue-1 | Math | Indic | [Hindu Trignometry](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_1_5_BDatta.pdf) |  Bibhutibhusan Datta and Avadhesh Narayan Singh | 1010 |
| 314 | IJHS-18-1983-Issue-1 | Culture | Indic | [Some Varieties of Indian Silken Stuffs in Persian Sources C 1200–1700](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_1_7_HKNaqvi.pdf) |  Hamida Khatoon Naqvi | 284 |
| 315 | IJHS-18-1983-Issue-1 | Lingiustics | Indic | [The Etymology of Kim–Purusa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_1_8_SMahdihassan.pdf) |  S Mahdihassan | 29 |
| 316 | IJHS-18-1983-Issue-1 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_1_9_Bookreview.pdf) |   | 66 |
| 317 | IJHS-18-1983-Issue-1 | Astronomy | Indic | [Evolution of the Concept of Astavarga](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_1_2_VKJoshi.pdf) |  V K Joshi | 116 |
| 318 | IJHS-18-1983-Issue-1 | Math | Indic | [Spread and Triumph of Indian Numerals](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_1_4_RCGupta.pdf) |  R C Gupta | 306 |
| 319 | IJHS-18-1983-Issue-1 | Metallurgy | Other | [History of Powder Metallurgy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_1_6_PRamakrishnan.pdf) |  P Ramakrishnan | 157 |
| 320 | IJHS-18-1983-Issue-2 | Lingiustics | Indic | [The Identity and Critical Appraisal of the Basis of Nomenclature and Ancient Socio–Cultural and Geographico–Historical Reflections Evinced with the Paninian Perfume Plant ⁄ Plant Part–Kisara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_2_3_RSSingh.pdf) |  R S Singh and V D Vyas | 145 |
| 321 | IJHS-18-1983-Issue-2 | Lingiustics | Indic | [On the Identity of and Indo–Greek Relation Reflected in the Plant–Names and Uses Evinced in the Kautilya Arthasastra with Particular Reference to ‘Kiratatikta’ of ‘Katuvarga’](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_2_4_ANSingh.pdf) |  A N Singh and R S Singh | 107 |
| 322 | IJHS-18-1983-Issue-2 | Math | Indic | [A Rationale of Bhatta Govinda’s Method for Solving the Equation ax—c=by and a Comparitive Study of the Determination of ‘Mati’ as Given by Bhaskara I and Bhatta Govinda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_2_7_PKMajumdar.pdf) |  Pradip Kumar Majumdar | 88 |
| 323 | IJHS-18-1983-Issue-2 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_2_9_BookReviews.pdf) |   | 120 |
| 324 | IJHS-18-1983-Issue-2 | Biology | Western | [Why Did Gregory Bateson Overlook Some Basic Lamarckian Tenets](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_2_1_HGershenowitz.pdf) |  Harry Gershenowitz | 367 |
| 325 | IJHS-18-1983-Issue-2 | Biology | Western | [Encyclopedias and Lamarck](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_2_2_HGershenowitz.pdf) |  Harry Gershenowitz | 250 |
| 326 | IJHS-18-1983-Issue-2 | Metallurgy | Indic | [Antiquity of Mining and Metallurgical Activities at Ambaji‚ Kumbaria and Deri](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_2_5_NCShekar.pdf) |  N C Shekar | 144 |
| 327 | IJHS-18-1983-Issue-2 | Other | Western | [The Characteristic Features of Development of Science and Technology in Europe in the 18–19th Centuries](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_2_6_VSKirsanov.pdf) |  V S Kirsanov | 329 |
| 328 | IJHS-18-1983-Issue-2 | Metallurgy | Indic | [The Technique of Glass Making in India (1400–1800 AD)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol18_2_8_MChaudhuri.pdf) |  Mamata Chaudhuri | 344 |
| 329 | IJHS-19-1984-Issue-1 | Other | Indic | [Units of Measurements in Medieval India and their Modern Equivalents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_3_SAParamhans.pdf) |  S A Paramhans | 122 |
| 330 | IJHS-19-1984-Issue-1 | Culture | Indic | [Plants: Traditional Worshipping](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_4_NBhatla.pdf) |  N Bhatla‚ T Mukherjee and G Singh | 102 |
| 331 | IJHS-19-1984-Issue-1 | Medicine | Indic | [Siddha System of Medicine: A Historical Appraisal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_5_KHKrishnamurthy.pdf) |  K H Krishnamurthy and G C Mouli | 181 |
| 332 | IJHS-19-1984-Issue-1 | Lingiustics | Fareast | [The Chinese Origin of the Sanskrit Word for Wheat](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_8_Smahdihassan.pdf) |  S Mahadihassan | 44 |
| 333 | IJHS-19-1984-Issue-1 | Math | Indic | [On Trisection of an Angle Leading to the Derivation of a Cubic Equation and Computation of Value of Sine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_10_SAHRizvi.pdf) |  S A H Rizvi | 103 |
| 334 | IJHS-19-1984-Issue-1 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_11_BookReviews.pdf) |   | 44 |
| 335 | IJHS-19-1984-Issue-1 | Other | Other | [Report: History of Science in USSR](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_12_Report.pdf) |  A K Bag | 98 |
| 336 | IJHS-19-1984-Issue-1 | Math | Indic | [Varga–Prakrtri— The Cakravala Method of its Solution and the Regular Continued–Fractions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_1_PSingh.pdf) |  P Singh | 173 |
| 337 | IJHS-19-1984-Issue-1 | Astronomy | Indic | [Prediction of Pluto by B Ketakar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_2_GJChhabra.pdf) |  J G Chhabra‚ S D Sharma and Manju Khanna | 127 |
| 338 | IJHS-19-1984-Issue-1 | Biology | Western | [Robert Broom’s Misinterpretation of Lamarck and Darwin](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_6_HGershenowitz.pdf) |  H Gershenowitz | 174 |
| 339 | IJHS-19-1984-Issue-1 | Medicine | Arabic | [Surgery in the Medieval Muslim World](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_7_AIsmail.pdf) |  A Ismail and A B Khan | 101 |
| 340 | IJHS-19-1984-Issue-1 | Medicine | Fareast | [The Tridosa Doctrine and the Constituents of Chinese Humorology](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_1_9_Smahdihassan.pdf) |  S Mahadihassan | 41 |
| 341 | IJHS-19-1984-Issue-2 | Biology | Indic | [Helminthology in India in 18th–19th Centuries with Some Remarks on its Recent Progress](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_2_3_PDGupta.pdf) |  P D Gupta | 144 |
| 342 | IJHS-19-1984-Issue-2 | Philosophy | Indic | [The Concept of Matter and its States in Indian Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_2_5_MSBhatnagar.pdf) |  M S Bhatnagar | 261 |
| 343 | IJHS-19-1984-Issue-2 | Metallurgy | Indic | [Transmutation of Base–Metals into Gold as Described in the Text Rasarnavakalpa and its Comparison with the Parallel Chinese Methods](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_2_8_VDeshpande.pdf) |  V Deshpande | 104 |
| 344 | IJHS-19-1984-Issue-2 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_2_9_BookReviews.pdf) |   | 66 |
| 345 | IJHS-19-1984-Issue-2 | Other | Other | [Report: An International Islamic Science Conference](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_2_10_Report.pdf) |  M S Khan | 20 |
| 346 | IJHS-19-1984-Issue-2 | Other | Other | [News](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol19_2_11_News.pdf) |   | 29 |
| 347 | IJHS-19-1984-Issue-2 | Math | Indic | [Use of Calculus in Hindu Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_2_1_BDatta.pdf) |  B Datta and A N Singh | 132 |
| 348 | IJHS-19-1984-Issue-2 | Biology | Other | [Encyclopaedia Judaica’s Interpretation of Neo–Lamarckism](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_2_2_HGershenowitz.pdf) |  H Gershenowitz | 71 |
| 349 | IJHS-19-1984-Issue-2 | Culture | Indic | [The Concept of Yantra in the Samarangana–Sutradharaof Bhoja](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_2_4_MRoy.pdf) |  Mira Roy | 101 |
| 350 | IJHS-19-1984-Issue-2 | Astronomy | Indic | [The Astronomical Tables of Rajah Jai Singh Sawai](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_2_6_RMercier.pdf) |  R Mercier | 414 |
| 351 | IJHS-19-1984-Issue-3 | Math | Western | [Jean Le Rond D’Alembert 1717–1783](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_3_1_VVRaman.pdf) |  V V Raman | 235 |
| 352 | IJHS-19-1984-Issue-3 | Medicine | Indic | [Standards of Scientific Investigation: Logic and Methodology of Science in Caraka Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_3_3_VShekhawat.pdf) |  V Shekhawat | 509 |
| 353 | IJHS-19-1984-Issue-3 | Other | Indic | [Science in Higher Education: A Study in Victorian India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_3_4_DKumar.pdf) |  Deepak Kumar | 137 |
| 354 | IJHS-19-1984-Issue-3 | Other | Other | [Announcement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_3_9_Announcement.pdf) |   | 18 |
| 355 | IJHS-19-1984-Issue-3 | Astronomy | Indic | [Supplement: Vedanga Jyotisa of Lagadha](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_3_10_SupplementVedangjyotishaofLagdha.pdf) |  S K Mukherjee | 890 |
| 356 | IJHS-19-1984-Issue-3 | Other | Indic | [Industries in India in 18th and 19t Centuries](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_3_2_URBansal.pdf) |  U R Bansal and BB Bansal | 149 |
| 357 | IJHS-19-1984-Issue-3 | Biology | Western | [Professor Conway Zirkle’s Vitriolic Attack on Lamarck](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_3_5_HGershenowitz.pdf) |  H Gershenowitz | 201 |
| 358 | IJHS-19-1984-Issue-3 | Medicine | Indic | [The Wonder Ayurvedic Drug Laksmana for Progeny: A Historical Appraisal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_3_6_CLYadav.pdf) |  C L Yadav and  K C Chunekar | 125 |
| 359 | IJHS-19-1984-Issue-3 | Math | Indic | [Sriyantra and its Mathematical Properties](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_3_7_APKulaichev.pdf) |  A P Kulaichev | 177 |
| 360 | IJHS-19-1984-Issue-3 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_3_8_BookReviews.pdf) |   | 32 |
| 361 | IJHS-19-1984-Issue-4 | Biology | Indic | [Ichthyological Developments in Assam in Ninteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_4_1_SCDey.pdf) |  S C Dey | 231 |
| 362 | IJHS-19-1984-Issue-4 | Culture | Indic | [Washerman and Washing Materials in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_4_2_DKAgarwal.pdf) |  D K Agarwal and S C Shukla | 118 |
| 363 | IJHS-19-1984-Issue-4 | Metallurgy | Indic | [Archaeometallurgical Studies in Indian Subcontinent: A Survey on Metallography of Iron Objects](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_4_6_PKChattopadhyay.pdf) |  P K Chattopadhyay | 84 |
| 364 | IJHS-19-1984-Issue-4 | Math | Fareast | [Kuttaka and Qiuyishu](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_4_8_AKBag.pdf) |  A K Bag and K S Shen | 90 |
| 365 | IJHS-19-1984-Issue-4 | Other | Other | [Book Reviews](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol19_4_9_BookReviews.pdf) |   | 128 |
| 366 | IJHS-19-1984-Issue-4 | Other | Other | [Notes and News](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol19_4_10_NotesAndNews.pdf) |   | 43 |
| 367 | IJHS-19-1984-Issue-4 | Philosophy | Indic | [Atom from Veda to Date](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_4_3_MSBhatnagar.pdf) |  M S Bhatnagar | 80 |
| 368 | IJHS-19-1984-Issue-4 | Agriculture | Indic | [Cultivation under the Sultans of Delhi c 1206–1555](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_4_4_HKNaqvi.pdf) |  H K Naqvi | 192 |
| 369 | IJHS-19-1984-Issue-4 | Agriculture | Indic | [Risala Dar Falahat](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_4_5_MMajumdar.pdf) |  M Majumdar | 273 |
| 370 | IJHS-19-1984-Issue-4 | Medicine | Indic | [Neurology in Ancient India– Some Evidences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol19_4_7_BCJoshi.pdf) |  B C Joshi | 354 |
| 371 | IJHS-20-1985-Issue-1to4 | Other | Other | [A Survey of Source Materials](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_2_KVSarma.pdf) |  K V Sarma | 368 |
| 372 | IJHS-20-1985-Issue-1to4 | Other | Western | [Survey of Studies in European Languages](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_4_SNSen.pdf) |  S N Sen | 1262 |
| 373 | IJHS-20-1985-Issue-1to4 | Astronomy | Indic | [Astronomy in Indus Civilization and during Vedic Times](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_5_AKBag.pdf) |  A K Bag | 158 |
| 374 | IJHS-20-1985-Issue-1to4 | Astronomy | Indic | [Eclipses‚ Parallax and Precession of Equinoxes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_8_SDSharma.pdf) |  S D Sharma | 383 |
| 375 | IJHS-20-1985-Issue-1to4 | Astronomy | Indic | [Phases of The Moon, Rising and Setting Of Planets and Stars and Their Conjunstions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_9_KSShukla.pdf) |  K S Shukla | 575 |
| 376 | IJHS-20-1985-Issue-1to4 | Astronomy | Indic | [Astronomical Observatories](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_12_SDSharma.pdf) |  S D Sharma | 481 |
| 377 | IJHS-20-1985-Issue-1to4 | Astronomy | Indic | [Development of Zij Literature in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_3_SAKhan.pdf) |  S A Khan | 473 |
| 378 | IJHS-20-1985-Issue-1to4 | Astronomy | Indic | [Post–Vedic Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_6_SDSharma.pdf) |  S D Sharma | 235 |
| 379 | IJHS-20-1985-Issue-1to4 | Astronomy | Indic | [The Yuga System And The Computations of Mean and True Planetary Longitudes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_7_ASomayaji.pdf) |  D Arka Somayaji | 669 |
| 380 | IJHS-20-1985-Issue-1to4 | Astronomy | Indic | [Astronomical Instruments](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_11_RNRai.pdf) |  R N Rai | 453 |
| 381 | IJHS-20-1985-Issue-1to4 | Astronomy | Western | [Introduction of Modern western Astronomy in India During 18–19 Centuries](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_13_SMRAnsari.pdf) |  S M R Ansari | 735 |
| 382 | IJHS-20-1985-Issue-1to4 | Astronomy | Indic | [Astronomy in India in the 20th Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol20-1to4_14_JCBhattacharyya.pdf) |  J C Bhattacharyya | 529 |
| 383 | IJHS-21-1986-Issue-1 | Biology | Other | [Ephedra as Soma Meaning Hemp Fibres with Soma Later Misidentified as the Hemp Plant Itself](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_1_1_SMahdihassan.pdf) |  S Mahdihassan | 156 |
| 384 | IJHS-21-1986-Issue-1 | Other | Indic | [Contribution to ‘Weather Science in Ancient India-I’](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_1_2_ASRamanathan.pdf) |  A S Ramanathan | 146 |
| 385 | IJHS-21-1986-Issue-1 | Other | Indic | [Contribution to ‘Weather Science in Ancient India-II’](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_1_3_ASRamanathan.pdf) |  A S Ramanathan | 99 |
| 386 | IJHS-21-1986-Issue-1 | Other | Indic | [The Great Trignometrical Survey of India in a Historical Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_1_4_RDRoy.pdf) |  Rama Deb Roy | 191 |
| 387 | IJHS-21-1986-Issue-1 | Astronomy | Other | [The Method of Science in Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_1_5_RRDaniel.pdf) |  R R Daniel | 342 |
| 388 | IJHS-21-1986-Issue-1 | Math | Indic | [Some Equalization Problems from the Bakshali Manuscript](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_1_6_RCGupta.pdf) |  R C Gupta | 174 |
| 389 | IJHS-21-1986-Issue-1 | Math | Indic | [Computational Aspects of the Aryabhata Algorithm](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_1_7_SKak.pdf) |  Subhash Kak | 136 |
| 390 | IJHS-21-1986-Issue-1 | Lingiustics | Indic | [Decipherment and Interpretation of the Proto–Indian (Mohenjo–Daro and Harappa) Inscriptions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_1_8_BZSzalek.pdf) |  Benon Zb Szalek | 77 |
| 391 | IJHS-21-1986-Issue-1 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_1_9_BookReview.pdf) |  M S Khan | 115 |
| 392 | IJHS-21-1986-Issue-1 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_1_11_News.pdf) |   | 42 |
| 393 | IJHS-21-1986-Issue-2 | Medicine | Indic | [The Art of Theory Construction in Caraka Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_1_VShekhawat.pdf) |  Virendra Shekhawat | 276 |
| 394 | IJHS-21-1986-Issue-2 | Astronomy | Other | [Star Catalogues and Star Tables in Medieval Oriental and European Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_2_PKunitzsch.pdf) |  Paun Kunitzsch | 232 |
| 395 | IJHS-21-1986-Issue-2 | Math | Indic | [Narayana’s Treatment of Magic Squares](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_3_PSingh.pdf) |  Parmanand Singh | 143 |
| 396 | IJHS-21-1986-Issue-2 | Math | Indic | [Madhavacandra’s and Other Octagonal Derivations of the Jaina Value Π = √10](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_4_RCGupta.pdf) |  R C Gupta | 151 |
| 397 | IJHS-21-1986-Issue-2 | Math | Indic | [Arithmetical Ratio of Diameter to its Circumference of a Circle with Special Reference to Jame–I–Bahadur Khani](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_5_SAHRizvi.pdf) |  Syed Aftab Husain Rizvi | 146 |
| 398 | IJHS-21-1986-Issue-2 | MindSciences | Indic | [Neurology in Ancient India: Muladhara Cakra—A Physiological Reality](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_6_BCJoshi.pdf) |  B C Joshi | 597 |
| 399 | IJHS-21-1986-Issue-2 | Medicine | Indic | [Evolution of Kusta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_7_OPUpadhyay.pdf) |  O P upadhyay | 244 |
| 400 | IJHS-21-1986-Issue-2 | Metallurgy | Other | [Lac and its Decolourization by Orpiment as Traced to Babylon](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_8_SMahdihassan.pdf) |  S Mahdihassan | 146 |
| 401 | IJHS-21-1986-Issue-2 | Medicine | Indic | [Book Review: Medical Education and Research: Western Medicine in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_9_BookReviews.pdf) |  S M R Ansari | 123 |
| 402 | IJHS-21-1986-Issue-2 | Other | Other | [Report: Seminar on Science‚ Technology and Social Change‚ 1900–1980](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_10_Report.pdf) |  S N Sen | 47 |
| 403 | IJHS-21-1986-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_11_News.pdf) |   | 55 |
| 404 | IJHS-21-1986-Issue-2 | Other | Other | [Announcements](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_2_12_Announcements.pdf) |   | 50 |
| 405 | IJHS-21-1986-Issue-3 | Philosophy | Arabic | [On Relevance of Ibn Sina Today](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_3_1_ARahman.pdf) |  A Rahman | 246 |
| 406 | IJHS-21-1986-Issue-3 | Culture | Arabic | [Ibn Sina: Genius of Arabic–Islamic Civilization](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_3_2_MFAintabi.pdf) |  Mahomed Fouad Aintabi | 46 |
| 407 | IJHS-21-1986-Issue-3 | Other | Arabic | [The Life and Teachings of Ibn Sina](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_3_3_MAsimov.pdf) |  Muhamed Asimov | 499 |
| 408 | IJHS-21-1986-Issue-3 | Other | Arabic | [Some Treatises and Epistles of Ibn Sina](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_3_4_MMKhairullayev.pdf) |  M M Khairullayev | 141 |
| 409 | IJHS-21-1986-Issue-3 | Culture | Arabic | [Central Asian Society in Ibn Sina’s Time](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_3_5_KNPandita.pdf) |  K N Pandita | 115 |
| 410 | IJHS-21-1986-Issue-3 | Culture | Arabic | [Poetic and Socio–Ethic Views of Ibn Sina](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_3_6_MAsimov.pdf) |  Muhamed Asimov | 76 |
| 411 | IJHS-21-1986-Issue-3 | Other | Arabic | [Ibn Sina as a Scientist](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_3_7_HMSaid.pdf) |  Hakim Mohammed Said | 182 |
| 412 | IJHS-21-1986-Issue-3 | Other | Indic | [Ibn Sina and Indian Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_3_8_AKBag.pdf) |  A K Bag | 132 |
| 413 | IJHS-21-1986-Issue-3 | Other | Indic | [Ibn Sina’s Impact on the Rational and Scientific Movements in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_3_9_SAARizvi.pdf) |  S A A Rizvi | 202 |
| 414 | IJHS-21-1986-Issue-3 | Philosophy | Arabic | [Ibn Sina’s Critique Mutakallimin’s Atomic Theory](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_3_10_WHAbdi.pdf) |  Wazir Hsan Abdi | 160 |
| 415 | IJHS-21-1986-Issue-3 | Other | Other | [Report: XVII International Union for History and Philosophy of Science Congress](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_3_11_Report.pdf) |  S K Mukherjee and A K Bag | 79 |
| 416 | IJHS-21-1986-Issue-4 | Medicine | Arabic | [Ibn Sina’s Medical Works](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_4_1_SRAPerwaz.pdf) |  Syed Riyaz ‘Ali Perwaz | 356 |
| 417 | IJHS-21-1986-Issue-4 | Medicine | Arabic | [The Section on Cardiac Diseases and Their Treatment in the Qanun of Ibn Sina](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_4_2_MSKhan.pdf) |  M S Khan | 253 |
| 418 | IJHS-21-1986-Issue-4 | Medicine | Arabic | [Ibn Sina on Materia Medica](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_4_3_TSiddiqi.pdf) |  Tazimuddin Siddiqi | 629 |
| 419 | IJHS-21-1986-Issue-4 | Medicine | Indic | [Impact of Ibn Sina on Pulse Examination and Materia Medica of Medieval Period of Ayurveda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_4_4_GNChaturvedi.pdf) |  G N Chaturvedi and K P Singh | 125 |
| 420 | IJHS-21-1986-Issue-4 | MindSciences | Arabic | [Physiological Approach of Ibn Sina Towards the Science of Behaviour](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_4_5_MTaiyab.pdf) |  M Taiyab | 92 |
| 421 | IJHS-21-1986-Issue-4 | Lingiustics | Arabic | [Ibn Sina on Speech Articulation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_4_6_PNPushp.pdf) |  P N Pushp | 123 |
| 422 | IJHS-21-1986-Issue-4 | Philosophy | Arabic | [Ibn Sina’s Approach to Physics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_4_7_HSVirk.pdf) |  H S Virk | 93 |
| 423 | IJHS-21-1986-Issue-4 | Other | Arabic | [Contributions of Ibn Sina to Geographical Knowledge](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol21_4_8_SShafi.pdf) |  M Shafi | 98 |
| 424 | IJHS-22-1987-Issue-1 | Other | Indic | [Contribution to ‘Weather Science in Ancient India’ IV](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_1_1_ASRamanathan.pdf) |  A S Ramanathan | 121 |
| 426 | IJHS-22-1987-Issue-1 | Metallurgy | Indic | [Rasa– Ratna– Samuccaya and Mineral Processing State–of–Art in the 13th Century AD India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_1_4_AKBiswas.pdf) |  Arun Kumar Biswas | 410 |
| 427 | IJHS-22-1987-Issue-1 | Astronomy | Indic | [Mulla Mahmud Jaunpuri's Theory of Moon–Spots](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_1_5_WHAbdi.pdf) |  Wazir Hasan Abdi | 85 |
| 428 | IJHS-22-1987-Issue-1 | Lingiustics | Indic | [On the Decipherment of the Indus Script— A Preliminary Study of its Connection with Brahmi](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_1_6_SCKak.pdf) |  Subhash C Kak | 204 |
| 429 | IJHS-22-1987-Issue-1 | Medicine | Indic | [History of Cinnabar as Drug, The Natural Substance and Synthetic Product](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_1_7_SMahdihassan.pdf) |  S Mahdihassan | 195 |
| 430 | IJHS-22-1987-Issue-1 | Culture | Indic | [Perfumery in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_1_8_RKrishnamurthy.pdf) |  Radha Krishnamurthy | 187 |
| 431 | IJHS-22-1987-Issue-1 | Other | Western | [Some Reflections from the Works of Vernadsky (1863–1945)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_1_9_SChandra.pdf) |  Sanjay Chandra | 79 |
| 432 | IJHS-22-1987-Issue-1 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_1_10_BookReviews.pdf) |   | 110 |
| 433 | IJHS-22-1987-Issue-1 | Other | Other | [Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_1_11_Report.pdf) |  S N Sen | 19 |
| 434 | IJHS-22-1987-Issue-1 | Other | Other | [Announcements](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_1-12_Announcements.pdf) |   | 75 |
| 435 | IJHS-22-1987-Issue-2 | Agriculture | Indic | [Importnace of Studying Veterinary Science Literature in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_2_RPSTyagi.pdf) |  R P S Tyagi | 36 |
| 436 | IJHS-22-1987-Issue-2 | Medicine | Indic | [Scope of Study of Veterinary Science Literature in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_3_VKSharma.pdf) |  V K Sharma | 94 |
| 437 | IJHS-22-1987-Issue-2 | Philosophy | Indic | [Method of Science used in Past Indian and its Relevance to Present Day Context](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_4_GPrasad.pdf) |  Gaya Prasad | 74 |
| 438 | IJHS-22-1987-Issue-2 | Medicine | Indic | [Souces of Ancient Indian Literature on Veterinary Sciences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_5_DNGarg.pdf) |  D N Garo | 147 |
| 439 | IJHS-22-1987-Issue-2 | Medicine | Indic | [Rural Folk Prescriptions: Plea for Search of Scientific Content](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_6_KCSatija.pdf) |  K C Satija | 140 |
| 440 | IJHS-22-1987-Issue-2 | Medicine | Indic | [Pharmacy in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_7_RDRana.pdf) |  R D Rana | 66 |
| 441 | IJHS-22-1987-Issue-2 | Agriculture | Indic | [Nutritional and Managerial Practices of Animals in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_8_VMMandokhot.pdf) |  V M Mandokhot | 130 |
| 442 | IJHS-22-1987-Issue-2 | Agriculture | Indic | [Breeding Practices and Selection Criteria for Domestication of Animals](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_9_UMandokhot.pdf) |  Usha V Mandokhot | 182 |
| 443 | IJHS-22-1987-Issue-2 | Agriculture | Indic | [Administrative Recommendation in regard to Upkeeping, Health, and Management of Animals in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_10_SPrasad.pdf) |  S Prasad | 100 |
| 444 | IJHS-22-1987-Issue-2 | Medicine | Indic | [Posibilities of relating Modern Veterinary Science Literature to the Growth of Relevant Knowledge in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_11_SKKalra.pdf) |  S K Kalra | 325 |
| 445 | IJHS-22-1987-Issue-2 | Medicine | Indic | [Historical Background and Analysis of Scientific Content of Ancient Indian Literature on Practices for the Treatment of Diseases of Domestic Animals](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_12_RDSharma.pdf) |  R D Sharma, Rakesh Kumar and Sridhar | 126 |
| 446 | IJHS-22-1987-Issue-2 | Medicine | Indic | [Antimicrobial Agents used in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_13_SCDogra.pdf) |  S C Dogra | 117 |
| 447 | IJHS-22-1987-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_2_14_News.pdf) |   | 59 |
| 448 | IJHS-22-1987-Issue-3 | Astronomy | Indic | [Contribution to Weather Science in Ancient India. V— Priciples of Forecasting Rainfall in Ancient India (Long Range)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_3_1_ASRamanathan.pdf) |  A S Ramanathan | 288 |
| 449 | IJHS-22-1987-Issue-3 | Astronomy | Indic | [Contribution to Weather Science in Ancient India. VI— Priciples of Forecasting Rainfall in Ancient India (Short and Medium Range)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_3_2_ASRamanathan.pdf) |  A S Ramanathan | 128 |
| 450 | IJHS-22-1987-Issue-3 | Astronomy | Indic | [Contribution to Weather Science in Ancient India. VII— A Scientific Assessment of the Rules of Rainfall Forecasting Practiced in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_3_3_ASRamanathan.pdf) |  A S Ramanathan | 148 |
| 451 | IJHS-22-1987-Issue-3 | Astronomy | Indic | [On Astronomy in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_3_4_SCKak.pdf) |  Subhash C Kak | 349 |
| 452 | IJHS-22-1987-Issue-3 | Other | Indic | [On the Chronology in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_3_5_SCKak.pdf) |  Subhash C Kak | 287 |
| 453 | IJHS-22-1987-Issue-3 | Medicine | Indic | [A Few Facts of Historiacl Interest Relating to Diabetes Mellitus](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_3_6_OPUpadhyay.pdf) |  O P Upadhyay and D Upadhyay | 107 |
| 454 | IJHS-22-1987-Issue-3 | Math | Indic | [Indian Mathematical Sciences Abroad During Pre–modern Times](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_3_7_RCGupta.pdf) |  R C Gupta | 173 |
| 455 | IJHS-22-1987-Issue-3 | Other | Other | [Milgram's Shocking Experiments: A Case in Social Construction of ‘Science’](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_3_8_Jlaurent.pdf) |  John Laurent | 632 |
| 456 | IJHS-22-1987-Issue-3 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_3_9_BookReviews.pdf) |   | 57 |
| 457 | IJHS-22-1987-Issue-3 | Metallurgy | Indic | [Supplement: Rasa Ratna Samuccaya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_3_10_Supplement_RasaRatnaSamuccaya.pdf) |   | 1612 |
| 458 | IJHS-22-1987-Issue-4 | Other | Indic | [Contribution to Weather Science in Ancient India. VIII— Observation and Measurement of Meteorological Parameters in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_4_1_ASRamanathan.pdf) |  A S Ramanathan | 152 |
| 459 | IJHS-22-1987-Issue-4 | Agriculture | Indic | [Three Important Vedic Grasses](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_4_2_SMahdihassan.pdf) |  S Mahdihassan | 215 |
| 460 | IJHS-22-1987-Issue-4 | MindSciences | Indic | [Neurology in Ancient India: Ajna Cakra— A Physiological Reality](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_4_3_BCJoshi.pdf) |  B C Joshi | 349 |
| 461 | IJHS-22-1987-Issue-4 | Other | Indic | [Development of Engineering and Technology in India from 1000 BC to 1000 AD as revealed in Rajatarangini](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_4_4_RPKulkarni.pdf) |  R P Kulkarni | 201 |
| 462 | IJHS-22-1987-Issue-4 | Other | Indic | [Specifications for Brick Masonry according to Samarangana Sutradhara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_4_5_RPKulkarni.pdf) |  R P Kulkarni | 59 |
| 463 | IJHS-22-1987-Issue-4 | Medicine | Indic | [Anthelmintic Plants in Traditional Remedies in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_4_6_BNMehrotra.pdf) |  Ved Prakash and B N Mehrotra | 144 |
| 464 | IJHS-22-1987-Issue-4 | Other | Western | [Why did the Scientific Revolution take place in Europe and not elsewhere?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_4_7_VSingh.pdf) |  Virendra Singh | 204 |
| 465 | IJHS-22-1987-Issue-4 | Philosophy | Western | [Science and Divine Philosophy in the Seventeenth Century Europe](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_4_8_SPGupta.pdf) |  S P Gupta | 68 |
| 466 | IJHS-22-1987-Issue-4 | Math | Indic | [Todaramala of Jaipur (A Jaina Philosopher– Mathematician)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol22_4_9_RKTrivedi.pdf) |  R K Trivedi | 395 |
| 467 | IJHS-24-1989-Issue-1 | Lingiustics | Other | [Some Early Codes and Ciphers](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_1_1_SCKak.pdf) |  Subhas K Kak | 82 |
| 468 | IJHS-24-1989-Issue-1 | Other | Other | [The Schlagintweit Collections](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_1_2_GArmitage.pdf) |  G Armitage | 1890 |
| 469 | IJHS-24-1989-Issue-1 | Astronomy | Indic | [Development of Hindu Astro–Mathematical Sciences in Mithila](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_1_3_PJha.pdf) |  Parameshwar Jha | 153 |
| 470 | IJHS-24-1989-Issue-1 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_1_4_BookReview.pdf) |   | 29 |
| 471 | IJHS-24-1989-Issue-1 | Medicine | Indic | [Supplement: Rasa Ratna Sammuccaya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_1_5_Supplement.pdf) |   | 684 |
| 472 | IJHS-24-1989-Issue-2 | Astronomy | Arabic | [Seth Ward and Ghulam Husain’s Problem for Determining the Place of a Planet](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_2_1_SAHRizvi.pdf) |  Syed Aftab Husain Rizvi | 108 |
| 473 | IJHS-24-1989-Issue-2 | Culture | Indic | [The History of Paper in India Upto 1948](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_2_2_SSeshan.pdf) |  Sita Ramaseshan | 582 |
| 474 | IJHS-24-1989-Issue-2 | Lingiustics | Other | [Evidence for Proto–Indian Origin of the Easter Island Writing System](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_2_3_BSzalek.pdf) |  Benon Zb Szalek | 185 |
| 475 | IJHS-24-1989-Issue-2 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_2_4_BookReviews.pdf) |   | 38 |
| 476 | IJHS-24-1989-Issue-2 | Medicine | Indic | [Supplement: Rasa Ratna Sammuccaya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_1_5_Supplement.pdf) |   | 684 |
| 477 | IJHS-24-1989-Issue-3 | MindSciences | Indic | [Sriyantra— The Ancient Intrument to Control the Psychophisiological State of Man](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_3_1_APKulaichev.pdf) |  Alexey Pavlovich Kulaichev and Dina Mikhailovna Ramendic | 270 |
| 478 | IJHS-24-1989-Issue-3 | Culture | Indic | [A Fresh Glimse on the Date of Mahabharata](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_3_2_SAParamhans.pdf) |  S A Paramhans | 89 |
| 480 | IJHS-24-1989-Issue-3 | Math | Indic | [Vedic Mathematics— Mathematical Calculations Based on the Vedic Sutras and on the Lilavati](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_3_4BBLal.pdf) |  B B Lal | 61 |
| 481 | IJHS-24-1989-Issue-3 | Math | Indic | [System Theory in Jaina School of Mathematics–II](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_3_5_LCJain.pdf) |  L C Jain | 255 |
| 482 | IJHS-24-1989-Issue-3 | Culture | Fareast | [A Comparitive Study of Chinese Cosmology–cum–Humorology with Eight Elements](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_3_6_SMahadihassan.pdf) |  S Mahdihassan | 72 |
| 483 | IJHS-24-1989-Issue-3 | Astronomy | Indic | [Transit of Mercury 1651: The Earliest Telescopic Observation in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_3_7_RKKochhar.pdf) |  R K Kochhar | 95 |
| 484 | IJHS-24-1989-Issue-3 | Other | Indic | [History of Science in India: In the Search of a Paradigm](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_3_8_AKBiswas.pdf) |  Sulekha Biswas and Arun Kumar Biswas | 175 |
| 485 | IJHS-24-1989-Issue-3 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_3_9_BookReviews.pdf) |   | 67 |
| 486 | IJHS-24-1989-Issue-3 | Other | Other | [News: Projects Reviewed and Approved duing 1988–89](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_3_10_ProjectsRenewed.pdf) |   | 43 |
| 487 | IJHS-24-1989-Issue-3 | Medicine | Indic | [Supplement: Rasa Ratna Sammuccaya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_1_5_Supplement.pdf) |   | 684 |
| 488 | IJHS-24-1989-Issue-4 | Astronomy | Indic | [The Yuga of the Yavanajataka–David Pingree’s Text and Translation Reviewed](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_4_1_KSShukla.pdf) |  K S Shukla | 179 |
| 489 | IJHS-24-1989-Issue-4 | Other | Indic | [Development of Technical Education in India and State Policy—A Historical Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_4_2_BSen.pdf) |  Biman Sen | 524 |
| 490 | IJHS-24-1989-Issue-4 | Math | Western | [Non–Euclidean Geometry from Early Times to Beltrami](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_4_3_TRChandrasekhar.pdf) |  T R Chandrasekhar | 131 |
| 491 | IJHS-24-1989-Issue-4 | Astronomy | Indic | [Madras Meridian Circle Observations of Fixed Stars during 1862–1887](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_4_4_SNSen.pdf) |  S N Sen | 466 |
| 492 | IJHS-24-1989-Issue-4 | Other | Indic | [A Survey of Research and Development in Electronics and Telecommunication in India Over a Century (1850–1950)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_4_5_MCMallik.pdf) |  Late M C Mallick | 712 |
| 493 | IJHS-24-1989-Issue-4 | Other | Indic | [Chemical Research in India During Nineteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_4_6_ABasu.pdf) |  Aparajito Basu | 183 |
| 494 | IJHS-24-1989-Issue-4 | Other | Indic | [Weighing Devices in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_4_7_VLSharma.pdf) |  Vijaya Lakshmi Sharma and H C Bhardwaj | 129 |
| 495 | IJHS-24-1989-Issue-4 | Medicine | Indic | [The Five Souls of Indian Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_4_8_SMahadihassan.pdf) |  S Mahdihassan | 63 |
| 496 | IJHS-24-1989-Issue-4 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_4_9_BookReview.pdf) |  C K Majumdar | 47 |
| 497 | IJHS-24-1989-Issue-4 | Astronomy | Indic | [Report: Seminar on Astronomy and Mathematics in Ancient and Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_4_10_Report.pdf) |  S N Sen | 109 |
| 498 | IJHS-24-1989-Issue-4 | Medicine | Indic | [Supplement: Rasa Ratna Sammuccaya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol24_4_11_Supplement.pdf) |   | 427 |
| 499 | IJHS-25-1990-Issue-1to4 | Math | Indic | [The Phases of Magic Square of Three](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol25_1to4_1_SMahdihassan.pdf) |  S Mahdihassan | 52 |
| 500 | IJHS-25-1990-Issue-1to4 | Math | Indic | [Ritual Geometry in India and its Parallelism in Other Cultures](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol25_1to4_2_AKBag.pdf) |  A K Bag | 223 |
| 501 | IJHS-25-1990-Issue-1to4 | Medicine | Indic | [Ali Ibn Rabban At Tabari‚ A Ninth Century Arab Physician, on the Ayurveda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol25_1to4_3_MSKhan.pdf) |  M S Khan | 208 |
| 502 | IJHS-25-1990-Issue-1to4 | Astronomy | Arabic | [Zij–I–Muhammad and the Tables of De La Hire](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol25_1to4_4_VNSharma.pdf) |  Virendra Nath Sharma | 192 |
| 503 | IJHS-25-1990-Issue-1to4 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol25_1to4_5_NewsProjectsapprovedNewpublication.pdf) |   | 109 |
| 504 | IJHS-25-1990-Issue-1to4 | Astronomy | Indic | [Supplement—Laghumanasa of Manjula](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol25_1to4_6_SupplementLaghumanasa.pdf) |   | 2361 |
| 505 | IJHS-26-1991-Issue-1 | Astronomy | Indic | [Misidentification of some Indian Naksatras](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_1_1_KDAbhyankar.pdf) |  K D Abhyankar | 160 |
| 506 | IJHS-26-1991-Issue-1 | Philosophy | Indic | [The Vedic Gods Agni‚ Indra and Soma as Interrelated: A Study of Soma](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_1_2_SMahdihassan.pdf) |  S Mahadihassan | 81 |
| 507 | IJHS-26-1991-Issue-1 | Math | Indic | [The Pratyayas: Indian Contribution to Combinatorics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_1_3_SRSarma.pdf) |  L Alsdorf | 630 |
| 508 | IJHS-26-1991-Issue-1 | Astronomy | Indic | [Astronomy in Ancient India— Its Importance‚ Insight and Prevelance](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_1_4_SAParamhans.pdf) |  S A Paramhans | 118 |
| 509 | IJHS-26-1991-Issue-1 | Astronomy | Indic | [Some Studies on Varahamihira](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_1_5_AKChakraborty.pdf) |  A K Chakravaty | 107 |
| 510 | IJHS-26-1991-Issue-1 | Agriculture | Indic | [Level of Agricultural Technology in India (1757–1857)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_1_6_SSangwan.pdf) |  S Sangwan | 674 |
| 511 | IJHS-26-1991-Issue-1 | Astronomy | Indic | [Radha Gobinda Chandra— A Pioneer in Astronomical Observations in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_1_7_ABandyopandhyay.pdf) |  A Bandyopadhyay | 175 |
| 512 | IJHS-26-1991-Issue-1 | Astronomy | Indic | [Book Review: Vatesvara Siddhanta and Gola of Vatesvara by K S Shukla](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol26_1_8_BookReview.pdf) |  D Pingree | 111 |
| 513 | IJHS-26-1991-Issue-2 | Biology | Indic | [Alcoholic Fermentation and its Products in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_2_1_KTAcharya.pdf) |  K T Achaya | 104 |
| 514 | IJHS-26-1991-Issue-2 | Medicine | Indic | [The Word Kohala in Susruta and Term Alcool–Vini of Paracelsus](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_2_2_SMahdihassan.pdf) |  S Mahadihassan | 34 |
| 515 | IJHS-26-1991-Issue-2 | Metallurgy | Indic | [Minerals and Gems in Indian Alchemy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_2_3_MRay.pdf) |  Mira Ray | 313 |
| 516 | IJHS-26-1991-Issue-2 | Agriculture | Indic | [Arbori–Horticulture: As Known in the Puranas](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_2_4_MChaudhuri.pdf) |  M Chaudhuri | 65 |
| 517 | IJHS-26-1991-Issue-2 | Culture | Indic | [Dyeing Agents in India A D 1200–1800](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_2_5_HKNaqvi.pdf) |  H K Naqvi | 272 |
| 518 | IJHS-26-1991-Issue-2 | Math | Indic | [Yuktibhasa of Jyesthadeva](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_2_6_KVSarma.pdf) |  K V Sarma and S Hariharan | 316 |
| 519 | IJHS-26-1991-Issue-2 | Astronomy | Indic | [The Kapala Yantras of Sawai Jai Singh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_2_7_VNSharma.pdf) |  V N Sharma | 135 |
| 520 | IJHS-26-1991-Issue-2 | Metallurgy | Indic | [Optical Glass: Its Manufacture in India— A Historical Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_2_8_AKSaxena.pdf) |  A K Saxena‚ A Vagiswari and M Manjula | 176 |
| 521 | IJHS-26-1991-Issue-2 | Astronomy | Indic | [News: Seminar on Indian Astronomy and Jai Singh— A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_2_9_NewsIHCongress.pdf) |  S M R Ansari | 27 |
| 522 | IJHS-26-1991-Issue-3 | Medicine | Indic | [An Anonymous Treatise on Pathyapathya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_3_1_PVSharma.pdf) |  P V Sharma | 229 |
| 523 | IJHS-26-1991-Issue-3 | Astronomy | Indic | [Precision Instruments of Sawai Jai Singh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_3_2_VNSharma.pdf) |  V N Sharma | 508 |
| 524 | IJHS-26-1991-Issue-3 | Other | Other | [Europe–India Telegraph “Bridge” via the Caucasus](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_3_3_AKarbelashvili.pdf) |  A Karbelashvili | 90 |
| 525 | IJHS-26-1991-Issue-3 | Other | Western | [Newton’s Physics in the Context of His Works on Chemistry and Alchemy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_3_4_PKBasu.pdf) |  P K Basu | 492 |
| 526 | IJHS-26-1991-Issue-3 | Medicine | Indic | [Supplement: Rasa Ratna Samuccaya (Part II)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_3_5_SupplementRasaratnasamucchaya.pdf) |   | 386 |
| 527 | IJHS-26-1991-Issue-4 | Metallurgy | Indic | [Metallurgy of Iron and Steel Making and Blacksmithy in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_4_1_BPrakash.pdf) |  B Prakash | 449 |
| 528 | IJHS-26-1991-Issue-4 | Astronomy | Indic | [A Consolidated Symbol of Cosmology](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_4_2_SMahdihassan.pdf) |  S Mahadihassan | 37 |
| 529 | IJHS-26-1991-Issue-4 | Astronomy | Indic | [A Comparative Study on Cometary Records from the Brhat Samhita and Bhadrabahu Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_4_3_NKChandel.pdf) |  N K Chandel and S Sharma | 111 |
| 530 | IJHS-26-1991-Issue-4 | Astronomy | Indic | [Mean Sun and Moon in Ancient Greek and Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_4_4_GAbraham.pdf) |  George Abraham | 64 |
| 531 | IJHS-26-1991-Issue-4 | Philosophy | Other | [Realism in Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_4_5_SPGupta.pdf) |  S P Gupta | 59 |
| 532 | IJHS-26-1991-Issue-4 | Other | Other | [Supplements](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol26_4_6_SupplementsPanchavimsatika.pdf) |   | 1078 |
| 533 | IJHS-27-1992-Issue-1 | Culture | Fareast | [The Five Elements of Chinese Cosmology in the Light of Dialectism](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_1_1_SMahdihassan.pdf) |  S Mahdihassan | 41 |
| 534 | IJHS-27-1992-Issue-1 | Agriculture | Indic | [Indian Oilpress (Ghani)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_1_2_KTAchaya.pdf) |  K T Acharya | 131 |
| 535 | IJHS-27-1992-Issue-1 | Medicine | Indic | [Yogaratnakara— An Important Source Book in Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_1_3_NSaxena.pdf) |  Nirmal Saxena | 188 |
| 536 | IJHS-27-1992-Issue-1 | Agriculture | Indic | [Krsi– Parasara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_1_4_KAChowdhury.pdf) |  Kafil Ahmed Chowdhury | 337 |
| 537 | IJHS-27-1992-Issue-1 | Math | Indic | [Magic Squares in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_1_5_BDatta.pdf) |  Bibhutibhusan Datta and Awadhesh Narayan Singh | 1067 |
| 538 | IJHS-27-1992-Issue-2 | Metallurgy | Indic | [Vangastambhanasodhanam: A Chapter on Metallurgy of Tin in Sanskrit Alchemical Text ‘Rasopanisad’](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_2_1_VDeshpande.pdf) |  Vijaya Deshpande | 158 |
| 539 | IJHS-27-1992-Issue-2 | Agriculture | Indic | [Horseshoeing in Mughal India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_2_2_AJQaisar.pdf) |  A Jan Qaisar | 220 |
| 540 | IJHS-27-1992-Issue-2 | Culture | Indic | [Science versus Technology: The Early Years of Kala Bhawan, Baroda 1890–1896](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_2_3_MMehta.pdf) |  Makrand Mehta | 351 |
| 541 | IJHS-27-1992-Issue-2 | Culture | Indic | [Origin of India's National Science Policy: M L Sircar to M K Gandhi, 1875–1935](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_2_4_JNSinha.pdf) |  Jagdish N Sinha | 201 |
| 542 | IJHS-27-1992-Issue-2 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_2_5_BookReviews.pdf) |  Deepak Kumar | 40 |
| 543 | IJHS-27-1992-Issue-2 | Other | Other | [New Publications](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_2_6_NewPublications.pdf) |   | 21 |
| 544 | IJHS-27-1992-Issue-3 | Philosophy | Indic | [Fabric of Life: Paryapati Pranapana in Jaina Agama](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_3_1_JCSikdar.pdf) |  J C Sikdar | 107 |
| 545 | IJHS-27-1992-Issue-3 | Math | Indic | [Use of Permutations and Combinations in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_3_2_BDatta.pdf) |  Bibhutibhusan Datta and Awadhesh Narayan Singh | 217 |
| 546 | IJHS-27-1992-Issue-3 | Other | Indic | [Gemmology in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_3_3_RKrishnamurthy.pdf) |  Radha Krishnamurthy | 134 |
| 547 | IJHS-27-1992-Issue-3 | Metallurgy | Arabic | [Study of Muslim Alchemy in the Medieval Ages & some Valuable Chemicals Transmitted to Modern Chemistry](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_3_4_ASaeed.pdf) |  Aftab Saeed | 233 |
| 548 | IJHS-27-1992-Issue-3 | Biology | Indic | [Role of Ram Bramha Sanyal in Initiating Zoological Researches on the Animals in Captivity](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_3_5_DKMittra.pdf) |  D K Mittra | 170 |
| 549 | IJHS-27-1992-Issue-3 | Other | Indic | [The First Indian Aeronaut](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_3_6_AGhosh.pdf) |  Amitabha Ghosh | 319 |
| 550 | IJHS-27-1992-Issue-3 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_3_7_News.pdf) |   | 32 |
| 551 | IJHS-27-1992-Issue-3 | Metallurgy | Indic | [Supplement: Rasa Ratna Samuccaya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_3_8_Supplement_RasaRatnaSamuccaya.pdf) |  D Joshi | 616 |
| 552 | IJHS-27-1992-Issue-4 | Culture | Indic | [Factors in the Develoment of Scientific Research in India between 1906 and 1930](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_1_SNSen.pdf) |  S N Sen | 144 |
| 553 | IJHS-27-1992-Issue-4 | Math | Indic | [Development of Mathematical Sciences in India during the Twentieth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_2_JNKapur.pdf) |  J N Kapur | 265 |
| 554 | IJHS-27-1992-Issue-4 | Other | Western | [Luminescence and Allied Phenomena](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_3_HNBose.pdf) |  H N Bose | 165 |
| 555 | IJHS-27-1992-Issue-4 | Other | Western | [Solid State Physics: 1900–1980](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_4_CKMajumdar.pdf) |  C K Majumdar | 241 |
| 556 | IJHS-27-1992-Issue-4 | Astronomy | Indic | [Pattern of Research in India on Theoritical Astronomy and Astrophysics during period 1900–1980](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_5_AKRaychaudhuri.pdf) |  A K Raychaudhuri | 87 |
| 557 | IJHS-27-1992-Issue-4 | Other | Indic | [Evolution of Continental Crust of India: Growth of Knowledge. 1900–1980 — A Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_6_AKSaha.pdf) |  A K Saha | 48 |
| 558 | IJHS-27-1992-Issue-4 | Agriculture | Indic | [Progress in Indian Agriculture: 1900–1980](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_7_SKMukherjee.pdf) |  S K Mukherjee | 131 |
| 559 | IJHS-27-1992-Issue-4 | Other | Indic | [Development of Inorganic Chemistry in India during 1900–1980](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_8_RCMehrotra.pdf) |  R C Mehrotra | 115 |
| 560 | IJHS-27-1992-Issue-4 | Other | Indic | [Mineral Exploration in the Twentieth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_9_SKMukerjee.pdf) |  S K Mukerjee | 274 |
| 561 | IJHS-27-1992-Issue-4 | Other | Indic | [Progress in Telecommunications and R & D during Post–war Years (1945–84) — A Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_10_JDas.pdf) |  J Das | 122 |
| 562 | IJHS-27-1992-Issue-4 | Astronomy | Indic | [Space Science in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_11_RRDaniel.pdf) |  R R Daniel | 222 |
| 563 | IJHS-27-1992-Issue-4 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_12_BookReviews.pdf) |   | 68 |
| 564 | IJHS-27-1992-Issue-4 | Other | Other | [Orbituary: S N Sen](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_13_Obituary_SNSen.pdf) |   | 56 |
| 565 | IJHS-27-1992-Issue-4 | Other | Other | [Erratum](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_16_Erratum.pdf) |   | 45 |
| 566 | IJHS-27-1992-Issue-4 | Astronomy | Indic | [Supplement: Bibliography of Physics, Astronomy, Astrophysics and Geophysics in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol27_4_17_SupplementBibliographyofPhysics.pdf) |   | 521 |
| 567 | IJHS-28-1993-Issue-1 | Astronomy | Indic | [A Search for the Earliest Vedic Calender](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_1_1_KDAbhyankar.pdf) |  K D Abhyankar | 209 |
| 568 | IJHS-28-1993-Issue-1 | Astronomy | Indic | [Astronomy of the Satapatha Brahmana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_1_2_SCKak.pdf) |  Subhash C Kak | 297 |
| 569 | IJHS-28-1993-Issue-1 | Metallurgy | Indic | [A Fragment of the Lauhasastra of Nagarjuna](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_1_3_PVSharma.pdf) |  P V Sharma | 253 |
| 570 | IJHS-28-1993-Issue-1 | Astronomy | Indic | [Pratibimba Siddhanta of Jai Singh’s Library](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_1_4_VNSharma.pdf) |  V N Sharma | 82 |
| 571 | IJHS-28-1993-Issue-1 | Astronomy | Indic | [Two Mughal Celestial Globes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_1_5_SRSarma.pdf) |  S R Sarma‚ S M R Ansari and A G Kulkarni | 350 |
| 572 | IJHS-28-1993-Issue-1 | Biology | Indic | [Birbal Sahni and India– Madagascar Fit](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_1_6_SChandra.pdf) |  Sanjay Chandra | 54 |
| 573 | IJHS-28-1993-Issue-1 | Other | Other | [Supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_1_7_SupplementBibliographyofPhysics.pdf) |   | 1873 |
| 574 | IJHS-28-1993-Issue-2 | Culture | Indic | [The Structure of the Rgveda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_2_1_SCKak.pdf) |  Subhash C Kak | 141 |
| 575 | IJHS-28-1993-Issue-2 | Math | Indic | [Sundararaja’s Improvements of Vedic Circle–Square Conversions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_2_2_RCGupta.pdf) |  R C Gupta | 276 |
| 576 | IJHS-28-1993-Issue-2 | Math | Indic | [Use of Series in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_2_3_BDatta.pdf) |  B Datta and A N Singh | 317 |
| 577 | IJHS-28-1993-Issue-2 | Astronomy | Indic | [Sawai Jai Singh’s Hindu Astronomers](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_2_4_VNSharma.pdf) |  V N Sharma | 456 |
| 578 | IJHS-28-1993-Issue-2 | Astronomy | Indic | [Account by Joseph Dubois of Astronomical Work under Jai Singh Sawai](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_2_5_RMercier.pdf) |  Raymond Mercier | 169 |
| 579 | IJHS-28-1993-Issue-2 | Other | Indic | [Golak Chandra: India’s Pioneer Innovator Technician](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_2_6_AGhosh.pdf) |  Amitabha Ghosh | 405 |
| 580 | IJHS-28-1993-Issue-2 | Math | Indic | [Book Review: Glimpses of India’s Statistical Heritage by J K Ghosh‚ S K Mitra and K R Parthasarthy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_2_7_BookReview.pdf) |  J N Kapur | 70 |
| 581 | IJHS-28-1993-Issue-2 | Other | Other | [Supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_2_8_SupplementBiblographyofPhysics.pdf) |   | 2214 |
| 582 | IJHS-28-1993-Issue-3 | Astronomy | Indic | [Development of Astronomical Observation in Vedic and Post–Vedic India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_3_1_YOhashi.pdf) |  Yukio Ohashi | 1027 |
| 583 | IJHS-28-1993-Issue-3 | Math | Indic | [Surds in Hindu Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_3_2_BDatta.pdf) |  B Datta and A N Singh | 166 |
| 584 | IJHS-28-1993-Issue-3 | Math | Indic | [Approximate Values of Surds in Hindu Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_3_3_BDatta.pdf) |  B Datta and A N Singh | 111 |
| 585 | IJHS-28-1993-Issue-3 | Other | Indic | [Life and Works of Puran Singh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_3_4_HSVirk.pdf) |  H S Virk | 168 |
| 586 | IJHS-28-1993-Issue-3 | Other | Other | [News](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol28_3_5_News.pdf) |   | 42 |
| 587 | IJHS-28-1993-Issue-4 | Lingiustics | Indic | [Formalisation and Orality in Panini’s Astadhyayi](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_4_1_PSFilliozat.pdf) |  P S Filliozat | 172 |
| 588 | IJHS-28-1993-Issue-4 | Astronomy | Indic | [Constant–Set (Dhruva–Rasi) Technique in Jaina School of Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_4_2_LCJain.pdf) |  L C Jain and K P Jain | 103 |
| 589 | IJHS-28-1993-Issue-4 | Metallurgy | Indic | [The Primacy of India in Ancient Brass and Zinc Metallurgy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_4_3_AKBiswas.pdf) |  A K Biwas | 398 |
| 590 | IJHS-28-1993-Issue-4 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_4_4_BookReviewsAKBiswasAndARahman.pdf) |   | 72 |
| 591 | IJHS-28-1993-Issue-4 | Other | Other | [Supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol28_4_5_SupplementBibliographyofPhysics.pdf) |   | 2284 |
| 592 | IJHS-29-1994-Issue-1 | Culture | Indic | [Calcutta: The Emergence of a Science City (1784–1856)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_1_DKumar.pdf) |  Deepak Kumar | 127 |
| 593 | IJHS-29-1994-Issue-1 | Other | Western | [William O’Shaughnessy – An Innovator and Entrepreneur](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_2_SGhose.pdf) |  Saroj Ghose | 226 |
| 594 | IJHS-29-1994-Issue-1 | Other | Western | [John Henry Pratt‚ Archdeacon of Calcutta and His Theory of Isostatic Compensation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_3_MKahali.pdf) |  Manidipa Kahali | 123 |
| 595 | IJHS-29-1994-Issue-1 | Medicine | Indic | [Madhusudan Gupta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_4_DBose.pdf) |  Debasis Bose | 162 |
| 596 | IJHS-29-1994-Issue-1 | Other | Indic | [The Pioneering Role of Calcutta in Scientific and Technical Education in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_5_SNSen.pdf) |  S N Sen | 117 |
| 597 | IJHS-29-1994-Issue-1 | Other | Indic | [Calcutta University and Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_6_SCGhosh.pdf) |  S C Ghosh | 193 |
| 598 | IJHS-29-1994-Issue-1 | Other | Indic | [Some Eminent Indian Pioneers in the Field of Technology](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_7_AGhosh.pdf) |  Amitabha Ghosh | 243 |
| 599 | IJHS-29-1994-Issue-1 | Other | Western | [Reverend Father Eugene Lafont and the Scientific Activity of St Xaviers College](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_8_AKBiswas.pdf) |  Arun Kumar Biswas | 204 |
| 600 | IJHS-29-1994-Issue-1 | Math | Indic | [Mahalanobis and the Art and Science of Statistics: The Early Days](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_9_JKGhosh.pdf) |  J K Ghosh | 159 |
| 601 | IJHS-29-1994-Issue-1 | Other | Indic | [Meghnad Saha – The Scientist and the Institution Builder](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_10_SChatterjee.pdf) |  Santimay Chatterjee | 180 |
| 602 | IJHS-29-1994-Issue-1 | Other | Indic | [Four Calcuttans in Defence of Scientific Temper](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_11_DChattopadhyaya.pdf) |  Debiprasad Chattopadhyay | 128 |
| 603 | IJHS-29-1994-Issue-1 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_12_News.pdf) |   | 66 |
| 604 | IJHS-29-1994-Issue-1 | Other | Indic | [Supplement: On the Desirability of a National Institution for the Cultivation of the Sciences by the Natives of India (1872–1876)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_1_13_Supplement.pdf) |  Mahendralal Sircar | 633 |
| 605 | IJHS-29-1994-Issue-2 | Other | Indic | [Vaidurya‚ Marakata and Other Beryl Family Gem Minerals: Etymology and Traditions in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_2_2_AKBiswas.pdf) |  Arun Kumar Biswas | 700 |
| 606 | IJHS-29-1994-Issue-2 | Astronomy | Indic | [Astronomical Instruments in Classical Siddhantas](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_2_3_YOhashi.pdf) |  Yukio Ohashi | 2055 |
| 607 | IJHS-29-1994-Issue-2 | Metallurgy | Indic | [Sulbarakalikacchedah: Medieval Methods for Cleansing Metal Surfaces and Removing Tarnishes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_2_4_VDeshpande.pdf) |  Vijaya Deshpande | 180 |
| 608 | IJHS-29-1994-Issue-2 | Other | Western | [D’Apres De Mannevillette Captain and Hydrographer to the French East India Company (1707–1780)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_2_5_MFilliozat.pdf) |  Manonmani Filliozat | 218 |
| 609 | IJHS-29-1994-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_2_6_News.pdf) |   | 118 |
| 610 | IJHS-29-1994-Issue-3 | Metallurgy | Indic | [Carburisation of Iron in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_3_1_SKBhatia.pdf) |  S K Bhatia | 135 |
| 611 | IJHS-29-1994-Issue-3 | Other | Indic | [Metrology and Coinage in Ancient India and Contemporary World](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_3_2_NGDongre.pdf) |  N G Dongre | 161 |
| 612 | IJHS-29-1994-Issue-3 | Lingiustics | Indic | [Evolution of Early Writing in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_3_3_SCKak.pdf) |  Subhash C Kak | 219 |
| 613 | IJHS-29-1994-Issue-3 | Other | Indic | [Gem—Minerals in Pre–Modern India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_3_4_AKBiswas.pdf) |  Arun Kumar Biswas | 498 |
| 614 | IJHS-29-1994-Issue-3 | Metallurgy | Indic | [Metallurgy and Traditional Metal Crafts in Tamil Nadu](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_3_5_VRamaswamy.pdf) |  Vijaya Ramaswamy | 193 |
| 615 | IJHS-29-1994-Issue-3 | Astronomy | Indic | [Misra Yantra of the Delhi Observatory](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_3_6_VNSharma.pdf) |  Virendra Nath Sharma | 207 |
| 616 | IJHS-29-1994-Issue-3 | Philosophy | Other | [Obituary: Debiprasad Chattopadhaya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_3_7_Obituary.pdf) |  A K Chakravarty | 56 |
| 617 | IJHS-29-1994-Issue-3 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_3_8_News.pdf) |   | 65 |
| 618 | IJHS-29-1994-Issue-4 | Astronomy | Indic | [Planets in the Vedic Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_4_1_DFrawley.pdf) |  Davis Frawley | 147 |
| 619 | IJHS-29-1994-Issue-4 | Astronomy | Indic | [Indian Astronomical and Time–Measuring Instruments: A Catalogue in Preparation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_4_2_SRSarma.pdf) |  Sreeramula Rajeswara Sarma | 465 |
| 620 | IJHS-29-1994-Issue-4 | Math | Indic | [Solutions of Linear Algebraic Equations and Sums of Fraction–Additions Using Sutra Method](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_4_3_SDas.pdf) |  S Das | 333 |
| 621 | IJHS-29-1994-Issue-4 | Math | Indic | [Indeterminate Analysis in the Context of the Mahasiddhanta of Aryabhata II](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_4_4_VNJha.pdf) |  V N Jha | 152 |
| 622 | IJHS-29-1994-Issue-4 | Metallurgy | Indic | [Iron and Steel in Pre–Modern India—A Critical Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_4_5_AKBiswas.pdf) |  Arun Kumar Biswas | 423 |
| 623 | IJHS-29-1994-Issue-4 | Astronomy | Indic | [Dhvantapramapaka Yantra of Maharsi Bharadvaja](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_4_6_NGDongre.pdf) |  N G Dongre | 329 |
| 624 | IJHS-29-1994-Issue-4 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol29_4_9_News.pdf) |   | 70 |
| 625 | IJHS-30-1995-Issue-1 | Biology | Indic | [The Effect of Knowledge of Indian Biota on Ecological Thought](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_1_1_JDHughes.pdf) |  J Donald Hughes | 163 |
| 626 | IJHS-30-1995-Issue-1 | Math | Fareast | [Sungka Mathematics ofg the Philippines](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_1_2_PManansala.pdf) |  Paul Manansala | 237 |
| 627 | IJHS-30-1995-Issue-1 | Astronomy | Indic | [On The Meaning of the Mula Naksatra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_1_3_NCRana.pdf) |  N C Rana and R K Kochhar | 65 |
| 628 | IJHS-30-1995-Issue-1 | Math | Indic | [Polygonal Approximation to Circle and Madhavacarya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_1_4_AMukhopadhyay.pdf) |  A Mukhopadhyay and M R Adhikari | 170 |
| 629 | IJHS-30-1995-Issue-1 | Other | Western | [Making Mountains out of Molehills? George Everest and Henry Barrow, 1830-39](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_1_5_JInsley.pdf) |  Jane Insley | 147 |
| 630 | IJHS-30-1995-Issue-1 | Astronomy | Indic | [The Method for Finding out the Number of Moons and their Families in the Tiloyapannatti](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_1_6_LCJain.pdf) |  L C Jain and Kumari Prabha Jain | 192 |
| 631 | IJHS-30-1995-Issue-1 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_1_7_BookReview.pdf) |   | 51 |
| 632 | IJHS-30-1995-Issue-1 | Other | Indic | [A National Report on Studies in HOS in India (1990-93)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_1_8_ReviewReport.pdf) |   | 208 |
| 633 | IJHS-30-1995-Issue-2to4 | Other | Indic | [Kattamaran in South Kerala— A Study of Constructional Techniques](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_2and3and4_1_APGreeshmalatha.pdf) |  A P Greeshmalatha and G V Rajamanickam | 562 |
| 634 | IJHS-30-1995-Issue-2to4 | Astronomy | Indic | [Certain Special Features of the Ancient Jaina Calender](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_2and3and4_2_LCJain.pdf) |  L C Jain and Kumari Prabha Jain | 459 |
| 635 | IJHS-30-1995-Issue-2to4 | Other | Arabic | [Tabaqat Al–Umam of Qadi Sai–id Al–Andalusi (1029-1070)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_2and3and4_3_MSKhan.pdf) |  M S Khan | 349 |
| 636 | IJHS-30-1995-Issue-2to4 | Astronomy | Indic | [Three 19th Century Calcutta Astronomers](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_2and3and4_4_AKChakravarty.pdf) |  A K Chakravarty | 137 |
| 637 | IJHS-30-1995-Issue-2to4 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_2and3and4_5_BookReviews.pdf) |   | 51 |
| 638 | IJHS-30-1995-Issue-2to4 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_2and3and4_6_News.pdf) |   | 47 |
| 639 | IJHS-30-1995-Issue-2to4 | Other | Indic | [SupplementHistory of Magnetic Studies in India 1850to1980-— A Bibliography](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol30_2and3and4_7_Supplementary_HistoryofMagneticStudiesinIndia.pdf) |  Jayanta Sthanapati and S N Sen | 3495 |
| 640 | IJHS-31-1996-Issue-1 | Astronomy | Other | [Evolution of Dating System](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_1_1_AKChakravarty.pdf) |  A K Charavarty | 211 |
| 641 | IJHS-31-1996-Issue-1 | Astronomy | Indic | [Kalyuga‚ Saptarsi‚ Yudhisthra and Laukika Eras](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_1_2_KDAbhyankar.pdf) |  K D Abhyankar and G M Ballabh | 262 |
| 642 | IJHS-31-1996-Issue-1 | Astronomy | Indic | [Vikrama Era](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_1_3_AMShastri_vikrama.pdf) |  Ajay Mitra Shastri | 589 |
| 643 | IJHS-31-1996-Issue-1 | Astronomy | Indic | [Saka Era](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_1_4_AMShastri_Saka.pdf) |  Ajay Mitra Shastri | 445 |
| 644 | IJHS-31-1996-Issue-1 | Astronomy | Indic | [Bengali San](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_1_5_ABhattacharyya.pdf) |  Amitabha Bhattacharyya | 63 |
| 645 | IJHS-31-1996-Issue-1 | Astronomy | Indic | [Kollam Era](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_1_6_KVSarma.pdf) |  K V Sarma | 94 |
| 646 | IJHS-31-1996-Issue-1 | Other | Other | [News and Seminar Publications](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_1_7_NewsSeminarPublications.pdf) |   | 94 |
| 647 | IJHS-31-1996-Issue-1 | Other | Indic | [Supplement: History of Magnetic Studies in India 1850–1980](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_1_8_SupplementBibliographyon MagneticStudies.pdf) |  Jayanta Sthanapati | 2752 |
| 648 | IJHS-31-1996-Issue-2 | Culture | Indic | [Original Concept of Soma](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_2_1_PVSharma.pdf) |  P V Sharma | 323 |
| 649 | IJHS-31-1996-Issue-2 | Biology | Indic | [A Botanical Account of Valmiki’s Pancavati](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_2_2_KHKrishnamurthy.pdf) |  K H Krishnamurthy | 388 |
| 650 | IJHS-31-1996-Issue-2 | Math | Indic | [Theorem of Square on the Diagonal in Vedic Geometry and its Application](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_2_3_VMishra.pdf) |  V Mishra and S L Singh | 104 |
| 651 | IJHS-31-1996-Issue-2 | Agriculture | Indic | [Emergence of Vrksayurveda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_2_4_LGopal.pdf) |  Lallanji Gopal | 83 |
| 652 | IJHS-31-1996-Issue-2 | Other | Indic | [Sanskrit Geographical Tables](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_2_5_DPingree.pdf) |  David Pingree | 460 |
| 653 | IJHS-31-1996-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_2_6_NewsMonographPublications.pdf) |   | 136 |
| 654 | IJHS-31-1996-Issue-3 | Medicine | Indic | [Embyology and Abortion in Indian Antiquity: A Brief Survey](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_3_1_HWLaale.pdf) |  H Willer Laale | 477 |
| 655 | IJHS-31-1996-Issue-3 | Other | Indic | [Sanskrit Vastu–Works on Soil–Testing](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_3_2_MBanerjee.pdf) |  Manabendu Banerjee | 156 |
| 656 | IJHS-31-1996-Issue-3 | Astronomy | Indic | [Conjunction of Jupiter with δ Cancri](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_3_3_SDSharma.pdf) |  S D Sharma | 70 |
| 657 | IJHS-31-1996-Issue-3 | Metallurgy | Indic | [A Note on Ancient Zinc Smelting in India and China](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_3_4_VDeshpande.pdf) |  Vijaya Deshpande | 76 |
| 658 | IJHS-31-1996-Issue-3 | Astronomy | Indic | [Evaluation of the Accuracy of Measurements in Indian Astronomy – I: Samanta Candrasekhara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_3_5_PKMisra.pdf) |  P K Misra | 106 |
| 660 | IJHS-31-1996-Issue-4 | Lingiustics | Indic | [Beginning of Scientific Observations: Founding of Linguistic Science in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_4_1_MJShendge.pdf) |  Malati J Shendge | 485 |
| 661 | IJHS-31-1996-Issue-4 | Culture | Indic | [Water in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_4_2_RKrishnamurthy.pdf) |  Radha Krishnamurthy | 183 |
| 662 | IJHS-31-1996-Issue-4 | Math | Indic | [Multiplication and Divisibility of Numbers – The Sutra Way](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_4_3_SDas.pdf) |  S Das | 335 |
| 663 | IJHS-31-1996-Issue-4 | Metallurgy | Indic | [Musavijnana or the Ancient Science of Crucibles](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_4_4_VJDeshpande.pdf) |  Vijaya Jayant Deshpande | 278 |
| 664 | IJHS-31-1996-Issue-4 | Biology | Indic | [JC Bose’s Views on Biological Rhythms](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_4_5_MKChandrashekaran.pdf) |  M K Chandrashekaran and R Subbaraj | 150 |
| 665 | IJHS-31-1996-Issue-4 | Agriculture | Other | [Norman Gill: The Pioneer Horticulturist of the Hills of Uttar Pradesh – A Tribute](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol31_4_6_NCShah.pdf) |  N C Shah | 155 |
| 666 | IJHS-32-1997-Issue-1 | Medicine | Indic | [Use of Metals in Ayuevedic Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_1_1_BPrakash.pdf) |  Bhanu Prakash | 600 |
| 667 | IJHS-32-1997-Issue-1 | Culture | Indic | [Traditional Sea Knowledge Prevailing among Tribes of Andaman and Nicobar Islands](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_1_2_GVRajamanickam.pdf) |  G V Rajamanickam | 461 |
| 668 | IJHS-32-1997-Issue-1 | Astronomy | Indic | [Ancient and Medieval Star Catalogues](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_1_3_GAbraham.pdf) |  George Abraham | 59 |
| 669 | IJHS-32-1997-Issue-1 | Math | Indic | [The Concept of Cyclic Quadilaterals: Its Origin and Development in India (From the Age of Sulba Sutras to Bhaskara I)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_1_4_AMukhopadhyay.pdf) |  A Mukhopadhyay and MR Adhikari | 247 |
| 670 | IJHS-32-1997-Issue-1 | Astronomy | Indic | [A Note on Kali Era](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_1_5_SKChatterjee.pdf) |  S K Chatterjee | 216 |
| 671 | IJHS-32-1997-Issue-1 | Astronomy | Indic | [A Note on the Vikrama and Saka Eras](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_1_6_BNMukherjee.pdf) |  B N Mukherjee | 102 |
| 672 | IJHS-32-1997-Issue-1 | Medicine | Indic | [Book Review: Kasyapa–Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_1_7_BookReview.pdf) |  S C Sankhyadhar | 51 |
| 673 | IJHS-32-1997-Issue-1 | Other | Other | [News](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol32_1_9_NewsandAcademyPublicationsonHOS.pdf) |   | 130 |
| 674 | IJHS-32-1997-Issue-1 | Medicine | Indic | [Supplement: Rasahrdayatantram](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol32_1_10_SupplementRasahrdayatantramCh1to10.pdf) |   | 2446 |
| 675 | IJHS-32-1997-Issue-2 | MindSciences | Indic | [On th Science of Consciousness in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_2_1_SCKak.pdf) |  Subhash C Kak | 216 |
| 676 | IJHS-32-1997-Issue-2 | Other | Other | [Stone Anchors: The Need for Methodical Recording](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_2_2_HFrost.pdf) |  Honor Frost | 102 |
| 677 | IJHS-32-1997-Issue-2 | Math | Indic | [First Degree Indeterminate Analysis in Ancient India and its Application by Virasena](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_2_3_VMishra.pdf) |  V Mishra and S L Singh | 80 |
| 678 | IJHS-32-1997-Issue-2 | Astronomy | Other | [Variable Radius Epicycle Model](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_2_4_GAbraham.pdf) |  George Abraham | 50 |
| 679 | IJHS-32-1997-Issue-2 | Other | Other | [Guru Jones—A Private Engineer in the Colonial Trap](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_2_5_AGhosh.pdf) |  Amitabha Ghosh | 313 |
| 680 | IJHS-32-1997-Issue-2 | Other | Indic | [In Quests of Early Manuscripts/ Collections Dealing with Science and Technology in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_2_6_KVSarma.pdf) |  K V Sarma | 187 |
| 681 | IJHS-32-1997-Issue-2 | Other | Other | [Book Review: Technology and the Raj by Roy McLeod and Deepak Kumar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_2_7_BookReview.pdf) |  Chittabrata Palit | 58 |
| 682 | IJHS-32-1997-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_2_8_NewsIndoPortuguesePublicationsonHOS.pdf) |   | 77 |
| 683 | IJHS-32-1997-Issue-3 | Astronomy | Indic | [True Rationale of Surya Siddhanta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_3_1_KCHari.pdf) |  K Chandra Hari | 145 |
| 684 | IJHS-32-1997-Issue-3 | Math | Indic | [Some Medieval Arithmetical Tables](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_3_2_SRSarma.pdf) |  S R Sarma | 125 |
| 685 | IJHS-32-1997-Issue-3 | Astronomy | Indic | [Early History of the Astrolabe in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_3_3_YOhashi.pdf) |  Yukio Ohashi | 1491 |
| 686 | IJHS-32-1997-Issue-3 | Metallurgy | Indic | [Book Review: Minerals and Metals in Ancient India by A K Biswas](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_3_4_BookReview.pdf) |  A M Shastri | 89 |
| 687 | IJHS-32-1997-Issue-4 | Math | Indic | [Three old Indian Values of Π](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_4_1_SCKak.pdf) |  Subhash C Kak | 124 |
| 688 | IJHS-32-1997-Issue-4 | Math | Indic | [Arithmetic Operation of Division with Special Reference to Bhaskara II’s Lilavati and its Commentaries](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_4_2_VMMallayya.pdf) |  V M Mallayya | 182 |
| 689 | IJHS-32-1997-Issue-4 | Astronomy | Fareast | [Balinese Traditional Calendar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_4_3_SKChatterjee.pdf) |  SK Chatterjee | 300 |
| 690 | IJHS-32-1997-Issue-4 | Metallurgy | Indic | [Guttur – An Iron Age Industrial Centre in Dharmapuri District](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_4_4_BRRao.pdf) |  B Raghunatha Rao and B Sasisekaran | 526 |
| 691 | IJHS-32-1997-Issue-4 | Medicine | Indic | [Lolimbaraja and his Contribution to Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_4_5_NSaxena.pdf) |  Nirmal Saxena | 181 |
| 692 | IJHS-32-1997-Issue-4 | Medicine | Indic | [The Portugese and the Study of Medicinal Plants in India in the Sixteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_4_6_KSMathew.pdf) |  K S Matthew | 156 |
| 693 | IJHS-32-1997-Issue-4 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_4_7_BookReviewaAndSRSarma.pdf) |   | 61 |
| 694 | IJHS-32-1997-Issue-4 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol32_4_8_NewsMagicSquare.pdf) |   | 36 |
| 695 | IJHS-33-1998-Issue-1 | Math | Fareast | [Babylonian Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_1_1_SKAdhikari.pdf) |  Swapan Kumar Adhikari | 249 |
| 696 | IJHS-33-1998-Issue-1 | Astronomy | Indic | [Vena‚ Veda‚ Venus](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_1_2_SCKak.pdf) |  Subhash C Kak | 85 |
| 697 | IJHS-33-1998-Issue-1 | Astronomy | Indic | [Sayana’s Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_1_3_SCKak.pdf) |  Subhash C Kak | 78 |
| 698 | IJHS-33-1998-Issue-1 | Culture | Indic | [Contemporaneity of the Perception on Environment in Kautilya’s Arthasastra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_1_4_SSSarma.pdf) |  Sunil Sen Sarma | 185 |
| 699 | IJHS-33-1998-Issue-1 | Biology | Indic | [Some Aspects of Biodiversity and Indian Traditions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_1_5_SKJain.pdf) |  S K Jain | 198 |
| 700 | IJHS-33-1998-Issue-1 | Astronomy | Western | [Kepler and the Origin of Modern Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_1_6_SJJKozhamthadam.pdf) |  SJ Job Kozhamthadam | 329 |
| 701 | IJHS-33-1998-Issue-1 | Other | Other | [Publication on History of Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_1_7_PublicationonHOS.pdf) |   | 84 |
| 702 | IJHS-33-1998-Issue-1 | Astronomy | Indic | [Supplement: Tantrasamgraha of Nilakantha Somayaji](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_1_8_Supplement.pdf) |  K V Sarma and V S Narasimhan | 594 |
| 703 | IJHS-33-1998-Issue-2 | Astronomy | Western | [Early Theories on the Distance to the Sun](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_2_1_SCKak.pdf) |  Subhash C Kak | 115 |
| 704 | IJHS-33-1998-Issue-2 | Astronomy | Indic | [Enigma of the Five–Year Yuga of Vedanga Jyotisa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_2_2_BNNAchar.pdf) |  B N Narahari Achar | 157 |
| 705 | IJHS-33-1998-Issue-2 | Astronomy | Indic | [Seismological Zones of Varahamihira](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_2_3_SMadabhushi.pdf) |  Srinivas Madabhushi and P Srirama Murty | 132 |
| 706 | IJHS-33-1998-Issue-2 | Math | Indic | [A Step Towards Incommensurability of Π and Bhaskara (I): An Episode of the Sixth Century AD](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_2_4_AMukhopadhyay.pdf) |  A Mukhopadhyay and M R Adhikari | 191 |
| 707 | IJHS-33-1998-Issue-2 | Metallurgy | Indic | [Indian Craft Technology: Static or Changing – A Case Study of the Kansari’s Craft in Bengal‚ 16th to 18th Centuries](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_2_5_SSarkar.pdf) |  Smritikumar Sarkar | 255 |
| 708 | IJHS-33-1998-Issue-2 | Astronomy | Fareast | [Traditional Calender of Myanmar (Burma)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_2_6_SKChatterjee.pdf) |  S K Chatterjee | 263 |
| 709 | IJHS-33-1998-Issue-2 | Math | Other | [News: A Non–Conventional Formula to Calculate the Area of Circle](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_2_7_News.pdf) |  R S J Reddy | 36 |
| 710 | IJHS-33-1998-Issue-2 | Other | Other | [Projects Approved and Renewed by the Indian National Commission for History of Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_2_8_ProjectsApproved.pdf) |   | 45 |
| 711 | IJHS-33-1998-Issue-2 | Other | Other | [Academy Publications on History of Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_2_9_AcademyPublicationsofHOS.pdf) |   | 79 |
| 712 | IJHS-33-1998-Issue-2 | Astronomy | Indic | [Supplement: Tantrasamgraha of Nilakantha Somayaji](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_2_10_Supplement.pdf) |  K V Sarma and V S Narasimhan | 611 |
| 713 | IJHS-33-1998-Issue-3 | Astronomy | Indic | [The SunU+2019 ’s Orbit in the Brahmanas](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_3_1_SCKak.pdf) |  Subhash C Kak | 213 |
| 714 | IJHS-33-1998-Issue-3 | Astronomy | Indic | [On the Origin of KaliyugadiU+2019 ’ Synodic Super-Conjunction](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_3_2_KCHari.pdf) |  K Chandra Hari | 114 |
| 715 | IJHS-33-1998-Issue-3 | Math | Indic | [Sriyantra – A Study of Spherical and Plane Forms](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_3_3_CSRao.pdf) |  C S Rao | 325 |
| 716 | IJHS-33-1998-Issue-3 | Astronomy | Indic | [Spectroscopy in Ancient India: An Application of Spectroscopy to Astrophysics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_3_4_NGDongre.pdf) |  N G Dongre | 161 |
| 717 | IJHS-33-1998-Issue-3 | Other | Other | [History of Science and Technology in India– Quicksands of Paradigm](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_3_5_ADas.pdf) |  Anirban Das | 152 |
| 718 | IJHS-33-1998-Issue-3 | Other | Other | [Academy Publications on History of Science and Announcement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_3_6_AcademyPublicationsofHOS.pdf) |   | 88 |
| 719 | IJHS-33-1998-Issue-3 | Astronomy | Indic | [Supplement: Tantrasamgraha of Nilakantha Somayaji](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_3_7_Supplement.pdf) |  K V Sarma and V S Narasimhan | 789 |
| 720 | IJHS-33-1998-Issue-4 | Astronomy | Indic | [On the Origin of Sidereal Zodiac and Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_4_1_KCHari.pdf) |  K Chandra Hari | 171 |
| 721 | IJHS-33-1998-Issue-4 | Biology | Indic | [Conservation of Biodiversity in Manu–Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_4_2_PSensarma.pdf) |  Priyadarsan Sensarma | 120 |
| 722 | IJHS-33-1998-Issue-4 | Metallurgy | Indic | [Prakasa Stambhanabhida Lauha of Maharsi Bharadvaja](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_4_3_NGDongre.pdf) |  N G Dongre, S K Malavia and P ramachandra Rao | 177 |
| 723 | IJHS-33-1998-Issue-4 | Medicine | Indic | [Dr Mahendralal Sircar and Homeopathy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_4_4_CPalit.pdf) |  Chittabrata Palit | 213 |
| 724 | IJHS-33-1998-Issue-4 | Other | Other | [Academy Publications on History of Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_4_5_AcademysPublicationsonHOS.pdf) |   | 84 |
| 725 | IJHS-33-1998-Issue-4 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_4_6_News.pdf) |   | 114 |
| 726 | IJHS-33-1998-Issue-4 | Astronomy | Indic | [Supplement: The Cylindrical Sundial in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol33_4_7_Supplement.pdf) |  Yukio Ohashi | 1024 |
| 727 | IJHS-34-1999-Issue-1 | Math | Indic | [A Critical Study of Vedic Mathematics of Sankaracarya SriBharatiKrsna Tirthaji Maharaj](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_1_1_KCHari.pdf) |  K Chandra Hari | 288 |
| 728 | IJHS-34-1999-Issue-1 | Agriculture | Indic | [Betel Vine (Piper Betle L.) Cultivation_A Unique Case of Plant Establishment under Anthropogenically Regulated Microclimatic Conditions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_1_2_NKumar.pdf) |  Nikhil Kumar | 1167 |
| 729 | IJHS-34-1999-Issue-1 | Metallurgy | Indic | [Smelting Furnaces in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_1_3_RShrivastva.pdf) |  Rina Shrivastava | 721 |
| 730 | IJHS-34-1999-Issue-1 | Music | Indic | [PreCommercial Era of Sound Recording in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_1_4_AGhosh.pdf) |  Amitabha Ghosh | 223 |
| 731 | IJHS-34-1999-Issue-1 | Other | Indic | [C V Raman‚ M N Saha and The Nobel Prize for the Year 1930](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_1_5_RSingh.pdf) |  Rajinder Singh and Falk Riess | 240 |
| 732 | IJHS-34-1999-Issue-1 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_1_6_BookReviews.pdf) |   | 71 |
| 733 | IJHS-34-1999-Issue-1 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_1_7_News.pdf) |   | 85 |
| 734 | IJHS-34-1999-Issue-2 | Math | Indic | [Indus Numerals on Metal Tools](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_2_1_JSPettersson.pdf) |  J S Pettersson | 317 |
| 735 | IJHS-34-1999-Issue-2 | Astronomy | Indic | [On An Astronomical Concept in Visnupurana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_2_2_BNNAchar.pdf) |  B N Narahari Achar | 104 |
| 736 | IJHS-34-1999-Issue-2 | Astronomy | Fareast | [The Solar Numbers in Angkor Wat](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_2_3_Skak.pdf) |  Subhash Kak | 203 |
| 737 | IJHS-34-1999-Issue-2 | Agriculture | Indic | [A Note On The Vrksayurveda of Parasara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_2_4_DKKanjilal.pdf) |  Dileep Kumar Kanjilal | 101 |
| 738 | IJHS-34-1999-Issue-2 | Astronomy | Indic | [Intricacy of The Siddhantic Solar Year](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_2_5_KCHari.pdf) |  K Chandra Hari | 193 |
| 739 | IJHS-34-1999-Issue-2 | Astronomy | Indic | [Yantraraja: The Astrolabe in Sanskrit](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_2_6_SRSarma.pdf) |  Sreeramula Rajeswara Sarma | 368 |
| 740 | IJHS-34-1999-Issue-2 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_2_7_BookReviews.pdf) |   | 119 |
| 741 | IJHS-34-1999-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_2_8_News.pdf) |   | 40 |
| 742 | IJHS-34-1999-Issue-2 | Other | Other | [Academy Publications on HOS](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_2_9_AcademyPublicationsonHOS.pdf) |   | 93 |
| 743 | IJHS-34-1999-Issue-3 | Metallurgy | Indic | [Mining of Copper in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_3_1_RShrivastva.pdf) |  Rina Shrivastava | 121 |
| 744 | IJHS-34-1999-Issue-3 | Other | Indic | [Earthquake History of India in Medieval Times](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_3_2_RNIyengar.pdf) |  R N Iyengar et al. | 909 |
| 745 | IJHS-34-1999-Issue-3 | Other | Western | [Michael Faraday Vis–A–Vis Chandrasekhar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_3_3_NKMaitra.pdf) |  N K Maitra | 72 |
| 746 | IJHS-34-1999-Issue-3 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_3_4_BookReviews.pdf) |   | 70 |
| 747 | IJHS-34-1999-Issue-3 | Other | Other | [News— Academy Publications on HOS](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_3_5_News.pdf) |   | 93 |
| 748 | IJHS-34-1999-Issue-4 | Metallurgy | Indic | [Technology of Iron and Steel in Kodumal— An Ancient Industrial Centre in Tamil Nadu](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_4_1_BSasisekaran.pdf) |  B Sasisekaran and B Raghunatha Rao | 774 |
| 749 | IJHS-34-1999-Issue-4 | Astronomy | Indic | [Katapayadi Notation on a Sanskrit Astrolabe](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_4_2_SRSarma.pdf) |  Sreeramula Rajeswara Sarma | 366 |
| 750 | IJHS-34-1999-Issue-4 | Other | Indic | [Dams— Engineering Analysisof Alternatives](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_4_3_SGarg.pdf) |  Sandeep Garg et al. | 388 |
| 751 | IJHS-34-1999-Issue-4 | Other | Indic | [Science in British India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_4_4_RKKochhar.pdf) |  R K Kochhar | 481 |
| 752 | IJHS-34-1999-Issue-4 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_4_5_BookReview.pdf) |   | 44 |
| 753 | IJHS-34-1999-Issue-4 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_4_6_News.pdf) |   | 109 |
| 754 | IJHS-34-1999-Issue-4 | Medicine | Indic | [Supplement— Rasendramangalam of Nagarjuna](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol34_4_7_Supplement_Rasendramangalam.pdf) |  H S Sharma | 649 |
| 755 | IJHS-35-2000-Issue-1 | Astronomy | Indic | [On The Astronomical Basis of the Date of Satapatha Brahmana: A Re–Examination of Dikshit's Theory](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_1_1_BNNAchar.pdf) |  B N N Achar | 343 |
| 756 | IJHS-35-2000-Issue-1 | Astronomy | Indic | [Date of the Solar Orbit of Satapatha Brahmana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_1_2_KCHari.pdf) |  K Chandra Hari | 64 |
| 757 | IJHS-35-2000-Issue-1 | Culture | Indic | [Dietary Diversity in Manu–Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_1_3_PSensarma.pdf) |  P Sensarma | 183 |
| 758 | IJHS-35-2000-Issue-1 | Astronomy | Indic | [Origin of the Mean Motion Tables of Jai Singh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_1_4_BvDalen.pdf) |  B V Dalen | 363 |
| 759 | IJHS-35-2000-Issue-1 | Medicine | Indic | [Pharmaceutical Society of India: The oldest Indian Pharmaceutical Organisation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_1_5_HSingh.pdf) |  H Singh | 139 |
| 760 | IJHS-35-2000-Issue-1 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_1_6_BookReviews.pdf) |   | 136 |
| 761 | IJHS-35-2000-Issue-1 | Other | Other | [Notices](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_1_7_Notices.pdf) |   | 39 |
| 762 | IJHS-35-2000-Issue-3 | Astronomy | Indic | [A Case for Revising the Date of Vedanga Jyotisa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_3_1_BNNAchar.pdf) |  B N N Achar | 149 |
| 763 | IJHS-35-2000-Issue-3 | Astronomy | Indic | [Babylonian Source of Aryabhata’s Planetary Constants](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_3_2_KDAbhyankar.pdf) |  K D Abhyankar | 62 |
| 764 | IJHS-35-2000-Issue-3 | Math | Indic | [Govindaswamin’s Arithmetic Rules Cited in the Kriyakramakari of Sankara and Narayana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_3_3_THayashi.pdf) |  T Hayashi | 666 |
| 765 | IJHS-35-2000-Issue-3 | Astronomy | Indic | [Astronomical Instruments at Kota](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_3_4_VNSharma.pdf) |  V N Sharma | 427 |
| 766 | IJHS-35-2000-Issue-3 | Other | Indic | [Joseph Needham and the History of Indian Technology](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_3_5_IHabib.pdf) |  Irfan Habib | 615 |
| 767 | IJHS-35-2000-Issue-3 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_3_6_BookReviews.pdf) |   | 131 |
| 768 | IJHS-35-2000-Issue-3 | Other | Other | [Notices](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_3_7_Notices.pdf) |   | 33 |
| 769 | IJHS-35-2000-Issue-3 | Other | Indic | [Conferences: NISTADS INSA Workshop on History of Science in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_3_8_Conferences.pdf) |  A N Thakur | 108 |
| 770 | IJHS-35-2000-Issue-4 | Astronomy | Indic | [On the Caitradi Scheme](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_4_1_BNNAchar.pdf) |  B N N Achar | 280 |
| 771 | IJHS-35-2000-Issue-4 | Astronomy | Indic | [Planetary Revolutions in Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_4_2_HThurston.pdf) |  Hugh Thurston | 121 |
| 772 | IJHS-35-2000-Issue-4 | Astronomy | Indic | [Jean–Baptiste Biot on the History of Indian Astronomy (1830–1860): The Nation in the Post–Enlightenment Historiography of Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_4_3_DRaina.pdf) |  Dhruv Raina | 509 |
| 773 | IJHS-35-2000-Issue-4 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_4_4_BookReviews.pdf) |   | 108 |
| 774 | IJHS-35-2000-Issue-4 | Other | Other | [Supplements](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol35_4_5_SupplementsHOSResearchProjects.pdf) |   | 1524 |
| 775 | IJHS-36-2001-Issue-1&2 | Metallurgy | Indic | [New Insights on the 1600 Year Old Corrosion Resistant Delhi Iron Pillar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_1and2_1_RBalasubramanian.pdf) |  R Balasubramaniam | 1182 |
| 776 | IJHS-36-2001-Issue-1&2 | Astronomy | Indic | [Measuring Time With Long Syllables](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_1and2_2_SRSarma.pdf) |  S R Sarma | 82 |
| 777 | IJHS-36-2001-Issue-1&2 | Astronomy | Indic | [Ahargana and Weekdays As Per Modern Suryasiddhanta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_1and2_3_AKBag.pdf) |  A K Bag | 163 |
| 778 | IJHS-36-2001-Issue-1&2 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_1and2_4_BookReview.pdf) |   | 152 |
| 779 | IJHS-36-2001-Issue-1&2 | Other | Other | [Notices of Journals](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_1and2_5_Notices.pdf) |   | 72 |
| 780 | IJHS-36-2001-Issue-1&2 | Other | Other | [Conferences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_1and2_6_Conferences.pdf) |  A K Bag | 119 |
| 781 | IJHS-36-2001-Issue-1&2 | Other | Other | [Projects Approved and Renewed by the Indian National Commission for History of Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_1and2_7_Projects.pdf) |   | 75 |
| 782 | IJHS-36-2001-Issue-3&4 | Metallurgy | Indic | [Technology of Forge Welding Adopted at Mallappadi – An Iron Age Site in Tamil Nadu](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_3and4_1_BSasisekaran.pdf) |  B Sasisekaran and B raghunatha Rao | 375 |
| 783 | IJHS-36-2001-Issue-3&4 | Astronomy | Indic | [Aryabhata: His name‚ Time and Provenance](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_3and4_2_KVSarma.pdf) |  K V Sarma | 161 |
| 784 | IJHS-36-2001-Issue-3&4 | Math | Indic | [Aryabhata’s Kaliyuga Revisited: An Optimization Problem](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_3and4_3_YVJeppu.pdf) |  Y V Jeppu | 125 |
| 785 | IJHS-36-2001-Issue-3&4 | Lingiustics | Indic | [Vakyakarana–A Study](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_3and4_4_KCHari.pdf) |  K Chandra Hari | 333 |
| 786 | IJHS-36-2001-Issue-3&4 | Other | Other | [A Tale of Two Fingerprint Experts](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_3and4_5_GSSodhi.pdf) |  G S Sodhi and Jasjeet Kaur | 112 |
| 787 | IJHS-36-2001-Issue-3&4 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_3and4_6_BookReviews.pdf) |   | 138 |
| 788 | IJHS-36-2001-Issue-3&4 | Astronomy | Indic | [Project Report: Search for Ancient Indian Records of the Sighting of Supernovae](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_3and4_7_ProjectReport.pdf) |  Jayant V Narlikar and Saroja Bhate | 2133 |
| 789 | IJHS-36-2001-Issue-3&4 | Other | Other | [Conferences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol36_3and4_8_Conferences.pdf) |  S M R Ansari | 126 |
| 790 | IJHS-37-2002-Issue-1 | Metallurgy | Indic | [Studies of Ancient Indian OCP Period Copper](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_1_1_RBalasubramaniam.pdf) |  RBalasubramaniam‚ M N Mungole et. al | 350 |
| 791 | IJHS-37-2002-Issue-1 | Metallurgy | Indic | [Metallurgy and Metal Industry in Ancient Tamil Nadu— An Archaeological Study](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_1_2_BSasisekaran.pdf) |  B Sasisekaran | 180 |
| 792 | IJHS-37-2002-Issue-1 | Astronomy | Indic | [Probable Rationale for Unequal Naksatra Divisions in Jain Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_1_3_KDAbhyankar.pdf) |  K D Abhyankar | 89 |
| 793 | IJHS-37-2002-Issue-1 | Culture | Indic | [Indigenous Colours in Mithila(North Bihar)– A Historical Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_1_4_VJha.pdf) |  Vidyanath Jha | 288 |
| 794 | IJHS-37-2002-Issue-1 | Other | Other | [The Topography of a Changing World](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_1_5_TVVenkateswaran.pdf) |  T N Venkateswaran | 370 |
| 795 | IJHS-37-2002-Issue-1 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_1_6_BookReview.pdf) |  A N Thakur | 27 |
| 796 | IJHS-37-2002-Issue-1 | Other | Other | [Conferences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_1_7_Conference.pdf) |   | 92 |
| 797 | IJHS-37-2002-Issue-1 | Other | Other | [Supplement: Growth of Scientific Periodicals in India (1788– 1900)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_1_9_Supplement ScientificPeriodicals.pdf) |  B K Sen | 629 |
| 798 | IJHS-37-2002-Issue-2 | Math | Indic | [Aryabhata and the table of Rsines](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_2_1_BNNAchar.pdf) |  B N Narahari Achar | 70 |
| 799 | IJHS-37-2002-Issue-2 | Astronomy | Indic | [Genesis and Antecedents of Aryabhatiya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_2_2_KCHari.pdf) |  K Chandra Hari | 218 |
| 800 | IJHS-37-2002-Issue-2 | Metallurgy | Indic | [A New Study of Dhar Iron Pillar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_2_3_RBalasubramaniam.pdf) |  R Balasubramaniam | 1321 |
| 801 | IJHS-37-2002-Issue-2 | Other | Western | [Fritz Haber— A Conflicting Chemist](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_2_4_JWisniak.pdf) |  Jaime Wisniak | 344 |
| 802 | IJHS-37-2002-Issue-2 | Other | Western | [Sir C V Raman and his contacts with Hungarian Scientists](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_2_5_RSingh.pdf) |  Rajinder Singh | 388 |
| 803 | IJHS-37-2002-Issue-2 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_2_6_BookReview.pdf) |  Kiran Arora | 41 |
| 804 | IJHS-37-2002-Issue-2 | Metallurgy | Indic | [Projects Report: Minerals and Metals in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_2_7_ProjectReport.pdf) |  Shabnam Shukla | 45 |
| 805 | IJHS-37-2002-Issue-2 | Other | Other | [Conferences: Indian History Congress](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_2_8_Conferences.pdf) |  Shabnam Shukla | 70 |
| 806 | IJHS-37-2002-Issue-2 | Other | Other | [Conferences: National Seminar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_2_9_BChaki.pdf) |  Balai Chaki | 50 |
| 807 | IJHS-37-2002-Issue-2 | Other | Other | [Indian National Commission for History of Science: Projects Renewed and Approved](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_2_10_INCforHOS.pdf) |   | 44 |
| 808 | IJHS-37-2002-Issue-2 | Other | Other | [Supplement: Growth of Scientific Periodicals in India (1788– 1900)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_2_11_SupplementScientificPeriodicals.pdf) |  B K Sen | 995 |
| 809 | IJHS-37-2002-Issue-3 | Astronomy | Indic | [On Two Important Provisions in Vedanga&ndash Jyotisa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_3_1_KDAbhyankar.pdf) |  K D Abhyankar | 129 |
| 810 | IJHS-37-2002-Issue-3 | Astronomy | Indic | [Date of Haridatta‚ Promulgator of the Prahita System of Astronomy in Kerala](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_3_2_KCHari.pdf) |  K Chandra Hari | 213 |
| 811 | IJHS-37-2002-Issue-3 | Math | Indic | [Nemicandra’s Rule for the Volume of a Sphere](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_3_3_DJadhav.pdf) |  Dipak Jadhav | 207 |
| 812 | IJHS-37-2002-Issue-3 | Astronomy | Indic | [Practical Astronomy in Indo–Persian Sources](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_3_4_SMRAnsari.pdf) |  S M R Ansari | 156 |
| 813 | IJHS-37-2002-Issue-3 | Other | Western | [Sir CV Raman‚ Dame Kathleen Lonsdale and their Scientific Controversy due to the Diffuse Spots in X–ray Photographs](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_3_5_RSingh.pdf) |  Ravinder Singh | 342 |
| 814 | IJHS-37-2002-Issue-3 | Medicine | Indic | [Book Review: Ayurvedic remedies for the whole family](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_3_6_BookReview.pdf) |  N Kumar | 185 |
| 815 | IJHS-37-2002-Issue-3 | Other | Indic | [Project Report: Shipping and ship building in India– Medieval Period](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_3_7_ProjectReport.pdf) |  Shabnam Shukla | 24 |
| 816 | IJHS-37-2002-Issue-3 | Other | Other | [Orbituary: Apurba Kumar Chakravarty](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_3_8_Obituary.pdf) |  Shabnam Shukla‚ S K Chatterjee | 307 |
| 817 | IJHS-37-2002-Issue-3 | Other | Other | [Notice of Journals](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_3_9_NoticeofJournals.pdf) |   | 23 |
| 818 | IJHS-37-2002-Issue-3 | Other | Indic | [Supplement: Growth of Scientific Periodicals in India (1788– 1900)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_3_10_SupplementScientificPeriodicalsBKSen.pdf) |  B K Sen | 1250 |
| 819 | IJHS-37-2002-Issue-4 | Lingiustics | Indic | [The Objective Criteria in Deciphering the Indus Script](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_4_1_MMishra.pdf) |  Madhusudan Mishra | 127 |
| 820 | IJHS-37-2002-Issue-4 | Metallurgy | Indic | [Material and Electrochemical Characterization of Ancient Indian OCP Period Copper](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_4_2_TLaha.pdf) |  T Laha et. al. | 188 |
| 821 | IJHS-37-2002-Issue-4 | Astronomy | Indic | [An Early Eclipse Record of Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_4_3_KCHari.pdf) |  K Chandra Hari | 95 |
| 822 | IJHS-37-2002-Issue-4 | Other | Western | [Hugh Martin Leake: A Historical Memoir](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_4_4_NCShah.pdf) |  N C Shah | 169 |
| 823 | IJHS-37-2002-Issue-4 | Biology | Indic | [The beginning of Biochemical Researches in India— An Historical Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_4_5_SSen.pdf) |  Srabani sen | 287 |
| 824 | IJHS-37-2002-Issue-4 | Philosophy | Indic | [Book Review : Kautilya’s Arthasastra in the light of modern science and technology](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_4_6_BookReview.pdf) |  Arun Kumar Biswas | 115 |
| 825 | IJHS-37-2002-Issue-4 | Medicine | Indic | [Project Report: Raj Nighantu of Narhari Pandit](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_4_8_ProjectReport.pdf) |  Shabnam Shukla | 67 |
| 826 | IJHS-37-2002-Issue-4 | Other | Other | [Orbituary: Shabbir Ahmad Khan Ghori](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_4_9_Obituary.pdf) |  S M R Ansari | 55 |
| 827 | IJHS-37-2002-Issue-4 | Other | Other | [Notice of Journals](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol37_4_10_NoticeofJournals.pdf) |   | 45 |
| 828 | IJHS-38-2003-Issue-1 | Math | Indic | [Agni–Kunda—A Negelected Area of Study in the History of Ancient Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_1_1_RCGupta.pdf) |  R C Gupta | 606 |
| 829 | IJHS-38-2003-Issue-1 | Astronomy | Indic | [Luni–Solar Calender‚ Kali Ahargana and Julian Days](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_1_2_AKBag.pdf) |  A K Bag | 721 |
| 830 | IJHS-38-2003-Issue-1 | Astronomy | Indic | [A Note on the Ahargana and the Weekdays as per Modern Suryasiddhanta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_1_3_AKBag.pdf) |  A K Bag | 183 |
| 831 | IJHS-38-2003-Issue-1 | Astronomy | Indic | [Eclipse Observations of Paramesvara‚ the 14–15th century Astronomer of Kerala](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_1_4_KCHari.pdf) |  K Chandra Hari | 666 |
| 832 | IJHS-38-2003-Issue-1 | Other | Western | [Dirac and Heisenberg in Hawaii](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_1_5_SFTuan.pdf) |  S F Tuan | 373 |
| 833 | IJHS-38-2003-Issue-1 | Metallurgy | Indic | [Book Review: Metallurgy in Indian Archaeology](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_1_6_BookReview.pdf) |  R K Dube | 282 |
| 834 | IJHS-38-2003-Issue-1 | Other | Other | [Obituary: Jagat Narain Kapur](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_1_7_Obituary.pdf) |  A K Bag | 218 |
| 835 | IJHS-38-2003-Issue-2 | Astronomy | Indic | [Internal Consistency of Eclipses and Planetary Positions in Mahabharata](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_2_1_RNIyengar.pdf) |  R N Iyengar | 2037 |
| 836 | IJHS-38-2003-Issue-2 | Metallurgy | Indic | [About the Signification of Wootz and Other Names Given to Steel](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_2_2_JLCoze.pdf) |  J Le Coze | 458 |
| 837 | IJHS-38-2003-Issue-2 | Astronomy | Indic | [Corrections to the Terrestrial Latitude in Tantrasangraha](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_2_3_KRamasubramanian.pdf) |  K Ramasubramanian and M S Sriram | 532 |
| 838 | IJHS-38-2003-Issue-2 | Medicine | Indic | [Cudamaninighantu — An Unpublished Work on Dravyaguna by Suraya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_2_4_BRRao.pdf) |  B Rama Rao | 253 |
| 839 | IJHS-38-2003-Issue-2 | Other | Western | [C V Raman and the American Scientists](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_2_5_RSingh.pdf) |  Rajinder Singh | 1003 |
| 840 | IJHS-38-2003-Issue-2 | Math | Indic | [Book Review: The Ganitasarasangraha of Sri Mahaviracarya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_2_6_BookReview.pdf) |  S R Sarma | 226 |
| 841 | IJHS-38-2003-Issue-2 | Biology | Indic | [Project Report: Botanist Jaikrishnabhai – Life and Contributions by JJ Shah](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_2_7_ProjectReport.pdf) |  Shabnam Shukla | 128 |
| 842 | IJHS-38-2003-Issue-2 | Other | Indic | [Indian National Commission for History of Science: Projects Renewed and Approved](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_2_8_IndianNationalCommissionforHOS.pdf) |   | 83 |
| 843 | IJHS-38-2003-Issue-2 | Other | Other | [Conferences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_2_9_Conferences.pdf) |   | 127 |
| 844 | IJHS-38-2003-Issue-3 | Metallurgy | Indic | [Influence of Manufacturing Methodology on the Corrosion Resistance of the Delhi Iron Pillar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_3_1_RBalasubramaniam.pdf) |  R Balasubramaniam | 1411 |
| 845 | IJHS-38-2003-Issue-3 | Metallurgy | Indic | [Archaeo Metallurgical Study on Select Pallava Coins](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_3_2_BSasisekaran.pdf) |  B Sasisekaran and B Raghunatha Rao | 1104 |
| 846 | IJHS-38-2003-Issue-3 | Astronomy | Indic | [Computation of the True Moon by Madhava of Sangama–Grama](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_3_3_KCHari.pdf) |  K Chandra Hari | 1150 |
| 847 | IJHS-38-2003-Issue-3 | Astronomy | Indic | [Lunar Eclipse Computation in Indian Astronomy with Special Reference to Grahalaghavam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_3_4_SBRao.pdf) |  S abalachandra Rao‚ S K Uma and Padmaja Venugopal | 747 |
| 848 | IJHS-38-2003-Issue-3 | Other | Western | [The Awadh Scientific Renaissance and the Role of the French: C 1750–1820](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_3_5_IGKhan.pdf) |  Iqbal Ghani Khan | 2160 |
| 849 | IJHS-38-2003-Issue-3 | Other | Other | [Book Review: Science and Technology in the Islamic World](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_3_6_BookReview.pdf) |  A K Bag | 417 |
| 850 | IJHS-38-2003-Issue-3 | Other | Indic | [Project Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_3_7_ProjectReport.pdf) |  Shabnam Shukla | 229 |
| 851 | IJHS-38-2003-Issue-3 | Other | Indic | [Obituary: T A Sarasvati Amma](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_3_8_Obituary.pdf) |  R C Gupta | 253 |
| 852 | IJHS-38-2003-Issue-3 | Math | Indic | [Supplement: Brahmasphutasiddhanta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_3_9_Supplement.pdf) |  Setsuro Ikeyama | 3824 |
| 853 | IJHS-38-2003-Issue-4 | Culture | Indic | [Dietary Biodiversity in Yajnavalkya–Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_4_1_PSensarma.pdf) |  Priyadarsan Sensarma | 504 |
| 854 | IJHS-38-2003-Issue-4 | Metallurgy | Indic | [Some Metallurgical Aspects of Gupta Period Gold Coin Manufacturing Technology](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_4_2_RBalasubramaniam.pdf) |  R Balasubramaniam and N Mahajan | 1630 |
| 855 | IJHS-38-2003-Issue-4 | Metallurgy | Indic | [Numismatic Study of Malhar Coins by the Energy Dispersive X–Ray Fluorescence (EDXRF) Technique](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_4_3_ACMandal.pdf) |  Atis Chandra Mandal‚ Sumita Santra‚ Debasis Mitra‚ Manoranjan Sarkar‚ Dipan  | 946 |
| 856 | IJHS-38-2003-Issue-4 | Astronomy | Other | [Observational Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_4_4_GAbraham.pdf) |  George Abraham and J Samuel Cornelius | 383 |
| 857 | IJHS-38-2003-Issue-4 | Other | Indic | [Richard Bar and his contacts with the Indian Nobel Laureate Sir CV Raman](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_4_5_RSingh.pdf) |  Rajinder Singh | 678 |
| 858 | IJHS-38-2003-Issue-4 | Astronomy | Indic | [Book Review: Ancient Indian Astronomy – Planetary Positions and Eclipses](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_4_6_BookReview.pdf) |  A K Bag | 429 |
| 859 | IJHS-38-2003-Issue-4 | Other | Indic | [Conference: 12th World Sanskrit Conference – A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_4_7_Conference.pdf) |  A K Bag | 266 |
| 860 | IJHS-38-2003-Issue-4 | Other | Other | [News: Books Received for Review (2003)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_4_8_News.pdf) |   | 104 |
| 861 | IJHS-38-2003-Issue-4 | Other | Other | [Chama Newsletter](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol38_4_9_CHAMANewsletter.pdf) |   | 138 |
| 862 | IJHS-39-2004-Issue-1 | Music | Indic | [Vina Keyboards – Origin](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_1_1_RSatyanarayana.pdf) |  R Satyanarayana | 180 |
| 863 | IJHS-39-2004-Issue-1 | Other | Indic | [Profile of A Natural Disaster in Ancient Sanskrit Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_1_2_RNIyengar.pdf) |  R N Iyengar | 621 |
| 864 | IJHS-39-2004-Issue-1 | Metallurgy | Indic | [Estimation of the Original Erection Site of the Delhi Iron Pillar at Udayagiri](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_1_3_MIDass.pdf) |  Meera I Dass and R Balasubramaniam | 632 |
| 865 | IJHS-39-2004-Issue-1 | Other | Other | [Dyes from Antiquity to Synthesis](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_1_4_JWisniak.pdf) |  Jaime Wisniak | 460 |
| 866 | IJHS-39-2004-Issue-1 | Culture | Indic | [Science and Culture under Colonialism: India Between the World Wars](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_1_5_JNSinha.pdf) |  Jagdish N Sinha | 315 |
| 867 | IJHS-39-2004-Issue-1 | Astronomy | Indic | [Book Review: Astronomical Instruments in the Ramur Raza Library](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_1_6_BookReview.pdf) |  S M R Ansari | 114 |
| 868 | IJHS-39-2004-Issue-1 | Math | Other | [Magic Square for 2004](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_1_9_SRSarma.pdf) |  S R Sarma | 27 |
| 869 | IJHS-39-2004-Issue-1 | Other | Other | [News: 22nd International Congress of History of Science‚ July 2005‚ Beijing](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_1_10_News.pdf) |   | 21 |
| 870 | IJHS-39-2004-Issue-2 | Lingiustics | Indic | [Dani’s Hypothesis on the Symbol Formation in Brahmi](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_2_1_SKAcharya.pdf) |  Subrata Kumar Acharya | 112 |
| 871 | IJHS-39-2004-Issue-2 | Astronomy | Indic | [PV Holay’s Interpretation of the RK-Jyotisa Verses on 19–Year Yuga](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_2_2_KCHari.pdf) |  K Chandra Hari | 223 |
| 872 | IJHS-39-2004-Issue-2 | Metallurgy | Indic | [The Original Image Atop the Delhi Iron Pillar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_2_3_RBalasubramaniam.pdf) |  R Balasubramaniam‚ Meera I Dass and Ellen M Raven | 667 |
| 873 | IJHS-39-2004-Issue-2 | Culture | Indic | [Traditional Pearl and Chank Diving Technique in Gulf of Mannar: A Historical and Ethnographic Study](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_2_4_NAthiyaman.pdf) |  N Athiyaman and K Rajan | 313 |
| 874 | IJHS-39-2004-Issue-2 | Astronomy | Indic | [Historical Note: 5–Year Yuga in the Vedanga Jyotisa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_2_5_HistoricalNotes.pdf) |  K D Abhyankar | 53 |
| 875 | IJHS-39-2004-Issue-2 | Astronomy | Indic | [Historical Note: 1874 Transit Observations of AV Narsinga Rao at Visakhapatnam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_2_6_NRathnasree.pdf) |  N Rathnasree and Sanat Kumar | 95 |
| 876 | IJHS-39-2004-Issue-2 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_2_7_BookReviews.pdf) |   | 85 |
| 877 | IJHS-39-2004-Issue-2 | Other | Other | [Notices](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_2_8_Notices.pdf) |   | 26 |
| 878 | IJHS-39-2004-Issue-2 | Astronomy | Indic | [Supplement: Siddhantakaustubha of Jagannathapandita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_2_9_Supplement.pdf) |  David Pingree | 1117 |
| 879 | IJHS-39-2004-Issue-3 | MindSciences | Western | [A New Knowledge of Madness–Nineteenth Century Asylum Psychiatry in Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_3_1_ARBasu.pdf) |  Amit Ranjan Basu | 410 |
| 880 | IJHS-39-2004-Issue-3 | Culture | Indic | [Representation of Natural World in the Popular Science Texts during Nineteenth Century Tamil Nadu](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_3_2_TVVenkateswaran.pdf) |  T V Venkateswaran | 444 |
| 881 | IJHS-39-2004-Issue-3 | Other | Indic | [Balaji Prabhakar Modak—A Nineteenth Century Science Propagator in Maharashtra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_3_3_ASDhumatkar.pdf) |  Abhida S Dhumatkar | 371 |
| 882 | IJHS-39-2004-Issue-3 | Other | Indic | [The Conflict and Change–Over In Indian Chemistry](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_3_4_ABasu.pdf) |  Aparajita Basu | 279 |
| 883 | IJHS-39-2004-Issue-3 | Astronomy | Western | [Historical Notes: Julian Days in Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_3_5_HistoricalNotes.pdf) |  K Chandra Hari | 68 |
| 884 | IJHS-39-2004-Issue-3 | Other | Other | [Historical Notes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_3_6_SKMajumdar.pdf) |  Sisir K Majumdar | 105 |
| 885 | IJHS-39-2004-Issue-3 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_3_7_BookReview.pdf) |  Arun Kumar Biswas | 157 |
| 886 | IJHS-39-2004-Issue-4 | Metallurgy | Indic | [Traditional Gemstone Cutting Technology of Kongu Region in Tamil Nadu](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_4_1_RRajan.pdf) |  K Rajan and A Athiyaman | 705 |
| 887 | IJHS-39-2004-Issue-4 | Medicine | Indic | [Therapeutic Use of Urine in Early Indian Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_4_2_ANThakur.pdf) |  A N Thakur | 159 |
| 888 | IJHS-39-2004-Issue-4 | Astronomy | Indic | [Origin of the Moving Eccentric Circle Planetary Model in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_4_3_KDAbhyankar.pdf) |  K D Abhyankar | 150 |
| 889 | IJHS-39-2004-Issue-4 | Astronomy | Indic | [Mean Planetary Positions According to Grahalaghavam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_4_4_SBRao.pdf) |  S Balachandra Rao‚ S K Uma and Padmaja Venugopal | 414 |
| 890 | IJHS-39-2004-Issue-4 | Astronomy | Western | [John Greaves’ Astronomica Quaedam: Orientalism and Ptolemaic Cosmography in Seventeenth Century England](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_4_5_GDYoung.pdf) |  Gregg De Young | 509 |
| 891 | IJHS-39-2004-Issue-4 | Other | Other | [Historical Notes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_4_6_HistoricalNotes.pdf) |  Sanjay C Patel | 480 |
| 892 | IJHS-39-2004-Issue-4 | Astronomy | Indic | [Historical Note: Uniform All India Nirayana Solar Calender](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_4_7_CmdSKChatterjee.pdf) |  Commodore S K Chatterjee | 237 |
| 893 | IJHS-39-2004-Issue-4 | Other | Other | [Book Review: Collected Works of Mahendralal Sircar‚ Eugene Lafont and the Science Movement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_4_8_JNSinha.pdf) |  Jagdish N Sinha | 61 |
| 894 | IJHS-39-2004-Issue-4 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol39_4_9_News.pdf) |   | 41 |
| 895 | IJHS-40-2005-Issue-1 | Astronomy | Indic | [Earliest Vedic Calendar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol1_2005_01.pdf) |  KD Abhyankar | 2707 |
| 896 | IJHS-40-2005-Issue-1 | Culture | Indic | [Environment and Ecology in the Ramayana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol1_2005_02_ENVIRONMENT AND ECOLOGY IN THE RAMAYANA.pdf) |  Mira Roy | 6863 |
| 897 | IJHS-40-2005-Issue-1 | Math | Indic | [Mystical Mathematics of Ancient Planets](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol1_2005_03_MYSTICAL MATHEMATICS IN ANCIENT PLANETS.pdf) |  RC Gupta | 6720 |
| 898 | IJHS-40-2005-Issue-1 | Other | Indic | [Congress and Conservation-A Look at the NPC Reports](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol1_2005_04_CONGRESS AND CONSERVATION.pdf) |  Jagdish N Sinha | 9895 |
| 899 | IJHS-40-2005-Issue-1 | Medicine | Indic | [Dawn of Nutrition Research in India&mdash; Pre&ndash;independence Era](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol40_1_5_SSen.pdf) |  Srabani Sen | 337 |
| 900 | IJHS-40-2005-Issue-1 | Math | Indic | [Historical Note:  Square Roots in the Sulbasutras](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol40_1_6_HistoricalNotes.pdf) |  Toke Lindegaard Knudsen | 57 |
| 901 | IJHS-40-2005-Issue-1 | Astronomy | Indic | [Historical Note:  Accuracy of Lunar Eclipse Computations of the Grahalaghavam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol40_1_7_KCHari.pdf) |  K Chandra Hari | 106 |
| 902 | IJHS-40-2005-Issue-1 | Astronomy | Other | [Book Review: History of Oriental Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol40_1_8_BookReview.pdf) |  A K Bag | 180 |
| 903 | IJHS-40-2005-Issue-1 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol1_2005_08_NEWS.pdf) |   | 3428 |
| 904 | IJHS-40-2005-Issue-1 | Other | Other | [Supplement: Growth of Scientific Periodicals in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol40_1_10_SupplementScientificPeriodicals.pdf) |  B K Sen | 1024 |
| 905 | IJHS-40-2005-Issue-2 | Astronomy | Indic | [Eclipse Period Number 3339 in the Ṛgveda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol2_2005_01.pdf) |  RN Iyengar | 5391 |
| 906 | IJHS-40-2005-Issue-2 | Medicine | Indic | [Management of Fistula in Ano in Ancient Greek and Ayurvedic Medicine -A Historical Analysis](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol2_2005_02_MANAGEMENT OF FISTULA IN ANO IN ANCIENT GREEK AND AYURVEDIC MEDICINE A HISTORICAL AN.pdf) |  P Ram Manohar et al. | 18650 |
| 907 | IJHS-40-2005-Issue-2 | Math | Indic | [Hipparchus's 3600'-Based Chord Table and its Place in the History of Ancient Greek and Indian Trigon](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol2_2005_03_HIPPARCHUS'S 3600 BASED CHORD TABLE AND ITS PLACE IN THE HISTORY OF ANCIENT GREEK AN.pdf) |  Bo Klintberg | 3133 |
| 908 | IJHS-40-2005-Issue-2 | Culture | Indic | [Hindus' Scientific Contributions in Indo-Persian](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol2_2005_04_HINDUS SCIENTIFIC CONTRIBUTIONS IN INDO CALENDAR.pdf) |  SMR Ansari | 21918 |
| 909 | IJHS-40-2005-Issue-2 | Astronomy | Indic | [Historical Notes: Some Comments on Kelkar Committee's Proposed All India Calendar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol2_2005_05_HISTORICAL NOTES_1.pdf) |  KD Abhyankar | 1845 |
| 910 | IJHS-40-2005-Issue-2 | Medicine | Other | [Historical Notes: The Gifts of Physics to Modern Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol2_2005_05_HISTORICAL NOTES_2.pdf) |  Sisir K Majumdar | 9223 |
| 911 | IJHS-40-2005-Issue-2 | Other | Other | [Book Review: Father Engene Lafont of St. Xavier 's College, Kolkata and the Contemporary Science Mov](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol2_2005_06_BOOK REVIEW.pdf) |  Deepak Kumar | 2902 |
| 912 | IJHS-40-2005-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol2_2005_07_NEWS.pdf) |   | 5943 |
| 913 | IJHS-40-2005-Issue-2 | Other | Other | [Supplement: Growth of Scientific Periodicals in India: (1901-1947)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol2_2005_08_SUPPLEMENT.pdf) |  BK Sen | 9939 |
| 914 | IJHS-40-2005-Issue-3 | Metallurgy | Indic | [The First Catalogue of Forge-Welded Iron Cannons by Neogi](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol3_2005_01_THE FIRST CATALOGUE ON FORGE WELDED IRON CANNONS BY NEOGI.pdf) |  R Balasubramaniam | 3913 |
| 915 | IJHS-40-2005-Issue-3 | Metallurgy | Indic | [Rajaagopala -The Massive Iron Cannon at Thanjavur in Tamil Nadu](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol3_2005_02_RAJAGOPALA THE MASSIVE IRON CANNON AT THANJAVUR IN TAMIL NADU.pdf) |  R Balasubramaniam, A Saxena and TR Anantharaman | 28448 |
| 916 | IJHS-40-2005-Issue-3 | Metallurgy | Indic | [Dal Mardan - The Forge-welded Iron Cannon at Bishnupur](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol3_2005_03_DAL MARDAN THE FORGE WELDED IRON CANNON AT BISHNUPUR.pdf) |  R Balasubramaniam, K Bhattacharya and AK Nigam | 2301 |
| 917 | IJHS-40-2005-Issue-3 | Metallurgy | Indic | [The Forge -Welded Iron Cannon at Bada Burj of Golconda Fort Rampart](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol3_2005_04_THE FORGE WELDED IRON CANNON AT BADA BURJ OF GOLCONDA FORT RAMPART.pdf) |  R Balasubramaniam, M Surender and S Sankaran | 7456 |
| 918 | IJHS-40-2005-Issue-3 | Metallurgy | Indic | [The Forge-Welded Iron Cannon near Fateh Burj of Golconda Fort Rampart](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol3_2005_05_THE FORGE WELDED IRON CANNON AT FATEH BURJ OF GOLCONDA FORST RAMPART.pdf) |  R Balasubramaniam, S Sankaran and M Surender | 5311 |
| 919 | IJHS-40-2005-Issue-3 | Metallurgy | Indic | [Bhavani Sankar - The Forge-welded Iron Cannon at Jhansi Fort](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol3_2005_06_BHAVANI SANKAR THE FORGE WELDED IRON CANNON AT JHANSI FORT.pdf) |  D Neff and R Balasubramaniam | 26629 |
| 920 | IJHS-40-2005-Issue-3 | Metallurgy | Indic | [Kadak Bijli- The Forge-welded Iron Cannon at Jhansi Fort](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol3_2005_07_KADAK BIJLI THE FORGE WELDED IRON CANNON AT JHANSI FORT.pdf) |  R Balasubramaniam | 21132 |
| 921 | IJHS-40-2005-Issue-3 | Metallurgy | Indic | [Azdaha Paikar- The Composite Iron-Bronze Cannon at Musa Burj of Golconda Fort](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol3_2005_08_AZDAHA PAIKAR THE COMPOSITE IRON BROZE CANNON AT MUSA BURJ OF GOLCONDA FORT.pdf) |  R Balasubramaniam | 8487 |
| 922 | IJHS-40-2005-Issue-3 | Metallurgy | Indic | [Fath Raihbar - The Massive Bronze Cannon at Petla Burj of Golconda Fort](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol3_2005_09_FATH RAIHBAR THE MASSIVE BRONZE CANNON AT PETLA BURJ OF GOLCONDA FORT.pdf) |  R Balasubramaniam | 8715 |
| 923 | IJHS-40-2005-Issue-3 | Metallurgy | Indic | [Historical Notes: Fathullah Shirazi : Cannon, Multi- barrel Gun and Yarghu](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol3_2005_10_HISTORICAL NOTES.pdf) |  AK Bag | 1765 |
| 924 | IJHS-40-2005-Issue-3 | Other | Indic | [Supplement: Growth of Scientific Periodicals in India- (1901-1947)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol3_2005_11_SUPPELMENT.pdf) |  BK Sen | 28728 |
| 925 | IJHS-40-2005-Issue-4 | Metallurgy | Fareast | [Iron Cannons of China](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_01_IRON CANNONS OF CHINA.pdf) |  Donald B Wagner | 5363 |
| 926 | IJHS-40-2005-Issue-4 | Metallurgy | Western | [Monster Cannon: Wrought Iron Bombards of Europe](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_02_MONSTER CANNON WROUGHT IRON BOMBARDS OF EUROPE.pdf) |  Robert  Douglas Smith | 6006 |
| 927 | IJHS-40-2005-Issue-4 | Metallurgy | Indic | [Cannons of Eastern India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_03_CANNONS OF EASTERN INDIA.pdf) |  Pranab Kumar Chattopadhyay | 7624 |
| 928 | IJHS-40-2005-Issue-4 | Metallurgy | Indic | [Forge-welded Cannons in the Forts of Karimnagar District in Andhrapradesh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_04_FORGE WELDED CANNONS IN THE FORTS OF KARIMNAGAR DISTRICT IN THE ANDHRA PRADESH.pdf) |  S Jai Kishan | 5678 |
| 929 | IJHS-40-2005-Issue-4 | Metallurgy | Indic | [Development of Cannon Technology in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_05_DEVELOPMENT OF CANNON TECHNOLOGY IN INDIA.pdf) |  R Balasubramaniam | 13544 |
| 930 | IJHS-40-2005-Issue-4 | Other | Other | [Epic of Saltpetre to Gunpowder](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_06_EPIC OF SALTPETRE TO GUNPOWDER.pdf) |  Arun Kumar Biswas | 11534 |
| 931 | IJHS-40-2005-Issue-4 | Other | Indic | [Gunpowder Artillery and Military Architecture in South India (15-18th Century)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_07_GUNPOWDER ARTILLERY AND MILITARY ARCHITECTURE IN SOUTH INDIA (15-18TH CENTURY).pdf) |  Jean Deloche | 8694 |
| 932 | IJHS-40-2005-Issue-4 | Other | Indic | [Firepower-centric Warfare in India and the Military Modernization of the Marathas: 1740-1 818](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_08_FIREPOWER CENTRIC WARFARE IN INDIA AND MILITARY MODERNIZATION OF THE MARATHAS 1740-1.pdf) |  Kaushik Roy | 14140 |
| 933 | IJHS-40-2005-Issue-4 | Other | Indic | [Rockets under Haidar Ali and Tipu Sultan](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_09_ROCKETS UNDER HAIDAR ALI AND TIPU SULTAN'.pdf) |  Kaushik Roy | 24969 |
| 934 | IJHS-40-2005-Issue-4 | Other | Indic | [Historical Notes: Sukraniti on Guns, Cannon and Gunpowder](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Pages from Vol4_2005_10_HISTORICAL NOTES_1.pdf) |  AK Bag | 1806 |
| 935 | IJHS-40-2005-Issue-4 | Other | Indic | [Historical Notes: Saltpetre Manufacture and Marketing in Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_10_HISTORICAL NOTES_2.pdf) |  R Balasubramaniam and S Jai Kishan | 3258 |
| 936 | IJHS-40-2005-Issue-4 | Other | Indic | [Historical Notes: European Mercenary Artillerymen in Indian Subcontinent: 1500-1800](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_10_HISTORICAL NOTES_3.pdf) |  R Balasubramaniam | 1536 |
| 937 | IJHS-40-2005-Issue-4 | Other | Other | [Book Review: Science in Archaeology and Archaeo-Materials](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_11_BOOK REVIEW.pdf) |  DP Agrawal | 2703 |
| 938 | IJHS-40-2005-Issue-4 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_12_NEWS.pdf) |   | 491 |
| 939 | IJHS-40-2005-Issue-4 | Other | Indic | [Supplement: Growth of Scientific Periodicals in India- (1901-1947)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol4_2005_13_SUUPPLEMENT.pdf) |  BK Sen | 19834 |
| 940 | IJHS-41-2006-Issue-1 | Astronomy | Indic | [Some Celestial Observations associated with Krsna–lore](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_1_1_RNIyengar.pdf) |  R N Iyengar | 204 |
| 941 | IJHS-41-2006-Issue-1 | Biology | Indic | [Dietary Biodiversity in the Visnu– Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_1_2_PSensarma.pdf) |  Priyadarsan Sensarma | 195 |
| 942 | IJHS-41-2006-Issue-1 | Astronomy | Indic | [Polar Longitudes of the Suryasiddhanta and Hipparchus’ Commentary](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_1_3_KCHari.pdf) |  K Chandra Hari | 365 |
| 943 | IJHS-41-2006-Issue-1 | Astronomy | Indic | [Archaeoastronomy at Bhubaneswar: A Polygonal and Mathematical Model — Taraka](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_1_4_DBhattacharya.pdf) |  Deepak Bhattacharya and P C Naik | 922 |
| 944 | IJHS-41-2006-Issue-1 | Agriculture | Indic | [Some Medieval Manuscripts on Horticulture](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_1_5_JAshraf.pdf) |  Jaweed Ashraf | 252 |
| 945 | IJHS-41-2006-Issue-1 | Other | Indic | [Historical Note: Einstein and India: His Scientific, Intellectual, Social and Moral Link](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_1_6_HistoricalNotes.pdf) |  Sisir K Majumdar | 358 |
| 946 | IJHS-41-2006-Issue-1 | Medicine | Other | [Historical Note: Einstein, Molecule and Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_1_7_Einstien.pdf) |  Sisir K Majumdar | 122 |
| 947 | IJHS-41-2006-Issue-1 | Math | Other | [Historical Note: Magic Square for 2006](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_1_8_Magic Square.pdf) |   | 15 |
| 948 | IJHS-41-2006-Issue-1 | Math | Other | [Book Review– Pi: A Source Book](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_1_9_BookReview.pdf) |  R C Gupta | 131 |
| 949 | IJHS-41-2006-Issue-1 | Other | Other | [Notices](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_1_10_Notices.pdf) |   | 20 |
| 950 | IJHS-41-2006-Issue-1 | Other | Other | [Supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_1_11_Supplement_Grahalaghavam.pdf) |   | 982 |
| 951 | IJHS-41-2006-Issue-2 | Astronomy | Indic | [Calculations of Tithis: An Extension of Surya Siddhanta Formulation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_2_1_SBhujle.pdf) |  Sudha Bujhle and M N Vahia | 274 |
| 952 | IJHS-41-2006-Issue-2 | Astronomy | Indic | [Dhruvaka–Viksepa System of Astronomical Coordinates](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_2_2_KDAbhyankar.pdf) |  K D Abhyankar | 88 |
| 953 | IJHS-41-2006-Issue-2 | Metallurgy | Indic | [Brass and Tin Metallurgy in the Ancient & Medievel World: India’s Primacy and the Technology transfer to the West](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_2_3_AKBiswas.pdf) |  Arun Kumar Biswas | 201 |
| 954 | IJHS-41-2006-Issue-2 | Astronomy | Arabic | [Astronomical tables of Zid–I Muhammad Shahi and their relation to Tabulae Astronomicae of De La Hire](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_2_4_VNSharma.pdf) |  Virendra N Sharma | 611 |
| 955 | IJHS-41-2006-Issue-2 | Other | Other | [Historical Notes: P.N Bose (1855–1934) — An Eminent Geologist](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_2_5_HistoricalNotes.pdf) |  Ranatosh Chakrabarti | 423 |
| 956 | IJHS-41-2006-Issue-2 | Math | Other | [Book Review: The Role of Mathematics in Human Structure](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_2_6_BookReview.pdf) |  Siddhartha Kundu | 49 |
| 957 | IJHS-41-2006-Issue-2 | Other | Other | [Orbituay: K V Sarma (1919–2005)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_2_7_Obituary.pdf) |   | 216 |
| 958 | IJHS-41-2006-Issue-2 | Other | Other | [Supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_2_8_SupplementGrahalaghvam.pdf) |   | 5856 |
| 959 | IJHS-41-2006-Issue-3 | Philosophy | Indic | [Atomism of Nyaya–Vaisesika Vs Jainism— A Scientific Appraisal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_3_1_AKMishra.pdf) |  Ashoka K Mishra | 196 |
| 960 | IJHS-41-2006-Issue-3 | Astronomy | Indic | [Epoch of Ramakasiddhanta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_3_2_KCHari.pdf) |  K Chandra Hari | 105 |
| 961 | IJHS-41-2006-Issue-3 | Astronomy | Indic | [Is Siva Iconography inspired by the Stars?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_3_3_NRaghavan.pdf) |  Nirupama Raghavan | 784 |
| 962 | IJHS-41-2006-Issue-3 | Metallurgy | Indic | [Copper Production Process as described in an Early Fourteenth Century and Prakarta Text composed Thakkura Pheru](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_3_4_RKDube.pdf) |  R K Dube | 397 |
| 963 | IJHS-41-2006-Issue-3 | Astronomy | Indic | [Historical Notes: Eclipse Period 3339 in Rigveda in support of R N Iyrengar’s Thesis](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_3_5_RNIyengar.pdf) |  K D Abhyankar | 37 |
| 964 | IJHS-41-2006-Issue-3 | Math | Indic | [Historical Notes: Sulba–sutras: Earliest Studies and a Newly Published Manual](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_3_6_RCGupta.pdf) |  R C Gupta | 78 |
| 965 | IJHS-41-2006-Issue-3 | Other | Western | [Historical Notes: Alexandria: The Greatest Centre of Learning in the Antiquity](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_3_7_SisirKMajumdar.pdf) |  Sisir K Majumdar | 69 |
| 966 | IJHS-41-2006-Issue-3 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_3_8_BookReview.pdf) |  Rajesh Kocchar | 1322 |
| 967 | IJHS-41-2006-Issue-3 | Other | Other | [Supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol41_3_9_SupplementGrahalaghavam.pdf) |   | 8353 |
| 968 | IJHS-42-2007-Issue-1 | Metallurgy | Indic | [Sources of Gold in India as described by Thakkura Pheru – An Assessment](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_1_1_RKDubey.pdf) |  R K Dubey | 33 |
| 973 | IJHS-42-2007-Issue-1 | Astronomy | Indic | [Historical Note: In Search of Indian Records of Supernovae](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_1_6_HJoglekar.pdf) |  Hrishikesh Joglekar | 113 |
| 974 | IJHS-42-2007-Issue-1 | Astronomy | Indic | [Historical Note: Possible Indian Records of Supernova 1054 AD?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_1_7_NRatnasree.pdf) |  N Rathnasree and Sanath Kumar | 192 |
| 975 | IJHS-42-2007-Issue-1 | Astronomy | Western | [Historical Note: Records of Celestial Events by European Travellers during Medieval Times](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_1_8_BSShyalaja.pdf) |  B S Shylaja | 16 |
| 977 | IJHS-42-2007-Issue-1 | Astronomy | Indic | [Supplement: Karanakutuhalam of Bhaskaracarya II](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_1_10_Supplement.pdf) |  S Balachandra Rao | 212 |
| 978 | IJHS-42-2007-Issue-2 | Biology | Indic | [Enthnobiological Information in Parasara Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_1_PSensarma.pdf) |  Priyadarsan Sensarma | 174 |
| 979 | IJHS-42-2007-Issue-2 | Astronomy | Indic | [Saptarsi' Visit to different Naksatras: Subtle Effect of Earth’s Precession](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_2_ASule.pdf) |  Ankit Sule et al. | 169 |
| 980 | IJHS-42-2007-Issue-2 | Math | Indic | [Ayrabhata’s Root Extraction Methods](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_3_AParekh.pdf) |  Abhishek Parakh | 107 |
| 981 | IJHS-42-2007-Issue-2 | Math | Indic | [Yantras or Mystic Diagrams: A Wide Area for Study in Ancient and Medieval Indian Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_4_RCGupta.pdf) |  R C Gupta | 552 |
| 982 | IJHS-42-2007-Issue-2 | Metallurgy | Indic | [Zafarbaksh – The Composite Mughal Cannon of Aurangzeb at Fort William in Kolkata](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_5_RBalasubramaniam.pdf) |  R Balasubramaniam and Pranab K Chattopadhyay | 576 |
| 983 | IJHS-42-2007-Issue-2 | Astronomy | Indic | [Historical Note: BG Tilak and Ancient Indian Astronomy – A Reappraisal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_6_KDAbhyankar.pdf) |  K D Abhyankar | 135 |
| 984 | IJHS-42-2007-Issue-2 | Astronomy | Indic | [Historical Note: BG Tilak and Ancient Indian Astronomy - A Reappraisal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_6_KDAbhyankar.pdf) |  K D Abhyankar | 135 |
| 985 | IJHS-42-2007-Issue-2 | Astronomy | Indic | [Historical Note: Epoch of Lalla – An Overview](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_7_KCHari.pdf) |  K Chandra Hari | 103 |
| 986 | IJHS-42-2007-Issue-2 | Agriculture | Indic | [Historical Note: Cultivation of Naturally Coloured Cotton in India in the 19th century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_8_RRanade.pdf) |  Rekha Ranade | 58 |
| 987 | IJHS-42-2007-Issue-2 | Philosophy | Other | [Historical Note: Reception of Relativity Theory in Different Social, Political and Religious Ideolog](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_9_SKMajumdar.pdf) |  Sisir Kumar Majumdar | 142 |
| 988 | IJHS-42-2007-Issue-2 | Medicine | Indic | [Book Review: The Legacy of Susruta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_10_BookReviewDWajastyk.pdf) |  D Wujastyk | 59 |
| 989 | IJHS-42-2007-Issue-2 | Astronomy | Western | [Book Review: Galileo Galilei – When the World Stood Still](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_11_BookReviewMSSriram.pdf) |  M S Sriram | 64 |
| 990 | IJHS-42-2007-Issue-2 | Other | Indic | [Book Review: Chemical Sciences in Colonial India: The Science in Social History](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_12_BookReviewJNSinha.pdf) |  Jagdish N Sinha | 28 |
| 991 | IJHS-42-2007-Issue-2 | Other | Other | [Obituary: Sushil Kumar Mukherjee (1914-2006)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_13_Obituary.pdf) |  Arun Kumar Biswas | 93 |
| 992 | IJHS-42-2007-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_14_News.pdf) |   | 42 |
| 993 | IJHS-42-2007-Issue-2 | Math | Indic | [Supplement: Karanakutuhalam of Bhaskaracarya II](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_2_15_Supplement.pdf) |  S Balachandra Rao | 562 |
| 994 | IJHS-42-2007-Issue-3 | Metallurgy | Fareast | [Chinese Steel Making Techniques with a Note on Indian Wootz Steel in China](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_1_DBWagner.pdf) |  Donald B Wagner | 521 |
| 995 | IJHS-42-2007-Issue-3 | Metallurgy | Other | [Production and Trade of Crucible Steel in Central Asia](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_2_AFeuerbach.pdf) |  Ann Feuerbach | 272 |
| 996 | IJHS-42-2007-Issue-3 | Metallurgy | Indic | [On the Question of Possible Transfer of Steel Technology from India to Europe through the Muslim Middle East](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_3_JLCoze.pdf) |  Jean Le Coze | 398 |
| 997 | IJHS-42-2007-Issue-3 | Metallurgy | Indic | [On the Origin of the terms Wootz‚ Hinduwani and Pulad](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_4_AFeuerbach.pdf) |  Ann Feuerbach‚ R Balasubramaniam and S Kalyanaraman | 117 |
| 998 | IJHS-42-2007-Issue-3 | Metallurgy | Indic | [From Wrought Iron to Steel: Beginning of Steel Making in Eastern India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_5_PKChattopadhyay.pdf) |  Pranab K Chattopadhyay‚ Pradeep K Behera and Prasanta K Datta | 465 |
| 999 | IJHS-42-2007-Issue-3 | Metallurgy | Indic | [Towards the Wootz: Iron and Steel Technology in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_6_VTripathi.pdf) |  Vibha Tripathi | 298 |
| 1000 | IJHS-42-2007-Issue-3 | Metallurgy | Indic | [New Insights on Classification of Iron-Carbon Alloys‚ Specially High Carbon Steels‚ in Rasaratnasamuccaya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_7_RBalasubramaniam.pdf) |  R Balasubramaniam and S Kalyanaraman | 256 |
| 1001 | IJHS-42-2007-Issue-3 | Metallurgy | Indic | [Survey of Iron and Wootz Steel Production Sites in Northern Telangana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_8_SJaikishan.pdf) |  S Jaikishan | 414 |
| 1002 | IJHS-42-2007-Issue-3 | Metallurgy | Indic | [Material Evidences for Wootz Steel Production in Northern Telangana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_9_SJaikishan.pdf) |  S Jaikishan and R Balasubramaniam | 579 |
| 1003 | IJHS-42-2007-Issue-3 | Culture | Indic | [Social Aspects of  Wootz Steel Manufacture in Northern Telangana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_10_SJaikishan.pdf) |  S Jaikishan and R Balasubramaniam | 262 |
| 1004 | IJHS-42-2007-Issue-3 | Metallurgy | Indic | [On the Varied Applications of Wootz Steel](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_11_RBalasubramaniam.pdf) |  R Balasubramaniam | 494 |
| 1005 | IJHS-42-2007-Issue-3 | Metallurgy | Indic | [Historical Note: Wootz Steel Received by Alexander](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_12_HistoricalNoteRBalasubramaniam.pdf) |  R Balasubramaniam | 126 |
| 1006 | IJHS-42-2007-Issue-3 | Metallurgy | Other | [Historical Note: Crucibal Steel in Sri Lanka in the First Millennium AD and the Early Twentieth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_13_HistoricalNoteGJuleff.pdf) |  Gill Juleff | 24 |
| 1007 | IJHS-42-2007-Issue-3 | Metallurgy | Indic | [Historical Note: Swords of Sirohi](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_14_HistoricalNoteLPandey.pdf) |  Lalit Pandey | 31 |
| 1008 | IJHS-42-2007-Issue-3 | Metallurgy | Other | [Historical Note: Recreating Wootz Steel Outside India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_3_15_Historical NoteRBalasubramaniam.pdf) |  R Balasubramaniam | 96 |
| 1009 | IJHS-42-2007-Issue-4 | Metallurgy | Other | [Damascus Steels: History‚ Processing‚ Properties and Carbon Dating](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_1_JWadsworth.pdf) |  J Wadsworth | 454 |
| 1010 | IJHS-42-2007-Issue-4 | Metallurgy | Other | [Pattern Formation in Wootz Damascus Steel Swords and Blades](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_2_JVerhoeven.pdf) |  John Verhoeven | 358 |
| 1011 | IJHS-42-2007-Issue-4 | Metallurgy | Other | [Wootz Decarburisation during the forging of a Sword](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_3_JLCoze.pdf) |  Jean Le Coze and Asdin Aoufi | 218 |
| 1012 | IJHS-42-2007-Issue-4 | Metallurgy | Other | [Cast Iron: The Elusive Feedstock of Crucible Steel](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_4_PTCraddock.pdf) |  Paul T Craddock | 188 |
| 1013 | IJHS-42-2007-Issue-4 | Metallurgy | Other | [Microstructural Characterization along the length of a Wedge Shaped Wootz Steel Implement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_5_VKumar.pdf) |  Vinod Kumar‚ M R Barnett‚ R Balasubramaniam and S Jaikishan | 548 |
| 1014 | IJHS-42-2007-Issue-4 | Metallurgy | Other | [New Insights on the Mechanism of Carbide Banding in Thermomechanically Processed Wootz Steel Obtained Using Electron Back Scattering Diffraction](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_6_MRBarnett.pdf) |  M R Barnett and R Balasubramaniam | 392 |
| 1015 | IJHS-42-2007-Issue-4 | Metallurgy | Indic | [Analysis of Wootz Steel Crucibles from Northern Telangana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_7_RBalasubramaniam.pdf) |  R Balasubramaniam‚ Anubhav Pandey and S Jaikishan | 444 |
| 1016 | IJHS-42-2007-Issue-4 | Metallurgy | Indic | [On Higher Carbon and Crucible Steels in Southern India: Further Insights from Mel-Siruvalur‚ Kodumanal and Pattinam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_8_SSrinivasan.pdf) |  Sharada Srinivasan | 401 |
| 1017 | IJHS-42-2007-Issue-4 | Metallurgy | Indic | [Historical Note: Konasamudram: The Famous Wootz Steel Production Center](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_9_HistoricalNotes.pdf) |  S Jaikishan and R Balasubramaniam | 74 |
| 1018 | IJHS-42-2007-Issue-4 | Metallurgy | Indic | [Historical Note: Interview with Wootz Steel Worker from Konapuram Village in Northern Telangana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_10_SJaikishan.pdf) |  S Jaikishan and R Balasubramaniam | 68 |
| 1019 | IJHS-42-2007-Issue-4 | Metallurgy | Other | [Book Review: Persian Steel: The Tanavoli Collection](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_11_BookReview.pdf) |  R Balasubramaniam | 137 |
| 1020 | IJHS-42-2007-Issue-4 | Metallurgy | Indic | [Supplement: Khadgalaksana Siromani of Navanappa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol42_4_12_Supplement.pdf) |  S Jaikishan | 552 |
| 1021 | IJHS-43-2008-Issue-1 | Astronomy | Indic | [Archaic Astronomy of Parauara and Vrddha Garga](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_1_RNIyengar.pdf) |  R N Iyengar | 220 |
| 1022 | IJHS-43-2008-Issue-1 | Metallurgy | Indic | [Recent Bronze Hoard from West Bengal: Analytical Studies](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_2_SSantra.pdf) |  Sumita Santra‚ Gautam Sengupta‚ Dipan Bhattacharya‚ Manoranjan Sarkar‚ Prati | 208 |
| 1023 | IJHS-43-2008-Issue-1 | Other | Indic | [Water Resources in the Hill Forts of South India (14—18th Century)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_3_JDeloche.pdf) |  Jean Deloche | 344 |
| 1024 | IJHS-43-2008-Issue-1 | Other | Indic | [Two Recently Discovered Patents of Professor Jagadis Chunder Bose and India’s First Electronics Technology Transfer to the West](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_4_PKBondyopadhyay.pdf) |  Probir K Bondyopadhyay and Suchanda Banerjee | 435 |
| 1025 | IJHS-43-2008-Issue-1 | Astronomy | Indic | [Historical Note: On the Precessional Movement of Saptarsis](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_5_KDAbhyankar.pdf) |  K D Abhyankar | 148 |
| 1026 | IJHS-43-2008-Issue-1 | Math | Indic | [Historical Note: True Laksa—Scale Numeration System of the Valmiki—Ramayana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_6_RCGupta.pdf) |  R C Gupta | 99 |
| 1027 | IJHS-43-2008-Issue-1 | Astronomy | Indic | [Historical Note: Astro—Navigational Aspects of the Bhumi Anla](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_7_DBhattacharya.pdf) |  Deepak Bhattacharya and PC Naik | 195 |
| 1028 | IJHS-43-2008-Issue-1 | Math | Indic | [Historical Note: Srstikrama Construction of Sriyantra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_8_DNUkidwe.pdf) |  D N Ukidwe | 158 |
| 1029 | IJHS-43-2008-Issue-1 | Astronomy | Indic | [Historical Note: Select Palm Leaf Manuscripts in Orissa State Museum‚ Bhubaneswar on Astronomy and Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_9_DBhattacharya.pdf) |  Deepak Bhattacharya | 102 |
| 1030 | IJHS-43-2008-Issue-1 | Medicine | Other | [Historical Note: The Gifts of Chemistry to Modern Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_10_SKMajumdar.pdf) |  Sisir Kumar Majumdar | 100 |
| 1031 | IJHS-43-2008-Issue-1 | Other | Indic | [Book Review: Social History of Science in Colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_11_BookReview_CPalit.pdf) |  Chittabrata Palit | 78 |
| 1032 | IJHS-43-2008-Issue-1 | Culture | Indic | [Book Review: The Bengal Renaissance](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_12_BookReview_AKBiswas.pdf) |  A K Biswas | 113 |
| 1033 | IJHS-43-2008-Issue-1 | Other | Other | [Obituary: KD Abhyankar (1928—2007)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_13_Obituary.pdf) |   | 84 |
| 1034 | IJHS-43-2008-Issue-1 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_14_News.pdf) |  Shabnam Shukla | 73 |
| 1035 | IJHS-43-2008-Issue-1 | Astronomy | Indic | [Supplement: Karanakutuhalam of Bhaskaracarya II](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_1_15_Supplement.pdf) |  S Balachandra Rao | 291 |
| 1036 | IJHS-43-2008-Issue-2 | Medicine | Fareast | [Glimpses of Ayurveda in Medieval Chinese Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_2_1_VJDeshpande.pdf) |  Vijaya Jayant Deshpande | 303 |
| 1037 | IJHS-43-2008-Issue-2 | Medicine | Indic | [Encounter In Anatomical Knowledge: East And West](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_2_2_JBhattacharya.pdf) |  Jayanta Bhattacharya | 252 |
| 1038 | IJHS-43-2008-Issue-2 | Medicine | Indic | [Environment and Cholera in Kashmir during Nineteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_2_3_RAkhtar.pdf) |  Rais Akhtar | 196 |
| 1039 | IJHS-43-2008-Issue-2 | Medicine | Indic | [Ram Nath Chopra (1882—1973) — A Vissionary in Pharmaceutical Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_2_4_HSingh.pdf) |  Harkishan Singh | 224 |
| 1040 | IJHS-43-2008-Issue-2 | Metallurgy | Indic | [Historical Note: Ancient Methods of Preserving Copper Plate Grants](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_2_5_SKAcharya.pdf) |  Subrata Kumar Acharya | 126 |
| 1041 | IJHS-43-2008-Issue-2 | Medicine | Indic | [Historical Note: Popular Response to Epidemics in Colonial Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_2_6_CPalit.pdf) |  Chittabrata Palit | 90 |
| 1042 | IJHS-43-2008-Issue-2 | Metallurgy | Indic | [Historical Note: Superiority of Makrana (Rajasthan) Marbles](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_2_7_RKDube.pdf) |  R K Dube | 94 |
| 1043 | IJHS-43-2008-Issue-2 | Philosophy | Western | [Historical Note: Socio—Political Thoughts of Einstein](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_2_8_SKMjumdar.pdf) |  Sisir K Majumdar | 123 |
| 1044 | IJHS-43-2008-Issue-2 | Metallurgy | Indic | [Book Review: Story of the Delhi Iron Pillar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_2_9_BookReview.pdf) |  Arun Kumar Biswas | 99 |
| 1045 | IJHS-43-2008-Issue-2 | Medicine | Indic | [Obituary: Priyavrata Sharma — A Legendary Personality (1920—2007)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_2_10_Obituary.pdf) |  P V Tiwari | 250 |
| 1046 | IJHS-43-2008-Issue-3 | Astronomy | Indic | [Vedanga Jyotisa — Where and When?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_3_1_PGondhalekar.pdf) |  Prabhakar Gondhalekar | 217 |
| 1047 | IJHS-43-2008-Issue-3 | Astronomy | Arabic | [The Jewish calendar and its relation to the Christian holidays as described by a Muslim Mathematician—Astronomer in 852 AD](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_3_2_ACohen.pdf) |  Ariel Cohen | 219 |
| 1048 | IJHS-43-2008-Issue-3 | Metallurgy | Indic | [Investigations on Ancient High — Tin Bronze Excavated From Lower Bengal Region of Tilpi](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_3_3_PKDatta.pdf) |  Prasanta K Datta‚ Pranab K Chattopadhyay and Barnali Mandal | 431 |
| 1049 | IJHS-43-2008-Issue-3 | Astronomy | Indic | [Historical Note: Archaeo—Astronomy of Nataraja](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_3_4_DBhattacharya.pdf) |  Deepak Bhattacharya | 282 |
| 1050 | IJHS-43-2008-Issue-3 | Astronomy | Indic | [Historical Note: Karka—Rasi—Valaya—The Instrument on the Back Wall of the Misra Yantra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_3_5_NRatnasree.pdf) |  N Rathnasree‚ Anurag Garg‚ Arpita Pandey and R K Chikara | 180 |
| 1051 | IJHS-43-2008-Issue-3 | Other | Other | [Historical Note: Indo—American Relation with reference to Bernard Peters](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_3_6_RSingh.pdf) |  Rajinder Singh | 145 |
| 1052 | IJHS-43-2008-Issue-3 | Other | Other | [Book Review: Studies in the History of the Exact Sciences in Honour of David Pingree](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_3_7_BookReview.pdf) |  S Balachandra Rao | 168 |
| 1053 | IJHS-43-2008-Issue-3 | Other | Other | [Obituary: Kripa Shankar Shukla (1918—2007)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_3_8_Obituary.pdf) |  Yukio Ohashi | 122 |
| 1054 | IJHS-43-2008-Issue-3 | Other | Other | [News: National Workshop on Preserving our Scientific Heritage‚ held at Indian Institute of Astrophysics‚ Bangalore‚ January 21—22‚ 2008 — A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_3_9_News.pdf) |  A Vagiswari‚ Christina Birdie and Indira Chowdhury | 94 |
| 1055 | IJHS-43-2008-Issue-3 | Astronomy | Indic | [Supplement: Karanakutuhalam of Bhaskaracarya II](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_3_10_Supplement.pdf) |  S Balachandra Rao | 454 |
| 1056 | IJHS-43-2008-Issue-4 | Astronomy | Indic | [Intercalation in the Vedic Texts](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_4_1_PGondhalekar.pdf) |  Prabhakar Gondhalekar | 282 |
| 1057 | IJHS-43-2008-Issue-4 | Astronomy | Indic | [Conjunctions‚ Transits and Occultations by Siddhantic Procedures](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_4_2_Sbalachandrarao.pdf) |  S Balachandra Rao‚ S K Uma and Padmaja Venugopal | 372 |
| 1058 | IJHS-43-2008-Issue-4 | Math | Indic | [Interpolation of Sines by Successive Approximation Method](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_4_3_VMMallayya.pdf) |  V Madhukar Mallayya | 149 |
| 1059 | IJHS-43-2008-Issue-4 | Other | Western | [Scientific Research Papers in the Philosophical Transactions of the Royal Society of London‚ 1665—1800: The Development of Physics in the footsteps of Sir Isaac Newton](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_4_4_SDucheyne.pdf) |  S Ducheyne | 681 |
| 1060 | IJHS-43-2008-Issue-4 | Medicine | Indic | [Historical Note: Khem Singh Grewal (1894—4965) — A Prominent Medico—Pharmaceutical Professional](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_4_5_HSingh.pdf) |  Harkishan Singh | 187 |
| 1061 | IJHS-43-2008-Issue-4 | Medicine | Other | [Historical Note: Robotics (Cybernetics) in Medical Science: Blessing or Blight](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_4_6_SKMajumdar.pdf) |  Sisir K Majumdar | 55 |
| 1062 | IJHS-43-2008-Issue-4 | Metallurgy | Indic | [Book Review: History of Iron Technology in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_4_7_BookReviewKRajan.pdf) |  K Rajan | 47 |
| 1063 | IJHS-43-2008-Issue-4 | Metallurgy | Indic | [Book Review: Marvels of Indian Iron through the Ages](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_4_8_BookReviewBPrakash.pdf) |  B Prakash | 83 |
| 1064 | IJHS-43-2008-Issue-4 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_4_9_News.pdf) |   | 18 |
| 1065 | IJHS-43-2008-Issue-4 | Other | Other | [Books received for Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol43_4_10_BooksreceivedforReview.pdf) |   | 24 |
| 1066 | IJHS-44-2009-Issue-1 | Other | Other | [Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_1_0_Editorial.pdf) |   | 318 |
| 1067 | IJHS-44-2009-Issue-1 | Medicine | Indic | [Ecological concept in Ayurveda: Nature-man relations](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_1_1_MRoy.pdf) |  Mira Roy | 71 |
| 1068 | IJHS-44-2009-Issue-1 | Biology | Indic | [Biodiversity: Methods of Conservation in the Usanah Samita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_1_2_PSensarma.pdf) |  Priyadarsan Sensarma | 35 |
| 1069 | IJHS-44-2009-Issue-1 | Metallurgy | Indic | [On technical analysis of Cannon Shot Crater on Delhi Iron Pillar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_1_3_RBalasubramaniam.pdf) |  R Balasubramaniama, V N Prabhakarb and Manish Shankara | 342 |
| 1070 | IJHS-44-2009-Issue-1 | Metallurgy | Fareast | [Religious traditions of Ancient Iron and Steel Craftsmen of India and Japan](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_1_4_BPrakash.pdf) |  B. Prakash | 459 |
| 1071 | IJHS-44-2009-Issue-1 | Other | Indic | [Science of Siege Warfare in India during the Great Mutiny: 1857-58](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_1_5_KRoy.pdf) |  Kaushik Roy | 61 |
| 1072 | IJHS-44-2009-Issue-1 | Lingiustics | Indic | [Historical Notes: On the Sanskrit word, Svarnaja used for metal, tin](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_1_6_Historical Notes.pdf) |  R.K. Dube | 63 |
| 1073 | IJHS-44-2009-Issue-1 | Culture | Indic | [Historical Notes: Identification of Asmaka](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_1_7_KCHari.pdf) |  K Chandra Hari | 62 |
| 1074 | IJHS-44-2009-Issue-1 | Biology | Western | [Historical Notes: The Genius of Darwin- Two Hundred Years](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_1_8_SKMajumdar.pdf) |  Sisir K. Majumdar | 40 |
| 1075 | IJHS-44-2009-Issue-1 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_1_9_Book Review.pdf) |  M.S. Sriram | 43 |
| 1076 | IJHS-44-2009-Issue-2 | Other | Other | [Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_0_Editorial.pdf) |   | 144 |
| 1077 | IJHS-44-2009-Issue-2 | Medicine | Indic | [Transmitting the Carakasamhita: A History of the Tradition](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_1_CPechhia.pdf) |  Cristina Pecchia | 66 |
| 1078 | IJHS-44-2009-Issue-2 | Medicine | Indic | [Towards a critical edition of the Carakasamhita Vimanasthana - First results](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_2_PAMaas.pdf) |  Philipp A Maas | 636 |
| 1079 | IJHS-44-2009-Issue-2 | Medicine | Indic | [New Evidence for the Textual and Cultural History of the Susruta Samhita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_3_DWujastyk.pdf) |  Dominik Wujastyk | 2110 |
| 1080 | IJHS-44-2009-Issue-2 | Medicine | Indic | [Some reflections on Siddha medicine in Tamilnadu](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_4_KGZysk.pdf) |  Kenneth G Zysk | 37 |
| 1081 | IJHS-44-2009-Issue-2 | Medicine | Indic | [Metals, minerals and medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_5_PT Craddock.pdf) |  Paul T Craddock | 512 |
| 1082 | IJHS-44-2009-Issue-2 | MindSciences | Indic | [Narrative well-being: Anandarayamakhin's the Joy of Life (Jivanandanam)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_6_ACerulli.pdf) |  Anthony Cerulli | 65 |
| 1083 | IJHS-44-2009-Issue-2 | Medicine | Indic | [An analysis of formulation of Vaitarana  [Basti] on the basis of Ayurvedic texts and Commentaries](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_7_MSankaranarayana.pdf) |  Manoj Sankaranarayana | 85 |
| 1084 | IJHS-44-2009-Issue-2 | Philosophy | Indic | [Logic, Debate and Epistemology in Ancient Indian medicine and Philosophy - An Investigation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_8_KPrasendanz.pdf) |  Karin Preisendanz | 221 |
| 1085 | IJHS-44-2009-Issue-2 | Medicine | Indic | [Historical Note: Depiction of Human Anatomy in Indian Archaeology- A select report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_9_HistoricalNotes.pdf) |  Deepak Bhattacharya | 323 |
| 1086 | IJHS-44-2009-Issue-2 | Medicine | Indic | [Historical Note: Eye Diseases in traditional Siddha System of Medicine - An Overview](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_10_SPrema.pdf) |  S. Prema | 159 |
| 1087 | IJHS-44-2009-Issue-2 | Medicine | Indic | [Historical Note:  Ayurvedic Concept of Cancer and its treatment](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_11_RSarkar.pdf) |  Roma Sarkar | 42 |
| 1088 | IJHS-44-2009-Issue-2 | Medicine | Indic | [Historical Note: Dr. Subodh Mitra (1896-1961) - A Visionary of Cancer Treatment and Research in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_12_SDas.pdf) |  Sukta Das | 158 |
| 1089 | IJHS-44-2009-Issue-2 | Medicine | Indic | [Supplement: Rasaprakasa Sudhakara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_2_13_Supplement.pdf) |   | 145 |
| 1090 | IJHS-44-2009-Issue-3 | Astronomy | Indic | [Connections Between The Vedanga Jyotisa And Other Vedic Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_3_1_RNIyengar.pdf) |  R N Iyengar | 46 |
| 1091 | IJHS-44-2009-Issue-3 | Metallurgy | Fareast | [Bintie— The Wootz Steel In Ancient China](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_3_2_WLox.pdf) |  William Lox | 234 |
| 1092 | IJHS-44-2009-Issue-3 | Culture | Indic | [New Insights On Architects Of Taj](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_3_3_RBalasubramaniampdf.pdf) |  R Balasubramaniam | 162 |
| 1093 | IJHS-44-2009-Issue-3 | Other | Indic | [Technology Transfer And The Evolution Of Ordnance Establishment In British—India— 1639 to 1856](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_3_4_KRoy.pdf) |  Kaushik Roy | 66 |
| 1094 | IJHS-44-2009-Issue-3 | Other | Other | [Historical Notes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_3_5_Historical Notes.pdf) |  Sisir K Majumdar | 87 |
| 1095 | IJHS-44-2009-Issue-3 | Math | Indic | [The Circular Drona— KuRma and Sarathacakra Citis in the Sulbasu— Tras](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_3_6_RBhattacharya.pdf) |  R Bhattacharya | 114 |
| 1096 | IJHS-44-2009-Issue-3 | Other | Indic | [History Of Science Program Of The Indian National Science Academy (1959— 2009)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_3_7_AKBag.pdf) |  A K Bag | 35 |
| 1097 | IJHS-44-2009-Issue-3 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_3_8_AKBiswaspdf.pdf) |  A K Biswas | 24 |
| 1098 | IJHS-44-2009-Issue-3 | Astronomy | Indic | [Conference on Indian Astronomy and Mathematics In Ancient India— A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_3_9_News.pdf) |  J M Delire | 23 |
| 1099 | IJHS-44-2009-Issue-3 | Other | Indic | [History Of Science Project Investigator’s Meet Cum Workshop On 13-15th April 2009 : A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_3_10_SShuklapdf.pdf) |  Shabnam Shukla | 18 |
| 1100 | IJHS-44-2009-Issue-3 | Medicine | Indic | [Rasaprakasa Sudhakarachap— Ch2 Supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_11_SupplementRasaprakasasudhakara.pdf) |  Damodar Joshi | 46 |
| 1101 | IJHS-44-2009-Issue-4 | Astronomy | Indic | [The Vedic Naksatras— A Reappraisal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_1_PGondhalekar.pdf) |  Prabhakar Gondhalekar | 112 |
| 1102 | IJHS-44-2009-Issue-4 | Agriculture | Indic | [Agriculture In The Vedic Period](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_2_MRoy.pdf) |  Mira Roy | 82 |
| 1103 | IJHS-44-2009-Issue-4 | Culture | Indic | [New Insights On Artisans Of Taj](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_3_RBalasubramaniam.pdf) |  R Balasubramaniam | 330 |
| 1104 | IJHS-44-2009-Issue-4 | Culture | Indic | [Stableships Of Tiruppudaimarudur And Tirukkurunkudi (South India)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_4_JDeloche.pdf) |  Jean Deloche | 797 |
| 1105 | IJHS-44-2009-Issue-4 | Medicine | Indic | [Bishnupada Mukerji (1903—79): A Medicopharmaceutical Professional Of Eminence](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_5_HSingh.pdf) |  Harkishan Singh | 118 |
| 1106 | IJHS-44-2009-Issue-4 | Agriculture | Other | [Historical Notes:Spice And Herb— A Historical Overview](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_6_Historical Notes.pdf) |  Sisir K Majumdar | 20 |
| 1107 | IJHS-44-2009-Issue-4 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_7_AKBag.pdf) |  A K Bag | 34 |
| 1108 | IJHS-44-2009-Issue-4 | Math | Other | [Seminar Report CNRS—NYU Workshop On Early Mathematics: A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_8_SeminarReport.pdf) |  Toke L Knudsen | 13 |
| 1109 | IJHS-44-2009-Issue-4 | Other | Other | [The 69th Session Of The Indian History Congress :Kannur 28-30 December 2008— A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_9_SShukla.pdf) |  Shabnam Shukla | 17 |
| 1110 | IJHS-44-2009-Issue-4 | Lingiustics | Indic | [14th World Sanskrit Conference— Section On Scientific Literature_A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_10_CPecchia.pdf) |  Cristina Pecchia | 21 |
| 1111 | IJHS-44-2009-Issue-4 | Other | Other | [Books Received For Review In IJHS 2009](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_11_News.pdf) |   | 13 |
| 1112 | IJHS-44-2009-Issue-4 | Other | Other | [Reminiscence](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_4_12_Reminiscenses.pdf) |   | 10 |
| 1113 | IJHS-44-2009-Issue-4 | Medicine | Indic | [Rasaprakasa Sudhakara— Chap4](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol44_13_SupplementRasaprakasasudhakara.pdf) |  Damodar Joshi | 184 |
| 1114 | IJHS-45-2010-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_0_Contents.pdf) |   | 11 |
| 1115 | IJHS-45-2010-Issue-1 | Astronomy | Indic | [Comets and Meteoritic Showers in the Rigveda and their significance](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_1_RNIyengar.pdf) |  R.N. Iyengar | 113 |
| 1116 | IJHS-45-2010-Issue-1 | Culture | Indic | [Roman Trade Routes in South India: Geographical and Technical Considerations (c. 1st cent. BC – 5th cent. AD)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_2_JDeloche.pdf) |  Jean Deloche | 180 |
| 1117 | IJHS-45-2010-Issue-1 | Math | Indic | [Bhagyashree Bavare‚ Mahesh Shetti and P.P. Divakaran Techniques of Ancient Empirical Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_4_RCGupta.pdf) |  R.C. Gupta | 183 |
| 1118 | IJHS-45-2010-Issue-1 | Metallurgy | Indic | [Understanding Alloy Design Principles and Cast Metal Technology in Hot Molds for Medieval Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_5_BMandalarticle.pdf) |  B. Mandal, Pranab K. Chattopadhyay, D. Misra et al. | 937 |
| 1119 | IJHS-45-2010-Issue-1 | Biology | Western | [Historical Note: Marx and Darwin Connection in London](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_6_SKMajumdar.pdf) |  Sisir Kr. Majumdar | 15 |
| 1120 | IJHS-45-2010-Issue-1 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_7_Bookreview.pdf) |  Madhvendra Narayan | 27 |
| 1121 | IJHS-45-2010-Issue-1 | Other | Other | [Seminar Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_8_SeminarReport.pdf) |  Gulfishan Khan | 20 |
| 1122 | IJHS-45-2010-Issue-1 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_9_News.pdf) |   | 18 |
| 1123 | IJHS-45-2010-Issue-1 | Other | Other | [Awards and Honours](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_10_Awards.pdf) |   | 13 |
| 1124 | IJHS-45-2010-Issue-1 | Medicine | Indic | [Supplement: Rasaprakasa Sudhakara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_11_1_Supplement.pdf) |  Damodar Joshi | 45 |
| 1125 | IJHS-45-2010-Issue-1 | Lingiustics | Indic | [Supplement: Chapter 6— Sanskrit Text](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_11_2_Supplement.pdf) |   | 44 |
| 1126 | IJHS-45-2010-Issue-1 | Other | Indic | [Supplement: Chapter 6— English Translation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_11_3_Supplement.pdf) |   | 59 |
| 1127 | IJHS-45-2010-Issue-1 | Other | Indic | [Supplement: Chapter 7— Sanskrit Text](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_11_4_Supplement.pdf) |   | 39 |
| 1128 | IJHS-45-2010-Issue-1 | Other | Indic | [Supplement: Chapter 7— English Translation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_1_11_5_Supplement.pdf) |   | 43 |
| 1129 | IJHS-45-2010-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_0_Contents.pdf) |   | 11 |
| 1130 | IJHS-45-2010-Issue-2 | Other | Indic | [Alcoholic Fermentation Techniques in Early Indian Tradition](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_1_NSingh.pdf) |  Nand Lal Singh‚ Ramprasad‚ P K Mishra et al. | 57 |
| 1131 | IJHS-45-2010-Issue-2 | Math | Indic | [Enlargement of Vedis in the Sulbasutras](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_2_PTaneja.pdf) |  Padmavati Taneja and Nidhi Handa | 152 |
| 1132 | IJHS-45-2010-Issue-2 | Biology | Indic | [Tracing Historical Perspective of Cordyceps sinensis — An Aphrodisiac in Sikkim Himalaya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_3_AKPanda.pdf) |  Ashok Kumar Panda | 38 |
| 1133 | IJHS-45-2010-Issue-2 | Agriculture | Indic | [Scientific Enquiry in Agriculture in Colonial India: A Historical Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_4_SSen.pdf) |  Srabani Sen | 214 |
| 1134 | IJHS-45-2010-Issue-2 | Philosophy | Indic | [Why did Scientific Renaissance take place in Europe and not in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_5_AKBiswas.pdf) |  Arun Kumar Biswas | 129 |
| 1135 | IJHS-45-2010-Issue-2 | Astronomy | Indic | [Historical Notes: Rahu and Ketu in Mythological and Astronomological Contexts](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_6_RKochar.pdf) |  Rajesh Kochhar | 45 |
| 1136 | IJHS-45-2010-Issue-2 | Other | Indic | [Historical Notes: Role of Benaras in the Studies of History of Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_7_AKBag.pdf) |  A K Bag | 33 |
| 1137 | IJHS-45-2010-Issue-2 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_8_Bookreview.pdf) |  A K Bag | 20 |
| 1138 | IJHS-45-2010-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_9_News.pdf) |  Shabnam Shukla | 19 |
| 1139 | IJHS-45-2010-Issue-2 | Other | Other | [Obituary: Professor Ramamurthy Balasubramaniam (1961—2009)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_10_Obituary.pdf) |   | 46 |
| 1140 | IJHS-45-2010-Issue-2 | Astronomy | Indic | [Supplement: A Commentary of Tantrasangraha in Keralabhasa: Kriyakalapa— Eng. Tr. with Notes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_11_1_Supplement_cover.pdf) |  Venketswara Pai R‚ K Mahesh and K Ramasubramanian | 45 |
| 1141 | IJHS-45-2010-Issue-2 | Other | Other | [Supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_2_11_2_Supplement_text.pdf) |  Venketswara Pai R‚ K Mahesh and K Ramasubramanian | 580 |
| 1142 | IJHS-45-2010-Issue-3 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_0_Contents.pdf) |   | 12 |
| 1143 | IJHS-45-2010-Issue-3 | Astronomy | Indic | [The Vedic Naksatra names of the Months](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_1_PGondalekha.pdf) |  P Gondhalekar | 93 |
| 1144 | IJHS-45-2010-Issue-3 | Math | Indic | [Harappan Geometry and Symmetry_A Study of Geometrical Patterns on Indus Objects](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_2_MNVahia.pdf) |  M N Vahia and Nisha Yadav | 979 |
| 1145 | IJHS-45-2010-Issue-3 | Metallurgy | Indic | [Adichanallur_A Prehistoric Mining Site](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_3_BSasisekara.pdf) |  B Sasisekaran, S Sundararajan et al. | 893 |
| 1146 | IJHS-45-2010-Issue-3 | Metallurgy | Indic | [An Assessment of the Sanskrit word Hemaghna used for Lead Metal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_4_RKDubey.pdf) |  R K Dube | 39 |
| 1147 | IJHS-45-2010-Issue-3 | Metallurgy | Indic | [About Wootz_the Question of Hinduwani or Ondanique](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_5_JLCoze.pdf) |  Jean Le Coze | 32 |
| 1148 | IJHS-45-2010-Issue-3 | Astronomy | Indic | [The Date of Aryabhata _ Refutation of V Lakshmikantham’s ryabhata_Refutation of V Lakshmikantham’s Untenable View](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_6_SRSarma.pdf) |  S R Sarma | 36 |
| 1149 | IJHS-45-2010-Issue-3 | Other | Indic | [Tribhovandas Kalyandas Gajjar (1863-1920)_Pioneer Industrial Chemist of India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_7_HSingh.pdf) |  Harkishan Singh | 126 |
| 1150 | IJHS-45-2010-Issue-3 | Other | Indic | [Ashish Lahiri_Radhanath Sikdar Beyond the Peak](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_8_SKSen.pdf) |  Sisir Sen | 12 |
| 1151 | IJHS-45-2010-Issue-3 | Metallurgy | Indic | [Minor Metal Crafts in Bengal_Tradition and Changes from the Medieval Times to the Present](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_9_NupurDasgup.pdf) |  Nupur Dasgupta | 32 |
| 1152 | IJHS-45-2010-Issue-3 | Medicine | Indic | [Indigenous Knowledge of the Medicinal Plant Resources of Coromandel Coast Forests of Peninsular India in Modern Period](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_10_NParthasar.pdf) |  N Parthasarathy | 21 |
| 1153 | IJHS-45-2010-Issue-3 | Other | Other | [Workshop on the History of Indian Science at the Bibliotheque Nationale de France: A Report_and 70th Indian History Congress_A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_11_News.pdf) |  Jerome Petit_Shabnam Shukla | 25 |
| 1154 | IJHS-45-2010-Issue-3 | Medicine | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English Translation and Appendices (Chap 8) Part 1](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_12_SupplementInn.pdf) |  Damodar Joshi | 62 |
| 1155 | IJHS-45-2010-Issue-3 | Medicine | Indic | [Rasaprakasa Sudhakara_Sanskrit Text with English Translation and Appendices (Chap 8) Part 2](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_13_Sanskrittextc.pdf) |  Damodar Joshi | 90 |
| 1156 | IJHS-45-2010-Issue-3 | Medicine | Indic | [Rasaprakasa Sudhakara_Sanskrit Text with English Translation and Appendices (Chap 8)Part 3](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_3_14_EnglishtextCha.pdf) |  Damodar Joshi | 225 |
| 1157 | IJHS-45-2010-Issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_0_Contents.pdf) |   | 12 |
| 1158 | IJHS-45-2010-Issue-4 | Astronomy | Indic | [Dating the Surya Siddhanta using Computational Simulation of Proper Motions and Ecliptic Variations](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_1_ANarayan.pdf) |  Anil Narayan | 129 |
| 1159 | IJHS-45-2010-Issue-4 | Astronomy | Indic | [The Lost Knowledge_Accurate Positioning of Planets](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_2_ASharan.pdf) |  Anand M Sharan | 82 |
| 1160 | IJHS-45-2010-Issue-4 | Astronomy | Indic | [The Historical Significance of the Total Solar Eclipse of Oct 17_1762 passing over Panjab](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_3_RCKapoor.pdf) |  R C Kapoor | 149 |
| 1161 | IJHS-45-2010-Issue-4 | Other | Western | [Karim Khan and his Perceptions of Western Science during his visit to Britain in 1840-41](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_4_GKhan.pdf) |  Gulfishan Khan | 100 |
| 1162 | IJHS-45-2010-Issue-4 | Other | Indic | [Khwaja Abdul Hamied (1898-1972)_Pioneer Scientist Industrialist](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_5_HSingh.pdf) |  Harkishan Singh | 338 |
| 1163 | IJHS-45-2010-Issue-4 | Agriculture | Indic | [Veterinary Science and Animal Husbandry in India_A Case of IVRI at Mukteswar_IzatnagarStudy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_6_JNSinha.pdf) |  J N Sinha | 30 |
| 1164 | IJHS-45-2010-Issue-4 | Astronomy | Indic | [Nandigrama of Ganesa Daivajna](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_7_Historicalnotes.pdf) |  S R Sarma | 35 |
| 1165 | IJHS-45-2010-Issue-4 | Math | Indic | [Thakkura Pheru_Ganitasarakaumudi_The Moonlight of the Essence of Mathematics (ed and tr by SaKHYa)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_8_Bookreview.pdf) |  R C Gupta | 24 |
| 1166 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Documentation and Study of Archaeometallurgical and Ethnometallurgical Evidence in Uttarakhand with Special Reference to Iron and Copper](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_9_ReportsDPAgarwal.pdf) |  D P Agrawal | 20 |
| 1167 | IJHS-45-2010-Issue-4 | Medicine | Indic | [Anatomical Knowledge and the Anatomy of Medical Some Preliminary InquiriesKnowledge in India_Some Preliminary Inquiries](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_10_ReportsJayanta.pdf) |  Jayanta Bhattacharya | 34 |
| 1168 | IJHS-45-2010-Issue-4 | Other | Indic | [History of Technology & Technical Education in India_A Synthesis](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_11_ReportShukla.pdf) |  Shabnam Shukla | 14 |
| 1169 | IJHS-45-2010-Issue-4 | Math | Indic | [Mathematics and Astronomy in Medieval India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_12_ReportMNarayan.pdf) |  Madhvendra Narayan | 30 |
| 1170 | IJHS-45-2010-Issue-4 | Other | Other | [Book Received for Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_13_Bookreceived.pdf) |   | 11 |
| 1171 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English Translationand (Chap 9-13)AppendicesPart 1](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_14_SupplementInner.pdf) |  Damodar Joshi | 67 |
| 1172 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English Translation Part2](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_15_SupChap9English.pdf) |  Damodar Joshi | 30 |
| 1173 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 3](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_16_SupChap9Sankrit.pdf) |  Damodar Joshi | 31 |
| 1174 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 4](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_17_SupChap10Sankrit.pdf) |  Damodar Joshi | 34 |
| 1175 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 5](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_18_SupChap10English.pdf) |  Damodar Joshi | 38 |
| 1176 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 6](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_19_SupChap11Sankrit.pdf) |  Damodar Joshi | 52 |
| 1177 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 7](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_20_SupChap11English.pdf) |  Damodar Joshi | 54 |
| 1178 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 8](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_21_SupChap12Sankrit.pdf) |  Damodar Joshi | 28 |
| 1179 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 9](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_22_SupChap12English.pdf) |  Damodar Joshi | 23 |
| 1180 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 10](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_23_SupChap13Sankrit.pdf) |  Damodar Joshi | 28 |
| 1181 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 11](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_24_SupChap13English.pdf) |  Damodar Joshi | 23 |
| 1182 | IJHS-45-2010-Issue-4 | Metallurgy | Indic | [Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 12](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_25_Appendices.pdf) |  Damodar Joshi | 54 |
| 1183 | IJHS-45-2010-Issue-4 | Other | Other | [Index](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_26_Index.pdf) |   | 15 |
| 1184 | IJHS-45-2010-Issue-4 | Other | Other | [Cumulative Index](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_27_Cumulativeindex.pdf) |   | 24 |
| 1185 | IJHS-45-2010-Issue-4 | Other | Other | [Annual Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol45_4_28_AnnualContents.pdf) |   | 23 |
| 1186 | IJHS-46-2011-Issue-1 | Culture | Indic | [Possible Chronological Markers In The Vedic Texts](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_1_PGondalekhar.pdf) |  Prabhakar Gondhalekar | 182 |
| 1187 | IJHS-46-2011-Issue-1 | Astronomy | Indic | [Dhruva the Ancient Indian Pole Star: Fixity Rotation and Movement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_2_RNIyenger.pdf) |   | 156 |
| 1188 | IJHS-46-2011-Issue-1 | Philosophy | Indic | [Genesitic Roots and Philosophical Evolution of Vijnanavada (Yogacrya) School of Buddhism](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_3_OPJaiswal.pdf) |  OP Jaiswal | 37 |
| 1189 | IJHS-46-2011-Issue-1 | Math | Indic | [Computation of N : A Modern Generalization of Ancient Technique](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_4_VMishra.pdf) |  Vinod Mishra | 69 |
| 1190 | IJHS-46-2011-Issue-1 | Medicine | Indic | [Arrival of western medicine:Ayurvedic knowledge of anatomy and colonial confrontation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_5_JBhattacharyya.pdf) |  Jayanta Bhattacharya | 225 |
| 1191 | IJHS-46-2011-Issue-1 | Culture | Indic | [Science in the Path of Syncretism](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_6_AKBiswas.pdf) |  Arun Kumar Biswas | 62 |
| 1192 | IJHS-46-2011-Issue-1 | Culture | Indic | [Historical Notes: Indian Renaissance: The Making of Modern India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_7_SKMajumdar.pdf) |  Sisir K Majumdar | 63 |
| 1193 | IJHS-46-2011-Issue-1 | Math | Indic | [Historical Notes: Sudoku Yantra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_8_SRSarma.pdf) |  Sreeramula Rajeswara Sarma | 166 |
| 1194 | IJHS-46-2011-Issue-1 | Math | Indic | [Book Review: C K Raju; Cultural Foundations of Mathematics: The Nature of Mathematical Proof and the Transmission of the Calculus from India to Europe in the 16th c AD](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_9_Bookreview.pdf) |  Probir K Bondyopadhyay | 26 |
| 1195 | IJHS-46-2011-Issue-1 | Medicine | Indic | [Project Reports: A Historical Study of Epilepsy from 1900-2005 AD](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_10_Project reportAKSeth.pdf) |  Arun Kumar Sethi | 23 |
| 1196 | IJHS-46-2011-Issue-1 | Biology | Indic | [Project Reports: 1960-1999: Four Decades of Biochemistry in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_11_Project reportSSen.pdf) |  Srabani Sen | 25 |
| 1197 | IJHS-46-2011-Issue-1 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_12_News.pdf) |   | 21 |
| 1198 | IJHS-46-2011-Issue-1 | Math | Indic | [Supplement: Kuttakarauiromani of Devaraja-Sankrit Text with Eng Notes and Appendices](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_14_Supplement.pdf) |  Takao Hayashi | 93 |
| 1199 | IJHS-46-2011-Issue-1 | Astronomy | Indic | [Supplement: Madhyamanayanaprakarah: An Unknown Manuscript ascribed to Madhava with Eng tr and Notes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_1_15_Supplement.pdf) |  UKV Sarma; Venketeswara Pai et al | 702 |
| 1200 | IJHS-46-2011-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_0_Contents.pdf) |   | 10 |
| 1201 | IJHS-46-2011-Issue-2 | Math | Indic | [India's Contribution to Arab Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_1_KJaouiche.pdf) |  Khalil Jaouiche | 98 |
| 1202 | IJHS-46-2011-Issue-2 | Math | Indic | [George Peacock's Arithmetic in the Changing Landscape of the History of Mathematics in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_2_AKeller.pdf) |  Agathe Keller | 89 |
| 1203 | IJHS-46-2011-Issue-2 | Math | Indic | [Situating the History of Indian Arithmetical Knowledge in George Peacock's Arithmetic](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_3_DRaina.pdf) |  Dhruv Raina | 49 |
| 1204 | IJHS-46-2011-Issue-2 | Math | Western | [Peacock's Arithmetic: An Attempt to Reconcile Empiricism to Universality](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_4_1_MJDurandRichard.pdf) |  Marie-Jose Durand-Richard | 103 |
| 1205 | IJHS-46-2011-Issue-2 | Philosophy | Indic | [Historical Notes: Rabindranath's Thoughts on Science : An Overview (A Tribute in 313 his 150th Birth Anniversary)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_7_SKMajumdar.pdf) |  Sisir K Majumdar | 90 |
| 1206 | IJHS-46-2011-Issue-2 | Astronomy | Indic | [Inscriptions as Records of Celestial Events](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_8_BShailaja.pdf) |  B S Shylaja and Geetha Kydala | 33 |
| 1207 | IJHS-46-2011-Issue-2 | Math | Indic | [Book Review: Kim Plofker: Mathematics in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_9_Bookreview.pdf) |  A K Bag | 39 |
| 1208 | IJHS-46-2011-Issue-2 | Culture | Indic | [Project Reports: Tribal Technology of Northeast India: Arunachal Pradesh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_10_AKThakur.pdf) |  Amrendra Kumar Thakur | 27 |
| 1209 | IJHS-46-2011-Issue-2 | Medicine | Indic | [Evolution of Three Premier Cancer Institutes of India - TMC, CNCI and CIWIA - An Assessment](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_11_SuktaDas.pdf) |  Sukta Das | 24 |
| 1210 | IJHS-46-2011-Issue-2 | Math | Other | [News: Magic Square for 2011](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_12_NewsSRSarma.pdf) |  S R Sarma | 30 |
| 1211 | IJHS-46-2011-Issue-2 | Math | Other | [News: Conference on: Otto Neugebauer, A Mathematician's Journey Between History and Practice of the Exact Sciences-A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_13_NewsKnudsen.pdf) |  Toke L Knudsen | 15 |
| 1212 | IJHS-46-2011-Issue-2 | Other | Other | [VIIth Investigators' Meet on History of Science Projects, New Delhi - A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_14_NewsShukla.pdf) |  Shabnam Shukla | 18 |
| 1213 | IJHS-46-2011-Issue-2 | Math | Indic | [Kuttakarauiromani of Devaraja - Sankrit Text with Eng tr, Notes and Appendices](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_15_Supplement.pdf) |  Takao Hayashi | 44 |
| 1214 | IJHS-46-2011-Issue-3 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_0_Contents.pdf) |   | 15 |
| 1215 | IJHS-46-2011-Issue-3 | Astronomy | Indic | [The Manda Puzzle in Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_1_ANarayanan.pdf) |  Anil Narayanan | 768 |
| 1216 | IJHS-46-2011-Issue-3 | Metallurgy | Indic | [Ancient Indian Iron and Steel: An Archaeometallurgical Study](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_3_1_BPrakash.pdf) |  B Prakash | 2010 |
| 1217 | IJHS-46-2011-Issue-3 | Astronomy | Indic | [The Pulsating Indian Epicycle of the Sun](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_3_2_ANarayanan.pdf) |  Anil Narayanan | 454 |
| 1218 | IJHS-46-2011-Issue-3 | Medicine | Indic | [Indian Cholera: A Myth](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_2_SSen.pdf) |  Srabani Sen | 1356 |
| 1219 | IJHS-46-2011-Issue-3 | Culture | Indic | [The Era of Science Enthusiasts in Bengal (1841-1891): Akshayakumar's; Vidyasagar and Rajendralala](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_3_AKBiswas.pdf) |  Arun Kumar Biswas | 176 |
| 1220 | IJHS-46-2011-Issue-3 | Culture | Indic | [SRammohun Roy, His Intellectual Compatriots and their Scientific Contributions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_3_3_AKBiswas.pdf) |  Arun Kumar Biswas | 148 |
| 1221 | IJHS-46-2011-Issue-3 | Astronomy | Indic | [RG Chandra: A Self-taught Sky Watcher and his Contributions to Observational Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_3_4_SNBiswas.pdf) |  Sudhindra Nath Biswas, Utpal Mukhopadhyay and Saibal Ray | 1128 |
| 1222 | IJHS-46-2011-Issue-3 | Music | Indic | [The Violin and the Genesis of the Bose Institute in Calcutta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_4(1)_PKBandyopadhyay.pdf) |  Probir K Bondyopadhyay and Lily Banerjee | 3404 |
| 1223 | IJHS-46-2011-Issue-3 | Math | Indic | [Historical Notes: Kali Chronograms of Narayana Bhattatiri (15th - 17th Centuries AD)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_3_5_RCGupta.pdf) |  R C Gupta | 38 |
| 1224 | IJHS-46-2011-Issue-3 | Culture | Indic | [Historical Notes: Acharya Prafulla Chandra Ray: A Scientist, Teacher, Author and a Patriotic Entrepreneur](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_3_6_SKMajumdar.pdf) |  Sisir K Majumdar | 35 |
| 1225 | IJHS-46-2011-Issue-3 | Math | Indic | [Mathematics and Mathematical Researches in India during Fifth to Twentieth Centuries: Profiles and Prospects](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_5_AKBag.pdf) |  AK Bag | 143 |
| 1226 | IJHS-46-2011-Issue-3 | Astronomy | Indic | [Historical Notes: Archaeo-Astronomical Significance of the Vedic Darsapaurnamasa Altar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_6_RNIyengar.pdf) |  R N Iyengar and V H Satheeshkumar | 536 |
| 1227 | IJHS-46-2011-Issue-3 | Medicine | Other | [Book Review: Harkishan Singh: Pharmaceutical History of India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_3_7_Bookreview.pdf) |  B N Dhawan | 17 |
| 1228 | IJHS-46-2011-Issue-3 | Math | Indic | [Project Report: A Study of Devaraja's Kuttakarasiromani](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_3_8_SVSingh.pdf) |  Saroj V Singh | 48 |
| 1229 | IJHS-46-2011-Issue-3 | Math | Indic | [Historical Notes: Professor Ganesh Prasad: An Epitome of Teaching and Research in Modern Mathematics in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_7_UBTewari.pdf) |  U B Tewari | 55 |
| 1230 | IJHS-46-2011-Issue-3 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_8_Bookreview.pdf) |  B N Dhawan | 20 |
| 1231 | IJHS-46-2011-Issue-3 | Other | Indic | [Project Report: History of Technical Education in India: 1900-2005](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_2_9_Bookreview.pdf) |  Vol46_3_9_SSaha.pdf | 39 |
| 1232 | IJHS-46-2011-Issue-3 | Culture | Indic | [News: Maritime Cultures and Traditions of Bay of Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_3_10_News.pdf) |  Shabnam Shukla | 17 |
| 1233 | IJHS-46-2011-Issue-3 | Astronomy | Indic | [Project Reports: Stone Inscriptions as Records of Celestial Events](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_9_Projectreports.pdf) |  B S Shylaja and Geetha Kaidala | 46 |
| 1234 | IJHS-46-2011-Issue-3 | Astronomy | Indic | [Project Reports: The Siddhanta Sekhara of Sripati (11th Century) - Text and English Translation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_10_ASBhat.pdf) |  A Sripada Bhat | 30 |
| 1235 | IJHS-46-2011-Issue-3 | Math | Indic | [Supplement: Kuttakarasiromani of Devaraja - Sanskrit Text with Eng tr, Notes and Appendices](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_3_11_Supplement.pdf) |  Takao Hayashi | 47 |
| 1236 | IJHS-46-2011-Issue-3 | Other | Indic | [Supplement: Translation of Verses with Notes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_3_12_Supplement.pdf) |   | 260 |
| 1237 | IJHS-46-2011-Issue-3 | Other | Other | [Announcements](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_11_Announcements.pdf) |   | 16 |
| 1238 | IJHS-46-2011-Issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_0_Contents.pdf) |   | 12 |
| 1239 | IJHS-46-2011-Issue-4 | Astronomy | Indic | [Ancient Indian Astronomy and the Aryan Invasion Theory](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_1_TRSPrasanna.pdf) |  T R S Prasanna | 475 |
| 1240 | IJHS-46-2011-Issue-4 | Medicine | Indic | [Health Aspects in Pancatantra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_2_BVenkateswarlu.pdf) |  Bandi Venkateshwarlu and Ala Narayana | 117 |
| 1241 | IJHS-46-2011-Issue-4 | Math | Indic | [Mahavira-Pheru Formula for Surface of a Sphere and some other Empirical Rules](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_3_RCGupta.pdf) |  R C Gupta | 167 |
| 1242 | IJHS-46-2011-Issue-4 | Medicine | Indic | [Historical Notes: Kadambini Ganguli (1861-1923): First Lady Medical Graduate in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_4_SKMajumdar.pdf) |  Sisir K Majumdar | 92 |
| 1243 | IJHS-46-2011-Issue-4 | Math | Indic | [Historical Notes: Trend of Geometrical Researches in Calcutta University: 1881-1931](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_5_Purabi.pdf) |  Purabi Mukherji and Mala Bhattacharjee | 32 |
| 1244 | IJHS-46-2011-Issue-4 | Other | Other | [Book Review: Jagdish N Sinha: Science, War and Imperialism: India in the Second World War](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_6_Bookreview.pdf) |  Mahendra Prasad Singh | 18 |
| 1245 | IJHS-46-2011-Issue-4 | Medicine | Indic | [Project Report: Evolution of Ayurvedic Ophthalmology in Ancient and Medieval India: A Critical Study](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_7_VJDeshpande.pdf) |  Vijaya Jayant Deshpande | 33 |
| 1246 | IJHS-46-2011-Issue-4 | Metallurgy | Indic | [Project Report: Catalogue of Forge welded iron Cannons in Western Maharashtra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_8_PPDeshpande.pdf) |  P P Deshpande, Sachin Joshi and Shivendra Kadgaonkar | 427 |
| 1247 | IJHS-46-2011-Issue-4 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_9_News.pdf) |   | 52 |
| 1248 | IJHS-46-2011-Issue-4 | Math | Indic | [Supplement: Kuttakarasiromani of Devaraja-Sanskrit Text with Eng. tr, Notes and Appendices](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_10_Supplement.pdf) |  Takao Hayashi | 47 |
| 1249 | IJHS-46-2011-Issue-4 | Other | Other | [Cumulative Index](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_12_Cumulativeindex.pdf) |   | 28 |
| 1250 | IJHS-46-2011-Issue-4 | Other | Other | [Annual Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol46_4_13_Annualcontent.pdf) |   | 19 |
| 1251 | IJHS-47-2012-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_0_Contents.pdf) |   | 13 |
| 1252 | IJHS-47-2012-Issue-1 | Biology | Fareast | [Ancient Chinese People's Knowledge of Macrofungi during the Period from 220 AD to 589 AD](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_1_LDi.pdf) |  Lu Di | 2223 |
| 1253 | IJHS-47-2012-Issue-1 | Culture | Indic | [Bilva in Indian Tradition](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_2_DVDwivedi.pdf) |  Dhananjay Vasudeo Dwivedi | 107 |
| 1254 | IJHS-47-2012-Issue-1 | Astronomy | Indic | [The Gurmukhi Astrolabe of the Maharaja of Patiala](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_3_SRSarma.pdf) |  Sreeramula Rajeswara Sarma | 2045 |
| 1255 | IJHS-47-2012-Issue-1 | Other | Indic | [Role of Scientists in Colonial Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_4_JNSinha.pdf) |  Jagdish N Sinha | 36 |
| 1256 | IJHS-47-2012-Issue-1 | Philosophy | Indic | [Historical Notes: Swami Vivekananda's Thoughts on Science and Religion](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_5_SKMajumdar.pdf) |  Sisir K Majumdar | 14 |
| 1257 | IJHS-47-2012-Issue-1 | Other | Indic | [Historical Notes: Commissions and Committees on Technical Education in Independent India: An Appraisal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_6_SKSaha.pdf) |  Samir Kumar Saha and Sangita Ghosh | 68 |
| 1258 | IJHS-47-2012-Issue-1 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_7_Bookreview.pdf) |   | 21 |
| 1259 | IJHS-47-2012-Issue-1 | Other | Indic | [Project Reports: History of the Ordnance Establishments of British India: 1700-1947](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_8_KRoy.pdf) |  Kaushik Roy | 31 |
| 1260 | IJHS-47-2012-Issue-1 | Metallurgy | Indic | [Project Reports: Documentation of Cannons of Eastern India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_9_PKChattopadhyay.pdf) |  Pranab K Chattopadhyay | 529 |
| 1261 | IJHS-47-2012-Issue-1 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_10_News.pdf) |   | 60 |
| 1262 | IJHS-47-2012-Issue-1 | Other | Other | [Supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_12_Supplement_cover.pdf) |   | 64 |
| 1263 | IJHS-47-2012-Issue-1 | Other | Other | [Announcement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_1_14_Announcement.pdf) |   | 14 |
| 1264 | IJHS-47-2012-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_0_Contents.pdf) |   | 14 |
| 1265 | IJHS-47-2012-Issue-2 | Medicine | Western | [Prevention of Cancer: Evolution of Concepts and Strategies](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_1_Sdas.pdf) |  Sukta Das | 50 |
| 1266 | IJHS-47-2012-Issue-2 | Medicine | Indic | [Utilization of Borax In The PharmaceuticoTherapeutics of Ayurveda in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_2_NKodlady.pdf) |  Naveena Kodlady and B J Patgiri | 114 |
| 1267 | IJHS-47-2012-Issue-2 | Medicine | Other | [Smallpox in Nineteenth Century Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_3_ASamanta.pdf) |  Arabinda Samanta | 103 |
| 1268 | IJHS-47-2012-Issue-2 | Agriculture | Western | [Colonialism and Green Science: History of Colonial Scientific Forestry in South India 1820-1920](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_4_VMRavikumar.pdf) |  V M Ravi Kumar | 48 |
| 1269 | IJHS-47-2012-Issue-2 | Other | Indic | [Silting and Ancient Sea-Ports of the Tamil Country](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_5_JDeloche.pdf) |  Jean Deloche | 193 |
| 1270 | IJHS-47-2012-Issue-2 | Math | Indic | [Historical Notes: Asymmetrical Vedis In Sulbasutras](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_6_BSShylaja.pdf) |  B S Shylaja | 173 |
| 1271 | IJHS-47-2012-Issue-2 | Medicine | Indic | [Historical Notes: Patient-Centered Therapy of Ayurveda: Approaches and Applications](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_7_VRRaghvan.pdf) |  Vaidyaratnam R Raghavan | 32 |
| 1272 | IJHS-47-2012-Issue-2 | Other | Western | [Historical Notes: International Chemistry Year: Centenary of Marie Curie's Second Nobel Laurel 1911](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_8_SKMajumdar.pdf) |  Sisir K Majumdar | 16 |
| 1273 | IJHS-47-2012-Issue-2 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_9_Bookreview.pdf) |  Anil Narayanan | 33 |
| 1274 | IJHS-47-2012-Issue-2 | Other | Indic | [Project Reports: Calcuttan Science 1784-1930 and the Awakening in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_10_AKBiswas.pdf) |  Arun Kumar Biswas | 26 |
| 1275 | IJHS-47-2012-Issue-2 | Math | Indic | [Project Reports: Science and Nationalism In Bengal 1876-1947: Asutosh Mookerjee and Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_11_CPalit.pdf) |  Chittabrata Palit | 22 |
| 1276 | IJHS-47-2012-Issue-2 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_2_12_News.pdf) |   | 29 |
| 1277 | IJHS-47-2012-Issue-3 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_0_Contents.pdf) |   | 15 |
| 1278 | IJHS-47-2012-Issue-3 | Astronomy | Indic | [The Manda Puzzle in Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_1_ANarayanan.pdf) |  Anil Narayanan | 768 |
| 1279 | IJHS-47-2012-Issue-3 | Medicine | Indic | [Indian Cholera: A Myth](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_2_SSen.pdf) |  Srabani Sen | 1356 |
| 1280 | IJHS-47-2012-Issue-3 | Culture | Indic | [The Era of Science Enthusiasts in Bengal (1841-1891): Akshayakumar's; Vidyasagar and Rajendralala](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_3_AKBiswas.pdf) |  Arun Kumar Biswas | 176 |
| 1281 | IJHS-47-2012-Issue-3 | Culture | Indic | [The Violin and the Genesis of the Bose Institute in Calcutta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_4_PKBandyopadhyay.pdf) |  Probir K Bondyopadhyay and Lily Banerjee | 8639 |
| 1282 | IJHS-47-2012-Issue-3 | Math | Indic | [Mathematics and Mathematical Researches in India during Fifth to Twentieth Centuries: Profiles and Prospects](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_5_AKBag.pdf) |  AK Bag | 143 |
| 1283 | IJHS-47-2012-Issue-3 | Astronomy | Indic | [Historical Notes: Archaeo-Astronomical Significance of the Vedic Darsapaurnamasa Altar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_6_RNIyengar.pdf) |  R N Iyengar and V H Satheeshkumar | 536 |
| 1284 | IJHS-47-2012-Issue-3 | Math | Indic | [Historical Notes: Professor Ganesh Prasad: An Epitome of Teaching and Research in Modern Mathematics in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_7_UBTewari.pdf) |  U B Tewari | 55 |
| 1285 | IJHS-47-2012-Issue-3 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_8_Bookreview.pdf) |  B N Dhawan | 20 |
| 1286 | IJHS-47-2012-Issue-3 | Astronomy | Indic | [Project Reports: Stone Inscriptions as Records of Celestial Events](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_9_Projectreports.pdf) |  B S Shylaja and Geetha Kaidala | 46 |
| 1287 | IJHS-47-2012-Issue-3 | Astronomy | Indic | [Project Reports: The Siddhanta Sekhara of Sripati (11th Century) - Text and English Translation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_10_ASBhat.pdf) |  A Sripada Bhat | 30 |
| 1288 | IJHS-47-2012-Issue-3 | Other | Other | [Announcements](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_3_11_Announcements.pdf) |   | 16 |
| 1289 | IJHS-47-2012-Issue-4 | Other | Other | [Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_0_Editorial.pdf) |   | 17 |
| 1290 | IJHS-47-2012-Issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_1_Contents.pdf) |   | 11 |
| 1291 | IJHS-47-2012-Issue-4 | Medicine | Indic | [Accounts of Pathogenic Organisms in the Early Texts of Ayurveda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_2_PRamManohar.pdf) |  P Ram Manohar | 247 |
| 1292 | IJHS-47-2012-Issue-4 | Medicine | Indic | [Significance of Asakrt-Karma in Finding Manda-Karna](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_3_DPKaundinya.pdf) |  Deepak P Kaundinya's;K Ramasubramanian and M S Sriram | 382 |
| 1293 | IJHS-47-2012-Issue-4 | Math | Indic | [Folding Method of Narayana Pandita for the Construction of Samagarbha and Visama Magic Squares](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_4_RSridhan.pdf) |  Raja Sridharan and M D Srinivas | 1002 |
| 1294 | IJHS-47-2012-Issue-4 | Math | Indic | [Narayana Pandita's Enumeration of Combinations and Associated Representation of Numbers as Sums of Binomial Coefficients](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_5_RSridhan.pdf) |  Raja Sridharan's;R Sridharan and M D Srinivas | 414 |
| 1295 | IJHS-47-2012-Issue-4 | Math | Indic | [Narayana's Treatment of Varga-Prakrti](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_6_ADutta.pdf) |  Amartya Kumar Dutta | 404 |
| 1296 | IJHS-47-2012-Issue-4 | Math | Indic | [Madhava- A Great Kerala Mathematician of Medieval Times](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_7_AKBag.pdf) |  A K BAG | 113 |
| 1297 | IJHS-47-2012-Issue-4 | Math | Indic | [Venvaroha from a Modern Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_8_SMadhavan.pdf) |  S Madhavan | 215 |
| 1298 | IJHS-47-2012-Issue-4 | Math | Indic | [Relation between the Arc and the Rsine in Tantrasangraha and other Kerala Works](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_9_MSSriram.pdf) |  M S Sriram's;K Ramasubramanian and R Venketeswara Pai | 312 |
| 1299 | IJHS-47-2012-Issue-4 | Math | Indic | [Sines and Interpolation in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_10_Malaya.pdf) |  V Madhukar Mallayya | 963 |
| 1300 | IJHS-47-2012-Issue-4 | Math | Indic | [Birth of Calculus with Special Reference to Yuktibhasa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_11_PPDivakaran.pdf) |  PP Divakaran | 422 |
| 1301 | IJHS-47-2012-Issue-4 | Other | Other | [Books Received](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_12_Booksreceived.pdf) |   | 17 |
| 1302 | IJHS-47-2012-Issue-4 | Other | Other | [Cumulative Index](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_13_Cumulativeindex.pdf) |   | 35 |
| 1303 | IJHS-47-2012-Issue-4 | Other | Other | [Annual Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol47_4_14_Annualcontent.pdf) |   | 24 |
| 1304 | IJHS-48-2013-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_0_Contents.pdf) |   | 15 |
| 1305 | IJHS-48-2013-Issue-1 | Metallurgy | Indic | [Two Millennia of the Sea-bourne metals trade with India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_1_PTCraddock.pdf) |  Paul T. Craddock | 1053 |
| 1306 | IJHS-48-2013-Issue-1 | Medicine | Indic | [Travel Accounts and the Eighteenth Century: Indian Medicine and Surgery through travelling gaze](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_2_JBhattacharya.pdf) |  Jayanta Bhattacharya | 58 |
| 1307 | IJHS-48-2013-Issue-1 | Other | Indic | [Raman Krishnan and the IACS Episodes of the 1930's](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_3_AKBiswas.pdf) |  Arun Kumar Biswas | 231 |
| 1308 | IJHS-48-2013-Issue-1 | Other | Western | [Belated Nobel Prize for Max Born FRS](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_4_Rsingh.pdf) |  Rajinder Singh and Falk Riess | 68 |
| 1309 | IJHS-48-2013-Issue-1 | Math | Indic | [Historical Notes: A Glimpse of Some Results of Ramanujan](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_5_Ssar.pdf) |  Satyabachi Sar | 43 |
| 1310 | IJHS-48-2013-Issue-1 | Biology | Indic | [Har Gobind Khorana (1922-2011)-  A Pioneer Nobel Laureate in Molecular Biology](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_6_Pchakrabarti.pdf) |  Parul Chakarbarti | 20 |
| 1311 | IJHS-48-2013-Issue-1 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_7_Bookreview.pdf) |  Madhvendra Narayan | 23 |
| 1312 | IJHS-48-2013-Issue-1 | Culture | Indic | [Project Reports: Indigenous Techniques of Weaving in Silk Industries: A Study in the context of Eastern Uttar Pradesh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_8_APPandey.pdf) |  Adya Prasad Pandey | 20 |
| 1313 | IJHS-48-2013-Issue-1 | Culture | Indic | [Project Reports: Indigenous Knowledge System of the Fishermen of Sunderbans  in West Bengal and their Approaches to Health Sanitation and Climate](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_9_Msarkar.pdf) |  Mahua Sarkar | 32 |
| 1314 | IJHS-48-2013-Issue-1 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_10_News.pdf) |   | 22 |
| 1315 | IJHS-48-2013-Issue-1 | Other | Other | [Supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_12_Supplement.pdf) |  Takao Hayashi | 278 |
| 1316 | IJHS-48-2013-Issue-1 | Other | Other | [Form IV](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_1_13_Form IV.pdf) |   | 10 |
| 1317 | IJHS-48-2013-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_0_Contents.pdf) |   | 15 |
| 1318 | IJHS-48-2013-Issue-2 | Agriculture | Indic | [Sesamum indicum (Sesame or Til): Seeds and oil - An Historical and Scientific evaluation from Indian perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_1_NCShah.pdf) |  N C Shah | 749 |
| 1319 | IJHS-48-2013-Issue-2 | Medicine | Indic | [Ophthalmic Ideas in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_2_VDeshpande.pdf) |  Vijaya J Deshpande | 184 |
| 1320 | IJHS-48-2013-Issue-2 | Other | Indic | [Water Supply Systems of the Senji (Gingee) Fort in South India(16-18th century)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_3_JDeloche.pdf) |  Jean Deloche | 2014 |
| 1321 | IJHS-48-2013-Issue-2 | Culture | Indic | [The Muslim Community response to the Scientific Awakening in the Nineteenth Century India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_4_AKBiswas.pdf) |  Arun Kumar Biswas | 64 |
| 1322 | IJHS-48-2013-Issue-2 | Medicine | Western | [Chemistry of Resinous gums, Dyes, Alkaloids, and Active principles - Contributions of Pelletier and others in the Nineteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_5_JWisniak.pdf) |  Jaime Wisniak | 134 |
| 1323 | IJHS-48-2013-Issue-2 | Astronomy | Indic | [Historical Notes: Daksinagni in Sulbasutras - An Astronomical Interpretation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_6_BSShylaja.pdf) |  B S Shylaja | 86 |
| 1324 | IJHS-48-2013-Issue-2 | Math | Indic | [Historical Notes: Summation of Convergent Geometric Series and the Concept of approachable Sunya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_7_KBBasant.pdf) |  K B Basant and Satyananda Panda | 668 |
| 1325 | IJHS-48-2013-Issue-2 | Other | Other | [Correspondences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_8_Correspondence.pdf) |  Correspondences | 19 |
| 1326 | IJHS-48-2013-Issue-2 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_9_BookReview.pdf) |  Arun Kumar Biswas | 18 |
| 1327 | IJHS-48-2013-Issue-2 | Metallurgy | Indic | ["Project Reports: An Ethno-technological Study of Iron Working around Sonbhadra region"](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_10_VTripathi.pdf) |  Vibha Tripathi and Prabhakar Upadhyay | 95 |
| 1328 | IJHS-48-2013-Issue-2 | Math | Indic | [Project Reports: Pioneer Mathematicians and their role in Calcutta University during the Nineteenth and Twentieth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_11_MBhattacharjee.pdf) |  Mala Bhattacharjee, Purabi Mukherji and Nandita Mallik | 34 |
| 1329 | IJHS-48-2013-Issue-2 | Other | Other | [NEWS](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_12_News.pdf) |   | 25 |
| 1330 | IJHS-48-2013-Issue-2 | Other | Other | [Supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_2_13_Supplement_inner.pdf) |  Takao Hayashi | 60 |
| 1331 | IJHS-48-2013-Issue-3 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_0_Contents.pdf) |   | 19 |
| 1332 | IJHS-48-2013-Issue-3 | Astronomy | Indic | [The Lunar Model in Ancient Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_1_ANarayanan.pdf) |  Anil Narayanan | 1467 |
| 1333 | IJHS-48-2013-Issue-3 | Medicine | Indic | [Purification and Detoxification procedures for metal Tamra in Medieval Indian Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_2_CYJagtap.pdf) |  C Y Jagtap, B J Patgiri and P K Prajapati | 96 |
| 1334 | IJHS-48-2013-Issue-3 | Astronomy | Arabic | [Did Ibn Sina observe the transit of Venus 1032 AD?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_3_RCKapoor.pdf) |  R C Kapoor | 306 |
| 1335 | IJHS-48-2013-Issue-3 | Culture | Indic | [Bengali Entrepreneurs and Western Technology in the nineteenth century: A Social Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_4_SSarkar.pdf) |  Suvobrata Sarkar | 2543 |
| 1336 | IJHS-48-2013-Issue-3 | Biology | Indic | [Historical notes: Symbiotic relation between Geology and Botany- Pramatha Nath Bose and Girish Chandra Bose](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_5_CPalit.pdf) |  Chittabrata Palit | 25 |
| 1337 | IJHS-48-2013-Issue-3 | Philosophy | Western | [History and Philosophy of Quantum Physics : An Overview](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_6_SKMajumdar.pdf) |  Sisir K Majumdar | 26 |
| 1338 | IJHS-48-2013-Issue-3 | Other | Other | [Correspondence](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_7_Correspondence.pdf) |   | 11 |
| 1339 | IJHS-48-2013-Issue-3 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_8_Bookreview.pdf) |   | 44 |
| 1340 | IJHS-48-2013-Issue-3 | Math | Indic | [Project Reports: Brahmasiddhanta in Sakalyasamhita-Text, English Translation and Commentary](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_9_Project Reports.pdf) |  Somenath Chatterjee | 47 |
| 1341 | IJHS-48-2013-Issue-3 | Medicine | Indic | [Communicable Diseases and Germ Theory in Colonial India - An Assessment](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_10_SSen.pdf) |  Srabani Sen | 47 |
| 1342 | IJHS-48-2013-Issue-3 | Other | Other | [NEWS](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_11_News.pdf) |   | 134 |
| 1343 | IJHS-48-2013-Issue-3 | Math | Indic | [Supplement:Ganitamanjari of Ganesa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_12_Supplement_cover.pdf) |  Takao Hayashi | 60 |
| 1344 | IJHS-48-2013-Issue-3 | Math | Indic | [Supplement: Ganitamanjari of Ganesa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_3_13_Supplement_text.pdf) |  Takao Hayashi | 6452 |
| 1345 | IJHS-48-2013-Issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_4_0_Contents.pdf) |   | 100 |
| 1346 | IJHS-48-2013-Issue-4 | Math | Indic | [Genesis and Early Evolution of Decimal Enumeration: Evidence from Number Names in Rigveda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_4_1_BBaware.pdf) |  Bhagyashree Bavare and P P Divakaran | 284 |
| 1347 | IJHS-48-2013-Issue-4 | Astronomy | Indic | [Kapa-la Yantra at Sawai Jai Singh's Jaipur Observatory](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_4_2_VNSharma.pdf) |  Virendra N sharma | 1157 |
| 1348 | IJHS-48-2013-Issue-4 | Astronomy | Indic | [The Udayagiri Lion Pillar and its Astronomical Significance in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_4_3_ AMSharan.pdf) |  Anand M Sharan | 3232 |
| 1349 | IJHS-48-2013-Issue-4 | Medicine | Indic | [A Glimpse of the Garo Tangible Medicine: The Ruga-Garo Picture](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_4_4_PMandal.pdf) |  Pratibha Mandal | 788 |
| 1350 | IJHS-48-2013-Issue-4 | Medicine | Indic | [Prevention of Diabetes- A Historical Note](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_4_5_SuktaDas.pdf) |  Sukta Das | 148 |
| 1351 | IJHS-48-2013-Issue-4 | Math | Indic | [M Rangacharya and his Century Old Translation of the Ganita Sarasangraha](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol48_4_6_ RCGupta.pdf) |  R C Gupta | 151 |
| 1352 | IJHS-48-2013-Issue-4 | Astronomy | Indic | [Correspondence: The Lunar Model in Ancient Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol48_4_7_Correspondence.pdf) |   | 98 |
| 1353 | IJHS-48-2013-Issue-4 | Other | Other | [Book Review](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol48_4_8_Book Review.pdf) |   | 108 |
| 1354 | IJHS-48-2013-Issue-4 | Medicine | Indic | [Indian Medicine through Travellers' Accounts, with emphasis on Anatomical Knowledge: 17-19th Century](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol48_4_9_Project Report_ Jbhattacharyya.pdf) |  Jayanta Bhattacharya | 178 |
| 1355 | IJHS-48-2013-Issue-4 | Culture | Indic | [Growth of Scientific Socities in India (1784-1947)](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol48_4_10_ProjectReport_ BKSen.pdf) |  B K Sen | 169 |
| 1356 | IJHS-48-2013-Issue-4 | Other | Other | [News](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol48_4_11_ News.pdf) |  S M Razaullah Ansari | 155 |
| 1357 | IJHS-48-2013-Issue-4 | Other | Other | [Books received for Review in IJHS: 2013](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol48_4_12_BookReceivedForReview.pdf) |   | 107 |
| 1358 | IJHS-48-2013-Issue-4 | Other | Other | [Cumulative Index : Vol. 48.1-4 (2013)](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol48_4_13_CumulativeIndex.pdf) |   | 124 |
| 1359 | IJHS-48-2013-Issue-4 | Other | Other | [Annual Contents: Vol. 48.1-4 (2013)](https://insa.nic.in/(S(eh1ucortlbqqezipwgliy3mn))/writereaddata/UpLoadedFiles/IJHS/Vol48_4_14_AnnualContent.pdf) |   | 117 |
| 1360 | IJHS-49-2014-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_0_Contents.pdf) |  Contents | 101 |
| 1361 | IJHS-49-2014-Issue-1 | Metallurgy | Indic | [Ho Tribes of Eastern India and their Metallurgical traditions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_1_PKChattopadhyay.pdf) |  Pranab K Chattopadhayay and Ashok Purty | 2960 |
| 1362 | IJHS-49-2014-Issue-1 | Medicine | Indic | [Critical review on Makaradhvaja- A Herbomineral Formulation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_2_SNDhundi.pdf) |  Shraddha N Dhundi & PK Prajapati | 191 |
| 1363 | IJHS-49-2014-Issue-1 | Other | Indic | [1803 Earthquake in Garhwal Himalaya-Archival materials with commentary](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_3_Sdasgupta.pdf) |  Sujit Dasgupta and Basab Mukhopadhyay | 1057 |
| 1364 | IJHS-49-2014-Issue-1 | Biology | Indic | [India's notable presence in Linnaeus' Botanical Classification](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_4_SKJain.pdf) |  S K Jain and Harsh Singh | 135 |
| 1365 | IJHS-49-2014-Issue-1 | Medicine | Indic | [The medical maladies of Sir George Everest during the Great Trigonometric Survey of India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_5_Kmishra.pdf) |  Shrikant Mishra and Bhavesh Trikamji | 127 |
| 1366 | IJHS-49-2014-Issue-1 | Philosophy | Indic | [HISTORICAL NOTES- A glimpse of rule of logic in Gautama's Nyaya-Sutra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_6_Sbhowmik.pdf) |  Subrata Bhowmik | 118 |
| 1367 | IJHS-49-2014-Issue-1 | Culture | Indic | [Inquisitiveness for Science in Tagore Poems](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_7_SKMajumdar.pdf) |  Sisir K Majumdar | 122 |
| 1368 | IJHS-49-2014-Issue-1 | Biology | Indic | [Botanist Jaykrishnabhai: 1849-1929](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_8_JJShah.pdf) |  J J Shah | 106 |
| 1369 | IJHS-49-2014-Issue-1 | Other | Indic | [Bengal School of Fluid Mechanics: Nineteenth and Twentieth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_9_Pmukherji.pdf) |  Purabi Mukherji and Mala Bhattacharjee | 141 |
| 1370 | IJHS-49-2014-Issue-1 | Other | Other | [Book Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_10_Book Review.pdf) |  Book Review | 137 |
| 1371 | IJHS-49-2014-Issue-1 | Medicine | Indic | [PROJECT REPORTS- English translation of Jyotsnika: An Ayurvedic text on Vi?avidya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_11_SKGeorge.pdf) |  Senu Kurien George | 308 |
| 1372 | IJHS-49-2014-Issue-1 | Agriculture | Indic | [Forestry Research in India (1861-2005): Historic Evolution with a Case Study](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_12_Sbiswas.pdf) |  Subhasis Biswas | 105 |
| 1373 | IJHS-49-2014-Issue-1 | Other | Other | [NEWS](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_1_13_News.pdf) |  NEWS | 556 |
| 1374 | IJHS-49-2014-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_0_Contents.pdf) |   | 22 |
| 1375 | IJHS-49-2014-Issue-2 | Astronomy | Indic | [Parasara's Six Season Solar Zodiac and Heliacal Visibility of Star Agastya in 1350-1130 BC](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_1_RN_Iyengar.pdf) |  R N Iyengar | 641 |
| 1376 | IJHS-49-2014-Issue-2 | Other | Other | [Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_2_1_Editorial.pdf) |   | 17 |
| 1377 | IJHS-49-2014-Issue-2 | Other | Other | [Guest Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_2_2_GuestEditorial.pdf) |   | 21 |
| 1378 | IJHS-49-2014-Issue-2 | Agriculture | Indic | [Plant Diseases and their Treatment in Sanskrit Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_2_Dwivedi.pdf) |  Dhananjay Vasudeo Dwivedi | 79 |
| 1379 | IJHS-49-2014-Issue-2 | Astronomy | Indic | [Methods of Interpolation in Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_3_NHanda.pdf) |  Nidhi Handa and Padmavati Taneja | 444 |
| 1380 | IJHS-49-2014-Issue-2 | Astronomy | Indic | [Sanskrit Astronomical Tables: The State of the Field](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_2_3_KPlofker.pdf) |  Kim Plofker | 632 |
| 1381 | IJHS-49-2014-Issue-2 | Math | Indic | [Bhaskara I's Versified Solutions of a Linear Indeterminate Equation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_2_4_AKeller.pdf) |  Agathe Keller | 331 |
| 1382 | IJHS-49-2014-Issue-2 | Math | Indic | [Nemicandra's Rules for Computing Multiplier and Divisor](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_4_DJadhav.pdf) |  Dipak Jadhav | 86 |
| 1383 | IJHS-49-2014-Issue-2 | Math | Indic | [On Mathematical Complexity of Sriyantra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_5_Pustynski.pdf) |  Vladislav-Veniamin Pustynski | 790 |
| 1384 | IJHS-49-2014-Issue-2 | Math | Indic | [Versified Sine Tables in Jnanaraja's Siddhantasundara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_2_5_TKnudsen.pdf) |  Toke Knudsen | 547 |
| 1385 | IJHS-49-2014-Issue-2 | Math | Indic | [Trigonometric Tables in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_2_6_VMallayya.pdf) |  V Madhukar Mallayya | 499 |
| 1386 | IJHS-49-2014-Issue-2 | Culture | Indic | [Techno-Scientific Education and the Indian National Congress (1885-1918)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_6_NShah.pdf) |  Nirmala Shah | 63 |
| 1387 | IJHS-49-2014-Issue-2 | Medicine | Indic | [Historical Notes: Select Palm Leaf Manuscripts on Health Care](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_7_DBhatacharya.pdf) |  Deepak Bhattacharya | 35 |
| 1388 | IJHS-49-2014-Issue-2 | Astronomy | Indic | [Sankramavakyas of the Vakyakarana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_2_7_KMahesh.pdf) |  K Mahesh | 355 |
| 1389 | IJHS-49-2014-Issue-2 | Astronomy | Indic | [The Karanakesari Tables for Computing Eclipse Phenomena](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_2_8_CMontelle.pdf) |  Clemency Montelle | 2112 |
| 1390 | IJHS-49-2014-Issue-2 | Math | Indic | [Historical Notes: Some Nineteenth Century Indian Mathematicians Prior to Ramanujan](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_8_RSridharan.pdf) |  R Sridharan | 153 |
| 1391 | IJHS-49-2014-Issue-2 | Culture | Indic | [Historical Notes: Bankim Chandra-First Writer of Popular Science in Bengali](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_9_SKMajumdar.pdf) |  Sisir K Majumdar | 41 |
| 1392 | IJHS-49-2014-Issue-2 | Astronomy | Indic | [Makaranda Sarini and Allied Saurapakna Tables -A Study](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_2_9_KRupa.pdf) |  K Rupa, Padmaja Venugopal and S Balachandra Rao | 1068 |
| 1393 | IJHS-49-2014-Issue-2 | Astronomy | Indic | [Book Review: R N Iyengar - Parasaratantra: Ancient Sanskrit Text on Astronomy and Natural Sciences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_2_10_BookReview.pdf) |   | 76 |
| 1394 | IJHS-49-2014-Issue-2 | Math | Indic | [Historical Notes: Some Applications of First Approachable Sunya and Derivation of other Approachable Sunyas](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_10_KBBasant.pdf) |  K B Basant and Satyananda Panda | 1840 |
| 1395 | IJHS-49-2014-Issue-2 | Math | Indic | [Book Review: Sita Sundar Ram-Bijapallava of Krsna Daivajna: Algebra in Sixteen Century India-A Critical Study](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_11_RCGupta.pdf) |  R C Gupta | 51 |
| 1396 | IJHS-49-2014-Issue-2 | Medicine | Indic | [Project Report: The Traditional Ayurveda Practicing by Parambarya Vaidyas in Kerala and their Unique Ethical Outlook](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_12_SNellickappilly.pdf) |  Sreekumar Nellickappilly | 44 |
| 1397 | IJHS-49-2014-Issue-2 | Medicine | Indic | [Project Reports: The Garo Perception of Disease and Medicine: A History Since the British Regime in the Indian Sub-Continent](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_13_PMandal.pdf) |  Pratibha Mandal | 50 |
| 1398 | IJHS-49-2014-Issue-2 | Other | Other | [NEWS](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_14_NEWS.pdf) |   | 15 |
| 1399 | IJHS-49-2014-Issue-3 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_0_Contents.pdf) |   | 22 |
| 1400 | IJHS-49-2014-Issue-3 | Astronomy | Indic | [Parasara's Six Season Solar Zodiac and Heliacal Visibility of Star Agastya in 1350-1130 BC](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_1_RN_Iyengar.pdf) |  R N Iyengar | 641 |
| 1401 | IJHS-49-2014-Issue-3 | Agriculture | Indic | [Plant Diseases and their Treatment in Sanskrit Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_2_Dwivedi.pdf) |  Dhananjay Vasudeo Dwivedi | 79 |
| 1402 | IJHS-49-2014-Issue-3 | Astronomy | Indic | [Methods of Interpolation in Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_3_NHanda.pdf) |  Nidhi Handa and Padmavati Taneja | 444 |
| 1403 | IJHS-49-2014-Issue-3 | Math | Indic | [Nemicandra's Rules for Computing Multiplier and Divisor](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_4_DJadhav.pdf) |  Dipak Jadhav | 86 |
| 1404 | IJHS-49-2014-Issue-3 | Math | Indic | [On Mathematical Complexity of Sriyantra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_5_Pustynski.pdf) |  Vladislav-Veniamin Pustynski | 790 |
| 1405 | IJHS-49-2014-Issue-3 | Other | Indic | [Techno-Scientific Education and the Indian National Congress (1885-1918)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_6_NShah.pdf) |  Nirmala Shah | 63 |
| 1406 | IJHS-49-2014-Issue-3 | Medicine | Indic | [Historical Notes: Select Palm Leaf Manuscripts on Health Care](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_7_DBhatacharya.pdf) |  Deepak Bhattacharya | 35 |
| 1407 | IJHS-49-2014-Issue-3 | Math | Indic | [Historical Notes: Some Nineteenth Century Indian Mathematicians Prior to Ramanujan](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_8_RSridharan.pdf) |  R Sridharan | 153 |
| 1408 | IJHS-49-2014-Issue-3 | Other | Indic | [Historical Notes: Bankim Chandra-First Writer of Popular Science in Bengali](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_9_SKMajumdar.pdf) |  Sisir K Majumdar | 41 |
| 1409 | IJHS-49-2014-Issue-3 | Math | Indic | [Historical Notes: Some Applications of First Approachable Sunya and Derivation of other Approachable Sunyas](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_10_KBBasant.pdf) |  K B Basant and Satyananda Panda | 1840 |
| 1410 | IJHS-49-2014-Issue-3 | Math | Indic | [Book Review: Sita Sundar Ram-Bijapallava of Krsna Daivajna: Algebra in Sixteen Century India-A Critical Study](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_11_RCGupta.pdf) |  R C Gupta | 51 |
| 1411 | IJHS-49-2014-Issue-3 | Medicine | Indic | [Project Report: The Traditional Ayurveda Practicing by Parambarya Vaidyas in Kerala and their Unique Ethical Outlook](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_12_SNellickappilly.pdf) |  Sreekumar Nellickappilly | 44 |
| 1412 | IJHS-49-2014-Issue-3 | Medicine | Indic | [Project Reports: The Garo Perception of Disease and Medicine: A History Since the British Regime in the Indian Sub-Continent](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_13_PMandal.pdf) |  Pratibha Mandal | 50 |
| 1413 | IJHS-49-2014-Issue-3 | Other | Other | [NEWS](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_3_14_NEWS.pdf) |   | 15 |
| 1414 | IJHS-49-2014-issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_0_Contents.pdf) |   | 15 |
| 1415 | IJHS-49-2014-issue-4 | Other | Other | [Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_1_Editorial.pdf) |   | 87 |
| 1416 | IJHS-49-2014-issue-4 | Other | Other | [Guest Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_2_Guest_Editorial.pdf) |   | 78 |
| 1417 | IJHS-49-2014-issue-4 | Other | Indic | [The Chemical Researches of Acharya Prafulla Chandra Ray](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_3_AChakravorty.pdf) |  Animesh Chakravorty | 254 |
| 1418 | IJHS-49-2014-issue-4 | Other | Indic | [Early Research in Physical Chemistry in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_4_KBhattacharyya.pdf) |  Kankan Bhattacharyya | 52 |
| 1419 | IJHS-49-2014-issue-4 | Other | Indic | [History of Natural Products Chemistry in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_5_KNagarajan.pdf) |  K Nagarajan | 596 |
| 1420 | IJHS-49-2014-issue-4 | Other | Indic | [Indian Organic Chemical Industry: Decades of Struggle & Achievements](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_6_AVRRao.pdf) |  K Nagarajan | 576 |
| 1421 | IJHS-49-2014-issue-4 | Medicine | Indic | [Medicinal Chemistry Research in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_7_HSingh.pdf) |  Harikishan Singh | 415 |
| 1422 | IJHS-49-2014-issue-4 | Other | Indic | [A Short History of Electrochemistry in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_8_AKShukla.pdf) |  A K Shukla and T Prem Kumar | 25 |
| 1423 | IJHS-49-2014-issue-4 | Other | Indic | [Historical Notes: Manuscripts on Alchemy in India - Commentaries and Editions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_9_MRoy.pdf) |  Mira Roy | 39 |
| 1424 | IJHS-49-2014-issue-4 | Other | Indic | [Chemical Research in British India (1788-1900)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_10_BKSen.pdf) |  B K Sen | 50 |
| 1425 | IJHS-49-2014-issue-4 | Other | Indic | [The Making of a Classic: The Contemporary Significance of P. C. Ray's Historical Approach](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_11_DRaina.pdf) |  Dhruv Raina | 61 |
| 1426 | IJHS-49-2014-issue-4 | Other | Indic | [Good Life, Self-Sufficiency and Chemical Knowledge: Through The Chemical Worls View of Late Jnan Chandra Ghosh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_12_PKBasu.pdf) |  Prajit K Basu | 53 |
| 1427 | IJHS-49-2014-issue-4 | Other | Other | [Book Reviews](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_13_Bookreview.pdf) |   | 75 |
| 1428 | IJHS-49-2014-issue-4 | Other | Other | [Books Received for Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_14_Bookreceived.pdf) |   | 17 |
| 1429 | IJHS-49-2014-issue-4 | Other | Other | [Cumulative Index](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_15_CumulativeIndex.pdf) |   | 40 |
| 1430 | IJHS-49-2014-issue-4 | Other | Other | [Annual Contents 2014](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol49_4_16_AnnualContents2014.pdf) |   | 28 |
| 1431 | IJHS-50-2015-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Contents.pdf) |   | 105 |
| 1432 | IJHS-50-2015-Issue-1 | Other | Other | [Massage  From: President INSA](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Message_President.pdf) |  Raghavendra Gadagkar | 79 |
| 1433 | IJHS-50-2015-Issue-1 | Other | Other | [Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art01.pdf) |  D Balasubramanian, A K Bag | 28 |
| 1434 | IJHS-50-2015-Issue-1 | Astronomy | Indic | [Early System of Naksatras, Calendar and Antiquity of the Vedic & Harappan Traditions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art02.pdf) |  A K Bag | 286 |
| 1435 | IJHS-50-2015-Issue-1 | Biology | Indic | [Soma, an Enigmatic, Mysterious Plant of the Vedic Aryas: An Appraisal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art03.pdf) |  N C Shah | 368 |
| 1436 | IJHS-50-2015-Issue-1 | Metallurgy | Indic | [Crafts and Technologies of the Chalcolithic People of South Asia: An Overview](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art04.pdf) |  Vasant Shinde | 52 |
| 1437 | IJHS-50-2015-Issue-1 | Metallurgy | Indic | [The Metal Casting Traditions of South Asia: Continuity and Innovation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art05.pdf) |  Paul T Craddock | 900 |
| 1438 | IJHS-50-2015-Issue-1 | Medicine | Indic | [Foundations of Immunology in Ayurvedic classics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art06.pdf) |  Ram H Singh | 104 |
| 1439 | IJHS-50-2015-Issue-1 | Medicine | Indic | [From Persons to Hospital Cases: The Rise of Hospital Medicine and the Calcutta Medical College in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art07.pdf) |  Jayanta Bhattacharyra | 899 |
| 1440 | IJHS-50-2015-Issue-1 | MindSciences | Indic | [Historical Note: Concept of Manas in Samkhya Darsana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art08.pdf) |  Hetal Amin | 65 |
| 1441 | IJHS-50-2015-Issue-1 | Medicine | Indic | [Historical Note: Percetion of Food and Nutrition and Dietary Recommendation in Health and Disease: Focus on Caraka-Susruta Samhitas](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art09.pdf) |  Sukta Das | 103 |
| 1442 | IJHS-50-2015-Issue-1 | Other | Indic | [Historical Note: Old Water-Works on the Eastern Part of Mysore Plateau](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art10.pdf) |  Jean Deloche | 391 |
| 1443 | IJHS-50-2015-Issue-1 | Math | Indic | [Book Review: A Selected Works of Gurugovinda Chakravarti on Ancient and Medieval Indian Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art11.pdf) |  AKBag | 28 |
| 1444 | IJHS-50-2015-Issue-1 | Other | Indic | [Book Review: History of Science in India, Vol. III: Chemical Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art12.pdf) |  D Banerjea | 37 |
| 1445 | IJHS-50-2015-Issue-1 | Other | Indic | [Project Report: Use of Solar Passice Concepts in the Avadh Architechtectural Buildings and their Modified Impact](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art13.pdf) |  Usha Bajpai | 551 |
| 1446 | IJHS-50-2015-Issue-1 | Math | Indic | [News: Magic Square for 2015](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art14.pdf) |  S R Sharma | 695 |
| 1447 | IJHS-50-2015-Issue-1 | Math | Indic | [News: 900th Birth Anniversary of Bhaskaracarya: A Brief Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_1_Art15.pdf) |  Madhavendra Narayan | 118 |
| 1448 | IJHS-50-2015-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Contents.pdf) |   | 103 |
| 1449 | IJHS-50-2015-Issue-2 | Medicine | Indic | [Descriptions and Classification of Cancer in the Classical Ayurvedic Texts](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art01.pdf) |  P  Ram Manohar | 347 |
| 1450 | IJHS-50-2015-Issue-2 | Medicine | Indic | [Some Medicinal Plants of Indian Puranas in Today’s Ethnomedicinal Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art02.pdf) |  Madhumita Nath  | 189 |
| 1451 | IJHS-50-2015-Issue-2 | Medicine | Indic | [Classification of Substances in Vaidyanighantus -Medical Lexions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art03.pdf) |  B Rama Rao | 173 |
| 1452 | IJHS-50-2015-Issue-2 | Math | Fareast | [Allusions to Ancient Indian Mathematical Sciences in an Early Eighth Century Chinese Compilation by](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art04.pdf) |  Vijaya J Deshpande | 1431 |
| 1453 | IJHS-50-2015-Issue-2 | Math | Indic | [Narayana’s Generalisation of Matra-Vrtta-Prastara and the Generalised Virahanka-Fibonacci Representa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art05.pdf) |  Raja Sridharan | 1800 |
| 1454 | IJHS-50-2015-Issue-2 | Astronomy | Indic | [Rationale for Vakyas Pertaining to the Sun in Karanapaddhati](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art06.pdf) |  Venketeswara Pai R | 833 |
| 1455 | IJHS-50-2015-Issue-2 | Astronomy | Indic | [Lalah Bulhomal Lahori and the Production of Traditional Astronomical Instruments at Lahore in the Ni](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art07.pdf) |  S R Sarma | 1283 |
| 1456 | IJHS-50-2015-Issue-2 | Culture | Indic | [Historical Note: Ambergris in Perfumery in the Past and Present Indian Context and the Western World](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art08.pdf) |  T M Srinivasan | 813 |
| 1457 | IJHS-50-2015-Issue-2 | Medicine | Indic | [Historical Note: Traditional Healing Practices in North East India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art09.pdf) |  Ramashankar | 374 |
| 1458 | IJHS-50-2015-Issue-2 | Medicine | Other | [Historical Note: Historical Antecedents of Cancer Surveillance from 1805 to 1891](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art10.pdf) |  Wilson I B Onuigbo | 119 |
| 1459 | IJHS-50-2015-Issue-2 | Biology | Other | [Historical Note: Scientific Exploration of the Snow Fungus (Tremella fuciformis Berk.)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art11.pdf) |  Ruixia Wang | 369 |
| 1460 | IJHS-50-2015-Issue-2 | Other | Indic | [Project Report: Metrological Traditions of South India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art12.pdf) |  V Selvakumar | 920 |
| 1461 | IJHS-50-2015-Issue-2 | Astronomy | Indic | [Book Review: Indian Astronomy -Concepts and Procedures by S Balachandra Rao](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art13.pdf) |  A K Bhatnagar | 105 |
| 1462 | IJHS-50-2015-Issue-2 | Culture | Other | [News: Cross Civilizational Interactions in Antiquity: India, Iran, Greece and China - A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art14.pdf) |  Surajit Sarkar | 108 |
| 1463 | IJHS-50-2015-Issue-2 | Other | Indic | [News: Sir JC Bose Trust: An Appeal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_2_Art15.pdf) |  Trustee, Sir JC Bose Trust | 99 |
| 1464 | IJHS-50-2015-Issue-3 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_CONTENTS.pdf) |   | 13 |
| 1465 | IJHS-50-2015-Issue-3 | Philosophy | Indic | [Ideas and Researches on Physical Concepts in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art01.pdf) |  AK Bag | 568 |
| 1466 | IJHS-50-2015-Issue-3 | Medicine | Indic | [Kanny Lall Dey– Pioneer Proponent of Indigenous Drugs](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art02.pdf) |  Harkishan Singh | 113 |
| 1467 | IJHS-50-2015-Issue-3 | Other | Indic | [Sir Asutosh and Rise of Modern Science in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art03.pdf) |  Kankan Bhattacharyya | 86 |
| 1468 | IJHS-50-2015-Issue-3 | Other | Indic | [The Doctoral Research of Acharya Prafulla Chandra Ray](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art04.pdf) |  Animesh Chakravorty | 155 |
| 1469 | IJHS-50-2015-Issue-3 | Other | Indic | [D M Bose and Cosmic Ray Research](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art05.pdf) |  S C Roy | 1618 |
| 1470 | IJHS-50-2015-Issue-3 | Other | Indic | [An Account of the Development of Nuclear Magnetic Resonance (NMR) in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art06.pdf) |  Girjesh Govil | 192 |
| 1471 | IJHS-50-2015-Issue-3 | Other | Western | [Historical Notes: Electrochemistry and Fuel Cells: The Contribution of William Robert Grove](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art07.pdf) |  Jaime Wisniak | 54 |
| 1472 | IJHS-50-2015-Issue-3 | Other | Indic | [Historical Notes: Historiography and Commentary on the Nepal - India Earthquake of 26 August 1833](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art08.pdf) |  Sujit Dasgupta | 844 |
| 1473 | IJHS-50-2015-Issue-3 | Medicine | Indic | [Historical Notes: Rabies, Anti-Rabic Vaccine and the Raj](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art09.pdf) |  Gagandip Cheema | 29 |
| 1474 | IJHS-50-2015-Issue-3 | Math | Indic | [Historical Notes: Features of Mathematical Sciences in India in the Second World War](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art10.pdf) |  Jagdish N Sinha | 58 |
| 1475 | IJHS-50-2015-Issue-3 | Other | Indic | [Historical Notes: Doctorate Degrees from India: 1877 (first award) to 1920](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art11.pdf) |  B K Sen | 11 |
| 1476 | IJHS-50-2015-Issue-3 | Medicine | Indic | [Project Report: English Translation with critical notes and indexing of Pathyapathyaviniscaya - A 16](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art12.pdf) |  P Ram Manohar | 145 |
| 1477 | IJHS-50-2015-Issue-3 | Math | Other | [Book Review: Taming the Unknown - A History of Algebra from Antiquity to the Early Twentieth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art13.pdf) |  Raja Sridhran | 26 |
| 1478 | IJHS-50-2015-Issue-3 | Other | Other | [News](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_3_Art14.pdf) |   | 7 |
| 1479 | IJHS-50-2015-Issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_CONTENTS.pdf) |  Issue 4 | 113 |
| 1480 | IJHS-50-2015-Issue-4 | Agriculture | Indic | [Sacrificially Important Trees Revealed in the Krsna Yajurveda Samhita- Their Description and Uses](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art01.pdf) |  Raghava S Boddupalli and Vedam Venkata Rama Sastri | 4585 |
| 1481 | IJHS-50-2015-Issue-4 | Medicine | Indic | [Identity and Attributes of Ayurvedic Medicinal Plant Brahmi/Aindri from Antiquity to the Modern Age](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art02.pdf) |  Ram H Singh | 177 |
| 1482 | IJHS-50-2015-Issue-4 | Astronomy | Indic | [Survey of Zijes Written in the Subcontinent](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art03.pdf) |  S M Razaullah Ansari | 3540 |
| 1483 | IJHS-50-2015-Issue-4 | Math | Indic | [Nilakanthas Value of R-Sine for the Arc of Twenty-four Degrees](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art04.pdf) |  Takao Hayashi | 931 |
| 1484 | IJHS-50-2015-Issue-4 | Other | Indic | [HISTEM and the Making of Modern India — Some Questions and Explanations](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art05.pdf) |  Deepak Kumar | 156 |
| 1485 | IJHS-50-2015-Issue-4 | Medicine | Indic | [Historical Note: In Search of Roots: Tracing the History and Philosophy of Indian Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art06.pdf) |  Bhushan Patwardhan, Sharad Deshpande, Girish Tillu | 163 |
| 1486 | IJHS-50-2015-Issue-4 | Math | Indic | [Historical Note: Trigonometrical Survey of India and Naming of Peak XV as Mt. Everest](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art07.pdf) |  Shrikant Mishra et al. | 216 |
| 1487 | IJHS-50-2015-Issue-4 | Philosophy | Indic | [Correspondence: Ideas and Researches on Physical Concepts in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art08.pdf) |  BV Subbarayappa | 112 |
| 1488 | IJHS-50-2015-Issue-4 | Medicine | Indic | [Book Review: Medicine, Trade and Empire: Garcia de Orta’s Colloquies on the Simples and Drugs of India (1563) in Context](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art09.pdf) |  S Sundara Rajan | 121 |
| 1489 | IJHS-50-2015-Issue-4 | Medicine | Indic | [Project Report: English Translation of Rasendra Cudamani](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art10.pdf) |  K Naveena | 151 |
| 1490 | IJHS-50-2015-Issue-4 | Biology | Indic | [News: History of Science Seminar on the Indian Heritage: A Genomic View- A Report](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art11.pdf) |  Madhvendra Narayan | 103 |
| 1491 | IJHS-50-2015-Issue-4 | Other | Other | [Books Received for Review and](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art12.pdf) |  Announcements | 112 |
| 1492 | IJHS-50-2015-Issue-4 | Other | Other | [Cumulative Index](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art13.pdf) |  Year 2015 | 143 |
| 1493 | IJHS-50-2015-Issue-4 | Other | Other | [Annual Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol50_2015_4_Art14.pdf) |  Volume 50.1-4 (2015) | 118 |
| 1494 | IJHS-51-2016-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art01.pdf) |  Contents | 149 |
| 1495 | IJHS-51-2016-Issue-1 | Philosophy | Indic | [Editorial: Tradition & Methodology of Knowledge Production](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art02.pdf) |  A K Bag | 180 |
| 1496 | IJHS-51-2016-Issue-1 | Other | Other | [Guest Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art03.pdf) |  Rajan Gurukkal | 115 |
| 1497 | IJHS-51-2016-Issue-1 | Philosophy | Indic | [An Introductory Outline of Knowledge Production in Pre-colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art04.pdf) |  Rajan Gurukkal | 182 |
| 1498 | IJHS-51-2016-Issue-1 | Metallurgy | Indic | [Metallurgy of Zinc, High-tin Bronze and Gold in Indian Antiquity: Methodological Aspects](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art05.pdf) |  Sharada Srinivasan | 1338 |
| 1499 | IJHS-51-2016-Issue-1 | Medicine | Indic | [Carakas Approach to Knowledge](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art06.pdf) |  M S Valiathan | 259 |
| 1500 | IJHS-51-2016-Issue-1 | Medicine | Indic | [Origins and Growth of Ayurvedic Knowledge](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art07.pdf) |  M R Raghava Varier | 186 |
| 1501 | IJHS-51-2016-Issue-1 | Medicine | Indic | [Knowledge Generation in Ayurveda: Methodological Aspects](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art08.pdf) |  S N Venugopalan Nair and Darshan Shankar | 193 |
| 1502 | IJHS-51-2016-Issue-1 | Math | Indic | [What is Indian about Indian Mathematics?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art09.pdf) |  P P Divakaran | 385 |
| 1503 | IJHS-51-2016-Issue-1 | Astronomy | Indic | [Heliacal Rising of Canopus in Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art10.pdf) |  S Balachandra Rao, Rupa K and Padmaja Venugopal | 945 |
| 1504 | IJHS-51-2016-Issue-1 | Philosophy | Indic | [Inference as a Means of Valid Knowledge in Indian Epistemological Tradition](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art11.pdf) |  C Rajendran | 144 |
| 1505 | IJHS-51-2016-Issue-1 | Philosophy | Indic | [Debate as a Methodology of Knowledge Production in Pre-Modern India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art12.pdf) |  A Raghuramaraju | 150 |
| 1506 | IJHS-51-2016-Issue-1 | Other | Other | [Translation as Method: Implications for History of Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art13.pdf) |  Sundar Sarukkai | 174 |
| 1507 | IJHS-51-2016-Issue-1 | Lingiustics | Indic | [In Search of the Beginnings and Growth of Knowledge Production in Tamil](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art14.pdf) |  R Champakalakshmi | 182 |
| 1508 | IJHS-51-2016-Issue-1 | Lingiustics | Indic | [A Note on Grammatical Knowledge in Early Tamilakam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art15.pdf) |  Y Subbarayalu | 155 |
| 1509 | IJHS-51-2016-Issue-1 | Culture | Indic | [Body Centric Knowledge: Traditions of Performance and Pedagogy in Kathakali](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art16.pdf) |  Mundoli Narayanan | 192 |
| 1510 | IJHS-51-2016-Issue-1 | Music | Indic | [The Polysemy of the Prabandha – Reading a Premodern Musical Genre](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art17.pdf) |  Naresh Keerthi | 1565 |
| 1511 | IJHS-51-2016-Issue-1 | Other | Indic | [From the Mythology of Vastusastra to the Methodology of Vastuvidya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_1_Art18.pdf) |  RV Achari | 778 |
| 1512 | IJHS-51-2016-Issue-2A | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art00.pdf) |   | 103 |
| 1513 | IJHS-51-2016-Issue-2A | Agriculture | Indic | [Agricultural Practices as gleaned from the Tamil Literature of the Sangam Age](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art01.pdf) |  T M Srinivasan | 1207 |
| 1514 | IJHS-51-2016-Issue-2A | Math | Indic | [Combinatorics as Found in the Gommatsara of Nemichandra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art02.pdf) |  Dipak Jadhav and Anupam Jain | 921 |
| 1515 | IJHS-51-2016-Issue-2A | Astronomy | Indic | [Records of Vyatipata in Stone Inscriptions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art03.pdf) |  B S Shylaja and Geetha Kydala | 1964 |
| 1516 | IJHS-51-2016-Issue-2A | Medicine | Indic | [Pathophysiology and Treatment of Urolithiasis in Unani Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art04.pdf) |  I Mohammed Tabarak Hussain, Ghufran Ahmed, Nasreen | 181 |
| 1517 | IJHS-51-2016-Issue-2A | Other | Indic | [Techno-Engineering Education and the Railways in Colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art05.pdf) |  Debashis Mandal | 142 |
| 1518 | IJHS-51-2016-Issue-2A | Medicine | Indic | [Sahib Singh Sokhey (1887-1971): An Eminent Medico-Pharmaceutical Professional](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art06.pdf) |  Harkishan Singh | 442 |
| 1519 | IJHS-51-2016-Issue-2A | Astronomy | Indic | [Historical Notes: Revisiting the Calendar Tradition of Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art07.pdf) |  BN Narhari Achar | 562 |
| 1520 | IJHS-51-2016-Issue-2A | Medicine | Western | [Historical Notes: Genesis and Progress in Concepts of Preventive Cardiology: A Historical Overview](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art08.pdf) |  Sukta Das | 178 |
| 1521 | IJHS-51-2016-Issue-2A | Agriculture | Indic | [Historical Notes: Girish Chandra Bose and Agricultural Journalism](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art09.pdf) |  CB Palit | 119 |
| 1522 | IJHS-51-2016-Issue-2A | Math | Indic | [Historical Notes: Radhanath Sikdar and the Final Phase of Measuring Peak XV](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art10.pdf) |  Ashish Lahiri | 128 |
| 1523 | IJHS-51-2016-Issue-2A | Culture | Indic | [Book Review: Flood Finbarr B—Objects of Translation – Material Culture and Medieval “Hindu-Muslim](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art11.pdf) |  Madhvendra Narayan | 122 |
| 1524 | IJHS-51-2016-Issue-2A | Lingiustics | Indic | [Project Report: Study of Indus Valley Scripts through Linguistic and Markov Chain Methods](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art12.pdf) |  Niladri Sarkar | 3447 |
| 1525 | IJHS-51-2016-Issue-2A | Math | Indic | [Project Report: English Translation of Second part of Siddhanta Sekhara of Sripati](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_1_Art13.pdf) |  Sripad Bhat | 138 |
| 1526 | IJHS-51-2016-Issue-2B | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art00.pdf) |   | 106 |
| 1527 | IJHS-51-2016-Issue-2B | Other | Other | [Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art01.pdf) |  D Balasubramanian and AK Bag | 95 |
| 1528 | IJHS-51-2016-Issue-2B | Other | Other | [Guest Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art02.pdf) |  Partha P Majumder | 89 |
| 1529 | IJHS-51-2016-Issue-2B | Biology | Indic | [Iconic Flora of Heritage Significance in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art03.pdf) |  H Y Mohan Ram | 2759 |
| 1530 | IJHS-51-2016-Issue-2B | Biology | Indic | [The Holy Basil (Ocimum sanctum L.) and its Genome](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art04.pdf) |  Ajit K Shasany | 588 |
| 1531 | IJHS-51-2016-Issue-2B | Biology | Other | [Genome and Evolution of the Sacred Lotus](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art05.pdf) |  Partha P Majumder | 112 |
| 1532 | IJHS-51-2016-Issue-2B | Agriculture | Indic | [Decoded Rice Genome for Decipherment of Origin, Domestication and Functional Attributes of Rice](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art06.pdf) |  Akhilesh K Tyagi | 205 |
| 1533 | IJHS-51-2016-Issue-2B | Agriculture | Indic | [Origin, Diversity and Genome Sequence of Mango (Mangifera indica L.)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art07.pdf) |  Nagendra K Singh, Ajay K Mahato et al., | 2668 |
| 1534 | IJHS-51-2016-Issue-2B | Culture | Indic | [Iconic Fauna of Heritage Significance in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art08.pdf) |  Raman Sukumar | 1086 |
| 1535 | IJHS-51-2016-Issue-2B | Biology | Indic | [Genetic Structure of the Wild Populations of the Indian Rhinoceros (Rhinoceros unicornis)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art09.pdf) |  Samuel Zschokke | 388 |
| 1536 | IJHS-51-2016-Issue-2B | Biology | Indic | [Gene flow and Evolutionary History of Tigers in Central India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art10.pdf) |  Sandeep Sharma | 392 |
| 1537 | IJHS-51-2016-Issue-2B | Biology | Indic | [Evolutionary History and Population Genetic Structure of Asian Elephants in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art11.pdf) |  T N C Vidya | 1157 |
| 1538 | IJHS-51-2016-Issue-2B | Biology | Indic | [The Dazzling Diversity and the Fundamental Unity: Peopling and the Genomic Structure of Ethnic India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art12.pdf) |  Analabha Basu | 146 |
| 1539 | IJHS-51-2016-Issue-2B | Medicine | Indic | [Historical Note: Medical Genetics in Classical Ayurvedic Texts: A Critical Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art13.pdf) |  P Ram Manohar | 829 |
| 1540 | IJHS-51-2016-Issue-2B | Biology | Indic | [Historical Note: History and Development of Genetics Research in India: Three case studies](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_2_2_Art14.pdf) |  DP Kasbekar | 403 |
| 1541 | IJHS-51-2016-Issue-3 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art00.pdf) |  Contents | 203 |
| 1542 | IJHS-51-2016-Issue-3 | Culture | Indic | [Mud Plaster Wall Paintings of Bhaja Caves: Composition and Performance Characteristics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art01.pdf) |  M Singh, S Vinodh Kumar and Sujata Waghmare | 2860 |
| 1543 | IJHS-51-2016-Issue-3 | Philosophy | Other | [Role of Experiments in the Progress of Science: Lessons from our History](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art02.pdf) |  D P Roy | 1016 |
| 1544 | IJHS-51-2016-Issue-3 | Astronomy | Arabic | [A Lahore Astrolabe of 1587 at Moscow: Enigmas in its Construction](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art03.pdf) |  Sergei Maslikov and Sreeramula Rajeswara Sarma | 5721 |
| 1545 | IJHS-51-2016-Issue-3 | MindSciences | Indic | [Madras Lunatic Asylum: A Remarkable History in British India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art04.pdf) |  Saumitra Basu | 1814 |
| 1546 | IJHS-51-2016-Issue-3 | Other | Other | [Science, Science Literacy and Communication](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art05.pdf) |  G S Rautela and Kanchan Chowdhury | 1972 |
| 1547 | IJHS-51-2016-Issue-3 | Astronomy | Indic | [Historical Note: On the Visibility of Agastya (Canopus) in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art06.pdf) |  K Chandra Hari | 2180 |
| 1548 | IJHS-51-2016-Issue-3 | Other | Western | [Historical Note: The Nobel Laureate W.C. Roentgen and His X-Rays](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art07.pdf) |  Rajinder Singh | 289 |
| 1549 | IJHS-51-2016-Issue-3 | Astronomy | Indic | [Historical Note: N C Rana: Life and His Contributions in Astrophysical Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art08.pdf) |  Utpal Mukhopadhyay and Saibal Ray | 933 |
| 1550 | IJHS-51-2016-Issue-3 | Biology | Indic | [Project Report: Amarakosa – A Biological Assessment](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art09.pdf) |  S Sundara Rajan | 439 |
| 1551 | IJHS-51-2016-Issue-3 | Other | Indic | [Project Report: A Study on River Channel Modifications of Jorhat District of Assam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art10.pdf) |  Raktim Ranjan Saikia and D Nurul Amin | 273 |
| 1552 | IJHS-51-2016-Issue-3 | Astronomy | Indic | [Corrections and Additions: Survey of Zijes Written in the Subcontinent](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_2016_3_Art11.pdf) |  S. M. Razaullah Ansari | 264 |
| 1553 | IJHS-51-2016-Issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Contents.pdf) |  Contents | 108 |
| 1554 | IJHS-51-2016-Issue-4 | Other | Other | [Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art01.pdf) |  AK Bag | 177 |
| 1555 | IJHS-51-2016-Issue-4 | Other | Other | [Guest Editorial](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art02.pdf) |  Lotika Vardarajan and Surajit Sarkar | 84 |
| 1556 | IJHS-51-2016-Issue-4 | Other | Indic | [An Indic Text on Earth Science: Sasanian to Post-Sasanian Period](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art03.pdf) |  Daryoosh Akbarzadeh | 361 |
| 1557 | IJHS-51-2016-Issue-4 | Culture | Indic | [Throne — Asandi, Pallanka, Simhasana: An Indian Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art04.pdf) |  Anamika Pathak | 1823 |
| 1558 | IJHS-51-2016-Issue-4 | Culture | Indic | [The Hybrid Creatures in Iranian and Indian Art](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art05.pdf) |  Katayoun Fekripour | 2689 |
| 1559 | IJHS-51-2016-Issue-4 | Culture | Indic | [Commonalities between Yajna Ritual in India and Yasna Ritual in Iran](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art06.pdf) |  Azadeh Heidarpoor and Fariba Sharifian | 166 |
| 1560 | IJHS-51-2016-Issue-4 | Metallurgy | Indic | [Indian High-Tin Bronzes and the Grecian and Persian World](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art07.pdf) |  Sharada Srinivasan | 3500 |
| 1561 | IJHS-51-2016-Issue-4 | Other | Indic | [Vetikkampavidhi: A Malayalam Text on Pyrotechny](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art08.pdf) |  Abhilash Malayil | 224 |
| 1562 | IJHS-51-2016-Issue-4 | Culture | Other | [Central Asia: A Melting Pot of Persian, Greek, Indian and Chinese Cultural Traditions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art09.pdf) |  Chhaya Bhattacharya-Haesner | 5575 |
| 1563 | IJHS-51-2016-Issue-4 | Culture | Other | [Taxila – An Alternative Urbanisation Between the Silk Road and the Uttarapatha (the Northern Road)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art10.pdf) |  Surajit Sarkar | 332 |
| 1564 | IJHS-51-2016-Issue-4 | Culture | Other | [Buddhism in Khotan and Soghdiana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art11.pdf) |  Fariba Sharifian | 137 |
| 1565 | IJHS-51-2016-Issue-4 | Culture | Other | [Krsna Iconography in Khotan Carpets: Spread of Hindu Religious Ideas in Xinjiang, China, Fourth–Seve](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art12.pdf) |  Zhang He | 2460 |
| 1566 | IJHS-51-2016-Issue-4 | Culture | Other | [The Benaki Collection of Fustat Textiles - Analysis and Provenance](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art13.pdf) |  Lotika Varadarajan | 3970 |
| 1567 | IJHS-51-2016-Issue-4 | Other | Indic | [From Balkh to Baghdad: Indian Science and the Birth of the Islamic Golden Age in the Eighth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art14.pdf) |  Dominik Wujastyk | 3272 |
| 1568 | IJHS-51-2016-Issue-4 | Other | Other | [Books Received for Review & Announcements](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art15.pdf) |  INSA | 110 |
| 1569 | IJHS-51-2016-Issue-4 | Other | Other | [Cumulative Index](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol51_4_2016_Art16.pdf) |  Vol. 51.1-4 (2016) | 135 |
| 1570 | IJHS-52-2017-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art00.pdf) |  Contents | 205 |
| 1571 | IJHS-52-2017-Issue-1 | Math | Indic | [Some Features of the Solutions of Kuttaka and Vargaprakrti](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art01.pdf) |  AK Bag | 809 |
| 1572 | IJHS-52-2017-Issue-1 | Math | Indic | [Ideas of Infinitesimal of Bhaskaracarya in Lilavati and Siddhantasiromani](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art02.pdf) |  A B Padmanabha Rao | 411 |
| 1573 | IJHS-52-2017-Issue-1 | Medicine | Indic | [The Hospital transcends into Hospital Medicine: A Brief Journey through Ancient,  Medieval and Colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art03.pdf) |  Jayanta Bhattacharya | 620 |
| 1574 | IJHS-52-2017-Issue-1 | Medicine | Indic | [Amoebic Dysentery and Introduction of Emetine Source Carapichea ipecacacuanha into Indian Subcontinent](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art04.pdf) |  Ramya Raman and Anantanarayanan Raman | 644 |
| 1575 | IJHS-52-2017-Issue-1 | Medicine | Indic | [Discovery of X-rays and its Impact in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art05.pdf) |  SC Roy | 730 |
| 1576 | IJHS-52-2017-Issue-1 | Math | Indic | [Historical Note: Ashutosh Mukherjee’s Contribution on Nineteenth Century Modern Mathematics: A Bird’s Eye View](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art06.pdf) |  Sabitri Ray Chaudhuri | 50 |
| 1577 | IJHS-52-2017-Issue-1 | Biology | Indic | [Historical Note: G N Ramachandran: A Nobel Prize Nominee and Nominator](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art07.pdf) |  Rajinder Singh | 127 |
| 1578 | IJHS-52-2017-Issue-1 | Medicine | Indic | [Historical Note: Udoy Chand Dutt: Prominent Indian Materia Medica Promoters](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art08.pdf) |  Harkishan Singh | 184 |
| 1579 | IJHS-52-2017-Issue-1 | Agriculture | Fareast | [Historical Note: Scientific Explorations and Commercial Sales of the Straw Mushroom  Volvariella volvacea (Bull.) Singer in Republican China:  A Brief Review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art09.pdf) |  Ruxia Wang, Hui Cao, Jingsong Zhang and Qi Tan | 723 |
| 1580 | IJHS-52-2017-Issue-1 | Math | Indic | [Book Review: Rao, A B Padmanabha (trans. and ed.) Bhaskaracarya&#8217;s Lilavati Part I &amp; II](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art10.pdf) |  MS Sriram | 374 |
| 1581 | IJHS-52-2017-Issue-1 | Medicine | Indic | [Project Report: History of Neurodegenerative Diseases and its impact on Aged Population in India: An Assessment](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_1_2017_Art11.pdf) |  Saumitra Basu | 378 |
| 1582 | IJHS-52-2017-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Contents.pdf) |  Contents | 201 |
| 1583 | IJHS-52-2017-Issue-2 | Astronomy | Indic | [Angular Diameters (bimba) of the Sun, Moon and Earth’s Shadow-cone in Indian Astronomy: A Comparative Study](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art01.pdf) |  S Balachandra Rao, M Shailaja and V Vanaja | 579 |
| 1584 | IJHS-52-2017-Issue-2 | Math | Indic | [Novel Proofs for Summations in the Nisrstarthaduti](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art02.pdf) |  Aditya Kolachana, K Mahesh and K Ramasubramanian | 2527 |
| 1585 | IJHS-52-2017-Issue-2 | Astronomy | Indic | [Sundial for Time–keeping in Jaisalmer Fort](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art03.pdf) |  Aalok Pandya, Tej Bahadur and Sandip Bhattachar | 4035 |
| 1586 | IJHS-52-2017-Issue-2 | Other | Western | [Edward Blyth and the Asiatic Society](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art04.pdf) |  Aparajita Basu | 343 |
| 1587 | IJHS-52-2017-Issue-2 | Culture | Indic | [Central Weaving Institute, Banaras: A Cultural Encounter between the Native and the Modern Form of Instructional Practices](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art05.pdf) |  Prakrati Bhargava | 368 |
| 1588 | IJHS-52-2017-Issue-2 | Medicine | Western | [The History of Colonial Science and Medicine in British India: Centre-Periphery Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art06.pdf) |  Rahul Bhaumik | 326 |
| 1589 | IJHS-52-2017-Issue-2 | Astronomy | Indic | [Historical Note:Cause of Sunrise, Sunset from Jnanesvari and its comparison to Aryabhatiya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art07.pdf) |  Anand Dabak | 394 |
| 1590 | IJHS-52-2017-Issue-2 | Metallurgy | Indic | [Historical Note: Allusions of Rasayanasastra in Telugu Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art08.pdf) |  Iragavarapu Suryanarayana | 542 |
| 1591 | IJHS-52-2017-Issue-2 | Other | Indic | [Historical Note: General Scientific Societies in British India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art09.pdf) |  B K Sen | 467 |
| 1592 | IJHS-52-2017-Issue-2 | Math | Indic | [Historical Note: Syamadas Mukhopadhyay (1866-1937): A Reputed Geometrician of India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art10.pdf) |  Purabi Mukherji and Mala Bhattacharjee | 346 |
| 1593 | IJHS-52-2017-Issue-2 | Other | Indic | [Book Review: Gauhar Raza, R Gopichandran, Gurdeep S Sappal and TV Venkateswaran (editors) : Moments of Eureka- Life & Works of Selected Indian Scientists](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art12.pdf) |  Kankan Bhattacharyya | 193 |
| 1594 | IJHS-52-2017-Issue-2 | Astronomy | Indic | [Book Review: B S Shylaja and V S S Sastry : Jantar Mantar Observatories of Jai Singh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art13.pdf) |  S Balachandra Rao | 261 |
| 1595 | IJHS-52-2017-Issue-2 | Metallurgy | Indic | [Project Report: History of High Tin Bronze and Brass of Eastern India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_2_2017__Art11.pdf) |  Pranab K Chattopadhayay | 2411 |
| 1596 | IJHS-52-2017-Issue-3 | Medicine | Indic | [Identification of Mosquitoes, Nature of Diseases and Treatment in Early Sanskrit Literature](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art01.pdf) |  Sagan Deep Kaur and Lakhvir Singh | 2140 |
| 1597 | IJHS-52-2017-Issue-3 | Biology | Indic | [Importance of Plants as depicted in Puranas](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art02.pdf) |  Dhananjay Vasudeo Dwivedi | 277 |
| 1598 | IJHS-52-2017-Issue-3 | Medicine | Indic | [Strivilasa – An Ayurvedic Manuscript on Cosmetic Procedures of Females, Aphrodisiacs, Diseases and M](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art03.pdf) |  Goli Penchala Prasad et al. | 830 |
| 1599 | IJHS-52-2017-Issue-3 | Medicine | Western | [Western Medicine in French Pondichery (1690–1954)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art04.pdf) |  Ramya Raman and Anantanarayanan Raman | 4023 |
| 1600 | IJHS-52-2017-Issue-3 | Medicine | Indic | [Institutionalization of Nursing as Profession in the Early Twentieth Century Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art05.pdf) |  Sneha Sanyal | 411 |
| 1601 | IJHS-52-2017-Issue-3 | Math | Indic | [Historical Notes: The Jaina School of Indian Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art06.pdf) |  Dipak Jadhav | 343 |
| 1602 | IJHS-52-2017-Issue-3 | Culture | Indic | [Historical Notes: Mango in Ancient Indian Sculptures and during Akbar Period](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art07.pdf) |  N C Shah | 1153 |
| 1603 | IJHS-52-2017-Issue-3 | Other | Indic | [Historical Note: Why and When were the Vijayanagara Walls Built? .....](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art08.pdf) |  Jean Deloche | 114 |
| 1604 | IJHS-52-2017-Issue-3 | Other | Indic | [Historical Note: B B Ray and Controversy over the Spectral Raman-lines](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art09.pdf) |  Rajinder Singh | 2836 |
| 1605 | IJHS-52-2017-Issue-3 | Other | Other | [Book Review: Scientifically Yours](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art10.pdf) |  Kankan Bhattacharyya | 103 |
| 1606 | IJHS-52-2017-Issue-3 | Culture | Other | [Book Review: Tracks of Change: Railways and Everyday Life in Colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art11.pdf) |  Debashis Mandal | 126 |
| 1607 | IJHS-52-2017-Issue-3 | Other | Indic | [Project Report: History of Science Museums and Planetariums in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_3_2017__Art12.pdf) |  Jayanta Sthanapati | 3235 |
| 1608 | IJHS-52-2017-Issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Contents.pdf) |  Contents | 1498 |
| 1609 | IJHS-52-2017-Issue-4 | Astronomy | Indic | [Date of Mahābhārata War Based on Astronomical References—A Reassessment](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art01.pdf) |  Ashok K Bhatnagar | 5016 |
| 1610 | IJHS-52-2017-Issue-4 | Math | Indic | [Aryabhata-II and his Concept of Concave Quadrilateral](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art02.pdf) |  Amalkumar Mukhopadhyay | 449 |
| 1611 | IJHS-52-2017-Issue-4 | Other | Western | [Sisir Kumar Mitra, Scientific Achievements and the Fellowship of the Royal Society of London](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art03.pdf) |  Rajinder Singh | 2697 |
| 1612 | IJHS-52-2017-Issue-4 | Lingiustics | Other | [History of the Scientific Study of the Tibeto-Burman Languages of North-East India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art04.pdf) |  Satarupa Dattamajumdar | 2297 |
| 1613 | IJHS-52-2017-Issue-4 | Medicine | Indic | [Historical Notes: Some Thoughts on Hindu Medicine —An Address by Kaviraj Mahamahopadhyaya Gananath..](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art05.pdf) |  N C Shah | 3243 |
| 1614 | IJHS-52-2017-Issue-4 | Other | Indic | [Historical Notes: Science Education and Science Writing in Hindi in the North West Provinces...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art06.pdf) |  Pooja Mishra | 943 |
| 1615 | IJHS-52-2017-Issue-4 | Culture | Other | [Book Review: Bengal Water Craft: Boat-Building and Fishing Communities by Lotika Varadarajan](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art07.pdf) |  Smritikumar Sarkar | 165 |
| 1616 | IJHS-52-2017-Issue-4 | Other | Other | [Book Review: India’s Nobel Prize: Nominators and Nominees, by Rajinder Singh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art08.pdf) |  Kankan Bhattacharyya | 95 |
| 1617 | IJHS-52-2017-Issue-4 | Other | Other | [Book Review: Inside Story of Nobel Peace Prize: Indian Contestants by Rajinder Singh](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art09.pdf) |  Kankan Bhattacharyya | 102 |
| 1618 | IJHS-52-2017-Issue-4 | Other | Other | [Project Report: History of Technology Adoption and Development: The Case of Silk Industry....](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art10.pdf) |  Anirban Mukherjee | 120 |
| 1619 | IJHS-52-2017-Issue-4 | Other | Other | [Obituary: Lotika Varadarajan (1934-2017)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art11.pdf) |  Surajit Sarkar | 233 |
| 1620 | IJHS-52-2017-Issue-4 | Other | Other | [News: The 25th International Congress of History of Science and Technology...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art12.pdf) |  Gulfishan Khan | 128 |
| 1621 | IJHS-52-2017-Issue-4 | Other | Other | [Books Received (2017)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/13-Books Received for Review.pdf) |  Madhvendra Narayan | 126 |
| 1622 | IJHS-52-2017-Issue-4 | Math | Indic | [Ganitapancavimsi — Sanskrit Text with Introduction, English Translation and Notes](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol52_4_2017__Art13.pdf) |  K S Shukla | 15361 |
| 1623 | IJHS-52-2017-Issue-4 | Other | Other | [Cumulative Index](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/17-Cumulativeindex.pdf) |  Madhvendra Narayan | 135 |
| 1624 | IJHS-52-2017-Issue-4 | Other | Other | [Annual Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/18-Contentsall.pdf) |  Madhvendra Narayan | 114 |
| 1625 | IJHS-53-2018-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Contents.pdf) |  Contents | 106 |
| 1626 | IJHS-53-2018-Issue-1 | Astronomy | Indic | [Madhava’s Multi-pronged Approach for Obtaining the Praṇakalantara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art01.pdf) |  Aditya Kolachana, K Mahesh and K Ramasubramanian | 244 |
| 1627 | IJHS-53-2018-Issue-1 | Astronomy | Indic | [Ahargana in Makarandasarini and Other Indian Astronomical Texts](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art02.pdf) |  S K Uma and S Balachandra Rao | 429 |
| 1628 | IJHS-53-2018-Issue-1 | Medicine | Indic | [Medical Education on the Colonial Periphery: A Study of Medical Institutions in Patna and Dacca](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art03.pdf) |  Aishwaryarupa Majumdar | 466 |
| 1629 | IJHS-53-2018-Issue-1 | Other | Indic | [Celebrating the 90th Anniversary of the Raman Effect](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art04.pdf) |  Rajinder Singh | 2161 |
| 1630 | IJHS-53-2018-Issue-1 | Biology | Indic | [Indian Arthropods in Early Sanskrit Literature: A Taxonomical Analysis](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art05.pdf) |  Sagan Deep Kaur and Lakhvir Singh | 154 |
| 1631 | IJHS-53-2018-Issue-1 | Biology | Indic | [A Small History of Bedbugs in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art06.pdf) |  Shubhneet Kaushik | 155 |
| 1632 | IJHS-53-2018-Issue-1 | Medicine | Indic | [History of Development of Homoeopathy in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art07.pdf) |  Ajoy Kumar Ghosh | 138 |
| 1633 | IJHS-53-2018-Issue-1 | Medicine | Indic | [First Fifty Years (1900-1950) of Physiology in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art08.pdf) |  Amar K Chandra | 194 |
| 1634 | IJHS-53-2018-Issue-1 | Astronomy | Indic | [Correspondence: Date of Mahabharata War Based on Astronomical References: A K Bhatnagar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art09.pdf) |  B N Narahari Achar | 169 |
| 1635 | IJHS-53-2018-Issue-1 | Medicine | Indic | [Book Review: Ayurvedic Inheritance — A Reader’s Companion by M S Valiathan](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art10.pdf) |  Anantanarayanan Raman | 156 |
| 1636 | IJHS-53-2018-Issue-1 | Other | Indic | [Book Review: Technology of the Tribes of Northeast India by Amrendra Kumar Thakur](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art11.pdf) |  J N Sinha | 111 |
| 1637 | IJHS-53-2018-Issue-1 | MindSciences | Indic | [Project Report: Medicine and British Empire in South India: A Study of Psychiatry and Mental Asylums](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_1_2018__Art12.pdf) |  Santhosh Abraham | 124 |
| 1638 | IJHS-53-2018-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Contents.pdf) |  IJHS | 103 |
| 1639 | IJHS-53-2018-Issue-2 | Music | Indic | [Concept of Sruti, Svara and Raga of Classical Music in Sanskrit Texts](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Art01.pdf) |  RN Iyengar | 1882 |
| 1640 | IJHS-53-2018-Issue-2 | Metallurgy | Indic | [Brass, Zinc and the Beginning of Chemical Industry](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Art02.pdf) |  Paul T Craddock | 8906 |
| 1641 | IJHS-53-2018-Issue-2 | Medicine | Indic | [Indigenous and Western Medicines in Colonial South India: Nature of Discourses and Impact](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Art03.pdf) |  D V Kanagarathinam  | 206 |
| 1642 | IJHS-53-2018-Issue-2 | Agriculture | Indic | [Punjab Agricultural College and Research Institute, Lyallpur (1906-1947): Generating Knowledge for..](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Art04.pdf) |  Kamlesh Mohan | 365 |
| 1643 | IJHS-53-2018-Issue-2 | Medicine | Indic | [Historical Note: History of  Yavaka from Ethno-pharmacological Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Art05.pdf) |  Rajeshwari Singh, Mita Kotecha and N Srikant | 1236 |
| 1644 | IJHS-53-2018-Issue-2 | Other | Indic | [Historical Note: The Incredible Survival of Stone Wheel Manufacture in South India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Art06.pdf) |  Jean Deloche | 21636 |
| 1645 | IJHS-53-2018-Issue-2 | Other | Indic | [Correspondence: A Physics Museum in BHU in 1942](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Art07.pdf) |  B Anantha Dasannacharya | 4325 |
| 1646 | IJHS-53-2018-Issue-2 | Math | Indic | [Book Reviews: Vedic Mathematics mattu Vedagalalli Vijnana by S Balachandra Rao](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Art08.pdf) |  B S Shylaja | 118 |
| 1647 | IJHS-53-2018-Issue-2 | Biology | Indic | [Book Reviews: Plants of Kedarnath Wildlife Sanctuary, Western Himalaya: A Field Guide by ...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Art09.pdf) |  N C Shah | 119 |
| 1648 | IJHS-53-2018-Issue-2 | Other | Other | [Book Reviews: A Brief History of Science by  Breakthrough Science Society, Kolkata](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Art10.pdf) |  Kankan Bhattacharyya | 106 |
| 1649 | IJHS-53-2018-Issue-2 | Astronomy | Indic | [News: Workshop on Importance of Eclipses in the History of Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_2_2018__Art11.pdf) |  BS Shylaja | 95 |
| 1650 | IJHS-53-2018-Issue-3 | Other | Indic | [Harappan Shell Industry: An Overview](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art01.pdf) |  V H Sonawane | 3176 |
| 1651 | IJHS-53-2018-Issue-3 | Metallurgy | Indic | [Indus Ceramic Industries: Complexities, Challenges and Prospects](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art02.pdf) |  K Krishnan | 529 |
| 1652 | IJHS-53-2018-Issue-3 | Metallurgy | Indic | [Copper Vessels in the Indus Valley Civilization: A Case Study in the Light of Harinagar Hoard](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art03.pdf) |  Bhuvan Vikrama and Arakhita Pradhan | 2013 |
| 1653 | IJHS-53-2018-Issue-3 | Metallurgy | Indic | [Metals and Metallurgy in the Harappan Civilization](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art04.pdf) |  Vibha Tripathi | 4035 |
| 1654 | IJHS-53-2018-Issue-3 | Agriculture | Indic | [Indigo — The Crop that Created History and then Itself Became History](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art05.pdf) |  Rajendra Prasad | 142 |
| 1655 | IJHS-53-2018-Issue-3 | Astronomy | Indic | [Determination of Ascensional Difference in the Lagnaprakarana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art06.pdf) |  Aditya Kolachana et al. | 191 |
| 1656 | IJHS-53-2018-Issue-3 | Astronomy | Indic | [Historical Note: The Origin of the 28 Naksatras in Early Indian Astronomy and Astrology](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art07.pdf) |  Howard D Jones | 159 |
| 1657 | IJHS-53-2018-Issue-3 | Astronomy | Indic | [Historical Note:Reactions of Emperor Bahadur Shah Zafar and Laureate Mirza Ghalib to the Celestial..](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art08.pdf) |  R C Kapoor | 840 |
| 1658 | IJHS-53-2018-Issue-3 | Biology | Western | [Historical Note: Philippe Barbier and His Knowledge of Plants and Inorganic Principles in the...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art09.pdf) |  Jaime Wisniak | 283 |
| 1659 | IJHS-53-2018-Issue-3 | Astronomy | Western | [Historical Note: Bibha Chowdhuri – Her Cosmic Ray Studies in Manchester](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art10.pdf) |  S C Roy and Rajinder Singh | 4324 |
| 1660 | IJHS-53-2018-Issue-3 | Math | Fareast | [Book Review: The Continuation of Ancient Mathematics: Wang Xiatong’s Jigu suanjing, Algebra and...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art11.pdf) |  R C Gupta | 440 |
| 1661 | IJHS-53-2018-Issue-3 | Other | Indic | [Book Review: CV Raman’s Laboratory and Discovery of the Raman Effect](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art12.pdf) |  Kankan Bhattacharyya | 104 |
| 1662 | IJHS-53-2018-Issue-3 | Medicine | Indic | [Project Report: The State of Ayurveda in Colonial Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_3_2018__Art13.pdf) |  Srabani Sen | 126 |
| 1663 | IJHS-53-2018-Issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Contents.pdf) |  IJHS | 1505 |
| 1664 | IJHS-53-2018-Issue-4 | Other | Indic | [Editorial: Indo-European Encounter and Features of Modern Science in Pre-Colonial & Colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art01.pdf) |  AK Bag | 496 |
| 1665 | IJHS-53-2018-Issue-4 | Other | Indic | [Guest Editorial: Emergence of Modern Science in Colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art02.pdf) |  Arnab Rai Choudhuri and Deepak Kumar | 94 |
| 1666 | IJHS-53-2018-Issue-4 | Other | Other | [Science Institutions in Colonial India: Some Snippets, Some Lessons](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art03.pdf) |  Deepak Kumar | 137 |
| 1667 | IJHS-53-2018-Issue-4 | Culture | Indic | [Indo-Persian and Urdu Speaking Elites’ Discourses on the Modern European Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art04.pdf) |  Gulfishan Khan | 3427 |
| 1668 | IJHS-53-2018-Issue-4 | Other | Other | [Two Early Pillars of Modern Scientific Education in India: The Meaning and Relevance of the...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art05.pdf) |  John Lourdusamy | 124 |
| 1669 | IJHS-53-2018-Issue-4 | Other | Other | [Curzon’s Role in the Development of Technical and University Education in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art06.pdf) |  Sujata Banerjee and Sunayana Maiti | 118 |
| 1670 | IJHS-53-2018-Issue-4 | Other | Other | [Shanti Swarup Bhatnagar, Working through/against the Colonial System](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art07.pdf) |  Robert Anderson | 1316 |
| 1671 | IJHS-53-2018-Issue-4 | Other | Other | [Judging Scientific Creativity: The Case of the Early Jagadis Bose](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art08.pdf) |  Subrata Dasgupta | 151 |
| 1672 | IJHS-53-2018-Issue-4 | Other | Other | [How Costly was Raman’s Equipment for the Discovery of Raman Effect?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art09.pdf) |  Rajinder Singh | 946 |
| 1673 | IJHS-53-2018-Issue-4 | Other | Other | [K S Krishnan as Co-discoverer of Raman Effect and as Independent Scientist](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art10.pdf) |  DCV Mallik | 124 |
| 1674 | IJHS-53-2018-Issue-4 | Astronomy | Other | [From Atoms to Stars: Meghnad Saha (1893-1956)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art11.pdf) |  Atri Mukhopadhyay | 128 |
| 1675 | IJHS-53-2018-Issue-4 | Other | Other | [Going Beyond the Big Three of Calcutta Physicists: B B Ray, D M Bose and S K Mitra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art12.pdf) |  Rajinder Singh | 1586 |
| 1676 | IJHS-53-2018-Issue-4 | Other | Other | [Reflecting on Chemical Education: Nilratan Dhar and the Legacy of P C Ray](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art13.pdf) |  Madhumita Mazumdar | 129 |
| 1677 | IJHS-53-2018-Issue-4 | Other | Other | [Shaping the Chemical Industry and Saving the Cotton Industry: Role of Sir P C Ray, a Visionary](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art14.pdf) |  Syamal Chakrabarti | 2028 |
| 1678 | IJHS-53-2018-Issue-4 | Other | Other | [Organic Chemists of Pre-Independence India: With Special Focus on Natural Products](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art15.pdf) |  D Balasubramanian | 513 |
| 1679 | IJHS-53-2018-Issue-4 | Medicine | Other | [Ronald Ross to U N Brahmachari: Medical Research in Colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art16.pdf) |  John Mathew | 1298 |
| 1680 | IJHS-53-2018-Issue-4 | Other | Other | [History of X-ray Research in Colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art17.pdf) |  SC Roy | 1023 |
| 1681 | IJHS-53-2018-Issue-4 | Biology | Western | [Colonial Encounter on Indian Snakes and their Venoms: The Transmission and Transformation...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art18.pdf) |  Rahul Bhaumik | 138 |
| 1682 | IJHS-53-2018-Issue-4 | Medicine | Western | [Butto Krishna Paul & Co – An Enterprise for Localization of Foreign Medicines in Colonial Calcutta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art19.pdf) |  Malika Basu | 1385 |
| 1683 | IJHS-53-2018-Issue-4 | Medicine | Western | [Institutionalization of Leprosy Researches in Calcutta School of Tropical Medicine (CSTM) and...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art20.pdf) |  Apalak Das | 126 |
| 1684 | IJHS-53-2018-Issue-4 | Agriculture | Western | [Institutionalizing of Veterinary Science in Colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art21.pdf) |  Maidul Rahaman | 921 |
| 1685 | IJHS-53-2018-Issue-4 | Other | Indic | [Birbal Sahni and His Father Ruchi Ram: Science in Punjab Emerging from the Shadows of the Raj](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art22.pdf) |  Ashok Sahni | 950 |
| 1686 | IJHS-53-2018-Issue-4 | Agriculture | Western | [Transnational History of Imperial Council of Agricultural Research, 1929–1947](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art23.pdf) |  Vinod Kumar Singh | 130 |
| 1687 | IJHS-53-2018-Issue-4 | Other | Indic | [Environmental Science in India during First half of 20th Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art24.pdf) |  Baisakhi Bandyopadhyay | 121 |
| 1688 | IJHS-53-2018-Issue-4 | Astronomy | Western | [The Beginnings of Modern Astronomy Research in British India: Pogson and Evershed](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art25.pdf) |  Biman B Nath | 646 |
| 1689 | IJHS-53-2018-Issue-4 | Other | Western | [The Forgotten Indian Pioneers of Fingerprint Science: Fallout of Colonialism](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art26.pdf) |  G S Sodhi and Jasjeet Kaur | 1067 |
| 1690 | IJHS-53-2018-Issue-4 | Math | Indic | [Prasanta Chandra Mahalanobis and the Beginning of the Indian Statistical Institute](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art27.pdf) |  Samir Kumar Saha | 3294 |
| 1691 | IJHS-53-2018-Issue-4 | MindSciences | Indic | [Girindrasekhar Bose and the History of Psychoanalysis in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art28.pdf) |  Anup Dhar | 145 |
| 1692 | IJHS-53-2018-Issue-4 | Other | Western | [The Emergence of Engineering as a Profession in Modern India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art29.pdf) |  Aparajith Ramnath | 124 |
| 1693 | IJHS-53-2018-Issue-4 | Other | Western | [Electrification of Colonial Calcutta: A Social Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art30.pdf) |  Suvobrata Sarkar | 122 |
| 1694 | IJHS-53-2018-Issue-4 | Other | Indic | [Role of Indian Science Congress Association, 1914-1947](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art31.pdf) |  Sneha Sinha | 122 |
| 1695 | IJHS-53-2018-Issue-4 | Other | Western | [FRS Election as a Recognition for Scientists of Colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Art32.pdf) |  Arnab Rai Choudhuri | 533 |
| 1696 | IJHS-53-2018-Issue-4 | Other | Other | [Index](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018-Index.pdf) |  IJHS | 99 |
| 1697 | IJHS-53-2018-Issue-4 | Other | Other | [Cumulative Index](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018-Cumulativeindex.pdf) |  IJHS | 137 |
| 1698 | IJHS-53-2018-Issue-4 | Other | Other | [Annual Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/35-Contentsall.pdf) |  IJHS | 116 |
| 1699 | IJHS-53-2018-Issue-4 | Other | Other | [Books Received (2018) & Announcement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol53_4_2018__Books.pdf) |  IJHS | 120 |
| 1700 | IJHS-54-2019-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Contents.pdf) |  IJHS | 106 |
| 1701 | IJHS-54-2019-Issue-1 | Astronomy | Indic | [Determination of Kalalagna in the Lagnaprakarana](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art01.pdf) |  Aditya Kolachana, K Mahesh and K Ramasubramanian | 174 |
| 1702 | IJHS-54-2019-Issue-1 | Medicine | Indic | [A Painless Surgery Joseph Johnstone Performed on a Mesmerized Patient in Madras in 1847](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art02.pdf) |  Ramya Raman and Anantanarayanan Raman | 1127 |
| 1703 | IJHS-54-2019-Issue-1 | Biology | Western | [Glycolic Ferment: The Work of Victor Barral and Raphaël Lépine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art03.pdf) |  Jaime Wisniak | 153 |
| 1704 | IJHS-54-2019-Issue-1 | Medicine | Indic | [U N Brahmachari: Scientific Achievements and Nomination for the Nobel Prize and the Fellowship of...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art04.pdf) |  Rajinder Singh and Syamal Roy | 2943 |
| 1705 | IJHS-54-2019-Issue-1 | Philosophy | Other | [The Relationship between Science and Technology and Evolution in Methods of Knowledge Production](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art05.pdf) |  R B Grover | 621 |
| 1706 | IJHS-54-2019-Issue-1 | Lingiustics | Indic | [A Brief History of Linguistic Science with special reference to the Bodo, Garo and Kokborok...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art06.pdf) |  Satarupa Dattamajumdar | 192 |
| 1707 | IJHS-54-2019-Issue-1 | Math | Indic | [Historical Note: Ganeśa Daivajña on Multiplication Tables](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art07.pdf) |  S R Sarma | 156 |
| 1708 | IJHS-54-2019-Issue-1 | Other | Indic | [Historical Note: Dr. Radhikaram Dhekial Phookan: A Chemist from Assam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art08.pdf) |  RC Deka, Gaurangi Maitra, Ranjit Kumar Dev Goswami | 2214 |
| 1709 | IJHS-54-2019-Issue-1 | Astronomy | Indic | [Correspondence: On an Alternative Interpretation for the Application of Cara](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art09.pdf) |  B S Shylaja | 982 |
| 1710 | IJHS-54-2019-Issue-1 | Other | Other | [Correspondence: Early Doctorates Conferred by Indian Universities](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art10.pdf) |  K Razi Naqvi | 106 |
| 1711 | IJHS-54-2019-Issue-1 | Math | Indic | [Book Review: Asutosh Mukhopadhyay: Mathematical Genius with the Magic Wand by Satyabachi Sar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art11.pdf) |  U C De | 115 |
| 1712 | IJHS-54-2019-Issue-1 | Astronomy | Other | [Book Review: Nature’s Third Cycle: A Story of Sunspots by Arnab Rai Choudhuri](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art12.pdf) |  D C V Mallik | 107 |
| 1714 | IJHS-54-2019-Issue-1 | Other | Indic | [Environmental and Ecological Change: Gleanings from Copperplate Inscriptions of Early Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_1_2019__Art14.pdf) |  Rajat Sanyal | 1885 |
| 1715 | IJHS-54-2019-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Contents.pdf) |  IJHS | 108 |
| 1716 | IJHS-54-2019-Issue-2 | Lingiustics | Indic | [Structure of Indus Script](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art01.pdf) |  Nisha Yadav | 795 |
| 1717 | IJHS-54-2019-Issue-2 | Metallurgy | Indic | [Taxila Mirrors Preserved in India and Technology Transfer](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art02.pdf) |  Pranab K Chattopadhayay and Satyakam Sen | 2029 |
| 1718 | IJHS-54-2019-Issue-2 | Medicine | Indic | [An Investigation into Ancient Greco-Indian Medical Exchanges: Sostratus vs Susruta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art03.pdf) |  Vijaya Jayant Deshpande | 228 |
| 1719 | IJHS-54-2019-Issue-2 | Biology | Western | [Gustave-Clement Fleury’s Work on Plant Growth and Vegetable Principles in the Nineteenth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art04.pdf) |  Jaime Wisniak | 208 |
| 1720 | IJHS-54-2019-Issue-2 | Biology | Other | [Jagdish Chandra Bose and Plant Neurobiology: Part I](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art05.pdf) |  Prakash N Tandon | 906 |
| 1721 | IJHS-54-2019-Issue-2 | Other | Other | [Forensic Science and Scientific Measures of Criminal Identification in British India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art06.pdf) |  Saumitra Basu | 161 |
| 1722 | IJHS-54-2019-Issue-2 | Math | Indic | [Historical Note: The Trend of Research on Number Theory in Bengal and Bihar during the 20th Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art07.pdf) |  Purabi Mukherji | 139 |
| 1723 | IJHS-54-2019-Issue-2 | Other | Indic | [Historical Note: Metric Estimate of the Volume Measure used in the Madras Region at the Dawn of...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art08.pdf) |  Venkatesh Parthasarathy | 566 |
| 1724 | IJHS-54-2019-Issue-2 | Other | Other | [Historical Note: Scientific Activities of Fr. Alphonso De Penaranda: A Jesuit Priest in the late...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art09.pdf) |  Subhankar Ghosh | 112 |
| 1725 | IJHS-54-2019-Issue-2 | Other | Other | [Correspondence: On an Alternative Interpretation for the Application of Cara: A Response](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art10.pdf) |  Aditya Kolachana et al. | 115 |
| 1726 | IJHS-54-2019-Issue-2 | Other | Indic | [Book Review: Narada Silpasastra: Sanskrit Text on Architectural Civil Engineering](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art11.pdf) |  Sashikala Ananth | 173 |
| 1727 | IJHS-54-2019-Issue-2 | Other | Other | [Book Review: Story of a Steel Bridge: The Howrah Bridge –A Testimony of Indo British Co-operation...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art12.pdf) |  C V R Murty | 117 |
| 1728 | IJHS-54-2019-Issue-2 | Biology | Indic | [Project Report: Plant Biology of Yajurveda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art13.pdf) |  Raghava S Boddupalli | 2961 |
| 1729 | IJHS-54-2019-Issue-2 | Astronomy | Indic | [Project Report: Suryaprakasa of Suryadasa — Critical Edition, Eng. Tr. and Explanatory Notes for...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_2_2019__Art14.pdf) |  Sita Sundar Ram | 160 |
| 1730 | IJHS-54-2019-Issue-3 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Contents.pdf) |  IJHS | 1498 |
| 1731 | IJHS-54-2019-Issue-3 | Astronomy | Indic | [The Untapped Wealth of Manuscripts on Indian Astronomy and Mathematics](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art01.pdf) |  M. D. Srinivas | 206 |
| 1732 | IJHS-54-2019-Issue-3 | Math | Indic | [On the Persian Translation of Bhāskara’s Līlāvatī by Abu’l Faiẓ Faiẓī at the Court of Akbar](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art02.pdf) |  Sreeramula Rajeswara Sarma, Maryam Zamani | 5741 |
| 1733 | IJHS-54-2019-Issue-3 | Astronomy | Indic | [Sidereal Ecliptic Coordinate System of Sūryasiddhānta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art03.pdf) |  Raja Ram Mohan Roy | 331 |
| 1734 | IJHS-54-2019-Issue-3 | Astronomy | Indic | [Precise Determination of the Ascendant in the Lagnaprakaraṇa - I](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art04.pdf) |  Aditya Kolachana, K. Mahesh, K. Ramasubramanian | 166 |
| 1735 | IJHS-54-2019-Issue-3 | Medicine | Indic | [Epigastric-heteropagus Twins Recorded in Madras Presidency in 1789](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art05.pdf) |  Ramya Raman, Anantanarayanan Raman | 280 |
| 1736 | IJHS-54-2019-Issue-3 | Other | Indic | [Sukumar Chandra Sirkar and the Department of Optics at the IACS](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art06.pdf) |  Rajinder Singh | 600 |
| 1737 | IJHS-54-2019-Issue-3 | Agriculture | Indic | [Agricultural Sciences in India and Struggle against Famine, Hunger and Malnutrition](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art07.pdf) |  Rajendra Prasad | 137 |
| 1738 | IJHS-54-2019-Issue-3 | Other | Indic | [Historical Note: Characterization of Pigments and Binders in Mural Painting Fragments from...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art08.pdf) |  M. R. Singh, B. R. Mani | 1133 |
| 1739 | IJHS-54-2019-Issue-3 | Culture | Indic | [Historical Note: The Sacred Road: A Contribution to the History of Ramesvaram Pilgrimages](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art10.pdf) |  Jean Deloche | 24713 |
| 1740 | IJHS-54-2019-Issue-3 | Math | Indic | [Historical Note: Hardinge Professorship of Higher Mathematics at Calcutta University](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art11.pdf) |  Sabitri Ray Chaudhuri | 107 |
| 1741 | IJHS-54-2019-Issue-3 | Metallurgy | Indic | [Book Review: Early Indian Metallurgy: The Production of Lead, Silver and Zinc through Three...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art12.pdf) |  Sharada Srinivasan | 94 |
| 1742 | IJHS-54-2019-Issue-3 | Medicine | Indic | [Project Report: Practice of Folk Medicine by Rajbanshis of Sub-Himalayan Bengal: A Study in...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art13.pdf) |  Rup Kumar Barman | 1456 |
| 1743 | IJHS-54-2019-Issue-3 | Other | Indic | [Obituary: B. V. Subbarayappa: A Writer, Administrator and Veteran Historian of Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_3_2019__Art14.pdf) |  K. Ramasubramanian | 397 |
| 1744 | IJHS-54-2019-Issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Contents_Vol54_4.pdf) |  IJHS | 38 |
| 1745 | IJHS-54-2019-Issue-4 | Astronomy | Other | [Guáman Poma’s Yupana and Inca Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_4_2019__Art01.pdf) |  Subhash Kak | 3722 |
| 1746 | IJHS-54-2019-Issue-4 | Astronomy | Indic | [On the Computation of Daily-motion in Ancient Indian Astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_4_2019__Art02.pdf) |  Anil Narayanan | 2286 |
| 1747 | IJHS-54-2019-Issue-4 | Medicine | Indic | [Kuṣṭha, Saussurea costus (Saussurea lappa): Its Unexplored History from the Atharvaveda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_4_2019__Art03.pdf) |  N. C. Shah | 3581 |
| 1748 | IJHS-54-2019-Issue-4 | Medicine | Indic | [Cholera, Commerce and Quarantine: Interrogating the Science of Empire in Nineteenth Century India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_4_2019__Art04.pdf) |  Arabinda Samanta | 95 |
| 1749 | IJHS-54-2019-Issue-4 | Medicine | Indic | [Dr. Koman’s Report and Responses of Native Physicians: A Discourse on Indigenous Systems of Medicine](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_4_2019__Art05.pdf) |  Kanagarathinam D. V. | 142 |
| 1750 | IJHS-54-2019-Issue-4 | Culture | Western | [Translating Nature: Changes in the Perception and Utilization of Science in the Halle Mission in...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_4_2019__Art06.pdf) |  Niklas Thode Jensen | 3869 |
| 1751 | IJHS-54-2019-Issue-4 | Other | Indic | [Historical Note: C. V. Raman and Kolkata Media](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_4_2019__Art08.pdf) |  Rajinder Singh | 5540 |
| 1752 | IJHS-54-2019-Issue-4 | Other | Indic | [Project Report: A Study on the Salt Production of Ancient Assam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol54_4_2019__Art09.pdf) |  Raktim Ranjan Saikia, Nurul Amin | 406 |
| 1753 | IJHS-55-2020-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_1_2020__contents.pdf) |  IJHS | 47 |
| 1754 | IJHS-55-2020-Issue-1 | Astronomy | Indic | [Precise Determination of the Ascendant in Lagnaprakarana – II](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_1_2020__Art01.pdf) |  Aditya Kolachana, K. Mahesh, K. Ramasubramanian | 226 |
| 1755 | IJHS-55-2020-Issue-1 | Other | Indic | [Marble-like chûnnam in the 18th- and 19th-century Madras Presidency](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_1_2020__Art02.pdf) |  Anantanarayanan Raman | 1101 |
| 1756 | IJHS-55-2020-Issue-1 | Astronomy | Indic | [Retrograde motion as described in Brahmatulyaudāharaṇam of Viśvanātha](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_1_2020__Art03.pdf) |  B. S. Shylaja, B. S. Shubha | 689 |
| 1757 | IJHS-55-2020-Issue-1 | Other | Indic | [An Alternative History of Technology in South Asia: The Unknown Viśvakarmās of Colonial Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_1_2020__Art04.pdf) |  Suvobrata Sarkar | 2267 |
| 1758 | IJHS-55-2020-Issue-1 | Medicine | Indic | [Political Ecology of Cholera: Orissa and Colonial Sanitary Discourse](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_1_2020__Art05.pdf) |  Chandi Prasad Nanda | 141 |
| 1759 | IJHS-55-2020-Issue-1 | Other | Western | [Historical Note: Sir C. V. Raman Nobel Ceremony Coverage by the European Press](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_1_2020__Art06.pdf) |  Rajinder Singh | 6056 |
| 1760 | IJHS-55-2020-Issue-1 | Medicine | Indic | [Project Report: Hundred Years of Forensic Science in India (1849–1947): A Historical Perspective](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_1_2020__Art07.pdf) |  Saumitra Basu | 5672 |
| 1761 | IJHS-55-2020-Issue-1 | Other | Fareast | [Obituary to Dr Yukio Ôhashi](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_1_2020__Art08.pdf) |  Michio Yano | 171 |
| 1762 | IJHS-55-2020-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_2_2020__Contents.pdf) |  IJHS | 47 |
| 1763 | IJHS-55-2020-Issue-2 | Astronomy | Indic | [Precise Determination of the Ascendant in the Lagnaprakaraṇa–III](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_2_2020__Art01.pdf) |  Aditya Kolachana, K. Mahesh, K. Ramasubramanian | 164 |
| 1764 | IJHS-55-2020-Issue-2 | Medicine | Indic | [G.M.M.C. Diploma of the Madras Medical College, 1847–1863](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_2_2020__Art02.pdf) |  Anantanarayanan Raman | 14238 |
| 1765 | IJHS-55-2020-Issue-2 | Medicine | Indic | [The Silent Killer: Tracing the Trajectory of Tubercular Deaths in Colonial Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_2_2020__Art03.pdf) |  Suvankar Dey | 152 |
| 1766 | IJHS-55-2020-Issue-2 | Math | Indic | [Fractal Geometry in Water Conservation Structures: Step Wells and Tanks in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_2_2020__Art04.pdf) |  Samirsinh P. Parmara, Debi Prasad Mishra | 8403 |
| 1767 | IJHS-55-2020-Issue-2 | Other | Western | [The Wartime Correspondence (1939–1945) between South African Geologist A. L. du Toit and Indian...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_2_2020__Art05.pdf) |  Sharad Master | 741 |
| 1768 | IJHS-55-2020-Issue-2 | Metallurgy | Indic | [Historical Note: Traditional Use of Legume Seeds for Weighing Gold in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_2_2020__Art06.pdf) |  Raghava S. Boddupalli | 2930 |
| 1769 | IJHS-55-2020-Issue-2 | Astronomy | Indic | [Project Report: Grahagaṇitādhyāya of Bhāskarācārya’s Siddhāntaśiromaṇi](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_2_2020__Art07.pdf) |  M S Sriram | 421 |
| 1770 | IJHS-55-2020-Issue-2 | Culture | Indic | [Seminar Report: Religious Art and Culture in 2019: Thousand Faces of the Buddha](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_2_2020__Art08.pdf) |  R. K. K. Rajarajana, Li-ling | 11046 |
| 1771 | IJHS-55-2020-Issue-3 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_3_2020__Contents.pdf) |  IJHS | 40 |
| 1772 | IJHS-55-2020-Issue-3 | Astronomy | Indic | [Akṣara the Basic Unit of Time Measure in Ancient India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_3_2020__Art01.pdf) |  R. N. Iyengar, H. S. Sudarshan, Anand Viswanathan | 1284 |
| 1773 | IJHS-55-2020-Issue-3 | Metallurgy | Indic | [History of Mining in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_3_2020__Art02.pdf) |  A. K. Soni | 2634 |
| 1774 | IJHS-55-2020-Issue-3 | Culture | Indic | [Hindi Protagonists of Science and Swadeshi in the First Half of the Twentieth Century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_3_2020__Art03.pdf) |  Dhrub Kumar Singh | 122 |
| 1775 | IJHS-55-2020-Issue-3 | Biology | Western | [Frédéric Sacc (1819–1890) Contribution to Plant and Animal Physiology](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_3_2020__Art04.pdf) |  Jaime Wisniak | 115 |
| 1776 | IJHS-55-2020-Issue-3 | Agriculture | Indic | [The History and Functioning of the Forest Department in Madras Presidency during 1856–1882](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_3_2020__Art05.pdf) |  S Kamini | 97 |
| 1777 | IJHS-55-2020-Issue-3 | Medicine | Indic | [Historical Note: Kadambini Ganguly: A Forgotten Legend](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_3_2020__Art06.pdf) |  Gargi Das | 600 |
| 1778 | IJHS-55-2020-Issue-3 | Other | Indic | [Historical Note: Nikhil Rajan Sen – The Formative Years](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_3_2020__Art07.pdf) |  Rajinder Singh | 3406 |
| 1779 | IJHS-55-2020-Issue-3 | Medicine | Arabic | [Project Report: Meta-analytical Study of Cardiac Drugs described by Ibn Sina (980–1037) in the...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_3_2020__Art08.pdf) |  Syed Ziaur Rahman, S. H. Zahid Jamal | 152 |
| 1780 | IJHS-55-2020-Issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4Contents.pdf) |  IJHS | 29 |
| 1781 | IJHS-55-2020-Issue-4 | Medicine | Indic | [The Epigraphic Evidences on Ayurveda and Indian Medical Heritage](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__Art01.pdf) |  Goli Penchala Prasada, P. Murali Manohar... | 886 |
| 1782 | IJHS-55-2020-Issue-4 | Other | Other | [Historical Perspectives of Geological Concepts from Biblical to Modern Times](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__Art02.pdf) |  Sudipta Lahiri, B. J. Sengupta | 141 |
| 1783 | IJHS-55-2020-Issue-4 | Other | Other | [Letters between Geologists A. L. du Toit and M. S. Krishnan (1946–1947) on the Palaeoposition of...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__Art03.pdf) |  Sharad Master | 1118 |
| 1784 | IJHS-55-2020-Issue-4 | Metallurgy | Indic | [Microscopic Imaging of Entrapped Slag in Ancient IronArtifact (300 BCE) from the Middle Ganga Plains](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__Art04.pdf) |  Vandana Singh, Manager Rajdeo Singh | 2925 |
| 1785 | IJHS-55-2020-Issue-4 | Culture | Indic | [Woods used in 10th Century Trans Himalayan Tabo Buddhist Monastery of India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__Art05.pdf) |  Sangeeta Guptaa, Deepa Bisht, Prachi Gupta | 686 |
| 1786 | IJHS-55-2020-Issue-4 | Culture | Indic | [Indian Tradition of Palm Print Authentication and the Globetrotting Journey of Kohinoor Diamond](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__Art10.pdf) |  Jasjeet Kaur, G. S. Sodhi | 1002 |
| 1787 | IJHS-55-2020-Issue-4 | Agriculture | Indic | [Historical Note: Plant Domestication in Indus Valley Civilisation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__Art06.pdf) |  R. B. Mohanty, T. Panda | 88 |
| 1788 | IJHS-55-2020-Issue-4 | Math | Indic | [Historical Note: Professor Manindra Chandra Chaki (1913 – 2007): A Legendary Indian Geometrician](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__Art07.pdf) |  Sanatan Koley | 252 |
| 1789 | IJHS-55-2020-Issue-4 | Astronomy | Indic | [Correspondence: Retrograde motion: The Derivation of Formula](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__Art08.pdf) |  Tejas Kumar, Shubha B S, Shylaja B S | 173 |
| 1790 | IJHS-55-2020-Issue-4 | Culture | Indic | [Project Report: The Science and Technology of Manuscript Writing-aid and Folk Paintings in Medieval](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__Art09.pdf) |  Robin Kumar Dutta, Barsha R. Goswami, Niranjan Lig | 10214 |
| 1791 | IJHS-55-2020-Issue-4 | Other | Other | [Cumulative Index: Vol 55.1-4](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__CIndex.pdf) |  IJHS | 35 |
| 1792 | IJHS-55-2020-Issue-4 | Other | Other | [Annual Contents: Vol. 55.1-4 (2020)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Vol55_4_2020__AnnualContents.pdf) |  IJHS | 41 |
| 1793 | IJHS-56-2021-issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Content.pdf) |  IJHS | 1492 |
| 1794 | IJHS-56-2021-issue-1 | Astronomy | Indic | [Precise Determination of the Ascendant in the Lagnaprakaraṇa-IV](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/1-13.pdf) |  Aditya Kolachana, K. Mahesh and K. Ramasubramanian | 8670 |
| 1795 | IJHS-56-2021-issue-1 | Astronomy | Indic | [Could the “Case for Revising the Date of Vedāṅga Jyotiṣa” be Flawed?](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/14-19.pdf) |  Prabhakar Gondhalekar | 3539 |
| 1796 | IJHS-56-2021-issue-1 | MindSciences | Western | [Genius and Premature Birth: Little Evidence that Claims About Historically Eminent Scientists are...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/20-27.pdf) |  E Dutton, G Madison and Dimitri van der Linden | 3551 |
| 1797 | IJHS-56-2021-issue-1 | Philosophy | Other | [Whiggism, Creativity and the Historiography of Technoscience](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/28-36.pdf) |  Subrata Dasgupta | 3476 |
| 1798 | IJHS-56-2021-issue-1 | Other | Other | [Putting Nicobar Islands on the Map: Intersections of Colonial Knowledge, Trade and...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/37-48.pdf) |  Shaina Sehgal | 3552 |
| 1799 | IJHS-56-2021-issue-1 | Culture | Indic | [An Assessment of Environment Friendly Methods of Khadi Manufacturing](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/49-59.pdf) |  Shruti Gupta, Deepali Rastogi and Ritu Mathur | 14374 |
| 1800 | IJHS-56-2021-issue-1 | Other | Other | [Historical Notes: A Brief History of the Fertilizer Nitrogen](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/60-64.pdf) |  Rajendra Prasad and Y. S. Shivay | 3509 |
| 1801 | IJHS-56-2021-issue-1 | Medicine | Indic | [Historical Notes: A papier-maché Human Anatomical Model used in the Madras Medical Establishment...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/65-69.pdf) |  Ramya Raman and Anantanarayanan Raman | 7972 |
| 1802 | IJHS-56-2021-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/0__Content.pdf) |  IJHS | 1505 |
| 1803 | IJHS-56-2021-Issue-2 | Math | Indic | [Elegant dissection proofs for algebraic identities in Nīlakantha's Āryabhatīyabhāsya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/1__Mahesh.pdf) |  K. Mahesh, D. G. Sooryanarayan, K. Ramasubramanian | 5468 |
| 1804 | IJHS-56-2021-Issue-2 | Other | Indic | [Computing the number of perfumes that constitute the gandhārṇava and kacchapuṭa of Varāhamihira](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/2__Chauthaiwale.pdf) |  S Chauthaiwale · Jayant Deopujari · A Chauthaiwale | 3671 |
| 1805 | IJHS-56-2021-Issue-2 | Culture | Indic | [Parallels of Gundestrup cauldron interior art with Indic motifs](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/3__Thomas.pdf) |  Thomas E. Petray Jr | 2335 |
| 1806 | IJHS-56-2021-Issue-2 | Metallurgy | Indic | [Archaeo-metallurgical study on two early historic punch marked coins](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/4__Sasisekaran.pdf) |  B. Sasisekaran and B. Raghunatha Rao | 7365 |
| 1807 | IJHS-56-2021-Issue-2 | MindSciences | Indic | [Colonization of personality psychology in India: historical roots and contemporary status](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/5__Jitendra.pdf) |  Jitendra K. Singh | 3749 |
| 1808 | IJHS-56-2021-Issue-2 | Other | Indic | [Unsuccessful FRS nominations from colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/6__Arnab Rai Choudhuri.pdf) |  Arnab Rai Choudhuri | 7500 |
| 1809 | IJHS-56-2021-Issue-2 | Math | Indic | [Book Review- Karanapaddhati of Putumana Somayājī by Venketeswara Pai...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/7__Satyanad.pdf) |  Satyanad Kichenassamy | 3765 |
| 1810 | IJHS-56-2021-Issue-2 | Biology | Indic | [Project Report: Institutionalization of veterinary science in colonial India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/8__Maidul.pdf) |  Maidul Rahaman | 3463 |
| 1811 | IJHS-56-2021-Issue-3&4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Contents.pdf) |  IJHS | 1498 |
| 1812 | IJHS-56-2021-Issue-3&4 | Astronomy | Indic | [Transit of sun through the seasonal naksatra cycle in the Vrddha-Gārgīya Jyotisa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/1.pdf) |  R. N. Iyengar and Sunder Chakravarty | 5789 |
| 1813 | IJHS-56-2021-Issue-3&4 | Math | Indic | [Combinatorial techniques in Munīśvara’s Nisṛṣṭārthadūtī](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/2.pdf) |  K. Mahesh· Aditya Kolachana· K. Ramasubramanian | 3566 |
| 1814 | IJHS-56-2021-Issue-3&4 | Metallurgy | Indic | [The production of crucible steel by the ‘Mysore process’ at Ghattihosahalli, Chitradurga District...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/3.pdf) |  K. Nagesh Rao,P. T. Craddock and T. R. Anantharamu | 11445 |
| 1815 | IJHS-56-2021-Issue-3&4 | Metallurgy | Indic | [Indigenous knowledge on ancient Indian alchemical alloying](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/4.pdf) |  N. Anantha Krishna et al. | 8450 |
| 1816 | IJHS-56-2021-Issue-3&4 | Biology | Other | [Formation-to-fall: natural history and the journey of a lesser-known genus of orchids, Monomeria](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/5.pdf) |  Uma Shankar | 26324 |
| 1817 | IJHS-56-2021-Issue-3&4 | Metallurgy | Other | [Historical Note: Microstructural analysis and characterization of lime mortar of seventeenth...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/6.pdf) |  M. R. Singh and Rajendra Yadav | 8015 |
| 1818 | IJHS-56-2021-Issue-3&4 | Other | Other | [Correspondence: A remark on the editorial “Indo-European encounter and features of modern science...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/7.pdf) |  B. A. Dasannacharya | 3247 |
| 1819 | IJHS-56-2021-Issue-3&4 | Agriculture | Indic | [Project Report: Hati Puthi: the medieval Assamese manuscripts on elephant training and treatment](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/8.pdf) |  Rasna Rajkhowa | 4367 |
| 1820 | IJHS-57-2022-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Contents.pdf) |  IJHS | 1498 |
| 1821 | IJHS-57-2022-Issue-1 | Astronomy | Indic | [Astronomical clues in unicorn iconography of the Harappan civilization](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/1_PM Dolas.pdf) |  Prakash M. Dolas | 6455 |
| 1822 | IJHS-57-2022-Issue-1 | Biology | Indic | [The identification, etymology and uses of Bombax ceiba (semal) sold by street vendors as Semarkanda](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/2_NC Shah.pdf) |  N. C. Shah | 4879 |
| 1823 | IJHS-57-2022-Issue-1 | Philosophy | Western | [On some analogies of modern science with Plato’s science in Timaeus and on Plato’s influence...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/3_F Di Giacomo.pdf) |  Francesco Di Giacomo | 3578 |
| 1824 | IJHS-57-2022-Issue-1 | Philosophy | Indic | [Jagadis Bose’s panvitalism as intellectual history](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/4_S Dasgupta.pdf) |  Subrata Dasgupta | 3017 |
| 1825 | IJHS-57-2022-Issue-1 | Other | Other | [Satellite Instructional Television Experiment (SITE): a case study in the triumphs and...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/5_P Sharma.pdf) |  Pranav Sharma | 7085 |
| 1826 | IJHS-57-2022-Issue-1 | Other | Indic | [Contribution of Sir P.C. Rây in preparing chemical bombs and explosives for Indian freedom fighters](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/6_R Ghosh.pdf) |  Rajarshi Ghosh | 3274 |
| 1827 | IJHS-57-2022-Issue-1 | Culture | Other | [Colonial masculinity and indigenous sikārī: a history of sport-hunting in Kashmir during Dogra rule](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/7_MA Wani.pdf) |  Mohd Ashraf Wani and Rouf Ahmad Bhat | 2960 |
| 1828 | IJHS-57-2022-Issue-1 | Medicine | Indic | [Historical Note- Jvaranirnaya: a rare monograph on diagnosis of fevers from the pre-colonial era](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/8_S Kulangara.pdf) |  Shyamasundaran Kulangara & Sushma N Salethoor | 3028 |
| 1829 | IJHS-57-2022-Issue-1 | Other | Indic | [Book Review: Essays in History of Sciences in India: Agriculture, Medicine, Alchemical and...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/9_B Goswami.pdf) |  Bijoya Goswami | 2936 |
| 1830 | IJHS-57-2022-Issue-2 | Other | Other | [Content](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_2_Content.pdf) |  IJHS | 1477 |
| 1831 | IJHS-57-2022-Issue-2 | Medicine | Indic | [Skin disorders (twak rogas) revealed in the Atharvaveda:Descriptions of medicinal plants and utiliza](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_2_1.pdf) |  Raghava S Boddupalli | 3702 |
| 1832 | IJHS-57-2022-Issue-2 | Music | Indic | [Therapeutic elements of music in ancient India: a brief review in Bṛhattrayī](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_2_2.pdf) |  Abirlal Gangopadhyay  | 528 |
| 1833 | IJHS-57-2022-Issue-2 | Medicine | Indic | [Insight into history of Areca nut and oral submucous fibrosis: a narrative review](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_2_3.pdf) |  Rashmi Venkatesh | 418 |
| 1834 | IJHS-57-2022-Issue-2 | Medicine | Indic | [Medical profession and unemployment in colonial Madras (1835–1930)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_2_4.pdf) |  Gautam Chandra | 466 |
| 1835 | IJHS-57-2022-Issue-2 | Other | Indic | [Modernization of leather industry and chequered history of technical education in colonial Kanpur](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_2_5.pdf) |  Prakrati Bhargava | 454 |
| 1836 | IJHS-57-2022-Issue-2 | Culture | Indic | [Fishing, migration, and settlement: a study of Kaibartas in Majuli Island, Assam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_2_6.pdf) |  Debasish Dey | 2196 |
| 1837 | IJHS-57-2022-Issue-2 | Other | Arabic | [Translation of Newton’s Principia into Arabic under the aegis of the East India Company: a rumour tu](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_2_7.pdf) |  K. Razi Naqvi | 1768 |
| 1838 | IJHS-57-2022-Issue-2 | Other | Indic | [Dr. Chunilal Bose: a forgotten scientist and a science communicator](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_2_8.pdf) |  Indranil Sanyal | 627 |
| 1839 | IJHS-57-2022-Issue-2 | Other | Indic | [Contribution of Satyendra Nath Bose in chemical sciences and related disciplines](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_2_9.pdf) |  Rajarshi Ghosh | 348 |
| 1840 | IJHS-57-2022-Issue-2 | Other | Indic | [Let There Be Light: Engineering, Entrepreneurship and Electricity in Colonial Bengal 1880–1945 by Su](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_2_10.pdf) |  Kamlesh Mohan | 300 |
| 1841 | IJHS-57-2022-Issue-3 | Other | Other | [Content](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_3_Content.pdf) |  Content | 1586 |
| 1842 | IJHS-57-2022-Issue-3 | Culture | Indic | [Indus zoomorphism and its avatars](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_3_1.pdf) |  M.V. Bhaskar | 3887 |
| 1843 | IJHS-57-2022-Issue-3 | Astronomy | Western | [Reassessing European impressions of Indian astronomy (1750–1850)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_3_2.pdf) |  Ankur Kakkar | 439 |
| 1844 | IJHS-57-2022-Issue-3 | Other | Western | [The origins of scientific disciplines: a counter-history of western science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_3_3.pdf) |  Roberto G. Barbosa | 454 |
| 1845 | IJHS-57-2022-Issue-3 | Agriculture | Indic | [Cattle plague and the introduction of veterinary education in colonial Bengal](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_3_4.pdf) |  Jhinuk Sarkar | 376 |
| 1846 | IJHS-57-2022-Issue-3 | Metallurgy | Indic | [Technological modifi cations in the tanning and leather industry from pre-British to colonial Punjab](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_3_5.pdf) |  Mandakini Thakur | 395 |
| 1847 | IJHS-57-2022-Issue-3 | Other | Indic | [Meghnad Saha, F.R.S.: the multiple facets of a teacher](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_3_6.pdf) |  Samir Kumar Saha | 355 |
| 1848 | IJHS-57-2022-Issue-3 | Astronomy | Indic | [History of ARIES: a premier research institute in the area of observational sciences](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_3_7.pdf) |  Ram Sagar | 2635 |
| 1849 | IJHS-57-2022-Issue-3 | Medicine | Indic | [Ethno-medico-botanical studies of Eruliga and Lambani tribes of Kanakapura taluk of Ramanagara distr](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_3_8.pdf) |  M. P. Shivamanjunatha | 368 |
| 1850 | IJHS-57-2022-Issue-3 | Culture | Indic | [Indus zoomorphism and its avatars- supplement](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/S1-IndusZoomorphicIconCatalogue.pdf) |  M. V. Bhaskar | 1065 |
| 1851 | IJHS-57-2022-Issue-4 | Other | Other | [Content](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_4_Content.pdf) |  Content | 1469 |
| 1852 | IJHS-57-2022-Issue-4 | Astronomy | Indic | [Representation of the midnight sun in Greek and Indian astronomical texts](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_4_1.pdf) |  Vinay Iyer | 914 |
| 1853 | IJHS-57-2022-Issue-4 | Medicine | Indic | [Documenting Flora Indica: Dysentery, William Roxburgh and medical botany](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_4_2.pdf) |  Pranjali | 399 |
| 1854 | IJHS-57-2022-Issue-4 | Other | Indic | [Physics and physicists at Banaras Hindu University: circa 1916–1960](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_4_3.pdf) |  Ritesh Gupta | 1221 |
| 1855 | IJHS-57-2022-Issue-4 | Medicine | Indic | [Dr. Gopaul Chunder Roy (1844–1887): An extraordinary life dedicated to the cause of medical science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_4_4.pdf) |  Indranil Sanyal | 1962 |
| 1856 | IJHS-57-2022-Issue-4 | Culture | Indic | [A review on rock paintings of India: Technique, pigment and conservation](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_4_5.pdf) |  Anjali Sharma | 1106 |
| 1857 | IJHS-57-2022-Issue-4 | Other | Indic | [Journey of natural pigments from ancient antiquity to present: Insights on sustainable development](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_4_6.pdf) |  Shrabana Sarkar | 1243 |
| 1858 | IJHS-57-2022-Issue-4 | Other | Indic | [Perspective and retrospective of the Indian Social Science Academy, Allahabad, India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_4_7.pdf) |  G. Parthasarathy | 329 |
| 1859 | IJHS-57-2022-Issue-4 | Astronomy | Indic | [Gaṇitagannaḍi: An astronomical text of 1604 CE in Kannada by Śankaranārāyaṇa Joisaru of Śṛngeri](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_4_8.pdf) |  A. Sripada Bhat | 333 |
| 1860 | IJHS-57-2022-Issue-4 | Medicine | Indic | [The status of tribal medical system and practices in the Jungle Mahals, Eastern India, 1947–2000](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_4_9.pdf) |  Nirmal Kumar Mahato | 377 |
| 1861 | IJHS-57-2022-Issue-4 | Other | Other | [Lalit K. Gurjar M.Sc.](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/57_4_10.pdf) |  Paul T. Craddock | 659 |
| 1862 | IJHS-58-2023-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58_1_Content.pdf) |  IJHS | 1511 |
| 1863 | IJHS-58-2023-Issue-1 | Math | Indic | [Calculation for ‘chain‑reduction’ in the Triśatībhāṣya](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58_1_1.pdf) |  Taro Tokutake | 1401 |
| 1864 | IJHS-58-2023-Issue-1 | Math | Indic | [Object‑numerals as listed in Nijaguṇa Śivayogī ’s Viveka‑Cintāmaṇi](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58_1_2.pdf) |  Dipak Jadhav | 467 |
| 1865 | IJHS-58-2023-Issue-1 | Other | Western | [An intellectual history of P.C. Ray’s papers on the nitrites of mercury](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58_1_3.pdf) |  Subrata Dasgupta | 454 |
| 1866 | IJHS-58-2023-Issue-1 | Medicine | Indic | [Use of animals in the health management of elephants in medieval period of Assam, India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58_1_4.pdf) |  Rasna Rajkhowa, Bipul Ch. Saikia | 1072 |
| 1867 | IJHS-58-2023-Issue-1 | Astronomy | Indic | [History of an observatory on the Agasthiyar hill top](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58_1_5.pdf) |  R. Jayakrishnan | 969 |
| 1868 | IJHS-58-2023-Issue-1 | Medicine | Indic | [Indigenous poison healing traditions in Kerala](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58_1_6.pdf) |  Y. Srinivasa Rao, Sindhu Thomas | 418 |
| 1869 | IJHS-58-2023-Issue-1 | Culture | Indic | [Food, water and intoxicants in the battlefield practices of Rajasthan](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58_1_7.pdf) |  Aalok Pandya | 836 |
| 1870 | IJHS-58-2023-Issue-1 | Other | Western | [Historical Note: Hundred years of geophysics (1834–1933)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58_1_8.pdf) |  Indrajit G. Roy | 470 |
| 1871 | IJHS-58-2023-Issue-1 | Agriculture | Other | [Historical Note: From forest to plantation: a brief history of the rubber tree](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58_1_9.pdf) |  T. S. Suryanarayanan,  João Lúcio Azevedo | 425 |
| 1872 | IJHS-58-2023-Issue-1 | Philosophy | Other | [Book Review: Science and religion in India...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58_1_10.pdf) |  Robert S. Anderson | 312 |
| 1873 | IJHS-58-2023-Issue-1 | Agriculture | Indic | [Project Report: Science in the forest management in colonial Assam (1826–1947)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/58-1_11.pdf) |  Geetashree Singh | 347 |
| 1874 | IJHS-58-2023-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_2_Contents.pdf) |  IJHS | 1595 |
| 1875 | IJHS-58-2023-Issue-2 | Astronomy | Indic | [Planetary nodes and apses in the Sūrya-Siddhānta](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_2_1.pdf) |  Anil Narayanan and Nilesh Oak | 3946 |
| 1876 | IJHS-58-2023-Issue-2 | Math | Indic | [Recursion and iteration in combinatorics of Chandaśśāstra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_2_2.pdf) |  Amba Kulkarni | 3499 |
| 1877 | IJHS-58-2023-Issue-2 | Other | Other | [A brief study on history and evolution of time](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_2_3.pdf) |  US Ganesamoorthy, CG Moorthy | 2965 |
| 1878 | IJHS-58-2023-Issue-2 | Medicine | Other | [Historical profi le of Nardostachys jatamansi: an ancient incense & aromatic medicinal herb from...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS58_2_4.pdf) |  N. C. Shah | 4766 |
| 1879 | IJHS-58-2023-Issue-2 | Medicine | Other | [Revisiting the traditional medicine of the tribals in the Jungle Mahals, 1947–2000](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_2_5.pdf) |  Nirmal Kumar Mahato | 7121 |
| 1880 | IJHS-58-2023-Issue-2 | Agriculture | Other | [Institutionalization of agricultural education in the nineteenth century colonial India: its...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_2_6.pdf) |  Prakrati Bhargava | 3033 |
| 1881 | IJHS-58-2023-Issue-2 | Other | Other | [Technologies of transportation: road, bridge and boat construction in colonial Punjab](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS58_2_7.pdf) |  Mandakini Thakur | 2972 |
| 1882 | IJHS-58-2023-Issue-2 | Other | Other | [Project Report: The history of geographical surveys in India during the British period](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_2_8.pdf) |  C. S. Meenakshi | 2941 |
| 1883 | IJHS-58-2023-Issue-3 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Contents_58-3.pdf) |  IJHS | 1475 |
| 1884 | IJHS-58-2023-Issue-3 | Math | Indic | [Use of the concept of derivative in the computation of vyatīpāta in two Kerala texts](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_3_1.pdf) |  Venketeswara Pai R., M. S. Sriram | 4733 |
| 1885 | IJHS-58-2023-Issue-3 | Math | Indic | [Geometry of prāṇakalāntara in the Lagnaprakaraṇa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_3_2.pdf) |  Nagakiran Yelluru, Aditya Kolachana | 3329 |
| 1886 | IJHS-58-2023-Issue-3 | Astronomy | Indic | [Mahādevī-sāriṇī : A unique table providing true longitudes of planets](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_3_3.pdf) |  B. S. Shubha, B. S. Shylaja | 5156 |
| 1887 | IJHS-58-2023-Issue-3 | Other | Other | [Colonialism, nationalism and reconstruction of history of science: the case of Goa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_3_4.pdf) |  Nagendra Rao | 2998 |
| 1888 | IJHS-58-2023-Issue-3 | Other | Other | [Advent, appropriation, and aesthetics of electric light in the princely state of Jammu and Kashmir,](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_3_5.pdf) |  Baasit Abubakr, Saradindu Bhaduri | 2972 |
| 1889 | IJHS-58-2023-Issue-3 | Medicine | Other | [Mountains of corpses: the deadliest attack of the 1918–19 influenza pandemic in the city of...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_3_6.pdf) |  Saumitra Basu | 4638 |
| 1890 | IJHS-58-2023-Issue-3 | Medicine | Other | [A study of diseases and deaths in colonial Bihar in twentieth century](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_3_7.pdf) |  Sudhanshu Kumar Jha, Shubham | 3420 |
| 1891 | IJHS-58-2023-Issue-3 | Astronomy | Indic | [BooK Review: History of Indian astronomy: The Tirvalore tables...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_3_8.pdf) |  B. S. Shylaja | 2914 |
| 1892 | IJHS-58-2023-Issue-3 | Other | Other | [Book Review: Sir R.N. Mookerjee...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_3_9.pdf) |  Samir Kumar Saha | 2872 |
| 1893 | IJHS-58-2023-Issue-3 | Astronomy | Indic | [Project Report: Development of amateur astronomy in independent India with special reference to...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_58_3_10.pdf) |  Sabyasachi Chatterjee | 2946 |
| 1894 | IJHS-58-2023-Issue-4 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Contents_58_4IJHS.pdf) |  IJHS | 1677 |
| 1895 | IJHS-58-2023-Issue-4 | Astronomy | Indic | [Equinoctial full moon of the Brahmāṇḍa Purāṇa and the nakṣatra solar zodiac starting from summer...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/01_58_4.pdf) |  R. N. Iyengar, Sunder Chakravarty | 1121 |
| 1896 | IJHS-58-2023-Issue-4 | Math | Indic | [Construction and application of third diagonal in cyclic quadrilaterals by Nārāyaṇa Paṇḍita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/02-58_4.pdf) |  Prasad A. Jawalgekar et al. | 1173 |
| 1897 | IJHS-58-2023-Issue-4 | Metallurgy | Indic | [Composition and characterisation of ancient lime mortar of Gopal Krishna temple, Alandi, India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/03-58_4.pdf) |  Sarvesh Singh et al. | 3422 |
| 1898 | IJHS-58-2023-Issue-4 | Culture | Indic | [Reinvestigating the science and engineering behind the architectural marvels of Ahom dynasty in...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/04-58_4.pdf) |  Anurag Borah | 1059 |
| 1899 | IJHS-58-2023-Issue-4 | Culture | Indic | [Restoration and conservation of Sāncipāt manuscripts of Assam for preserving in ordinary rural setup](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/05-58_4.pdf) |  Asadulla Asraf Ali, Robin Kumar Dutta | 2859 |
| 1900 | IJHS-58-2023-Issue-4 | Agriculture | Indic | [Historical Note: Origin, introduction, and cultural history of capsicum in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/06-58_4.pdf) |  N. C. Shah | 1433 |
| 1901 | IJHS-58-2023-Issue-4 | Other | Other | [Book Review: History of the climate change on the Coromandel Coast (Ninth‒Nineteenth Centuries...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/07-58_4.pdf) |  Anantanarayanan Raman | 410 |
| 1902 | IJHS-58-2023-Issue-4 | MindSciences | Indic | [Book Review: Evolution of Neurosciences by P. N. Tandon and P. Sarat Chandra](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/08-58_4.pdf) |  Subrata Sinha | 293 |
| 1903 | IJHS-58-2023-Issue-4 | Medicine | Indic | [Project Report: The practice of folk medicine by the indigenous people of Sundarbans: A historical..](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/09-58_4.pdf) |  Rup Kumar Barman | 536 |
| 1904 | IJHS-58-2023-Issue-4 | Math | Indic | [Correction: Geometry of prāṇakalāntara in the Lagnaprakaraṇa](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/10-58_4.pdf) |  IJHS | 255 |
| 1905 | IJHS-58-2023-Issue-4 | Other | Other | [Cumulative Index & Annual Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Cumulative Index_58_ijhs.pdf) |  IJHS | 662 |
| 1906 | IJHS-59-2024-Issue-1 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Contents_59_1_ijhs.pdf) |  IJHS | 1497 |
| 1907 | IJHS-59-2024-Issue-1 | Lingiustics | Indic | [Markers and agencies of anisotropy in the Indus sign system](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/01-IJHS59_1.pdf) |  M. V. Bhaskar | 2627 |
| 1908 | IJHS-59-2024-Issue-1 | Culture | Indic | [Historical account of entomophagy among the Apatani tribe of Arunachal Pradesh: Current status...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/02-IJHS59_2.pdf) |  Nending Muni, Pompi Bhadra and Jharna Chakravorty | 1430 |
| 1909 | IJHS-59-2024-Issue-1 | Medicine | Indic | [Infl uences of botanical knowledge from the East in the colonial medical developments: A case ...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/03-IJHS59_1.pdf) |  K. Uthara | 430 |
| 1910 | IJHS-59-2024-Issue-1 | Medicine | Indic | [Dr. Suresh Prasad Sarbadhikari (1866–1921): A legendary surgeon and a Bengali pioneer of ovariotomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/04-IJHS59_1.pdf) |  Indranil Sanyal | 2754 |
| 1911 | IJHS-59-2024-Issue-1 | Agriculture | Indic | [Jhum: An indigenous method of cultivation and British attitude towards it in Colonial Assam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/05-IJHS59_1.pdf) |  Geetashree Singh | 419 |
| 1912 | IJHS-59-2024-Issue-1 | Philosophy | Other | [Questioning Basalla’s question (yet again): The view from cognitive](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/06-IJHS59_1.pdf) |  Subrata Dasgupta | 557 |
| 1913 | IJHS-59-2024-Issue-1 | Medicine | Indic | [Relevance of Ayurvedic prakṛti in literary studies with special reference to major characters of ...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/07-IJHS59_1.pdf) |  K. R. Bhavana | 476 |
| 1914 | IJHS-59-2024-Issue-1 | Astronomy | Indic | [Historical Note: Pathway to Devasthal astronomical observatory, ARIES](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/08-IJHS59_1.pdf) |  Ram Sagar,  Gopal‑Krishna | 4448 |
| 1915 | IJHS-59-2024-Issue-1 | Other | Indic | [Book Review: Engineering education in India: Past, present and future](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/09-IJHS59_1.pdf) |  Gautam Biswas | 268 |
| 1916 | IJHS-59-2024-Issue-1 | Other | Indic | [Book Review: Science, war and imperialism: India in the second world war](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/10-IJHS59_1.pdf) |  Suvobrata Sarkar | 309 |
| 1917 | IJHS-59-2024-Issue-1 | Medicine | Indic | [Project Report: Archiving the work of Dr. Subhas Mukherjee: The architect of India’s test tube baby](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/11-IJHS59_1.pdf) |  Srabani Mukherjee, Rajvi Mehta | 1798 |
| 1918 | IJHS-59-2024-Issue-1 | Other | Other | [Corrigendum](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Corrigendum_59_1.pdf) |  MV Bhaskar | 65 |
| 1919 | IJHS-59-2024-Issue-2 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Contents_59_2_ijhs.pdf) |  IJHS | 1586 |
| 1920 | IJHS-59-2024-Issue-2 | Math | Indic | [Turagagati method for 4 × 4 pandiagonal magic squares by Nārāyana Pandita](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/01-43539_2024_127_OnlinePDF123-142.pdf) |  M V Reddy et al. | 5634 |
| 1921 | IJHS-59-2024-Issue-2 | Other | Other | [Locating Indian knowledge in modern libraries: Incorporating the traditional classification of ...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/02-43539_2024_121_OnlinePDF143-158.pdf) |  J. K. Bajaj and M. D. Srinivas | 547 |
| 1922 | IJHS-59-2024-Issue-2 | Biology | Indic | [The Ukãy, Salvadora persica (Salvadoraceae): Historical and literary evidence...](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/03-43539_2024_123_OnlinePDF159-164.pdf) |  Muthu V. Prakash, M. Anbarashan | 870 |
| 1923 | IJHS-59-2024-Issue-2 | Other | Other | [Politics, industrialization and technical education in colonial India: A case study of Imperial Inst](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/04-43539_2024_126_OnlinePDF165-177.pdf) |  Prakrati Bhargava | 482 |
| 1924 | IJHS-59-2024-Issue-2 | Other | Other | [Displacement and sovereignty: Raja of Bilaspur and the Bhakra dam (1908–1947)](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/05-43539_2024_122_OnlinePDF178-191.pdf) |  Pankaj Sharma · Balkrishan Shivram | 819 |
| 1925 | IJHS-59-2024-Issue-2 | Culture | Indic | [Indigenous knowledge for sustainable development: A case study of Kurmi Mahatos](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/06-43539_2024_120_OnlinePDF192-203.pdf) |  Sanchita Bhattacharya | 472 |
| 1926 | IJHS-59-2024-Issue-2 | Other | Other | [Brief history of semiconductor science and technology and India’s role in the decade after the inven](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/07-43539_2024_125_OnlinePDF204-215.pdf) |  P. K. Basu | 559 |
| 1927 | IJHS-59-2024-Issue-2 | Other | Other | [Historical Note: Yellapragada Subba Rao: The Unsung Hero of Science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/08-43539_2024_124_OnlinePDF216-222.pdf) |  Neelabh Datta | 469 |
| 1928 | IJHS-59-2024-Issue-2 | Other | Other | [Book Review: History of science, technology, environment, and medicine in India](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/09-43539_2024_129_OnlinePDF223-224.pdf) |  J. N. Sinha | 312 |
| 1929 | IJHS-59-2024-Issue-2 | Medicine | Indic | [Project Report: Plants of Atharvaveda: Their descriptions and medicinal uses](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/10-43539_2024_128_OnlinePDF225-232.pdf) |  Raghava S. Boddupalli | 687 |
| 1930 | IJHS-59-2024-Issue-3 | Other | Other | [Contents](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/Contents_IJHS_59_3.pdf) |  IJHS | 1494 |
| 1931 | IJHS-59-2024-Issue-3 | Astronomy | Indic | [On the calculation of the Moon’s latitude in Indian astronomy](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_59_3_1.pdf) |  Anil Narayanan | 1407 |
| 1932 | IJHS-59-2024-Issue-3 | Math | Indic | [The conception of negative numbers: A study of Kṛṣṇa Daivajña’s Bījapallava](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_59_3_2.pdf) |  Lalitha S R, Nagendra P R N, K Ramasubramanian | 1039 |
| 1933 | IJHS-59-2024-Issue-3 | Math | Indic | [Decision theory and probability theory: Pascal’s wager and pre‑modern Indian lotteries](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_59_3_3.pdf) |  Harald Wiese | 1004 |
| 1934 | IJHS-59-2024-Issue-3 | Biology | Indic | [The paleodietary reconstruction of Roopkund skeletons through trace element analysis](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_59_3_4.pdf) |  Sanjiv Kumar Juyal | 780 |
| 1935 | IJHS-59-2024-Issue-3 | Medicine | Indic | [Placing well‑being: The role of ecology in Āyurveda and Māvilan healing traditions](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_59_3_5.pdf) |  Pushya A. Gautama et al. | 552 |
| 1936 | IJHS-59-2024-Issue-3 | Philosophy | Other | [Understanding the various scientific theories in the history of science](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_59_3_6.pdf) |  Jun‑Young Oh | 823 |
| 1937 | IJHS-59-2024-Issue-3 | Medicine | Indic | [Historical perspectives of critical care in India and worldwide](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_59_3_7.pdf) |  Ujjwala Murkute | 527 |
| 1938 | IJHS-59-2024-Issue-3 | Medicine | Indic | [Book Review: Health, medicine and the encounters of cultures in India by Mumtaz Alam](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_59_3_8.pdf) |  Kamlesh Mohan | 356 |
| 1939 | IJHS-59-2024-Issue-3 | Lingiustics | Other | [Project Report: History of linguistic science of the Austroasiatic group of languages with special..](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_59_3_9.pdf) |  Satarupa Dattamajumdar Saha | 487 |
| 1940 | IJHS-59-2024-Issue-3 | Other | Other | [Obituary to Professor S.M.R. Ansari](https://insa.nic.in//writereaddata/UpLoadedFiles/IJHS/IJHS_59_3_10.pdf) |  M. S. Sriram | 431 |

[INSA - IJHS ➚](https://insa.nic.in/UI/journaldetails.aspx?AID=Mw==)
