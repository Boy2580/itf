const allQuizQuestions = [
    // ====================================================================
    // 📁 ITF09-Ethic68.pdf: จริยธรรม สังคม และกฎหมาย (ข้อ 1 - 20)
    // ====================================================================
 {
        question: "การกระทำใดที่ถือเป็นส่วนหนึ่งของ Software Theft (การละเมิดลิขสิทธิ์ซอฟต์แวร์)?",
        options: [
            "การทำสำเนาโปรแกรมเพื่อสำรองข้อมูลตามที่ระบุในสัญญา",
            "การติดตั้งซอฟต์แวร์บนคอมพิวเตอร์เกินกว่าจำนวนสิทธิ์ที่กำหนด",
            "การขายซอฟต์แวร์ต่อให้กับบุคคลอื่นหลังจากที่ลบออกจากเครื่องแล้ว",
            "การใช้งานโปรแกรม Freeware หรือ Open Source"
        ],
        answer: "การติดตั้งซอฟต์แวร์บนคอมพิวเตอร์เกินกว่าจำนวนสิทธิ์ที่กำหนด"
    },
    {
        question: "ข้อกำหนดใดที่ถือเป็นเงื่อนไขทั่วไปของ Single-User License Agreement?",
        options: [
            "อนุญาตให้ทำสำเนาเพื่อสำรองข้อมูลได้เพียงหนึ่งชุด",
            "อนุญาตให้ติดตั้งบนเครื่องคอมพิวเตอร์หลายเครื่องพร้อมกันได้",
            "อนุญาตให้แก้ไขโค้ดต้นฉบับ (Source Code) ได้อย่างอิสระ",
            "อนุญาตให้เผยแพร่ซอฟต์แวร์ต่อสาธารณะได้"
        ],
        answer: "อนุญาตให้ทำสำเนาเพื่อสำรองข้อมูลได้เพียงหนึ่งชุด"
    },
    {
        question: "กระบวนการใดที่ผู้ผลิตซอฟต์แวร์ใช้เพื่อยืนยันว่าโปรแกรมไม่ได้ถูกติดตั้งบนคอมพิวเตอร์เกินจำนวนที่ได้รับอนุญาตตามกฎหมาย?",
        options: [
            "System Monitoring",
            "Product Activation",
            "Digital Signature",
            "Software Encryption"
        ],
        answer: "Product Activation"
    },
    {
        question: "การเข้าถึงบัญชีธนาคารออนไลน์ของบุคคลอื่นโดยไม่ได้รับอนุญาตจัดอยู่ในประเภทใดของการขโมยข้อมูล?",
        options: [
            "Theft of Software",
            "Theft of Hardware",
            "Theft of Information",
            "Theft of Identity"
        ],
        answer: "Theft of Information"
    },
    {
        question: "การละเลยที่จะอัปเดตระบบป้องกันไวรัสและปล่อยให้คอมพิวเตอร์ติดมัลแวร์ ซึ่งนำไปสู่การขโมยข้อมูลลูกค้า ถือเป็นการละเมิดหลักการทางจริยธรรมข้อใดมากที่สุด?",
        options: [
            "Do not use a computer to steal",
            "Do not use a computer to harm others",
            "Always use a computer in ways that ensure courtesy to others",
            "Do not use a computer to gain unauthorized access"
        ],
        answer: "Do not use a computer to harm others"
    },
    {
        question: "หลักการจริยธรรมของเทคโนโลยี (Technology Ethics) ข้อใดที่เกี่ยวข้องกับการเคารพสิทธิส่วนบุคคลของผู้ใช้งาน?",
        options: [
            "Do not copy software without paying for it",
            "Do not use a computer to bear false witness",
            "Do not use other people's computer resources without authorization",
            "Do not appropriate other people's intellectual output"
        ],
        answer: "Do not use other people's computer resources without authorization"
    },
    {
        question: "พระราชบัญญัติใดที่มุ่งเน้นการสร้างความมั่นคงปลอดภัยไซเบอร์และกำหนดกลไกในการป้องกัน รับมือ และลดความเสี่ยงจากภัยคุกคามทางไซเบอร์ในภาพรวมของประเทศ?",
        options: [
            "พระราชบัญญัติว่าด้วยธุรกรรมทางอิเล็กทรอนิกส์",
            "พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA)",
            "พระราชบัญญัติการรักษาความมั่นคงปลอดภัยไซเบอร์",
            "พระราชบัญญัติการพนันออนไลน์"
        ],
        answer: "พระราชบัญญัติการรักษาความมั่นคงปลอดภัยไซเบอร์"
    },
    {
        question: "การล่วงละเมิดสิทธิส่วนบุคคลที่เกี่ยวข้องกับการเฝ้าดูหรือติดตามการใช้งานคอมพิวเตอร์และอินเทอร์เน็ตของบุคคลอื่น เรียกว่าอะไร?",
        options: [
            "Phishing",
            "Cyber Stalking",
            "Information Theft",
            "Denial of Service"
        ],
        answer: "Cyber Stalking"
    },
    {
        question: "การเข้ารหัส (Encryption) ข้อมูลส่วนบุคคลเป็นส่วนหนึ่งของการแก้ไขปัญหาด้านจริยธรรมข้อใด?",
        options: [
            "Software Theft",
            "Hardware Theft",
            "Information Privacy",
            "Intellectual Property"
        ],
        answer: "Information Privacy"
    },
    {
        question: "ข้อใดคือความแตกต่างหลักระหว่างจริยธรรม (Ethics) และกฎหมาย (Laws)?",
        options: [
            "จริยธรรมเป็นสิ่งที่บังคับใช้ทางสังคม กฎหมายเป็นความรู้สึกผิดชอบชั่วดี",
            "จริยธรรมเป็นหลักการทางสังคม กฎหมายเป็นหลักเกณฑ์ที่เป็นลายลักษณ์อักษรที่บังคับใช้",
            "จริยธรรมมีบทลงโทษที่รุนแรงกว่ากฎหมายเสมอ",
            "กฎหมายเกี่ยวข้องกับเทคโนโลยีเท่านั้น ส่วนจริยธรรมเกี่ยวข้องกับมนุษย์"
        ],
        answer: "จริยธรรมเป็นหลักการทางสังคม กฎหมายเป็นหลักเกณฑ์ที่เป็นลายลักษณ์อักษรที่บังคับใช้"
    },
    {
        question: "การนำภาพหรือข้อความที่ถูกดัดแปลงอันเป็นเท็จไปเผยแพร่ในอินเทอร์เน็ตเพื่อทำลายชื่อเสียงบุคคลอื่น เข้าข่ายการกระทำผิดตามหลักจริยธรรมข้อใด?",
        options: [
            "Do not use a computer to steal",
            "Do not use a computer to harm others",
            "Do not use a computer to bear false witness",
            "Do not copy software without paying for it"
        ],
        answer: "Do not use a computer to bear false witness"
    },
    {
        question: "การใช้โดเมนเนม (Domain Name) ที่มีชื่อเสียงของบริษัทอื่นเพื่อแสวงหาผลประโยชน์ทางการค้าเรียกว่าอะไร?",
        options: [
            "Trademark Infringement",
            "Cybersquatting",
            "Domain Hacking",
            "Phishing"
        ],
        answer: "Cybersquatting"
    },
    {
        question: "ในบริบทของกฎหมายไทย 'พระราชบัญญัติว่าด้วยธุรกรรมทางอิเล็กทรอนิกส์' มีวัตถุประสงค์หลักข้อใด?",
        options: [
            "การกำหนดอัตราภาษีสำหรับการซื้อขายออนไลน์",
            "การรับรองสถานะทางกฎหมายของข้อมูลและลายมือชื่ออิเล็กทรอนิกส์",
            "การควบคุมการใช้งานเครือข่ายอินเทอร์เน็ตของประชาชน",
            "การลงโทษผู้กระทำความผิดเกี่ยวกับคอมพิวเตอร์เท่านั้น"
        ],
        answer: "การรับรองสถานะทางกฎหมายของข้อมูลและลายมือชื่ออิเล็กทรอนิกส์"
    },
    {
        question: "ข้อใดคือความเสี่ยงหลักที่เกี่ยวข้องกับการใช้เทคโนโลยี Tracking Cookies บนเว็บไซต์?",
        options: [
            "ทำให้คอมพิวเตอร์ติดไวรัส",
            "ทำให้เครื่องช้าลงอย่างมาก",
            "การรวบรวมข้อมูลส่วนบุคคลและพฤติกรรมการใช้งานโดยไม่รู้ตัว",
            "การขโมยรหัสผ่านเข้าสู่ระบบโดยตรง"
        ],
        answer: "การรวบรวมข้อมูลส่วนบุคคลและพฤติกรรมการใช้งานโดยไม่รู้ตัว"
    },
    {
        question: "การกำหนดให้หน่วยงานของรัฐต้องมี 'แนวปฏิบัติในการรักษาความมั่นคงปลอดภัยด้านสารสนเทศ' เกี่ยวข้องกับกฎหมายใดในเอกสาร?",
        options: [
            "กฎหมายธุรกรรมทางอิเล็กทรอนิกส์",
            "กฎหมายอาญา",
            "กฎหมายลิขสิทธิ์",
            "กฎหมายป้องกันและปราบปรามการฟอกเงิน"
        ],
        answer: "กฎหมายธุรกรรมทางอิเล็กทรอนิกส์"
    },
    {
        question: "การขโมยชิ้นส่วนคอมพิวเตอร์ เช่น CPU หรือ RAM จากศูนย์ข้อมูล ถือเป็นการขโมยประเภทใด?",
        options: [
            "Theft of Software",
            "Theft of Hardware",
            "Theft of Information",
            "Theft of Identity"
        ],
        answer: "Theft of Hardware"
    },
    {
        question: "การใช้เครื่องมือขององค์กร (เช่น คอมพิวเตอร์หรืออินเทอร์เน็ต) เพื่อวัตถุประสงค์ส่วนตัวในเวลางาน ถือเป็นการละเมิดหลักการจริยธรรมข้อใด?",
        options: [
            "Do not appropriate other people's intellectual output",
            "Do not use a computer to bear false witness",
            "Do not use other people's computer resources without authorization",
            "Do not copy software without paying for it"
        ],
        answer: "Do not use other people's computer resources without authorization"
    },
    {
        question: "ผลกระทบทางสังคมที่สำคัญที่สุดอย่างหนึ่งจากการใช้เทคโนโลยีสารสนเทศอย่างไม่เหมาะสมคืออะไร?",
        options: [
            "การเกิดเทคโนโลยีใหม่ ๆ",
            "การขาดความรู้ด้านเทคโนโลยี",
            "การลดลงของการจ้างงานในอุตสาหกรรมการผลิต",
            "การแบ่งแยกทางดิจิทัล (Digital Divide)"
        ],
        answer: "การแบ่งแยกทางดิจิทัล (Digital Divide)"
    },
    {
        question: "ข้อใดคือความหมายของ 'Digital Divide'?",
        options: [
            "ช่องว่างระหว่างราคาฮาร์ดแวร์และซอฟต์แวร์",
            "ช่องว่างระหว่างผู้ที่มีและไม่มีโอกาสเข้าถึงและใช้เทคโนโลยีสารสนเทศ",
            "ความแตกต่างระหว่างภาษาโปรแกรมเก่าและใหม่",
            "ความแตกต่างระหว่างเครือข่ายมีสายและไร้สาย"
        ],
        answer: "ช่องว่างระหว่างผู้ที่มีและไม่มีโอกาสเข้าถึงและใช้เทคโนโลยีสารสนเทศ"
    },
    {
        question: "หากบริษัทต้องการให้แน่ใจว่าพนักงานจะไม่คัดลอกซอฟต์แวร์ที่ติดตั้งไว้ในเครื่องของบริษัทไปใช้ส่วนตัว บริษัทควรทำข้อใด?",
        options: [
            "ซื้อซอฟต์แวร์ที่มีราคาแพงที่สุด",
            "ติดตั้งระบบปฏิบัติการ Linux แทน Windows",
            "ตรวจสอบเงื่อนไขใน Single-User License Agreement และบังคับใช้อย่างเคร่งครัด",
            "อนุญาตให้พนักงานนำคอมพิวเตอร์ส่วนตัวมาทำงานได้"
        ],
        answer: "ตรวจสอบเงื่อนไขใน Single-User License Agreement และบังคับใช้อย่างเคร่งครัด"
    },
    
    // ====================================================================
    // 📁 ITF10-WorkEnt.pdf: ระบบสารสนเทศ อาชีพ และการรับรอง (ข้อ 21 - 40)
    // ====================================================================
    {
        question: "คุณสมบัติของสารสนเทศที่มีคุณค่า (Valuable Information) เพื่อช่วยในการตัดสินใจ ได้แก่ Accurate, Timely, Accessible และข้อใดต่อไปนี้?",
        options: [
            "Expensive (มีราคาแพง)",
            "Proprietary (เป็นกรรมสิทธิ์)",
            "Verifiable (สามารถตรวจสอบได้)",
            "Complex (มีความซับซ้อน)"
        ],
        answer: "Verifiable (สามารถตรวจสอบได้)"
    },
    {
        question: "ระบบสารสนเทศประเภทใดที่ถูกออกแบบมาเพื่อสร้างรายงานที่ถูกต้อง ทันเวลา และเป็นระเบียบ เพื่อให้ผู้จัดการใช้ในการตัดสินใจและแก้ปัญหา?",
        options: [
            "Document Management System (DMS)",
            "Transaction Processing System (TPS)",
            "Management Information System (MIS)",
            "Customer Relationship Management (CRM)"
        ],
        answer: "Management Information System (MIS)"
    },
    {
        question: "ระบบ ERP (Enterprise Resource Planning) มีวัตถุประสงค์หลักอย่างไร?",
        options: [
            "จัดการเฉพาะเอกสารภายในองค์กรเท่านั้น",
            "รวบรวมและประมวลผลรายการซื้อขายประจำวันเท่านั้น",
            "บูรณาการการไหลของข้อมูลระหว่างหน่วยงานต่างๆ ในองค์กร",
            "สร้างเว็บไซต์และแอปพลิเคชันมือถือ"
        ],
        answer: "บูรณาการการไหลของข้อมูลระหว่างหน่วยงานต่างๆ ในองค์กร"
    },
    {
        question: "อาชีพใดที่ถูกระบุว่ามีหน้าที่ในการวิเคราะห์และออกแบบระบบสารสนเทศใหม่ หรือปรับปรุงระบบเดิมเพื่อตอบสนองความต้องการของผู้ใช้?",
        options: [
            "Web Developer",
            "Security Analyst",
            "System Analyst",
            "Help Desk Specialist"
        ],
        answer: "System Analyst"
    },
    {
        question: "ใบรับรอง (Certification) ใดที่เน้นการฝึกอบรมที่ครอบคลุมและประสบการณ์ห้องปฏิบัติการเชิงปฏิบัติ (hands-on lab) ในการแฮ็กอย่างถูกกฎหมาย (Lawfully Hack)?",
        options: [
            "CompTIA Network+",
            "Certified Ethical Hacker (CEH)",
            "Cisco Certified Network Associate (CCNA)",
            "Microsoft Certified Solutions Expert (MCSE)"
        ],
        answer: "Certified Ethical Hacker (CEH)"
    },
    {
        question: "ข้อใดคือบทบาทหลักของ Web Developer?",
        options: [
            "ตรวจสอบการรักษาความปลอดภัยของเครือข่าย",
            "ติดตั้งและบำรุงรักษาฮาร์ดแวร์เซิร์ฟเวอร์",
            "ออกแบบ พัฒนา และดูแลเว็บไซต์และแอปพลิเคชันเว็บ",
            "ให้ความช่วยเหลือด้านเทคนิคแก่ผู้ใช้"
        ],
        answer: "ออกแบบ พัฒนา และดูแลเว็บไซต์และแอปพลิเคชันเว็บ"
    },
    {
        question: "ระบบสารสนเทศประเภทใดที่ช่วยให้ผู้จัดการสามารถรวบรวม วิเคราะห์ และสรุปข้อมูลในรูปแบบที่รวดเร็วและเป็นกราฟิกเพื่อใช้ในการตัดสินใจแบบไม่โครงสร้าง?",
        options: [
            "TPS",
            "DMS",
            "MIS",
            "DSS (Decision Support System)"
        ],
        answer: "DSS (Decision Support System)"
    },
    {
        question: "คุณสมบัติใดที่แสดงให้เห็นว่าข้อมูลมีความ 'ทันเวลา' (Timely)?",
        options: [
            "ข้อมูลมีความถูกต้องแม่นยำ 100%",
            "ข้อมูลสามารถเข้าถึงได้จากทุกที่",
            "ข้อมูลพร้อมใช้งานเมื่อต้องการ และไม่เก่าเกินไปสำหรับการตัดสินใจ",
            "ข้อมูลสามารถตรวจสอบแหล่งที่มาได้"
        ],
        answer: "ข้อมูลพร้อมใช้งานเมื่อต้องการ และไม่เก่าเกินไปสำหรับการตัดสินใจ"
    },
    {
        question: "ข้อใดคือลักษณะของความ 'แม่นยำ' (Accurate) ของสารสนเทศ?",
        options: [
            "ปราศจากข้อผิดพลาดและเชื่อถือได้",
            "ถูกเข้ารหัสเพื่อความปลอดภัย",
            "ถูกจัดเก็บในฐานข้อมูลขนาดใหญ่",
            "มีต้นทุนการรวบรวมต่ำ"
        ],
        answer: "ปราศจากข้อผิดพลาดและเชื่อถือได้"
    },
    {
        question: "อาชีพ 'Security Analyst' มีหน้าที่หลักเกี่ยวข้องกับข้อใด?",
        options: [
            "การสร้างแอปพลิเคชันมือถือ",
            "การป้องกันระบบเครือข่ายและข้อมูลจากภัยคุกคาม",
            "การจัดการฐานข้อมูลขนาดใหญ่",
            "การขายผลิตภัณฑ์เทคโนโลยี"
        ],
        answer: "การป้องกันระบบเครือข่ายและข้อมูลจากภัยคุกคาม"
    },
    {
        question: "ระบบ DMS (Document Management System) มีประโยชน์หลักในด้านใด?",
        options: [
            "การควบคุมการเงินและบัญชีของบริษัท",
            "การจัดการและติดตามเอกสารอิเล็กทรอนิกส์ในองค์กร",
            "การวางแผนการผลิตสินค้า",
            "การตอบสนองต่อคำถามของลูกค้าโดยอัตโนมัติ"
        ],
        answer: "การจัดการและติดตามเอกสารอิเล็กทรอนิกส์ในองค์กร"
    },
    {
        question: "ในการประกอบอาชีพด้าน IT ทักษะใดที่ถูกเน้นย้ำว่าเป็นสิ่งจำเป็นนอกเหนือจากความรู้ทางเทคนิค?",
        options: [
            "ทักษะการวาดรูป",
            "ทักษะการสื่อสารภาษาอังกฤษและการทำรายงาน",
            "ทักษะการขับรถบรรทุก",
            "ทักษะการทำอาหาร"
        ],
        answer: "ทักษะการสื่อสารภาษาอังกฤษและการทำรายงาน"
    },
    {
        question: "ข้อใดคือตัวอย่างของระบบสารสนเทศประเภท TPS (Transaction Processing System)?",
        options: [
            "ระบบพยากรณ์ยอดขายใน 5 ปีข้างหน้า",
            "ระบบลงทะเบียนเรียนและประมวลผลการซื้อขายสินค้า",
            "ระบบจัดเก็บเอกสารสัญญาของบริษัท",
            "ระบบจำลองสถานการณ์การตลาด"
        ],
        answer: "ระบบลงทะเบียนเรียนและประมวลผลการซื้อขายสินค้า"
    },
    {
        question: "ข้อใดคือความท้าทายที่บริษัทเผชิญเมื่อมีการนำเทคโนโลยีใหม่ๆ เข้ามาใช้?",
        options: [
            "ค่าใช้จ่ายในการจ้างพนักงานที่ไม่เกี่ยวข้องกับ IT",
            "การขาดแคลนพนักงานที่มีทักษะที่จำเป็นและเต็มใจเรียนรู้เทคโนโลยีใหม่",
            "ราคาคอมพิวเตอร์ที่ถูกลงอย่างต่อเนื่อง",
            "ปริมาณข้อมูลที่ลดลง"
        ],
        answer: "การขาดแคลนพนักงานที่มีทักษะที่จำเป็นและเต็มใจเรียนรู้เทคโนโลยีใหม่"
    },
    {
        question: "การรับรอง CompTIA A+ เป็นการรับรองที่เน้นในด้านใด?",
        options: [
            "การจัดการฐานข้อมูลระดับสูง",
            "การสนับสนุนด้านเทคนิคคอมพิวเตอร์และเครือข่ายพื้นฐาน",
            "การเขียนโปรแกรมด้วยภาษา Python",
        ]
    }
];

