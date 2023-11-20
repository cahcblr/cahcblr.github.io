---
layout: post
title:  " Mirror of INSA IJHS Papers"
date:   2023-11-20 18:30:00 +0530
categories: papers mirror
---

The table below is a mirror of INSA-IJHS papers.  ( [sources are here](https://insa.nic.in/UI/journaldetails.aspx?AID=Mw==) )

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

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        tds = tr[i].getElementsByTagName("td");
        for ( j=0; j < tds.length; j++ ) {
            td = tds[j];
            if (td) {
                txtValue = td.textContent; // || td.innerText;
                // // remove the highlight
                // txtValue = txtValue.replace(new RegExp('<span class="highlight">(.*?)<\/span>', 'gi'), '$1');
                // // td.innerHTML = txtValue;

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

|#|year|issue|author|paper|
|---|---|---|---|---|
|1|1966|1|Priyadaranjan Ray|[The Theory of Chemical Combination in Ancient Indian Philosophies](/assets/ijhs/Vol01_1_1_PRay.pdf)|
|2|1966|1|J R Ravetz|[What was ‘The Scientific Revolution’ ?](/assets/ijhs/Vol01_1_2_JRRavetz.pdf)|
|3|1966|1|Michael Hoskin|[Stellar Distances: Galileo's Method and Its Subsequent History](/assets/ijhs/Vol01_1_3_MHoskin.pdf)|
|4|1966|1|Derek J De Solla Price|[A Survival of Babylonian Arithmetic in ew Guinea?](/assets/ijhs/Vol01_1_4_DJDSPrice.pdf)|
|5|1966|1|S N Sen|[The Impetus Theory of the Vaisesikas](/assets/ijhs/Vol01_1_5_SNSen.pdf)|
|6|1966|1|Vasco Ronchi|[New History of Optical Microscope](/assets/ijhs/Vol01_1_6_VRonchi.pdf)|
|7|1966|1|V Subbarayappa|[The Indian Doctrine of Five Elemnets](/assets/ijhs/Vol01_1_7_VSubbarayappa.pdf)|
|8|1966|1|Amulya Kumar Bag|[Binomial Theorem in Ancient India](/assets/ijhs/Vol01_1_8_AKBag.pdf)|
|9|1966|1|Bernhard Rensch|[Problems of Biological Philisophy with regard to the Philosophy of the Upanisads](/assets/ijhs/Vol01_1_9_BRensch.pdf)|
|10|1966|2|Winfried Petri|[Uigur and Tibetian Lists of the Indian Lunar Mansions](/assets/ijhs/Vol01_2_1_WPetri.pdf)|
|11|1966|2|Mira Roy|[Methods of Sterilization and Sex– Determinaton in the Arthava–Veda and in the Brhad–Aranyakopanishad](/assets/ijhs/Vol01_2_2_MRoy.pdf)|
|12|1966|2|A K Bag|[Trigonometrical Series in the Karanapaddhati and the Probable Date of the Text](/assets/ijhs/Vol01_2_3_AKBag.pdf)|
|13|1966|2|S P Raychaudhuri|[Land Classification in Ancient India](/assets/ijhs/Vol01_2_4_SPRaychaudhuri.pdf)|
|14|1966|2|S N Sen|[Introduction of Western Science in India](/assets/ijhs/Vol01_2_5_SNSen.pdf)|
|15|1966|2|Minoru Tanaka|[Characteristics of the History of Science and Technology of Modern Japan](/assets/ijhs/Vol01_2_6_MTanaka.pdf)|
|16|1966|2|S A K Ghori and A Rahman|[Paper Technology in Medieval India](/assets/ijhs/Vol01_2_7_SAKGhori.pdf)|
|17|1966|2|Raj Kumar Gupta|[Botanical Explorations of Victor Jacquemont](/assets/ijhs/Vol01_2_8_RKGupta.pdf)|
|18|1966|2||[Notes](/assets/ijhs/Vol01_2_9_Notes.pdf)|
|19|1967|1|Priyadaranjan Ray|[Origin and Tradition of Alchemy](/assets/ijhs/Vol02_1_1_PRay.pdf)|
|20|1967|1|B V Subbarayappa|[An Estimate of the Vaisesika Sutra in the History of Science](/assets/ijhs/Vol02_1_2_BVSubbarayappa.pdf)|
|21|1967|1|Mira Roy|[Anatomy in the Vedic Literature](/assets/ijhs/Vol02_1_3_MRoy.pdf)|
|22|1967|1|Brij Mohan|[History of Plus and Minus Signs](/assets/ijhs/Vol02_1_4_BMohan.pdf)|
|23|1967|1|Mamata Choudhury|[The Embryonic Development and the Human Body in the Yajnavalkya Smrti](/assets/ijhs/Vol02_1_5_MChowdhury.pdf)|
|24|1967|1||[Reviews](/assets/ijhs/Vol02_1_6_Reviews.pdf)|
|25|1967|2|Vasile D Marza and Ion T Tarnavschi|[The Problem of the Fertilization and Evolution of Phanerogams in Darwin’s Work: A Critical Study](/assets/ijhs/Vol02_2_1_VDMarza.pdf)|
|26|1967|2|H I Jhala|[WMW Haffkine‚ Bacteriologist—A Great Saviour of Mankind](/assets/ijhs/Vol02_2_2_HIJhala.pdf)|
|27|1967|2|R C Gupta|[Bhaskara I’s Approximation to Sine](/assets/ijhs/Vol02_2_3_RCGupta.pdf)|
|28|1967|2|Mira Roy|[Notes: Rasarnavakalpa of Rudrayamala Tantra](/assets/ijhs/Vol02_2_4_Notes.pdf)|
|29|1967|2||[News](/assets/ijhs/Vol02_2_5_News.pdf)|
|30|1967|2|P Ray|[Review](/assets/ijhs/Vol02_2_6_Review.pdf)|
|31|1971|1|M N Deshpande|[Archaeological Sources for the Reconstruction of The History of Sciences of India](/assets/ijhs/Vol06_1_1_MNDeshpande.pdf)|
|32|1971|1|R Sengupta|[Inluence of Certain Harappan Architectural Features on Some Texts of Early–Historical Period](/assets/ijhs/Vol06_1_2_RSengupta.pdf)|
|33|1971|1|R N Rai|[Karanasara of Vatesvara](/assets/ijhs/Vol06_1_3_RNRai.pdf) &#128148;|
|34|1971|1|N K Panikkar|[The Concept of Tides in Ancient India](/assets/ijhs/Vol06_1_4_NKPanikkar.pdf)|
|35|1971|1|R C Gupta|[Fractional Parts of Aryabhata's Sines and Certain Rules](/assets/ijhs/Vol06_1_5_RCGupta.pdf)|
|36|1971|1|Albert V Carozzi|[Lucien Cayeux: A Challenger of the Principle of Uniformity in Geology?](/assets/ijhs/Vol06_1_6_AVCarozzi.pdf)|
|37|1971|1|P V Sharma|[Triamlla Bhatta: His Date and Works in 100 Verses](/assets/ijhs/Vol06_1_7_PVSharma.pdf)|
|38|1971|1|Visvapriya Mukherji|[A Short History of the Meson Theory from 1935 to 1943](/assets/ijhs/Vol06_1_8_VMukherji.pdf)|
|39|1971|1|B M Chintamani and B V Subbarayyapa|[Histrory of Sciences in india: Pali Sources](/assets/ijhs/Vol06_1_9_BMChintamani.pdf)|
|40|1971|1||[Book Review](/assets/ijhs/Vol06_1_10_BookReviews.pdf)|
|41|1971|2|Visvapriya Mukherji|[A Short History of the Meson Theory from 1943 to 1948 (Part II)](/assets/ijhs/Vol06_2_1_VMukherji.pdf) &#128148;|
|42|1971|2|R N Rai|[The Extant Siddhanta Sekhra: An Error in one of its Sine Values](/assets/ijhs/Vol06_2_2_RNRai.pdf)|
|43|1971|2|E G K Rao|[Exploration of Underground Water Springs According to the Ancient Hindus](/assets/ijhs/Vol06_2_3_EGKRao.pdf)|
|44|1971|2|R N Rai|[The Ardharatrika System of Aryabhata I](/assets/ijhs/Vol06_2_4_RNRai.pdf)|
|45|1971|2|G P Sharma and P V Sharma|[Sivadasa Sen— A Scholar Commentator on Indian Medicine of Later Medieval Period](/assets/ijhs/Vol06_2_5_GPSharma.pdf)|
|46|1971|2|B M Chintamani|[Notices of Thirteen Mss. In Prakrit](/assets/ijhs/Vol06_2_6_BMChintamani.pdf)|
|47|1973|1&2|L C Jain|[Set Theory in Jaina School of Mathematics](/assets/ijhs/Vol08_1and2_1_LCJain.pdf)|
|48|1973|1&2|K D Swaminathan|[Jyotisa in Kerala](/assets/ijhs/Vol08_1and2_2_KDSwaminathan.pdf)|
|49|1973|1&2|J N Sharma‚ Jagadish N Sharma and R B Arora|[Arthritis in Ancient Indian Literature](/assets/ijhs/Vol08_1and2_3_JNSharma.pdf)|
|50|1973|1&2|K S Shukla|[Use of Hypotenuse in the Computation of the Equation of the Centre under the Epicyclic Theory in the School of Aryabhatta I???](/assets/ijhs/Vol08_1and2_4_KSShukla.pdf)|
|51|1973|1&2|K K Tiwari and T R Mitra|[A Thirteenth Century Indian Reference to Plant Nematodes](/assets/ijhs/Vol08_1and2_5_KKTiwari.pdf)|
|52|1973|1&2|B G L Swamy|[Sources for a History of Plant Sciences in India](/assets/ijhs/Vol08_1and2_6_BGLSwamy.pdf)|
|53|1973|1&2|K R Alur|[The Faunal Studies in Archaeology](/assets/ijhs/Vol08_1and2_7_KRAlur.pdf)|
|54|1973|1&2||[Book Reviews](/assets/ijhs/Vol08_1and2_8_BookReviews.pdf)|
|55|1975|1|P V Sharma|[The Pseudo– Harita Samhita](/assets/ijhs/Vol10_1_1_PVSharma.pdf)|
|56|1975|1|R P Kulkarni|[Soil Stabilization by Early Indian Methods](/assets/ijhs/Vol10_1_2_RPKulkarni.pdf)|
|57|1975|1|V V Raman|[The Permeation of Thermodynamics into Nineteenth Century Chemistry](/assets/ijhs/Vol10_1_3_VVRaman.pdf)|
|58|1975|1|Radha Charan Gupta|[Circumference of the Jambudvipa in Jaina Cosmography](/assets/ijhs/Vol10_1_4_RCGupta.pdf)|
|59|1975|1|S M R Ansari|[Quinquecentenary of Nicolaus Copernicus— A Report](/assets/ijhs/Vol10_1_5_SMRAnsari.pdf)|
|60|1975|1||[Announcement](/assets/ijhs/Vol10_1_6_Announcement.pdf)|
|61|1975|1||[Book Review](/assets/ijhs/Vol10_1_7_BookReviews.pdf)|
|62|1976|1|Radha Charan Gupta|[Sine of Eighteen Degrees in India Upto the Eighteenth Century](/assets/ijhs/Vol11_1_1_RCGupta.pdf)|
|63|1976|1|B G L Swamy|[Sources for a History of Plant Sciences in India (II)](/assets/ijhs/Vol11_1_2_BGLSwamy.pdf)|
|64|1976|1|B G L Swamy|[Sources for a History of Plant Sciences in India (III)](/assets/ijhs/Vol11_1_3_BGLSwamy.pdf)|
|65|1976|1|R N Rai|[Some Observations on Vrddha–Vasistha Siddhanta](/assets/ijhs/Vol11_1_4_RNRai.pdf)|
|66|1976|1|A K Bag|[Madhava’s Sine and Cosine Series](/assets/ijhs/Vol11_1_5_AKBag.pdf)|
|67|1976|1|L C Jain|[The Kinematic Motion of Astral Real and Counter Bodies in Trilokasara](/assets/ijhs/Vol11_1_6_LCJain.pdf)|
|68|1976|1|R H Singh and B N Sinha|[Ayurvedic Concept of the Psychosomatic Basis of Health and Disease](/assets/ijhs/Vol11_1_7_RHSingh.pdf)|
|69|1976|2|L C Jain|[On Certain Mathematical Topics of the Dhavala Texts](/assets/ijhs/Vol11_2_1_LCJain.pdf)|
|70|1976|2|M N Channabasappa|[On the Square Root Formula in the Bakhshali Manuscript](/assets/ijhs/Vol11_2_2_MNChannabasappa.pdf)|
|71|1976|2|R Mitra and L D Kapoor|[Kamala—The National Flower of India: Its Ancient History and Uses in Indian Medicine](/assets/ijhs/Vol11_2_3_RMitra.pdf)|
|72|1976|2|D P Agrawal‚ C Margabandhu and N C Shekar|[Ancient Copper Workings: Some New C–14 Dates](/assets/ijhs/Vol11_2_4_DPAgarwal.pdf)|
|73|1976|2|Mamata Chaudhuri|[Ship–Building in the Yuktikalpataru and Samarangana Sutradhara](/assets/ijhs/Vol11_2_5_MChaudhuri.pdf)|
|74|1976|2|T M Srinivasan|[Measurement of Rainfall in Ancient India](/assets/ijhs/Vol11_2_6_TMSrinivasan.pdf)|
|75|1978|1|Pradip Kumar Majumdar|[Ganita Kaumudi and the Continued Fraction](/assets/ijhs/Vol13_1_1_PKMajumdar.pdf)|
|76|1978|1|Pradip Kumar Majumdar|[The Extant of Siddhanta Sarvabhauma— An error in the Sine of One–third of Part of an Ang](/assets/ijhs/Vol13_1_2_PKMajumdar.pdf)|
|77|1978|1|Pradip Kumar Majumdar|[A Rationale of Bhaskara I's Method](/assets/ijhs/Vol13_1_3_PKMajumdar.pdf)|
|78|1978|1|S R N Murthy|[Geological Evidences in Support of the Antiquity of Some Ancient Indian Events](/assets/ijhs/Vol13_1_4_SRNMurthy.pdf)|
|79|1978|1|Harry Gershenowitz|[Gavin De Beer and the Neo–Lamarckians](/assets/ijhs/Vol13_1_5_HGershenowitz.pdf)|
|80|1978|1|R H Singh and P K Srivastava|[Nephrology in Ancient Indian System of Medicine](/assets/ijhs/Vol13_1_6_PKSrivastava.pdf)|
|81|1978|1|R P Kulkarni|[The Value of Π Known to Sulbasutrakaras](/assets/ijhs/Vol13_1_7_RPKulkarni.pdf)|
|82|1978|1|L C Jain|[On the Spiro–Elliptic Motion of the Sun implicit in the Tiloyapannatti](/assets/ijhs/Vol13_1_8_LCJain.pdf)|
|83|1978|1|S Mahdihassan|[Triphala and its Arabic and Chinese Synonyms](/assets/ijhs/Vol13_1_9_SMahdihassan.pdf)|
|84|1978|1|Harry Gershenowitz|[George Gaylord Simpson and Lamarck](/assets/ijhs/Vol13_1_10_HGershenowitz.pdf)|
|85|1978|1|S M R Ansari|[The Establishment of Observatories](/assets/ijhs/Vol13_1_11_SMRAnsari.pdf)|
|86|1978|1||[Book Reviews](/assets/ijhs/Vol13_1_12_BookReviews.pdf)|
|87|1979|1|Sajjan Singh Lishk and S D Sharma|[Zodiac Circumference as Graduated in Jaina Astronomy](/assets/ijhs/Vol14_1_1_SSLishk.pdf)|
|88|1979|1|Harry Gershenowitz|[Chauncey Wright’s Views on Lamarck](/assets/ijhs/Vol14_1_2_HGershenowitz.pdf)|
|89|1979|1|Harry Gershenowitz|[George Henslow: True Darwinist](/assets/ijhs/Vol14_1_3_HGershenowitz.pdf)|
|90|1979|1|L C Jain|[System Theory in Jaina School of Mathematics](/assets/ijhs/Vol14_1_4_LCJain.pdf)|
|91|1979|1|R C Gupta|[Munisvara’s Modification of Brahmagupta's Rule for Second Order Interpolation](/assets/ijhs/Vol14_1_5_RCGupta.pdf)|
|92|1979|1||[Book Reviews](/assets/ijhs/Vol14_1_6_BookReviews.pdf)|
|93|1979|1||[News](/assets/ijhs/Vol14_1_7_News.pdf)|
|94|1980|1|S Bagchi and A K Ghose|[History of Mining in India—Circa 1400–1800 and Technology Status](/assets/ijhs/Vol15_1_4_SBagchi.pdf)|
|95|1980|1|R C Gupta|[The Marici Commentary on the Jyotpatti](/assets/ijhs/Vol15_1_6_RCGupta.pdf)|
|96|1980|1|Hamida Khatoon Naqvi|[Colour Making and Dyeing of Cotton Textiles in Medieval Hindustan](/assets/ijhs/Vol15_1_8_HKNaqvi.pdf)|
|97|1980|1|R L Verma|[Medical Trends in Kashmir During Zain–ul–Abidin’s Reign](/assets/ijhs/Vol15_1_9_RLVerma.pdf)|
|98|1980|1|A K Bag|[Indian Literature on Mathematics During 1400–1800 AD](/assets/ijhs/Vol15_1_10_AKBag.pdf)|
|99|1980|1|Kailash Behari and Vijai Govind|[A Survey of Historical Astrolables of Delhi](/assets/ijhs/Vol15_1_11_KBehari.pdf)|
|100|1980|1|Deepak Kumar|[Patterns of Colonial Science in India](/assets/ijhs/Vol15_1_12_DKumar.pdf)|
|101|1980|1|I N Verma|[Calico Printing in India](/assets/ijhs/Vol15_1_1_INVerma.pdf)|
|102|1980|1|J C Sikdar|[Jaina Alchemy](/assets/ijhs/Vol15_1_2_JCSikdar.pdf)|
|103|1980|1|Tazimuddin Siddiqi|[Unani Medicine in India during the Delhi Sultanate](/assets/ijhs/Vol15_1_3_TSiddiqi.pdf)|
|104|1980|1|S P Sangar|[Indian Silk fabrics in  the Seventeenth Century](/assets/ijhs/Vol15_1_5_SPSangar.pdf)|
|105|1980|1|S A Khan Ghori|[The Impact of Modern European Astronomy on Raja Jai Singh](/assets/ijhs/Vol15_1_7_SAKGhori.pdf)|
|106|1980|1|Harry Gershenowitz|[Monsieur Poliakov’s Recent Attack Upon Lamarck](/assets/ijhs/Vol15_1_13_HGershenowitz.pdf)|
|107|1980|2|Harry Gershenowitz|[Napoleon and Lamarck](/assets/ijhs/Vol15_2_4_HGershenowitz.pdf)|
|108|1980|2|S S Kamavisdar|[Analytical Studies in the Evidences Regarding Chemico–Culture in the History of Indian Medicine in Ancient Period—Allium Series](/assets/ijhs/Vol15_2_5_SSKamavisdar.pdf)|
|109|1980|2|S Mahdihassan|[A Comparitive Study of the Early System of Indian Cosmology and the Tridosa Humoral Doctrine](/assets/ijhs/Vol15_2_6_SMahadihassan.pdf)|
|110|1980|2|Bibhutibhusan Datta and Avadhesh Narayan Singh; Revised by Kripa Shankar Shukla|[Hindu Geometry](/assets/ijhs/Vol15_2_1_KSShukla.pdf)|
|111|1980|2|S R N Murthy|[The Vedic River Saraswati A Myth or Fact – A Geological Approach](/assets/ijhs/Vol15_2_2_SRNMurthy.pdf)|
|112|1980|2|Sajjan Singh Lishk and S D Sharma|[Standardization of Time–Unit Muhurta Through the Science of Sciatherics in Atharva Vedanga Jyotisa](/assets/ijhs/Vol15_2_3_SSLishk.pdf)|
|113|1981|2|A J Khan|[A Survey of the Concepts and Measures Developed by the Greco–Arab Physicians Related with The Prevention and Treatment of the Infections and Epidemic Diseases](/assets/ijhs/Vol16_2_4_AJKhan.pdf)|
|114|1981|2|J L Sanchez|[Carlos J Finlay and the Conception of Contagion](/assets/ijhs/Vol16_2_6_JLSanchez.pdf)|
|115|1981|2|K T M Hegde|[Scientific Basis and Technology of Ancient Indian Copper and Iron Metallurgy](/assets/ijhs/Vol16_2_9_KTMHegde.pdf)|
|116|1981|2|S P Sangar|[Intoxicants in Mughal India](/assets/ijhs/Vol16_2_10_SPSangar.pdf)|
|117|1981|2|George Abraham|[The Gnomon in Early Indian Astronomy](/assets/ijhs/Vol16_2_11_GAbraham.pdf)|
|118|1981|2|R S Singh|[On the Identity and Economico Medicinal uses of Hastikarnapalasa as Evinced in the Ancient (Sanskrit) Texts and Traditions](/assets/ijhs/Vol16_2_12_RSSingh.pdf)|
|119|1981|2|P K Majumdar|[The Rationale of Brahmagupta’s Method of Solving ax—c=by](/assets/ijhs/Vol16_2_1_PKMajumdar.pdf)|
|120|1981|2|S D Sharma|[Pluto and a Transplutonian Planet as Predicted by Venkatesha Ketakara](/assets/ijhs/Vol16_2_2_SDSharma.pdf)|
|121|1981|2|H Gershenowitz|[John Wesley Powell: Staunch Neo–Lamarckian](/assets/ijhs/Vol16_2_3_HGershenowitz.pdf)|
|122|1981|2|N K Garg|[Interaction in Chemistry and Medicine Between India and Europe in 18th–19th Century](/assets/ijhs/Vol16_2_5_NKGarg.pdf)|
|123|1981|2|Roma Mitra|[Bakula– A Reputed Drug of Ayurveda ‚its History‚ Uses in Indian Medicine](/assets/ijhs/Vol16_2_7_RMitra.pdf)|
|124|1981|2|D G Thatte|[Techniques of Venupuncture (Siravedha) in India in the 18th Century](/assets/ijhs/Vol16_2_8_DGThatte.pdf)|
|125|1981|2|S Mahdihassan|[Parisrut The Earliest Distilled Liquor of Vedic Times or of About 1500BC](/assets/ijhs/Vol16_2_13_SMahdihassan.pdf)|
|126|1982|1|Rama Deb roy|[An Outline Survey of Some Aspects of Technology in India	1750–1900 and its Legacy](/assets/ijhs/Vol17_1_2_RDRoy.pdf)|
|127|1982|1|Makrand J Mehta|[Indigenous Paper Industry and Muslim Entrepreneurship](/assets/ijhs/Vol17_1_4_MJMehta.pdf)|
|128|1982|1|A K Bag|[Technology in India in the Eighteenth–Ninteenth Century](/assets/ijhs/Vol17_1_7_AKBag.pdf)|
|129|1982|1|K S Murty|[Geological Sciences in India in the 18th–19th Century](/assets/ijhs/Vol17_1_12_KSMurty.pdf)|
|130|1982|1||[Book Reviews](/assets/ijhs/Vol17_1_13_BookReviews.pdf)|
|131|1982|1||[News](/assets/ijhs/Vol17_1_14_News.pdf)|
|132|1982|1|S N Sen|[Tieffenthaler on Latitudes and Longitudes in India— An Eighteenth Century Study of Geographical Coordinates](/assets/ijhs/Vol17_1_1_SNSen.pdf)|
|133|1982|1|R P Kulkarni|[Irrigation Engineering in India](/assets/ijhs/Vol17_1_3_RPKulkarni.pdf)|
|134|1982|1|Hamida Khatoon Naqvi|[Technology and Process of Some of the Principal Industries of Eighteenth Century Hindustan](/assets/ijhs/Vol17_1_5_HKNaqvi.pdf)|
|135|1982|1|H C Bhardwaj and Kamal K Jain|[Indian Dyes and Dyeing Industry during 18–19 Century](/assets/ijhs/Vol17_1_6_HCBhardwaj.pdf)|
|136|1982|1|E G K Rao|[Development of Banking Institutions in India in the Eighteenth–Ninteenth Century](/assets/ijhs/Vol17_1_8_EGKRao.pdf)|
|137|1982|1|J C Sikdar|[Phirangiroga (Syphilis) and its Management](/assets/ijhs/Vol17_1_10_JCSikdar.pdf)|
|138|1982|1|N Gangadharan|[The State of Ayurveda in Eighteenth & Ninteenth Centuries](/assets/ijhs/Vol17_1_11_NGangadharan.pdf)|
|139|1982|2|Sukhwant Singh|[Agricultural Science and Technology in Punjab in the Ninteenth Century](/assets/ijhs/Vol17_2_1_SSingh.pdf)|
|140|1982|2|H C Bhardwaj|[Development of Iron and Steel Technology in India during 18th and 19th Centuries](/assets/ijhs/Vol17_2_3_HCBhardwaj.pdf)|
|141|1982|2|M L Sharma|[Jagannath Samrats Outstanding Contribution to Indian Astronomy in Eighteenth Century AD](/assets/ijhs/Vol17_2_5_MLSharma.pdf)|
|142|1982|2|Deepak kumar|[Economic Compulsions and the Geological Survey of India](/assets/ijhs/Vol17_2_10_DKumar.pdf)|
|143|1982|2|Sharifa Khatun|[Impact of European Science and Technology on Bengal](/assets/ijhs/Vol17_2_11_SKhatun.pdf)|
|144|1982|2|A K basu|[Some Perspectives of the Cultural imapct of European Medical Scienec on the Development Scientific Medicine in India](/assets/ijhs/Vol17_2_13_AKBasu.pdf)|
|145|1982|2|Virendra Nath Sharma|[The Impact of Eighteenth Century Jesuit Astronomers on the Astronomy of India and China](/assets/ijhs/Vol17_2_15_VNSharma.pdf)|
|146|1982|2|K M Matthew|[Botany and its Technologies in Peninsular India in the Eighteenth and Ninteenth Centuries](/assets/ijhs/Vol17_2_16_KMMatthew.pdf)|
|147|1982|2|D P Jha|[Science and Technology (Coal Mining) in India in Eighteenth–Ninteenth Century](/assets/ijhs/Vol17_2_18_DPJha.pdf)|
|148|1982|2||[Book Reviews](/assets/ijhs/Vol17_2_19_BookReviews.pdf)|
|149|1982|2||[Announcement](/assets/ijhs/Vol17_2_20_Announcement.pdf)|
|150|1982|2|R D Singh|[Development of Mining Technology during the Ninteenth Century in India](/assets/ijhs/Vol17_2_2_RDSingh.pdf)|
|151|1982|2|Eric G Forbes|[European Astronomical Tradition: Transmission into India](/assets/ijhs/Vol17_2_4_EGForbes.pdf)|
|152|1982|2|Anjani Kumar Mehra|[Solar Eclipse Theory and observations in the 18th Century India](/assets/ijhs/Vol17_2_6_AKMehra.pdf)|
|153|1982|2| M N Madhyastha	M Abdul Rahiman and K M Kaveriappa|[Brief History of Scientific Progress of South Kanara](/assets/ijhs/Vol17_2_7_MNMadhyastha.pdf)|
|154|1982|2|Kawajiri Nobuo|[The Characteristic Features of Japanese Culture in the Field of Science Eighteenth–Ninteenth Century](/assets/ijhs/Vol17_2_8_KNobuo.pdf)|
|155|1982|2|John T Blackmore|[The Rise and Fall of Three Fashionable Expectations](/assets/ijhs/Vol17_2_9_JTBlackmore.pdf)|
|156|1982|2|Gurdip Singh and P D Joshi|[Impact of European Science and Technology on the development of Modern Ayurveda during 19th Century](/assets/ijhs/Vol17_2_12_GSingh.pdf)|
|157|1982|2|Virendra Nath Sharma|[Jai Singh‚ His European Astronomers and the Copernican Revolution](/assets/ijhs/Vol17_2_14_VNSharma.pdf)|
|158|1982|2|P K Bhattacharyya|[Beginning of Modern Botany in India by Dutch in 16th–18th Century (Basic Features and Characteristics)](/assets/ijhs/Vol17_2_17_PKBhattacharyya.pdf)|
|159|1983|1|Harry Gershenowitz|[Arthur Koestler’s Osculation with Lamarckism and Neo–Lamarckism](/assets/ijhs/Vol18_1_1_HGershenowitz.pdf)|
|160|1983|1|Harry Gershenowitz|[Georges Clemenceau: Traditional Lamarckian](/assets/ijhs/Vol18_1_3_HGershenowitz.pdf)|
|161|1983|1|Bibhutibhusan Datta and Avadhesh Narayan Singh|[Hindu Trignometry](/assets/ijhs/Vol18_1_5_BDatta.pdf)|
|162|1983|1|Hamida Khatoon Naqvi|[Some Varieties of Indian Silken Stuffs in Persian Sources C 1200–1700](/assets/ijhs/Vol18_1_7_HKNaqvi.pdf)|
|163|1983|1|S Mahdihassan|[The Etymology of Kim–Purusa](/assets/ijhs/Vol18_1_8_SMahdihassan.pdf)|
|164|1983|1||[Book Reviews](/assets/ijhs/Vol18_1_9_Bookreview.pdf)|
|165|1983|1|V K Joshi|[Evolution of the Concept of Astavarga](/assets/ijhs/Vol18_1_2_VKJoshi.pdf)|
|166|1983|1|R C Gupta|[Spread and Triumph of Indian Numerals](/assets/ijhs/Vol18_1_4_RCGupta.pdf)|
|167|1983|1|P Ramakrishnan|[History of Powder Metallurgy](/assets/ijhs/Vol18_1_6_PRamakrishnan.pdf)|
|168|1983|2|R S Singh and V D Vyas|[The Identity and Critical Appraisal of the Basis of Nomenclature and Ancient Socio–Cultural and Geographico–Historical Reflections Evinced with the Paninian Perfume Plant ⁄ Plant Part–Kisara](/assets/ijhs/Vol18_2_3_RSSingh.pdf)|
|169|1983|2|A N Singh and R S Singh|[On the Identity of and Indo–Greek Relation Reflected in the Plant–Names and Uses Evinced in the Kautilya Arthasastra with Particular Reference to ‘Kiratatikta’ of ‘Katuvarga’](/assets/ijhs/Vol18_2_4_ANSingh.pdf)|
|170|1983|2|Pradip Kumar Majumdar|[A Rationale of Bhatta Govinda’s Method for Solving the Equation ax—c=by and a Comparitive Study of the Determination of ‘Mati’ as Given by Bhaskara I and Bhatta Govinda](/assets/ijhs/Vol18_2_7_PKMajumdar.pdf)|
|171|1983|2||[Book Reviews](/assets/ijhs/Vol18_2_9_BookReviews.pdf)|
|172|1983|2|Harry Gershenowitz|[Why Did Gregory Bateson Overlook Some Basic Lamarckian Tenets](/assets/ijhs/Vol18_2_1_HGershenowitz.pdf)|
|173|1983|2|Harry Gershenowitz|[Encyclopedias and Lamarck](/assets/ijhs/Vol18_2_2_HGershenowitz.pdf)|
|174|1983|2|N C Shekar|[Antiquity of Mining and Metallurgical Activities at Ambaji‚ Kumbaria and Deri](/assets/ijhs/Vol18_2_5_NCShekar.pdf)|
|175|1983|2|V S Kirsanov|[The Characteristic Features of Development of Science and Technology in Europe in the 18–19th Centuries](/assets/ijhs/Vol18_2_6_VSKirsanov.pdf)|
|176|1983|2|Mamata Chaudhuri|[The Technique of Glass Making in India (1400–1800 AD)](/assets/ijhs/Vol18_2_8_MChaudhuri.pdf)|
|177|1984|1|S A Paramhans|[Units of Measurements in Medieval India and their Modern Equivalents](/assets/ijhs/Vol19_1_3_SAParamhans.pdf)|
|178|1984|1|N Bhatla‚ T Mukherjee and G Singh|[Plants: Traditional Worshipping](/assets/ijhs/Vol19_1_4_NBhatla.pdf)|
|179|1984|1|K H Krishnamurthy and G C Mouli|[Siddha System of Medicine: A Historical Appraisal](/assets/ijhs/Vol19_1_5_KHKrishnamurthy.pdf)|
|180|1984|1|S Mahadihassan|[The Chinese Origin of the Sanskrit Word for Wheat](/assets/ijhs/Vol19_1_8_Smahdihassan.pdf)|
|181|1984|1|S A H Rizvi|[On Trisection of an Angle Leading to the Derivation of a Cubic Equation and Computation of Value of Sine](/assets/ijhs/Vol19_1_10_SAHRizvi.pdf)|
|182|1984|1||[Book Reviews](/assets/ijhs/Vol19_1_11_BookReviews.pdf)|
|183|1984|1|A K Bag|[Report: History of Science in USSR](/assets/ijhs/Vol19_1_12_Report.pdf)|
|184|1984|1|P Singh|[Varga–Prakrtri— The Cakravala Method of its Solution and the Regular Continued–Fractions](/assets/ijhs/Vol19_1_1_PSingh.pdf)|
|185|1984|1|J G Chhabra‚ S D Sharma and Manju Khanna|[Prediction of Pluto by B Ketakar](/assets/ijhs/Vol19_1_2_GJChhabra.pdf)|
|186|1984|1|H Gershenowitz|[Robert Broom’s Misinterpretation of Lamarck and Darwin](/assets/ijhs/Vol19_1_6_HGershenowitz.pdf)|
|187|1984|1|A Ismail and A B Khan|[Surgery in the Medieval Muslim World](/assets/ijhs/Vol19_1_7_AIsmail.pdf)|
|188|1984|1|S Mahadihassan|[The Tridosa Doctrine and the Constituents of Chinese Humorology](/assets/ijhs/Vol19_1_9_Smahdihassan.pdf)|
|189|1984|3|V V Raman|[Jean Le Rond D’Alembert 1717–1783](/assets/ijhs/Vol19_3_1_VVRaman.pdf)|
|190|1984|3|V Shekhawat|[Standards of Scientific Investigation: Logic and Methodology of Science in Caraka Samhita](/assets/ijhs/Vol19_3_3_VShekhawat.pdf)|
|191|1984|3|Deepak Kumar|[Science in Higher Education: A Study in Victorian India](/assets/ijhs/Vol19_3_4_DKumar.pdf)|
|192|1984|3||[Announcement](/assets/ijhs/Vol19_3_9_Announcement.pdf)|
|193|1984|3|S K Mukherjee|[Supplement: Vedanga Jyotisa of Lagadha](/assets/ijhs/Vol19_3_10_SupplementVedangjyotishaofLagdha.pdf)|
|194|1984|3|U R Bansal and BB Bansal|[Industries in India in 18th and 19t Centuries](/assets/ijhs/Vol19_3_2_URBansal.pdf)|
|195|1984|3|H Gershenowitz|[Professor Conway Zirkle’s Vitriolic Attack on Lamarck](/assets/ijhs/Vol19_3_5_HGershenowitz.pdf)|
|196|1984|3|C L Yadav and  K C Chunekar|[The Wonder Ayurvedic Drug Laksmana for Progeny: A Historical Appraisal](/assets/ijhs/Vol19_3_6_CLYadav.pdf)|
|197|1984|3|A P Kulaichev|[Sriyantra and its Mathematical Properties](/assets/ijhs/Vol19_3_7_APKulaichev.pdf)|
|198|1984|3||[Book Reviews](/assets/ijhs/Vol19_3_8_BookReviews.pdf)|
|199|1984|4|S C Dey|[Ichthyological Developments in Assam in Ninteenth Century](/assets/ijhs/Vol19_4_1_SCDey.pdf)|
|200|1984|4|D K Agarwal and S C Shukla|[Washerman and Washing Materials in Ancient India](/assets/ijhs/Vol19_4_2_DKAgarwal.pdf)|
|201|1984|4|P K Chattopadhyay|[Archaeometallurgical Studies in Indian Subcontinent: A Survey on Metallography of Iron Objects](/assets/ijhs/Vol19_4_6_PKChattopadhyay.pdf)|
|202|1984|4|A K Bag and K S Shen|[Kuttaka and Qiuyishu](/assets/ijhs/Vol19_4_8_AKBag.pdf)|
|203|1984|4||[Book Reviews](/assets/ijhs/Vol19_4_9_BookReviews)|
|204|1984|4||[Notes and News](/assets/ijhs/Vol19_4_10_NotesAndNews)|
|205|1984|4|M S Bhatnagar|[Atom from Veda to Date](/assets/ijhs/Vol19_4_3_MSBhatnagar.pdf)|
|206|1984|4|H K Naqvi|[Cultivation under the Sultans of Delhi c 1206–1555](/assets/ijhs/Vol19_4_4_HKNaqvi.pdf)|
|207|1984|4|M Majumdar|[Risala Dar Falahat](/assets/ijhs/Vol19_4_5_MMajumdar.pdf)|
|208|1984|4|B C Joshi|[Neurology in Ancient India– Some Evidences](/assets/ijhs/Vol19_4_7_BCJoshi.pdf)|
|209|1985|1to4|K V Sarma|[A Survey of Source Materials](/assets/ijhs/Vol20-1to4_2_KVSarma.pdf)|
|210|1985|1to4|S N Sen|[Survey of Studies in European Languages](/assets/ijhs/Vol20-1to4_4_SNSen.pdf)|
|211|1985|1to4|A K Bag|[Astronomy in Indus Civilization and during Vedic Times](/assets/ijhs/Vol20-1to4_5_AKBag.pdf)|
|212|1985|1to4|S D Sharma|[Eclipses‚ Parallax and Precession of Equinoxes](/assets/ijhs/Vol20-1to4_8_SDSharma.pdf)|
|213|1985|1to4|K S Shukla|[Phases of The Moon	Rising and Setting Of Planets and Stars and Their Conjunstions](/assets/ijhs/Vol20-1to4_9_KSShukla.pdf)|
|214|1985|1to4|S D Sharma|[Astronomical Observatories](/assets/ijhs/Vol20-1to4_12_SDSharma.pdf)|
|215|1985|1to4|S A Khan|[Development of Zij Literature in India](/assets/ijhs/Vol20-1to4_3_SAKhan.pdf)|
|216|1985|1to4|S D Sharma|[Post–Vedic Astronomy](/assets/ijhs/Vol20-1to4_6_SDSharma.pdf)|
|217|1985|1to4|D Arka Somayaji|[The Yuga System And The Computations of Mean and True Planetary Longitudes](/assets/ijhs/Vol20-1to4_7_ASomayaji.pdf)|
|218|1985|1to4|R N Rai|[Astronomical Instruments](/assets/ijhs/Vol20-1to4_11_RNRai.pdf)|
|219|1985|1to4|S M R Ansari|[Introduction of Modern western Astronomy in India During 18–19 Centuries](/assets/ijhs/Vol20-1to4_13_SMRAnsari.pdf)|
|220|1985|1to4|J C Bhattacharyya|[Astronomy in India in the 20th Century](/assets/ijhs/Vol20-1to4_14_JCBhattacharyya.pdf)|
|221|1986|1|S Mahdihassan|[Ephedra as Soma Meaning Hemp Fibres with Soma Later Misidentified as the Hemp Plant Itself](/assets/ijhs/Vol21_1_1_SMahdihassan.pdf)|
|222|1986|1|A S Ramanathan|[Contribution to ‘Weather Science in Ancient India-I’](/assets/ijhs/Vol21_1_2_ASRamanathan.pdf)|
|223|1986|1|A S Ramanathan|[Contribution to ‘Weather Science in Ancient India-II’](/assets/ijhs/Vol21_1_3_ASRamanathan.pdf)|
|224|1986|1|Rama Deb Roy|[The Great Trignometrical Survey of India in a Historical Perspective](/assets/ijhs/Vol21_1_4_RDRoy.pdf)|
|225|1986|1|R R Daniel|[The Method of Science in Astronomy](/assets/ijhs/Vol21_1_5_RRDaniel.pdf)|
|226|1986|1|R C Gupta|[Some Equalization Problems from the Bakshali Manuscript](/assets/ijhs/Vol21_1_6_RCGupta.pdf)|
|227|1986|1|Subhash Kak|[Computational Aspects of the Aryabhata Algorithm](/assets/ijhs/Vol21_1_7_SKak.pdf)|
|228|1986|1|Benon Zb Szalek|[Decipherment and Interpretation of the Proto–Indian (Mohenjo–Daro and Harappa) Inscriptions](/assets/ijhs/Vol21_1_8_BZSzalek.pdf)|
|229|1986|1|M S Khan|[Book Review](/assets/ijhs/Vol21_1_9_BookReview.pdf)|
|230|1986|1||[News](/assets/ijhs/Vol21_1_11_News.pdf)|
|231|1986|2|Virendra Shekhawat|[The Art of Theory Construction in Caraka Samhita](/assets/ijhs/Vol21_2_1_VShekhawat.pdf)|
|232|1986|2|Paun Kunitzsch|[Star Catalogues and Star Tables in Medieval Oriental and European Astronomy](/assets/ijhs/Vol21_2_2_PKunitzsch.pdf)|
|233|1986|2|Parmanand Singh|[Narayana’s Treatment of Magic Squares](/assets/ijhs/Vol21_2_3_PSingh.pdf)|
|234|1986|2|R C Gupta|[Madhavacandra’s and Other Octagonal Derivations of the Jaina Value Π = √10](/assets/ijhs/Vol21_2_4_RCGupta.pdf)|
|235|1986|2|Syed Aftab Husain Rizvi|[Arithmetical Ratio of Diameter to its Circumference of a Circle with Special Reference to Jame–I–Bahadur Khani](/assets/ijhs/Vol21_2_5_SAHRizvi.pdf)|
|236|1986|2|B C Joshi|[Neurology in Ancient India: Muladhara Cakra—A Physiological Reality](/assets/ijhs/Vol21_2_6_BCJoshi.pdf)|
|237|1986|2|O P upadhyay|[Evolution of Kusta](/assets/ijhs/Vol21_2_7_OPUpadhyay.pdf)|
|238|1986|2|S Mahdihassan|[Lac and its Decolourization by Orpiment as Traced to Babylon](/assets/ijhs/Vol21_2_8_SMahdihassan.pdf)|
|239|1986|2|S M R Ansari|[Book Review: Medical Education and Research: Western Medicine in India](/assets/ijhs/Vol21_2_9_BookReviews.pdf)|
|240|1986|2|S N Sen|[Report: Seminar on Science‚ Technology and Social Change‚ 1900–1980](/assets/ijhs/Vol21_2_10_Report.pdf)|
|241|1986|2||[News](/assets/ijhs/Vol21_2_11_News.pdf)|
|242|1986|2||[Announcements](/assets/ijhs/Vol21_2_12_Announcements.pdf)|
|243|1986|3|A Rahman|[On Relevance of Ibn Sina Today](/assets/ijhs/Vol21_3_1_ARahman.pdf)|
|244|1986|3|Mahomed Fouad Aintabi|[Ibn Sina: Genius of Arabic–Islamic Civilization](/assets/ijhs/Vol21_3_2_MFAintabi.pdf)|
|245|1986|3|Muhamed Asimov|[The Life and Teachings of Ibn Sina](/assets/ijhs/Vol21_3_3_MAsimov.pdf)|
|246|1986|3|M M Khairullayev|[Some Treatises and Epistles of Ibn Sina](/assets/ijhs/Vol21_3_4_MMKhairullayev.pdf)|
|247|1986|3|K N Pandita|[Central Asian Society in Ibn Sina’s Time](/assets/ijhs/Vol21_3_5_KNPandita.pdf)|
|248|1986|3|Muhamed Asimov|[Poetic and Socio–Ethic Views of Ibn Sina](/assets/ijhs/Vol21_3_6_MAsimov.pdf)|
|249|1986|3|Hakim Mohammed Said|[Ibn Sina as a Scientist](/assets/ijhs/Vol21_3_7_HMSaid.pdf)|
|250|1986|3|A K Bag|[Ibn Sina and Indian Science](/assets/ijhs/Vol21_3_8_AKBag.pdf)|
|251|1986|3|S A A Rizvi|[Ibn Sina’s Impact on the Rational and Scientific Movements in India](/assets/ijhs/Vol21_3_9_SAARizvi.pdf)|
|252|1986|3|Wazir Hsan Abdi|[Ibn Sina’s Critique Mutakallimin’s Atomic Theory](/assets/ijhs/Vol21_3_10_WHAbdi.pdf)|
|253|1986|3|S K Mukherjee and A K Bag|[Report: XVII International Union for History and Philosophy of Science Congress](/assets/ijhs/Vol21_3_11_Report.pdf)|
|254|1986|4|Syed Riyaz ‘Ali Perwaz|[Ibn Sina’s Medical Works](/assets/ijhs/Vol21_4_1_SRAPerwaz.pdf)|
|255|1986|4|M S Khan|[The Section on Cardiac Diseases and Their Treatment in the Qanun of Ibn Sina](/assets/ijhs/Vol21_4_2_MSKhan.pdf)|
|256|1986|4|Tazimuddin Siddiqi|[Ibn Sina on Materia Medica](/assets/ijhs/Vol21_4_3_TSiddiqi.pdf)|
|257|1986|4|G N Chaturvedi and K P Singh|[Impact of Ibn Sina on Pulse Examination and Materia Medica of Medieval Period of Ayurveda](/assets/ijhs/Vol21_4_4_GNChaturvedi.pdf)|
|258|1986|4|M Taiyab|[Physiological Approach of Ibn Sina Towards the Science of Behaviour](/assets/ijhs/Vol21_4_5_MTaiyab.pdf)|
|259|1986|4|P N Pushp|[Ibn Sina on Speech Articulation](/assets/ijhs/Vol21_4_6_PNPushp.pdf)|
|260|1986|4|H S Virk|[Ibn Sina’s Approach to Physics](/assets/ijhs/Vol21_4_7_HSVirk.pdf)|
|261|1986|4|M Shafi|[Contributions of Ibn Sina to Geographical Knowledge](/assets/ijhs/Vol21_4_8_SShafi.pdf)|
|262|1987|2|R P S Tyagi|[Importnace of Studying Veterinary Science Literature in Ancient India](/assets/ijhs/Vol22_2_2_RPSTyagi.pdf)|
|263|1987|2|V K Sharma|[Scope of Study of Veterinary Science Literature in Ancient India](/assets/ijhs/Vol22_2_3_VKSharma.pdf)|
|264|1987|2|Gaya Prasad|[Method of Science used in Past Indian and its Relevance to Present Day Context](/assets/ijhs/Vol22_2_4_GPrasad.pdf)|
|265|1987|2|D N Garo|[Souces of Ancient Indian Literature on Veterinary Sciences](/assets/ijhs/Vol22_2_5_DNGarg.pdf)|
|266|1987|2|K C Satija|[Rural Folk Prescriptions: Plea for Search of Scientific Content](/assets/ijhs/Vol22_2_6_KCSatija.pdf)|
|267|1987|2|R D Rana|[Pharmacy in Ancient India](/assets/ijhs/Vol22_2_7_RDRana.pdf)|
|268|1987|2|V M Mandokhot|[Nutritional and Managerial Practices of Animals in Ancient India](/assets/ijhs/Vol22_2_8_VMMandokhot.pdf)|
|269|1987|2|Usha V Mandokhot|[Breeding Practices and Selection Criteria for Domestication of Animals](/assets/ijhs/Vol22_2_9_UMandokhot.pdf)|
|270|1987|2|S Prasad|[Administrative Recommendation in regard to Upkeeping	Health	and Management of Animals in Ancient India](/assets/ijhs/Vol22_2_10_SPrasad.pdf)|
|271|1987|2|S K Kalra|[Posibilities of relating Modern Veterinary Science Literature to the Growth of Relevant Knowledge in Ancient India](/assets/ijhs/Vol22_2_11_SKKalra.pdf)|
|272|1987|2| R D Sharma	Rakesh Kumar and Sridhar|[Historical Background and Analysis of Scientific Content of Ancient Indian Literature on Practices for the Treatment of Diseases of Domestic Animals](/assets/ijhs/Vol22_2_12_RDSharma.pdf)|
|273|1987|2|S C Dogra|[Antimicrobial Agents used in Ancient India](/assets/ijhs/Vol22_2_13_SCDogra.pdf)|
|274|1987|2||[News](/assets/ijhs/Vol22_2_14_News.pdf)|
|275|1987|4|A S Ramanathan|[Contribution to Weather Science in Ancient India. VIII— Observation and Measurement of Meteorological Parameters in Ancient India](/assets/ijhs/Vol22_4_1_ASRamanathan.pdf)|
|276|1987|4|S Mahdihassan|[Three Important Vedic Grasses](/assets/ijhs/Vol22_4_2_SMahdihassan.pdf)|
|277|1987|4|B C Joshi|[Neurology in Ancient India: Ajna Cakra— A Physiological Reality](/assets/ijhs/Vol22_4_3_BCJoshi.pdf)|
|278|1987|4|R P Kulkarni|[Development of Engineering and Technology in India from 1000 BC to 1000 AD as revealed in Rajatarangini](/assets/ijhs/Vol22_4_4_RPKulkarni.pdf)|
|279|1987|4|R P Kulkarni|[Specifications for Brick Masonry according to Samarangana Sutradhara](/assets/ijhs/Vol22_4_5_RPKulkarni.pdf)|
|280|1987|4|Ved Prakash and B N Mehrotra|[Anthelmintic Plants in Traditional Remedies in India](/assets/ijhs/Vol22_4_6_BNMehrotra.pdf)|
|281|1987|4|Virendra Singh|[Why did the Scientific Revolution take place in Europe and not elsewhere?](/assets/ijhs/Vol22_4_7_VSingh.pdf)|
|282|1987|4|S P Gupta|[Science and Divine Philosophy in the Seventeenth Century Europe](/assets/ijhs/Vol22_4_8_SPGupta.pdf)|
|283|1987|4|R K Trivedi|[Todaramala of Jaipur (A Jaina Philosopher– Mathematician)](/assets/ijhs/Vol22_4_9_RKTrivedi.pdf)|
|284|1989|1|Subhas K Kak|[Some Early Codes and Ciphers](/assets/ijhs/Vol24_1_1_SCKak.pdf)|
|285|1989|1|G Armitage|[The Schlagintweit Collections](/assets/ijhs/Vol24_1_2_GArmitage.pdf)|
|286|1989|1|Parameshwar Jha|[Development of Hindu Astro–Mathematical Sciences in Mithila](/assets/ijhs/Vol24_1_3_PJha.pdf)|
|287|1989|1||[Book Review](/assets/ijhs/Vol24_1_4_BookReview.pdf)|
|288|1989|1||[Supplement: Rasa Ratna Sammuccaya](/assets/ijhs/Vol24_1_5_Supplement.pdf)|
|289|1989|2|Syed Aftab Husain Rizvi|[Seth Ward and Ghulam Husain’s Problem for Determining the Place of a Planet](/assets/ijhs/Vol24_2_1_SAHRizvi.pdf)|
|290|1989|2|Sita Ramaseshan|[The History of Paper in India Upto 1948](/assets/ijhs/Vol24_2_2_SSeshan.pdf)|
|291|1989|2|Benon Zb Szalek|[Evidence for Proto–Indian Origin of the Easter Island Writing System](/assets/ijhs/Vol24_2_3_BSzalek.pdf)|
|292|1989|2||[Book Review](/assets/ijhs/Vol24_2_4_BookReviews.pdf)|
|293|1989|2||[Supplement: Rasa Ratna Sammuccaya](/assets/ijhs/Vol24_1_5_Supplement.pdf)|
|294|1989|4|K S Shukla|[The Yuga of the Yavanajataka–David Pingree’s Text and Translation Reviewed](/assets/ijhs/Vol24_4_1_KSShukla.pdf)|
|295|1989|4|Biman Sen|[Development of Technical Education in India and State Policy—A Historical Perspective](/assets/ijhs/Vol24_4_2_BSen.pdf)|
|296|1989|4|T R Chandrasekhar|[Non–Euclidean Geometry from Early Times to Beltrami](/assets/ijhs/Vol24_4_3_TRChandrasekhar.pdf)|
|297|1989|4|S N Sen|[Madras Meridian Circle Observations of Fixed Stars during 1862–1887](/assets/ijhs/Vol24_4_4_SNSen.pdf)|
|298|1989|4|Late M C Mallick|[A Survey of Research and Development in Electronics and Telecommunication in India Over a Century (1850–1950)](/assets/ijhs/Vol24_4_5_MCMallik.pdf)|
|299|1989|4|Aparajito Basu|[Chemical Research in India During Nineteenth Century](/assets/ijhs/Vol24_4_6_ABasu.pdf)|
|300|1989|4|Vijaya Lakshmi Sharma and H C Bhardwaj|[Weighing Devices in Ancient India](/assets/ijhs/Vol24_4_7_VLSharma.pdf)|
|301|1989|4|S Mahdihassan|[The Five Souls of Indian Medicine](/assets/ijhs/Vol24_4_8_SMahadihassan.pdf)|
|302|1989|4|C K Majumdar|[Book Review](/assets/ijhs/Vol24_4_9_BookReview.pdf)|
|303|1989|4|S N Sen|[Report: Seminar on Astronomy and Mathematics in Ancient and Medieval India](/assets/ijhs/Vol24_4_10_Report.pdf)|
|304|1989|4||[Supplement: Rasa Ratna Sammuccaya](/assets/ijhs/Vol24_4_11_Supplement.pdf)|
|305|1990|1to4|S Mahdihassan|[The Phases of Magic Square of Three](/assets/ijhs/Vol25_1to4_1_SMahdihassan.pdf)|
|306|1990|1to4|A K Bag|[Ritual Geometry in India and its Parallelism in Other Cultures](/assets/ijhs/Vol25_1to4_2_AKBag.pdf)|
|307|1990|1to4|M S Khan|[Ali Ibn Rabban At Tabari‚ A Ninth Century Arab Physician	on the Ayurveda](/assets/ijhs/Vol25_1to4_3_MSKhan.pdf)|
|308|1990|1to4|Virendra Nath Sharma|[Zij–I–Muhammad and the Tables of De La Hire](/assets/ijhs/Vol25_1to4_4_VNSharma.pdf)|
|309|1990|1to4||[News](/assets/ijhs/Vol25_1to4_5_NewsProjectsapprovedNewpublication.pdf)|
|310|1990|1to4||[Supplement—Laghumanasa of Manjula](/assets/ijhs/Vol25_1to4_6_SupplementLaghumanasa.pdf)|
|311|1991|2|K T Achaya|[Alcoholic Fermentation and its Products in Ancient India](/assets/ijhs/Vol26_2_1_KTAcharya.pdf)|
|312|1991|2|S Mahadihassan|[The Word Kohala in Susruta and Term Alcool–Vini of Paracelsus](/assets/ijhs/Vol26_2_2_SMahdihassan.pdf)|
|313|1991|2|Mira Ray|[Minerals and Gems in Indian Alchemy](/assets/ijhs/Vol26_2_3_MRay.pdf)|
|314|1991|2|M Chaudhuri|[Arbori–Horticulture: As Known in the Puranas](/assets/ijhs/Vol26_2_4_MChaudhuri.pdf)|
|315|1991|2|H K Naqvi|[Dyeing Agents in India A D 1200–1800](/assets/ijhs/Vol26_2_5_HKNaqvi.pdf)|
|316|1991|2|K V Sarma and S Hariharan|[Yuktibhasa of Jyesthadeva](/assets/ijhs/Vol26_2_6_KVSarma.pdf)|
|317|1991|2|V N Sharma|[The Kapala Yantras of Sawai Jai Singh](/assets/ijhs/Vol26_2_7_VNSharma.pdf)|
|318|1991|2|A K Saxena‚ A Vagiswari and M Manjula|[Optical Glass: Its Manufacture in India— A Historical Perspective](/assets/ijhs/Vol26_2_8_AKSaxena.pdf)|
|319|1991|2|S M R Ansari|[News: Seminar on Indian Astronomy and Jai Singh— A Report](/assets/ijhs/Vol26_2_9_NewsIHCongress.pdf)|
|320|1991|3|P V Sharma|[An Anonymous Treatise on Pathyapathya](/assets/ijhs/Vol26_3_1_PVSharma.pdf)|
|321|1991|3|V N Sharma|[Precision Instruments of Sawai Jai Singh](/assets/ijhs/Vol26_3_2_VNSharma.pdf)|
|322|1991|3|A Karbelashvili|[Europe–India Telegraph “Bridge” via the Caucasus](/assets/ijhs/Vol26_3_3_AKarbelashvili.pdf)|
|323|1991|3|P K Basu|[Newton’s Physics in the Context of His Works on Chemistry and Alchemy](/assets/ijhs/Vol26_3_4_PKBasu.pdf)|
|324|1991|3||[Supplement: Rasa Ratna Samuccaya (Part II)](/assets/ijhs/Vol26_3_5_SupplementRasaratnasamucchaya.pdf)|
|325|1992|1|S Mahdihassan|[The Five Elements of Chinese Cosmology in the Light of Dialectism](/assets/ijhs/Vol27_1_1_SMahdihassan.pdf)|
|326|1992|1|K T Acharya|[Indian Oilpress (Ghani)](/assets/ijhs/Vol27_1_2_KTAchaya.pdf)|
|327|1992|1|Nirmal Saxena|[Yogaratnakara— An Important Source Book in Medicine](/assets/ijhs/Vol27_1_3_NSaxena.pdf)|
|328|1992|1|Kafil Ahmed Chowdhury|[Krsi– Parasara](/assets/ijhs/Vol27_1_4_KAChowdhury.pdf)|
|329|1992|1|Bibhutibhusan Datta and Awadhesh Narayan Singh|[Magic Squares in India](/assets/ijhs/Vol27_1_5_BDatta.pdf)|
|330|1992|2|Vijaya Deshpande|[Vangastambhanasodhanam: A Chapter on Metallurgy of Tin in Sanskrit Alchemical Text ‘Rasopanisad’](/assets/ijhs/Vol27_2_1_VDeshpande.pdf)|
|331|1992|2|A Jan Qaisar|[Horseshoeing in Mughal India](/assets/ijhs/Vol27_2_2_AJQaisar.pdf)|
|332|1992|2|Makrand Mehta|[Science versus Technology: The Early Years of Kala Bhawan	Baroda 1890–1896](/assets/ijhs/Vol27_2_3_MMehta.pdf)|
|333|1992|2|Jagdish N Sinha|[Origin of India's National Science Policy: M L Sircar to M K Gandhi	1875–1935](/assets/ijhs/Vol27_2_4_JNSinha.pdf)|
|334|1992|2|Deepak Kumar|[Book Review](/assets/ijhs/Vol27_2_5_BookReviews.pdf)|
|335|1992|2||[New Publications](/assets/ijhs/Vol27_2_6_NewPublications.pdf)|
|336|1992|3|J C Sikdar|[Fabric of Life: Paryapati Pranapana in Jaina Agama](/assets/ijhs/Vol27_3_1_JCSikdar.pdf)|
|337|1992|3|Bibhutibhusan Datta and Awadhesh Narayan Singh|[Use of Permutations and Combinations in India](/assets/ijhs/Vol27_3_2_BDatta.pdf)|
|338|1992|3|Radha Krishnamurthy|[Gemmology in Ancient India](/assets/ijhs/Vol27_3_3_RKrishnamurthy.pdf)|
|339|1992|3|Aftab Saeed|[Study of Muslim Alchemy in the Medieval Ages & some Valuable Chemicals Transmitted to Modern Chemistry](/assets/ijhs/Vol27_3_4_ASaeed.pdf)|
|340|1992|3|D K Mittra|[Role of Ram Bramha Sanyal in Initiating Zoological Researches on the Animals in Captivity](/assets/ijhs/Vol27_3_5_DKMittra.pdf)|
|341|1992|3|Amitabha Ghosh|[The First Indian Aeronaut](/assets/ijhs/Vol27_3_6_AGhosh.pdf)|
|342|1992|3||[News](/assets/ijhs/Vol27_3_7_News.pdf)|
|343|1992|3|D Joshi|[Supplement: Rasa Ratna Samuccaya](/assets/ijhs/Vol27_3_8_Supplement_RasaRatnaSamuccaya.pdf)|
|344|1992|4|S N Sen|[Factors in the Develoment of Scientific Research in India between 1906 and 1930](/assets/ijhs/Vol27_4_1_SNSen.pdf)|
|345|1992|4|J N Kapur|[Development of Mathematical Sciences in India during the Twentieth Century](/assets/ijhs/Vol27_4_2_JNKapur.pdf)|
|346|1992|4|H N Bose|[Luminescence and Allied Phenomena](/assets/ijhs/Vol27_4_3_HNBose.pdf)|
|347|1992|4|C K Majumdar|[Solid State Physics: 1900–1980](/assets/ijhs/Vol27_4_4_CKMajumdar.pdf)|
|348|1992|4|A K Raychaudhuri|[Pattern of Research in India on Theoritical Astronomy and Astrophysics during period 1900–1980](/assets/ijhs/Vol27_4_5_AKRaychaudhuri.pdf)|
|349|1992|4|A K Saha|[Evolution of Continental Crust of India: Growth of Knowledge. 1900–1980 — A Review](/assets/ijhs/Vol27_4_6_AKSaha.pdf)|
|350|1992|4|S K Mukherjee|[Progress in Indian Agriculture: 1900–1980](/assets/ijhs/Vol27_4_7_SKMukherjee.pdf)|
|351|1992|4|R C Mehrotra|[Development of Inorganic Chemistry in India during 1900–1980](/assets/ijhs/Vol27_4_8_RCMehrotra.pdf)|
|352|1992|4|S K Mukerjee|[Mineral Exploration in the Twentieth Century](/assets/ijhs/Vol27_4_9_SKMukerjee.pdf)|
|353|1992|4|J Das|[Progress in Telecommunications and R & D during Post–war Years (1945–84) — A Review](/assets/ijhs/Vol27_4_10_JDas.pdf)|
|354|1992|4|R R Daniel|[Space Science in India](/assets/ijhs/Vol27_4_11_RRDaniel.pdf)|
|355|1992|4||[Book Review](/assets/ijhs/Vol27_4_12_BookReviews.pdf)|
|356|1992|4||[Orbituary: S N Sen](/assets/ijhs/Vol27_4_13_Obituary_SNSen.pdf)|
|357|1992|4||[Erratum](/assets/ijhs/Vol27_4_16_Erratum.pdf)|
|358|1992|4||[Supplement: Bibliography of Physics	Astronomy	Astrophysics and Geophysics in India](/assets/ijhs/Vol27_4_17_SupplementBibliographyofPhysics.pdf)|
|359|1993|2|Subhash C Kak|[The Structure of the Rgveda](/assets/ijhs/Vol28_2_1_SCKak.pdf)|
|360|1993|2|R C Gupta|[Sundararaja’s Improvements of Vedic Circle–Square Conversions](/assets/ijhs/Vol28_2_2_RCGupta.pdf)|
|361|1993|2|B Datta and A N Singh|[Use of Series in India](/assets/ijhs/Vol28_2_3_BDatta.pdf)|
|362|1993|2|V N Sharma|[Sawai Jai Singh’s Hindu Astronomers](/assets/ijhs/Vol28_2_4_VNSharma.pdf)|
|363|1993|2|Raymond Mercier|[Account by Joseph Dubois of Astronomical Work under Jai Singh Sawai](/assets/ijhs/Vol28_2_5_RMercier.pdf)|
|364|1993|2|Amitabha Ghosh|[Golak Chandra: India’s Pioneer Innovator Technician](/assets/ijhs/Vol28_2_6_AGhosh.pdf)|
|365|1993|2|J N Kapur|[Book Review: Glimpses of India’s Statistical Heritage by J K Ghosh‚ S K Mitra and K R Parthasarthy](/assets/ijhs/Vol28_2_7_BookReview.pdf)|
|366|1993|2||[Supplement](/assets/ijhs/Vol28_2_8_SupplementBiblographyofPhysics.pdf)|
|367|1993|3|Yukio Ohashi|[Development of Astronomical Observation in Vedic and Post–Vedic India](/assets/ijhs/Vol28_3_1_YOhashi.pdf)|
|368|1993|3|B Datta and A N Singh|[Surds in Hindu Mathematics](/assets/ijhs/Vol28_3_2_BDatta.pdf)|
|369|1993|3|B Datta and A N Singh|[Approximate Values of Surds in Hindu Mathematics](/assets/ijhs/Vol28_3_3_BDatta.pdf)|
|370|1993|3|H S Virk|[Life and Works of Puran Singh](/assets/ijhs/Vol28_3_4_HSVirk.pdf)|
|371|1993|3||[News](/assets/ijhs/Vol28_3_5_News)|
|372|1993|4|P S Filliozat|[Formalisation and Orality in Panini’s Astadhyayi](/assets/ijhs/Vol28_4_1_PSFilliozat.pdf)|
|373|1993|4|L C Jain and K P Jain|[Constant–Set (Dhruva–Rasi) Technique in Jaina School of Astronomy](/assets/ijhs/Vol28_4_2_LCJain.pdf)|
|374|1993|4|A K Biwas|[The Primacy of India in Ancient Brass and Zinc Metallurgy](/assets/ijhs/Vol28_4_3_AKBiswas.pdf)|
|375|1993|4||[Book Reviews](/assets/ijhs/Vol28_4_4_BookReviewsAKBiswasAndARahman.pdf)|
|376|1993|4||[Supplement](/assets/ijhs/Vol28_4_5_SupplementBibliographyofPhysics.pdf)|
|377|1994|1|Deepak Kumar|[Calcutta: The Emergence of a Science City (1784–1856)](/assets/ijhs/Vol29_1_1_DKumar.pdf)|
|378|1994|1|Saroj Ghose|[William O’Shaughnessy – An Innovator and Entrepreneur](/assets/ijhs/Vol29_1_2_SGhose.pdf)|
|379|1994|1|Manidipa Kahali|[John Henry Pratt‚ Archdeacon of Calcutta and His Theory of Isostatic Compensation](/assets/ijhs/Vol29_1_3_MKahali.pdf)|
|380|1994|1|Debasis Bose|[Madhusudan Gupta](/assets/ijhs/Vol29_1_4_DBose.pdf)|
|381|1994|1|S N Sen|[The Pioneering Role of Calcutta in Scientific and Technical Education in India](/assets/ijhs/Vol29_1_5_SNSen.pdf)|
|382|1994|1|S C Ghosh|[Calcutta University and Science](/assets/ijhs/Vol29_1_6_SCGhosh.pdf)|
|383|1994|1|Amitabha Ghosh|[Some Eminent Indian Pioneers in the Field of Technology](/assets/ijhs/Vol29_1_7_AGhosh.pdf)|
|384|1994|1|Arun Kumar Biswas|[Reverend Father Eugene Lafont and the Scientific Activity of St Xaviers College](/assets/ijhs/Vol29_1_8_AKBiswas.pdf)|
|385|1994|1|J K Ghosh|[Mahalanobis and the Art and Science of Statistics: The Early Days](/assets/ijhs/Vol29_1_9_JKGhosh.pdf)|
|386|1994|1|Santimay Chatterjee|[Meghnad Saha – The Scientist and the Institution Builder](/assets/ijhs/Vol29_1_10_SChatterjee.pdf)|
|387|1994|1|Debiprasad Chattopadhyay|[Four Calcuttans in Defence of Scientific Temper](/assets/ijhs/Vol29_1_11_DChattopadhyaya.pdf)|
|388|1994|1||[News](/assets/ijhs/Vol29_1_12_News.pdf)|
|389|1994|1|Mahendralal Sircar|[Supplement: On the Desirability of a National Institution for the Cultivation of the Sciences by the Natives of India (1872–1876)](/assets/ijhs/Vol29_1_13_Supplement.pdf)|
|390|1994|2|Arun Kumar Biswas|[Vaidurya‚ Marakata and Other Beryl Family Gem Minerals: Etymology and Traditions in Ancient India](/assets/ijhs/Vol29_2_2_AKBiswas.pdf)|
|391|1994|2|Yukio Ohashi|[Astronomical Instruments in Classical Siddhantas](/assets/ijhs/Vol29_2_3_YOhashi.pdf)|
|392|1994|2|Vijaya Deshpande|[Sulbarakalikacchedah: Medieval Methods for Cleansing Metal Surfaces and Removing Tarnishes](/assets/ijhs/Vol29_2_4_VDeshpande.pdf)|
|393|1994|2|Manonmani Filliozat|[D’Apres De Mannevillette Captain and Hydrographer to the French East India Company (1707–1780)](/assets/ijhs/Vol29_2_5_MFilliozat.pdf)|
|394|1994|2||[News](/assets/ijhs/Vol29_2_6_News.pdf)|
|395|1994|3|S K Bhatia|[Carburisation of Iron in Ancient India](/assets/ijhs/Vol29_3_1_SKBhatia.pdf)|
|396|1994|3|N G Dongre|[Metrology and Coinage in Ancient India and Contemporary World](/assets/ijhs/Vol29_3_2_NGDongre.pdf)|
|397|1994|3|Subhash C Kak|[Evolution of Early Writing in India](/assets/ijhs/Vol29_3_3_SCKak.pdf)|
|398|1994|3|Arun Kumar Biswas|[Gem—Minerals in Pre–Modern India](/assets/ijhs/Vol29_3_4_AKBiswas.pdf)|
|399|1994|3|Vijaya Ramaswamy|[Metallurgy and Traditional Metal Crafts in Tamil Nadu](/assets/ijhs/Vol29_3_5_VRamaswamy.pdf)|
|400|1994|3|Virendra Nath Sharma|[Misra Yantra of the Delhi Observatory](/assets/ijhs/Vol29_3_6_VNSharma.pdf)|
|401|1994|3|A K Chakravarty|[Obituary: Debiprasad Chattopadhaya](/assets/ijhs/Vol29_3_7_Obituary.pdf)|
|402|1994|3||[News](/assets/ijhs/Vol29_3_8_News.pdf)|
|403|1994|4|Davis Frawley|[Planets in the Vedic Literature](/assets/ijhs/Vol29_4_1_DFrawley.pdf)|
|404|1994|4|Sreeramula Rajeswara Sarma|[Indian Astronomical and Time–Measuring Instruments: A Catalogue in Preparation](/assets/ijhs/Vol29_4_2_SRSarma.pdf)|
|405|1994|4|S Das|[Solutions of Linear Algebraic Equations and Sums of Fraction–Additions Using Sutra Method](/assets/ijhs/Vol29_4_3_SDas.pdf)|
|406|1994|4|V N Jha|[Indeterminate Analysis in the Context of the Mahasiddhanta of Aryabhata II](/assets/ijhs/Vol29_4_4_VNJha.pdf)|
|407|1994|4|Arun Kumar Biswas|[Iron and Steel in Pre–Modern India—A Critical Review](/assets/ijhs/Vol29_4_5_AKBiswas.pdf)|
|408|1994|4|N G Dongre|[Dhvantapramapaka Yantra of Maharsi Bharadvaja](/assets/ijhs/Vol29_4_6_NGDongre.pdf)|
|409|1994|4||[News](/assets/ijhs/Vol29_4_9_News.pdf)|
|410|1995|1|J Donald Hughes|[The Effect of Knowledge of Indian Biota on Ecological Thought](/assets/ijhs/Vol30_1_1_JDHughes.pdf)|
|411|1995|1|Paul Manansala|[Sungka Mathematics ofg the Philippines](/assets/ijhs/Vol30_1_2_PManansala.pdf)|
|412|1995|1|N C Rana and R K Kochhar|[On The Meaning of the Mula Naksatra](/assets/ijhs/Vol30_1_3_NCRana.pdf)|
|413|1995|1|A Mukhopadhyay and M R Adhikari|[Polygonal Approximation to Circle and Madhavacarya](/assets/ijhs/Vol30_1_4_AMukhopadhyay.pdf)|
|414|1995|1|Jane Insley|[Making Mountains out of Molehills? George Everest and Henry Barrow	1830-39](/assets/ijhs/Vol30_1_5_JInsley.pdf)|
|415|1995|1|L C Jain and Kumari Prabha Jain|[The Method for Finding out the Number of Moons and their Families in the Tiloyapannatti](/assets/ijhs/Vol30_1_6_LCJain.pdf)|
|416|1995|1||[Book Review](/assets/ijhs/Vol30_1_7_BookReview.pdf)|
|417|1995|1||[A National Report on Studies in HOS in India (1990-93)](/assets/ijhs/Vol30_1_8_ReviewReport.pdf)|
|418|1996|2|P V Sharma|[Original Concept of Soma](/assets/ijhs/Vol31_2_1_PVSharma.pdf)|
|419|1996|2|K H Krishnamurthy|[A Botanical Account of Valmiki’s Pancavati](/assets/ijhs/Vol31_2_2_KHKrishnamurthy.pdf)|
|420|1996|2|V Mishra and S L Singh|[Theorem of Square on the Diagonal in Vedic Geometry and its Application](/assets/ijhs/Vol31_2_3_VMishra.pdf)|
|421|1996|2|Lallanji Gopal|[Emergence of Vrksayurveda](/assets/ijhs/Vol31_2_4_LGopal.pdf)|
|422|1996|2|David Pingree|[Sanskrit Geographical Tables](/assets/ijhs/Vol31_2_5_DPingree.pdf)|
|423|1996|2||[News](/assets/ijhs/Vol31_2_6_NewsMonographPublications.pdf)|
|424|1996|4|Malati J Shendge|[Beginning of Scientific Observations: Founding of Linguistic Science in India](/assets/ijhs/Vol31_4_1_MJShendge.pdf)|
|425|1996|4|Radha Krishnamurthy|[Water in Ancient India](/assets/ijhs/Vol31_4_2_RKrishnamurthy.pdf)|
|426|1996|4|S Das|[Multiplication and Divisibility of Numbers – The Sutra Way](/assets/ijhs/Vol31_4_3_SDas.pdf)|
|427|1996|4|Vijaya Jayant Deshpande|[Musavijnana or the Ancient Science of Crucibles](/assets/ijhs/Vol31_4_4_VJDeshpande.pdf)|
|428|1996|4|M K Chandrashekaran and R Subbaraj|[JC Bose’s Views on Biological Rhythms](/assets/ijhs/Vol31_4_5_MKChandrashekaran.pdf)|
|429|1996|4|N C Shah|[Norman Gill: The Pioneer Horticulturist of the Hills of Uttar Pradesh – A Tribute](/assets/ijhs/Vol31_4_6_NCShah.pdf)|
|430|1996|4||[Book Review‚ Current Excerpts on History of Science and News](/assets/ijhs/Vol31_4_7_BookReview.pdf) &#128148;|
|431|1997|2|Subhash C Kak|[On th Science of Consciousness in Ancient India](/assets/ijhs/Vol32_2_1_SCKak.pdf)|
|432|1997|2|Honor Frost|[Stone Anchors: The Need for Methodical Recording](/assets/ijhs/Vol32_2_2_HFrost.pdf)|
|433|1997|2|V Mishra and S L Singh|[First Degree Indeterminate Analysis in Ancient India and its Application by Virasena](/assets/ijhs/Vol32_2_3_VMishra.pdf)|
|434|1997|2|George Abraham|[Variable Radius Epicycle Model](/assets/ijhs/Vol32_2_4_GAbraham.pdf)|
|435|1997|2|Amitabha Ghosh|[Guru Jones—A Private Engineer in the Colonial Trap](/assets/ijhs/Vol32_2_5_AGhosh.pdf)|
|436|1997|2|K V Sarma|[In Quests of Early Manuscripts/ Collections Dealing with Science and Technology in India](/assets/ijhs/Vol32_2_6_KVSarma.pdf)|
|437|1997|2|Chittabrata Palit|[Book Review: Technology and the Raj by Roy McLeod and Deepak Kumar](/assets/ijhs/Vol32_2_7_BookReview.pdf)|
|438|1997|2||[News](/assets/ijhs/Vol32_2_8_NewsIndoPortuguesePublicationsonHOS.pdf)|
|439|1997|3|K Chandra Hari|[True Rationale of Surya Siddhanta](/assets/ijhs/Vol32_3_1_KCHari.pdf)|
|440|1997|3|S R Sarma|[Some Medieval Arithmetical Tables](/assets/ijhs/Vol32_3_2_SRSarma.pdf)|
|441|1997|3|Yukio Ohashi|[Early History of the Astrolabe in India](/assets/ijhs/Vol32_3_3_YOhashi.pdf)|
|442|1997|3|A M Shastri|[Book Review: Minerals and Metals in Ancient India by A K Biswas](/assets/ijhs/Vol32_3_4_BookReview.pdf)|
|443|1997|4|Subhash C Kak|[Three old Indian Values of Π](/assets/ijhs/Vol32_4_1_SCKak.pdf)|
|444|1997|4|V M Mallayya|[Arithmetic Operation of Division with Special Reference to Bhaskara II’s Lilavati and its Commentaries](/assets/ijhs/Vol32_4_2_VMMallayya.pdf)|
|445|1997|4|SK Chatterjee|[Balinese Traditional Calendar](/assets/ijhs/Vol32_4_3_SKChatterjee.pdf)|
|446|1997|4|B Raghunatha Rao and B Sasisekaran|[Guttur – An Iron Age Industrial Centre in Dharmapuri District](/assets/ijhs/Vol32_4_4_BRRao.pdf)|
|447|1997|4|Nirmal Saxena|[Lolimbaraja and his Contribution to Medicine](/assets/ijhs/Vol32_4_5_NSaxena.pdf)|
|448|1997|4|K S Matthew|[The Portugese and the Study of Medicinal Plants in India in the Sixteenth Century](/assets/ijhs/Vol32_4_6_KSMathew.pdf)|
|449|1997|4||[Book Reviews](/assets/ijhs/Vol32_4_7_BookReviewaAndSRSarma.pdf)|
|450|1997|4||[News](/assets/ijhs/Vol32_4_8_NewsMagicSquare.pdf)|
|451|1998|1|Swapan Kumar Adhikari|[Babylonian Mathematics](/assets/ijhs/Vol33_1_1_SKAdhikari.pdf)|
|452|1998|1|Subhash C Kak|[Vena‚ Veda‚ Venus](/assets/ijhs/Vol33_1_2_SCKak.pdf)|
|453|1998|1|Subhash C Kak|[Sayana’s Astronomy](/assets/ijhs/Vol33_1_3_SCKak.pdf)|
|454|1998|1|Sunil Sen Sarma|[Contemporaneity of the Perception on Environment in Kautilya’s Arthasastra](/assets/ijhs/Vol33_1_4_SSSarma.pdf)|
|455|1998|1|S K Jain|[Some Aspects of Biodiversity and Indian Traditions](/assets/ijhs/Vol33_1_5_SKJain.pdf)|
|456|1998|1|SJ Job Kozhamthadam|[Kepler and the Origin of Modern Science](/assets/ijhs/Vol33_1_6_SJJKozhamthadam.pdf)|
|457|1998|1||[Publication on History of Science](/assets/ijhs/Vol33_1_7_PublicationonHOS.pdf)|
|458|1998|1|K V Sarma and V S Narasimhan|[Supplement: Tantrasamgraha of Nilakantha Somayaji](/assets/ijhs/Vol33_1_8_Supplement.pdf)|
|459|1998|2|Subhash C Kak|[Early Theories on the Distance to the Sun](/assets/ijhs/Vol33_2_1_SCKak.pdf)|
|460|1998|2|B N Narahari Achar|[Enigma of the Five–Year Yuga of Vedanga Jyotisa](/assets/ijhs/Vol33_2_2_BNNAchar.pdf)|
|461|1998|2|Srinivas Madabhushi and P Srirama Murty|[Seismological Zones of Varahamihira](/assets/ijhs/Vol33_2_3_SMadabhushi.pdf)|
|462|1998|2|A Mukhopadhyay and M R Adhikari|[A Step Towards Incommensurability of Π and Bhaskara (I): An Episode of the Sixth Century AD](/assets/ijhs/Vol33_2_4_AMukhopadhyay.pdf)|
|463|1998|2|Smritikumar Sarkar|[Indian Craft Technology: Static or Changing – A Case Study of the Kansari’s Craft in Bengal‚ 16th to 18th Centuries](/assets/ijhs/Vol33_2_5_SSarkar.pdf)|
|464|1998|2|S K Chatterjee|[Traditional Calender of Myanmar (Burma)](/assets/ijhs/Vol33_2_6_SKChatterjee.pdf)|
|465|1998|2|R S J Reddy|[News: A Non–Conventional Formula to Calculate the Area of Circle](/assets/ijhs/Vol33_2_7_News.pdf)|
|466|1998|2||[Projects Approved and Renewed by the Indian National Commission for History of Science](/assets/ijhs/Vol33_2_8_ProjectsApproved.pdf)|
|467|1998|2||[Academy Publications on History of Science](/assets/ijhs/Vol33_2_9_AcademyPublicationsofHOS.pdf)|
|468|1998|2|K V Sarma and V S Narasimhan|[Supplement: Tantrasamgraha of Nilakantha Somayaji](/assets/ijhs/Vol33_2_10_Supplement.pdf)|
|469|1998|4|K Chandra Hari|[On the Origin of Sidereal Zodiac and Astronomy](/assets/ijhs/Vol33_4_1_KCHari.pdf)|
|470|1998|4|Priyadarsan Sensarma|[Conservation of Biodiversity in Manu–Samhita](/assets/ijhs/Vol33_4_2_PSensarma.pdf)|
|471|1998|4| N G Dongre	S K Malavia and P ramachandra Rao|[Prakasa Stambhanabhida Lauha of Maharsi Bharadvaja](/assets/ijhs/Vol33_4_3_NGDongre.pdf)|
|472|1998|4|Chittabrata Palit|[Dr Mahendralal Sircar and Homeopathy](/assets/ijhs/Vol33_4_4_CPalit.pdf)|
|473|1998|4||[Academy Publications on History of Science](/assets/ijhs/Vol33_4_5_AcademysPublicationsonHOS.pdf)|
|474|1998|4||[News](/assets/ijhs/Vol33_4_6_News.pdf)|
|475|1998|4|Yukio Ohashi|[Supplement: The Cylindrical Sundial in India](/assets/ijhs/Vol33_4_7_Supplement.pdf)|
|476|1999|2|J S Pettersson|[Indus Numerals on Metal Tools](/assets/ijhs/Vol34_2_1_JSPettersson.pdf)|
|477|1999|2|B N Narahari Achar|[On An Astronomical Concept in Visnupurana](/assets/ijhs/Vol34_2_2_BNNAchar.pdf)|
|478|1999|2|Subhash Kak|[The Solar Numbers in Angkor Wat](/assets/ijhs/Vol34_2_3_Skak.pdf)|
|479|1999|2|Dileep Kumar Kanjilal|[A Note On The Vrksayurveda of Parasara](/assets/ijhs/Vol34_2_4_DKKanjilal.pdf)|
|480|1999|2|K Chandra Hari|[Intricacy of The Siddhantic Solar Year](/assets/ijhs/Vol34_2_5_KCHari.pdf)|
|481|1999|2|Sreeramula Rajeswara Sarma|[Yantraraja: The Astrolabe in Sanskrit](/assets/ijhs/Vol34_2_6_SRSarma.pdf)|
|482|1999|2||[Book Reviews](/assets/ijhs/Vol34_2_7_BookReviews.pdf)|
|483|1999|2||[News](/assets/ijhs/Vol34_2_8_News.pdf)|
|484|1999|2||[Academy Publications on HOS](/assets/ijhs/Vol34_2_9_AcademyPublicationsonHOS.pdf)|
|485|1999|4|B Sasisekaran and B Raghunatha Rao|[Technology of Iron and Steel in Kodumal— An Ancient Industrial Centre in Tamil Nadu](/assets/ijhs/Vol34_4_1_BSasisekaran.pdf)|
|486|1999|4|Sreeramula Rajeswara Sarma|[Katapayadi Notation on a Sanskrit Astrolabe](/assets/ijhs/Vol34_4_2_SRSarma.pdf)|
|487|1999|4|Sandeep Garg et al.|[Dams— Engineering Analysisof Alternatives](/assets/ijhs/Vol34_4_3_SGarg.pdf)|
|488|1999|4|R K Kochhar|[Science in British India](/assets/ijhs/Vol34_4_4_RKKochhar.pdf)|
|489|1999|4||[Book Review](/assets/ijhs/Vol34_4_5_BookReview.pdf)|
|490|1999|4||[News](/assets/ijhs/Vol34_4_6_News.pdf)|
|491|1999|4|H S Sharma|[Supplement— Rasendramangalam of Nagarjuna](/assets/ijhs/Vol34_4_7_Supplement_Rasendramangalam.pdf)|
|492|2000|1|B N N Achar|[On The Astronomical Basis of the Date of Satapatha Brahmana: A Re–Examination of Dikshit's Theory](/assets/ijhs/Vol35_1_1_BNNAchar.pdf)|
|493|2000|1|K Chandra Hari|[Date of the Solar Orbit of Satapatha Brahmana](/assets/ijhs/Vol35_1_2_KCHari.pdf)|
|494|2000|1|P Sensarma|[Dietary Diversity in Manu–Samhita](/assets/ijhs/Vol35_1_3_PSensarma.pdf)|
|495|2000|1|B V Dalen|[Origin of the Mean Motion Tables of Jai Singh](/assets/ijhs/Vol35_1_4_BvDalen.pdf)|
|496|2000|1|H Singh|[Pharmaceutical Society of India: The oldest Indian Pharmaceutical Organisation](/assets/ijhs/Vol35_1_5_HSingh.pdf)|
|497|2000|1||[Book Reviews](/assets/ijhs/Vol35_1_6_BookReviews.pdf)|
|498|2000|1||[Notices](/assets/ijhs/Vol35_1_7_Notices.pdf)|
|499|2000|3|B N N Achar|[A Case for Revising the Date of Vedanga Jyotisa](/assets/ijhs/Vol35_3_1_BNNAchar.pdf)|
|500|2000|3|K D Abhyankar|[Babylonian Source of Aryabhata’s Planetary Constants](/assets/ijhs/Vol35_3_2_KDAbhyankar.pdf)|
|501|2000|3|T Hayashi|[Govindaswamin’s Arithmetic Rules Cited in the Kriyakramakari of Sankara and Narayana](/assets/ijhs/Vol35_3_3_THayashi.pdf)|
|502|2000|3|V N Sharma|[Astronomical Instruments at Kota](/assets/ijhs/Vol35_3_4_VNSharma.pdf)|
|503|2000|3|Irfan Habib|[Joseph Needham and the History of Indian Technology](/assets/ijhs/Vol35_3_5_IHabib.pdf)|
|504|2000|3||[Book Reviews](/assets/ijhs/Vol35_3_6_BookReviews.pdf)|
|505|2000|3||[Notices](/assets/ijhs/Vol35_3_7_Notices.pdf)|
|506|2000|3|A N Thakur|[Conferences: NISTADS INSA Workshop on History of Science in India](/assets/ijhs/Vol35_3_8_Conferences.pdf)|
|507|2002|3|K D Abhyankar|[On Two Important Provisions in Vedanga&ndash Jyotisa](/assets/ijhs/Vol37_3_1_KDAbhyankar.pdf)|
|508|2002|3|K Chandra Hari|[Date of Haridatta‚ Promulgator of the Prahita System of Astronomy in Kerala](/assets/ijhs/Vol37_3_2_KCHari.pdf)|
|509|2002|3|Dipak Jadhav|[Nemicandra’s Rule for the Volume of a Sphere](/assets/ijhs/Vol37_3_3_DJadhav.pdf)|
|510|2002|3|S M R Ansari|[Practical Astronomy in Indo–Persian Sources](/assets/ijhs/Vol37_3_4_SMRAnsari.pdf)|
|511|2002|3|Ravinder Singh|[Sir CV Raman‚ Dame Kathleen Lonsdale and their Scientific Controversy due to the Diffuse Spots in X–ray Photographs](/assets/ijhs/Vol37_3_5_RSingh.pdf)|
|512|2002|3|N Kumar|[Book Review: Ayurvedic remedies for the whole family](/assets/ijhs/Vol37_3_6_BookReview.pdf)|
|513|2002|3|Shabnam Shukla|[Project Report: Shipping and ship building in India– Medieval Period](/assets/ijhs/Vol37_3_7_ProjectReport.pdf)|
|514|2002|3|Shabnam Shukla‚ S K Chatterjee|[Orbituary: Apurba Kumar Chakravarty](/assets/ijhs/Vol37_3_8_Obituary.pdf)|
|515|2002|3||[Notice of Journals](/assets/ijhs/Vol37_3_9_NoticeofJournals.pdf)|
|516|2002|3|B K Sen|[Supplement: Growth of Scientific Periodicals in India (1788– 1900)](/assets/ijhs/Vol37_3_10_SupplementScientificPeriodicalsBKSen.pdf)|
|517|2002|4|Madhusudan Mishra|[The Objective Criteria in Deciphering the Indus Script](/assets/ijhs/Vol37_4_1_MMishra.pdf)|
|518|2002|4|T Laha et. al.|[Material and Electrochemical Characterization of Ancient Indian OCP Period Copper](/assets/ijhs/Vol37_4_2_TLaha.pdf)|
|519|2002|4|K Chandra Hari|[An Early Eclipse Record of Indian Astronomy](/assets/ijhs/Vol37_4_3_KCHari.pdf)|
|520|2002|4|N C Shah|[Hugh Martin Leake: A Historical Memoir](/assets/ijhs/Vol37_4_4_NCShah.pdf)|
|521|2002|4|Srabani sen|[The beginning of Biochemical Researches in India— An Historical Perspective](/assets/ijhs/Vol37_4_5_SSen.pdf)|
|522|2002|4|Arun Kumar Biswas|[Book Review : Kautilya’s Arthasastra in the light of modern science and technology](/assets/ijhs/Vol37_4_6_BookReview.pdf)|
|523|2002|4|Shabnam Shukla|[Project Report: Raj Nighantu of Narhari Pandit](/assets/ijhs/Vol37_4_8_ProjectReport.pdf)|
|524|2002|4|S M R Ansari|[Orbituary: Shabbir Ahmad Khan Ghori](/assets/ijhs/Vol37_4_9_Obituary.pdf)|
|525|2002|4||[Notice of Journals](/assets/ijhs/Vol37_4_10_NoticeofJournals.pdf)|
|526|2003|1|R C Gupta|[Agni–Kunda—A Negelected Area of Study in the History of Ancient Mathematics](/assets/ijhs/Vol38_1_1_RCGupta.pdf)|
|527|2003|1|A K Bag|[Luni–Solar Calender‚ Kali Ahargana and Julian Days](/assets/ijhs/Vol38_1_2_AKBag.pdf)|
|528|2003|1|A K Bag|[A Note on the Ahargana and the Weekdays as per Modern Suryasiddhanta](/assets/ijhs/Vol38_1_3_AKBag.pdf)|
|529|2003|1|K Chandra Hari|[Eclipse Observations of Paramesvara‚ the 14–15th century Astronomer of Kerala](/assets/ijhs/Vol38_1_4_KCHari.pdf)|
|530|2003|1|S F Tuan|[Dirac and Heisenberg in Hawaii](/assets/ijhs/Vol38_1_5_SFTuan.pdf)|
|531|2003|1|R K Dube|[Book Review: Metallurgy in Indian Archaeology](/assets/ijhs/Vol38_1_6_BookReview.pdf)|
|532|2003|1|A K Bag|[Obituary: Jagat Narain Kapur](/assets/ijhs/Vol38_1_7_Obituary.pdf)|
|533|2003|2|R N Iyengar|[Internal Consistency of Eclipses and Planetary Positions in Mahabharata](/assets/ijhs/Vol38_2_1_RNIyengar.pdf)|
|534|2003|2|J Le Coze|[About the Signification of Wootz and Other Names Given to Steel](/assets/ijhs/Vol38_2_2_JLCoze.pdf)|
|535|2003|2|K Ramasubramanian and M S Sriram|[Corrections to the Terrestrial Latitude in Tantrasangraha](/assets/ijhs/Vol38_2_3_KRamasubramanian.pdf)|
|536|2003|2|B Rama Rao|[Cudamaninighantu — An Unpublished Work on Dravyaguna by Suraya](/assets/ijhs/Vol38_2_4_BRRao.pdf)|
|537|2003|2|Rajinder Singh|[C V Raman and the American Scientists](/assets/ijhs/Vol38_2_5_RSingh.pdf)|
|538|2003|2|S R Sarma|[Book Review: The Ganitasarasangraha of Sri Mahaviracarya](/assets/ijhs/Vol38_2_6_BookReview.pdf)|
|539|2003|2|Shabnam Shukla|[Project Report: Botanist Jaikrishnabhai – Life and Contributions by JJ Shah](/assets/ijhs/Vol38_2_7_ProjectReport.pdf)|
|540|2003|2||[Indian National Commission for History of Science: Projects Renewed and Approved](/assets/ijhs/Vol38_2_8_IndianNationalCommissionforHOS.pdf)|
|541|2003|2||[Conferences](/assets/ijhs/Vol38_2_9_Conferences.pdf)|
|542|2003|3|R Balasubramaniam|[Influence of Manufacturing Methodology on the Corrosion Resistance of the Delhi Iron Pillar](/assets/ijhs/Vol38_3_1_RBalasubramaniam.pdf)|
|543|2003|3|B Sasisekaran and B Raghunatha Rao|[Archaeo Metallurgical Study on Select Pallava Coins](/assets/ijhs/Vol38_3_2_BSasisekaran.pdf)|
|544|2003|3|K Chandra Hari|[Computation of the True Moon by Madhava of Sangama–Grama](/assets/ijhs/Vol38_3_3_KCHari.pdf)|
|545|2003|3|S abalachandra Rao‚ S K Uma and Padmaja Venugopal|[Lunar Eclipse Computation in Indian Astronomy with Special Reference to Grahalaghavam](/assets/ijhs/Vol38_3_4_SBRao.pdf)|
|546|2003|3|Iqbal Ghani Khan|[The Awadh Scientific Renaissance and the Role of the French: C 1750–1820](/assets/ijhs/Vol38_3_5_IGKhan.pdf)|
|547|2003|3|A K Bag|[Book Review: Science and Technology in the Islamic World](/assets/ijhs/Vol38_3_6_BookReview.pdf)|
|548|2003|3|Shabnam Shukla|[Project Report](/assets/ijhs/Vol38_3_7_ProjectReport.pdf)|
|549|2003|3|R C Gupta|[Obituary: T A Sarasvati Amma](/assets/ijhs/Vol38_3_8_Obituary.pdf)|
|550|2003|3|Setsuro Ikeyama|[Supplement: Brahmasphutasiddhanta](/assets/ijhs/Vol38_3_9_Supplement.pdf)|
|551|2003|4|Priyadarsan Sensarma|[Dietary Biodiversity in Yajnavalkya–Samhita](/assets/ijhs/Vol38_4_1_PSensarma.pdf)|
|552|2003|4|R Balasubramaniam and N Mahajan|[Some Metallurgical Aspects of Gupta Period Gold Coin Manufacturing Technology](/assets/ijhs/Vol38_4_2_RBalasubramaniam.pdf)|
|553|2003|4|Atis Chandra Mandal‚ Sumita Santra‚ Debasis Mitra‚ Manoranjan Sarkar‚ Dipan|[Numismatic Study of Malhar Coins by the Energy Dispersive X–Ray Fluorescence (EDXRF) Technique](/assets/ijhs/Vol38_4_3_ACMandal.pdf)|
|554|2003|4|George Abraham and J Samuel Cornelius|[Observational Astronomy](/assets/ijhs/Vol38_4_4_GAbraham.pdf)|
|555|2003|4|Rajinder Singh|[Richard Bar and his contacts with the Indian Nobel Laureate Sir CV Raman](/assets/ijhs/Vol38_4_5_RSingh.pdf)|
|556|2003|4|A K Bag|[Book Review: Ancient Indian Astronomy – Planetary Positions and Eclipses](/assets/ijhs/Vol38_4_6_BookReview.pdf)|
|557|2003|4|A K Bag|[Conference: 12th World Sanskrit Conference – A Report](/assets/ijhs/Vol38_4_7_Conference.pdf)|
|558|2003|4||[News: Books Received for Review (2003)](/assets/ijhs/Vol38_4_8_News.pdf)|
|559|2003|4||[Chama Newsletter](/assets/ijhs/Vol38_4_9_CHAMANewsletter.pdf)|
|560|2004|1|R Satyanarayana|[Vina Keyboards – Origin](/assets/ijhs/Vol39_1_1_RSatyanarayana.pdf)|
|561|2004|1|R N Iyengar|[Profile of A Natural Disaster in Ancient Sanskrit Literature](/assets/ijhs/Vol39_1_2_RNIyengar.pdf)|
|562|2004|1|Meera I Dass and R Balasubramaniam|[Estimation of the Original Erection Site of the Delhi Iron Pillar at Udayagiri](/assets/ijhs/Vol39_1_3_MIDass.pdf)|
|563|2004|1|Jaime Wisniak|[Dyes from Antiquity to Synthesis](/assets/ijhs/Vol39_1_4_JWisniak.pdf)|
|564|2004|1|Jagdish N Sinha|[Science and Culture under Colonialism: India Between the World Wars](/assets/ijhs/Vol39_1_5_JNSinha.pdf)|
|565|2004|1|S M R Ansari|[Book Review: Astronomical Instruments in the Ramur Raza Library](/assets/ijhs/Vol39_1_6_BookReview.pdf)|
|566|2004|1|S R Sarma|[Magic Square for 2004](/assets/ijhs/Vol39_1_9_SRSarma.pdf)|
|567|2004|1||[News: 22nd International Congress of History of Science‚ July 2005‚ Beijing](/assets/ijhs/Vol39_1_10_News.pdf)|
|568|2004|3|Amit Ranjan Basu|[A New Knowledge of Madness–Nineteenth Century Asylum Psychiatry in Bengal](/assets/ijhs/Vol39_3_1_ARBasu.pdf)|
|569|2004|3|T V Venkateswaran|[Representation of Natural World in the Popular Science Texts during Nineteenth Century Tamil Nadu](/assets/ijhs/Vol39_3_2_TVVenkateswaran.pdf)|
|570|2004|3|Abhida S Dhumatkar|[Balaji Prabhakar Modak—A Nineteenth Century Science Propagator in Maharashtra](/assets/ijhs/Vol39_3_3_ASDhumatkar.pdf)|
|571|2004|3|Aparajita Basu|[The Conflict and Change–Over In Indian Chemistry](/assets/ijhs/Vol39_3_4_ABasu.pdf)|
|572|2004|3|K Chandra Hari|[Historical Notes: Julian Days in Astronomy](/assets/ijhs/Vol39_3_5_HistoricalNotes.pdf)|
|573|2004|3|Sisir K Majumdar|[Historical Notes](/assets/ijhs/Vol39_3_6_SKMajumdar.pdf)|
|574|2004|3|Arun Kumar Biswas|[Book Reviews](/assets/ijhs/Vol39_3_7_BookReview.pdf)|
|575|2004|4|K Rajan and A Athiyaman|[Traditional Gemstone Cutting Technology of Kongu Region in Tamil Nadu](/assets/ijhs/Vol39_4_1_RRajan.pdf)|
|576|2004|4|A N Thakur|[Therapeutic Use of Urine in Early Indian Medicine](/assets/ijhs/Vol39_4_2_ANThakur.pdf)|
|577|2004|4|K D Abhyankar|[Origin of the Moving Eccentric Circle Planetary Model in India](/assets/ijhs/Vol39_4_3_KDAbhyankar.pdf)|
|578|2004|4|S Balachandra Rao‚ S K Uma and Padmaja Venugopal|[Mean Planetary Positions According to Grahalaghavam](/assets/ijhs/Vol39_4_4_SBRao.pdf)|
|579|2004|4|Gregg De Young|[John Greaves’ Astronomica Quaedam: Orientalism and Ptolemaic Cosmography in Seventeenth Century England](/assets/ijhs/Vol39_4_5_GDYoung.pdf)|
|580|2004|4|Sanjay C Patel|[Historical Notes](/assets/ijhs/Vol39_4_6_HistoricalNotes.pdf)|
|581|2004|4|Commodore S K Chatterjee|[Historical Note: Uniform All India Nirayana Solar Calender](/assets/ijhs/Vol39_4_7_CmdSKChatterjee.pdf)|
|582|2004|4|Jagdish N Sinha|[Book Review: Collected Works of Mahendralal Sircar‚ Eugene Lafont and the Science Movement](/assets/ijhs/Vol39_4_8_JNSinha.pdf)|
|583|2004|4||[News](/assets/ijhs/Vol39_4_9_News.pdf)|
|584|2005|1|KD Abhyankar|[Earliest Vedic Calendar](/assets/ijhs/Vol1_2005_01.pdf)|
|585|2005|1|Mira Roy|[Environment and Ecology in the Ramayana](/assets/ijhs/Vol1_2005_02_ENVIRONMENT AND ECOLOGY IN THE RAMAYANA.pdf)|
|586|2005|1|RC Gupta|[Mystical Mathematics of Ancient Planets](/assets/ijhs/Vol1_2005_03_MYSTICAL MATHEMATICS IN ANCIENT PLANETS.pdf)|
|587|2005|1|Jagdish N Sinha|[Congress and Conservation-A Look at the NPC Reports](/assets/ijhs/Vol1_2005_04_CONGRESS AND CONSERVATION.pdf)|
|588|2005|1|Srabani Sen|[Dawn of Nutrition Research in India&mdash; Pre&ndash;independence Era](/assets/ijhs/Vol40_1_5_SSen.pdf)|
|589|2005|1|Toke Lindegaard Knudsen|[Historical Note:  Square Roots in the Sulbasutras](/assets/ijhs/Vol40_1_6_HistoricalNotes.pdf)|
|590|2005|1|K Chandra Hari|[Historical Note:  Accuracy of Lunar Eclipse Computations of the Grahalaghavam](/assets/ijhs/Vol40_1_7_KCHari.pdf)|
|591|2005|1|A K Bag|[Book Review: History of Oriental Astronomy](/assets/ijhs/Vol40_1_8_BookReview.pdf)|
|592|2005|1||[News](/assets/ijhs/Vol1_2005_08_NEWS.pdf)|
|593|2005|1|B K Sen|[Supplement: Growth of Scientific Periodicals in India](/assets/ijhs/Vol40_1_10_SupplementScientificPeriodicals.pdf)|
|594|2005|3|R Balasubramaniam|[The First Catalogue of Forge-Welded Iron Cannons by Neogi](/assets/ijhs/Vol3_2005_01_THE FIRST CATALOGUE ON FORGE WELDED IRON CANNONS BY NEOGI.pdf)|
|595|2005|3| R Balasubramaniam	A Saxena and TR Anantharaman|[Rajaagopala -The Massive Iron Cannon at Thanjavur in Tamil Nadu](/assets/ijhs/Vol3_2005_02_RAJAGOPALA THE MASSIVE IRON CANNON AT THANJAVUR IN TAMIL NADU.pdf)|
|596|2005|3| R Balasubramaniam	K Bhattacharya and AK Nigam|[Dal Mardan - The Forge-welded Iron Cannon at Bishnupur](/assets/ijhs/Vol3_2005_03_DAL MARDAN THE FORGE WELDED IRON CANNON AT BISHNUPUR.pdf)|
|597|2005|3| R Balasubramaniam	M Surender and S Sankaran|[The Forge -Welded Iron Cannon at Bada Burj of Golconda Fort Rampart](/assets/ijhs/Vol3_2005_04_THE FORGE WELDED IRON CANNON AT BADA BURJ OF GOLCONDA FORT RAMPART.pdf)|
|598|2005|3| R Balasubramaniam	S Sankaran and M Surender|[The Forge-Welded Iron Cannon near Fateh Burj of Golconda Fort Rampart](/assets/ijhs/Vol3_2005_05_THE FORGE WELDED IRON CANNON AT FATEH BURJ OF GOLCONDA FORST RAMPART.pdf)|
|599|2005|3|D Neff and R Balasubramaniam|[Bhavani Sankar - The Forge-welded Iron Cannon at Jhansi Fort](/assets/ijhs/Vol3_2005_06_BHAVANI SANKAR THE FORGE WELDED IRON CANNON AT JHANSI FORT.pdf)|
|600|2005|3|R Balasubramaniam|[Kadak Bijli- The Forge-welded Iron Cannon at Jhansi Fort](/assets/ijhs/Vol3_2005_07_KADAK BIJLI THE FORGE WELDED IRON CANNON AT JHANSI FORT.pdf)|
|601|2005|3|R Balasubramaniam|[Azdaha Paikar- The Composite Iron-Bronze Cannon at Musa Burj of Golconda Fort](/assets/ijhs/Vol3_2005_08_AZDAHA PAIKAR THE COMPOSITE IRON BROZE CANNON AT MUSA BURJ OF GOLCONDA FORT.pdf)|
|602|2005|3|R Balasubramaniam|[Fath Raihbar - The Massive Bronze Cannon at Petla Burj of Golconda Fort](/assets/ijhs/Vol3_2005_09_FATH RAIHBAR THE MASSIVE BRONZE CANNON AT PETLA BURJ OF GOLCONDA FORT.pdf)|
|603|2005|3|AK Bag|[Historical Notes: Fathullah Shirazi : Cannon	Multi- barrel Gun and Yarghu](/assets/ijhs/Vol3_2005_10_HISTORICAL NOTES.pdf)|
|604|2005|3|BK Sen|[Supplement: Growth of Scientific Periodicals in India- (1901-1947)](/assets/ijhs/Vol3_2005_11_SUPPELMENT.pdf)|
|605|2006|1|R N Iyengar|[Some Celestial Observations associated with Krsna–lore](/assets/ijhs/Vol41_1_1_RNIyengar.pdf)|
|606|2006|1|Priyadarsan Sensarma|[Dietary Biodiversity in the Visnu– Samhita](/assets/ijhs/Vol41_1_2_PSensarma.pdf)|
|607|2006|1|K Chandra Hari|[Polar Longitudes of the Suryasiddhanta and Hipparchus’ Commentary](/assets/ijhs/Vol41_1_3_KCHari.pdf)|
|608|2006|1|Deepak Bhattacharya and P C Naik|[Archaeoastronomy at Bhubaneswar: A Polygonal and Mathematical Model — Taraka](/assets/ijhs/Vol41_1_4_DBhattacharya.pdf)|
|609|2006|1|Jaweed Ashraf|[Some Medieval Manuscripts on Horticulture](/assets/ijhs/Vol41_1_5_JAshraf.pdf)|
|610|2006|1|Sisir K Majumdar|[Historical Note: Einstein and India: His Scientific	Intellectual	Social and Moral Link](/assets/ijhs/Vol41_1_6_HistoricalNotes.pdf)|
|611|2006|1|Sisir K Majumdar|[Historical Note: Einstein	Molecule and Medicine](/assets/ijhs/Vol41_1_7SisirKMajumdarEinstien.pdf) &#128148;|
|612|2006|1||[Historical Note: Magic Square for 2006](/assets/ijhs/Vol41_1_8_Magic Square.pdf)|
|613|2006|1|R C Gupta|[Book Review– Pi: A Source Book](/assets/ijhs/Vol41_1_9_BookReview.pdf)|
|614|2006|1||[Notices](/assets/ijhs/Vol41_1_10_Notices.pdf)|
|615|2006|1||[Supplement](/assets/ijhs/Vol41_1_11_Supplement_Grahalaghavam.pdf)|
|616|2006|2|Sudha Bujhle and M N Vahia|[Calculations of Tithis: An Extension of Surya Siddhanta Formulation](/assets/ijhs/Vol41_2_1_SBhujle.pdf)|
|617|2006|2|K D Abhyankar|[Dhruvaka–Viksepa System of Astronomical Coordinates](/assets/ijhs/Vol41_2_2_KDAbhyankar.pdf)|
|618|2006|2|Arun Kumar Biswas|[Brass and Tin Metallurgy in the Ancient & Medievel World: India’s Primacy and the Technology transfer to the West](/assets/ijhs/Vol41_2_3_AKBiswas.pdf)|
|619|2006|2|Virendra N Sharma|[Astronomical tables of Zid–I Muhammad Shahi and their relation to Tabulae Astronomicae of De La Hire](/assets/ijhs/Vol41_2_4_VNSharma.pdf)|
|620|2006|2|Ranatosh Chakrabarti|[Historical Notes: P.N Bose (1855–1934) — An Eminent Geologist](/assets/ijhs/Vol41_2_5_HistoricalNotes.pdf)|
|621|2006|2|Siddhartha Kundu|[Book Review: The Role of Mathematics in Human Structure](/assets/ijhs/Vol41_2_6_BookReview.pdf)|
|622|2006|2||[Orbituay: K V Sarma (1919–2005)](/assets/ijhs/Vol41_2_7_Obituary.pdf)|
|623|2006|2||[Supplement](/assets/ijhs/Vol41_2_8_SupplementGrahalaghvam.pdf)|
|624|2006|3|Ashoka K Mishra|[Atomism of Nyaya–Vaisesika Vs Jainism— A Scientific Appraisal](/assets/ijhs/Vol41_3_1_AKMishra.pdf)|
|625|2006|3|K Chandra Hari|[Epoch of Ramakasiddhanta](/assets/ijhs/Vol41_3_2_KCHari.pdf)|
|626|2006|3|Nirupama Raghavan|[Is Siva Iconography inspired by the Stars?](/assets/ijhs/Vol41_3_3_NRaghavan.pdf)|
|627|2006|3|R K Dube|[Copper Production Process as described in an Early Fourteenth Century and Prakarta Text composed Thakkura Pheru](/assets/ijhs/Vol41_3_4_RKDube.pdf)|
|628|2006|3|K D Abhyankar|[Historical Notes: Eclipse Period 3339 in Rigveda in support of R N Iyrengar’s Thesis](/assets/ijhs/Vol41_3_5_RNIyengar.pdf)|
|629|2006|3|R C Gupta|[Historical Notes: Sulba–sutras: Earliest Studies and a Newly Published Manual](/assets/ijhs/Vol41_3_6_RCGupta.pdf)|
|630|2006|3|Sisir K Majumdar|[Historical Notes: Alexandria: The Greatest Centre of Learning in the Antiquity](/assets/ijhs/Vol41_3_7_SisirKMajumdar.pdf)|
|631|2006|3|Rajesh Kocchar|[Book Review](/assets/ijhs/Vol41_3_8_BookReview.pdf)|
|632|2006|3||[Supplement](/assets/ijhs/Vol41_3_9_SupplementGrahalaghavam.pdf)|
|633|2007|2|Priyadarsan Sensarma|[Enthnobiological Information in Parasara Samhita](/assets/ijhs/Vol42_2_1_PSensarma.pdf)|
|634|2007|2|Ankit Sule‚ Mayank Vahia‚ Hrishikesh Joglekar and Sudha Bhujle|[Saptarsi' Visit to different Naksatras: Subtle Effect of Earth’s Precession](/assets/ijhs/Vol42_2_2_ASule.pdf) &#128148;|
|635|2007|2|Abhishek Parakh|[Ayrabhata’s Root Extraction Methods](/assets/ijhs/Vol42_2_3_AParekh.pdf) &#128148;|
|636|2007|2|R C Gupta|[Yantras or Mystic Diagrams: A Wide Area for Study in Ancient and Medieval Indian Mathematics](/assets/ijhs/Vol42_2_4_RCGupta.pdf)|
|637|2007|2|R Balasubramaniam and Pranab K Chattopadhyay|[Zafarbaksh – The Composite Mughal Cannon of Aurangzeb at Fort William in Kolkata](/assets/ijhs/Vol42_2_5_RBalasubramaniam.pdf)|
|638|2007|2|K D Abhyankar|[Historical Note: BG Tilak and Ancient Indian Astronomy – A Reappraisal](/assets/ijhs/Vol42_2_6_KDAbhyankar.pdf) &#128148;|
|639|2007|2|K Chandra Hari|[Historical Note: Epoch of Lalla – An Overview](/assets/ijhs/Vol42_2_7_KCHari.pdf)|
|640|2007|2|Rekha Ranade|[Historical Note: Cultivation of Naturally Coloured Cotton in India in the 19th century](/assets/ijhs/Vol42_2_8_RRanade.pdf) &#128148;|
|641|2007|2|Sisir Kumar Majumdar|[Historical Note: Reception of Relativity Theory in Different Social‚ Political and Religious Ideologies](/assets/ijhs/Vol42_2_9_SKMajumdar.pdf) &#128148;|
|642|2007|2|D Wujastyk|[Book Review: The Legacy of Susruta](/assets/ijhs/Vol42_2_10_BookReviewDWajastyk.pdf)|
|643|2007|2|M S Sriram|[Book Review: Galileo Galilei – When the World Stood Still](/assets/ijhs/Vol42_2_11_BookReviewMSSriram.pdf)|
|644|2007|2|Jagdish N Sinha|[Book Review: Chemical Sciences in Colonial India: The Science in Social History](/assets/ijhs/Vol42_2_12_BookReviewJNSinha.pdf)|
|645|2007|2|Arun Kumar Biswas|[Obituary: Sushil Kumar Mukherjee (1914–2006)](/assets/ijhs/Vol42_2_13_Obituary.pdf) &#128148;|
|646|2007|2||[News](/assets/ijhs/Vol42_2_14_News.pdf)|
|647|2007|2|S Balachandra Rao|[Supplement: Karanakutuhalam of Bhaskaracarya II](/assets/ijhs/Vol42_2_15_Supplement.pdf)|
|648|2008|1|R N Iyengar|[Archaic Astronomy of Parauara and Vrddha Garga](/assets/ijhs/Vol43_1_1_RNIyengar.pdf)|
|649|2008|1|Sumita Santra‚ Gautam Sengupta‚ Dipan Bhattacharya‚ Manoranjan Sarkar‚ Prati|[Recent Bronze Hoard from West Bengal: Analytical Studies](/assets/ijhs/Vol43_1_2_SSantra.pdf)|
|650|2008|1|Jean Deloche|[Water Resources in the Hill Forts of South India (14—18th Century)](/assets/ijhs/Vol43_1_3_JDeloche.pdf)|
|651|2008|1|Probir K Bondyopadhyay and Suchanda Banerjee|[Two Recently Discovered Patents of Professor Jagadis Chunder Bose and India’s First Electronics Technology Transfer to the West](/assets/ijhs/Vol43_1_4_PKBondyopadhyay.pdf)|
|652|2008|1|K D Abhyankar|[Historical Note: On the Precessional Movement of Saptarsis](/assets/ijhs/Vol43_1_5_KDAbhyankar.pdf)|
|653|2008|1|R C Gupta|[Historical Note: True Laksa—Scale Numeration System of the Valmiki—Ramayana](/assets/ijhs/Vol43_1_6_RCGupta.pdf)|
|654|2008|1|Deepak Bhattacharya and PC Naik|[Historical Note: Astro—Navigational Aspects of the Bhumi Anla](/assets/ijhs/Vol43_1_7_DBhattacharya.pdf)|
|655|2008|1|D N Ukidwe|[Historical Note: Srstikrama Construction of Sriyantra](/assets/ijhs/Vol43_1_8_DNUkidwe.pdf)|
|656|2008|1|Deepak Bhattacharya|[Historical Note: Select Palm Leaf Manuscripts in Orissa State Museum‚ Bhubaneswar on Astronomy and Mathematics](/assets/ijhs/Vol43_1_9_DBhattacharya.pdf)|
|657|2008|1|Sisir Kumar Majumdar|[Historical Note: The Gifts of Chemistry to Modern Medicine](/assets/ijhs/Vol43_1_10_SKMajumdar.pdf)|
|658|2008|1|Chittabrata Palit|[Book Review: Social History of Science in Colonial India](/assets/ijhs/Vol43_1_11_BookReview_CPalit.pdf)|
|659|2008|1|A K Biswas|[Book Review: The Bengal Renaissance](/assets/ijhs/Vol43_1_12_BookReview_AKBiswas.pdf)|
|660|2008|1||[Obituary: KD Abhyankar (1928—2007)](/assets/ijhs/Vol43_1_13_Obituary.pdf)|
|661|2008|1|Shabnam Shukla|[News](/assets/ijhs/Vol43_1_14_News.pdf)|
|662|2008|1|S Balachandra Rao|[Supplement: Karanakutuhalam of Bhaskaracarya II](/assets/ijhs/Vol43_1_15_Supplement.pdf)|
|663|2008|2|Vijaya Jayant Deshpande|[Glimpses of Ayurveda in Medieval Chinese Medicine](/assets/ijhs/Vol43_2_1_VJDeshpande.pdf)|
|664|2008|2|Jayanta Bhattacharya|[Encounter In Anatomical Knowledge: East And West](/assets/ijhs/Vol43_2_2_JBhattacharya.pdf)|
|665|2008|2|Rais Akhtar|[Environment and Cholera in Kashmir during Nineteenth Century](/assets/ijhs/Vol43_2_3_RAkhtar.pdf)|
|666|2008|2|Harkishan Singh|[Ram Nath Chopra (1882—1973) — A Vissionary in Pharmaceutical Science](/assets/ijhs/Vol43_2_4_HSingh.pdf)|
|667|2008|2|Subrata Kumar Acharya|[Historical Note: Ancient Methods of Preserving Copper Plate Grants](/assets/ijhs/Vol43_2_5_SKAcharya.pdf)|
|668|2008|2|Chittabrata Palit|[Historical Note: Popular Response to Epidemics in Colonial Bengal](/assets/ijhs/Vol43_2_6_CPalit.pdf)|
|669|2008|2|R K Dube|[Historical Note: Superiority of Makrana (Rajasthan) Marbles](/assets/ijhs/Vol43_2_7_RKDube.pdf)|
|670|2008|2|Sisir K Majumdar|[Historical Note: Socio—Political Thoughts of Einstein](/assets/ijhs/Vol43_2_8_SKMjumdar.pdf)|
|671|2008|2|Arun Kumar Biswas|[Book Review: Story of the Delhi Iron Pillar](/assets/ijhs/Vol43_2_9_BookReview.pdf)|
|672|2008|2|P V Tiwari|[Obituary: Priyavrata Sharma — A Legendary Personality (1920—2007)](/assets/ijhs/Vol43_2_10_Obituary.pdf)|
|673|2008|3|Prabhakar Gondhalekar|[Vedanga Jyotisa — Where and When?](/assets/ijhs/Vol43_3_1_PGondhalekar.pdf)|
|674|2008|3|Ariel Cohen|[The Jewish calendar and its relation to the Christian holidays as described by a Muslim Mathematician—Astronomer in 852 AD](/assets/ijhs/Vol43_3_2_ACohen.pdf)|
|675|2008|3|Prasanta K Datta‚ Pranab K Chattopadhyay and Barnali Mandal|[Investigations on Ancient High — Tin Bronze Excavated From Lower Bengal Region of Tilpi](/assets/ijhs/Vol43_3_3_PKDatta.pdf)|
|676|2008|3|Deepak Bhattacharya|[Historical Note: Archaeo—Astronomy of Nataraja](/assets/ijhs/Vol43_3_4_DBhattacharya.pdf)|
|677|2008|3|N Rathnasree‚ Anurag Garg‚ Arpita Pandey and R K Chikara|[Historical Note: Karka—Rasi—Valaya—The Instrument on the Back Wall of the Misra Yantra](/assets/ijhs/Vol43_3_5_NRatnasree.pdf)|
|678|2008|3|Rajinder Singh|[Historical Note: Indo—American Relation with reference to Bernard Peters](/assets/ijhs/Vol43_3_6_RSingh.pdf)|
|679|2008|3|S Balachandra Rao|[Book Review: Studies in the History of the Exact Sciences in Honour of David Pingree](/assets/ijhs/Vol43_3_7_BookReview.pdf)|
|680|2008|3|Yukio Ohashi|[Obituary: Kripa Shankar Shukla (1918—2007)](/assets/ijhs/Vol43_3_8_Obituary.pdf)|
|681|2008|3|A Vagiswari‚ Christina Birdie and Indira Chowdhury|[News: National Workshop on Preserving our Scientific Heritage‚ held at Indian Institute of Astrophysics‚ Bangalore‚ January 21—22‚ 2008 — A Report](/assets/ijhs/Vol43_3_9_News.pdf)|
|682|2008|3|S Balachandra Rao|[Supplement: Karanakutuhalam of Bhaskaracarya II](/assets/ijhs/Vol43_3_10_Supplement.pdf)|
|683|2009|1||[Editorial](/assets/ijhs/Vol44_1_0_Editorial.pdf)|
|684|2009|1|Mira Roy|[Ecological concept in Ayurveda: Nature-man relations](/assets/ijhs/Vol44_1_1_MRoy.pdf)|
|685|2009|1|Priyadarsan Sensarma|[Biodiversity: Methods of Conservation in the Usanah Samita](/assets/ijhs/Vol44_1_2_PSensarma.pdf)|
|686|2009|1| R Balasubramaniama	V N Prabhakarb and Manish Shankara|[On technical analysis of Cannon Shot Crater on Delhi Iron Pillar](/assets/ijhs/Vol44_1_3_RBalasubramaniam.pdf)|
|687|2009|1|B. Prakash|[Religious traditions of Ancient Iron and Steel Craftsmen of India and Japan](/assets/ijhs/Vol44_1_4_BPrakash.pdf)|
|688|2009|1|Kaushik Roy|[Science of Siege Warfare in India during the Great Mutiny: 1857-58](/assets/ijhs/Vol44_1_5_KRoy.pdf)|
|689|2009|1|R.K. Dube|[Historical Notes: On the Sanskrit word	Svarnaja used for metal	tin](/assets/ijhs/Vol44_1_6_Historical Notes.pdf)|
|690|2009|1|K Chandra Hari|[Historical Notes: Identification of Asmaka](/assets/ijhs/Vol44_1_7_KCHari.pdf)|
|691|2009|1|Sisir K. Majumdar|[Historical Notes: The Genius of Darwin- Two Hundred Years](/assets/ijhs/Vol44_1_8_SKMajumdar.pdf)|
|692|2009|1|M.S. Sriram|[Book Review](/assets/ijhs/Vol44_1_9_Book Review.pdf)|
|693|2009|4|Prabhakar Gondhalekar|[The Vedic Naksatras— A Reappraisal](/assets/ijhs/Vol44_4_1_PGondhalekar.pdf)|
|694|2009|4|Mira Roy|[Agriculture In The Vedic Period](/assets/ijhs/Vol44_4_2_MRoy.pdf)|
|695|2009|4|R Balasubramaniam|[New Insights On Artisans Of Taj](/assets/ijhs/Vol44_4_3_RBalasubramaniam.pdf)|
|696|2009|4|Jean Deloche|[Stableships Of Tiruppudaimarudur And Tirukkurunkudi (South India)](/assets/ijhs/Vol44_4_4_JDeloche.pdf)|
|697|2009|4|Harkishan Singh|[Bishnupada Mukerji (1903—79): A Medicopharmaceutical Professional Of Eminence](/assets/ijhs/Vol44_4_5_HSingh.pdf)|
|698|2009|4|Sisir K Majumdar|[Historical Notes:Spice And Herb— A Historical Overview](/assets/ijhs/Vol44_4_6_Historical Notes.pdf)|
|699|2009|4|A K Bag|[Book Review](/assets/ijhs/Vol44_4_7_AKBag.pdf)|
|700|2009|4|Toke L Knudsen|[Seminar Report CNRS—NYU Workshop On Early Mathematics: A Report](/assets/ijhs/Vol44_4_8_SeminarReport.pdf)|
|701|2009|4|Shabnam Shukla|[The 69th Session Of The Indian History Congress :Kannur 28-30 December 2008— A Report](/assets/ijhs/Vol44_4_9_SShukla.pdf)|
|702|2009|4|Cristina Pecchia|[14th World Sanskrit Conference— Section On Scientific Literature_A Report](/assets/ijhs/Vol44_4_10_CPecchia.pdf)|
|703|2009|4||[Books Received For Review In IJHS 2009](/assets/ijhs/Vol44_4_11_News.pdf)|
|704|2009|4||[Reminiscence](/assets/ijhs/Vol44_4_12_Reminiscenses.pdf)|
|705|2009|4|Damodar Joshi|[Rasaprakasa Sudhakara— Chap4](/assets/ijhs/Vol44_13_SupplementRasaprakasasudhakara.pdf)|
|706|2010|1||[Contents](/assets/ijhs/Vol45_1_0_Contents.pdf)|
|707|2010|1|R.N. Iyengar|[Comets and Meteoritic Showers in the Rigveda and their significance](/assets/ijhs/Vol45_1_1_RNIyengar.pdf)|
|708|2010|1|Jean Deloche|[Roman Trade Routes in South India: Geographical and Technical Considerations (c. 1st cent. BC – 5th cent. AD)](/assets/ijhs/Vol45_1_2_JDeloche.pdf)|
|709|2010|1|R.C. Gupta|[Bhagyashree Bavare‚ Mahesh Shetti and P.P. Divakaran Techniques of Ancient Empirical Mathematics](/assets/ijhs/Vol45_1_4_RCGupta.pdf)|
|710|2010|1| B. Mandal	Pranab K. Chattopadhyay	D. Misra et al.|[Understanding Alloy Design Principles and Cast Metal Technology in Hot Molds for Medieval Bengal](/assets/ijhs/Vol45_1_5_BMandalarticle.pdf)|
|711|2010|1|Sisir Kr. Majumdar|[Historical Note: Marx and Darwin Connection in London](/assets/ijhs/Vol45_1_6_SKMajumdar.pdf)|
|712|2010|1|Madhvendra Narayan|[Book Review](/assets/ijhs/Vol45_1_7_Bookreview.pdf)|
|713|2010|1|Gulfishan Khan|[Seminar Report](/assets/ijhs/Vol45_1_8_SeminarReport.pdf)|
|714|2010|1||[News](/assets/ijhs/Vol45_1_9_News.pdf)|
|715|2010|1||[Awards and Honours](/assets/ijhs/Vol45_1_10_Awards.pdf)|
|716|2010|1|Damodar Joshi|[Supplement: Rasaprakasa Sudhakara](/assets/ijhs/Vol45_1_11_1_Supplement.pdf)|
|717|2010|1||[Supplement: Chapter 6— Sanskrit Text](/assets/ijhs/Vol45_1_11_2_Supplement.pdf)|
|718|2010|1||[Supplement: Chapter 6— English Translation](/assets/ijhs/Vol45_1_11_3_Supplement.pdf)|
|719|2010|1||[Supplement: Chapter 7— Sanskrit Text](/assets/ijhs/Vol45_1_11_4_Supplement.pdf)|
|720|2010|1||[Supplement: Chapter 7— English Translation](/assets/ijhs/Vol45_1_11_5_Supplement.pdf)|
|721|2010|2||[Contents](/assets/ijhs/Vol45_2_0_Contents.pdf)|
|722|2010|2|Nand Lal Singh‚ Ramprasad‚ P K Mishra et al.|[Alcoholic Fermentation Techniques in Early Indian Tradition](/assets/ijhs/Vol45_2_1_NSingh.pdf)|
|723|2010|2|Padmavati Taneja and Nidhi Handa|[Enlargement of Vedis in the Sulbasutras](/assets/ijhs/Vol45_2_2_PTaneja.pdf)|
|724|2010|2|Ashok Kumar Panda|[Tracing Historical Perspective of Cordyceps sinensis — An Aphrodisiac in Sikkim Himalaya](/assets/ijhs/Vol45_2_3_AKPanda.pdf)|
|725|2010|2|Srabani Sen|[Scientific Enquiry in Agriculture in Colonial India: A Historical Perspective](/assets/ijhs/Vol45_2_4_SSen.pdf)|
|726|2010|2|Arun Kumar Biswas|[Why did Scientific Renaissance take place in Europe and not in India](/assets/ijhs/Vol45_2_5_AKBiswas.pdf)|
|727|2010|2|Rajesh Kochhar|[Historical Notes: Rahu and Ketu in Mythological and Astronomological Contexts](/assets/ijhs/Vol45_2_6_RKochar.pdf)|
|728|2010|2|A K Bag|[Historical Notes: Role of Benaras in the Studies of History of Science](/assets/ijhs/Vol45_2_7_AKBag.pdf)|
|729|2010|2|A K Bag|[Book Review](/assets/ijhs/Vol45_2_8_Bookreview.pdf)|
|730|2010|2|Shabnam Shukla|[News](/assets/ijhs/Vol45_2_9_News.pdf)|
|731|2010|2||[Obituary: Professor Ramamurthy Balasubramaniam (1961—2009)](/assets/ijhs/Vol45_2_10_Obituary.pdf)|
|732|2010|2|Venketswara Pai R‚ K Mahesh and K Ramasubramanian|[Supplement: A Commentary of Tantrasangraha in Keralabhasa: Kriyakalapa— Eng. Tr. with Notes](/assets/ijhs/Vol45_2_11_1_Supplement_cover.pdf)|
|733|2010|2|Venketswara Pai R‚ K Mahesh and K Ramasubramanian|[Supplement](/assets/ijhs/Vol45_2_11_2_Supplement_text.pdf)|
|734|2010|4||[Contents](/assets/ijhs/Vol45_4_0_Contents.pdf)|
|735|2010|4|Anil Narayan|[Dating the Surya Siddhanta using Computational Simulation of Proper Motions and Ecliptic Variations](/assets/ijhs/Vol45_4_1_ANarayan.pdf)|
|736|2010|4|Anand M Sharan|[The Lost Knowledge_Accurate Positioning of Planets](/assets/ijhs/Vol45_4_2_ASharan.pdf)|
|737|2010|4|R C Kapoor|[The Historical Significance of the Total Solar Eclipse of Oct 17_1762 passing over Panjab](/assets/ijhs/Vol45_4_3_RCKapoor.pdf)|
|738|2010|4|Gulfishan Khan|[Karim Khan and his Perceptions of Western Science during his visit to Britain in 1840-41](/assets/ijhs/Vol45_4_4_GKhan.pdf)|
|739|2010|4|Harkishan Singh|[Khwaja Abdul Hamied (1898-1972)_Pioneer Scientist Industrialist](/assets/ijhs/Vol45_4_5_HSingh.pdf)|
|740|2010|4|J N Sinha|[Veterinary Science and Animal Husbandry in India_A Case of IVRI at Mukteswar_IzatnagarStudy](/assets/ijhs/Vol45_4_6_JNSinha.pdf)|
|741|2010|4|S R Sarma|[Nandigrama of Ganesa Daivajna](/assets/ijhs/Vol45_4_7_Historicalnotes.pdf)|
|742|2010|4|R C Gupta|[Thakkura Pheru_Ganitasarakaumudi_The Moonlight of the Essence of Mathematics (ed and tr by SaKHYa)](/assets/ijhs/Vol45_4_8_Bookreview.pdf)|
|743|2010|4|D P Agrawal|[Documentation and Study of Archaeometallurgical and Ethnometallurgical Evidence in Uttarakhand with Special Reference to Iron and Copper](/assets/ijhs/Vol45_4_9_ReportsDPAgarwal.pdf)|
|744|2010|4|Jayanta Bhattacharya|[Anatomical Knowledge and the Anatomy of Medical Some Preliminary InquiriesKnowledge in India_Some Preliminary Inquiries](/assets/ijhs/Vol45_4_10_ReportsJayanta.pdf)|
|745|2010|4|Shabnam Shukla|[History of Technology & Technical Education in India_A Synthesis](/assets/ijhs/Vol45_4_11_ReportShukla.pdf)|
|746|2010|4|Madhvendra Narayan|[Mathematics and Astronomy in Medieval India](/assets/ijhs/Vol45_4_12_ReportMNarayan.pdf)|
|747|2010|4||[Book Received for Review](/assets/ijhs/Vol45_4_13_Bookreceived.pdf)|
|748|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English Translationand (Chap 9-13)AppendicesPart 1](/assets/ijhs/Vol45_4_14_SupplementInner.pdf)|
|749|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English Translation Part2](/assets/ijhs/Vol45_4_15_SupChap9English.pdf)|
|750|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 3](/assets/ijhs/Vol45_4_16_SupChap9Sankrit.pdf)|
|751|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 4](/assets/ijhs/Vol45_4_17_SupChap10Sankrit.pdf)|
|752|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 5](/assets/ijhs/Vol45_4_18_SupChap10English.pdf)|
|753|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 6](/assets/ijhs/Vol45_4_19_SupChap11Sankrit.pdf)|
|754|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 7](/assets/ijhs/Vol45_4_20_SupChap11English.pdf)|
|755|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 8](/assets/ijhs/Vol45_4_21_SupChap12Sankrit.pdf)|
|756|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 9](/assets/ijhs/Vol45_4_22_SupChap12English.pdf)|
|757|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 10](/assets/ijhs/Vol45_4_23_SupChap13Sankrit.pdf)|
|758|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 11](/assets/ijhs/Vol45_4_24_SupChap13English.pdf)|
|759|2010|4|Damodar Joshi|[Rasaprakasa Sudhakara Sanskrit Text with English TranslationPart 12](/assets/ijhs/Vol45_4_25_Appendices.pdf)|
|760|2010|4||[Index](/assets/ijhs/Vol45_4_26_Index.pdf)|
|761|2010|4||[Cumulative Index](/assets/ijhs/Vol45_4_27_Cumulativeindex.pdf)|
|762|2010|4||[Annual Contents](/assets/ijhs/Vol45_4_28_AnnualContents.pdf)|
|763|2011|1||[Contents](/assets/ijhs/Vol46_2011_4_Art00_CONTENTS.pdf) &#128148;|
|764|2011|1|Prabhakar Gondhalekar|[Possible Chronological Markers In The Vedic Texts](/assets/ijhs/Vol46_1_1_PGondalekhar.pdf)|
|765|2011|1||[Dhruva the Ancient Indian Pole Star: Fixity Rotation and Movement](/assets/ijhs/Vol46_1_2_RNIyenger.pdf)|
|766|2011|1|OP Jaiswal|[Genesitic Roots and Philosophical Evolution of Vijnanavada (Yogacrya) School of Buddhism](/assets/ijhs/Vol46_1_3_OPJaiswal.pdf)|
|767|2011|1|Vinod Mishra|[Computation of N : A Modern Generalization of Ancient Technique](/assets/ijhs/Vol46_1_4_VMishra.pdf)|
|768|2011|1|Jayanta Bhattacharya|[Arrival of Western Medicine: Ayurvedic Knowledge; Colonial Confrontation and its Outcome](/assets/ijhs/Vol46_1_5_JBhattacharya.pdf) &#128148;|
|769|2011|1|Arun Kumar Biswas|[Science in the Path of Syncretism](/assets/ijhs/Vol46_1_6_AKBiswas.pdf)|
|770|2011|1|Sisir K Majumdar|[Historical Notes: Indian Renaissance: The Making of Modern India](/assets/ijhs/Vol46_1_7_SKMajumdar.pdf)|
|771|2011|1|Sreeramula Rajeswara Sarma|[Historical Notes: Sudoku Yantra](/assets/ijhs/Vol46_1_8_SRSarma.pdf)|
|772|2011|1|Probir K Bondyopadhyay|[Book Review: C K Raju; Cultural Foundations of Mathematics: The Nature of Mathematical Proof and the Transmission of the Calculus from India to Europe in the 16th c AD](/assets/ijhs/Vol46_1_9_Bookreview.pdf)|
|773|2011|1|Arun Kumar Sethi|[Project Reports: A Historical Study of Epilepsy from 1900-2005 AD](/assets/ijhs/Vol46_1_10_Project reportAKSeth.pdf)|
|774|2011|1|Srabani Sen|[Project Reports: 1960-1999: Four Decades of Biochemistry in India](/assets/ijhs/Vol46_1_11_Project reportSSen.pdf)|
|775|2011|1||[News](/assets/ijhs/Vol46_1_12_News.pdf)|
|776|2011|1|Takao Hayashi|[Supplement: Kuttakarauiromani of Devaraja-Sankrit Text with Eng Notes and Appendices](/assets/ijhs/Vol46_1_14_Supplement.pdf)|
|777|2011|1|UKV Sarma; Venketeswara Pai et al|[Supplement: Madhyamanayanaprakarah: An Unknown Manuscript ascribed to Madhava with Eng tr and Notes](/assets/ijhs/Vol46_1_15_Supplement.pdf)|
|778|2011|4||[Contents](/assets/ijhs/Vol46_4_0_Contents.pdf)|
|779|2011|4|T R S Prasanna|[Ancient Indian Astronomy and the Aryan Invasion Theory](/assets/ijhs/Vol46_4_1_TRSPrasanna.pdf)|
|780|2011|4|Bandi Venkateshwarlu and Ala Narayana|[Health Aspects in Pancatantra](/assets/ijhs/Vol46_4_2_BVenkateswarlu.pdf)|
|781|2011|4|R C Gupta|[Mahavira-Pheru Formula for Surface of a Sphere and some other Empirical Rules](/assets/ijhs/Vol46_4_3_RCGupta.pdf)|
|782|2011|4|Sisir K Majumdar|[Historical Notes: Kadambini Ganguli (1861-1923): First Lady Medical Graduate in India](/assets/ijhs/Vol46_4_4_SKMajumdar.pdf)|
|783|2011|4|Purabi Mukherji and Mala Bhattacharjee|[Historical Notes: Trend of Geometrical Researches in Calcutta University: 1881-1931](/assets/ijhs/Vol46_4_5_Purabi.pdf)|
|784|2011|4|Mahendra Prasad Singh|[Book Review: Jagdish N Sinha: Science	War and Imperialism: India in the Second World War](/assets/ijhs/Vol46_4_6_Bookreview.pdf)|
|785|2011|4|Vijaya Jayant Deshpande|[Project Report: Evolution of Ayurvedic Ophthalmology in Ancient and Medieval India: A Critical Study](/assets/ijhs/Vol46_4_7_VJDeshpande.pdf)|
|786|2011|4| P P Deshpande	Sachin Joshi and Shivendra Kadgaonkar|[Project Report: Catalogue of Forge welded iron Cannons in Western Maharashtra](/assets/ijhs/Vol46_4_8_PPDeshpande.pdf)|
|787|2011|4||[News](/assets/ijhs/Vol46_4_9_News.pdf)|
|788|2011|4|Takao Hayashi|[Supplement: Kuttakarasiromani of Devaraja-Sanskrit Text with Eng. tr	Notes and Appendices](/assets/ijhs/Vol46_4_10_Supplement.pdf)|
|789|2011|4||[Cumulative Index](/assets/ijhs/Vol46_4_12_Cumulativeindex.pdf)|
|790|2011|4||[Annual Contents](/assets/ijhs/Vol46_4_13_Annualcontent.pdf)|
|791|2012|1||[Contents](/assets/ijhs/Vol47_1_0_Contents.pdf)|
|792|2012|1|Lu Di|[Ancient Chinese People's Knowledge of Macrofungi during the Period from 220 AD to 589 AD](/assets/ijhs/Vol47_1_1_LDi.pdf)|
|793|2012|1|Dhananjay Vasudeo Dwivedi|[Bilva in Indian Tradition](/assets/ijhs/Vol47_1_2_DVDwivedi.pdf)|
|794|2012|1|Sreeramula Rajeswara Sarma|[The Gurmukhi Astrolabe of the Maharaja of Patiala](/assets/ijhs/Vol47_1_3_SRSarma.pdf)|
|795|2012|1|Jagdish N Sinha|[Role of Scientists in Colonial Bengal](/assets/ijhs/Vol47_1_4_JNSinha.pdf)|
|796|2012|1|Sisir K Majumdar|[Historical Notes: Swami Vivekananda's Thoughts on Science and Religion](/assets/ijhs/Vol47_1_5_SKMajumdar.pdf)|
|797|2012|1|Samir Kumar Saha and Sangita Ghosh|[Historical Notes: Commissions and Committees on Technical Education in Independent India: An Appraisal](/assets/ijhs/Vol47_1_6_SKSaha.pdf)|
|798|2012|1||[Book Review](/assets/ijhs/Vol47_1_7_Bookreview.pdf)|
|799|2012|1|Kaushik Roy|[Project Reports: History of the Ordnance Establishments of British India: 1700-1947](/assets/ijhs/Vol47_1_8_KRoy.pdf)|
|800|2012|1|Pranab K Chattopadhyay|[Project Reports: Documentation of Cannons of Eastern India](/assets/ijhs/Vol47_1_9_PKChattopadhyay.pdf)|
|801|2012|1||[News](/assets/ijhs/Vol47_1_10_News.pdf)|
|802|2012|1||[Supplement](/assets/ijhs/Vol47_1_12_Supplement_cover.pdf)|
|803|2012|1||[Announcement](/assets/ijhs/Vol47_1_14_Announcement.pdf)|
|804|2012|2||[Contents](/assets/ijhs/Vol47_2_0_Contents.pdf)|
|805|2012|2|Sukta Das|[Prevention of Cancer: Evolution of Concepts and Strategies](/assets/ijhs/Vol47_2_1_Sdas.pdf)|
|806|2012|2|Naveena Kodlady and B J Patgiri|[Utilization of Borax In The PharmaceuticoTherapeutics of Ayurveda in India](/assets/ijhs/Vol47_2_2_NKodlady.pdf)|
|807|2012|2|Arabinda Samanta|[Smallpox in Nineteenth Century Bengal](/assets/ijhs/Vol47_2_3_ASamanta.pdf)|
|808|2012|2|V M Ravi Kumar|[Colonialism and Green Science: History of Colonial Scientific Forestry in South India 1820-1920](/assets/ijhs/Vol47_2_4_VMRavikumar.pdf)|
|809|2012|2|Jean Deloche|[Silting and Ancient Sea-Ports of the Tamil Country](/assets/ijhs/Vol47_2_5_JDeloche.pdf)|
|810|2012|2|B S Shylaja|[Historical Notes: Asymmetrical Vedis In Sulbasutras](/assets/ijhs/Vol47_2_6_BSShylaja.pdf)|
|811|2012|2|Vaidyaratnam R Raghavan|[Historical Notes: Patient-Centered Therapy of Ayurveda: Approaches and Applications](/assets/ijhs/Vol47_2_7_VRRaghvan.pdf)|
|812|2012|2|Sisir K Majumdar|[Historical Notes: International Chemistry Year: Centenary of Marie Curie's Second Nobel Laurel 1911](/assets/ijhs/Vol47_2_8_SKMajumdar.pdf)|
|813|2012|2|Anil Narayanan|[Book Review](/assets/ijhs/Vol47_2_9_Bookreview.pdf)|
|814|2012|2|Arun Kumar Biswas|[Project Reports: Calcuttan Science 1784-1930 and the Awakening in India](/assets/ijhs/Vol47_2_10_AKBiswas.pdf)|
|815|2012|2|Chittabrata Palit|[Project Reports: Science and Nationalism In Bengal 1876-1947: Asutosh Mookerjee and Mathematics](/assets/ijhs/Vol47_2_11_CPalit.pdf)|
|816|2012|2||[News](/assets/ijhs/Vol47_2_12_News.pdf)|
|817|2012|3||[Contents](/assets/ijhs/Vol47_3_0_Contents.pdf)|
|818|2012|3|Anil Narayanan|[The Manda Puzzle in Indian Astronomy](/assets/ijhs/Vol47_3_1_ANarayanan.pdf)|
|819|2012|3|Srabani Sen|[Indian Cholera: A Myth](/assets/ijhs/Vol47_3_2_SSen.pdf)|
|820|2012|3|Arun Kumar Biswas|[The Era of Science Enthusiasts in Bengal (1841-1891): Akshayakumar's; Vidyasagar and Rajendralala](/assets/ijhs/Vol47_3_3_AKBiswas.pdf)|
|821|2012|3|Probir K Bondyopadhyay and Lily Banerjee|[The Violin and the Genesis of the Bose Institute in Calcutta](/assets/ijhs/Vol47_3_4_PKBandyopadhyay.pdf)|
|822|2012|3|AK Bag|[Mathematics and Mathematical Researches in India during Fifth to Twentieth Centuries: Profiles and Prospects](/assets/ijhs/Vol47_3_5_AKBag.pdf)|
|823|2012|3|R N Iyengar and V H Satheeshkumar|[Historical Notes: Archaeo-Astronomical Significance of the Vedic Darsapaurnamasa Altar](/assets/ijhs/Vol47_3_6_RNIyengar.pdf)|
|824|2012|3|U B Tewari|[Historical Notes: Professor Ganesh Prasad: An Epitome of Teaching and Research in Modern Mathematics in India](/assets/ijhs/Vol47_3_7_UBTewari.pdf)|
|825|2012|3|B N Dhawan|[Book Review](/assets/ijhs/Vol47_3_8_Bookreview.pdf)|
|826|2012|3|B S Shylaja and Geetha Kaidala|[Project Reports: Stone Inscriptions as Records of Celestial Events](/assets/ijhs/Vol47_3_9_Projectreports.pdf)|
|827|2012|3|A Sripada Bhat|[Project Reports: The Siddhanta Sekhara of Sripati (11th Century) - Text and English Translation](/assets/ijhs/Vol47_3_10_ASBhat.pdf)|
|828|2012|3||[Announcements](/assets/ijhs/Vol47_3_11_Announcements.pdf)|
|829|2013|1||[Contents](/assets/ijhs/Vol48_1_0_Contents.pdf)|
|830|2013|1|Paul T. Craddock|[Two Millennia of the Sea-bourne metals trade with India](/assets/ijhs/Vol48_1_1_PTCraddock.pdf)|
|831|2013|1|Jayanta Bhattacharya|[Travel Accounts and the Eighteenth Century: Indian Medicine and Surgery through travelling gaze](/assets/ijhs/Vol48_1_2_JBhattacharya.pdf)|
|832|2013|1|Arun Kumar Biswas|[Raman Krishnan and the IACS Episodes of the 1930's](/assets/ijhs/Vol48_1_3_AKBiswas.pdf)|
|833|2013|1|Rajinder Singh and Falk Riess|[Belated Nobel Prize for Max Born FRS](/assets/ijhs/Vol48_1_4_Rsingh.pdf)|
|834|2013|1|Satyabachi Sar|[Historical Notes: A Glimpse of Some Results of Ramanujan](/assets/ijhs/Vol48_1_5_Ssar.pdf)|
|835|2013|1|Parul Chakarbarti|[Har Gobind Khorana (1922-2011)-  A Pioneer Nobel Laureate in Molecular Biology](/assets/ijhs/Vol48_1_6_Pchakrabarti.pdf)|
|836|2013|1|Madhvendra Narayan|[Book Review](/assets/ijhs/Vol48_1_7_Bookreview.pdf)|
|837|2013|1|Adya Prasad Pandey|[Project Reports: Indigenous Techniques of Weaving in Silk Industries: A Study in the context of Eastern Uttar Pradesh](/assets/ijhs/Vol48_1_8_APPandey.pdf)|
|838|2013|1|Mahua Sarkar|[Project Reports: Indigenous Knowledge System of the Fishermen of Sunderbans  in West Bengal and their Approaches to Health Sanitation and Climate](/assets/ijhs/Vol48_1_9_Msarkar.pdf)|
|839|2013|1||[News](/assets/ijhs/Vol48_1_10_News.pdf)|
|840|2013|1|Takao Hayashi|[Supplement](/assets/ijhs/Vol48_1_12_Supplement.pdf)|
|841|2013|1||[Form IV](/assets/ijhs/Vol48_1_13_Form IV.pdf)|
|842|2013|2||[Contents](/assets/ijhs/Vol48_2_0_Contents.pdf)|
|843|2013|2|N C Shah|[Sesamum indicum (Sesame or Til): Seeds and oil - An Historical and Scientific evaluation from Indian perspective](/assets/ijhs/Vol48_2_1_NCShah.pdf)|
|844|2013|2|Vijaya J Deshpande|[Ophthalmic Ideas in Ancient India](/assets/ijhs/Vol48_2_2_VDeshpande.pdf)|
|845|2013|2|Jean Deloche|[Water Supply Systems of the Senji (Gingee) Fort in South India(16-18th century)](/assets/ijhs/Vol48_2_3_JDeloche.pdf)|
|846|2013|2|Arun Kumar Biswas|[The Muslim Community response to the Scientific Awakening in the Nineteenth Century India](/assets/ijhs/Vol48_2_4_AKBiswas.pdf)|
|847|2013|2|Jaime Wisniak|[Chemistry of Resinous gums	Dyes	Alkaloids	and Active principles - Contributions of Pelletier and others in the Nineteenth Century](/assets/ijhs/Vol48_2_5_JWisniak.pdf)|
|848|2013|2|B S Shylaja|[Historical Notes: Daksinagni in Sulbasutras - An Astronomical Interpretation](/assets/ijhs/Vol48_2_6_BSShylaja.pdf)|
|849|2013|2|K B Basant and Satyananda Panda|[Historical Notes: Summation of Convergent Geometric Series and the Concept of approachable Sunya](/assets/ijhs/Vol48_2_7_KBBasant.pdf)|
|850|2013|2|Correspondences|[Correspondences](/assets/ijhs/Vol48_2_8_Correspondence.pdf)|
|851|2013|2|Arun Kumar Biswas|[Book Review](/assets/ijhs/Vol48_2_9_BookReview.pdf)|
|852|2013|2|Vibha Tripathi and Prabhakar Upadhyay|"[""Project Reports: An Ethno-technological Study of Iron Working around Sonbhadra region""](/assets/ijhs/Vol48_2_10_VTripathi.pdf)"|
|853|2013|2| Mala Bhattacharjee	Purabi Mukherji and Nandita Mallik|[Project Reports: Pioneer Mathematicians and their role in Calcutta University during the Nineteenth and Twentieth Century](/assets/ijhs/Vol48_2_11_MBhattacharjee.pdf)|
|854|2013|2||[NEWS](/assets/ijhs/Vol48_2_12_News.pdf)|
|855|2013|2|Takao Hayashi|[Supplement](/assets/ijhs/Vol48_2_13_Supplement_inner.pdf)|
|856|2013|3||[Contents](/assets/ijhs/Vol48_3_0_Contents.pdf)|
|857|2013|3|Anil Narayanan|[The Lunar Model in Ancient Indian Astronomy](/assets/ijhs/Vol48_3_1_ANarayanan.pdf)|
|858|2013|3| C Y Jagtap	B J Patgiri and P K Prajapati|[Purification and Detoxification procedures for metal Tamra in Medieval Indian Medicine](/assets/ijhs/Vol48_3_2_CYJagtap.pdf)|
|859|2013|3|R C Kapoor|[Did Ibn Sina observe the transit of Venus 1032 AD?](/assets/ijhs/Vol48_3_3_RCKapoor.pdf)|
|860|2013|3|Suvobrata Sarkar|[Bengali Entrepreneurs and Western Technology in the nineteenth century: A Social Perspective](/assets/ijhs/Vol48_3_4_SSarkar.pdf)|
|861|2013|3|Chittabrata Palit|[Historical notes: Symbiotic relation between Geology and Botany- Pramatha Nath Bose and Girish Chandra Bose](/assets/ijhs/Vol48_3_5_CPalit.pdf)|
|862|2013|3|Sisir K Majumdar|[History and Philosophy of Quantum Physics : An Overview](/assets/ijhs/Vol48_3_6_SKMajumdar.pdf)|
|863|2013|3||[Correspondence](/assets/ijhs/Vol48_3_7_Correspondence.pdf)|
|864|2013|3||[Book Reviews](/assets/ijhs/Vol48_3_8_Bookreview.pdf)|
|865|2013|3|Somenath Chatterjee|[Project Reports: Brahmasiddhanta in Sakalyasamhita-Text	English Translation and Commentary](/assets/ijhs/Vol48_3_9_Project Reports.pdf) &#128148;|
|866|2013|3|Srabani Sen|[Communicable Diseases and Germ Theory in Colonial India - An Assessment](/assets/ijhs/Vol48_3_10_SSen.pdf)|
|867|2013|3||[NEWS](/assets/ijhs/Vol48_3_11_News.pdf)|
|868|2013|3|Takao Hayashi|[Supplement:Ganitamanjari of Ganesa](/assets/ijhs/Vol48_3_12_Supplement_cover.pdf)|
|869|2013|3|Takao Hayashi|[Supplement: Ganitamanjari of Ganesa](/assets/ijhs/Vol48_3_13_Supplement_text.pdf)|
|870|2013|4||[Contents](/assets/ijhs/Vol48_4_0_Contents.pdf)|
|871|2013|4|Bhagyashree Bavare and P P Divakaran|[Genesis and Early Evolution of Decimal Enumeration: Evidence from Number Names in Rigveda](/assets/ijhs/Vol48_4_1_BBaware.pdf)|
|872|2013|4|Virendra N sharma|[Kapa-la Yantra at Sawai Jai Singh's Jaipur Observatory](/assets/ijhs/Vol48_4_2_VNSharma.pdf)|
|873|2013|4|Anand M Sharan|[The Udayagiri Lion Pillar and its Astronomical Significance in Ancient India](/assets/ijhs/Vol48_4_3_AMSharan.pdf) &#128148;|
|874|2013|4|Pratibha Mandal|[A Glimpse of the Garo Tangible Medicine: The Ruga-Garo Picture](/assets/ijhs/Vol48_4_4_PMandal.pdf)|
|875|2013|4|Sukta Das|[Prevention of Diabetes- A Historical Note](/assets/ijhs/Vol48_4_5_SuktaDas.pdf)|
|876|2013|4|R C Gupta|[M Rangacharya and his Century Old Translation of the Ganita Sarasangraha](/assets/ijhs/Vol48_4_6_ RCGupta)|
|877|2013|4||[Correspondence: The Lunar Model in Ancient Indian Astronomy](/assets/ijhs/Vol48_4_7_Correspondence.pdf)|
|878|2013|4||[Book Review](/assets/ijhs/Vol48_4_8_Book Review)|
|879|2013|4|Jayanta Bhattacharya|[Indian Medicine through Travellers' Accounts	with emphasis on Anatomical Knowledge: 17-19th Century](/assets/ijhs/Vol48_4_9_Project Report_ Jbhattacharyya)|
|880|2013|4|B K Sen|[Growth of Scientific Socities in India (1784-1947)](/assets/ijhs/Vol48_4_10_ProjectReport_ BKSen)|
|881|2013|4|S M Razaullah Ansari|[News](/assets/ijhs/Vol48_4_11_ News)|
|882|2013|4||[Books received for Review in IJHS: 2013](/assets/ijhs/Vol48_4_12_BookReceivedForReview)|
|883|2013|4||[Cumulative Index : Vol. 48.1-4 (2013)](/assets/ijhs/Vol48_4_13_CumulativeIndex)|
|884|2013|4||[Annual Contents: Vol. 48.1-4 (2013)](/assets/ijhs/Vol48_4_14_AnnualContent)|
|885|2014|1|Contents|[Contents](/assets/ijhs/Vol49_1_0_Contents.pdf)|
|886|2014|1|Pranab K Chattopadhayay and Ashok Purty|[Ho Tribes of Eastern India and their Metallurgical traditions](/assets/ijhs/Vol49_1_1_PK_chattopadhyay.pdf) &#128148;|
|887|2014|1|Shraddha N Dhundi & PK Prajapati|[Critical review on Makaradhvaja- A Herbomineral Formulation](/assets/ijhs/Vol49_1_2_SNDhundi.pdf)|
|888|2014|1|Sujit Dasgupta and Basab Mukhopadhyay|[1803 Earthquake in Garhwal Himalaya-Archival materials with commentary](/assets/ijhs/Vol49_1_3_Sdasgupta.pdf)|
|889|2014|1|S K Jain and Harsh Singh|[India's notable presence in Linnaeus' Botanical Classification](/assets/ijhs/Vol49_1_4_SKJain.pdf)|
|890|2014|1|Shrikant Mishra and Bhavesh Trikamji|[The medical maladies of Sir George Everest during the Great Trigonometric Survey of India](/assets/ijhs/Vol49_1_5_Kmishra.pdf)|
|891|2014|1|Subrata Bhowmik|[HISTORICAL NOTES- A glimpse of rule of logic in Gautama's Nyaya-Sutra](/assets/ijhs/Vol49_1_6_Sbhowmik.pdf)|
|892|2014|1|Sisir K Majumdar|[Inquisitiveness for Science in Tagore Poems](/assets/ijhs/Vol49_1_7_SKMajumdar.pdf)|
|893|2014|1|J J Shah|[Botanist Jaykrishnabhai: 1849-1929](/assets/ijhs/Vol49_1_8_JJShah.pdf)|
|894|2014|1|Purabi Mukherji and Mala Bhattacharjee|[Bengal School of Fluid Mechanics: Nineteenth and Twentieth Century](/assets/ijhs/Vol49_1_9_Pmukherji.pdf)|
|895|2014|1|Book Review|[Book Review](/assets/ijhs/Vol49_1_10_Book Review.pdf)|
|896|2014|1|Senu Kurien George|[PROJECT REPORTS- English translation of Jyotsnika: An Ayurvedic text on Vi?avidya](/assets/ijhs/Vol49_1_11_SKGeorge.pdf)|
|897|2014|1|Subhasis Biswas|[Forestry Research in India (1861-2005): Historic Evolution with a Case Study](/assets/ijhs/Vol49_1_12_Sbiswas.pdf)|
|898|2014|1|NEWS|[NEWS](/assets/ijhs/Vol49_1_13_News.pdf)|
|899|2014|2||[Contents](/assets/ijhs/Vol49_3_0_Contents.pdf)|
|900|2014|2|R N Iyengar|[Parasara's Six Season Solar Zodiac and Heliacal Visibility of Star Agastya in 1350-1130 BC](/assets/ijhs/Vol49_3_1_RN_Iyengar.pdf)|
|901|2014|2||[Editorial](/assets/ijhs/Vol49_2_1_Editorial.pdf)|
|902|2014|2||[Guest Editorial](/assets/ijhs/Vol49_2_2_GuestEditorial.pdf)|
|903|2014|2|Dhananjay Vasudeo Dwivedi|[Plant Diseases and their Treatment in Sanskrit Literature](/assets/ijhs/Vol49_3_2_Dwivedi.pdf)|
|904|2014|2|Nidhi Handa and Padmavati Taneja|[Methods of Interpolation in Indian Astronomy](/assets/ijhs/Vol49_3_3_NHanda.pdf)|
|905|2014|2|Kim Plofker|[Sanskrit Astronomical Tables: The State of the Field](/assets/ijhs/Vol49_2_3_KPlofker.pdf)|
|906|2014|2|Agathe Keller|[Bhaskara I's Versified Solutions of a Linear Indeterminate Equation](/assets/ijhs/Vol49_2_4_AKeller.pdf)|
|907|2014|2|Dipak Jadhav|[Nemicandra's Rules for Computing Multiplier and Divisor](/assets/ijhs/Vol49_3_4_DJadhav.pdf)|
|908|2014|2|Vladislav-Veniamin Pustynski|[On Mathematical Complexity of Sriyantra](/assets/ijhs/Vol49_3_5_Pustynski.pdf)|
|909|2014|2|Toke Knudsen|[Versified Sine Tables in Jnanaraja's Siddhantasundara](/assets/ijhs/Vol49_2_5_TKnudsen.pdf)|
|910|2014|2|V Madhukar Mallayya|[Trigonometric Tables in India](/assets/ijhs/Vol49_2_6_VMallayya.pdf)|
|911|2014|2|Nirmala Shah|[Techno-Scientific Education and the Indian National Congress (1885-1918)](/assets/ijhs/Vol49_3_6_NShah.pdf)|
|912|2014|2|Deepak Bhattacharya|[Historical Notes: Select Palm Leaf Manuscripts on Health Care](/assets/ijhs/Vol49_3_7_DBhatacharya.pdf)|
|913|2014|2|K Mahesh|[Sankramavakyas of the Vakyakarana](/assets/ijhs/Vol49_2_7_KMahesh.pdf)|
|914|2014|2|Clemency Montelle|[The Karanakesari Tables for Computing Eclipse Phenomena](/assets/ijhs/Vol49_2_8_CMontelle.pdf)|
|915|2014|2|R Sridharan|[Historical Notes: Some Nineteenth Century Indian Mathematicians Prior to Ramanujan](/assets/ijhs/Vol49_3_8_RSridharan.pdf)|
|916|2014|2|Sisir K Majumdar|[Historical Notes: Bankim Chandra-First Writer of Popular Science in Bengali](/assets/ijhs/Vol49_3_9_SKMajumdar.pdf)|
|917|2014|2| K Rupa	Padmaja Venugopal and S Balachandra Rao|[Makaranda Sarini and Allied Saurapakna Tables -A Study](/assets/ijhs/Vol49_2_9_KRupa.pdf)|
|918|2014|2||[Book Review: R N Iyengar - Parasaratantra: Ancient Sanskrit Text on Astronomy and Natural Sciences](/assets/ijhs/Vol49_2_10_BookReview.pdf)|
|919|2014|2|K B Basant and Satyananda Panda|[Historical Notes: Some Applications of First Approachable Sunya and Derivation of other Approachable Sunyas](/assets/ijhs/Vol49_3_10_KBBasant.pdf)|
|920|2014|2|R C Gupta|[Book Review: Sita Sundar Ram-Bijapallava of Krsna Daivajna: Algebra in Sixteen Century India-A Critical Study](/assets/ijhs/Vol49_3_11_RCGupta.pdf)|
|921|2014|2|Sreekumar Nellickappilly|[Project Report: The Traditional Ayurveda Practicing by Parambarya Vaidyas in Kerala and their Unique Ethical Outlook](/assets/ijhs/Vol49_3_12_SNellickappilly.pdf)|
|922|2014|2|Pratibha Mandal|[Project Reports: The Garo Perception of Disease and Medicine: A History Since the British Regime in the Indian Sub-Continent](/assets/ijhs/Vol49_3_13_PMandal.pdf)|
|923|2014|2||[NEWS](/assets/ijhs/Vol49_3_14_NEWS.pdf)|
|924|2014|3||[Contents](/assets/ijhs/Vol49_3_0_Contents.pdf)|
|925|2014|3|R N Iyengar|[Parasara's Six Season Solar Zodiac and Heliacal Visibility of Star Agastya in 1350-1130 BC](/assets/ijhs/Vol49_3_1_RN_Iyengar.pdf)|
|926|2014|3|Dhananjay Vasudeo Dwivedi|[Plant Diseases and their Treatment in Sanskrit Literature](/assets/ijhs/Vol49_3_2_Dwivedi.pdf)|
|927|2014|3|Nidhi Handa and Padmavati Taneja|[Methods of Interpolation in Indian Astronomy](/assets/ijhs/Vol49_3_3_NHanda.pdf)|
|928|2014|3|Dipak Jadhav|[Nemicandra's Rules for Computing Multiplier and Divisor](/assets/ijhs/Vol49_3_4_DJadhav.pdf)|
|929|2014|3|Vladislav-Veniamin Pustynski|[On Mathematical Complexity of Sriyantra](/assets/ijhs/Vol49_3_5_Pustynski.pdf)|
|930|2014|3|Nirmala Shah|[Techno-Scientific Education and the Indian National Congress (1885-1918)](/assets/ijhs/Vol49_3_6_NShah.pdf)|
|931|2014|3|Deepak Bhattacharya|[Historical Notes: Select Palm Leaf Manuscripts on Health Care](/assets/ijhs/Vol49_3_7_DBhatacharya.pdf)|
|932|2014|3|R Sridharan|[Historical Notes: Some Nineteenth Century Indian Mathematicians Prior to Ramanujan](/assets/ijhs/Vol49_3_8_RSridharan.pdf)|
|933|2014|3|Sisir K Majumdar|[Historical Notes: Bankim Chandra-First Writer of Popular Science in Bengali](/assets/ijhs/Vol49_3_9_SKMajumdar.pdf)|
|934|2014|3|K B Basant and Satyananda Panda|[Historical Notes: Some Applications of First Approachable Sunya and Derivation of other Approachable Sunyas](/assets/ijhs/Vol49_3_10_KBBasant.pdf)|
|935|2014|3|R C Gupta|[Book Review: Sita Sundar Ram-Bijapallava of Krsna Daivajna: Algebra in Sixteen Century India-A Critical Study](/assets/ijhs/Vol49_3_11_RCGupta.pdf)|
|936|2014|3|Sreekumar Nellickappilly|[Project Report: The Traditional Ayurveda Practicing by Parambarya Vaidyas in Kerala and their Unique Ethical Outlook](/assets/ijhs/Vol49_3_12_SNellickappilly.pdf)|
|937|2014|3|Pratibha Mandal|[Project Reports: The Garo Perception of Disease and Medicine: A History Since the British Regime in the Indian Sub-Continent](/assets/ijhs/Vol49_3_13_PMandal.pdf)|
|938|2014|3||[NEWS](/assets/ijhs/Vol49_3_14_NEWS.pdf)|
|939|2014|4||[Contents](/assets/ijhs/Vol49_4_0_Contents.pdf)|
|940|2014|4||[Editorial](/assets/ijhs/Vol49_4_1_Editorial.pdf)|
|941|2014|4||[Guest Editorial](/assets/ijhs/Vol49_4_2_Guest_Editorial.pdf)|
|942|2014|4|Animesh Chakravorty|[The Chemical Researches of Acharya Prafulla Chandra Ray](/assets/ijhs/Vol49_4_3_AChakravorty.pdf)|
|943|2014|4|Kankan Bhattacharyya|[Early Research in Physical Chemistry in India](/assets/ijhs/Vol49_4_4_KBhattacharyya.pdf)|
|944|2014|4|K Nagarajan|[History of Natural Products Chemistry in India](/assets/ijhs/Vol49_4_5_KNagarajan.pdf)|
|945|2014|4|K Nagarajan|[Indian Organic Chemical Industry: Decades of Struggle & Achievements](/assets/ijhs/Vol49_4_6_AVRRao.pdf)|
|946|2014|4|Harikishan Singh|[Medicinal Chemistry Research in India](/assets/ijhs/Vol49_4_7_HSingh.pdf)|
|947|2014|4|A K Shukla and T Prem Kumar|[A Short History of Electrochemistry in India](/assets/ijhs/Vol49_4_8_AKShukla.pdf)|
|948|2014|4|Mira Roy|[Historical Notes: Manuscripts on Alchemy in India - Commentaries and Editions](/assets/ijhs/Vol49_4_9_MRoy.pdf)|
|949|2014|4|B K Sen|[Chemical Research in British India (1788-1900)](/assets/ijhs/Vol49_4_10_BKSen.pdf)|
|950|2014|4|Dhruv Raina|[The Making of a Classic: The Contemporary Significance of P. C. Ray's Historical Approach](/assets/ijhs/Vol49_4_11_DRaina.pdf)|
|951|2014|4|Prajit K Basu|[Good Life	Self-Sufficiency and Chemical Knowledge: Through The Chemical Worls View of Late Jnan Chandra Ghosh](/assets/ijhs/Vol49_4_12_PKBasu.pdf)|
|952|2014|4||[Book Reviews](/assets/ijhs/Vol49_4_13_Bookreview.pdf)|
|953|2014|4||[Books Received for Review](/assets/ijhs/Vol49_4_14_Bookreceived.pdf)|
|954|2014|4||[Cumulative Index](/assets/ijhs/Vol49_4_15_CumulativeIndex.pdf)|
|955|2014|4||[Annual Contents 2014](/assets/ijhs/Vol49_4_16_AnnualContents2014.pdf)|
|956|2015|1||[Contents](/assets/ijhs/Vol50_2015_1_Contents.pdf)|
|957|2015|1|Raghavendra Gadagkar|[Massage  From: President INSA](/assets/ijhs/Vol50_2015_1_Message_President.pdf)|
|958|2015|1| D Balasubramanian	A K Bag|[Editorial](/assets/ijhs/Vol50_2015_1_Art01.pdf)|
|959|2015|1|A K Bag|[Early System of Naksatras	Calendar and Antiquity of the Vedic & Harappan Traditions](/assets/ijhs/Vol50_2015_1_Art02.pdf)|
|960|2015|1|N C Shah|[Soma	an Enigmatic	Mysterious Plant of the Vedic Aryas: An Appraisal](/assets/ijhs/Vol50_2015_1_Art03.pdf)|
|961|2015|1|Vasant Shinde|[Crafts and Technologies of the Chalcolithic People of South Asia: An Overview](/assets/ijhs/Vol50_2015_1_Art04.pdf)|
|962|2015|1|Paul T Craddock|[The Metal Casting Traditions of South Asia: Continuity and Innovation](/assets/ijhs/Vol50_2015_1_Art05.pdf)|
|963|2015|1|Ram H Singh|[Foundations of Immunology in Ayurvedic classics](/assets/ijhs/Vol50_2015_1_Art06.pdf)|
|964|2015|1|Jayanta Bhattacharyra|[From Persons to Hospital Cases: The Rise of Hospital Medicine and the Calcutta Medical College in India](/assets/ijhs/Vol50_2015_1_Art07.pdf)|
|965|2015|1|Hetal Amin|[Historical Note: Concept of Manas in Samkhya Darsana](/assets/ijhs/Vol50_2015_1_Art08.pdf)|
|966|2015|1|Sukta Das|[Historical Note: Percetion of Food and Nutrition and Dietary Recommendation in Health and Disease: Focus on Caraka-Susruta Samhitas](/assets/ijhs/Vol50_2015_1_Art09.pdf)|
|967|2015|1|Jean Deloche|[Historical Note: Old Water-Works on the Eastern Part of Mysore Plateau](/assets/ijhs/Vol50_2015_1_Art10.pdf)|
|968|2015|1|AKBag|[Book Review: A Selected Works of Gurugovinda Chakravarti on Ancient and Medieval Indian Mathematics](/assets/ijhs/Vol50_2015_1_Art11.pdf)|
|969|2015|1|D Banerjea|[Book Review: History of Science in India	Vol. III: Chemical Science](/assets/ijhs/Vol50_2015_1_Art12.pdf)|
|970|2015|1|Usha Bajpai|[Project Report: Use of Solar Passice Concepts in the Avadh Architechtectural Buildings and their Modified Impact](/assets/ijhs/Vol50_2015_1_Art13.pdf)|
|971|2015|1|S R Sharma|[News: Magic Square for 2015](/assets/ijhs/Vol50_2015_1_Art14.pdf)|
|972|2015|1|Madhavendra Narayan|[News: 900th Birth Anniversary of Bhaskaracarya: A Brief Report](/assets/ijhs/Vol50_2015_1_Art15.pdf)|
|973|2015|3||[Contents](/assets/ijhs/Vol50_2015_3_CONTENTS.pdf)|
|974|2015|3|AK Bag|[Ideas and Researches on Physical Concepts in India](/assets/ijhs/Vol50_2015_3_Art01.pdf)|
|975|2015|3|Harkishan Singh|[Kanny Lall Dey– Pioneer Proponent of Indigenous Drugs](/assets/ijhs/Vol50_2015_3_Art02.pdf)|
|976|2015|3|Kankan Bhattacharyya|[Sir Asutosh and Rise of Modern Science in India](/assets/ijhs/Vol50_2015_3_Art03.pdf)|
|977|2015|3|Animesh Chakravorty|[The Doctoral Research of Acharya Prafulla Chandra Ray](/assets/ijhs/Vol50_2015_3_Art04.pdf)|
|978|2015|3|S C Roy|[D M Bose and Cosmic Ray Research](/assets/ijhs/Vol50_2015_3_Art05.pdf)|
|979|2015|3|Girjesh Govil|[An Account of the Development of Nuclear Magnetic Resonance (NMR) in India](/assets/ijhs/Vol50_2015_3_Art06.pdf)|
|980|2015|3|Jaime Wisniak|[Historical Notes: Electrochemistry and Fuel Cells: The Contribution of William Robert Grove](/assets/ijhs/Vol50_2015_3_Art07.pdf)|
|981|2015|3|Sujit Dasgupta|[Historical Notes: Historiography and Commentary on the Nepal - India Earthquake of 26 August 1833](/assets/ijhs/Vol50_2015_3_Art08.pdf)|
|982|2015|3|Gagandip Cheema|[Historical Notes: Rabies	Anti-Rabic Vaccine and the Raj](/assets/ijhs/Vol50_2015_3_Art09.pdf)|
|983|2015|3|Jagdish N Sinha|[Historical Notes: Features of Mathematical Sciences in India in the Second World War](/assets/ijhs/Vol50_2015_3_Art10.pdf)|
|984|2015|3|B K Sen|[Historical Notes: Doctorate Degrees from India: 1877 (first award) to 1920](/assets/ijhs/Vol50_2015_3_Art11.pdf)|
|985|2015|3|P Ram Manohar|[Project Report: English Translation with critical notes and indexing of Pathyapathyaviniscaya - A 16](/assets/ijhs/Vol50_2015_3_Art12.pdf)|
|986|2015|3|Raja Sridhran|[Book Review: Taming the Unknown - A History of Algebra from Antiquity to the Early Twentieth Century](/assets/ijhs/Vol50_2015_3_Art13.pdf)|
|987|2015|3||[News](/assets/ijhs/Vol50_2015_3_Art14.pdf)|
|988|2015|4|Issue 4|[Contents](/assets/ijhs/Vol50_2015_4_CONTENTS.pdf)|
|989|2015|4|Raghava S Boddupalli and Vedam Venkata Rama Sastri|[Sacrificially Important Trees Revealed in the Krsna Yajurveda Samhita- Their Description and Uses](/assets/ijhs/Vol50_2015_4_Art01.pdf)|
|990|2015|4|Ram H Singh|[Identity and Attributes of Ayurvedic Medicinal Plant Brahmi/Aindri from Antiquity to the Modern Age](/assets/ijhs/Vol50_2015_4_Art02.pdf)|
|991|2015|4|S M Razaullah Ansari|[Survey of Zijes Written in the Subcontinent](/assets/ijhs/Vol50_2015_4_Art03.pdf)|
|992|2015|4|Takao Hayashi|[Nilakanthas Value of R-Sine for the Arc of Twenty-four Degrees](/assets/ijhs/Vol50_2015_4_Art04.pdf)|
|993|2015|4|Deepak Kumar|[HISTEM and the Making of Modern India — Some Questions and Explanations](/assets/ijhs/Vol50_2015_4_Art05.pdf)|
|994|2015|4| Bhushan Patwardhan	Sharad Deshpande	Girish Tillu|[Historical Note: In Search of Roots: Tracing the History and Philosophy of Indian Medicine](/assets/ijhs/Vol50_2015_4_Art06.pdf)|
|995|2015|4|Shrikant Mishra et al.|[Historical Note: Trigonometrical Survey of India and Naming of Peak XV as Mt. Everest](/assets/ijhs/Vol50_2015_4_Art07.pdf)|
|996|2015|4|BV Subbarayappa|[Correspondence: Ideas and Researches on Physical Concepts in India](/assets/ijhs/Vol50_2015_4_Art08.pdf)|
|997|2015|4|S Sundara Rajan|[Book Review: Medicine	Trade and Empire: Garcia de Orta’s Colloquies on the Simples and Drugs of India (1563) in Context](/assets/ijhs/Vol50_2015_4_Art09.pdf)|
|998|2015|4|K Naveena|[Project Report: English Translation of Rasendra Cudamani](/assets/ijhs/Vol50_2015_4_Art10.pdf)|
|999|2015|4|Madhvendra Narayan|[News: History of Science Seminar on the Indian Heritage: A Genomic View- A Report](/assets/ijhs/Vol50_2015_4_Art11.pdf)|
|1000|2015|4|Announcements|[Books Received for Review and](/assets/ijhs/Vol50_2015_4_Art12.pdf)|
|1001|2015|4|Year 2015|[Cumulative Index](/assets/ijhs/Vol50_2015_4_Art13.pdf)|
|1002|2015|4|Volume 50.1-4 (2015)|[Annual Contents](/assets/ijhs/Vol50_2015_4_Art14.pdf)|
|1003|2016|1|Contents|[Contents](/assets/ijhs/Vol51_2016_1_Art01.pdf)|
|1004|2016|1|A K Bag|[Editorial: Tradition & Methodology of Knowledge Production](/assets/ijhs/Vol51_2016_1_Art02.pdf)|
|1005|2016|1|Rajan Gurukkal|[Guest Editorial](/assets/ijhs/Vol51_2016_1_Art03.pdf)|
|1006|2016|1|Rajan Gurukkal|[An Introductory Outline of Knowledge Production in Pre-colonial India](/assets/ijhs/Vol51_2016_1_Art04.pdf)|
|1007|2016|1|Sharada Srinivasan|[Metallurgy of Zinc	High-tin Bronze and Gold in Indian Antiquity: Methodological Aspects](/assets/ijhs/Vol51_2016_1_Art05.pdf)|
|1008|2016|1|M S Valiathan|[Carakas Approach to Knowledge](/assets/ijhs/Vol51_2016_1_Art06.pdf)|
|1009|2016|1|M R Raghava Varier|[Origins and Growth of Ayurvedic Knowledge](/assets/ijhs/Vol51_2016_1_Art07.pdf)|
|1010|2016|1|S N Venugopalan Nair and Darshan Shankar|[Knowledge Generation in Ayurveda: Methodological Aspects](/assets/ijhs/Vol51_2016_1_Art08.pdf)|
|1011|2016|1|P P Divakaran|[What is Indian about Indian Mathematics?](/assets/ijhs/Vol51_2016_1_Art09.pdf)|
|1012|2016|1| S Balachandra Rao	Rupa K and Padmaja Venugopal|[Heliacal Rising of Canopus in Indian Astronomy](/assets/ijhs/Vol51_2016_1_Art10.pdf)|
|1013|2016|1|C Rajendran|[Inference as a Means of Valid Knowledge in Indian Epistemological Tradition](/assets/ijhs/Vol51_2016_1_Art11.pdf)|
|1014|2016|1|A Raghuramaraju|[Debate as a Methodology of Knowledge Production in Pre-Modern India](/assets/ijhs/Vol51_2016_1_Art12.pdf)|
|1015|2016|1|Sundar Sarukkai|[Translation as Method: Implications for History of Science](/assets/ijhs/Vol51_2016_1_Art13.pdf)|
|1016|2016|1|R Champakalakshmi|[In Search of the Beginnings and Growth of Knowledge Production in Tamil](/assets/ijhs/Vol51_2016_1_Art14.pdf)|
|1017|2016|1|Y Subbarayalu|[A Note on Grammatical Knowledge in Early Tamilakam](/assets/ijhs/Vol51_2016_1_Art15.pdf)|
|1018|2016|1|Mundoli Narayanan|[Body Centric Knowledge: Traditions of Performance and Pedagogy in Kathakali](/assets/ijhs/Vol51_2016_1_Art16.pdf)|
|1019|2016|1|Naresh Keerthi|[The Polysemy of the Prabandha – Reading a Premodern Musical Genre](/assets/ijhs/Vol51_2016_1_Art17.pdf)|
|1020|2016|1|RV Achari|[From the Mythology of Vastusastra to the Methodology of Vastuvidya](/assets/ijhs/Vol51_2016_1_Art18.pdf)|
|1021|2016|2A||[Contents](/assets/ijhs/Vol51_2016_2_1_Art00.pdf)|
|1022|2016|2A|T M Srinivasan|[Agricultural Practices as gleaned from the Tamil Literature of the Sangam Age](/assets/ijhs/Vol51_2016_2_1_Art01.pdf)|
|1023|2016|2A|Dipak Jadhav and Anupam Jain|[Combinatorics as Found in the Gommatsara of Nemichandra](/assets/ijhs/Vol51_2016_2_1_Art02.pdf)|
|1024|2016|2A|B S Shylaja and Geetha Kydala|[Records of Vyatipata in Stone Inscriptions](/assets/ijhs/Vol51_2016_2_1_Art03.pdf)|
|1025|2016|2A| I Mohammed Tabarak Hussain	Ghufran Ahmed	Nasreen|[Pathophysiology and Treatment of Urolithiasis in Unani Medicine](/assets/ijhs/Vol51_2016_2_1_Art04.pdf)|
|1026|2016|2A|Debashis Mandal|[Techno-Engineering Education and the Railways in Colonial India](/assets/ijhs/Vol51_2016_2_1_Art05.pdf)|
|1027|2016|2A|Harkishan Singh|[Sahib Singh Sokhey (1887-1971): An Eminent Medico-Pharmaceutical Professional](/assets/ijhs/Vol51_2016_2_1_Art06.pdf)|
|1028|2016|2A|BN Narhari Achar|[Historical Notes: Revisiting the Calendar Tradition of Ancient India](/assets/ijhs/Vol51_2016_2_1_Art07.pdf)|
|1029|2016|2A|Sukta Das|[Historical Notes: Genesis and Progress in Concepts of Preventive Cardiology: A Historical Overview](/assets/ijhs/Vol51_2016_2_1_Art08.pdf)|
|1030|2016|2A|CB Palit|[Historical Notes: Girish Chandra Bose and Agricultural Journalism](/assets/ijhs/Vol51_2016_2_1_Art09.pdf)|
|1031|2016|2A|Ashish Lahiri|[Historical Notes: Radhanath Sikdar and the Final Phase of Measuring Peak XV](/assets/ijhs/Vol51_2016_2_1_Art10.pdf)|
|1032|2016|2A|Madhvendra Narayan|[Book Review: Flood Finbarr B—Objects of Translation – Material Culture and Medieval “Hindu-Muslim](/assets/ijhs/Vol51_2016_2_1_Art11.pdf)|
|1033|2016|2A|Niladri Sarkar|[Project Report: Study of Indus Valley Scripts through Linguistic and Markov Chain Methods](/assets/ijhs/Vol51_2016_2_1_Art12.pdf)|
|1034|2016|2A|Sripad Bhat|[Project Report: English Translation of Second part of Siddhanta Sekhara of Sripati](/assets/ijhs/Vol51_2016_2_1_Art13.pdf)|
|1035|2016|2B||[Contents](/assets/ijhs/Vol51_2016_2_2_Art00.pdf)|
|1036|2016|2B|D Balasubramanian and AK Bag|[Editorial](/assets/ijhs/Vol51_2016_2_2_Art01.pdf)|
|1037|2016|2B|Partha P Majumder|[Guest Editorial](/assets/ijhs/Vol51_2016_2_2_Art02.pdf)|
|1038|2016|2B|H Y Mohan Ram|[Iconic Flora of Heritage Significance in India](/assets/ijhs/Vol51_2016_2_2_Art03.pdf)|
|1039|2016|2B|Ajit K Shasany|[The Holy Basil (Ocimum sanctum L.) and its Genome](/assets/ijhs/Vol51_2016_2_2_Art04.pdf)|
|1040|2016|2B|Partha P Majumder|[Genome and Evolution of the Sacred Lotus](/assets/ijhs/Vol51_2016_2_2_Art05.pdf)|
|1041|2016|2B|Akhilesh K Tyagi|[Decoded Rice Genome for Decipherment of Origin	Domestication and Functional Attributes of Rice](/assets/ijhs/Vol51_2016_2_2_Art06.pdf)|
|1042|2016|2B| Nagendra K Singh	Ajay K Mahato et al.	|[Origin	Diversity and Genome Sequence of Mango (Mangifera indica L.)](/assets/ijhs/Vol51_2016_2_2_Art07.pdf)|
|1043|2016|2B|Raman Sukumar|[Iconic Fauna of Heritage Significance in India](/assets/ijhs/Vol51_2016_2_2_Art08.pdf)|
|1044|2016|2B|Samuel Zschokke|[Genetic Structure of the Wild Populations of the Indian Rhinoceros (Rhinoceros unicornis)](/assets/ijhs/Vol51_2016_2_2_Art09.pdf)|
|1045|2016|2B|Sandeep Sharma|[Gene flow and Evolutionary History of Tigers in Central India](/assets/ijhs/Vol51_2016_2_2_Art10.pdf)|
|1046|2016|2B|T N C Vidya|[Evolutionary History and Population Genetic Structure of Asian Elephants in India](/assets/ijhs/Vol51_2016_2_2_Art11.pdf)|
|1047|2016|2B|Analabha Basu|[The Dazzling Diversity and the Fundamental Unity: Peopling and the Genomic Structure of Ethnic India](/assets/ijhs/Vol51_2016_2_2_Art12.pdf)|
|1048|2016|2B|P Ram Manohar|[Historical Note: Medical Genetics in Classical Ayurvedic Texts: A Critical Review](/assets/ijhs/Vol51_2016_2_2_Art13.pdf)|
|1049|2016|2B|DP Kasbekar|[Historical Note: History and Development of Genetics Research in India: Three case studies](/assets/ijhs/Vol51_2016_2_2_Art14.pdf)|
|1050|2016|3|Contents|[Contents](/assets/ijhs/Vol51_2016_3_Art00.pdf)|
|1051|2016|3| M Singh	S Vinodh Kumar and Sujata Waghmare|[Mud Plaster Wall Paintings of Bhaja Caves: Composition and Performance Characteristics](/assets/ijhs/Vol51_2016_3_Art01.pdf)|
|1052|2016|3|D P Roy|[Role of Experiments in the Progress of Science: Lessons from our History](/assets/ijhs/Vol51_2016_3_Art02.pdf)|
|1053|2016|3|Sergei Maslikov and Sreeramula Rajeswara Sarma|[A Lahore Astrolabe of 1587 at Moscow: Enigmas in its Construction](/assets/ijhs/Vol51_2016_3_Art03.pdf)|
|1054|2016|3|Saumitra Basu|[Madras Lunatic Asylum: A Remarkable History in British India](/assets/ijhs/Vol51_2016_3_Art04.pdf)|
|1055|2016|3|G S Rautela and Kanchan Chowdhury|[Science	Science Literacy and Communication](/assets/ijhs/Vol51_2016_3_Art05.pdf)|
|1056|2016|3|K Chandra Hari|[Historical Note: On the Visibility of Agastya (Canopus) in India](/assets/ijhs/Vol51_2016_3_Art06.pdf)|
|1057|2016|3|Rajinder Singh|[Historical Note: The Nobel Laureate W.C. Roentgen and His X-Rays](/assets/ijhs/Vol51_2016_3_Art07.pdf)|
|1058|2016|3|Utpal Mukhopadhyay and Saibal Ray|[Historical Note: N C Rana: Life and His Contributions in Astrophysical Science](/assets/ijhs/Vol51_2016_3_Art08.pdf)|
|1059|2016|3|S Sundara Rajan|[Project Report: Amarakosa – A Biological Assessment](/assets/ijhs/Vol51_2016_3_Art09.pdf)|
|1060|2016|3|Raktim Ranjan Saikia and D Nurul Amin|[Project Report: A Study on River Channel Modifications of Jorhat District of Assam](/assets/ijhs/Vol51_2016_3_Art10.pdf)|
|1061|2016|3|S. M. Razaullah Ansari|[Corrections and Additions: Survey of Zijes Written in the Subcontinent](/assets/ijhs/Vol51_2016_3_Art11.pdf)|
|1062|2016|4|Contents|[Contents](/assets/ijhs/Vol51_4_2016_Contents.pdf)|
|1063|2016|4|AK Bag|[Editorial](/assets/ijhs/Vol51_4_2016_Art01.pdf)|
|1064|2016|4|Lotika Vardarajan and Surajit Sarkar|[Guest Editorial](/assets/ijhs/Vol51_4_2016_Art02.pdf)|
|1065|2016|4|Daryoosh Akbarzadeh|[An Indic Text on Earth Science: Sasanian to Post-Sasanian Period](/assets/ijhs/Vol51_4_2016_Art03.pdf)|
|1066|2016|4|Anamika Pathak|[Throne — Asandi	Pallanka	Simhasana: An Indian Perspective](/assets/ijhs/Vol51_4_2016_Art04.pdf)|
|1067|2016|4|Katayoun Fekripour|[The Hybrid Creatures in Iranian and Indian Art](/assets/ijhs/Vol51_4_2016_Art05.pdf)|
|1068|2016|4|Azadeh Heidarpoor and Fariba Sharifian|[Commonalities between Yajna Ritual in India and Yasna Ritual in Iran](/assets/ijhs/Vol51_4_2016_Art06.pdf)|
|1069|2016|4|Sharada Srinivasan|[Indian High-Tin Bronzes and the Grecian and Persian World](/assets/ijhs/Vol51_4_2016_Art07.pdf)|
|1070|2016|4|Abhilash Malayil|[Vetikkampavidhi: A Malayalam Text on Pyrotechny](/assets/ijhs/Vol51_4_2016_Art08.pdf)|
|1071|2016|4|Chhaya Bhattacharya-Haesner|[Central Asia: A Melting Pot of Persian	Greek	Indian and Chinese Cultural Traditions](/assets/ijhs/Vol51_4_2016_Art09.pdf)|
|1072|2016|4|Surajit Sarkar|[Taxila – An Alternative Urbanisation Between the Silk Road and the Uttarapatha (the Northern Road)](/assets/ijhs/Vol51_4_2016_Art10.pdf)|
|1073|2016|4|Fariba Sharifian|[Buddhism in Khotan and Soghdiana](/assets/ijhs/Vol51_4_2016_Art11.pdf)|
|1074|2016|4|Zhang He|[Krsna Iconography in Khotan Carpets: Spread of Hindu Religious Ideas in Xinjiang	China	Fourth–Seve](/assets/ijhs/Vol51_4_2016_Art12.pdf)|
|1075|2016|4|Lotika Varadarajan|[The Benaki Collection of Fustat Textiles - Analysis and Provenance](/assets/ijhs/Vol51_4_2016_Art13.pdf)|
|1076|2016|4|Dominik Wujastyk|[From Balkh to Baghdad: Indian Science and the Birth of the Islamic Golden Age in the Eighth Century](/assets/ijhs/Vol51_4_2016_Art14.pdf)|
|1077|2016|4|INSA|[Books Received for Review & Announcements](/assets/ijhs/Vol51_4_2016_Art15.pdf)|
|1078|2016|4|Vol. 51.1-4 (2016)|[Cumulative Index](/assets/ijhs/Vol51_4_2016_Art16.pdf)|
|1079|2017|1|Contents|[Contents](/assets/ijhs/Vol52_1_2017_Art00.pdf)|
|1080|2017|1|AK Bag|[Some Features of the Solutions of Kuttaka and Vargaprakrti](/assets/ijhs/Vol52_1_2017_Art01.pdf)|
|1081|2017|1|A B Padmanabha Rao|[Ideas of Infinitesimal of Bhaskaracarya in Lilavati and Siddhantasiromani](/assets/ijhs/Vol52_1_2017_Art02.pdf)|
|1082|2017|1|Jayanta Bhattacharya|[The Hospital transcends into Hospital Medicine: A Brief Journey through Ancient	Medieval and Colonial India](/assets/ijhs/Vol52_1_2017_Art03.pdf)|
|1083|2017|1|Ramya Raman and Anantanarayanan Raman|[Amoebic Dysentery and Introduction of Emetine Source Carapichea ipecacacuanha into Indian Subcontinent](/assets/ijhs/Vol52_1_2017_Art04.pdf)|
|1084|2017|1|SC Roy|[Discovery of X-rays and its Impact in India](/assets/ijhs/Vol52_1_2017_Art05.pdf)|
|1085|2017|1|Sabitri Ray Chaudhuri|[Historical Note: Ashutosh Mukherjee’s Contribution on Nineteenth Century Modern Mathematics: A Bird’s Eye View](/assets/ijhs/Vol52_1_2017_Art06.pdf)|
|1086|2017|1|Rajinder Singh|[Historical Note: G N Ramachandran: A Nobel Prize Nominee and Nominator](/assets/ijhs/Vol52_1_2017_Art07.pdf)|
|1087|2017|1|Harkishan Singh|[Historical Note: Udoy Chand Dutt: Prominent Indian Materia Medica Promoters](/assets/ijhs/Vol52_1_2017_Art08.pdf)|
|1088|2017|1| Ruxia Wang	Hui Cao	Jingsong Zhang and Qi Tan|[Historical Note: Scientific Explorations and Commercial Sales of the Straw Mushroom  Volvariella volvacea (Bull.) Singer in Republican China:  A Brief Review](/assets/ijhs/Vol52_1_2017_Art09.pdf)|
|1089|2017|1|MS Sriram|[Book Review: Rao	A B Padmanabha (trans. and ed.) Bhaskaracarya&#8217;s Lilavati Part I &amp; II](/assets/ijhs/Vol52_1_2017_Art10.pdf)|
|1090|2017|1|Saumitra Basu|[Project Report: History of Neurodegenerative Diseases and its impact on Aged Population in India: An Assessment](/assets/ijhs/Vol52_1_2017_Art11.pdf)|
|1091|2017|2|Contents|[Contents](/assets/ijhs/Vol52_2_2017__Contents.pdf)|
|1092|2017|2| S Balachandra Rao	M Shailaja and V Vanaja|[Angular Diameters (bimba) of the Sun	Moon and Earth’s Shadow-cone in Indian Astronomy: A Comparative Study](/assets/ijhs/Vol52_2_2017__Art01.pdf)|
|1093|2017|2| Aditya Kolachana	K Mahesh and K Ramasubramanian|[Novel Proofs for Summations in the Nisrstarthaduti](/assets/ijhs/Vol52_2_2017__Art02.pdf)|
|1094|2017|2| Aalok Pandya	Tej Bahadur and Sandip Bhattachar|[Sundial for Time–keeping in Jaisalmer Fort](/assets/ijhs/Vol52_2_2017__Art03.pdf)|
|1095|2017|2|Aparajita Basu|[Edward Blyth and the Asiatic Society](/assets/ijhs/Vol52_2_2017__Art04.pdf)|
|1096|2017|2|Prakrati Bhargava|[Central Weaving Institute	Banaras: A Cultural Encounter between the Native and the Modern Form of Instructional Practices](/assets/ijhs/Vol52_2_2017__Art05.pdf)|
|1097|2017|2|Rahul Bhaumik|[The History of Colonial Science and Medicine in British India: Centre-Periphery Perspective](/assets/ijhs/Vol52_2_2017__Art06.pdf)|
|1098|2017|2|Anand Dabak|[Historical Note:Cause of Sunrise	Sunset from Jnanesvari and its comparison to Aryabhatiya](/assets/ijhs/Vol52_2_2017__Art07.pdf)|
|1099|2017|2|Iragavarapu Suryanarayana|[Historical Note: Allusions of Rasayanasastra in Telugu Literature](/assets/ijhs/Vol52_2_2017__Art08.pdf)|
|1100|2017|2|B K Sen|[Historical Note: General Scientific Societies in British India](/assets/ijhs/Vol52_2_2017__Art09.pdf)|
|1101|2017|2|Purabi Mukherji and Mala Bhattacharjee|[Historical Note: Syamadas Mukhopadhyay (1866-1937): A Reputed Geometrician of India](/assets/ijhs/Vol52_2_2017__Art10.pdf)|
|1102|2017|2|Kankan Bhattacharyya|[Book Review: Gauhar Raza	R Gopichandran	Gurdeep S Sappal and TV Venkateswaran (editors) : Moments of Eureka- Life & Works of Selected Indian Scientists](/assets/ijhs/Vol52_2_2017__Art12.pdf)|
|1103|2017|2|S Balachandra Rao|[Book Review: B S Shylaja and V S S Sastry : Jantar Mantar Observatories of Jai Singh](/assets/ijhs/Vol52_2_2017__Art13.pdf)|
|1104|2017|2|Pranab K Chattopadhayay|[Project Report: History of High Tin Bronze and Brass of Eastern India](/assets/ijhs/Vol52_2_2017__Art11.pdf)|
|1105|2017|4|Contents|[Contents](/assets/ijhs/Contents.pdf)|
|1106|2017|4|Ashok K Bhatnagar|[Date of Mahābhārata War Based on Astronomical References—A Reassessment](/assets/ijhs/Vol52_4_2017__Art01.pdf)|
|1107|2017|4|Amalkumar Mukhopadhyay|[Aryabhata-II and his Concept of Concave Quadrilateral](/assets/ijhs/Vol52_4_2017__Art02.pdf)|
|1108|2017|4|Rajinder Singh|[Sisir Kumar Mitra	Scientific Achievements and the Fellowship of the Royal Society of London](/assets/ijhs/Vol52_4_2017__Art03.pdf)|
|1109|2017|4|Satarupa Dattamajumdar|[History of the Scientific Study of the Tibeto-Burman Languages of North-East India](/assets/ijhs/Vol52_4_2017__Art04.pdf)|
|1110|2017|4|N C Shah|[Historical Notes: Some Thoughts on Hindu Medicine —An Address by Kaviraj Mahamahopadhyaya Gananath..](/assets/ijhs/Vol52_4_2017__Art05.pdf)|
|1111|2017|4|Pooja Mishra|[Historical Notes: Science Education and Science Writing in Hindi in the North West Provinces...](/assets/ijhs/Vol52_4_2017__Art06.pdf)|
|1112|2017|4|Smritikumar Sarkar|[Book Review: Bengal Water Craft: Boat-Building and Fishing Communities by Lotika Varadarajan](/assets/ijhs/Vol52_4_2017__Art07.pdf)|
|1113|2017|4|Kankan Bhattacharyya|[Book Review: India’s Nobel Prize: Nominators and Nominees	by Rajinder Singh](/assets/ijhs/Vol52_4_2017__Art08.pdf)|
|1114|2017|4|Kankan Bhattacharyya|[Book Review: Inside Story of Nobel Peace Prize: Indian Contestants by Rajinder Singh](/assets/ijhs/Vol52_4_2017__Art09.pdf)|
|1115|2017|4|Anirban Mukherjee|[Project Report: History of Technology Adoption and Development: The Case of Silk Industry....](/assets/ijhs/Vol52_4_2017__Art10.pdf)|
|1116|2017|4|Surajit Sarkar|[Obituary: Lotika Varadarajan (1934-2017)](/assets/ijhs/Vol52_4_2017__Art11.pdf)|
|1117|2017|4|Gulfishan Khan|[News: The 25th International Congress of History of Science and Technology...](/assets/ijhs/Vol52_4_2017__Art12.pdf)|
|1118|2017|4|Madhvendra Narayan|[Books Received (2017)](/assets/ijhs/13-Books Received for Review.pdf)|
|1119|2017|4|K S Shukla|[Ganitapancavimsi — Sanskrit Text with Introduction	English Translation and Notes](/assets/ijhs/Vol52_4_2017__Art13.pdf)|
|1120|2017|4|Madhvendra Narayan|[Cumulative Index](/assets/ijhs/17-Cumulativeindex.pdf)|
|1121|2017|4|Madhvendra Narayan|[Annual Contents](/assets/ijhs/18-Contentsall.pdf)|
|1122|2018|1|Contents|[Contents](/assets/ijhs/Vol53_1_2018__Contents.pdf)|
|1123|2018|1| Aditya Kolachana	K Mahesh and K Ramasubramanian|[Madhava’s Multi-pronged Approach for Obtaining the Praṇakalantara](/assets/ijhs/Vol53_1_2018__Art01.pdf)|
|1124|2018|1|S K Uma and S Balachandra Rao|[Ahargana in Makarandasarini and Other Indian Astronomical Texts](/assets/ijhs/Vol53_1_2018__Art02.pdf)|
|1125|2018|1|Aishwaryarupa Majumdar|[Medical Education on the Colonial Periphery: A Study of Medical Institutions in Patna and Dacca](/assets/ijhs/Vol53_1_2018__Art03.pdf)|
|1126|2018|1|Rajinder Singh|[Celebrating the 90th Anniversary of the Raman Effect](/assets/ijhs/Vol53_1_2018__Art04.pdf)|
|1127|2018|1|Sagan Deep Kaur and Lakhvir Singh|[Indian Arthropods in Early Sanskrit Literature: A Taxonomical Analysis](/assets/ijhs/Vol53_1_2018__Art05.pdf)|
|1128|2018|1|Shubhneet Kaushik|[A Small History of Bedbugs in India](/assets/ijhs/Vol53_1_2018__Art06.pdf)|
|1129|2018|1|Ajoy Kumar Ghosh|[History of Development of Homoeopathy in India](/assets/ijhs/Vol53_1_2018__Art07.pdf)|
|1130|2018|1|Amar K Chandra|[First Fifty Years (1900-1950) of Physiology in India](/assets/ijhs/Vol53_1_2018__Art08.pdf)|
|1131|2018|1|B N Narahari Achar|[Correspondence: Date of Mahabharata War Based on Astronomical References: A K Bhatnagar](/assets/ijhs/Vol53_1_2018__Art09.pdf)|
|1132|2018|1|Anantanarayanan Raman|[Book Review: Ayurvedic Inheritance — A Reader’s Companion by M S Valiathan](/assets/ijhs/Vol53_1_2018__Art10.pdf)|
|1133|2018|1|J N Sinha|[Book Review: Technology of the Tribes of Northeast India by Amrendra Kumar Thakur](/assets/ijhs/Vol53_1_2018__Art11.pdf)|
|1134|2018|1|Santhosh Abraham|[Project Report: Medicine and British Empire in South India: A Study of Psychiatry and Mental Asylums](/assets/ijhs/Vol53_1_2018__Art12.pdf)|
|1135|2018|2|IJHS|[Contents](/assets/ijhs/Vol53_2_2018__Contents.pdf)|
|1136|2018|2|RN Iyengar|[Concept of Sruti	Svara and Raga of Classical Music in Sanskrit Texts](/assets/ijhs/Vol53_2_2018__Art01.pdf)|
|1137|2018|2|Paul T Craddock|[Brass	Zinc and the Beginning of Chemical Industry](/assets/ijhs/Vol53_2_2018__Art02.pdf)|
|1138|2018|2|D V Kanagarathinam|[Indigenous and Western Medicines in Colonial South India: Nature of Discourses and Impact](/assets/ijhs/Vol53_2_2018__Art03.pdf)|
|1139|2018|2|Kamlesh Mohan|[Punjab Agricultural College and Research Institute	Lyallpur (1906-1947): Generating Knowledge for..](/assets/ijhs/Vol53_2_2018__Art04.pdf)|
|1140|2018|2| Rajeshwari Singh	Mita Kotecha and N Srikant|[Historical Note: History of  Yavaka from Ethno-pharmacological Perspective](/assets/ijhs/Vol53_2_2018__Art05.pdf)|
|1141|2018|2|Jean Deloche|[Historical Note: The Incredible Survival of Stone Wheel Manufacture in South India](/assets/ijhs/Vol53_2_2018__Art06.pdf)|
|1142|2018|2|B Anantha Dasannacharya|[Correspondence: A Physics Museum in BHU in 1942](/assets/ijhs/Vol53_2_2018__Art07.pdf)|
|1143|2018|2|B S Shylaja|[Book Reviews: Vedic Mathematics mattu Vedagalalli Vijnana by S Balachandra Rao](/assets/ijhs/Vol53_2_2018__Art08.pdf)|
|1144|2018|2|N C Shah|[Book Reviews: Plants of Kedarnath Wildlife Sanctuary	Western Himalaya: A Field Guide by ...](/assets/ijhs/Vol53_2_2018__Art09.pdf)|
|1145|2018|2|Kankan Bhattacharyya|[Book Reviews: A Brief History of Science by  Breakthrough Science Society	Kolkata](/assets/ijhs/Vol53_2_2018__Art10.pdf)|
|1146|2018|2|BS Shylaja|[News: Workshop on Importance of Eclipses in the History of Astronomy](/assets/ijhs/Vol53_2_2018__Art11.pdf)|
|1147|2019|1|IJHS|[Contents](/assets/ijhs/Vol54_1_2019__Contents.pdf)|
|1148|2019|1| Aditya Kolachana	K Mahesh and K Ramasubramanian|[Determination of Kalalagna in the Lagnaprakarana](/assets/ijhs/Vol54_1_2019__Art01.pdf)|
|1149|2019|1|Ramya Raman and Anantanarayanan Raman|[A Painless Surgery Joseph Johnstone Performed on a Mesmerized Patient in Madras in 1847](/assets/ijhs/Vol54_1_2019__Art02.pdf)|
|1150|2019|1|Jaime Wisniak|[Glycolic Ferment: The Work of Victor Barral and Raphaël Lépine](/assets/ijhs/Vol54_1_2019__Art03.pdf)|
|1151|2019|1|Rajinder Singh and Syamal Roy|[U N Brahmachari: Scientific Achievements and Nomination for the Nobel Prize and the Fellowship of...](/assets/ijhs/Vol54_1_2019__Art04.pdf)|
|1152|2019|1|R B Grover|[The Relationship between Science and Technology and Evolution in Methods of Knowledge Production](/assets/ijhs/Vol54_1_2019__Art05.pdf)|
|1153|2019|1|Satarupa Dattamajumdar|[A Brief History of Linguistic Science with special reference to the Bodo	Garo and Kokborok...](/assets/ijhs/Vol54_1_2019__Art06.pdf)|
|1154|2019|1|S R Sarma|[Historical Note: Ganeśa Daivajña on Multiplication Tables](/assets/ijhs/Vol54_1_2019__Art07.pdf)|
|1155|2019|1| RC Deka	Gaurangi Maitra	Ranjit Kumar Dev Goswami|[Historical Note: Dr. Radhikaram Dhekial Phookan: A Chemist from Assam](/assets/ijhs/Vol54_1_2019__Art08.pdf)|
|1156|2019|1|B S Shylaja|[Correspondence: On an Alternative Interpretation for the Application of Cara](/assets/ijhs/Vol54_1_2019__Art09.pdf)|
|1157|2019|1|K Razi Naqvi|[Correspondence: Early Doctorates Conferred by Indian Universities](/assets/ijhs/Vol54_1_2019__Art10.pdf)|
|1158|2019|1|U C De|[Book Review: Asutosh Mukhopadhyay: Mathematical Genius with the Magic Wand by Satyabachi Sar](/assets/ijhs/Vol54_1_2019__Art11.pdf)|
|1159|2019|1|D C V Mallik|[Book Review: Nature’s Third Cycle: A Story of Sunspots by Arnab Rai Choudhuri](/assets/ijhs/Vol54_1_2019__Art12.pdf)|
|1160|2019|1|K Mahesh|[Editing Karaābharaa: A commentary on Karanaprakāśa by Śankaranārāyana Joyisa](/assets/ijhs/Vol54_1_2019__Art13.pdf)|
|1161|2019|1|Rajat Sanyal|[Environmental and Ecological Change: Gleanings from Copperplate Inscriptions of Early Bengal](/assets/ijhs/Vol54_1_2019__Art14.pdf)|
|1162|2019|2|IJHS|[Contents](/assets/ijhs/Vol54_2_2019__Contents.pdf)|
|1163|2019|2|Nisha Yadav|[Structure of Indus Script](/assets/ijhs/Vol54_2_2019__Art01.pdf)|
|1164|2019|2|Pranab K Chattopadhayay and Satyakam Sen|[Taxila Mirrors Preserved in India and Technology Transfer](/assets/ijhs/Vol54_2_2019__Art02.pdf)|
|1165|2019|2|Vijaya Jayant Deshpande|[An Investigation into Ancient Greco-Indian Medical Exchanges: Sostratus vs Susruta](/assets/ijhs/Vol54_2_2019__Art03.pdf)|
|1166|2019|2|Jaime Wisniak|[Gustave-Clement Fleury’s Work on Plant Growth and Vegetable Principles in the Nineteenth Century](/assets/ijhs/Vol54_2_2019__Art04.pdf)|
|1167|2019|2|Prakash N Tandon|[Jagdish Chandra Bose and Plant Neurobiology: Part I](/assets/ijhs/Vol54_2_2019__Art05.pdf)|
|1168|2019|2|Saumitra Basu|[Forensic Science and Scientific Measures of Criminal Identification in British India](/assets/ijhs/Vol54_2_2019__Art06.pdf)|
|1169|2019|2|Purabi Mukherji|[Historical Note: The Trend of Research on Number Theory in Bengal and Bihar during the 20th Century](/assets/ijhs/Vol54_2_2019__Art07.pdf)|
|1170|2019|2|Venkatesh Parthasarathy|[Historical Note: Metric Estimate of the Volume Measure used in the Madras Region at the Dawn of...](/assets/ijhs/Vol54_2_2019__Art08.pdf)|
|1171|2019|2|Subhankar Ghosh|[Historical Note: Scientific Activities of Fr. Alphonso De Penaranda: A Jesuit Priest in the late...](/assets/ijhs/Vol54_2_2019__Art09.pdf)|
|1172|2019|2|Aditya Kolachana et al.|[Correspondence: On an Alternative Interpretation for the Application of Cara: A Response](/assets/ijhs/Vol54_2_2019__Art10.pdf)|
|1173|2019|2|Sashikala Ananth|[Book Review: Narada Silpasastra: Sanskrit Text on Architectural Civil Engineering](/assets/ijhs/Vol54_2_2019__Art11.pdf)|
|1174|2019|2|C V R Murty|[Book Review: Story of a Steel Bridge: The Howrah Bridge –A Testimony of Indo British Co-operation...](/assets/ijhs/Vol54_2_2019__Art12.pdf)|
|1175|2019|2|Raghava S Boddupalli|[Project Report: Plant Biology of Yajurveda](/assets/ijhs/Vol54_2_2019__Art13.pdf)|
|1176|2019|2|Sita Sundar Ram|[Project Report: Suryaprakasa of Suryadasa — Critical Edition	Eng. Tr. and Explanatory Notes for...](/assets/ijhs/Vol54_2_2019__Art14.pdf)|
|1177|2019|3|IJHS|[Contents](/assets/ijhs/Contents.pdf)|
|1178|2019|3|M. D. Srinivas|[The Untapped Wealth of Manuscripts on Indian Astronomy and Mathematics](/assets/ijhs/Vol54_3_2019__Art01.pdf)|
|1179|2019|3| Sreeramula Rajeswara Sarma	Maryam Zamani|[On the Persian Translation of Bhāskara’s Līlāvatī by Abu’l Faiẓ Faiẓī at the Court of Akbar](/assets/ijhs/Vol54_3_2019__Art02.pdf)|
|1180|2019|3|Raja Ram Mohan Roy|[Sidereal Ecliptic Coordinate System of Sūryasiddhānta](/assets/ijhs/Vol54_3_2019__Art03.pdf)|
|1181|2019|3| Aditya Kolachana	K. Mahesh	K. Ramasubramanian|[Precise Determination of the Ascendant in the Lagnaprakaraṇa - I](/assets/ijhs/Vol54_3_2019__Art04.pdf)|
|1182|2019|3| Ramya Raman	Anantanarayanan Raman|[Epigastric-heteropagus Twins Recorded in Madras Presidency in 1789](/assets/ijhs/Vol54_3_2019__Art05.pdf)|
|1183|2019|3|Rajinder Singh|[Sukumar Chandra Sirkar and the Department of Optics at the IACS](/assets/ijhs/Vol54_3_2019__Art06.pdf)|
|1184|2019|3|Rajendra Prasad|[Agricultural Sciences in India and Struggle against Famine	Hunger and Malnutrition](/assets/ijhs/Vol54_3_2019__Art07.pdf)|
|1185|2019|3| M. R. Singh	B. R. Mani|[Historical Note: Characterization of Pigments and Binders in Mural Painting Fragments from...](/assets/ijhs/Vol54_3_2019__Art08.pdf)|
|1186|2019|3|Jean Deloche|[Historical Note: The Sacred Road: A Contribution to the History of Ramesvaram Pilgrimages](/assets/ijhs/Vol54_3_2019__Art10.pdf)|
|1187|2019|3|Sabitri Ray Chaudhuri|[Historical Note: Hardinge Professorship of Higher Mathematics at Calcutta University](/assets/ijhs/Vol54_3_2019__Art11.pdf)|
|1188|2019|3|Sharada Srinivasan|[Book Review: Early Indian Metallurgy: The Production of Lead	Silver and Zinc through Three...](/assets/ijhs/Vol54_3_2019__Art12.pdf)|
|1189|2019|3|Rup Kumar Barman|[Project Report: Practice of Folk Medicine by Rajbanshis of Sub-Himalayan Bengal: A Study in...](/assets/ijhs/Vol54_3_2019__Art13.pdf)|
|1190|2019|3|K. Ramasubramanian|[Obituary: B. V. Subbarayappa: A Writer	Administrator and Veteran Historian of Science](/assets/ijhs/Vol54_3_2019__Art14.pdf)|
|1191|2019|4|IJHS|[Contents](/assets/ijhs/Contents_Vol54_4.pdf)|
|1192|2019|4|Subhash Kak|[Guáman Poma’s Yupana and Inca Astronomy](/assets/ijhs/Vol54_4_2019__Art01.pdf)|
|1193|2019|4|Anil Narayanan|[On the Computation of Daily-motion in Ancient Indian Astronomy](/assets/ijhs/Vol54_4_2019__Art02.pdf)|
|1194|2019|4|N. C. Shah|[Kuṣṭha	Saussurea costus (Saussurea lappa): Its Unexplored History from the Atharvaveda](/assets/ijhs/Vol54_4_2019__Art03.pdf)|
|1195|2019|4|Arabinda Samanta|[Cholera	Commerce and Quarantine: Interrogating the Science of Empire in Nineteenth Century India](/assets/ijhs/Vol54_4_2019__Art04.pdf)|
|1196|2019|4|Kanagarathinam D. V.|[Dr. Koman’s Report and Responses of Native Physicians: A Discourse on Indigenous Systems of Medicine](/assets/ijhs/Vol54_4_2019__Art05.pdf)|
|1197|2019|4|Niklas Thode Jensen|[Translating Nature: Changes in the Perception and Utilization of Science in the Halle Mission in...](/assets/ijhs/Vol54_4_2019__Art06.pdf)|
|1198|2019|4|Rajinder Singh|[Historical Note: C. V. Raman and Kolkata Media](/assets/ijhs/Vol54_4_2019__Art08.pdf)|
|1199|2019|4| Raktim Ranjan Saikia	Nurul Amin|[Project Report: A Study on the Salt Production of Ancient Assam](/assets/ijhs/Vol54_4_2019__Art09.pdf)|
|1200|2020|1|IJHS|[Contents](/assets/ijhs/Vol55_1_2020__contents.pdf)|
|1201|2020|1| Aditya Kolachana	K. Mahesh	K. Ramasubramanian|[Precise Determination of the Ascendant in Lagnaprakarana – II](/assets/ijhs/Vol55_1_2020__Art01.pdf)|
|1202|2020|1|Anantanarayanan Raman|[Marble-like chûnnam in the 18th- and 19th-century Madras Presidency](/assets/ijhs/Vol55_1_2020__Art02.pdf)|
|1203|2020|1| B. S. Shylaja	B. S. Shubha|[Retrograde motion as described in Brahmatulyaudāharaṇam of Viśvanātha](/assets/ijhs/Vol55_1_2020__Art03.pdf)|
|1204|2020|1|Suvobrata Sarkar|[An Alternative History of Technology in South Asia: The Unknown Viśvakarmās of Colonial Bengal](/assets/ijhs/Vol55_1_2020__Art04.pdf)|
|1205|2020|1|Chandi Prasad Nanda|[Political Ecology of Cholera: Orissa and Colonial Sanitary Discourse](/assets/ijhs/Vol55_1_2020__Art05.pdf)|
|1206|2020|1|Rajinder Singh|[Historical Note: Sir C. V. Raman Nobel Ceremony Coverage by the European Press](/assets/ijhs/Vol55_1_2020__Art06.pdf)|
|1207|2020|1|Saumitra Basu|[Project Report: Hundred Years of Forensic Science in India (1849–1947): A Historical Perspective](/assets/ijhs/Vol55_1_2020__Art07.pdf)|
|1208|2020|1|Michio Yano|[Obituary to Dr Yukio Ôhashi](/assets/ijhs/Vol55_1_2020__Art08.pdf)|
|1209|2020|2|IJHS|[Contents](/assets/ijhs/Vol55_2_2020__Contents.pdf)|
|1210|2020|2| Aditya Kolachana	K. Mahesh	K. Ramasubramanian|[Precise Determination of the Ascendant in the Lagnaprakaraṇa–III](/assets/ijhs/Vol55_2_2020__Art01.pdf)|
|1211|2020|2|Anantanarayanan Raman|[G.M.M.C. Diploma of the Madras Medical College	1847–1863](/assets/ijhs/Vol55_2_2020__Art02.pdf)|
|1212|2020|2|Suvankar Dey|[The Silent Killer: Tracing the Trajectory of Tubercular Deaths in Colonial Bengal](/assets/ijhs/Vol55_2_2020__Art03.pdf)|
|1213|2020|2| Samirsinh P. Parmara	Debi Prasad Mishra|[Fractal Geometry in Water Conservation Structures: Step Wells and Tanks in India](/assets/ijhs/Vol55_2_2020__Art04.pdf)|
|1214|2020|2|Sharad Master|[The Wartime Correspondence (1939–1945) between South African Geologist A. L. du Toit and Indian...](/assets/ijhs/Vol55_2_2020__Art05.pdf)|
|1215|2020|2|Raghava S. Boddupalli|[Historical Note: Traditional Use of Legume Seeds for Weighing Gold in India](/assets/ijhs/Vol55_2_2020__Art06.pdf)|
|1216|2020|2|M S Sriram|[Project Report: Grahagaṇitādhyāya of Bhāskarācārya’s Siddhāntaśiromaṇi](/assets/ijhs/Vol55_2_2020__Art07.pdf)|
|1217|2020|2| R. K. K. Rajarajana	Li-ling|[Seminar Report: Religious Art and Culture in 2019: Thousand Faces of the Buddha](/assets/ijhs/Vol55_2_2020__Art08.pdf)|
|1218|2020|3|IJHS|[Contents](/assets/ijhs/Vol55_3_2020__Contents.pdf)|
|1219|2020|3| R. N. Iyengar	H. S. Sudarshan	Anand Viswanathan|[Akṣara the Basic Unit of Time Measure in Ancient India](/assets/ijhs/Vol55_3_2020__Art01.pdf)|
|1220|2020|3|A. K. Soni|[History of Mining in India](/assets/ijhs/Vol55_3_2020__Art02.pdf)|
|1221|2020|3|Dhrub Kumar Singh|[Hindi Protagonists of Science and Swadeshi in the First Half of the Twentieth Century](/assets/ijhs/Vol55_3_2020__Art03.pdf)|
|1222|2020|3|Jaime Wisniak|[Frédéric Sacc (1819–1890) Contribution to Plant and Animal Physiology](/assets/ijhs/Vol55_3_2020__Art04.pdf)|
|1223|2020|3|S Kamini|[The History and Functioning of the Forest Department in Madras Presidency during 1856–1882](/assets/ijhs/Vol55_3_2020__Art05.pdf)|
|1224|2020|3|Gargi Das|[Historical Note: Kadambini Ganguly: A Forgotten Legend](/assets/ijhs/Vol55_3_2020__Art06.pdf)|
|1225|2020|3|Rajinder Singh|[Historical Note: Nikhil Rajan Sen – The Formative Years](/assets/ijhs/Vol55_3_2020__Art07.pdf)|
|1226|2020|3| Syed Ziaur Rahman	S. H. Zahid Jamal|[Project Report: Meta-analytical Study of Cardiac Drugs described by Ibn Sina (980–1037) in the...](/assets/ijhs/Vol55_3_2020__Art08.pdf)|
|1227|2020|4|IJHS|[Contents](/assets/ijhs/Vol55_4Contents.pdf)|
|1228|2020|4| Goli Penchala Prasada	P. Murali Manohar...|[The Epigraphic Evidences on Ayurveda and Indian Medical Heritage](/assets/ijhs/Vol55_4_2020__Art01.pdf)|
|1229|2020|4| Sudipta Lahiri	B. J. Sengupta|[Historical Perspectives of Geological Concepts from Biblical to Modern Times](/assets/ijhs/Vol55_4_2020__Art02.pdf)|
|1230|2020|4|Sharad Master|[Letters between Geologists A. L. du Toit and M. S. Krishnan (1946–1947) on the Palaeoposition of...](/assets/ijhs/Vol55_4_2020__Art03.pdf)|
|1231|2020|4| Vandana Singh	Manager Rajdeo Singh|[Microscopic Imaging of Entrapped Slag in Ancient IronArtifact (300 BCE) from the Middle Ganga Plains](/assets/ijhs/Vol55_4_2020__Art04.pdf)|
|1232|2020|4| Sangeeta Guptaa	Deepa Bisht	Prachi Gupta|[Woods used in 10th Century Trans Himalayan Tabo Buddhist Monastery of India](/assets/ijhs/Vol55_4_2020__Art05.pdf)|
|1233|2020|4| Jasjeet Kaur	G. S. Sodhi|[Indian Tradition of Palm Print Authentication and the Globetrotting Journey of Kohinoor Diamond](/assets/ijhs/Vol55_4_2020__Art10.pdf)|
|1234|2020|4| R. B. Mohanty	T. Panda|[Historical Note: Plant Domestication in Indus Valley Civilisation](/assets/ijhs/Vol55_4_2020__Art06.pdf)|
|1235|2020|4|Sanatan Koley|[Historical Note: Professor Manindra Chandra Chaki (1913 – 2007): A Legendary Indian Geometrician](/assets/ijhs/Vol55_4_2020__Art07.pdf)|
|1236|2020|4| Tejas Kumar	Shubha B S	Shylaja B S|[Correspondence: Retrograde motion: The Derivation of Formula](/assets/ijhs/Vol55_4_2020__Art08.pdf)|
|1237|2020|4| Robin Kumar Dutta	Barsha R. Goswami	Niranjan Lig|[Project Report: The Science and Technology of Manuscript Writing-aid and Folk Paintings in Medieval](/assets/ijhs/Vol55_4_2020__Art09.pdf)|
|1238|2020|4|IJHS|[Cumulative Index: Vol 55.1-4](/assets/ijhs/Vol55_4_2020__CIndex.pdf)|
|1239|2020|4|IJHS|[Annual Contents: Vol. 55.1-4 (2020)](/assets/ijhs/Vol55_4_2020__AnnualContents.pdf)|
|1240|2021|2|IJHS|[Contents](/assets/ijhs/0__Content.pdf)|
|1241|2021|2| K. Mahesh	D. G. Sooryanarayan	K. Ramasubramanian|[Elegant dissection proofs for algebraic identities in Nīlakantha's Āryabhatīyabhāsya](/assets/ijhs/1__Mahesh.pdf)|
|1242|2021|2|S Chauthaiwale · Jayant Deopujari · A Chauthaiwale|[Computing the number of perfumes that constitute the gandhārṇava and kacchapuṭa of Varāhamihira](/assets/ijhs/2__Chauthaiwale.pdf)|
|1243|2021|2|Thomas E. Petray Jr|[Parallels of Gundestrup cauldron interior art with Indic motifs](/assets/ijhs/3__Thomas.pdf)|
|1244|2021|2|B. Sasisekaran and B. Raghunatha Rao|[Archaeo-metallurgical study on two early historic punch marked coins](/assets/ijhs/4__Sasisekaran.pdf)|
|1245|2021|2|Jitendra K. Singh|[Colonization of personality psychology in India: historical roots and contemporary status](/assets/ijhs/5__Jitendra.pdf)|
|1246|2021|2|Arnab Rai Choudhuri|[Unsuccessful FRS nominations from colonial India](/assets/ijhs/6__Arnab Rai Choudhuri.pdf)|
|1247|2021|2|Satyanad Kichenassamy|[Book Review- Karanapaddhati of Putumana Somayājī by Venketeswara Pai...](/assets/ijhs/7__Satyanad.pdf)|
|1248|2021|2|Maidul Rahaman|[Project Report: Institutionalization of veterinary science in colonial India](/assets/ijhs/8__Maidul.pdf)|
|1249|2021|3&4|IJHS|[Contents](/assets/ijhs/Contents.pdf)|
|1250|2021|3&4|R. N. Iyengar and Sunder Chakravarty|[Transit of sun through the seasonal naksatra cycle in the Vrddha-Gārgīya Jyotisa](/assets/ijhs/1.pdf)|
|1251|2021|3&4|K. Mahesh· Aditya Kolachana· K. Ramasubramanian|[Combinatorial techniques in Munīśvara’s Nisṛṣṭārthadūtī](/assets/ijhs/2.pdf)|
|1252|2021|3&4| K. Nagesh Rao	P. T. Craddock and T. R. Anantharamu|[The production of crucible steel by the ‘Mysore process’ at Ghattihosahalli	Chitradurga District...](/assets/ijhs/3.pdf)|
|1253|2021|3&4|N. Anantha Krishna et al.|[Indigenous knowledge on ancient Indian alchemical alloying](/assets/ijhs/4.pdf)|
|1254|2021|3&4|Uma Shankar|[Formation-to-fall: natural history and the journey of a lesser-known genus of orchids	Monomeria](/assets/ijhs/5.pdf)|
|1255|2021|3&4|M. R. Singh and Rajendra Yadav|[Historical Note: Microstructural analysis and characterization of lime mortar of seventeenth...](/assets/ijhs/6.pdf)|
|1256|2021|3&4|B. A. Dasannacharya|[Correspondence: A remark on the editorial “Indo-European encounter and features of modern science...](/assets/ijhs/7.pdf)|
|1257|2021|3&4|Rasna Rajkhowa|[Project Report: Hati Puthi: the medieval Assamese manuscripts on elephant training and treatment](/assets/ijhs/8.pdf)|
|1258|2022|1|IJHS|[Contents](/assets/ijhs/Contents.pdf)|
|1259|2022|1|Prakash M. Dolas|[Astronomical clues in unicorn iconography of the Harappan civilization](/assets/ijhs/1_PM Dolas.pdf)|
|1260|2022|1|N. C. Shah|[The identification	etymology and uses of Bombax ceiba (semal) sold by street vendors as Semarkanda](/assets/ijhs/2_NC Shah.pdf)|
|1261|2022|1|Francesco Di Giacomo|[On some analogies of modern science with Plato’s science in Timaeus and on Plato’s influence...](/assets/ijhs/3_F Di Giacomo.pdf)|
|1262|2022|1|Subrata Dasgupta|[Jagadis Bose’s panvitalism as intellectual history](/assets/ijhs/4_S Dasgupta.pdf)|
|1263|2022|1|Pranav Sharma|[Satellite Instructional Television Experiment (SITE): a case study in the triumphs and...](/assets/ijhs/5_P Sharma.pdf)|
|1264|2022|1|Rajarshi Ghosh|[Contribution of Sir P.C. Rây in preparing chemical bombs and explosives for Indian freedom fighters](/assets/ijhs/6_R Ghosh.pdf)|
|1265|2022|1|Mohd Ashraf Wani and Rouf Ahmad Bhat|[Colonial masculinity and indigenous sikārī: a history of sport-hunting in Kashmir during Dogra rule](/assets/ijhs/7_MA Wani.pdf)|
|1266|2022|1|Shyamasundaran Kulangara & Sushma N Salethoor|[Historical Note- Jvaranirnaya: a rare monograph on diagnosis of fevers from the pre-colonial era](/assets/ijhs/8_S Kulangara.pdf)|
|1267|2022|1|Bijoya Goswami|[Book Review: Essays in History of Sciences in India: Agriculture	Medicine	Alchemical and...](/assets/ijhs/9_B Goswami.pdf)|
|1268|2022|2|IJHS|[Content](/assets/ijhs/57_2_Content.pdf)|
|1269|2022|2|Raghava S Boddupalli|[Skin disorders (twak rogas) revealed in the Atharvaveda:Descriptions of medicinal plants and utiliza](/assets/ijhs/57_2_1.pdf)|
|1270|2022|2|Abirlal Gangopadhyay|[Therapeutic elements of music in ancient India: a brief review in Bṛhattrayī](/assets/ijhs/57_2_2.pdf)|
|1271|2022|2|Rashmi Venkatesh|[Insight into history of Areca nut and oral submucous fibrosis: a narrative review](/assets/ijhs/57_2_3.pdf)|
|1272|2022|2|Gautam Chandra|[Medical profession and unemployment in colonial Madras (1835–1930)](/assets/ijhs/57_2_4.pdf)|
|1273|2022|2|Prakrati Bhargava|[Modernization of leather industry and chequered history of technical education in colonial Kanpur](/assets/ijhs/57_2_5.pdf)|
|1274|2022|2|Debasish Dey|[Fishing	migration	and settlement: a study of Kaibartas in Majuli Island	Assam](/assets/ijhs/57_2_6.pdf)|
|1275|2022|2|K. Razi Naqvi|[Translation of Newton’s Principia into Arabic under the aegis of the East India Company: a rumour tu](/assets/ijhs/57_2_7.pdf)|
|1276|2022|2|Indranil Sanyal|[Dr. Chunilal Bose: a forgotten scientist and a science communicator](/assets/ijhs/57_2_8.pdf)|
|1277|2022|2|Rajarshi Ghosh|[Contribution of Satyendra Nath Bose in chemical sciences and related disciplines](/assets/ijhs/57_2_9.pdf)|
|1278|2022|2|Kamlesh Mohan|[Let There Be Light: Engineering	Entrepreneurship and Electricity in Colonial Bengal 1880–1945 by Su](/assets/ijhs/57_2_10.pdf)|
|1279|2022|3|Content|[Content](/assets/ijhs/57_3_Content.pdf)|
|1280|2022|3|M.V. Bhaskar|[Indus zoomorphism and its avatars](/assets/ijhs/57_3_1.pdf)|
|1281|2022|3|Ankur Kakkar|[Reassessing European impressions of Indian astronomy (1750–1850)](/assets/ijhs/57_3_2.pdf)|
|1282|2022|3|Roberto G. Barbosa|[The origins of scientific disciplines: a counter-history of western science](/assets/ijhs/57_3_3.pdf)|
|1283|2022|3|Jhinuk Sarkar|[Cattle plague and the introduction of veterinary education in colonial Bengal](/assets/ijhs/57_3_4.pdf)|
|1284|2022|3|Mandakini Thakur|[Technological modifi cations in the tanning and leather industry from pre-British to colonial Punjab](/assets/ijhs/57_3_5.pdf)|
|1285|2022|3|Samir Kumar Saha|[Meghnad Saha	F.R.S.: the multiple facets of a teacher](/assets/ijhs/57_3_6.pdf)|
|1286|2022|3|Ram Sagar|[History of ARIES: a premier research institute in the area of observational sciences](/assets/ijhs/57_3_7.pdf)|
|1287|2022|3|M. P. Shivamanjunatha|[Ethno-medico-botanical studies of Eruliga and Lambani tribes of Kanakapura taluk of Ramanagara distr](/assets/ijhs/57_3_8.pdf)|
|1288|2022|3|M. V. Bhaskar|[Indus zoomorphism and its avatars- supplement](/assets/ijhs/S1-IndusZoomorphicIconCatalogue.pdf)|
|1289|2022|4|Content|[Content](/assets/ijhs/57_4_Content.pdf)|
|1290|2022|4|Vinay Iyer|[Representation of the midnight sun in Greek and Indian astronomical texts](/assets/ijhs/57_4_1.pdf)|
|1291|2022|4|Pranjali|[Documenting Flora Indica: Dysentery	William Roxburgh and medical botany](/assets/ijhs/57_4_2.pdf)|
|1292|2022|4|Ritesh Gupta|[Physics and physicists at Banaras Hindu University: circa 1916–1960](/assets/ijhs/57_4_3.pdf)|
|1293|2022|4|Indranil Sanyal|[Dr. Gopaul Chunder Roy (1844–1887): An extraordinary life dedicated to the cause of medical science](/assets/ijhs/57_4_4.pdf)|
|1294|2022|4|Anjali Sharma|[A review on rock paintings of India: Technique	pigment and conservation](/assets/ijhs/57_4_5.pdf)|
|1295|2022|4|Shrabana Sarkar|[Journey of natural pigments from ancient antiquity to present: Insights on sustainable development](/assets/ijhs/57_4_6.pdf)|
|1296|2022|4|G. Parthasarathy|[Perspective and retrospective of the Indian Social Science Academy	Allahabad	India](/assets/ijhs/57_4_7.pdf)|
|1297|2022|4|A. Sripada Bhat|[Gaṇitagannaḍi: An astronomical text of 1604 CE in Kannada by Śankaranārāyaṇa Joisaru of Śṛngeri](/assets/ijhs/57_4_8.pdf)|
|1298|2022|4|Nirmal Kumar Mahato|[The status of tribal medical system and practices in the Jungle Mahals	Eastern India	1947–2000](/assets/ijhs/57_4_9.pdf)|
|1299|2022|4|Paul T. Craddock|[Lalit K. Gurjar M.Sc.](/assets/ijhs/57_4_10.pdf)|
|1300|2023|1|IJHS|[Contents](/assets/ijhs/58_1_Content.pdf)|
|1301|2023|1|Taro Tokutake|[Calculation for ‘chain‑reduction’ in the Triśatībhāṣya](/assets/ijhs/58_1_1.pdf)|
|1302|2023|1|Dipak Jadhav|[Object‑numerals as listed in Nijaguṇa Śivayogī ’s Viveka‑Cintāmaṇi](/assets/ijhs/58_1_2.pdf)|
|1303|2023|1|Subrata Dasgupta|[An intellectual history of P.C. Ray’s papers on the nitrites of mercury](/assets/ijhs/58_1_3.pdf)|
|1304|2023|1| Rasna Rajkhowa	Bipul Ch. Saikia|[Use of animals in the health management of elephants in medieval period of Assam	India](/assets/ijhs/58_1_4.pdf)|
|1305|2023|1|R. Jayakrishnan|[History of an observatory on the Agasthiyar hill top](/assets/ijhs/58_1_5.pdf)|
|1306|2023|1| Y. Srinivasa Rao	Sindhu Thomas|[Indigenous poison healing traditions in Kerala](/assets/ijhs/58_1_6.pdf)|
|1307|2023|1|Aalok Pandya|[Food	water and intoxicants in the battlefield practices of Rajasthan](/assets/ijhs/58_1_7.pdf)|
|1308|2023|1|Indrajit G. Roy|[Historical Note: Hundred years of geophysics (1834–1933)](/assets/ijhs/58_1_8.pdf)|
|1309|2023|1| T. S. Suryanarayanan	João Lúcio Azevedo|[Historical Note: From forest to plantation: a brief history of the rubber tree](/assets/ijhs/58_1_9.pdf)|
|1310|2023|1|Robert S. Anderson|[Book Review: Science and religion in India...](/assets/ijhs/58_1_10.pdf)|
|1311|2023|1|Geetashree Singh|[Project Report: Science in the forest management in colonial Assam (1826–1947)](/assets/ijhs/58-1_11.pdf)|
|1312|2023|2|IJHS|[Contents](/assets/ijhs/IJHS_58_2_Contents.pdf)|
|1313|2023|2|Anil Narayanan and Nilesh Oak|[Planetary nodes and apses in the Sūrya-Siddhānta](/assets/ijhs/IJHS_58_2_1.pdf)|
|1314|2023|2|Amba Kulkarni|[Recursion and iteration in combinatorics of Chandaśśāstra](/assets/ijhs/IJHS_58_2_2.pdf)|
|1315|2023|2| US Ganesamoorthy	CG Moorthy|[A brief study on history and evolution of time](/assets/ijhs/IJHS_58_2_3.pdf)|
|1316|2023|2|N. C. Shah|[Historical profi le of Nardostachys jatamansi: an ancient incense & aromatic medicinal herb from...](/assets/ijhs/IJHS58_2_4.pdf)|
|1317|2023|2|Nirmal Kumar Mahato|[Revisiting the traditional medicine of the tribals in the Jungle Mahals	1947–2000](/assets/ijhs/IJHS_58_2_5.pdf)|
|1318|2023|2|Prakrati Bhargava|[Institutionalization of agricultural education in the nineteenth century colonial India: its...](/assets/ijhs/IJHS_58_2_6.pdf)|
|1319|2023|2|Mandakini Thakur|[Technologies of transportation: road	bridge and boat construction in colonial Punjab](/assets/ijhs/IJHS58_2_7.pdf)|
|1320|2023|2|C. S. Meenakshi|[Project Report: The history of geographical surveys in India during the British period](/assets/ijhs/IJHS_58_2_8.pdf)|