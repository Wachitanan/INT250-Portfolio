export const IMAGES = {
  fylo: new URL('../assets/images/background/Fylo Website.png',import.meta.url).href,
  loopstudio: new URL('../assets/images/background/LoopStudio.png',import.meta.url).href,
  shortly: new URL('../assets/images/background/Shortly.png',import.meta.url).href,
  learnspace: new URL('../assets/images/background/LearnSpace.png',import.meta.url).href,
  portrait:new URL('../assets/images/profile/IMG_9105.JPG',import.meta.url).href,
  detail1:  'https://lh3.googleusercontent.com/aida-public/AB6AXuB41djXF57-sgupq6TA0XGYfAYmrO06TD6-LwZaot0mqApQ02VUNU4Kfkmx4J-lPjqmGbAdJRB5meVnKBjdtE0l7bfhEhsqJxOwM6gTDuFw3rw6XNyIWhJQ__MzEY8nm0NAy-i1OatqjyGiXu6p_mK88Ua_TIz-Oc_lpTlydAUoUGWzE_LVgVJmesIGc8cp55fB1OkGaiNtrK7_ztJQjKzt1cR0il7OuZIK6WTxJ8wwFjVgL9SFXrGThjKsjtWsqd50ZMnGUVNvvBw',
  
}

export const PROJECTS = [
  {
    id: 'fylo-app',
    title: 'Fylo-Website',
    tags: ['CSS Framework', '2026'],
    year: '2026',
    subtitle: 'หน้า Landing Page แพลตฟอร์มเก็บข้อมูลที่รองรับ Dark Mode พร้อมคอมโพเนนต์ FAQ ที่ดึงข้อมูลมาแสดงผลแบบไดนามิก',
    span: 'md:col-span-8',
    offset: '',
    aspect: 'aspect-[16/9]',
    img: new URL('../assets/images/fylo-hero.png', import.meta.url).href,
    heroImg:IMAGES.fylo,
    fullImg: new URL('../assets/images/fylo-hero.png', import.meta.url).href,
    workImg:[new URL('../assets/images/fylo-hero-2.png', import.meta.url).href,
      new URL('../assets/images/fylo-hero-3.png', import.meta.url).href,
      new URL('../assets/images/fylo-hero-4.png', import.meta.url).href],
    workImgMB:[new URL('../assets/images/mobile/mb-fylo-hero.png', import.meta.url).href,
      new URL('../assets/images/mobile/mb-fylo-hero-2.png', import.meta.url).href,
      new URL('../assets/images/mobile/mb-fylo-hero-3.png', import.meta.url).href,
      new URL('../assets/images/mobile/mb-fylo-hero-4.png', import.meta.url).href,
    ],
    brief: "Fylo Website",
    briefBody: "การพัฒนาหน้า Landing Page ของเว็บไซต์ Fylo โดยใช้เฟรมเวิร์ก Vue.js ร่วมกับ Tailwind CSS ตัวเว็บไซต์ถูกออกแบบให้รองรับการแสดงผลแบบ Responsive ในทุกขนาดหน้าจอ พร้อมฟังก์ชันสลับโหมดการทำงานระหว่าง Light Mode และ Dark Mode นอกจากนี้ยังมีการเพิ่มลูกเล่นการโต้ตอบด้วย JavaScript เช่น คอมโพเนนต์คำถามที่พบบ่อย (FAQ Accordion) และการดึงข้อมูลมาแสดงผลแบบไดนามิกด้วย v-for ตลอดจนการคำนึงถึงหลักการออกแบบเพื่อทุกคน (Accessibility) เพื่อสร้างหน้าเว็บที่สมบูรณ์และใช้งานได้จริง",
    process: [
      { num: '01', title: 'Responsive Web Design & Dark Mode', body: 'ช่วยให้เข้าใจการใช้ Tailwind CSS ในการจัดเลย์เอาต์ ปรับขนาดตัวอักษร และระยะห่างที่ยืดหยุ่นตามขนาดหน้าจอต่างๆ รวมถึงการตั้งค่าคลาสเพื่อสลับธีมสว่าง-มืดให้สีสันและคอนทราสต์อ่านง่ายในทุกสภาวะ' },
      { num: '02', title: 'Reusable Components', body: 'ได้เรียนรู้วิธีแบ่งโครงสร้างหน้าเว็บและจัดการโค้ดให้เป็นระเบียบ เช่น การแยกชุดคำถาม FAQ ออกเป็นคอมโพเนนต์ย่อย และใช้การวนลูปแสดงผลจากชุดข้อมูล (Data Array) ทำให้โค้ดสะอาดและดูแลรักษาง่าย' },
      { num: '03', title: 'Accessibility Practices', body: 'ได้ฝึกเขียน Semantic HTML, การระบุคำอธิบายรูปภาพ (Alt Text) ที่มีความหมาย, การเปิดโอกาสให้ควบคุมเว็บผ่านคีย์บอร์ด ตลอดจนการนำ ARIA Attributes (เช่น aria-expanded) มาใช้เพื่อให้ผู้พิการหรือผู้ใช้โปรแกรมอ่านหน้าจอใช้งานเว็บได้อย่างเท่าเทียม' },
    ],
    
  },
  {
    id: 'loopstudio-identity',
    title: 'Loops Studios',
    tags: ['CSS Framework', '2026'],
    year: '2023',
    subtitle: 'หน้าเว็บ Single-page สไตล์มินิมอลที่เน้นการจัดหน้าแบบ Responsive และสร้างลูกเล่นอินเทอร์แอคทีฟด้วย Tailwind CSS',
    span: 'md:col-span-4',
    offset: 'md:mt-20',
    aspect: 'aspect-[3/4]',
    img: new URL('../assets/images/loops-std.png', import.meta.url).href,
    heroImg: IMAGES.loopstudio,
    fullImg: new URL('../assets/images/loops-std.png', import.meta.url).href,
    workImg: [new URL('../assets/images/loops-std-2.png', import.meta.url).href,
      new URL('../assets/images/loops-std-3.png', import.meta.url).href,
      new URL('../assets/images/loops-std-4.png', import.meta.url).href,
      
    ],
    workImgMB:[new URL('../assets/images/mobile/mb-loops-std.png', import.meta.url).href,
      new URL('../assets/images/mobile/mb-loops-std-2.png', import.meta.url).href,
      new URL('../assets/images/mobile/mb-loops-std-3.png', import.meta.url).href,
      new URL('../assets/images/mobile/mb-loops-std-4.png', import.meta.url).href,
    ],
    brief: "Loops Studios",
    briefBody: "โปรเจกต์นี้เกี่ยวกับการสร้างหน้าเว็บไซต์ Loopstudios แบบหน้าเดียว (Single-page) ด้วย Vue.js และ Tailwind CSS โดยแบ่งหน้าเว็บออกเป็นส่วนของหน้าแรก, ฟีเจอร์เด่น, และผลงานเพื่อให้สามารถแสดงผลได้อย่างสวยงามและยืดหยุ่นในทุกขนาดหน้าจอตั้งแต่สมาร์ทโฟนไปจนถึงคอมพิวเตอร์ตั้งโต๊ะ",
    process: [
      { num: '01', title: 'Responsive Web Design',        body: 'ได้เรียนรู้และฝึกใช้ Tailwind Breakpoints ในการจัดการเลย์เอาต์ให้ยืดหยุ่นและแสดงผลได้อย่างเหมาะสมในทุกขนาดหน้าจอ ทั้งมือถือ แท็บเล็ต และเดสก์ท็อป' },
      { num: '02', title: 'Component', body: 'ช่วยให้เข้าใจโครงสร้างการแบ่งหน้าเว็บออกเป็นโมดูลย่อย ๆ ที่เป็นอิสระต่อกัน (เช่น Navbar, Feature, Creation, Footer) ซึ่งทำให้โค้ดเป็นระเบียบและง่ายต่อการนำกลับมาใช้ซ้ำ' },
      { num: '03', title: 'Interactive & Effect',      body: 'ได้ฝึกใช้ฟีเจอร์ระดับสูงของ Tailwind เช่น group-hover เอฟเฟกต์การเปลี่ยนผ่าน (Transitions) และการทำ Gradient Overlay เพื่อสร้างประสบการณ์ใช้งานที่น่าสนใจและตอบสนองต่อผู้ใช้ได้ดียิ่งขึ้น' },
    ],
  },
  {
    id: 'shortly-motion',
    title: 'Shortly-Website',
    tags: ['CSS Framework', '2026'],
    year: '2023',
    subtitle: 'หน้าเว็บระบบบริการย่อลิงก์ที่ออกแบบตามหลัก Mobile-First เน้นความยืดหยุ่นของเลย์เอาต์ตามขนาดหน้าจออย่างสมบูรณ์แบบ',
    span: 'md:col-span-5',
    offset: '',
    aspect: 'aspect-square',
    img:new URL('../assets/images/shortly.png',import.meta.url).href,
    heroImg: IMAGES.shortly,
    fullImg: new URL('../assets/images/shortly.png',import.meta.url).href,
    workImg:[new URL('../assets/images/shortly-2.png',import.meta.url).href,
    ],
    workImgMB:[new URL('../assets/images/mobile/mb-shortly.png',import.meta.url).href,
      new URL('../assets/images/mobile/mb-shortly-2.png',import.meta.url).href
    ],
    brief: 'Shortly Website',
    briefBody: 'โปรเจกต์นี้เป็นการพัฒนาหน้า Landing Page ของเว็บไซต์บริการย่อลิงก์ Shortly โดยเน้นการฝึกฝนการออกแบบเว็บที่รองรับการแสดงผลทุกอุปกรณ์ (Responsive Web Design) โครงสร้างเว็บถูกแบ่งออกเป็น 6 คอมโพเนนต์ย่อยตามสไตล์โมดูลาร์ของ Vue.js และจัดสไตล์ด้วย Tailwind CSS โดยใช้หลักการ Mobile-First ในการพัฒนา เพื่อให้หน้าเว็บจัดเลย์เอาต์ ปรับขนาด และปรับเปลี่ยนพฤติกรรม เช่น เมนูแฮมเบอร์เกอร์บนมือถือให้กลายเป็นแถบเมนูเต็มรูปแบบบนเดสก์ท็อปได้อย่างสมบูรณ์แบบ รวมถึงการทดสอบความยืดหยุ่นผ่าน Browser DevTools',
    process: [
      { num: '01', title: 'Tailwind Breakpoints & Responsive Flex Layouts',  body: 'ช่วยให้เข้าใจและฝึกฝนการใช้ระบบ Breakpoints ของ Tailwind CSS ในการควบคุมการจัดเลย์เอาต์และการจัดเรียงเนื้อหา (Flexbox) ให้ปรับเปลี่ยนได้อย่างราบรื่นและสวยงามตามขนาดหน้าจอตั้งแต่มือถือ แท็บเล็ต ไปจนถึงเดสก์ท็อป' },
      { num: '02', title: 'Mobile-First Design', body: 'ฝึกฝนการเริ่มต้นเขียนโค้ดและจัดสไตล์จากหน้าจอขนาดเล็กที่สุดก่อน แล้วจึงค่อย ๆ ขยายขีดความสามารถและปรับแต่งโครงสร้างเมื่อหน้าจอมีขนาดใหญ่ขึ้น ซึ่งเป็นมาตรฐานสากลในการพัฒนาเว็บไซต์สมัยใหม่' },
      { num: '03', title: 'Component',  body: 'เรียนรู้วิธีจัดการระบบนำทาง (Navigation/Hamburger Menu) ที่มีพฤติกรรมเปลี่ยนไปตามขนาดหน้าจอ รวมถึงการฝึกทำฟังก์ชันการตรวจสอบความถูกต้องของข้อมูล (Validation) และปุ่มกดคัดลองลิงก์ (Copy Button) ช่วยเพิ่มทักษะการสร้างเว็บที่พร้อมใช้งานจริง' },
    ],

  },
  {
    id: 'learnspace-studio',
    title: 'Learn Space',
    tags: ['CSS Framework', '2026'],
    year: '2023',
    subtitle: 'หน้าต่างควบคุมระบบการเรียนรู้สำหรับนักศึกษา ที่จัดระเบียบข้อมูลคอร์สเรียนและสถานะงานค้างให้เข้าใจง่ายในหน้าเดียว',
    span: 'md:col-span-7',
    offset: 'md:-mt-20',
    aspect: 'aspect-[16/10]',
    img: new URL('../assets/images/LearnSpace.png',import.meta.url).href,
    heroImg: IMAGES.learnspace,
    fullImg: new URL('../assets/images/LearnSpace.png',import.meta.url).href,
    workImg: [new URL('../assets/images/LearnSpace-2.png',import.meta.url).href],
    workImgMB: [new URL('../assets/images/mobile/mb-LearnSpace.png',import.meta.url).href,
      new URL('../assets/images/mobile/mb-LearnSpace-2.png',import.meta.url).href
    ],
    brief: 'Learn Space',
    briefBody: 'โครงสร้างเว็บประกอบด้วยส่วนสำคัญ เช่น เมนูหลัก (Navbar), การ์ดสรุปข้อมูลสถานะ (Overview Cards) ที่แสดงคอร์สเรียน งานค้าง และความคืบหน้า รวมถึงตารางแสดงรายละเอียดรายวิชาและสถานะการส่งงาน ตัวเว็บถูกสร้างขึ้นมาเพื่อให้ผู้เรียนสามารถติดตามและตรวจสอบข้อมูลการเรียนของตัวเองได้อย่างสะดวก รวดเร็ว และเป็นระบบในหน้าต่างเดียว',
    process: [
      { num: '01', title: 'Responsive Dashboard Layout',      body: 'ฝึกฝนการใช้ CSS Framework ในการจัดระบบ Grid และ Flexbox เพื่อสร้างหน้า Dashboard ที่ซับซ้อนให้สามารถปรับเปลี่ยนการจัดวาง และย่อ-ขยายตามขนาดหน้าจอต่างๆ เช่น สมาร์ทโฟน แท็บเล็ต และคอมพิวเตอร์ได้อย่างสมบูรณ์' },
      { num: '02', title: 'Data Visualization & Hierarchy',  body: 'ช่วยให้เข้าใจการออกแบบ UI/UX ที่ดีในการจัดกลุ่มและลำดับความสำคัญของข้อมูลปริมาณมาก เช่น การใช้การ์ดตัวเลขสรุป (KPI Cards) และแถบเปอร์เซ็นต์ความคืบหน้า (Progress Bars) เพื่อให้ผู้ใช้งานมองเห็นภาพรวมของข้อมูลได้อย่างชัดเจนในทันที' },
      { num: '03', title: 'Web Interface Precision', body: 'ฝึกการกำหนดระยะห่าง (Spacing) ขนาดตัวอักษร (Typography) และการเลือกใช้สีสันที่ตัดกันอย่างเหมาะสม เพื่อให้ระบบ Dashboard ดูเป็นมืออาชีพ อ่านง่าย และพร้อมสำหรับนำไปต่อยอดเชื่อมต่อกับระบบหลังบ้าน (Backend) จริงในอนาคต' },
    ],
  },
]

export const MARQUEE_ITEMS = [
  'Wachitanan Supho',
  '20 Years Old.',
  'Student of KMUTT',
  'IT30',
  'Second-Year Student',
]

export const EXPERIENCE = [
  { title: 'Email',    company: 'zee81241@gmail.com', period: 'Contact Email' },
  { title: 'Phone', company: '0621175264',          period: 'Personal Contact'   },
  { title: 'Instagram',      company: 'wahchixii_',          period: 'Message'   },
]

export const SKILLS = [
  'Python', 'Java', 'JavaScript',
  'CSS', 'Tailwindcss', 'Html'
]