// Global variables for DOM elements and selected quiz data
const quizEl = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsEl = document.getElementById('results');
const scoreTextEl = document.getElementById('score-text');
const randomizeButton = document.getElementById('randomize-btn'); // ปุ่มสุ่มใหม่

let quizData = []; // จะเก็บคำถาม 20 ข้อที่ถูกสุ่มเลือก
const NUM_QUESTIONS_TO_SELECT = 20;

// Fisher-Yates (Knuth) Shuffle Algorithm for array shuffling
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ----------------------------------------------------------------------
// ฟังก์ชันใหม่: สุ่มเลือกคำถาม 20 ข้อจาก Master Pool และเตรียม Quiz ใหม่
// ----------------------------------------------------------------------
function selectRandomQuestions() {
    if (allQuizQuestions.length < NUM_QUESTIONS_TO_SELECT) {
        console.error(`Error: The master question pool only has ${allQuizQuestions.length} questions, but ${NUM_QUESTIONS_TO_SELECT} questions are required.`);
        quizData = [...allQuizQuestions]; // ใช้ทั้งหมดที่มี
    } else {
        // 1. สุ่มลำดับของคำถามทั้งหมด
        const shuffledQuestions = shuffleArray([...allQuizQuestions]);

        // 2. เลือก 20 ข้อแรกจากที่สุ่มแล้ว
        quizData = shuffledQuestions.slice(0, NUM_QUESTIONS_TO_SELECT);
    }
    
    // 3. รีเซ็ตสถานะหน้าจอ
    quizEl.innerHTML = ''; // ล้างคำถามเก่า
    resultsEl.classList.add('results-hidden');
    scoreTextEl.textContent = '';
    submitButton.style.display = 'block'; // แสดงปุ่มส่งคำตอบ

    // 4. สร้างแบบทดสอบใหม่
    buildQuiz();
}

// ฟังก์ชันสร้างแบบทดสอบ (ใช้ quizData ที่ถูกสุ่มมาแล้ว)
function buildQuiz() {
    quizData.forEach((questionData, index) => {
        const questionEl = document.createElement('div');
        questionEl.classList.add('question');
        questionEl.id = `q-${index}`;

        // เพิ่มลำดับข้อ
        const questionText = document.createElement('div');
        questionText.classList.add('question-text');
        questionText.textContent = `${index + 1}. ${questionData.question}`;
        questionEl.appendChild(questionText);

        const optionsEl = document.createElement('div');
        optionsEl.classList.add('options');
        
        // Shuffle options for variation 
        const shuffledOptions = shuffleArray([...questionData.options]); 

        shuffledOptions.forEach((option, optionIndex) => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question${index}`;
            radio.value = option;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            optionsEl.appendChild(label);
        });

        questionEl.appendChild(optionsEl);
        quizEl.appendChild(questionEl);
    });
}

// ฟังก์ชันแสดงผลลัพธ์
function showResults() {
    let score = 0;
    
    // ตรวจสอบทุกคำถาม
    quizData.forEach((questionData, index) => {
        const questionEl = document.getElementById(`q-${index}`);
        // ใช้ name attribute ที่เชื่อมโยงกับ index ของคำถามในชุด quizData
        const options = questionEl.querySelectorAll(`input[name="question${index}"]`); 
        let selectedOption = null;

        options.forEach(option => {
            if (option.checked) {
                selectedOption = option;
            }
        });

        // แสดงเฉลย
        const labels = questionEl.querySelectorAll('label');
        labels.forEach(label => {
            const input = label.querySelector('input');
            
            // ถ้าเป็นคำตอบที่ถูกต้อง
            if (input.value === questionData.answer) {
                label.classList.add('correct');
            }
            
            // ถ้าผู้ใช้เลือกและผิด (คำตอบที่เลือกไม่เท่ากับคำตอบที่ถูกต้อง)
            if (selectedOption && selectedOption.value === input.value && selectedOption.value !== questionData.answer) {
                label.classList.add('incorrect');
            }
        });

        // นับคะแนน
        if (selectedOption && selectedOption.value === questionData.answer) {
            score++;
        }
    });

    // แสดงคะแนนรวม
    scoreTextEl.textContent = `คุณทำถูก ${score} ข้อ จาก ${quizData.length} ข้อ`;
    resultsEl.classList.remove('results-hidden');
    submitButton.style.display = 'none'; // ซ่อนปุ่มส่งคำตอบ
    //window.scrollTo({ top: 0, behavior: 'smooth' }); // เลื่อนไปด้านบนเพื่อดูผลลัพธ์
}

// ----------------------------------------------------------------------
// เริ่มต้นสร้างแบบทดสอบ (Initial load) และผูกฟังก์ชันเข้ากับปุ่ม
// ----------------------------------------------------------------------

// 1. โหลดแบบทดสอบครั้งแรกด้วยคำถามสุ่ม 20 ข้อ
selectRandomQuestions();

// 2. ผูกฟังก์ชันเข้ากับปุ่มส่งคำตอบ
submitButton.addEventListener('click', showResults);

// 3. ผูกฟังก์ชันเข้ากับปุ่มสุ่มใหม่
randomizeButton.addEventListener('click', selectRandomQuestions);